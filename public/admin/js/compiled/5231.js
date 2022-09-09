"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5231],{1482:(e,t,l)=>{l.d(t,{Z:()=>n});var o=l(3645),a=l.n(o)()((function(e){return e[1]}));a.push([e.id,".avatar-img[data-v-19e4012f]{height:60px;-o-object-fit:cover;object-fit:cover;width:60px}.leave-type-color[data-v-19e4012f]{border-radius:30px;color:#fff;font-weight:500;padding:2px 5px}",""]);const n=a},5231:(e,t,l)=>{l.r(t),l.d(t,{default:()=>ue});var o=l(821),a=function(e){return(0,o.pushScopeId)("data-v-19e4012f"),e=e(),(0,o.popScopeId)(),e},n={key:0,class:"row justify-content-center"},r={class:"col-12"},s={class:"card"},i={class:"card-header border-0"},c={class:"d-flex justify-content-between"},d={class:"card-title"},m=a((function(){return(0,o.createElementVNode)("i",{class:"fa-solid fa-plus"},null,-1)})),u=[a((function(){return(0,o.createElementVNode)("i",{class:"fa-solid fa-filter"},null,-1)}))],p=a((function(){return(0,o.createElementVNode)("i",{class:"fa-solid fa-times"},null,-1)})),f={key:0,class:"card-body border-bottom d-flex justify-content-between"},y={class:"w-25"},v=a((function(){return(0,o.createElementVNode)("label",null,"Leave Type",-1)})),h={value:""},E=["value"],g={class:"ml-auto w-25"},N=a((function(){return(0,o.createElementVNode)("label",null,"Status",-1)})),V={value:""},k={value:"pending"},D={value:"approved"},_={value:"rejected"},b={class:"card-body table-responsive p-0"},w={class:"table table-valign-middle"},B={class:"text-danger ml-1"},S=(0,o.createTextVNode)(") "),C={class:"d-flex"},F=["onClick"],x=["onClick"],M={key:1},q={colspan:"5",class:"text-center"},T={key:1},Y={class:"modal-mask"},L={class:"modal-wrapper"},R={class:"modal-dialog",role:"document"},I={class:"modal-content"},j={class:"modal-header"},A={class:"modal-title"},z={type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},Z={class:"modal-body"},H={class:"table"},P={width:"30%"},U={width:"70%"},$={href:"#"},O={width:"30%"},G={width:"70%"},J={width:"30%"},K={width:"70%"},Q={width:"30%"},W={width:"70%"},X={width:"50%"},ee={width:"50%"},te={class:"modal-footer"};var le=l(9418),oe=l(7484),ae=l.n(oe),ne=l(9680);const re={props:{leaveRequests:Array,leaveTypes:Array,filters:Object},components:{Pagination:le.Z,Inertia:ne.Inertia},data:function(){return{showModal:!1,form:{type:"",color:"",status:"",start:"",end:"",days:"",reason:""},showFilter:!1,filterForm:{status:this.filters.status,leave_type:this.filters.leave_type}}},methods:{getBadgeType:function(e){return"pending"==e?"badge-warning":"approved"==e?"badge-success":"badge-danger"},startDate:function(e){return ae()(e).format("DD MMM, YYYY")},endDate:function(e){return ae()(e).format("DD MMM, YYYY")},deleteData:function(e){var t=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(l){l.isConfirmed&&t.$inertia.delete(route("employee.leave.request.delete",e))}))},requestFor:function(e,t){var l=ae()(e).format("DD MMM, YYYY"),o=ae()(t).format("DD MMM, YYYY");return"".concat(l," - ").concat(o)},showDetails:function(e){this.form.type=e.leave_type.name,this.form.color=e.leave_type.color,this.form.status=e.status,this.form.start=e.start,this.form.end=e.end,this.form.days=e.days,this.form.reason=e.reason,this.showModal=!0},filteringData:function(){this.showFilter=!this.showFilter,localStorage.setItem("showFilter",this.showFilter)},filterData:function(){ne.Inertia.get(route("employee.leave.request.index"),{status:this.filterForm.status,leave_type:this.filterForm.leave_type},{preserveState:!0,replace:!0})}},mounted:function(){this.checkPagePermission("employee"),localStorage.getItem("showFilter")&&(this.showFilter=localStorage.getItem("showFilter"))}};var se=l(3379),ie=l.n(se),ce=l(1482),de={insert:"head",singleton:!1};ie()(ce.Z,de);ce.Z.locals;const me=(0,l(3744).Z)(re,[["render",function(e,t,l,a,le,oe){var ae=(0,o.resolveComponent)("Head"),ne=(0,o.resolveComponent)("Link"),re=(0,o.resolveComponent)("EyeIcon"),se=(0,o.resolveComponent)("EditIcon"),ie=(0,o.resolveComponent)("DeleteIcon"),ce=(0,o.resolveComponent)("Pagination"),de=(0,o.resolveDirective)("tooltip"),me=(0,o.resolveDirective)("click-outside");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(ae,{title:e.__("Leave Requests")},null,8,["title"]),l.leaveRequests&&l.leaveRequests.data.length?((0,o.openBlock)(),(0,o.createElementBlock)("div",n,[(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("h3",d,(0,o.toDisplayString)(e.__("Leave Request List")),1),(0,o.createElementVNode)("div",null,[(0,o.createVNode)(ne,{href:e.route("employee.leave.request.create"),class:"btn btn-primary"},{default:(0,o.withCtx)((function(){return[m,(0,o.createTextVNode)(" "+(0,o.toDisplayString)(e.__("Apply for leave")),1)]})),_:1},8,["href"]),(0,o.createElementVNode)("button",{class:"btn btn-secondary ml-2",onClick:t[0]||(t[0]=function(){return oe.filteringData&&oe.filteringData.apply(oe,arguments)})},u),le.filterForm.status||le.filterForm.leave_type?((0,o.openBlock)(),(0,o.createBlock)(ne,{key:0,href:e.route("employee.leave.request.index"),class:"btn btn-danger ml-2"},{default:(0,o.withCtx)((function(){return[p,(0,o.createTextVNode)(" "+(0,o.toDisplayString)(e.__("Clear")),1)]})),_:1},8,["href"])):(0,o.createCommentVNode)("",!0)])])]),le.showFilter?((0,o.openBlock)(),(0,o.createElementBlock)("div",f,[(0,o.createElementVNode)("div",y,[v,(0,o.withDirectives)((0,o.createElementVNode)("select",{class:"form-control","onUpdate:modelValue":t[1]||(t[1]=function(e){return le.filterForm.leave_type=e}),onChange:t[2]||(t[2]=function(){return oe.filterData&&oe.filterData.apply(oe,arguments)})},[(0,o.createElementVNode)("option",h,(0,o.toDisplayString)(e.__("All")),1),((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(l.leaveTypes,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("option",{value:e.id,key:e.id},(0,o.toDisplayString)(e.name),9,E)})),128))],544),[[o.vModelSelect,le.filterForm.leave_type]])]),(0,o.createElementVNode)("div",g,[N,(0,o.withDirectives)((0,o.createElementVNode)("select",{class:"form-control","onUpdate:modelValue":t[3]||(t[3]=function(e){return le.filterForm.status=e}),onChange:t[4]||(t[4]=function(){return oe.filterData&&oe.filterData.apply(oe,arguments)})},[(0,o.createElementVNode)("option",V,(0,o.toDisplayString)(e.__("All")),1),(0,o.createElementVNode)("option",k,(0,o.toDisplayString)(e.__("Pending")),1),(0,o.createElementVNode)("option",D,(0,o.toDisplayString)(e.__("Approved")),1),(0,o.createElementVNode)("option",_,(0,o.toDisplayString)(e.__("Rejected")),1)],544),[[o.vModelSelect,le.filterForm.status]])])])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",b,[(0,o.createElementVNode)("table",w,[(0,o.createElementVNode)("thead",null,[(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("th",null,(0,o.toDisplayString)(e.__("Leave Type")),1),(0,o.createElementVNode)("th",null,(0,o.toDisplayString)(e.__("Date")),1),(0,o.createElementVNode)("th",null,(0,o.toDisplayString)(e.__("Status")),1),(0,o.createElementVNode)("th",null,(0,o.toDisplayString)(e.__("Action")),1)])]),(0,o.createElementVNode)("tbody",null,[l.leaveRequests&&l.leaveRequests.data.length?((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,{key:0},(0,o.renderList)(l.leaveRequests.data,(function(t,l){return(0,o.openBlock)(),(0,o.createElementBlock)("tr",{key:l},[(0,o.createElementVNode)("td",null,[(0,o.createElementVNode)("span",{style:(0,o.normalizeStyle)({background:t.leave_type.color,border:"2px solid "+t.leave_type.color}),class:"leave-type-color"},(0,o.toDisplayString)(t.leave_type.name),5)]),(0,o.createElementVNode)("td",null,[(0,o.createTextVNode)((0,o.toDisplayString)(oe.startDate(t.start_date))+" - "+(0,o.toDisplayString)(oe.endDate(t.end_date))+" (",1),(0,o.createElementVNode)("span",B,(0,o.toDisplayString)(t.days)+" "+(0,o.toDisplayString)(e.pluralize(t.days,"Day")),1),S]),(0,o.createElementVNode)("td",null,[(0,o.createElementVNode)("span",{class:(0,o.normalizeClass)(["toCapitalFirst badge",oe.getBadgeType(t.status)])},(0,o.toDisplayString)(t.status),3)]),(0,o.createElementVNode)("td",C,[(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("button",{onClick:function(e){return oe.showDetails(t)},class:"btn btn-sm"},[(0,o.createVNode)(re)],8,F)),[[de,"Show Request Details"]]),"pending"==t.status?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:0},[(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createBlock)(ne,{href:e.route("employee.leave.request.edit",t.id),class:"btn btn-sm"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(se)]})),_:2},1032,["href"])),[[de,"Edit Request"]]),(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("button",{onClick:function(e){return oe.deleteData(t.id)},class:"btn btn-sm"},[(0,o.createVNode)(ie)],8,x)),[[de,"Delete Request"]])],64)):(0,o.createCommentVNode)("",!0)])])})),128)):((0,o.openBlock)(),(0,o.createElementBlock)("tr",M,[(0,o.createElementVNode)("td",q,[(0,o.createElementVNode)("h6",null,(0,o.toDisplayString)(e.__("No Data Found")),1)])]))])]),(0,o.createVNode)(ce,{links:l.leaveRequests.links},null,8,["links"])])])])])):(0,o.createCommentVNode)("",!0),le.showModal?((0,o.openBlock)(),(0,o.createElementBlock)("div",T,[(0,o.createVNode)(o.Transition,{name:"fade"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",Y,[(0,o.createElementVNode)("div",L,[(0,o.createElementVNode)("div",R,[(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("div",I,[(0,o.createElementVNode)("div",j,[(0,o.createElementVNode)("h5",A,(0,o.toDisplayString)(e.__("Leave Request Details")),1),(0,o.createElementVNode)("button",z,[(0,o.createElementVNode)("span",{"aria-hidden":"true",onClick:t[5]||(t[5]=function(e){return le.showModal=!1})},"×")])]),(0,o.createElementVNode)("div",Z,[(0,o.createElementVNode)("table",H,[(0,o.createElementVNode)("tbody",null,[(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("td",P,(0,o.toDisplayString)(e.__("Name")),1),(0,o.createElementVNode)("td",U,[(0,o.createElementVNode)("a",$,[(0,o.createElementVNode)("span",{style:(0,o.normalizeStyle)({background:le.form.color,border:"2px solid "+le.form.color}),class:"leave-type-color"},(0,o.toDisplayString)(le.form.type),5)])])]),(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("td",O,(0,o.toDisplayString)(e.__("Date")),1),(0,o.createElementVNode)("td",G,(0,o.toDisplayString)(oe.requestFor(le.form.start,le.form.end)),1)]),(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("td",J,(0,o.toDisplayString)(e.__("Total Days")),1),(0,o.createElementVNode)("td",K,(0,o.toDisplayString)(le.form.days)+" "+(0,o.toDisplayString)(e.pluralize(le.form.days,"Day")),1)]),(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("td",Q,(0,o.toDisplayString)(e.__("Status")),1),(0,o.createElementVNode)("td",W,[(0,o.createElementVNode)("span",{class:(0,o.normalizeClass)(["toCapitalFirst badge",oe.getBadgeType(le.form.status)])},(0,o.toDisplayString)(le.form.status),3)])]),(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("td",X,(0,o.toDisplayString)(e.__("Reason")),1),(0,o.createElementVNode)("td",ee,(0,o.toDisplayString)(le.form.reason),1)])])])]),(0,o.createElementVNode)("div",te,[(0,o.createElementVNode)("button",{type:"button",class:"btn btn-secondary",onClick:t[6]||(t[6]=function(e){return le.showModal=!1})},(0,o.toDisplayString)(e.__("Close")),1)])])),[[me,function(){return le.showModal=!1}]])])])])]})),_:1})])):(0,o.createCommentVNode)("",!0)],64)}],["__scopeId","data-v-19e4012f"]]),ue=me},9418:(e,t,l)=>{l.d(t,{Z:()=>s});var o=l(821),a={class:"pagination justify-content-center"},n=["innerHTML"];const r={props:{links:{type:Array,required:!0}}};const s=(0,l(3744).Z)(r,[["render",function(e,t,l,r,s,i){var c=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createElementBlock)("nav",null,[(0,o.createElementVNode)("ul",a,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(l.links,(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[e.url?((0,o.openBlock)(),(0,o.createElementBlock)("li",{class:(0,o.normalizeClass)(["page-item",{active:e.active}]),key:t},[(0,o.createVNode)(c,{class:"page-link d-inline",href:e.url,innerHTML:e.label},null,8,["href","innerHTML"])],2)):((0,o.openBlock)(),(0,o.createElementBlock)("li",{class:"page-item disabled",key:t,style:{"margin-top":"-7px"}},[(0,o.createElementVNode)("a",{class:"page-link",href:"#",innerHTML:e.label},null,8,n)]))],64)})),256))])])}]])}}]);