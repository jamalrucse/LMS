"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1228],{1125:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(3645),l=n.n(a)()((function(e){return e[1]}));l.push([e.id,".lang-btn[data-v-19b9a622]{bottom:50px;left:50%;padding:15px;position:fixed;text-align:center;width:200px}@media (max-width:420px){.btn-custom[data-v-19b9a622]{font-size:10px;padding:2px 5px}.card-title[data-v-19b9a622]{font-size:15px}.lang-btn[data-v-19b9a622]{left:33%;padding:5px;width:100px}}",""]);const r=l},1228:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var a=n(821),l=function(e){return(0,a.pushScopeId)("data-v-19b9a622"),e=e(),(0,a.popScopeId)(),e},r={class:"row justify-content-center"},o={class:"col-12"},s={class:"card mt-3"},c={class:"card-header"},i={class:"d-flex justify-content-between"},d=l((function(){return(0,a.createElementVNode)("h3",{class:"card-title"},"Language List",-1)})),u=l((function(){return(0,a.createElementVNode)("i",{class:"fa-solid fa-arrow-left"},null,-1)})),p=(0,a.createTextVNode)(" Back "),m={class:"card-body table-responsive p-0"},f={class:"table table-striped table-bordered mt-0 pt-0",cellspacing:"0",width:"100%"},g=l((function(){return(0,a.createElementVNode)("th",{width:"48%"},"English Text",-1)})),v={width:"48%"},b={class:"d-flex justify-content-between"},h=l((function(){return(0,a.createElementVNode)("span",null,"Translation Text",-1)})),k={key:1},x={class:"text-capitalize"},E={class:"d-flex"},V=["onUpdate:modelValue"],N=["onClick"],y=[l((function(){return(0,a.createElementVNode)("span",null,"Translate",-1)}))],w=["disabled"],B={key:1},T=[l((function(){return(0,a.createElementVNode)("i",{class:"fa-solid fa-check"},null,-1)})),(0,a.createTextVNode)(" Save ")];var D=n(7757),C=n.n(D);function A(e,t,n,a,l,r,o){try{var s=e[r](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(a,l)}function S(e){return function(){var t=this,n=arguments;return new Promise((function(a,l){var r=e.apply(t,n);function o(e){A(r,a,l,o,s,"next",e)}function s(e){A(r,a,l,o,s,"throw",e)}o(void 0)}))}}const L={props:{lang:Array,translations:Array},data:function(){return{translationsData:this.translations,loading:!1,allTranslating:!1}},methods:{saveData:function(){var e=this;this.loading=!0,this.$inertia.put(route("languages.translation.update",this.lang.id),{translations:this.translationsData},{onSuccess:function(){e.loading=!1}})},replace:function(e,t,n){return e.split(t).join(n)},translateIt:function(e){var t=this;return S(C().mark((function n(){var a;return C().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,axios.get(route("languages.translate"),{params:{key:e,code:t.lang.code}});case 3:a=n.sent,t.translationsData[e]=a.data,n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()},translateAll:function(){var e=this;return S(C().mark((function t(){var n,a,l,r;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.allTranslating=!0,t.prev=1,t.next=4,axios.get(route("languages.translate.all"),{params:{id:e.lang.id}});case 4:for(n=t.sent,a=n.data[0],l=n.data[1],r=0;r<a.length;r++)e.translationsData[a[r]]=l[r]?l[r]:a[r];e.allTranslating=!1,t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0),e.allTranslating=!1;case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()}}};var I=n(3379),_=n.n(I),j=n(1125),Z={insert:"head",singleton:!1};_()(j.Z,Z);j.Z.locals;const z=(0,n(3744).Z)(L,[["render",function(e,t,n,l,D,C){var A=(0,a.resolveComponent)("Head"),S=(0,a.resolveComponent)("Link"),L=(0,a.resolveComponent)("Loading");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(A,{title:"Admin List"}),(0,a.createElementVNode)("div",r,[(0,a.createElementVNode)("div",o,[(0,a.createElementVNode)("div",s,[(0,a.createElementVNode)("div",c,[(0,a.createElementVNode)("div",i,[d,(0,a.createVNode)(S,{href:e.route("languages.index"),class:"btn btn-primary"},{default:(0,a.withCtx)((function(){return[u,p]})),_:1},8,["href"])])]),(0,a.createElementVNode)("div",m,[(0,a.createElementVNode)("form",{onSubmit:t[1]||(t[1]=(0,a.withModifiers)((function(){return C.saveData&&C.saveData.apply(C,arguments)}),["prevent"])),autocomplete:"off",class:"pb-5"},[(0,a.createElementVNode)("table",f,[(0,a.createElementVNode)("thead",null,[(0,a.createElementVNode)("tr",null,[g,(0,a.createElementVNode)("th",v,[(0,a.createElementVNode)("span",b,[h,(0,a.createElementVNode)("span",{onClick:t[0]||(t[0]=function(){return C.translateAll&&C.translateAll.apply(C,arguments)}),id:"translate_all",class:"btn bg-info btn-sm"},[D.allTranslating?((0,a.openBlock)(),(0,a.createBlock)(L,{key:0,message:"Translating..."})):((0,a.openBlock)(),(0,a.createElementBlock)("span",k,"Translate All"))])])])])]),(0,a.createElementVNode)("tbody",null,[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(n.translations,(function(e,t){return(0,a.openBlock)(),(0,a.createElementBlock)("tr",{key:t},[(0,a.createElementVNode)("td",x,(0,a.toDisplayString)(C.replace(t,"_"," ")),1),(0,a.createElementVNode)("td",null,[(0,a.createElementVNode)("span",E,[(0,a.withDirectives)((0,a.createElementVNode)("input",{type:"text",class:"form-control",style:{width:"100%"},"onUpdate:modelValue":function(e){return D.translationsData[t]=e}},null,8,V),[[a.vModelText,D.translationsData[t]]]),(0,a.createElementVNode)("button",{type:"button",onClick:function(e){return C.translateIt(t)},class:"btn btn-sm ml-1 bg-info"},y,8,N)])])])})),128))])]),(0,a.createElementVNode)("button",{disabled:D.loading,type:"submit",class:"lang-btn btn btn-primary"},[D.loading?((0,a.openBlock)(),(0,a.createBlock)(L,{key:0,message:"Saving..."})):((0,a.openBlock)(),(0,a.createElementBlock)("span",B,T))],8,w)],32)])])])])],64)}],["__scopeId","data-v-19b9a622"]])}}]);