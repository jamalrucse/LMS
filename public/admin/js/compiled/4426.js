"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4426],{4426:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var a=r(821),o={class:"row pt-5"},n={class:"col-12"},l={class:"card"},s={class:"card-header"},c={class:"card-title"},d={class:"card-body"},i={class:"d-flex justify-content-center my-3"},p={class:"form-groups"},m=["disabled"],u={key:1},f=(0,a.createElementVNode)("i",{class:"fa-solid fa-check mr-1"},null,-1);const g={layout:"Setting",data:function(){return{form:this.$inertia.form({upgrade_zip:""})}},methods:{updateData:function(){this.form.post(route("settings.upgrade.system"))}}};const N=(0,r(3744).Z)(g,[["render",function(e,t,r,g,N,E){var V=(0,a.resolveComponent)("Head"),v=(0,a.resolveComponent)("ErrorMessage"),k=(0,a.resolveComponent)("Loading");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(V,{title:e.__("Upgrade")},null,8,["title"]),(0,a.createElementVNode)("div",o,[(0,a.createElementVNode)("div",n,[(0,a.createElementVNode)("div",l,[(0,a.createElementVNode)("div",s,[(0,a.createElementVNode)("h3",c,(0,a.toDisplayString)(e.__("Upgrade")),1)]),(0,a.createElementVNode)("div",d,[(0,a.createElementVNode)("form",{onSubmit:t[1]||(t[1]=(0,a.withModifiers)((function(){return E.updateData&&E.updateData.apply(E,arguments)}),["prevent"]))},[(0,a.createElementVNode)("div",i,[(0,a.createElementVNode)("div",p,[(0,a.createElementVNode)("input",{accept:".zip",onInput:t[0]||(t[0]=function(e){return N.form.upgrade_zip=e.target.files[0]}),type:"file",class:(0,a.normalizeClass)(["form-control border-0",{"is-invalid":N.form.errors.upgrade_zip}])},null,34),(0,a.createVNode)(v,{name:N.form.errors.upgrade_zip},null,8,["name"])]),(0,a.createElementVNode)("button",{disabled:N.form.processing,type:"submit",class:"btn btn-primary mb-2"},[N.form.processing?((0,a.openBlock)(),(0,a.createBlock)(k,{key:0,message:"Upgrading..."})):((0,a.openBlock)(),(0,a.createElementBlock)("span",u,[f,(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Upgrade Now")),1)]))],8,m)])],32)])])])])],64)}]])}}]);