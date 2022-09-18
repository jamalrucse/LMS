"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[155],{8367:(e,t,o)=>{o.d(t,{Z:()=>n});var a=o(3645),r=o.n(a)()((function(e){return e[1]}));r.push([e.id,'.switch[data-v-869cfdb8]{display:inline-block;height:19px;position:relative;width:35px}.switch input[data-v-869cfdb8]{display:none}.slider[data-v-869cfdb8]{background-color:#ccc;bottom:0;cursor:pointer;left:0;right:0;top:0}.slider[data-v-869cfdb8],.slider[data-v-869cfdb8]:before{position:absolute;transition:.4s}.slider[data-v-869cfdb8]:before{background-color:#fff;bottom:2px;content:"";height:15px;left:3px;width:15px}input.success:checked+.slider[data-v-869cfdb8]{background-color:#28a745}input:checked+.slider[data-v-869cfdb8]:before{transform:translateX(15px)}.slider.round[data-v-869cfdb8]{border-radius:34px}.slider.round[data-v-869cfdb8]:before{border-radius:50%}',""]);const n=r},155:(e,t,o)=>{o.r(t),o.d(t,{default:()=>j});var a=o(821),r=function(e){return(0,a.pushScopeId)("data-v-869cfdb8"),e=e(),(0,a.popScopeId)(),e},n={class:"row justify-content-center"},l={class:"col-12"},c={class:"card mt-3"},s={class:"card-header"},d={class:"d-flex justify-content-between"},i={class:"card-title"},u=r((function(){return(0,a.createElementVNode)("i",{class:"fa-solid fa-arrow-left"},null,-1)})),m={class:"card-body row justify-content-center"},p={class:"col-lg-6"},f={class:"mb-3 row"},v={class:"col-md-12"},b={class:"mb-3 row"},h={class:"col-lg-6"},V={class:"col-lg-6"},N={class:"mb-3 row"},E={class:"col-lg-6"},g=(0,a.createTextVNode)(),k=r((function(){return(0,a.createElementVNode)("br",null,null,-1)})),y={class:"switch"},_=r((function(){return(0,a.createElementVNode)("span",{class:"slider round"},null,-1)})),w={class:"col-lg-6"},x={class:"custom-control custom-checkbox"},C={class:"custom-control-label",for:"auto_approve"},D=["disabled"],B={key:1},T=r((function(){return(0,a.createElementVNode)("i",{class:"fa-solid fa-check mr-1"},null,-1)}));const S={data:function(){return{form:this.$inertia.form({name:null,color:"#ABB8C3",balance:7,auto_approve:!1,status:!0})}},methods:{createData:function(){this.form.post(route("company.leaveTypes.store"))},statusChange:function(e){this.form.status=e.target.checked}},mounted:function(){this.checkPagePermission("owner")}};var M=o(3379),L=o.n(M),U=o(8367),Z={insert:"head",singleton:!1};L()(U.Z,Z);U.Z.locals;const j=(0,o(3744).Z)(S,[["render",function(e,t,o,r,S,M){var L=(0,a.resolveComponent)("Head"),U=(0,a.resolveComponent)("Link"),Z=(0,a.resolveComponent)("Label"),j=(0,a.resolveComponent)("ErrorMessage"),q=(0,a.resolveComponent)("Loading");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(L,{title:e.__("Leave Type Create")},null,8,["title"]),(0,a.createElementVNode)("div",n,[(0,a.createElementVNode)("div",l,[(0,a.createElementVNode)("div",c,[(0,a.createElementVNode)("div",s,[(0,a.createElementVNode)("div",d,[(0,a.createElementVNode)("h3",i,(0,a.toDisplayString)(e.__("Leave Type Create")),1),(0,a.createVNode)(U,{href:e.route("company.leaveTypes.index"),class:"btn btn-primary"},{default:(0,a.withCtx)((function(){return[u,(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Back")),1)]})),_:1},8,["href"])])]),(0,a.createElementVNode)("div",m,[(0,a.createElementVNode)("div",p,[(0,a.createElementVNode)("form",{onSubmit:t[6]||(t[6]=(0,a.withModifiers)((function(){return M.createData&&M.createData.apply(M,arguments)}),["prevent"]))},[(0,a.createElementVNode)("div",f,[(0,a.createElementVNode)("div",v,[(0,a.createVNode)(Z,{name:e.__("Name")},null,8,["name"]),(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return S.form.name=e}),type:"text",class:(0,a.normalizeClass)(["form-control",{"is-invalid":S.form.errors.name}]),id:"name"},null,2),[[a.vModelText,S.form.name]]),(0,a.createVNode)(j,{name:S.form.errors.name},null,8,["name"])])]),(0,a.createElementVNode)("div",b,[(0,a.createElementVNode)("div",h,[(0,a.createVNode)(Z,{name:e.__("Color"),required:!1},null,8,["name"]),(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return S.form.color=e}),class:(0,a.normalizeClass)(["form-control",{"is-invalid":S.form.errors.color}]),type:"color"},null,2),[[a.vModelText,S.form.color]]),(0,a.createVNode)(j,{name:S.form.errors.color},null,8,["name"])]),(0,a.createElementVNode)("div",V,[(0,a.createVNode)(Z,{name:e.__("Leave Balance Day"),required:!1},null,8,["name"]),(0,a.withDirectives)((0,a.createElementVNode)("input",{min:"1","onUpdate:modelValue":t[2]||(t[2]=function(e){return S.form.balance=e}),class:(0,a.normalizeClass)(["form-control",{"is-invalid":S.form.errors.balance}]),type:"number"},null,2),[[a.vModelText,S.form.balance]]),(0,a.createVNode)(j,{name:S.form.errors.balance},null,8,["name"])])]),(0,a.createElementVNode)("div",N,[(0,a.createElementVNode)("div",E,[(0,a.createVNode)(Z,{name:e.__("Status"),required:!1},null,8,["name"]),g,k,(0,a.createElementVNode)("label",y,[(0,a.withDirectives)((0,a.createElementVNode)("input",{onChange:t[3]||(t[3]=function(){return M.statusChange&&M.statusChange.apply(M,arguments)}),"onUpdate:modelValue":t[4]||(t[4]=function(e){return S.form.status=e}),type:"checkbox",class:"success toggle-switch",checked:""},null,544),[[a.vModelCheckbox,S.form.status]]),_])]),(0,a.createElementVNode)("div",w,[(0,a.createElementVNode)("div",x,[(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return S.form.auto_approve=e}),type:"checkbox",class:"custom-control-input",id:"auto_approve"},null,512),[[a.vModelCheckbox,S.form.auto_approve]]),(0,a.createElementVNode)("label",C,(0,a.toDisplayString)(e.__("Allow auto approve")),1)])])]),(0,a.createElementVNode)("button",{disabled:S.form.processing,type:"submit",class:"btn btn-primary"},[S.form.processing?((0,a.openBlock)(),(0,a.createBlock)(q,{key:0})):((0,a.openBlock)(),(0,a.createElementBlock)("span",B,[T,(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Save")),1)]))],8,D)],32)])])])])])],64)}],["__scopeId","data-v-869cfdb8"]])}}]);