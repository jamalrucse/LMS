"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2849],{4489:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(3645),a=n.n(l)()((function(e){return e[1]}));a.push([e.id,".avatar-img[data-v-72d3ba12]{height:60px;-o-object-fit:cover;object-fit:cover;width:60px}.leave-type-color[data-v-72d3ba12]{border-radius:30px;color:#fff;font-weight:500;padding:2px 5px}",""]);const o=a},2849:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var l=n(821),a=function(e){return(0,l.pushScopeId)("data-v-72d3ba12"),e=e(),(0,l.popScopeId)(),e},o={class:"row justify-content-center"},r={class:"col-12"},s={class:"card"},c={class:"card-header border-0"},i={class:"d-flex justify-content-between"},d={class:"card-title"},u=a((function(){return(0,l.createElementVNode)("i",{class:"fa-solid fa-plus"},null,-1)})),m=[a((function(){return(0,l.createElementVNode)("i",{class:"fa-solid fa-filter"},null,-1)}))],p=a((function(){return(0,l.createElementVNode)("i",{class:"fa-solid fa-times"},null,-1)})),v={key:0,class:"card-body border-bottom d-flex justify-content-between"},f={class:"w-25"},y=a((function(){return(0,l.createElementVNode)("label",null,"Leave Type",-1)})),g={value:""},h=["value"],N={class:"ml-auto w-25"},V=a((function(){return(0,l.createElementVNode)("label",null,"Status",-1)})),E={value:""},k={value:"pending"},D={value:"approved"},b={value:"rejected"},_={class:"card-body table-responsive p-0"},B={class:"table table-valign-middle"},C=["src"],S=(0,l.createTextVNode)(") "),q={href:"#"},w={class:"text-danger ml-1"},R=(0,l.createTextVNode)(") "),x={class:"d-flex"},L={key:1},T={colspan:"20",class:"text-center"};var F=n(9418),j=n(3237),M=n(7484),A=n.n(M);const Y={props:{leaveRequests:Array,leaveTypes:Array,filters:Object},components:{Pagination:F.Z,Actions:j.Z},data:function(){return{showFilter:!1,form:{status:this.filters.status,leave_type:this.filters.leave_type}}},methods:{getBadgeType:function(e){return"pending"==e?"badge-warning":"approved"==e?"badge-success":"badge-danger"},startDate:function(e){return A()(e).format("DD MMM, YYYY")},endDate:function(e){return A()(e).format("DD MMM, YYYY")},filteringData:function(){console.log(this.showFilter),this.showFilter=!this.showFilter,console.log(this.showFilter),localStorage.setItem("companyLeaveRequestList",this.showFilter)},filterData:function(){this.$inertia.get(route("company.leaveRequests.index"),{status:this.form.status,leave_type:this.form.leave_type,team:this.form.team},{preserveState:!0,replace:!0})}},mounted:function(){this.checkPagePermission("company"),this.showFilter="true"==localStorage.getItem("companyLeaveRequestList")}};var Z=n(3379),I=n.n(Z),P=n(4489),z={insert:"head",singleton:!1};I()(P.Z,z);P.Z.locals;const H=(0,n(3744).Z)(Y,[["render",function(e,t,n,a,F,j){var M=(0,l.resolveComponent)("Head"),A=(0,l.resolveComponent)("Link"),Y=(0,l.resolveComponent)("Actions"),Z=(0,l.resolveComponent)("Pagination"),I=(0,l.resolveDirective)("tooltip");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(M,{title:e.__("Leave Request List")},null,8,["title"]),(0,l.createElementVNode)("div",o,[(0,l.createElementVNode)("div",r,[(0,l.createElementVNode)("div",s,[(0,l.createElementVNode)("div",c,[(0,l.createElementVNode)("div",i,[(0,l.createElementVNode)("h3",d,(0,l.toDisplayString)(e.__("Leave Request List")),1),(0,l.createElementVNode)("div",null,[(0,l.createVNode)(A,{href:e.route("company.leaveRequests.create"),class:"btn btn-primary"},{default:(0,l.withCtx)((function(){return[u,(0,l.createTextVNode)(" "+(0,l.toDisplayString)(e.__("Create a new request")),1)]})),_:1},8,["href"]),(0,l.createElementVNode)("button",{class:"btn btn-secondary ml-2",onClick:t[0]||(t[0]=function(){return j.filteringData&&j.filteringData.apply(j,arguments)})},m),(0,l.createVNode)(A,{href:"admins",class:"btn btn-danger ml-2"},{default:(0,l.withCtx)((function(){return[p,(0,l.createTextVNode)(" "+(0,l.toDisplayString)(e.__("Clear")),1)]})),_:1})])])]),F.showFilter?((0,l.openBlock)(),(0,l.createElementBlock)("div",v,[(0,l.createElementVNode)("div",f,[y,(0,l.withDirectives)((0,l.createElementVNode)("select",{class:"form-control","onUpdate:modelValue":t[1]||(t[1]=function(e){return F.form.leave_type=e}),onChange:t[2]||(t[2]=function(){return j.filterData&&j.filterData.apply(j,arguments)})},[(0,l.createElementVNode)("option",g,(0,l.toDisplayString)(e.__("All")),1),((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.leaveTypes,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("option",{value:e.id,key:e.id},(0,l.toDisplayString)(e.name),9,h)})),128))],544),[[l.vModelSelect,F.form.leave_type]])]),(0,l.createElementVNode)("div",N,[V,(0,l.withDirectives)((0,l.createElementVNode)("select",{class:"form-control","onUpdate:modelValue":t[3]||(t[3]=function(e){return F.form.status=e}),onChange:t[4]||(t[4]=function(){return j.filterData&&j.filterData.apply(j,arguments)})},[(0,l.createElementVNode)("option",E,(0,l.toDisplayString)(e.__("All")),1),(0,l.createElementVNode)("option",k,(0,l.toDisplayString)(e.__("Pending")),1),(0,l.createElementVNode)("option",D,(0,l.toDisplayString)(e.__("Approved")),1),(0,l.createElementVNode)("option",b,(0,l.toDisplayString)(e.__("Rejected")),1)],544),[[l.vModelSelect,F.form.status]])])])):(0,l.createCommentVNode)("",!0),(0,l.createElementVNode)("div",_,[(0,l.createElementVNode)("table",B,[(0,l.createElementVNode)("thead",null,[(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Employee")),1),(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Leave Type")),1),(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Team")),1),(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Date")),1),(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Status")),1),(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Action")),1)])]),(0,l.createElementVNode)("tbody",null,[n.leaveRequests&&n.leaveRequests.data.length?((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,{key:0},(0,l.renderList)(n.leaveRequests.data,(function(t,n){return(0,l.openBlock)(),(0,l.createElementBlock)("tr",{key:n},[(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("img",{src:t.employee.user.avatar,alt:"Product 1",class:"img-circle img-size-32 mr-2"},null,8,C),(0,l.createTextVNode)(" "+(0,l.toDisplayString)(t.employee.user.name)+" (",1),(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("small",null,[(0,l.createTextVNode)((0,l.toDisplayString)(t.company.user.name),1)])),[[I,"Company Name"]]),S]),(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("span",{style:(0,l.normalizeStyle)({background:t.leave_type.color,border:"2px solid "+t.leave_type.color}),class:"leave-type-color"},(0,l.toDisplayString)(t.leave_type.name),5)]),(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("a",q,(0,l.toDisplayString)(t.employee.team.name),1)]),(0,l.createElementVNode)("td",null,[(0,l.createTextVNode)((0,l.toDisplayString)(j.startDate(t.start))+" - "+(0,l.toDisplayString)(j.endDate(t.end))+" (",1),(0,l.createElementVNode)("span",w,(0,l.toDisplayString)(t.days)+" "+(0,l.toDisplayString)(e.pluralize(t.days,"Day")),1),R]),(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("span",{class:(0,l.normalizeClass)(["toCapitalFirst badge",j.getBadgeType(t.status)])},(0,l.toDisplayString)(t.status),3)]),(0,l.createElementVNode)("td",x,[(0,l.createVNode)(Y,{leaveRequest:t},null,8,["leaveRequest"])])])})),128)):((0,l.openBlock)(),(0,l.createElementBlock)("tr",L,[(0,l.createElementVNode)("td",T,[(0,l.createElementVNode)("h6",null,(0,l.toDisplayString)(e.__("No Data Found")),1)])]))])]),(0,l.createVNode)(Z,{links:n.leaveRequests.links},null,8,["links"])])])])])],64)}],["__scopeId","data-v-72d3ba12"]]),$=H},3237:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(821);const a={props:{leaveRequest:{type:Object,required:!0}},methods:{statusChange:function(e){this.$inertia.post(route("company.leaveRequests.status"),{id:this.leaveRequest.id,status:e})},editData:function(e){this.$inertia.get(route("company.leaveRequests.edit",e))},deleteData:function(){var e=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed&&e.$inertia.delete(route("company.leaveRequests.destroy",e.leaveRequest.id),{preserveScroll:!0})}))}}};const o=(0,n(3744).Z)(a,[["render",function(e,t,n,a,o,r){var s=(0,l.resolveComponent)("CheckIcon"),c=(0,l.resolveComponent)("CrossIcon"),i=(0,l.resolveComponent)("EditIcon"),d=(0,l.resolveComponent)("DeleteIcon"),u=(0,l.resolveDirective)("tooltip");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,["pending"==n.leaveRequest.status||"rejected"==n.leaveRequest.status?(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("button",{key:0,onClick:t[0]||(t[0]=function(e){return r.statusChange("approved")}),class:"btn btn-sm"},[(0,l.createVNode)(s)])),[[u,e.__("Accept Request")]]):(0,l.createCommentVNode)("",!0),"pending"==n.leaveRequest.status||"approved"==n.leaveRequest.status?(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("button",{key:1,onClick:t[1]||(t[1]=function(e){return r.statusChange("rejected")}),class:"btn btn-sm"},[(0,l.createVNode)(c)])),[[u,e.__("Reject Request")]]):(0,l.createCommentVNode)("",!0),"pending"==n.leaveRequest.status?(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("button",{key:2,onClick:t[2]||(t[2]=function(e){return r.editData(n.leaveRequest.id)}),class:"btn btn-sm"},[(0,l.createVNode)(i)])),[[u,e.__("Edit Request")]]):(0,l.createCommentVNode)("",!0),(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("button",{onClick:t[3]||(t[3]=function(e){return r.deleteData()}),class:"btn btn-sm"},[(0,l.createVNode)(d)])),[[u,e.__("Delete Request")]])],64)}]])},9418:(e,t,n)=>{n.d(t,{Z:()=>s});var l=n(821),a={class:"pagination justify-content-center"},o=["innerHTML"];const r={props:{links:{type:Array,required:!0}}};const s=(0,n(3744).Z)(r,[["render",function(e,t,n,r,s,c){var i=(0,l.resolveComponent)("Link");return(0,l.openBlock)(),(0,l.createElementBlock)("nav",null,[(0,l.createElementVNode)("ul",a,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.links,(function(e,t){return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[e.url?((0,l.openBlock)(),(0,l.createElementBlock)("li",{class:(0,l.normalizeClass)(["page-item",{active:e.active}]),key:t},[(0,l.createVNode)(i,{class:"page-link d-inline",href:e.url,innerHTML:e.label},null,8,["href","innerHTML"])],2)):((0,l.openBlock)(),(0,l.createElementBlock)("li",{class:"page-item disabled",key:t,style:{"margin-top":"-7px"}},[(0,l.createElementVNode)("a",{class:"page-link",href:"#",innerHTML:e.label},null,8,o)]))],64)})),256))])])}]])}}]);