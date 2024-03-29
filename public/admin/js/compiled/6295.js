"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6295],{4272:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(3645),a=o.n(n)()((function(e){return e[1]}));a.push([e.id,".modal-content[data-v-3b6d71e8]{width:700px!important}",""]);const r=a},8151:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(3645),a=o.n(n)()((function(e){return e[1]}));a.push([e.id,".cursor-pointer[data-v-fd251b14]{cursor:pointer}",""]);const r=a},6295:(e,t,o)=>{o.r(t),o.d(t,{default:()=>G});var n=o(821),a=function(e){return(0,n.pushScopeId)("data-v-3b6d71e8"),e=e(),(0,n.popScopeId)(),e},r={class:"row justify-content-center"},l={class:"col-12"},s={class:"card mt-3"},c={class:"card-header"},i={class:"d-flex justify-content-between"},d={class:"card-title"},m=a((function(){return(0,n.createElementVNode)("i",{class:"fa-solid fa-plus"},null,-1)})),u={key:0,class:"card-body"},p={key:1,class:"card-body text-center"},f={key:0},v={class:"modal-mask"},h={class:"modal-wrapper"},E={class:"modal-dialog",role:"document"},V={class:"modal-content"},N={class:"modal-header"},k={class:"modal-title"},b={key:0},w={key:1},y={type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},_={class:"modal-body"},B={class:"row"},q={class:"col-md-12 mb-3"},g={class:"col-md-12"},C={class:"modal-footer"},D=["disabled"],S={key:1},x=a((function(){return(0,n.createElementVNode)("i",{class:"fa-solid fa-check mr-1"},null,-1)}));var M={class:"card mb-0"},T={class:"card-header p-0 d-flex align-items-center justify-content-between"},Z={class:"card-title pt-2 w-100 py-3 px-3 pointer",id:"heading6"},F={class:"d-flex align-items-center py-2 pr-3"},A={class:"card-body"};const I={props:{faq:{type:Object}},data:function(){return{show:!1}},methods:{deleteData:function(e){var t=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){o.isConfirmed&&t.$inertia.delete(route("faqs.destroy",e))}))},editData:function(e){this.$emit("edit",e)}}};var L=o(3379),j=o.n(L),$=o(8151),z={insert:"head",singleton:!1};j()($.Z,z);$.Z.locals;var Q=o(3744);const U={components:{SingleAccordian:(0,Q.Z)(I,[["render",function(e,t,o,a,r,l){var s=(0,n.resolveComponent)("EditIcon"),c=(0,n.resolveComponent)("DeleteIcon"),i=(0,n.resolveDirective)("tooltip");return(0,n.openBlock)(),(0,n.createElementBlock)("div",{class:"accordion cursor-pointer mb-3",id:"accordionExample",onClick:t[2]||(t[2]=function(e){return r.show=!r.show})},[(0,n.createElementVNode)("div",M,[(0,n.createElementVNode)("div",T,[(0,n.createElementVNode)("h4",Z,[(0,n.createElementVNode)("b",null,(0,n.toDisplayString)(e.__("Question")),1),(0,n.createTextVNode)(": "+(0,n.toDisplayString)(o.faq.question),1)]),(0,n.createElementVNode)("div",F,[(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createElementBlock)("button",{class:"btn btn-sm",onClick:t[0]||(t[0]=function(e){return l.editData(o.faq)})},[(0,n.createVNode)(s)])),[[i,e.__("Edit")]]),(0,n.withDirectives)(((0,n.openBlock)(),(0,n.createElementBlock)("button",{class:"btn btn-sm",onClick:t[1]||(t[1]=function(e){return l.deleteData(o.faq.id)})},[(0,n.createVNode)(c)])),[[i,e.__("Delete")]])])]),(0,n.createElementVNode)("div",{id:"collapse6",class:(0,n.normalizeClass)(["collapse",{show:r.show}])},[(0,n.createElementVNode)("div",A,[(0,n.createElementVNode)("b",null,(0,n.toDisplayString)(e.__("Answer")),1),(0,n.createTextVNode)(": "+(0,n.toDisplayString)(o.faq.answer),1)])],2)])])}],["__scopeId","data-v-fd251b14"]])},props:{faqs:{type:Array}},data:function(){return{form:this.$inertia.form({question:"",answer:""}),editMode:!1,showModal:!1,faq_id:null}},methods:{saveData:function(){var e=this;this.editMode?this.form.put(route("faqs.update",this.faq_id),{onSuccess:function(){e.showModal=!1,e.form.reset()}},{preserveScroll:!1,preserveState:!0}):this.form.post(route("faqs.store"),{onSuccess:function(){e.showModal=!1,e.form.reset()}},{preserveScroll:!0,preserveState:!0})},editData:function(e){console.log(e),this.form.clearErrors(),this.editMode=!0,this.form.reset(),this.faq_id=e.id,this.form.question=e.question,this.form.answer=e.answer,this.showModal=!0}}};var Y=o(4272),H={insert:"head",singleton:!1};j()(Y.Z,H);Y.Z.locals;const O=(0,Q.Z)(U,[["render",function(e,t,o,a,M,T){var Z=(0,n.resolveComponent)("Head"),F=(0,n.resolveComponent)("SingleAccordian"),A=(0,n.resolveComponent)("Label"),I=(0,n.resolveComponent)("ErrorMessage"),L=(0,n.resolveComponent)("Loading");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(Z,{title:e.__("Faq List")},null,8,["title"]),(0,n.createElementVNode)("div",r,[(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("h3",d,(0,n.toDisplayString)(e.__("Faq List")),1),(0,n.createElementVNode)("button",{onClick:t[0]||(t[0]=function(e){return M.showModal=!0}),class:"btn btn-primary"},[m,(0,n.createTextVNode)(" "+(0,n.toDisplayString)(e.__("Create")),1)])])]),o.faqs&&o.faqs.length?((0,n.openBlock)(),(0,n.createElementBlock)("div",u,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(o.faqs,(function(e){return(0,n.openBlock)(),(0,n.createBlock)(F,{key:e.id,faq:e,onEdit:T.editData},null,8,["faq","onEdit"])})),128))])):((0,n.openBlock)(),(0,n.createElementBlock)("div",p,[(0,n.createElementVNode)("h6",null,(0,n.toDisplayString)(e.__("No Data Found")),1)]))])])]),M.showModal?((0,n.openBlock)(),(0,n.createElementBlock)("div",f,[(0,n.createVNode)(n.Transition,{name:"fade"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",v,[(0,n.createElementVNode)("div",h,[(0,n.createElementVNode)("div",E,[(0,n.createElementVNode)("div",V,[(0,n.createElementVNode)("div",N,[(0,n.createElementVNode)("h5",k,[M.editMode?((0,n.openBlock)(),(0,n.createElementBlock)("span",w,(0,n.toDisplayString)(e.__("Edit Faq")),1)):((0,n.openBlock)(),(0,n.createElementBlock)("span",b,(0,n.toDisplayString)(e.__("Create Faq")),1))]),(0,n.createElementVNode)("button",y,[(0,n.createElementVNode)("span",{"aria-hidden":"true",onClick:t[1]||(t[1]=function(e){return M.showModal=!1})},"×")])]),(0,n.createElementVNode)("form",{onSubmit:t[5]||(t[5]=(0,n.withModifiers)((function(){return T.saveData&&T.saveData.apply(T,arguments)}),["prevent"]))},[(0,n.createElementVNode)("div",_,[(0,n.createElementVNode)("div",B,[(0,n.createElementVNode)("div",q,[(0,n.createVNode)(A,{name:e.__("Question")},null,8,["name"]),(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return M.form.question=e}),type:"text",class:(0,n.normalizeClass)(["form-control",{"is-invalid":M.form.errors.question}]),id:"name"},null,2),[[n.vModelText,M.form.question]]),(0,n.createVNode)(I,{name:M.form.errors.question},null,8,["name"])]),(0,n.createElementVNode)("div",g,[(0,n.createVNode)(A,{name:e.__("Answer")},null,8,["name"]),(0,n.withDirectives)((0,n.createElementVNode)("textarea",{rows:"10","onUpdate:modelValue":t[3]||(t[3]=function(e){return M.form.answer=e}),class:(0,n.normalizeClass)(["form-control",{"is-invalid":M.form.errors.answer}])},null,2),[[n.vModelText,M.form.answer]]),(0,n.createVNode)(I,{name:M.form.errors.answer},null,8,["name"])])])]),(0,n.createElementVNode)("div",C,[(0,n.createElementVNode)("button",{type:"button",class:"btn btn-secondary",onClick:t[4]||(t[4]=function(e){return M.showModal=!1})},(0,n.toDisplayString)(e.__("Close")),1),(0,n.createElementVNode)("button",{disabled:M.form.processing,type:"submit",class:"btn btn-primary"},[M.form.processing?((0,n.openBlock)(),(0,n.createBlock)(L,{key:0})):((0,n.openBlock)(),(0,n.createElementBlock)("span",S,[x,(0,n.createTextVNode)(" "+(0,n.toDisplayString)(e.__("Save")),1)]))],8,D)])],32)])])])])]})),_:1})])):(0,n.createCommentVNode)("",!0)],64)}],["__scopeId","data-v-3b6d71e8"]]),G=O}}]);