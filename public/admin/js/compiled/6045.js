"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6045],{6045:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var o=n(821),a={class:"row justify-content-center pt-4"},r={class:"col-12"},c={class:"card"},i={class:"card-header"},l={class:"card-title"},s={class:"card-body"},d={class:"list-group"},m=["href"],u={key:0,class:"d-flex w-100 justify-content-between"},p=["innerHTML"],f={class:"text-muted"},k=["href"],y={key:0,class:"d-flex w-100 justify-content-between"},N=["innerHTML"],h={class:"text-muted"},g={key:2,class:"text-center my-5"};const E={props:{notifications:Array},data:function(){return{role:this.$page.props.authenticatedUser.role,currentCompany:this.$page.props.currentCompany}},computed:{companyNotifications:function(){var e=this,t=[];return"owner"==this.role&&this.notifications.find((function(n){n.data.company_id==e.currentCompany.id&&t.push(n)})),t},unReadNotificationCount:function(){var e=this,t=0;return"owner"==this.role&&("owner"==this.role&&this.notifications.find((function(n){n.data.company_id!=e.currentCompany.id||n.read_at||t++})),console.log(t)),t}}};const B=(0,n(3744).Z)(E,[["render",function(e,t,n,E,B,v){var w=(0,o.resolveComponent)("Head");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(w,{title:e.__("All Notification")},null,8,["title"]),(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("div",r,[(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",i,[(0,o.createElementVNode)("div",l,(0,o.toDisplayString)(e.__("All Notification")),1)]),(0,o.createElementVNode)("div",s,[(0,o.createElementVNode)("div",d,["owner"!=B.role?((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,{key:0},(0,o.renderList)(n.notifications,(function(t,n){return(0,o.openBlock)(),(0,o.createElementBlock)("a",{href:t.data.url,class:"list-group-item list-group-item-action flex-column align-items-start",key:n},[t.data?((0,o.openBlock)(),(0,o.createElementBlock)("div",u,[(0,o.createElementVNode)("h5",{innerHTML:t.data.message,class:"mb-1"},null,8,p),(0,o.createElementVNode)("small",f,(0,o.toDisplayString)(e.timeFromNow(t.created_at)),1)])):(0,o.createCommentVNode)("",!0)],8,m)})),128)):"owner"==B.role&&v.companyNotifications&&v.companyNotifications.length?((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,{key:1},(0,o.renderList)(v.companyNotifications,(function(t,n){return(0,o.openBlock)(),(0,o.createElementBlock)("a",{href:t.data.url,class:"list-group-item list-group-item-action flex-column align-items-start",key:n},[t.data?((0,o.openBlock)(),(0,o.createElementBlock)("div",y,[(0,o.createElementVNode)("h5",{innerHTML:t.data.message,class:"mb-1"},null,8,N),(0,o.createElementVNode)("small",h,(0,o.toDisplayString)(e.timeFromNow(t.created_at)),1)])):(0,o.createCommentVNode)("",!0)],8,k)})),128)):((0,o.openBlock)(),(0,o.createElementBlock)("h6",g,(0,o.toDisplayString)(e.__("No Data Found")),1))])])])])])],64)}]])}}]);