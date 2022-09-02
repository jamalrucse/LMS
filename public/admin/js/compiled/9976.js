/*! For license information please see 9976.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9976],{9976:(t,e,r)=>{r.r(e),r.d(e,{default:()=>S});var n=r(821),o=(0,n.createElementVNode)("div",{class:"col-md-10 col-lg-8 mx-md-auto"},[(0,n.createElementVNode)("h3",{class:"text-center mb-3"},"Invite your team members to manage their leave"),(0,n.createElementVNode)("p",{class:"h5 text-center mb-3"},"Add team members and assign them to a team. Skip this step if you want to do this later.")],-1),a={class:"email-login"},i={class:"col-lg-5"},c=["onUpdate:modelValue","placeholder"],l={class:"col-lg-5"},s=["onUpdate:modelValue"],u={value:"",class:"d-none"},f=["value"],m={key:0,class:"col-lg-1"},h=[(0,n.createElementVNode)("i",{class:"fas fa-plus"},null,-1)],p={key:1,class:"col-lg-1"},d=["onClick"],y=[(0,n.createElementVNode)("i",{class:"fas fa-times"},null,-1)],v={class:"row justify-content-center"},g=["disabled"],w={key:1},b={class:"d-flex justify-content-end mt-5 pt-5"};function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function k(){k=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return V()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var u={};function f(){}function m(){}function h(){}var p={};c(p,o,(function(){return this}));var d=Object.getPrototypeOf,y=d&&d(d(S([])));y&&y!==e&&r.call(y,o)&&(p=y);var v=h.prototype=f.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function n(o,a,i,c){var l=s(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==E(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:V}}function V(){return{value:void 0,done:!0}}return m.prototype=h,c(v,"constructor",h),c(h,"constructor",m),m.displayName=c(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,i,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(v),c(v,i,"Generator"),c(v,o,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}function x(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function L(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){x(a,n,o,i,c,"next",t)}function c(t){x(a,n,o,i,c,"throw",t)}i(void 0)}))}}const N={data:function(){return{form:this.$inertia.form({emails:[""],teams:[""]}),teams:[]}},methods:{getTeams:function(){var t=this;return L(k().mark((function e(){var r;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get(route("fetch.company.teams"));case 2:r=e.sent,t.teams=r.data;case 4:case"end":return e.stop()}}),e)})))()},addMore:function(){this.form.teams.push(""),this.form.emails.push("")},removeField:function(t){this.form.emails.splice(t,1),this.form.teams.splice(t,1)},saveData:function(){var t=this;this.form.post(route("company.account.setup.step3"),{onSuccess:function(){t.form.reset()}})},changeStep:function(){this.$emit("step",4),localStorage.setItem("step",4)}},mounted:function(){var t=this;return L(k().mark((function e(){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getTeams();case 2:case"end":return e.stop()}}),e)})))()}};const S=(0,r(3744).Z)(N,[["render",function(t,e,r,E,k,x){var L=(0,n.resolveComponent)("Head"),N=(0,n.resolveComponent)("Loading");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(L,{title:"Step 3 (3/5)"}),o,(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("form",{onSubmit:e[1]||(e[1]=(0,n.withModifiers)((function(){return x.saveData&&x.saveData.apply(x,arguments)}),["prevent"]))},[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(k.form.emails,(function(r,o){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{class:"row my-1 justify-content-center",key:o},[(0,n.createElementVNode)("div",i,[(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":function(t){return k.form.emails[o]=t},class:(0,n.normalizeClass)([{"border-danger":k.form.errors.emails},"d-block"]),type:"email",placeholder:t.__("Employee Email")},null,10,c),[[n.vModelText,k.form.emails[o]]])]),(0,n.createElementVNode)("div",l,[(0,n.withDirectives)((0,n.createElementVNode)("select",{"onUpdate:modelValue":function(t){return k.form.teams[o]=t},class:(0,n.normalizeClass)({"border-danger":k.form.errors.teams})},[(0,n.createElementVNode)("option",u,(0,n.toDisplayString)(t.__("Select Team")),1),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(k.teams,(function(t){return(0,n.openBlock)(),(0,n.createElementBlock)("option",{value:t.id,key:t.id},(0,n.toDisplayString)(t.name),9,f)})),128))],10,s),[[n.vModelSelect,k.form.teams[o]]])]),0==o?((0,n.openBlock)(),(0,n.createElementBlock)("div",m,[(0,n.createElementVNode)("button",{type:"button",class:"cta-btn bg-primary mt-0",onClick:e[0]||(e[0]=function(){return x.addMore&&x.addMore.apply(x,arguments)})},h)])):((0,n.openBlock)(),(0,n.createElementBlock)("div",p,[(0,n.createElementVNode)("button",{type:"button",class:"cta-btn bg-danger mt-0",onClick:function(t){return x.removeField(o)}},y,8,d)]))])})),128)),(0,n.createElementVNode)("div",v,[(0,n.createElementVNode)("button",{disabled:k.form.processing,type:"submit",class:"cta-btn bg-primary btn-sm w-25"},[k.form.processing?((0,n.openBlock)(),(0,n.createBlock)(N,{key:0,messageShow:!1})):((0,n.openBlock)(),(0,n.createElementBlock)("span",w,(0,n.toDisplayString)(t.__("Invite")),1))],8,g)])],32),(0,n.createElementVNode)("div",b,[(0,n.createElementVNode)("button",{type:"button",class:"cta-btn bg-primary w-25 ml-2",onClick:e[2]||(e[2]=function(){return x.changeStep&&x.changeStep.apply(x,arguments)})},(0,n.toDisplayString)(t.__("Next")),1)])])],64)}]])}}]);