"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77],{2777:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(3645),a=n.n(l)()((function(e){return e[1]}));a.push([e.id,".avatar-img[data-v-610d435c]{height:60px;-o-object-fit:cover;object-fit:cover;width:60px}.leave-type-color[data-v-610d435c]{border-radius:30px;color:#fff;font-weight:500;padding:2px 5px}",""]);const o=a},77:(e,t,n)=>{n.r(t),n.d(t,{default:()=>G});var l=n(821),a=function(e){return(0,l.pushScopeId)("data-v-610d435c"),e=e(),(0,l.popScopeId)(),e},o={class:"row justify-content-center pt-3"},r={class:"col-12"},s={class:"card"},c={class:"card-header border-0"},i={class:"d-flex justify-content-between"},d={class:"card-title"},u=a((function(){return(0,l.createElementVNode)("i",{class:"fa-solid fa-plus"},null,-1)})),p=a((function(){return(0,l.createElementVNode)("i",{class:"fa-solid fa-filter"},null,-1)})),m=(0,l.createTextVNode)("   "),v={key:0},y={key:1},f=a((function(){return(0,l.createElementVNode)("i",{class:"fa-solid fa-times"},null,-1)})),g={key:0,class:"card-body border-bottom d-flex justify-content-between"},h={class:"w-25"},k=a((function(){return(0,l.createElementVNode)("label",null,"Leave Type",-1)})),N={value:""},V=["value"],E={class:"ml-auto w-25"},D=a((function(){return(0,l.createElementVNode)("label",null,"Status",-1)})),_={value:""},b={value:"pending"},B={value:"approved"},C={value:"rejected"},S={class:"card-body table-responsive p-0"},w={class:"table table-valign-middle"},q=["src"],R=(0,l.createTextVNode)(") "),x={href:"#"},T={class:"text-danger ml-1"},F=(0,l.createTextVNode)(") "),L={class:"d-flex"},j={key:1},M={colspan:"20",class:"text-center"};var A=n(9418),Y=n(9473),Z=n(7484),I=n.n(Z);const H={props:{leaveRequests:Array,leaveTypes:Array,filters:Object},components:{Pagination:A.Z,Actions:Y.Z},data:function(){return{showFilter:!1,form:{status:this.filters.status,leave_type:this.filters.leave_type}}},methods:{getBadgeType:function(e){return"pending"==e?"badge-warning":"approved"==e?"badge-success":"badge-danger"},startDate:function(e){return I()(e).format("DD MMM, YYYY")},endDate:function(e){return I()(e).format("DD MMM, YYYY")},filteringData:function(){console.log(this.showFilter),this.showFilter=!this.showFilter,console.log(this.showFilter),localStorage.setItem("companyLeaveRequestList",this.showFilter)},filterData:function(){this.$inertia.get(route("company.leaveRequests.index"),{status:this.form.status,leave_type:this.form.leave_type,team:this.form.team},{preserveState:!0,replace:!0})}},mounted:function(){this.checkPagePermission("company"),this.showFilter="true"==localStorage.getItem("companyLeaveRequestList")}};var P=n(3379),z=n.n(P),$=n(2777),O={insert:"head",singleton:!1};z()($.Z,O);$.Z.locals;const U=(0,n(3744).Z)(H,[["render",function(e,t,n,a,A,Y){var Z=(0,l.resolveComponent)("Head"),I=(0,l.resolveComponent)("Link"),H=(0,l.resolveComponent)("Actions"),P=(0,l.resolveComponent)("Pagination"),z=(0,l.resolveDirective)("tooltip");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(Z,{title:e.__("Leave Request List")},null,8,["title"]),(0,l.createElementVNode)("div",o,[(0,l.createElementVNode)("div",r,[(0,l.createElementVNode)("div",s,[(0,l.createElementVNode)("div",c,[(0,l.createElementVNode)("div",i,[(0,l.createElementVNode)("h3",d,(0,l.toDisplayString)(e.__("Leave Request List")),1),(0,l.createElementVNode)("div",null,[(0,l.createVNode)(I,{href:e.route("company.leaveRequests.create"),class:"btn btn-primary"},{default:(0,l.withCtx)((function(){return[u,(0,l.createTextVNode)(" "+(0,l.toDisplayString)(e.__("Create a new request")),1)]})),_:1},8,["href"]),(0,l.createElementVNode)("button",{class:"btn btn-secondary ml-2",onClick:t[0]||(t[0]=function(){return Y.filteringData&&Y.filteringData.apply(Y,arguments)})},[p,m,A.showFilter?((0,l.openBlock)(),(0,l.createElementBlock)("span",y,(0,l.toDisplayString)(e.__("Hide Filter")),1)):((0,l.openBlock)(),(0,l.createElementBlock)("span",v,(0,l.toDisplayString)(e.__("Show Filter")),1))]),A.form.status||A.form.leave_type?((0,l.openBlock)(),(0,l.createBlock)(I,{key:0,href:e.route("company.leaveRequests.index"),class:"btn btn-danger ml-2"},{default:(0,l.withCtx)((function(){return[f,(0,l.createTextVNode)(" "+(0,l.toDisplayString)(e.__("Clear")),1)]})),_:1},8,["href"])):(0,l.createCommentVNode)("",!0)])])]),A.showFilter?((0,l.openBlock)(),(0,l.createElementBlock)("div",g,[(0,l.createElementVNode)("div",h,[k,(0,l.withDirectives)((0,l.createElementVNode)("select",{class:"form-control","onUpdate:modelValue":t[1]||(t[1]=function(e){return A.form.leave_type=e}),onChange:t[2]||(t[2]=function(){return Y.filterData&&Y.filterData.apply(Y,arguments)})},[(0,l.createElementVNode)("option",N,(0,l.toDisplayString)(e.__("All")),1),((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.leaveTypes,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("option",{value:e.id,key:e.id},(0,l.toDisplayString)(e.name),9,V)})),128))],544),[[l.vModelSelect,A.form.leave_type]])]),(0,l.createElementVNode)("div",E,[D,(0,l.withDirectives)((0,l.createElementVNode)("select",{class:"form-control","onUpdate:modelValue":t[3]||(t[3]=function(e){return A.form.status=e}),onChange:t[4]||(t[4]=function(){return Y.filterData&&Y.filterData.apply(Y,arguments)})},[(0,l.createElementVNode)("option",_,(0,l.toDisplayString)(e.__("All")),1),(0,l.createElementVNode)("option",b,(0,l.toDisplayString)(e.__("Pending")),1),(0,l.createElementVNode)("option",B,(0,l.toDisplayString)(e.__("Approved")),1),(0,l.createElementVNode)("option",C,(0,l.toDisplayString)(e.__("Rejected")),1)],544),[[l.vModelSelect,A.form.status]])])])):(0,l.createCommentVNode)("",!0),(0,l.createElementVNode)("div",S,[(0,l.createElementVNode)("table",w,[(0,l.createElementVNode)("thead",null,[(0,l.createElementVNode)("tr",null,[(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Employee")),1),(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Leave Type")),1),(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Team")),1),(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Date")),1),(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Status")),1),(0,l.createElementVNode)("th",null,(0,l.toDisplayString)(e.__("Action")),1)])]),(0,l.createElementVNode)("tbody",null,[n.leaveRequests&&n.leaveRequests.data.length?((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,{key:0},(0,l.renderList)(n.leaveRequests.data,(function(t,n){return(0,l.openBlock)(),(0,l.createElementBlock)("tr",{key:n},[(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("img",{src:t.employee.user.avatar,alt:"Product 1",class:"img-circle img-size-32 mr-2"},null,8,q),(0,l.createTextVNode)(" "+(0,l.toDisplayString)(t.employee.user.name)+" (",1),(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("small",null,[(0,l.createTextVNode)((0,l.toDisplayString)(t.company.user.name),1)])),[[z,"Company Name"]]),R]),(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("span",{style:(0,l.normalizeStyle)({background:t.leave_type.color,border:"2px solid "+t.leave_type.color}),class:"leave-type-color"},(0,l.toDisplayString)(t.leave_type.name),5)]),(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("a",x,(0,l.toDisplayString)(t.employee.team.name),1)]),(0,l.createElementVNode)("td",null,[(0,l.createTextVNode)((0,l.toDisplayString)(Y.startDate(t.start))+" - "+(0,l.toDisplayString)(Y.endDate(t.end))+" (",1),(0,l.createElementVNode)("span",T,(0,l.toDisplayString)(t.days)+" "+(0,l.toDisplayString)(e.pluralize(t.days,"Day")),1),F]),(0,l.createElementVNode)("td",null,[(0,l.createElementVNode)("span",{class:(0,l.normalizeClass)(["toCapitalFirst badge",Y.getBadgeType(t.status)])},(0,l.toDisplayString)(t.status),3)]),(0,l.createElementVNode)("td",L,[(0,l.createVNode)(H,{leaveRequest:t},null,8,["leaveRequest"])])])})),128)):((0,l.openBlock)(),(0,l.createElementBlock)("tr",j,[(0,l.createElementVNode)("td",M,[(0,l.createElementVNode)("h6",null,(0,l.toDisplayString)(e.__("No Data Found")),1)])]))])]),(0,l.createVNode)(P,{links:n.leaveRequests.links},null,8,["links"])])])])])],64)}],["__scopeId","data-v-610d435c"]]),G=U},9473:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(821);const a={props:{leaveRequest:{type:Object,required:!0}},methods:{statusChange:function(e){this.$inertia.post(route("company.leaveRequests.status"),{id:this.leaveRequest.id,status:e})},editData:function(e){this.$inertia.get(route("company.leaveRequests.edit",e))},deleteData:function(){var e=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed&&e.$inertia.delete(route("company.leaveRequests.destroy",e.leaveRequest.id),{preserveScroll:!0})}))}}};const o=(0,n(3744).Z)(a,[["render",function(e,t,n,a,o,r){var s=(0,l.resolveComponent)("CheckIcon"),c=(0,l.resolveComponent)("CrossIcon"),i=(0,l.resolveComponent)("EditIcon"),d=(0,l.resolveComponent)("DeleteIcon"),u=(0,l.resolveDirective)("tooltip");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,["pending"==n.leaveRequest.status||"rejected"==n.leaveRequest.status?(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("button",{key:0,onClick:t[0]||(t[0]=function(e){return r.statusChange("approved")}),class:"btn btn-sm"},[(0,l.createVNode)(s)])),[[u,e.__("Accept Request")]]):(0,l.createCommentVNode)("",!0),"pending"==n.leaveRequest.status||"approved"==n.leaveRequest.status?(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("button",{key:1,onClick:t[1]||(t[1]=function(e){return r.statusChange("rejected")}),class:"btn btn-sm"},[(0,l.createVNode)(c)])),[[u,e.__("Reject Request")]]):(0,l.createCommentVNode)("",!0),"pending"==n.leaveRequest.status?(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("button",{key:2,onClick:t[2]||(t[2]=function(e){return r.editData(n.leaveRequest.id)}),class:"btn btn-sm"},[(0,l.createVNode)(i)])),[[u,e.__("Edit")]]):(0,l.createCommentVNode)("",!0),(0,l.withDirectives)(((0,l.openBlock)(),(0,l.createElementBlock)("button",{onClick:t[3]||(t[3]=function(e){return r.deleteData()}),class:"btn btn-sm"},[(0,l.createVNode)(d)])),[[u,e.__("Delete")]])],64)}]])},9418:(e,t,n)=>{n.d(t,{Z:()=>s});var l=n(821),a={class:"pagination justify-content-center"},o=["innerHTML"];const r={props:{links:{type:Array,required:!0}}};const s=(0,n(3744).Z)(r,[["render",function(e,t,n,r,s,c){var i=(0,l.resolveComponent)("Link");return(0,l.openBlock)(),(0,l.createElementBlock)("nav",null,[(0,l.createElementVNode)("ul",a,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(n.links,(function(e,t){return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[e.url?((0,l.openBlock)(),(0,l.createElementBlock)("li",{class:(0,l.normalizeClass)(["page-item",{active:e.active}]),key:t},[(0,l.createVNode)(i,{class:"page-link d-inline",href:e.url,innerHTML:e.label},null,8,["href","innerHTML"])],2)):((0,l.openBlock)(),(0,l.createElementBlock)("li",{class:"page-item disabled",key:t,style:{"margin-top":"-7px"}},[(0,l.createElementVNode)("a",{class:"page-link",href:"#",innerHTML:e.label},null,8,o)]))],64)})),256))])])}]])}}]);