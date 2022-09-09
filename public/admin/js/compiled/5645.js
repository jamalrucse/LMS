"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5645],{5645:(e,o,r)=>{r.r(o),r.d(o,{default:()=>w});var t=r(821),n={class:"card-body"},a={class:"login-box-msg"},l={class:"input-group mb-3"},s=["placeholder"],c=(0,t.createElementVNode)("div",{class:"input-group-append"},[(0,t.createElementVNode)("div",{class:"input-group-text"},[(0,t.createElementVNode)("span",{class:"fas fa-user"})])],-1),i={class:"input-group mb-3"},m=(0,t.createElementVNode)("div",{class:"input-group-append"},[(0,t.createElementVNode)("div",{class:"input-group-text"},[(0,t.createElementVNode)("span",{class:"fas fa-lock"})])],-1),d={class:"input-group mb-3"},p=["placeholder"],u=(0,t.createElementVNode)("div",{class:"input-group-append"},[(0,t.createElementVNode)("div",{class:"input-group-text"},[(0,t.createElementVNode)("span",{class:"fas fa-lock"})])],-1),f={class:"row"},V={class:"col-8"},N={class:"icheck-primary"},g={for:"agreeTerms",class:"ml-2"},v={href:"#"},E={class:"col-4"},h=["disabled"],_={key:1};const k={layout:"Auth",props:{token:{type:String,required:!0},errors:Object},data:function(){return{form:this.$inertia.form({name:null,password:null,password_confirmation:null,terms_confirmed:null,token:this.token})}},methods:{createData:function(){console.log(this.form),this.form.post(route("company.store.employee"))}}};const w=(0,r(3744).Z)(k,[["render",function(e,o,r,k,w,b){var y=(0,t.resolveComponent)("Head"),x=(0,t.resolveComponent)("ErrorMessage"),D=(0,t.resolveComponent)("Loading");return(0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,null,[(0,t.createVNode)(y,{title:e.__("Sign Up")},null,8,["title"]),(0,t.createElementVNode)("div",n,[(0,t.createElementVNode)("p",a,(0,t.toDisplayString)(e.__("Sign up to join the company")),1),(0,t.createElementVNode)("form",{onSubmit:o[4]||(o[4]=(0,t.withModifiers)((function(){return b.createData&&b.createData.apply(b,arguments)}),["prevent"]))},[(0,t.createElementVNode)("div",l,[(0,t.withDirectives)((0,t.createElementVNode)("input",{"onUpdate:modelValue":o[0]||(o[0]=function(e){return w.form.name=e}),type:"text",class:(0,t.normalizeClass)(["form-control",{"is-invalid":w.form.errors.name}]),placeholder:e.__("Full Name")},null,10,s),[[t.vModelText,w.form.name]]),c,(0,t.createVNode)(x,{name:w.form.errors.name},null,8,["name"])]),(0,t.createElementVNode)("div",i,[(0,t.withDirectives)((0,t.createElementVNode)("input",{"onUpdate:modelValue":o[1]||(o[1]=function(e){return w.form.password=e}),type:"password",class:(0,t.normalizeClass)(["form-control",{"is-invalid":w.form.errors.password}]),placeholder:"Password"},null,2),[[t.vModelText,w.form.password]]),m,(0,t.createVNode)(x,{name:w.form.errors.password},null,8,["name"])]),(0,t.createElementVNode)("div",d,[(0,t.withDirectives)((0,t.createElementVNode)("input",{"onUpdate:modelValue":o[2]||(o[2]=function(e){return w.form.password_confirmation=e}),type:"password",class:(0,t.normalizeClass)(["form-control",{"is-invalid":w.form.errors.password_confirmation}]),placeholder:e.__("Confirm password")},null,10,p),[[t.vModelText,w.form.password_confirmation]]),u,(0,t.createVNode)(x,{name:w.form.errors.password_confirmation},null,8,["name"])]),(0,t.createElementVNode)("div",f,[(0,t.createElementVNode)("div",V,[(0,t.createElementVNode)("div",N,[(0,t.withDirectives)((0,t.createElementVNode)("input",{"onUpdate:modelValue":o[3]||(o[3]=function(e){return w.form.terms_confirmed=e}),type:"checkbox",id:"agreeTerms",name:"terms",value:"agree"},null,512),[[t.vModelCheckbox,w.form.terms_confirmed]]),(0,t.createElementVNode)("label",g,[(0,t.createTextVNode)((0,t.toDisplayString)(e.__("I agree to the"))+" ",1),(0,t.createElementVNode)("a",v,(0,t.toDisplayString)(e.__("terms & condition")),1)])]),(0,t.createVNode)(x,{name:w.form.errors.terms_confirmed,class:"d-block"},null,8,["name"])]),(0,t.createElementVNode)("div",E,[(0,t.createElementVNode)("button",{disabled:w.form.processing,class:"btn btn-primary btn-block"},[w.form.processing?((0,t.openBlock)(),(0,t.createBlock)(D,{key:0,message:"Signing Up..."})):((0,t.openBlock)(),(0,t.createElementBlock)("span",_,(0,t.toDisplayString)(e.__("Sign Up")),1))],8,h)])])],32)])],64)}]])}}]);