/*! For license information please see 5450.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5450],{4391:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(3645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".card-size[data-v-179a470c]{width:18rem}",""]);const a=o},5450:(e,t,r)=>{r.r(t),r.d(t,{default:()=>H});var n=r(821),o=function(e){return(0,n.pushScopeId)("data-v-179a470c"),e=e(),(0,n.popScopeId)(),e},a={class:"row justify-content-center pt-5"},c={class:"col-12"},i={class:"card"},l={class:"card-header"},s={class:"card-title"},u={class:"card"},d={class:"card-header"},f={class:"nav nav-pills mb-3",id:"pills-tab",role:"tablist"},m={class:"nav-item"},h=["onClick"],p={class:"card-body"},v={class:"tab-content",id:"pills-tabContent"},y={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 semi-gutters"},g={key:0,class:"card h-100"},w=["src"],E={class:"card-body"},b={class:"card-title"},k=(0,n.createTextVNode)(),N=o((function(){return(0,n.createElementVNode)("br",null,null,-1)})),x={key:0,class:"m-0 p-0"},V={class:"mt-0 p-0"},L={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 semi-gutters"},B={key:0,class:"card h-100"},S=["src"],_={class:"card-body"},T={class:"card-title"},C=(0,n.createTextVNode)(),j=o((function(){return(0,n.createElementVNode)("br",null,null,-1)})),O={key:0,class:"m-0 p-0"},F={class:"mt-0 p-0"};function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function D(){D=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(e){i=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,a=Object.create(o.prototype),c=new N(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return V()}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var i=E(c,r);if(i){if(i===u)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,c),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var u={};function d(){}function f(){}function m(){}var h={};i(h,o,(function(){return this}));var p=Object.getPrototypeOf,v=p&&p(p(x([])));v&&v!==t&&r.call(v,o)&&(h=v);var y=m.prototype=d.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function n(o,a,c,i){var l=s(e[o],e,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==P(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(d).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,i)}))}i(l.arg)}var o;this._invoke=function(e,r){function a(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(a,a):a()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function x(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:V}}function V(){return{value:void 0,done:!0}}return f.prototype=m,i(y,"constructor",m),i(m,"constructor",f),f.displayName=i(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,i(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(w.prototype),i(w.prototype,a,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var c=new w(l(t,r,n,o),a);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},g(y),i(y,c,"Generator"),i(y,o,(function(){return this})),i(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=x,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var i=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(i&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=e,c.arg=t,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}function G(e,t,r,n,o,a,c){try{var i=e[a](c),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(n,o)}const I={props:{teams:Array,employees:Object},data:function(){return{currentTab:"all",employees:this.employees}},methods:{changeTab:function(e){var t,r=this;return(t=D().mark((function t(){var n;return D().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.currentTab=e,t.next=3,axios.get(route("employee.teams.employees",{team:e}));case 3:n=t.sent,r.employees=n.data.employees;case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(e){G(a,n,o,c,i,"next",e)}function i(e){G(a,n,o,c,i,"throw",e)}c(void 0)}))})()}},mounted:function(){this.checkPagePermission("employee")}};var z=r(3379),A=r.n(z),Z=r(4391),Y={insert:"head",singleton:!1};A()(Z.Z,Y);Z.Z.locals;const H=(0,r(3744).Z)(I,[["render",function(e,t,r,o,P,D){var G=(0,n.resolveComponent)("Head");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(G,{title:e.__("Team Members")},null,8,["title"]),(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("div",s,(0,n.toDisplayString)(e.__("Colleagues")),1)])]),(0,n.createElementVNode)("div",u,[(0,n.createElementVNode)("div",d,[(0,n.createElementVNode)("ul",f,[(0,n.createElementVNode)("li",m,[(0,n.createElementVNode)("a",{href:"javascript:void(0)",onClick:t[0]||(t[0]=function(e){return D.changeTab("all")}),class:(0,n.normalizeClass)(["nav-link",{active:"all"==P.currentTab}])},(0,n.toDisplayString)(e.__("All")),3)]),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(r.teams,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("li",{class:"nav-item",key:e.id},[(0,n.createElementVNode)("a",{href:"javascript:void(0)",onClick:function(t){return D.changeTab(e.slug)},class:(0,n.normalizeClass)(["nav-link",{active:P.currentTab==e.slug}])},(0,n.toDisplayString)(e.name),11,h)])})),128))])]),(0,n.createElementVNode)("div",p,[(0,n.createElementVNode)("div",v,[(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["tab-pane fade",{"show active":"all"==P.currentTab}])},[(0,n.createElementVNode)("div",y,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(P.employees,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{class:"col mb-4",key:e.id},[e.user?((0,n.openBlock)(),(0,n.createElementBlock)("div",g,[(0,n.createElementVNode)("img",{src:e.user.avatar,class:"card-image-top"},null,8,w),(0,n.createElementVNode)("div",E,[(0,n.createElementVNode)("h6",b,(0,n.toDisplayString)(e.user.name),1),k,N,e.team?((0,n.openBlock)(),(0,n.createElementBlock)("p",x,(0,n.toDisplayString)(e.team.name),1)):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("p",V,(0,n.toDisplayString)(e.user.email),1)])])):(0,n.createCommentVNode)("",!0)])})),128))])],2),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(r.teams,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{class:(0,n.normalizeClass)(["tab-pane fade",{"show active":P.currentTab==e.slug}]),key:e.id},[(0,n.createElementVNode)("div",L,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(P.employees,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{class:"col mb-4",key:e.id},[e.user?((0,n.openBlock)(),(0,n.createElementBlock)("div",B,[(0,n.createElementVNode)("img",{src:e.user.avatar,class:"card-image-top"},null,8,S),(0,n.createElementVNode)("div",_,[(0,n.createElementVNode)("h6",T,(0,n.toDisplayString)(e.user.name),1),C,j,e.team?((0,n.openBlock)(),(0,n.createElementBlock)("p",O,(0,n.toDisplayString)(e.team.name),1)):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("p",F,(0,n.toDisplayString)(e.user.email),1)])])):(0,n.createCommentVNode)("",!0)])})),128))])],2)})),128))])])])])])],64)}],["__scopeId","data-v-179a470c"]])}}]);