(self.webpackChunk=self.webpackChunk||[]).push([[6420],{8563:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".avatar-img[data-v-bacf9114]{height:60px;-o-object-fit:cover;object-fit:cover;width:60px}.leave-type-color[data-v-bacf9114]{border-radius:30px;color:#fff;font-weight:500;padding:2px 5px}",""]);const a=o},2705:(e,t,n)=>{var r=n(5639).Symbol;e.exports=r},4239:(e,t,n)=>{var r=n(2705),o=n(9607),a=n(2333),l=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?o(e):a(e)}},7561:(e,t,n)=>{var r=n(7990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},1957:(e,t,n)=>{var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:(e,t,n)=>{var r=n(2705),o=Object.prototype,a=o.hasOwnProperty,l=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(e){}var o=l.call(e);return r&&(t?e[c]=n:delete e[c]),o}},2333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:(e,t,n)=>{var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},7990:e=>{var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},3279:(e,t,n)=>{var r=n(3218),o=n(7771),a=n(4841),l=Math.max,c=Math.min;e.exports=function(e,t,n){var i,s,u,d,p,m,v=0,f=!1,y=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=s;return i=s=void 0,v=t,d=e.apply(r,n)}function N(e){return v=e,p=setTimeout(h,t),f?b(e):d}function k(e){var n=e-m;return void 0===m||n>=t||n<0||y&&e-v>=u}function h(){var e=o();if(k(e))return E(e);p=setTimeout(h,function(e){var n=t-(e-m);return y?c(n,u-(e-v)):n}(e))}function E(e){return p=void 0,g&&i?b(e):(i=s=void 0,d)}function V(){var e=o(),n=k(e);if(i=arguments,s=this,m=e,n){if(void 0===p)return N(m);if(y)return clearTimeout(p),p=setTimeout(h,t),b(m)}return void 0===p&&(p=setTimeout(h,t)),d}return t=a(t)||0,r(n)&&(f=!!n.leading,u=(y="maxWait"in n)?l(a(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),V.cancel=function(){void 0!==p&&clearTimeout(p),v=0,i=m=s=p=void 0},V.flush=function(){return void 0===p?d:E(o())},V}},3218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3448:(e,t,n)=>{var r=n(4239),o=n(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},7771:(e,t,n)=>{var r=n(5639);e.exports=function(){return r.Date.now()}},4841:(e,t,n)=>{var r=n(7561),o=n(3218),a=n(3448),l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,i=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=c.test(e);return n||i.test(e)?s(e.slice(2),n?2:8):l.test(e)?NaN:+e}},6420:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var r=n(821),o={class:"row justify-content-center"},a={class:"col-12"},l={class:"card"},c={class:"card-header border-0"},i={class:"d-flex justify-content-between"},s={class:"card-title"},u=function(e){return(0,r.pushScopeId)("data-v-bacf9114"),e=e(),(0,r.popScopeId)(),e}((function(){return(0,r.createElementVNode)("i",{class:"fa-solid fa-plus"},null,-1)})),d={class:"card-body table-responsive p-0"},p={class:"table table-valign-middle"},m=["src"],v=(0,r.createTextVNode)(") "),f={href:"#"},y={class:"text-danger ml-1"},g=(0,r.createTextVNode)(") "),b={class:"d-flex"},N={key:1},k={colspan:"20",class:"text-center"};var h=n(9418),E=(n(3279),n(9680));const V={props:{leaveRequest:{type:Object,required:!0}},components:{Inertia:E.Inertia},methods:{statusChange:function(e){E.Inertia.post(route("company.leaveRequests.status"),{id:this.leaveRequest.id,status:e})},editData:function(e){E.Inertia.get(route("company.leaveRequests.edit",e))},deleteData:function(){var e=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed&&E.Inertia.delete(route("company.leaveRequests.destroy",e.leaveRequest.id),{preserveScroll:!0})}))}}};var D=n(3744);const x=(0,D.Z)(V,[["render",function(e,t,n,o,a,l){var c=(0,r.resolveComponent)("CheckIcon"),i=(0,r.resolveComponent)("CrossIcon"),s=(0,r.resolveComponent)("EditIcon"),u=(0,r.resolveComponent)("DeleteIcon"),d=(0,r.resolveDirective)("tooltip");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,["pending"==n.leaveRequest.status||"rejected"==n.leaveRequest.status?(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createElementBlock)("button",{key:0,onClick:t[0]||(t[0]=function(e){return l.statusChange("approved")}),class:"btn btn-sm"},[(0,r.createVNode)(c)])),[[d,e.__("Accept Request")]]):(0,r.createCommentVNode)("",!0),"pending"==n.leaveRequest.status||"approved"==n.leaveRequest.status?(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createElementBlock)("button",{key:1,onClick:t[1]||(t[1]=function(e){return l.statusChange("rejected")}),class:"btn btn-sm"},[(0,r.createVNode)(i)])),[[d,e.__("Reject Request")]]):(0,r.createCommentVNode)("",!0),"pending"==n.leaveRequest.status?(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createElementBlock)("button",{key:2,onClick:t[2]||(t[2]=function(e){return l.editData(n.leaveRequest.id)}),class:"btn btn-sm"},[(0,r.createVNode)(s)])),[[d,e.__("Edit Request")]]):(0,r.createCommentVNode)("",!0),(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createElementBlock)("button",{onClick:t[3]||(t[3]=function(e){return l.deleteData()}),class:"btn btn-sm"},[(0,r.createVNode)(u)])),[[d,e.__("Delete Request")]])],64)}]]);var B=n(7484),_=n.n(B);const C={props:{leaveRequests:Array},components:{Pagination:h.Z,Inertia:E.Inertia,Actions:x},data:function(){return{}},methods:{getBadgeType:function(e){return"pending"==e?"badge-warning":"approved"==e?"badge-success":"badge-danger"},startDate:function(e){return _()(e).format("DD MMM, YYYY")},endDate:function(e){return _()(e).format("DD MMM, YYYY")}}};var S=n(3379),q=n.n(S),R=n(8563),T={insert:"head",singleton:!1};q()(R.Z,T);R.Z.locals;const j=(0,D.Z)(C,[["render",function(e,t,n,h,E,V){var D=(0,r.resolveComponent)("Head"),x=(0,r.resolveComponent)("Link"),B=(0,r.resolveComponent)("Actions"),_=(0,r.resolveComponent)("Pagination"),C=(0,r.resolveDirective)("tooltip");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(D,{title:e.__("Leave Request List")},null,8,["title"]),(0,r.createElementVNode)("div",o,[(0,r.createTextVNode)((0,r.toDisplayString)(e.pluralize(5,"apple"))+" ",1),(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("h3",s,(0,r.toDisplayString)(e.__("Leave Request List")),1),(0,r.createVNode)(x,{href:e.route("company.leaveRequests.create"),class:"btn btn-primary"},{default:(0,r.withCtx)((function(){return[u,(0,r.createTextVNode)(" "+(0,r.toDisplayString)(e.__("Create a new request")),1)]})),_:1},8,["href"])])]),(0,r.createElementVNode)("div",d,[(0,r.createElementVNode)("table",p,[(0,r.createElementVNode)("thead",null,[(0,r.createElementVNode)("tr",null,[(0,r.createElementVNode)("th",null,(0,r.toDisplayString)(e.__("Employee")),1),(0,r.createElementVNode)("th",null,(0,r.toDisplayString)(e.__("Leave Type")),1),(0,r.createElementVNode)("th",null,(0,r.toDisplayString)(e.__("Team")),1),(0,r.createElementVNode)("th",null,(0,r.toDisplayString)(e.__("Date")),1),(0,r.createElementVNode)("th",null,(0,r.toDisplayString)(e.__("Status")),1),(0,r.createElementVNode)("th",null,(0,r.toDisplayString)(e.__("Action")),1)])]),(0,r.createElementVNode)("tbody",null,[n.leaveRequests&&n.leaveRequests.data.length?((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,{key:0},(0,r.renderList)(n.leaveRequests.data,(function(t,n){return(0,r.openBlock)(),(0,r.createElementBlock)("tr",{key:n},[(0,r.createElementVNode)("td",null,[(0,r.createElementVNode)("img",{src:t.employee.user.avatar,alt:"Product 1",class:"img-circle img-size-32 mr-2"},null,8,m),(0,r.createTextVNode)(" "+(0,r.toDisplayString)(t.employee.user.name)+" (",1),(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createElementBlock)("small",null,[(0,r.createTextVNode)((0,r.toDisplayString)(t.company.user.name),1)])),[[C,"Company Name"]]),v]),(0,r.createElementVNode)("td",null,[(0,r.createElementVNode)("span",{style:(0,r.normalizeStyle)({background:t.leave_type.color,border:"2px solid "+t.leave_type.color}),class:"leave-type-color"},(0,r.toDisplayString)(t.leave_type.name),5)]),(0,r.createElementVNode)("td",null,[(0,r.createElementVNode)("a",f,(0,r.toDisplayString)(t.employee.team.name),1)]),(0,r.createElementVNode)("td",null,[(0,r.createTextVNode)((0,r.toDisplayString)(V.startDate(t.start))+" - "+(0,r.toDisplayString)(V.endDate(t.end))+" (",1),(0,r.createElementVNode)("span",y,(0,r.toDisplayString)(t.days)+" "+(0,r.toDisplayString)(e.pluralize(t.days,"Day")),1),g]),(0,r.createElementVNode)("td",null,[(0,r.createElementVNode)("span",{class:(0,r.normalizeClass)(["toCapitalFirst badge",V.getBadgeType(t.status)])},(0,r.toDisplayString)(t.status),3)]),(0,r.createElementVNode)("td",b,[(0,r.createVNode)(B,{leaveRequest:t},null,8,["leaveRequest"])])])})),128)):((0,r.openBlock)(),(0,r.createElementBlock)("tr",N,[(0,r.createElementVNode)("td",k,[(0,r.createElementVNode)("h6",null,(0,r.toDisplayString)(e.__("No Data Found")),1)])]))])]),(0,r.createVNode)(_,{links:n.leaveRequests.links},null,8,["links"])])])])])],64)}],["__scopeId","data-v-bacf9114"]]),w=j},9418:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(821),o={class:"pagination justify-content-center"},a=["innerHTML"];const l={props:{links:{type:Array,required:!0}}};const c=(0,n(3744).Z)(l,[["render",function(e,t,n,l,c,i){var s=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("nav",null,[(0,r.createElementVNode)("ul",o,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(n.links,(function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[e.url?((0,r.openBlock)(),(0,r.createElementBlock)("li",{class:(0,r.normalizeClass)(["page-item",{active:e.active}]),key:t},[(0,r.createVNode)(s,{class:"page-link d-inline",href:e.url,innerHTML:e.label},null,8,["href","innerHTML"])],2)):((0,r.openBlock)(),(0,r.createElementBlock)("li",{class:"page-item disabled",key:t,style:{"margin-top":"-7px"}},[(0,r.createElementVNode)("a",{class:"page-link",href:"#",innerHTML:e.label},null,8,a)]))],64)})),256))])])}]])}}]);