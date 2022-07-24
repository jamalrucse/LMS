"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5811],{9326:(e,t,o)=>{o.d(t,{Z:()=>n});var a=o(3645),r=o.n(a)()((function(e){return e[1]}));r.push([e.id,'.switch[data-v-cc9b099c]{display:inline-block;height:19px;position:relative;width:35px}.switch input[data-v-cc9b099c]{display:none}.slider[data-v-cc9b099c]{background-color:#ccc;bottom:0;cursor:pointer;left:0;right:0;top:0}.slider[data-v-cc9b099c],.slider[data-v-cc9b099c]:before{position:absolute;transition:.4s}.slider[data-v-cc9b099c]:before{background-color:#fff;bottom:2px;content:"";height:15px;left:3px;width:15px}input.success:checked+.slider[data-v-cc9b099c]{background-color:#28a745}input:checked+.slider[data-v-cc9b099c]:before{transform:translateX(15px)}.slider.round[data-v-cc9b099c]{border-radius:34px}.slider.round[data-v-cc9b099c]:before{border-radius:50%}',""]);const n=r},5811:(e,t,o)=>{o.r(t),o.d(t,{default:()=>F});var a=o(821),r=function(e){return(0,a.pushScopeId)("data-v-cc9b099c"),e=e(),(0,a.popScopeId)(),e},n={class:"row justify-content-center"},l={class:"col-12"},c={class:"card mt-3"},s={class:"card-header"},i={class:"d-flex justify-content-between"},d={class:"card-tile"},u=r((function(){return(0,a.createElementVNode)("i",{class:"fa-solid fa-arrow-left"},null,-1)})),m={class:"card-body row justify-content-center"},p={class:"col-lg-6"},v={class:"mb-3 row"},f={class:"col-md-6"},b={value:"",class:"d-none"},h=["value"],V={class:"col-md-6"},N={class:"mb-3 row"},y={class:"col-lg-6"},E={class:"col-lg-6"},_={class:"mb-3 row"},k={class:"col-lg-6"},g=(0,a.createTextVNode)(),w=r((function(){return(0,a.createElementVNode)("br",null,null,-1)})),x={class:"switch"},C=["checked"],T=r((function(){return(0,a.createElementVNode)("span",{class:"slider round"},null,-1)})),D={class:"col-lg-6"},S={class:"custom-control custom-checkbox"},B=["checked"],L={class:"custom-control-label",for:"auto_approve"},M=["disabled"],U={key:1},q=r((function(){return(0,a.createElementVNode)("i",{class:"fa-solid fa-check mr-1"},null,-1)}));const j={props:{users:{type:Array,required:!0},leaveType:{type:Object,required:!0}},data:function(){return{form:this.$inertia.form({user_id:this.leaveType.company.user_id,name:this.leaveType.name,color:this.leaveType.color,balance:this.leaveType.balance,auto_approve:!!this.leaveType.auto_approve,status:!!this.leaveType.status})}},methods:{updateData:function(){this.form.put(route("leaveTypes.update",this.leaveType.id))},statusChange:function(e){this.form.status=e.target.checked}}};var z=o(3379),Z=o.n(z),I=o(9326),A={insert:"head",singleton:!1};Z()(I.Z,A);I.Z.locals;const F=(0,o(3744).Z)(j,[["render",function(e,t,o,r,j,z){var Z=(0,a.resolveComponent)("Head"),I=(0,a.resolveComponent)("Link"),A=(0,a.resolveComponent)("Label"),F=(0,a.resolveComponent)("ErrorMessage"),H=(0,a.resolveComponent)("Loading");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(Z,{title:e.__("Edit Leave Type")},null,8,["title"]),(0,a.createElementVNode)("div",n,[(0,a.createElementVNode)("div",l,[(0,a.createElementVNode)("div",c,[(0,a.createElementVNode)("div",s,[(0,a.createElementVNode)("div",i,[(0,a.createElementVNode)("h6",d,(0,a.toDisplayString)(e.__("Edit Leave Type")),1),(0,a.createVNode)(I,{href:e.route("leaveTypes.index"),class:"btn btn-primary"},{default:(0,a.withCtx)((function(){return[u,(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Back")),1)]})),_:1},8,["href"])])]),(0,a.createElementVNode)("div",m,[(0,a.createElementVNode)("div",p,[(0,a.createElementVNode)("form",{onSubmit:t[7]||(t[7]=(0,a.withModifiers)((function(){return z.updateData&&z.updateData.apply(z,arguments)}),["prevent"]))},[(0,a.createElementVNode)("div",v,[(0,a.createElementVNode)("div",f,[(0,a.createVNode)(A,{name:e.__("Company")},null,8,["name"]),(0,a.withDirectives)((0,a.createElementVNode)("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return j.form.user_id=e}),id:"company",class:(0,a.normalizeClass)(["form-control",{"is-invalid":j.form.errors.user_id}])},[(0,a.createElementVNode)("option",b,(0,a.toDisplayString)(e.__("Select Company")),1),((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(o.users,(function(e){return(0,a.openBlock)(),(0,a.createElementBlock)("option",{value:e.id,key:e.id},(0,a.toDisplayString)(e.name),9,h)})),128))],2),[[a.vModelSelect,j.form.user_id]]),(0,a.createVNode)(F,{name:j.form.errors.user_id},null,8,["name"])]),(0,a.createElementVNode)("div",V,[(0,a.createVNode)(A,{name:e.__("Leave Type")},null,8,["name"]),(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return j.form.name=e}),type:"text",class:(0,a.normalizeClass)(["form-control",{"is-invalid":j.form.errors.name}]),id:"name"},null,2),[[a.vModelText,j.form.name]]),(0,a.createVNode)(F,{name:j.form.errors.name},null,8,["name"])])]),(0,a.createElementVNode)("div",N,[(0,a.createElementVNode)("div",y,[(0,a.createVNode)(A,{name:e.__("Color"),required:!1},null,8,["name"]),(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return j.form.color=e}),class:(0,a.normalizeClass)(["form-control",{"is-invalid":j.form.errors.color}]),type:"color"},null,2),[[a.vModelText,j.form.color]]),(0,a.createVNode)(F,{name:j.form.errors.color},null,8,["name"])]),(0,a.createElementVNode)("div",E,[(0,a.createVNode)(A,{name:e.__("Leave Balance"),required:!1},null,8,["name"]),(0,a.withDirectives)((0,a.createElementVNode)("input",{min:"1","onUpdate:modelValue":t[3]||(t[3]=function(e){return j.form.balance=e}),class:(0,a.normalizeClass)(["form-control",{"is-invalid":j.form.errors.balance}]),type:"number"},null,2),[[a.vModelText,j.form.balance]]),(0,a.createVNode)(F,{name:j.form.errors.balance},null,8,["name"])])]),(0,a.createElementVNode)("div",_,[(0,a.createElementVNode)("div",k,[(0,a.createVNode)(A,{name:e.__("Status"),required:!1},null,8,["name"]),g,w,(0,a.createElementVNode)("label",x,[(0,a.withDirectives)((0,a.createElementVNode)("input",{onChange:t[4]||(t[4]=function(){return z.statusChange&&z.statusChange.apply(z,arguments)}),"onUpdate:modelValue":t[5]||(t[5]=function(e){return j.form.status=e}),type:"checkbox",class:"success toggle-switch",checked:j.form.status},null,40,C),[[a.vModelCheckbox,j.form.status]]),T])]),(0,a.createElementVNode)("div",D,[(0,a.createElementVNode)("div",S,[(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return j.form.auto_approve=e}),type:"checkbox",class:"custom-control-input",id:"auto_approve",checked:j.form.auto_approve},null,8,B),[[a.vModelCheckbox,j.form.auto_approve]]),(0,a.createElementVNode)("label",L,(0,a.toDisplayString)(e.__("Allow auto approve")),1)])])]),(0,a.createElementVNode)("button",{disabled:j.form.processing,type:"submit",class:"btn btn-primary"},[j.form.processing?((0,a.openBlock)(),(0,a.createBlock)(H,{key:0})):((0,a.openBlock)(),(0,a.createElementBlock)("span",U,[q,(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Save")),1)]))],8,M)],32)])])])])])],64)}],["__scopeId","data-v-cc9b099c"]])}}]);