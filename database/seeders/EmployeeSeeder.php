<?php

namespace Database\Seeders;

use App\Models\Team;
use App\Models\User;
use App\Models\Company;
use App\Models\Employee;
use App\Models\LeaveType;
use App\Models\LeaveBalance;
use Illuminate\Database\Seeder;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Employee
        $user = User::create([
            'name' => 'Ariful Islam',
            'email' => 'arif@mail.com',
            'password' => bcrypt('password'),
            'avatar' => 'admin/img/default-user.png',
            'role' => 'employee',
        ]);

        $company = Company::inRandomOrder()->first();
        $team = $company->teams->first();
        $employee = Employee::create([
            'user_id' => $user->id,
            'company_id' => $company->id,
            'team_id' => $team->id,
        ]);

        $leave_types = LeaveType::where('company_id', $company->id)->get();
        foreach ($leave_types as $leave_type) {
            LeaveBalance::create([
                'employee_id' => $employee->id,
                'leave_type_id' => $leave_type->id,
                'total_days' => $leave_type->balance,
            ]);
        }

        // Employee 2
        $user2 = User::create([
            'name' => 'Employee',
            'email' => 'employee@mail.com',
            'password' => bcrypt('password'),
            'avatar' => 'admin/img/default-user.png',
            'role' => 'employee',
        ]);

        $company2 = Company::inRandomOrder()->first();
        $team2 = $company->teams->first();
        $employee = Employee::create([
            'user_id' => $user2->id,
            'company_id' => $company2->id,
            'team_id' => $team2->id,
        ]);

        $leave_types2 = LeaveType::where('company_id', $company2->id)->get();
        foreach ($leave_types2 as $leave_type) {
            LeaveBalance::create([
                'employee_id' => $employee->id,
                'leave_type_id' => $leave_type->id,
                'total_days' => $leave_type->balance,
            ]);
        }
    }
}
