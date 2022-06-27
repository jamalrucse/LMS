<?php

namespace App\Http\Controllers\Employee;

use App\Models\LeaveType;
use App\Models\LeaveRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\LeaveBalance;

class LeaveRequestController extends Controller
{
    public function index()
    {
        $employee = currentEmployee();

        $leave_requests = LeaveRequest::with(['employee.user', 'employee.team', 'company.user', 'leaveType'])
            ->where('employee_id', $employee->id)
            ->where('company_id', $employee->company_id)
            ->latest()
            ->paginate(10);

        return inertia('employee/leaveRequest/index', [
            'leaveRequests' => $leave_requests,
        ]);
    }

    public function create()
    {
        $leaveTypes = LeaveType::where('company_id', currentUser()->employee->company_id)->get();

        return inertia('employee/leaveRequest/create', [
            'leaveTypes' => $leaveTypes,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'start' => 'required',
            'end' => 'required',
            'leave_type_id' => 'required',
            'reason' => 'required',
        ], [
            'leave_type_id.required' => 'Leave type is required',
        ]);

        $employee = currentEmployee();

        LeaveRequest::create([
            'company_id' => $employee->company_id,
            'employee_id' => $employee->id,
            'leave_type_id' => $request->leave_type_id,
            'start' => $request->start,
            'end' => $request->end,
            'days' => diffBetweenDays($request->start, $request->end),
            'reason' => $request->reason,
        ]);

        session()->flash('success', 'Leave request sent successfully!');
        return back();
    }

    public function edit(LeaveRequest $leave_request)
    {
        $leave_types = LeaveType::where('company_id', currentUser()->employee->company_id)->get();

        return inertia('employee/leaveRequest/edit', [
            'leaveRequest' => $leave_request,
            'leaveTypes' =>  $leave_types
        ]);
    }

    public function update(Request $request, LeaveRequest $leave_request)
    {
        $request->validate([
            'start' => 'required',
            'end' => 'required',
            'leave_type_id' => 'required',
            'reason' => 'required',
        ], [
            'leave_type_id.required' => 'Leave type is required',
        ]);

        $leave_request->update([
            'leave_type_id' => $request->leave_type_id,
            'start' => $request->start,
            'end' => $request->end,
            'days' => diffBetweenDays($request->start, $request->end),
            'reason' => $request->reason,
        ]);

        session()->flash('success', 'Leave request updated successfully!');
        return redirect_to('employee.leave.request.index');
    }

    public function destroy(LeaveRequest $leave_request)
    {
        $leave_request->delete();

        session()->flash('success', 'Leave Request deleted successfully');
        return back();
    }

    public function leaveTypeBalance(LeaveType $leaveType)
    {
        $leave_balance = LeaveBalance::where('employee_id', currentEmployee()->id)
            ->where('leave_type_id', $leaveType->id)
            ->first();

        return $leave_balance;
    }
}
