"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9442],{8194:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(3645),n=a.n(l)()((function(e){return e[1]}));n.push([e.id,".gutters-sm[data-v-6bca8422]{margin-left:-8px;margin-right:-8px}.gutters-sm>.col[data-v-6bca8422],.gutters-sm>[class*=col-][data-v-6bca8422]{padding-left:8px;padding-right:8px}.mb-3[data-v-6bca8422],.my-3[data-v-6bca8422]{margin-bottom:1rem!important}.bg-gray-300[data-v-6bca8422]{background-color:#e2e8f0}.h-100[data-v-6bca8422]{height:100%!important}.shadow-none[data-v-6bca8422]{box-shadow:none!important}",""]);const r=n},9442:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ne});var l=a(821);var n=function(e){return(0,l.pushScopeId)("data-v-6bca8422"),e=e(),(0,l.popScopeId)(),e},r={class:"row gutters-sm p-4"},s={class:"col-md-4 mb-3"},o={class:"card"},c={class:"card-body"},d={class:"d-flex flex-column align-items-center text-center"},i=["src"],m={class:"mt-3"},u={class:"text-secondary mb-1 text-uppercase"},p={class:"badge badge-primary"},v={class:"card mt-3"},E={class:"list-group list-group-flush"},N={class:"list-group-item flex-wrap"},y={class:"mb-0"},V={class:"list-group-item flex-wrap"},g={class:"mb-0"},b={class:"list-group-item flex-wrap"},_={class:"mb-0"},h={class:"col-md-8"},f={class:"card mb-3"},D={class:"card-body"},S={class:"row"},k={class:"col-sm-3"},w={class:"mb-0"},x={class:"col-sm-9 text-secondary"},B=n((function(){return(0,l.createElementVNode)("hr",null,null,-1)})),C={class:"row"},j={class:"col-sm-3"},L={class:"mb-0"},q={class:"col-sm-9 text-secondary"},F=n((function(){return(0,l.createElementVNode)("hr",null,null,-1)})),R={class:"row"},P={class:"col-sm-3"},Z={class:"mb-0"},A={class:"col-sm-9 text-secondary"},I=n((function(){return(0,l.createElementVNode)("hr",null,null,-1)})),O={class:"row"},T={class:"col-sm-3"},U={class:"mb-0"},Y={class:"col-sm-9 text-secondary"},$=n((function(){return(0,l.createElementVNode)("hr",null,null,-1)})),H={class:"row"},J={class:"col-sm-3"},z={class:"mb-0"},G={class:"col-sm-9 text-secondary"},K=n((function(){return(0,l.createElementVNode)("hr",null,null,-1)})),M={class:"row"},Q={class:"col-sm-3"},W={class:"mb-0"},X={class:"col-sm-9 text-secondary"},ee={class:"row mt-4"},te={class:"col-sm-12"},ae={class:"row gutters-sm"},le={class:"col-sm-12 mb-3"},ne={class:"card h-100"},re={class:"card-body"},se={class:"d-flex align-items-center mb-3"},oe={class:"table table-bordered"},ce={class:"h5"};const de={props:{user:Object,summary:Object,leave_balances:Array},methods:{deleteEmployee:function(e){var t=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.isConfirmed&&t.$inertia.delete(route("employees.destroy",e))}))}}};var ie=a(3379),me=a.n(ie),ue=a(8194),pe={insert:"head",singleton:!1};me()(ue.Z,pe);ue.Z.locals;var ve=a(3744);const Ee={props:{user:Object,summary:Object,leave_balances:Array},components:{EmployeeDetails:(0,ve.Z)(de,[["render",function(e,t,a,n,de,ie){var me=(0,l.resolveComponent)("DeleteIcon"),ue=(0,l.resolveDirective)("tooltip");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createElementVNode)("div",r,[(0,l.createElementVNode)("div",s,[(0,l.createElementVNode)("div",o,[(0,l.createElementVNode)("div",c,[(0,l.createElementVNode)("div",d,[(0,l.createElementVNode)("img",{src:a.user.avatar,alt:"logo",class:"rounded-circle",width:"150"},null,8,i),(0,l.createElementVNode)("div",m,[(0,l.createElementVNode)("h4",null,(0,l.toDisplayString)(a.user.name),1),(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("p",u,[(0,l.createElementVNode)("span",p,(0,l.toDisplayString)(a.user.role),1)])),[[ue,e.__("Role")]])])])])]),(0,l.createElementVNode)("div",v,[(0,l.createElementVNode)("ul",E,[(0,l.createElementVNode)("li",N,[(0,l.createElementVNode)("a",{onClick:t[0]||(t[0]=function(t){return e.details("pending_leave")}),href:"javascript:void(0)",class:"d-flex justify-content-between align-items-center text-dark"},[(0,l.createElementVNode)("h5",y,(0,l.toDisplayString)(e.__("Pending Leave Requests")),1),(0,l.createElementVNode)("b",null,(0,l.toDisplayString)(a.summary.total_pending_leave_requests),1)])]),(0,l.createElementVNode)("li",V,[(0,l.createElementVNode)("a",{onClick:t[1]||(t[1]=function(t){return e.details("approve_leave")}),href:"javascript:void(0)",class:"d-flex justify-content-between align-items-center text-dark"},[(0,l.createElementVNode)("h5",g,(0,l.toDisplayString)(e.__("Approved Leave Requests")),1),(0,l.createElementVNode)("b",null,(0,l.toDisplayString)(a.summary.total_approved_leave_requests),1)])]),(0,l.createElementVNode)("li",b,[(0,l.createElementVNode)("a",{onClick:t[2]||(t[2]=function(t){return e.details("reject_leave")}),href:"javascript:void(0)",class:"d-flex justify-content-between align-items-center text-dark"},[(0,l.createElementVNode)("h5",_,(0,l.toDisplayString)(e.__("Rejected Leave Requests")),1),(0,l.createElementVNode)("b",null,(0,l.toDisplayString)(a.summary.total_rejected_leave_requests),1)])])])])]),(0,l.createElementVNode)("div",h,[(0,l.createElementVNode)("div",f,[(0,l.createElementVNode)("div",D,[(0,l.createElementVNode)("div",S,[(0,l.createElementVNode)("div",k,[(0,l.createElementVNode)("h6",w,(0,l.toDisplayString)(e.__("Name")),1)]),(0,l.createElementVNode)("div",x,(0,l.toDisplayString)(a.user.name),1)]),B,(0,l.createElementVNode)("div",C,[(0,l.createElementVNode)("div",j,[(0,l.createElementVNode)("h6",L,(0,l.toDisplayString)(e.__("Email")),1)]),(0,l.createElementVNode)("div",q,(0,l.toDisplayString)(a.user.email),1)]),F,(0,l.createElementVNode)("div",R,[(0,l.createElementVNode)("div",P,[(0,l.createElementVNode)("h6",Z,(0,l.toDisplayString)(e.__("Phone")),1)]),(0,l.createElementVNode)("div",A,(0,l.toDisplayString)(a.user.employee.phone),1)]),I,a.user.employee&&a.user.employee.team?((0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,{key:0},[(0,l.createElementVNode)("div",O,[(0,l.createElementVNode)("div",T,[(0,l.createElementVNode)("h6",U,(0,l.toDisplayString)(e.__("Team")),1)]),(0,l.createElementVNode)("div",Y,(0,l.toDisplayString)(a.user.employee.team.name),1)]),$],64)):(0,l.createCommentVNode)("",!0),(0,l.createElementVNode)("div",H,[(0,l.createElementVNode)("div",J,[(0,l.createElementVNode)("h6",z,(0,l.toDisplayString)(e.__("Joining Date")),1)]),(0,l.createElementVNode)("div",G,(0,l.toDisplayString)(e.timeFromNow(a.user.created_at)),1)]),K,(0,l.createElementVNode)("div",M,[(0,l.createElementVNode)("div",Q,[(0,l.createElementVNode)("h6",W,(0,l.toDisplayString)(e.__("Last Profile Update")),1)]),(0,l.createElementVNode)("div",X,(0,l.toDisplayString)(e.timeFromNow(a.user.updated_at)),1)]),(0,l.createElementVNode)("div",ee,[(0,l.createElementVNode)("div",te,[(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("button",{onClick:t[3]||(t[3]=function(e){return ie.deleteEmployee(a.user.id)}),class:"btn"},[(0,l.createVNode)(me)])),[[ue,"Delete"]])])])])])])]),(0,l.createElementVNode)("div",ae,[(0,l.createElementVNode)("div",le,[(0,l.createElementVNode)("div",ne,[(0,l.createElementVNode)("div",re,[(0,l.createElementVNode)("h4",se,(0,l.toDisplayString)(e.__("Leave Balance")),1),(0,l.createElementVNode)("table",oe,[(0,l.createElementVNode)("tr",ce,[(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Leave Type")),1),(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Remaining Days")),1),(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Used Days")),1),(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Total Days")),1)]),((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(a.leave_balances,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("tr",{key:e.id},[(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.leave_type.name),1),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.remaining_days),1),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.used_days),1),(0,l.createElementVNode)("td",null,(0,l.toDisplayString)(e.total_days),1)])})),128))])])])])])],64)}],["__scopeId","data-v-6bca8422"]])},mounted:function(){this.checkPagePermission("owner")}},Ne=(0,ve.Z)(Ee,[["render",function(e,t,a,n,r,s){var o=(0,l.resolveComponent)("Head"),c=(0,l.resolveComponent)("EmployeeDetails",!0);return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(o,{title:a.user.name},null,8,["title"]),(0,l.createVNode)(c,{user:a.user,summary:a.summary,leaveBalances:a.leave_balances},null,8,["user","summary","leaveBalances"])],64)}]])}}]);