(self.webpackChunk=self.webpackChunk||[]).push([[1861],{7209:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(3645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,".modal-content[data-v-95b5d8f8]{width:750px!important}",""]);const l=r},2705:(e,t,n)=>{var o=n(5639).Symbol;e.exports=o},4239:(e,t,n)=>{var o=n(2705),r=n(9607),l=n(2333),a=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?r(e):l(e)}},7561:(e,t,n)=>{var o=n(7990),r=/^\s+/;e.exports=function(e){return e?e.slice(0,o(e)+1).replace(r,""):e}},1957:(e,t,n)=>{var o="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=o},9607:(e,t,n)=>{var o=n(2705),r=Object.prototype,l=r.hasOwnProperty,a=r.toString,i=o?o.toStringTag:void 0;e.exports=function(e){var t=l.call(e,i),n=e[i];try{e[i]=void 0;var o=!0}catch(e){}var r=a.call(e);return o&&(t?e[i]=n:delete e[i]),r}},2333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:(e,t,n)=>{var o=n(1957),r="object"==typeof self&&self&&self.Object===Object&&self,l=o||r||Function("return this")();e.exports=l},7990:e=>{var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},3279:(e,t,n)=>{var o=n(3218),r=n(7771),l=n(4841),a=Math.max,i=Math.min;e.exports=function(e,t,n){var c,s,d,m,p,u,f=0,y=!1,v=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function k(t){var n=c,o=s;return c=s=void 0,f=t,m=e.apply(o,n)}function E(e){return f=e,p=setTimeout(V,t),y?k(e):m}function N(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-f>=d}function V(){var e=r();if(N(e))return _(e);p=setTimeout(V,function(e){var n=t-(e-u);return v?i(n,d-(e-f)):n}(e))}function _(e){return p=void 0,h&&c?k(e):(c=s=void 0,m)}function g(){var e=r(),n=N(e);if(c=arguments,s=this,u=e,n){if(void 0===p)return E(u);if(v)return clearTimeout(p),p=setTimeout(V,t),k(u)}return void 0===p&&(p=setTimeout(V,t)),m}return t=l(t)||0,o(n)&&(y=!!n.leading,d=(v="maxWait"in n)?a(l(n.maxWait)||0,t):d,h="trailing"in n?!!n.trailing:h),g.cancel=function(){void 0!==p&&clearTimeout(p),f=0,c=u=s=p=void 0},g.flush=function(){return void 0===p?m:_(r())},g}},3218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3448:(e,t,n)=>{var o=n(4239),r=n(7005);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},7771:(e,t,n)=>{var o=n(5639);e.exports=function(){return o.Date.now()}},4841:(e,t,n)=>{var o=n(7561),r=n(3218),l=n(3448),a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(l(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=o(e);var n=i.test(e);return n||c.test(e)?s(e.slice(2),n?2:8):a.test(e)?NaN:+e}},1861:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Fe});var o=n(821),r=function(e){return(0,o.pushScopeId)("data-v-95b5d8f8"),e=e(),(0,o.popScopeId)(),e},l={class:"row justify-content-center"},a={class:"col-12"},i={class:"card mt-3"},c={class:"card-header border-0"},s={class:"d-flex justify-content-between"},d={class:"card-title"},m=r((function(){return(0,o.createElementVNode)("i",{class:"fa-solid fa-filter"},null,-1)})),p=(0,o.createTextVNode)("   "),u={key:0},f={key:1},y=r((function(){return(0,o.createElementVNode)("i",{class:"fa-solid fa-times"},null,-1)})),v={key:0,class:"card-body border-bottom row"},h={class:"col-4"},k=r((function(){return(0,o.createElementVNode)("label",null,"Search",-1)})),E={class:"col-4"},N=r((function(){return(0,o.createElementVNode)("label",null,"Plan",-1)})),V={value:""},_=["value"],g={class:"col-4"},b=r((function(){return(0,o.createElementVNode)("label",null,"Payment",-1)})),D={value:""},w=(0,o.createStaticVNode)('<option value="paypal" data-v-95b5d8f8>Paypal</option><option value="stripe" data-v-95b5d8f8>Stripe</option><option value="flutterwave" data-v-95b5d8f8>Flutterwave</option><option value="mollie" data-v-95b5d8f8>Mollie</option><option value="midtrans" data-v-95b5d8f8>Midtrans</option><option value="paystack" data-v-95b5d8f8>Paystack</option><option value="razorpay" data-v-95b5d8f8>Razorpay</option><option value="instamojo" data-v-95b5d8f8>Instamojo</option>',8),B={class:"card-body table-responsive p-0"},S={class:"table table-valign-middle"},x=(0,o.createTextVNode)("#"),F=["innerHTML"],C=["innerHTML"],T={class:"text-capitalize"},M={key:0},j=(0,o.createTextVNode)(" / "),O={key:0},L={key:1},I={class:"d-flex"},P=["onClick"],H={key:1},A={colspan:"5",class:"text-center"},Z={key:0},z={class:"modal-mask"},U={class:"modal-wrapper"},q={class:"modal-dialog",role:"document"},$={class:"modal-content"},W={class:"modal-header"},K={class:"modal-title"},R={type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},G={class:"modal-body"},J={class:"table"},Q={width:"40%"},X={width:"70%"},Y={key:0},ee={width:"40%"},te={width:"70%"},ne={width:"40%"},oe={width:"60%",class:"text-capitalize"},re={width:"40%"},le={width:"60%"},ae={width:"40%"},ie={width:"60%"},ce={width:"40%"},se={width:"60%",class:"text-capitalize"},de={width:"40%"},me={width:"60%",class:"text-capitalize"},pe={key:1},ue={width:"40%"},fe={width:"60%"},ye={key:2},ve={width:"40%"},he={width:"60%"},ke={class:"modal-footer"};var Ee=n(9418),Ne=n(6083),Ve=n(9680),_e=n(3279),ge=n.n(_e);const be={props:{orders:Array,plans:Array,filters:Object||Array},components:{Pagination:Ee.Z,Inertia:Ve.Inertia,Feature:Ne.Z},data:function(){return{showModal:!1,showFilter:!1,form:{order_id:"",payment_method:"",amount:"",currency_symbol:"",plan:{}},filterForm:{search:this.filters.search,payment:this.filters.payment,plan:this.filters.plan}}},methods:{showDetails:function(e){this.form.order_id=e.order_id,this.form.payment_method=e.payment_provider,this.form.amount=e.amount,this.form.currency_symbol=e.currency_symbol,this.form.plan=e.plan,this.showModal=!0},filteringData:function(){this.showFilter=!this.showFilter,localStorage.setItem("companyOrder",this.showFilter)},filterData:function(){Ve.Inertia.get(route("company.orders.index"),{company:this.filterForm.company,search:this.filterForm.search,payment:this.filterForm.payment,plan:this.filterForm.plan},{preserveState:!0,replace:!0})}},watch:{"filterForm.search":ge()((function(e){Ve.Inertia.get(route("company.orders.index"),{search:e},{preserveState:!0,replace:!0})}),500)},mounted:function(){this.checkPagePermission("owner"),this.showFilter="true"==localStorage.getItem("companyOrder")}};var De=n(3379),we=n.n(De),Be=n(7209),Se={insert:"head",singleton:!1};we()(Be.Z,Se);Be.Z.locals;const xe=(0,n(3744).Z)(be,[["render",function(e,t,n,r,Ee,Ne){var Ve=(0,o.resolveComponent)("Head"),_e=(0,o.resolveComponent)("Link"),ge=(0,o.resolveComponent)("EyeIcon"),be=(0,o.resolveComponent)("Pagination"),De=(0,o.resolveComponent)("Feature"),we=(0,o.resolveDirective)("tooltip"),Be=(0,o.resolveDirective)("click-outside");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(Ve,{title:e.__("Order List")},null,8,["title"]),(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("h3",d,(0,o.toDisplayString)(e.__("Order List")),1),(0,o.createElementVNode)("div",null,[(0,o.createElementVNode)("button",{class:"btn btn-secondary ml-2",onClick:t[0]||(t[0]=function(){return Ne.filteringData&&Ne.filteringData.apply(Ne,arguments)})},[m,p,Ee.showFilter?((0,o.openBlock)(),(0,o.createElementBlock)("span",f,(0,o.toDisplayString)(e.__("Hide Filter")),1)):((0,o.openBlock)(),(0,o.createElementBlock)("span",u,(0,o.toDisplayString)(e.__("Show Filter")),1))]),Ee.filterForm.search||Ee.filterForm.payment||Ee.filterForm.plan?((0,o.openBlock)(),(0,o.createBlock)(_e,{key:0,href:e.route("company.orders.index"),class:"btn btn-danger ml-2"},{default:(0,o.withCtx)((function(){return[y,(0,o.createTextVNode)(" "+(0,o.toDisplayString)(e.__("Clear")),1)]})),_:1},8,["href"])):(0,o.createCommentVNode)("",!0)])])]),Ee.showFilter?((0,o.openBlock)(),(0,o.createElementBlock)("div",v,[(0,o.createElementVNode)("div",h,[k,(0,o.withDirectives)((0,o.createElementVNode)("input",{onKeyup:t[1]||(t[1]=function(){return e.searchData&&e.searchData.apply(e,arguments)}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return Ee.filterForm.search=e}),type:"text",placeholder:"Search order id, transaction id",class:"form-control"},null,544),[[o.vModelText,Ee.filterForm.search]])]),(0,o.createElementVNode)("div",E,[N,(0,o.withDirectives)((0,o.createElementVNode)("select",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return Ee.filterForm.plan=e}),class:"form-control",onChange:t[4]||(t[4]=function(){return Ne.filterData&&Ne.filterData.apply(Ne,arguments)})},[(0,o.createElementVNode)("option",V,(0,o.toDisplayString)(e.__("All")),1),((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(n.plans,(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("option",{key:e.id,value:e.id},(0,o.toDisplayString)(e.name),9,_)})),128))],544),[[o.vModelSelect,Ee.filterForm.plan]])]),(0,o.createElementVNode)("div",g,[b,(0,o.withDirectives)((0,o.createElementVNode)("select",{class:"form-control","onUpdate:modelValue":t[5]||(t[5]=function(e){return Ee.filterForm.payment=e}),onChange:t[6]||(t[6]=function(){return Ne.filterData&&Ne.filterData.apply(Ne,arguments)})},[(0,o.createElementVNode)("option",D,(0,o.toDisplayString)(e.__("All")),1),w],544),[[o.vModelSelect,Ee.filterForm.payment]])])])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("div",B,[(0,o.createElementVNode)("table",S,[(0,o.createElementVNode)("thead",null,[(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("th",null,(0,o.toDisplayString)(e.__("Order ID")),1),(0,o.createElementVNode)("th",null,(0,o.toDisplayString)(e.__("Transaction ID")),1),(0,o.createElementVNode)("th",null,(0,o.toDisplayString)(e.__("Amount")),1),(0,o.createElementVNode)("th",null,(0,o.toDisplayString)(e.__("Payment Method")),1),(0,o.createElementVNode)("th",null,(0,o.toDisplayString)(e.__("Plan")),1),(0,o.createElementVNode)("th",null,(0,o.toDisplayString)(e.__("Action")),1)])]),(0,o.createElementVNode)("tbody",null,[n.orders&&n.orders.data.length?((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,{key:0},(0,o.renderList)(n.orders.data,(function(t,n){return(0,o.openBlock)(),(0,o.createElementBlock)("tr",{key:n},[(0,o.createElementVNode)("td",null,[x,(0,o.createElementVNode)("span",{innerHTML:t.order_id},null,8,F)]),(0,o.createElementVNode)("td",null,[(0,o.createElementVNode)("span",{innerHTML:t.transaction_id},null,8,C)]),(0,o.createElementVNode)("td",null,(0,o.toDisplayString)(t.currency_symbol)+" "+(0,o.toDisplayString)(t.amount),1),(0,o.createElementVNode)("td",T,(0,o.toDisplayString)(t.payment_provider),1),t.plan?((0,o.openBlock)(),(0,o.createElementBlock)("td",M,[(0,o.createElementVNode)("b",null,(0,o.toDisplayString)(t.plan.name),1),j,"custom_days"!=t.plan.interval?((0,o.openBlock)(),(0,o.createElementBlock)("small",O,(0,o.toDisplayString)(t.plan.interval),1)):((0,o.openBlock)(),(0,o.createElementBlock)("small",L,(0,o.toDisplayString)(t.plan.custom_interval_days)+" "+(0,o.toDisplayString)(e.__("Days")),1))])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("td",I,[(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("button",{onClick:function(e){return Ne.showDetails(t)},class:"btn btn-sm pl-0"},[(0,o.createVNode)(ge)],8,P)),[[we,e.__("Order Details")]])])])})),128)):((0,o.openBlock)(),(0,o.createElementBlock)("tr",H,[(0,o.createElementVNode)("td",A,[(0,o.createElementVNode)("h6",null,(0,o.toDisplayString)(e.__("No Data Found")),1)])]))])]),(0,o.createVNode)(be,{links:n.orders.links},null,8,["links"])])])])]),Ee.showModal?((0,o.openBlock)(),(0,o.createElementBlock)("div",Z,[(0,o.createVNode)(o.Transition,{name:"fade"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",z,[(0,o.createElementVNode)("div",U,[(0,o.createElementVNode)("div",q,[(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("div",$,[(0,o.createElementVNode)("div",W,[(0,o.createElementVNode)("h5",K,(0,o.toDisplayString)(e.__("Order Details")),1),(0,o.createElementVNode)("button",R,[(0,o.createElementVNode)("span",{"aria-hidden":"true",onClick:t[7]||(t[7]=function(e){return Ee.showModal=!1})},"×")])]),(0,o.createElementVNode)("div",G,[(0,o.createElementVNode)("table",J,[(0,o.createElementVNode)("tbody",null,[(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("td",Q,(0,o.toDisplayString)(e.__("Order ID")),1),(0,o.createElementVNode)("td",X," #"+(0,o.toDisplayString)(Ee.form.order_id),1)]),Ee.form.transaction_id?((0,o.openBlock)(),(0,o.createElementBlock)("tr",Y,[(0,o.createElementVNode)("td",ee,(0,o.toDisplayString)(e.__("Transaction ID")),1),(0,o.createElementVNode)("td",te,(0,o.toDisplayString)(Ee.form.transaction_id),1)])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("td",ne,(0,o.toDisplayString)(e.__("Payment Method")),1),(0,o.createElementVNode)("td",oe,(0,o.toDisplayString)(Ee.form.payment_method),1)]),(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("td",re,(0,o.toDisplayString)(e.__("Amount")),1),(0,o.createElementVNode)("td",le,(0,o.toDisplayString)(Ee.form.currency_symbol)+" "+(0,o.toDisplayString)(Ee.form.amount),1)]),(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("td",ae,(0,o.toDisplayString)(e.__("Plan Name")),1),(0,o.createElementVNode)("td",ie,(0,o.toDisplayString)(Ee.form.plan.name),1)]),(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("td",ce,(0,o.toDisplayString)(e.__("Plan Type")),1),(0,o.createElementVNode)("td",se,(0,o.toDisplayString)(Ee.form.plan.type),1)]),(0,o.createElementVNode)("tr",null,[(0,o.createElementVNode)("td",de,(0,o.toDisplayString)(e.__("Subscription Type")),1),(0,o.createElementVNode)("td",me,(0,o.toDisplayString)(Ee.form.plan.interval),1)]),"custom_days"==Ee.form.plan.interval?((0,o.openBlock)(),(0,o.createElementBlock)("tr",pe,[(0,o.createElementVNode)("td",ue,(0,o.toDisplayString)(e.__("Custom Days")),1),(0,o.createElementVNode)("td",fe,(0,o.toDisplayString)(Ee.form.plan.custom_interval_days)+" "+(0,o.toDisplayString)(e.__("Days")),1)])):(0,o.createCommentVNode)("",!0),Ee.form.plan.plan_features?((0,o.openBlock)(),(0,o.createElementBlock)("tr",ye,[(0,o.createElementVNode)("td",ve,(0,o.toDisplayString)(e.__("Plan Features")),1),(0,o.createElementVNode)("td",he,[(0,o.createVNode)(De,{name:"Unlimited Employees",checked:!Ee.form.plan.plan_features.is_limited_employee},null,8,["checked"]),(0,o.createVNode)(De,{name:"Max Employees",checked:!0,value:Ee.form.plan.plan_features.is_limited_employee?Ee.form.plan.plan_features.max_employees:"∞"},null,8,["value"]),(0,o.createVNode)(De,{name:"Max Teams",checked:!0,value:Ee.form.plan.plan_features.max_teams},null,8,["value"]),(0,o.createVNode)(De,{name:"Max Leave Types",checked:!0,value:Ee.form.plan.plan_features.max_leave_types},null,8,["value"]),(0,o.createVNode)(De,{name:"Custom Theme Look",checked:Ee.form.plan.plan_features.custom_theme_look},null,8,["checked"])])])):(0,o.createCommentVNode)("",!0)])])]),(0,o.createElementVNode)("div",ke,[(0,o.createElementVNode)("button",{type:"button",class:"btn btn-secondary",onClick:t[8]||(t[8]=function(e){return Ee.showModal=!1})},(0,o.toDisplayString)(e.__("Close")),1)])])),[[Be,function(){return Ee.showModal=!1}]])])])])]})),_:1})])):(0,o.createCommentVNode)("",!0)],64)}],["__scopeId","data-v-95b5d8f8"]]),Fe=xe},6083:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var o=n(821),r={class:"mb-2 d-flex align-items-center justify-content-between"},l={class:"d-flex"},a={class:"icon mr-2"},i={key:0,xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},c=[(0,o.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)],s={key:1,xmlns:"http://www.w3.org/2000/svg",class:"me-0 icon icon-tabler icon-tabler-x",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"#dc3545",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},d=[(0,o.createElementVNode)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},null,-1),(0,o.createElementVNode)("line",{x1:"18",y1:"6",x2:"6",y2:"18"},null,-1),(0,o.createElementVNode)("line",{x1:"6",y1:"6",x2:"18",y2:"18"},null,-1)],m={key:0,class:"mb-0"},p={key:1,class:"mb-0"},u={key:0,class:"mb-0"};const f={props:{checked:{type:Boolean,required:!0},name:{type:String,required:!0},value:{type:String,required:!1},spanText:{type:Boolean,default:!1}}};const y=(0,n(3744).Z)(f,[["render",function(e,t,n,f,y,v){var h=(0,o.resolveComponent)("hs");return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("span",a,[n.checked?((0,o.openBlock)(),(0,o.createElementBlock)("svg",i,c)):((0,o.openBlock)(),(0,o.createElementBlock)("svg",s,d))]),n.spanText?((0,o.openBlock)(),(0,o.createElementBlock)("span",m,(0,o.toDisplayString)(e.__(n.name)),1)):((0,o.openBlock)(),(0,o.createElementBlock)("h5",p,(0,o.toDisplayString)(e.__(n.name)),1))]),n.spanText?((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:0},[n.value?((0,o.openBlock)(),(0,o.createElementBlock)("span",u,(0,o.toDisplayString)(n.value),1)):(0,o.createCommentVNode)("",!0)],64)):((0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,{key:1},[n.value?((0,o.openBlock)(),(0,o.createBlock)(h,{key:0,class:"mb-0"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(n.value),1)]})),_:1})):(0,o.createCommentVNode)("",!0)],64))])}]])},9418:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(821),r={class:"pagination justify-content-center"},l=["innerHTML"];const a={props:{links:{type:Array,required:!0}}};const i=(0,n(3744).Z)(a,[["render",function(e,t,n,a,i,c){var s=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createElementBlock)("nav",null,[(0,o.createElementVNode)("ul",r,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(n.links,(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[e.url?((0,o.openBlock)(),(0,o.createElementBlock)("li",{class:(0,o.normalizeClass)(["page-item",{active:e.active}]),key:t},[(0,o.createVNode)(s,{class:"page-link d-inline",href:e.url,innerHTML:e.label},null,8,["href","innerHTML"])],2)):((0,o.openBlock)(),(0,o.createElementBlock)("li",{class:"page-item disabled",key:t,style:{"margin-top":"-7px"}},[(0,o.createElementVNode)("a",{class:"page-link",href:"#",innerHTML:e.label},null,8,l)]))],64)})),256))])])}]])}}]);