"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6501],{6501:(e,t,o)=>{o.r(t),o.d(t,{default:()=>_});var a=o(821),c={class:"col-md-10 col-lg-8 mx-md-auto"},l={class:"text-center mb-3"},n={class:"h5 text-center mb-3"},r={class:"email-login mt-4"},d={class:"d-flex flex-wrap flex-column"},s={class:"d-flex flex-wrap row"},i={class:"col-12 col-sm-3"},m=["checked"],u={class:"col-12 col-sm-3"},y=["checked"],p={class:"col-12 col-sm-3"},f=["checked"],h={class:"col-12 col-sm-3"},V=["checked"],k={class:"col-12 col-sm-3"},N=["checked"],v={class:"col-12 col-sm-3"},b=["checked"],E={class:"col-12 col-sm-3"},x=["checked"],w=["disabled"],g={key:1};const D={data:function(){return{form:this.$inertia.form({sunday:!1,monday:!0,tuesday:!0,wednesday:!0,thursday:!0,friday:!0,saturday:!0})}},methods:{saveData:function(){var e=this;this.form.post(route("company.account.setup.step4"),{onSuccess:function(){e.$emit("step",5)}})}},mounted:function(){}};const _=(0,o(3744).Z)(D,[["render",function(e,t,o,D,_,S){var C=(0,a.resolveComponent)("Head"),M=(0,a.resolveComponent)("Loading");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(C,{title:"Step 4 (4/5)"}),(0,a.createElementVNode)("div",c,[(0,a.createElementVNode)("h3",l,(0,a.toDisplayString)(e.__("Setup your companys working days")),1),(0,a.createElementVNode)("p",n,(0,a.toDisplayString)(e.__("Please check the working days you want to add for the application")),1)]),(0,a.createElementVNode)("form",{onSubmit:t[7]||(t[7]=(0,a.withModifiers)((function(){return S.saveData&&S.saveData.apply(S,arguments)}),["prevent"]))},[(0,a.createElementVNode)("div",r,[(0,a.createElementVNode)("div",d,[(0,a.createElementVNode)("div",s,[(0,a.createElementVNode)("div",i,[(0,a.createElementVNode)("label",null,[(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return _.form.sunday=e}),checked:_.form.sunday,type:"checkbox"},null,8,m),[[a.vModelCheckbox,_.form.sunday]]),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Sunday")),1)])]),(0,a.createElementVNode)("div",u,[(0,a.createElementVNode)("label",null,[(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return _.form.monday=e}),checked:_.form.monday,type:"checkbox"},null,8,y),[[a.vModelCheckbox,_.form.monday]]),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Monday")),1)])]),(0,a.createElementVNode)("div",p,[(0,a.createElementVNode)("label",null,[(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return _.form.tuesday=e}),checked:_.form.tuesday,type:"checkbox"},null,8,f),[[a.vModelCheckbox,_.form.tuesday]]),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Tuesday")),1)])]),(0,a.createElementVNode)("div",h,[(0,a.createElementVNode)("label",null,[(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return _.form.wednesday=e}),checked:_.form.wednesday,type:"checkbox"},null,8,V),[[a.vModelCheckbox,_.form.wednesday]]),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Wednesday")),1)])]),(0,a.createElementVNode)("div",k,[(0,a.createElementVNode)("label",null,[(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return _.form.thursday=e}),checked:_.form.thursday,type:"checkbox"},null,8,N),[[a.vModelCheckbox,_.form.thursday]]),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Thursday")),1)])]),(0,a.createElementVNode)("div",v,[(0,a.createElementVNode)("label",null,[(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return _.form.friday=e}),checked:_.form.friday,type:"checkbox"},null,8,b),[[a.vModelCheckbox,_.form.friday]]),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Friday")),1)])]),(0,a.createElementVNode)("div",E,[(0,a.createElementVNode)("label",null,[(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return _.form.saturday=e}),checked:_.form.saturday,type:"checkbox"},null,8,x),[[a.vModelCheckbox,_.form.saturday]]),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Saturday")),1)])])])]),(0,a.createElementVNode)("button",{disabled:_.form.processing,type:"submit",class:"cta-btn bg-primary btn-sm w-25 ml-auto"},[_.form.processing?((0,a.openBlock)(),(0,a.createBlock)(M,{key:0,messageShow:!1})):((0,a.openBlock)(),(0,a.createElementBlock)("span",g,(0,a.toDisplayString)(e.__("Next")),1))],8,w)])],32)],64)}]])}}]);