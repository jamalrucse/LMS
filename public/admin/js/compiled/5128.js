"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5128],{5809:(e,t,a)=>{a.d(t,{Z:()=>n});var o=a(3645),l=a.n(o)()((function(e){return e[1]}));l.push([e.id,'.switch[data-v-c31054bc]{display:inline-block;height:19px;position:relative;width:35px}.switch input[data-v-c31054bc]{display:none}.slider[data-v-c31054bc]{background-color:#ccc;bottom:0;cursor:pointer;left:0;right:0;top:0}.slider[data-v-c31054bc],.slider[data-v-c31054bc]:before{position:absolute;transition:.4s}.slider[data-v-c31054bc]:before{background-color:#fff;bottom:2px;content:"";height:15px;left:3px;width:15px}input.success:checked+.slider[data-v-c31054bc]{background-color:#28a745}input:checked+.slider[data-v-c31054bc]:before{transform:translateX(15px)}.slider.round[data-v-c31054bc]{border-radius:34px}.slider.round[data-v-c31054bc]:before{border-radius:50%}',""]);const n=l},5128:(e,t,a)=>{a.r(t),a.d(t,{default:()=>te});var o=a(821),l=function(e){return(0,o.pushScopeId)("data-v-c31054bc"),e=e(),(0,o.popScopeId)(),e},n={class:"row justify-content-center"},r={class:"col-12"},s={class:"card mt-3"},c={class:"card-header"},i={class:"d-flex justify-content-between"},m={class:"card-title"},d=l((function(){return(0,o.createElementVNode)("i",{class:"fa-solid fa-arrow-left"},null,-1)})),u={class:"card-body row justify-content-center"},p={class:"col-lg-6"},f={class:"mb-3 row"},_={class:"col-md-6"},v={class:"col-md-6"},h={value:"paid"},y={value:"free"},V={class:"mb-3 row"},N={class:"col-lg-6"},E={class:"col-md-6"},b={value:"monthly"},x={value:"yearly"},k={value:"custom_days"},g={value:"lifetime"},w={class:"mb-3 row"},C={key:0,class:"col-md-6"},D={class:"col-md-6"},S=(0,o.createTextVNode)(),M=l((function(){return(0,o.createElementVNode)("br",null,null,-1)})),T={class:"switch"},U=["checked"],B=l((function(){return(0,o.createElementVNode)("span",{class:"slider round"},null,-1)})),z={class:"mt-2"},F={class:"mb-3 row"},L={class:"col-md-6"},I={value:"1"},P={value:"0"},j={key:0,class:"col-md-6"},Z={class:"col-md-6 my-2"},q={class:"col-md-6 my-2"},A=(0,o.createTextVNode)(),H=l((function(){return(0,o.createElementVNode)("br",null,null,-1)})),O={class:"switch"},X=["checked"],Y=l((function(){return(0,o.createElementVNode)("span",{class:"slider round"},null,-1)})),$=["disabled"],G={key:1},J=l((function(){return(0,o.createElementVNode)("i",{class:"fa-solid fa-check mr-1"},null,-1)}));const K={components:{Inertia:a(9680).Inertia},props:{plan:{type:Object,required:!0}},data:function(){return{form:this.$inertia.form({name:this.plan.name,type:this.plan.type,price:this.plan.price,interval:this.plan.interval,custom_interval_days:this.plan.custom_interval_days,status:!!this.plan.status,is_limited_employee:this.plan.plan_features?this.plan.plan_features.is_limited_employee:0,max_employees:this.plan.plan_features?this.plan.plan_features.max_employees:1,max_teams:this.plan.plan_features?this.plan.plan_features.max_teams:1,max_leave_types:this.plan.plan_features?this.plan.plan_features.max_leave_types:1,custom_theme_look:!(!this.plan.plan_features||!this.plan.plan_features.custom_theme_look)}),showCustomIntervalField:"custom_days"===this.plan.interval,showMaxEmployeeField:!(!this.plan.plan_features||!this.plan.plan_features.is_limited_employee)}},watch:{"form.interval":function(e){this.showCustomIntervalField="custom_days"==e},"form.is_limited_employee":function(e){this.showMaxEmployeeField=1==e}},methods:{updateData:function(){var e=this;this.form.put(route("plans.update",this.plan.id),{onSuccess:function(){return e.form.reset()}})},statusChange:function(e){this.form.status=e.target.checked},customLookStatusChange:function(e){this.form.custom_theme_lookup=e.target.checked}}};var Q=a(3379),R=a.n(Q),W=a(5809),ee={insert:"head",singleton:!1};R()(W.Z,ee);W.Z.locals;const te=(0,a(3744).Z)(K,[["render",function(e,t,a,l,K,Q){var R=(0,o.resolveComponent)("Head"),W=(0,o.resolveComponent)("Link"),ee=(0,o.resolveComponent)("Label"),te=(0,o.resolveComponent)("ErrorMessage"),ae=(0,o.resolveComponent)("Loading");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(R,{title:e.__("Plan Edit")},null,8,["title"]),(0,o.createElementVNode)("div",n,[(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("h3",m,(0,o.toDisplayString)(e.__("Plan Edit")),1),(0,o.createVNode)(W,{href:e.route("plans.index"),class:"btn btn-primary"},{default:(0,o.withCtx)((function(){return[d,(0,o.createTextVNode)(" "+(0,o.toDisplayString)(e.__("Back")),1)]})),_:1},8,["href"])])]),(0,o.createElementVNode)("div",u,[(0,o.createElementVNode)("div",p,[(0,o.createElementVNode)("form",{onSubmit:t[13]||(t[13]=(0,o.withModifiers)((function(){return Q.updateData&&Q.updateData.apply(Q,arguments)}),["prevent"]))},[(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("div",_,[(0,o.createVNode)(ee,{name:e.__("Name")},null,8,["name"]),(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return K.form.name=e}),type:"text",class:(0,o.normalizeClass)(["form-control",{"is-invalid":K.form.errors.name}]),id:"name"},null,2),[[o.vModelText,K.form.name]]),(0,o.createVNode)(te,{name:K.form.errors.name},null,8,["name"])]),(0,o.createElementVNode)("div",v,[(0,o.createVNode)(ee,{name:e.__("Plan Type")},null,8,["name"]),(0,o.withDirectives)((0,o.createElementVNode)("select",{class:(0,o.normalizeClass)(["form-control",{"is-invalid":K.form.errors.type}]),"onUpdate:modelValue":t[1]||(t[1]=function(e){return K.form.type=e})},[(0,o.createElementVNode)("option",h,(0,o.toDisplayString)(e.__("Paid")),1),(0,o.createElementVNode)("option",y,(0,o.toDisplayString)(e.__("Free")),1)],2),[[o.vModelSelect,K.form.type]]),(0,o.createVNode)(te,{name:K.form.errors.type},null,8,["name"])])]),(0,o.createElementVNode)("div",V,[(0,o.createElementVNode)("div",N,[(0,o.createVNode)(ee,{name:e.__("Price")},null,8,["name"]),(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return K.form.price=e}),type:"text",class:(0,o.normalizeClass)(["form-control",{"is-invalid":K.form.errors.price}])},null,2),[[o.vModelText,K.form.price]]),(0,o.createVNode)(te,{name:K.form.errors.price},null,8,["name"])]),(0,o.createElementVNode)("div",E,[(0,o.createVNode)(ee,{name:e.__("Subscription Type")},null,8,["name"]),(0,o.withDirectives)((0,o.createElementVNode)("select",{class:(0,o.normalizeClass)(["form-control",{"is-invalid":K.form.errors.interval}]),"onUpdate:modelValue":t[3]||(t[3]=function(e){return K.form.interval=e})},[(0,o.createElementVNode)("option",b,(0,o.toDisplayString)(e.__("Monthly")),1),(0,o.createElementVNode)("option",x,(0,o.toDisplayString)(e.__("Yearly")),1),(0,o.createElementVNode)("option",k,(0,o.toDisplayString)(e.__("Custom Days")),1),(0,o.createElementVNode)("option",g,(0,o.toDisplayString)(e.__("Lifetime")),1)],2),[[o.vModelSelect,K.form.interval]]),(0,o.createVNode)(te,{name:K.form.errors.interval},null,8,["name"])])]),(0,o.createElementVNode)("div",w,[K.showCustomIntervalField?((0,o.openBlock)(),(0,o.createElementBlock)("div",C,[(0,o.createVNode)(ee,{name:e.__("Number of Days")},null,8,["name"]),(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return K.form.custom_interval_days=e}),type:"number",class:(0,o.normalizeClass)(["form-control",{"is-invalid":K.form.errors.custom_interval_days}])},null,2),[[o.vModelText,K.form.custom_interval_days]]),(0,o.createVNode)(te,{name:K.form.errors.custom_interval_days},null,8,["name"])])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",D,[(0,o.createVNode)(ee,{name:e.__("Status")},null,8,["name"]),S,M,(0,o.createElementVNode)("label",T,[(0,o.withDirectives)((0,o.createElementVNode)("input",{onChange:t[5]||(t[5]=function(){return Q.statusChange&&Q.statusChange.apply(Q,arguments)}),"onUpdate:modelValue":t[6]||(t[6]=function(e){return K.form.status=e}),type:"checkbox",class:"success toggle-switch",checked:K.form.status},null,40,U),[[o.vModelCheckbox,K.form.status]]),B]),(0,o.createVNode)(te,{name:K.form.errors.status,className:"d-block"},null,8,["name"])])]),(0,o.createElementVNode)("h4",z,(0,o.toDisplayString)(e.__("Plan Features")),1),(0,o.createElementVNode)("div",F,[(0,o.createElementVNode)("div",L,[(0,o.createVNode)(ee,{name:e.__("Employee Adding Type")},null,8,["name"]),(0,o.withDirectives)((0,o.createElementVNode)("select",{class:(0,o.normalizeClass)(["form-control",{"is-invalid":K.form.errors.is_limited_employee}]),"onUpdate:modelValue":t[7]||(t[7]=function(e){return K.form.is_limited_employee=e})},[(0,o.createElementVNode)("option",I,(0,o.toDisplayString)(e.__("Limited Employee")),1),(0,o.createElementVNode)("option",P,(0,o.toDisplayString)(e.__("Unlimited Employee")),1)],2),[[o.vModelSelect,K.form.is_limited_employee]]),(0,o.createVNode)(te,{name:K.form.errors.interval},null,8,["name"])]),K.showMaxEmployeeField?((0,o.openBlock)(),(0,o.createElementBlock)("div",j,[(0,o.createVNode)(ee,{name:e.__("Max Employees")},null,8,["name"]),(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":t[8]||(t[8]=function(e){return K.form.max_employees=e}),type:"number",class:(0,o.normalizeClass)(["form-control",{"is-invalid":K.form.errors.max_employees}]),min:"1"},null,2),[[o.vModelText,K.form.max_employees]]),(0,o.createVNode)(te,{name:K.form.errors.max_employees},null,8,["name"])])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",Z,[(0,o.createVNode)(ee,{name:e.__("Max Teams")},null,8,["name"]),(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":t[9]||(t[9]=function(e){return K.form.max_teams=e}),type:"number",class:(0,o.normalizeClass)(["form-control",{"is-invalid":K.form.errors.max_teams}]),min:"1"},null,2),[[o.vModelText,K.form.max_teams]]),(0,o.createVNode)(te,{name:K.form.errors.max_teams},null,8,["name"])]),(0,o.createElementVNode)("div",q,[(0,o.createVNode)(ee,{name:e.__("Max Leave Types")},null,8,["name"]),(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":t[10]||(t[10]=function(e){return K.form.max_leave_types=e}),type:"number",class:(0,o.normalizeClass)(["form-control",{"is-invalid":K.form.errors.max_leave_types}]),min:"1"},null,2),[[o.vModelText,K.form.max_leave_types]]),(0,o.createVNode)(te,{name:K.form.errors.max_leave_types},null,8,["name"])]),(0,o.createElementVNode)("div",{class:(0,o.normalizeClass)(["col-md-6",{"mt-2":!K.showMaxEmployeeField}])},[(0,o.createVNode)(ee,{name:e.__("Custom Theme Look")},null,8,["name"]),A,H,(0,o.createElementVNode)("label",O,[(0,o.withDirectives)((0,o.createElementVNode)("input",{onChange:t[11]||(t[11]=function(){return Q.customLookStatusChange&&Q.customLookStatusChange.apply(Q,arguments)}),"onUpdate:modelValue":t[12]||(t[12]=function(e){return K.form.custom_theme_look=e}),type:"checkbox",class:"success toggle-switch",checked:K.form.custom_theme_look},null,40,X),[[o.vModelCheckbox,K.form.custom_theme_look]]),Y]),(0,o.createVNode)(te,{name:K.form.errors.custom_theme_look,className:"d-block"},null,8,["name"])],2)]),(0,o.createElementVNode)("button",{disabled:K.form.processing,type:"submit",class:"btn btn-primary"},[K.form.processing?((0,o.openBlock)(),(0,o.createBlock)(ae,{key:0,message:"Saving..."})):((0,o.openBlock)(),(0,o.createElementBlock)("span",G,[J,(0,o.createTextVNode)(" "+(0,o.toDisplayString)(e.__("Save")),1)]))],8,$)],32)])])])])])],64)}],["__scopeId","data-v-c31054bc"]])}}]);