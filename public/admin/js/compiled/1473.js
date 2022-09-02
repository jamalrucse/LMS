/*! For license information please see 1473.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1473],{7483:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(3645),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,".title[data-v-a31e31b4]{margin:0}.subtitle[data-v-a31e31b4],.title[data-v-a31e31b4]{font-weight:700;text-align:center}.email-login[data-v-a31e31b4]{display:flex;flex-direction:column}input[type=password][data-v-a31e31b4],input[type=text][data-v-a31e31b4]{border:1px solid #ccc;border-radius:8px;box-sizing:border-box;margin-bottom:15px;padding:15px 20px}.cta-btn[data-v-a31e31b4]{border:none;border-radius:10px;margin-bottom:20px;margin-top:10px;padding:16px 20px!important;width:100%}.mt--10[data-v-a31e31b4]{margin-top:-10px}.auth-card-width[data-v-a31e31b4]{width:500px!important}",""]);const a=o},3966:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(3645),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,".auto-logo[data-v-63ce9e1e]{height:55px;-o-object-fit:cover;object-fit:cover;width:160px}",""]);const a=o},1473:(t,e,r)=>{r.r(e),r.d(e,{default:()=>V});var n=r(821),o={class:"mt-5 pt-2 row align-items-center justify-content-center"},a={class:"auth-card-width"},i={class:"card card-outline card-primary card-width"},c={class:"card-header text-center"},l={href:"#",class:"h1"},s={class:"card-body"},u={class:"title"},d={class:"subtitle"},f={class:"email-login"},p=["placeholder"],h=["placeholder"],m=["disabled"],v={key:1},g={class:"card"},y={class:"card-body"},w={class:"d-flex"};var b=r(4852);const x={layout:"Auth",props:{errors:Object},components:{Logo:b.Z},data:function(){return{form:this.$inertia.form({email:null,password:null})}},computed:{disabledButton:function(){return this.form.email&&this.form.password}},methods:{login:function(){this.form.post("/login")},roleLogin:function(t,e){this.form.email=t,this.form.password=e,this.login()}},mounted:function(){localStorage.removeItem("toggleDarkMode")}};var E=r(3379),L=r.n(E),_=r(7483),N={insert:"head",singleton:!1};L()(_.Z,N);_.Z.locals;const V=(0,r(3744).Z)(x,[["render",function(t,e,r,b,x,E){var L=(0,n.resolveComponent)("Head"),_=(0,n.resolveComponent)("Logo"),N=(0,n.resolveComponent)("Link"),V=(0,n.resolveComponent)("AuthLabel"),k=(0,n.resolveComponent)("AuthErrorMessage"),S=(0,n.resolveComponent)("Loading");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(L,{title:t.__("Sign In")},null,8,["title"]),(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("a",l,[(0,n.createVNode)(_)])]),(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("form",{onSubmit:e[2]||(e[2]=(0,n.withModifiers)((function(){return E.login&&E.login.apply(E,arguments)}),["prevent"]))},[(0,n.createElementVNode)("h2",u,(0,n.toDisplayString)(t.__("Sign In")),1),(0,n.createElementVNode)("p",d,[(0,n.createTextVNode)((0,n.toDisplayString)(t.__("Don't have an account"))+" ",1),(0,n.createVNode)(N,{href:t.route("register.form")},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(t.__("Sign Up")),1)]})),_:1},8,["href"])]),(0,n.createElementVNode)("div",f,[(0,n.createVNode)(V,{name:"Email"}),(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return x.form.email=t}),class:(0,n.normalizeClass)({"border-danger":x.form.errors.email}),type:"text",placeholder:t.__("Email")},null,10,p),[[n.vModelText,x.form.email]]),(0,n.createVNode)(k,{name:r.errors.email},null,8,["name"]),(0,n.createVNode)(V,{name:"Password"}),(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return x.form.password=t}),class:(0,n.normalizeClass)({"border-danger":x.form.errors.password}),type:"password",placeholder:t.__("Password")},null,10,h),[[n.vModelText,x.form.password]]),(0,n.createVNode)(k,{name:r.errors.password},null,8,["name"])]),(0,n.createElementVNode)("button",{disabled:x.form.processing,type:"submit",class:"cta-btn bg-primary"},[x.form.processing?((0,n.openBlock)(),(0,n.createBlock)(S,{key:0,messageShow:!1})):((0,n.openBlock)(),(0,n.createElementBlock)("span",v,(0,n.toDisplayString)(t.__("Sign In")),1))],8,m),(0,n.createVNode)(N,{href:t.route("password.email"),class:"text-center"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(t.__("Forgot password")),1)]})),_:1},8,["href"])],32)])]),(0,n.createElementVNode)("div",g,[(0,n.createElementVNode)("div",y,[(0,n.createElementVNode)("div",w,[(0,n.createElementVNode)("button",{onClick:e[3]||(e[3]=function(t){return E.roleLogin("admin@mail.com","password")}),class:"btn btn-secondary"},"Login Via Admin"),(0,n.createElementVNode)("button",{onClick:e[4]||(e[4]=function(t){return E.roleLogin("owner@mail.com","password")}),class:"btn btn-secondary mx-1"},"Login Via Company"),(0,n.createElementVNode)("button",{onClick:e[5]||(e[5]=function(t){return E.roleLogin("employee@mail.com","password")}),class:"btn btn-secondary"},"Login Via Employee")])])])])])],64)}],["__scopeId","data-v-a31e31b4"]])},4852:(t,e,r)=>{r.d(e,{Z:()=>p});var n=r(821),o=["src"];function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=d(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function p(){}function h(){}function m(){}var v={};s(v,o,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(V([])));y&&y!==e&&r.call(y,o)&&(v=y);var w=m.prototype=p.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,i,c,l){var s=d(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==a(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,l)}),(function(t){n("throw",t,c,l)})):e.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,l)}))}l(s.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=d(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function V(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=m,s(w,"constructor",m),s(m,"constructor",h),h.displayName=s(m,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,c,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(w),s(w,l,"Generator"),s(w,o,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=V,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:V(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function c(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}const l={data:function(){return{setting:{}}},mounted:function(){var t,e=this;return(t=i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get(route("app.setting"));case 2:r=t.sent,e.setting=r.data;case 4:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){c(a,n,o,i,l,"next",t)}function l(t){c(a,n,o,i,l,"throw",t)}i(void 0)}))})()}};var s=r(3379),u=r.n(s),d=r(3966),f={insert:"head",singleton:!1};u()(d.Z,f);d.Z.locals;const p=(0,r(3744).Z)(l,[["render",function(t,e,r,a,i,c){return(0,n.openBlock)(),(0,n.createElementBlock)("img",{src:i.setting.app_dark_logo,alt:"logo",class:"auto-logo"},null,8,o)}],["__scopeId","data-v-63ce9e1e"]])}}]);