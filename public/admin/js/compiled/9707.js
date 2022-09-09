"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9707],{6015:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(3645),o=n.n(a)()((function(e){return e[1]}));o.push([e.id,'.switch[data-v-73898518]{display:inline-block;height:19px;position:relative;width:35px}.switch input[data-v-73898518]{display:none}.slider[data-v-73898518]{background-color:#ccc;bottom:0;cursor:pointer;left:0;right:0;top:0}.slider[data-v-73898518],.slider[data-v-73898518]:before{position:absolute;transition:.4s}.slider[data-v-73898518]:before{background-color:#fff;bottom:2px;content:"";height:15px;left:3px;width:15px}input.success:checked+.slider[data-v-73898518]{background-color:#28a745}input:checked+.slider[data-v-73898518]:before{transform:translateX(15px)}.slider.round[data-v-73898518]{border-radius:34px}.slider.round[data-v-73898518]:before{border-radius:50%}',""]);const l=o},9707:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ce});var a=n(821),o=function(e){return(0,a.pushScopeId)("data-v-73898518"),e=e(),(0,a.popScopeId)(),e},l={class:"row"},r={class:"col-6"},c={class:"d-flex align-items-center mb-1 mt-3"},s={class:"form-row align-items-end mr-3"},i={class:"col-auto"},d={for:"",class:"mr-sm-2"},u=["value"],m={class:"col-auto"},g={class:"row justify-content-center"},p={class:"col-8"},f={class:"card mt-3"},E={class:"card-header"},h={class:"d-flex justify-content-between"},v={class:"card-body table-responsive p-0"},V={class:"table table-valign-middle"},N={key:0,class:"badge badge-primary"},k={class:"switch"},b=["onChange","checked"],y=o((function(){return(0,a.createElementVNode)("span",{class:"slider round"},null,-1)})),_={class:"d-flex"},D=o((function(){return(0,a.createElementVNode)("i",{class:"fa-solid fa-cog fa-2x text-secondary"},null,-1)})),S=["onClick"],B=["onClick"],C={key:1},w={colspan:"5",class:"text-center"},L={class:"col-4"},x={class:"card mt-3"},M={class:"card-header"},I={class:"d-flex justify-content-between"},T={key:0},F={key:1},U={class:"card-body"},$={class:"mb-3"},A={value:"",class:"d-none"},Z=["value"],j={class:"mb-3"},z={value:"",class:"d-none"},P=["value"],R={class:"mb-3"},Y={value:"ltr"},q={value:"rtl"},H={class:"mb-3"},X=(0,a.createTextVNode)(),G=o((function(){return(0,a.createElementVNode)("br",null,null,-1)})),J={class:"switch"},K=o((function(){return(0,a.createElementVNode)("span",{class:"slider round"},null,-1)})),O=["disabled"],Q={key:1},W=o((function(){return(0,a.createElementVNode)("i",{class:"fa-solid fa-check mr-1"},null,-1)})),ee=o((function(){return(0,a.createElementVNode)("i",{class:"fa-solid fa-times"},null,-1)}));const te={layout:"Setting",props:{languages:Array,langInfos:Array,defaultLanguage:Number},data:function(){return{isEditMode:!1,selectedId:"",default_language:this.defaultLanguage,languageStatus:!1,form:this.$inertia.form({name:"",code:"",direction:"ltr",status:!0})}},methods:{saveData:function(){this.isEditMode?this.updateData():this.createData()},createData:function(){var e=this;this.form.post(route("languages.store"),{onSuccess:function(){return e.form.reset()}})},editLanguage:function(e){this.isEditMode=!0,this.selectedId=e.id,this.form.name=e.name,this.form.code=e.code,this.form.direction=e.direction},cancelEdit:function(){this.isEditMode=!1,this.form.reset()},updateData:function(){var e=this;this.form.put(route("languages.update",this.selectedId),{onSuccess:function(){e.isEditMode=!1,e.form.reset()}})},deleteData:function(e){var t=this;this.$swal({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.isConfirmed&&t.$inertia.delete(route("languages.destroy",e))}))},languageStatusUpdate:function(e){this.$inertia.put(route("languages.status.update",e))},statusChange:function(e){this.form.status=e.target.checked},setDefaultLanguage:function(){this.$inertia.put(route("languages.set.default",this.default_language))}},mounted:function(){this.checkPagePermission("admin")}};var ne=n(3379),ae=n.n(ne),oe=n(6015),le={insert:"head",singleton:!1};ae()(oe.Z,le);oe.Z.locals;const re=(0,n(3744).Z)(te,[["render",function(e,t,n,o,te,ne){var ae=(0,a.resolveComponent)("Head"),oe=(0,a.resolveComponent)("Link"),le=(0,a.resolveComponent)("EditIcon"),re=(0,a.resolveComponent)("DeleteIcon"),ce=(0,a.resolveComponent)("Label"),se=(0,a.resolveComponent)("ErrorMessage"),ie=(0,a.resolveComponent)("Loading"),de=(0,a.resolveDirective)("tooltip");return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)(ae,{title:e.__("Language List")},null,8,["title"]),(0,a.createElementVNode)("div",l,[(0,a.createElementVNode)("div",r,[(0,a.createElementVNode)("div",c,[(0,a.createElementVNode)("div",s,[(0,a.createElementVNode)("div",i,[(0,a.createElementVNode)("label",d,(0,a.toDisplayString)(e.__("Set Default Language")),1),(0,a.withDirectives)((0,a.createElementVNode)("select",{class:"custom-select mr-sm-2",id:"inlineFormCustomSelect","onUpdate:modelValue":t[0]||(t[0]=function(e){return te.default_language=e})},[((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(n.languages,(function(e){return(0,a.openBlock)(),(0,a.createElementBlock)("option",{key:e.id,value:e.id},(0,a.toDisplayString)(e.name),9,u)})),128))],512),[[a.vModelSelect,te.default_language]])]),(0,a.createElementVNode)("div",m,[(0,a.createElementVNode)("button",{onClick:t[1]||(t[1]=function(){return ne.setDefaultLanguage&&ne.setDefaultLanguage.apply(ne,arguments)}),type:"button",class:"btn btn-primary",style:{"margin-top":"30px"}},(0,a.toDisplayString)(e.__("Save")),1)])])])])]),(0,a.createElementVNode)("div",g,[(0,a.createElementVNode)("div",p,[(0,a.createElementVNode)("div",f,[(0,a.createElementVNode)("div",E,[(0,a.createElementVNode)("div",h,[(0,a.createElementVNode)("span",null,(0,a.toDisplayString)(e.__("Language List")),1)])]),(0,a.createElementVNode)("div",v,[(0,a.createElementVNode)("table",V,[(0,a.createElementVNode)("thead",null,[(0,a.createElementVNode)("tr",null,[(0,a.createElementVNode)("th",null,(0,a.toDisplayString)(e.__("Name")),1),(0,a.createElementVNode)("th",null,(0,a.toDisplayString)(e.__("Code")),1),(0,a.createElementVNode)("th",null,(0,a.toDisplayString)(e.__("Direction")),1),(0,a.createElementVNode)("th",null,(0,a.toDisplayString)(e.__("Status")),1),(0,a.createElementVNode)("th",null,(0,a.toDisplayString)(e.__("Action")),1)])]),(0,a.createElementVNode)("tbody",null,[n.languages&&n.languages.length?((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,{key:0},(0,a.renderList)(n.languages,(function(t,o){return(0,a.openBlock)(),(0,a.createElementBlock)("tr",{key:o},[(0,a.createElementVNode)("td",null,[(0,a.createTextVNode)((0,a.toDisplayString)(t.name)+" ",1),t.id==n.defaultLanguage?((0,a.openBlock)(),(0,a.createElementBlock)("span",N,(0,a.toDisplayString)(e.__("Default")),1)):(0,a.createCommentVNode)("",!0)]),(0,a.createElementVNode)("td",null,(0,a.toDisplayString)(t.code),1),(0,a.createElementVNode)("td",null,(0,a.toDisplayString)(t.direction),1),(0,a.createElementVNode)("td",null,[(0,a.createElementVNode)("label",k,[(0,a.createElementVNode)("input",{onChange:function(e){return ne.languageStatusUpdate(t.id)},type:"checkbox",class:"success toggle-switch",checked:t.status},null,40,b),y])]),(0,a.createElementVNode)("td",_,[(0,a.withDirectives)(((0,a.openBlock)(),(0,a.createBlock)(oe,{href:e.route("languages.translation.edit",t.id),class:"btn btn-sm pl-0"},{default:(0,a.withCtx)((function(){return[D]})),_:2},1032,["href"])),[[de,e.__("Translate Language")]]),(0,a.withDirectives)(((0,a.openBlock)(),(0,a.createElementBlock)("button",{onClick:function(e){return ne.editLanguage(t)},class:"btn btn-sm"},[(0,a.createVNode)(le)],8,S)),[[de,e.__("Language Edit")]]),(0,a.withDirectives)(((0,a.openBlock)(),(0,a.createElementBlock)("button",{onClick:function(e){return ne.deleteData(t.id)},class:"btn btn-sm"},[(0,a.createVNode)(re)],8,B)),[[de,e.__("Language Delete")]])])])})),128)):((0,a.openBlock)(),(0,a.createElementBlock)("tr",C,[(0,a.createElementVNode)("td",w,[(0,a.createElementVNode)("h6",null,(0,a.toDisplayString)(e.__("No Data Found")),1)])]))])])])])]),(0,a.createElementVNode)("div",L,[(0,a.createElementVNode)("div",x,[(0,a.createElementVNode)("div",M,[(0,a.createElementVNode)("div",I,[te.isEditMode?((0,a.openBlock)(),(0,a.createElementBlock)("span",F,(0,a.toDisplayString)(e.__("Language Edit")),1)):((0,a.openBlock)(),(0,a.createElementBlock)("span",T,(0,a.toDisplayString)(e.__("Language Create")),1))])]),(0,a.createElementVNode)("div",U,[(0,a.createElementVNode)("form",{onSubmit:t[8]||(t[8]=(0,a.withModifiers)((function(){return ne.saveData&&ne.saveData.apply(ne,arguments)}),["prevent"]))},[(0,a.createElementVNode)("div",$,[(0,a.createVNode)(ce,{name:e.__("Name")},null,8,["name"]),(0,a.withDirectives)((0,a.createElementVNode)("select",{class:(0,a.normalizeClass)(["form-control",{"is-invalid":te.form.errors.name}]),"onUpdate:modelValue":t[2]||(t[2]=function(e){return te.form.name=e})},[(0,a.createElementVNode)("option",A,(0,a.toDisplayString)(e.__("Select Language")),1),((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(n.langInfos,(function(e,t){return(0,a.openBlock)(),(0,a.createElementBlock)("option",{key:t,value:e.name},(0,a.toDisplayString)(e.name),9,Z)})),128))],2),[[a.vModelSelect,te.form.name]]),(0,a.createVNode)(se,{name:te.form.errors.name},null,8,["name"])]),(0,a.createElementVNode)("div",j,[(0,a.createVNode)(ce,{name:e.__("Code")},null,8,["name"]),(0,a.withDirectives)((0,a.createElementVNode)("select",{class:(0,a.normalizeClass)(["form-control",{"is-invalid":te.form.errors.code}]),"onUpdate:modelValue":t[3]||(t[3]=function(e){return te.form.code=e})},[(0,a.createElementVNode)("option",z,(0,a.toDisplayString)(e.__("Select Language Code")),1),((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(n.langInfos,(function(e,t){return(0,a.openBlock)(),(0,a.createElementBlock)("option",{key:t,value:t},(0,a.toDisplayString)(t),9,P)})),128))],2),[[a.vModelSelect,te.form.code]]),(0,a.createVNode)(se,{name:te.form.errors.code},null,8,["name"])]),(0,a.createElementVNode)("div",R,[(0,a.createVNode)(ce,{name:e.__("Direction")},null,8,["name"]),(0,a.withDirectives)((0,a.createElementVNode)("select",{class:(0,a.normalizeClass)(["form-control",{"is-invalid":te.form.errors.direction}]),"onUpdate:modelValue":t[4]||(t[4]=function(e){return te.form.direction=e})},[(0,a.createElementVNode)("option",Y,(0,a.toDisplayString)(e.__("LTR")),1),(0,a.createElementVNode)("option",q,(0,a.toDisplayString)(e.__("RTL")),1)],2),[[a.vModelSelect,te.form.direction]]),(0,a.createVNode)(se,{name:te.form.errors.direction},null,8,["name"])]),(0,a.createElementVNode)("div",H,[(0,a.createVNode)(ce,{name:e.__("Status"),required:!1},null,8,["name"]),X,G,(0,a.createElementVNode)("label",J,[(0,a.withDirectives)((0,a.createElementVNode)("input",{onChange:t[5]||(t[5]=function(){return ne.statusChange&&ne.statusChange.apply(ne,arguments)}),"onUpdate:modelValue":t[6]||(t[6]=function(e){return te.form.status=e}),type:"checkbox",class:"success toggle-switch",checked:""},null,544),[[a.vModelCheckbox,te.form.status]]),K])]),(0,a.createElementVNode)("button",{disabled:te.form.processing,type:"submit",class:"btn btn-primary"},[te.form.processing?((0,a.openBlock)(),(0,a.createBlock)(ie,{key:0,message:"Saving..."})):((0,a.openBlock)(),(0,a.createElementBlock)("span",Q,[W,(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Save")),1)]))],8,O),te.isEditMode?((0,a.openBlock)(),(0,a.createElementBlock)("button",{key:0,onClick:t[7]||(t[7]=function(){return ne.cancelEdit&&ne.cancelEdit.apply(ne,arguments)}),type:"button",class:"btn btn-danger ml-2"},[ee,(0,a.createTextVNode)(" "+(0,a.toDisplayString)(e.__("Cancel")),1)])):(0,a.createCommentVNode)("",!0)],32)])])])])],64)}],["__scopeId","data-v-73898518"]]),ce=re}}]);