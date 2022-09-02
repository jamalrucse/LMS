"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9070],{9070:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g});var a=o(821),c=(0,a.createElementVNode)("div",{class:"col-md-10 col-lg-8 mx-md-auto"},[(0,a.createElementVNode)("h3",{class:"text-center mb-3"},"Setup your company's working days"),(0,a.createElementVNode)("p",{class:"h5 text-center mb-3"},"Please check the working days you want to add for the application")],-1),l={class:"email-login mt-4"},n={class:"d-flex flex-wrap flex-column"},r={class:"d-flex flex-wrap row"},d={class:"col-12 col-sm-3"},s=["checked"],m={class:"col-12 col-sm-3"},i=["checked"],u={class:"col-12 col-sm-3"},y=["checked"],p={class:"col-12 col-sm-3"},f=["checked"],h={class:"col-12 col-sm-3"},V=["checked"],k={class:"col-12 col-sm-3"},N=["checked"],v={class:"col-12 col-sm-3"},b=["checked"],E=["disabled"],x={key:1};const w={data:function(){return{form:this.$inertia.form({sunday:!1,monday:!0,tuesday:!0,wednesday:!0,thursday:!0,friday:!0,saturday:!0})}},methods:{saveData:function(){var e=this;this.form.post(route("company.account.setup.step4"),{onSuccess:function(){e.$emit("step",5),localStorage.setItem("step",5)}})}},mounted:function(){}};const g=(0,o(3744).Z)(w,[["render",function(e,t,o,w,g,D){var S=(0,a.resolveComponent)("Head"),_=(0,a.resolveComponent)("Loading");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(S,{title:"Step 4 (4/5)"}),c,(0,a.createElementVNode)("form",{onSubmit:t[7]||(t[7]=(0,a.withModifiers)((function(){return D.saveData&&D.saveData.apply(D,arguments)}),["prevent"]))},[(0,a.createElementVNode)("div",l,[(0,a.createElementVNode)("div",n,[(0,a.createElementVNode)("div",r,[(0,a.createElementVNode)("div",d,[(0,a.createElementVNode)("label",null,[(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return g.form.sunday=e}),checked:g.form.sunday,type:"checkbox"},null,8,s),[[a.vModelCheckbox,g.form.sunday]]),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Sunday")),1)])]),(0,a.createElementVNode)("div",m,[(0,a.createElementVNode)("label",null,[(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return g.form.monday=e}),checked:g.form.monday,type:"checkbox"},null,8,i),[[a.vModelCheckbox,g.form.monday]]),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Monday")),1)])]),(0,a.createElementVNode)("div",u,[(0,a.createElementVNode)("label",null,[(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return g.form.tuesday=e}),checked:g.form.tuesday,type:"checkbox"},null,8,y),[[a.vModelCheckbox,g.form.tuesday]]),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Tuesday")),1)])]),(0,a.createElementVNode)("div",p,[(0,a.createElementVNode)("label",null,[(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return g.form.wednesday=e}),checked:g.form.wednesday,type:"checkbox"},null,8,f),[[a.vModelCheckbox,g.form.wednesday]]),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Wednesday")),1)])]),(0,a.createElementVNode)("div",h,[(0,a.createElementVNode)("label",null,[(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return g.form.thursday=e}),checked:g.form.thursday,type:"checkbox"},null,8,V),[[a.vModelCheckbox,g.form.thursday]]),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Thursday")),1)])]),(0,a.createElementVNode)("div",k,[(0,a.createElementVNode)("label",null,[(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return g.form.friday=e}),checked:g.form.friday,type:"checkbox"},null,8,N),[[a.vModelCheckbox,g.form.friday]]),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Friday")),1)])]),(0,a.createElementVNode)("div",v,[(0,a.createElementVNode)("label",null,[(0,a.withDirectives)((0,a.createElementVNode)("input",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return g.form.saturday=e}),checked:g.form.saturday,type:"checkbox"},null,8,b),[[a.vModelCheckbox,g.form.saturday]]),(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Saturday")),1)])])])]),(0,a.createElementVNode)("button",{disabled:g.form.processing,type:"submit",class:"cta-btn bg-primary btn-sm w-25 ml-auto"},[g.form.processing?((0,a.openBlock)(),(0,a.createBlock)(_,{key:0,messageShow:!1})):((0,a.openBlock)(),(0,a.createElementBlock)("span",x,(0,a.toDisplayString)(e.__("Next")),1))],8,E)])],32)],64)}]])}}]);