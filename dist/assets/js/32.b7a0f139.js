(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{420:function(t,e,n){var o=n(3),i=n(38),a=n(16),r=/"/g,c=o("".replace);t.exports=function(t,e,n,o){var l=a(i(t)),u="<"+e;return""!==n&&(u+=" "+n+'="'+c(a(o),r,"&quot;")+'"'),u+">"+l+"</"+e+">"}},421:function(t,e,n){var o=n(4);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},561:function(t,e,n){"use strict";n(562),n(29),n(59),n(119);var o=n(5),i=n(50),a=n(51),r=n(17);function c(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e)return t.visible?t.visible instanceof Object?void(t.visible.value=!1):void(t.visible=!1):void("function"!=typeof t.close?c(t.$parent,e):t.close())}var l={reset:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e){var n=t.$refs.DynamicFormContent||t.$parent.$refs.DynamicFormContent;n?n.resetFields():console.warn("submit 动作 在组件中没有定义对应的 DynamicFormContent 表单 ref,")}},refresh:function(t,e){"function"!=typeof e?!0===e&&("function"==typeof t.refresh?t.refresh():t.$dynamicBus.$emit("dynamicRefresh")):e()},emitEvent:function(t,e,n){"string"==typeof e&&t.$emit(e,n)},closeModal:c,close:c,showTip:function(t,e,n){!0===e&&t.$message&&t.$message({type:"success",message:n.msg||n.message||"操作成功"})}},u={dialogForm:function(){function t(){Object(i.a)(this,t)}return Object(a.a)(t,null,[{key:"handle",value:function(t,e,n){this.vm=n;var i=t.dialog;"el-drawer"==i.container&&(i.properties=Object(o.a)({size:i.properties.width,direction:"rtl"},i.properties)),this.dialogFormHandle(t,e)}},{key:"dialogFormHandle",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i="function"==typeof t.dataAdapter?t.dataAdapter:function(t){return t||{}};if(t.apiPromise)t.apiPromise(n).then(i).then((function(n){e.setCurrentDialogForm(t,n,o)}));else{var a=i(n);this.setCurrentDialogForm(t,a,o)}}},{key:"setCurrentDialogForm",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=Object(o.a)(Object(o.a)({container:"el-dialog"},Object(r.g)(t.dialog)),n);i.body.data=e,"function"!=typeof this.vm.setGlobalDialogForm||this.vm.isGlobalDialogFormActive()?this.vm.$globalDialogForm(i,this.vm.actionBarWraper):this.vm.setGlobalDialogForm(i)}}]),t}(),dialogPage:function(){function t(){Object(i.a)(this,t)}return Object(a.a)(t,null,[{key:"handle",value:function(t,e,n){this.vm=n;var i=t.dialog;"el-drawer"==i.container&&(i.properties=Object(o.a)({size:i.properties.width,direction:"rtl"},i.properties)),this.dialogPageHandle(t,e)}},{key:"dialogPageHandle",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i="function"==typeof t.dataAdapter?t.dataAdapter:function(t){return t||{}};if(t.apiPromise)t.apiPromise(n).then(i).then((function(n){e.setCurrentDialogContent(t,n,o)}));else{var a=i(n);this.setCurrentDialogContent(t,Object(r.a)(a),o)}}},{key:"setCurrentDialogContent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=Object(o.a)(Object(o.a)({container:"el-dialog"},Object(r.g)(t.dialog)),n);i.data=e,"function"!=typeof this.vm.setGlobalDialogPage?this.vm.$globalDialogPage(i,this.vm.actionBarWraper):this.vm.setGlobalDialogPage(i)}}]),t}(),requestApi:function(){function t(){Object(i.a)(this,t)}return Object(a.a)(t,null,[{key:"handle",value:function(t,e,n){var o=this;this.vm=n;var i="function"==typeof t.dataAdapter?t.dataAdapter:function(t){return t};t.apiPromise(e).then(i).then((function(e){return o.actionCallback(t,e),e}))}},{key:"actionCallback",value:function(t,e){if(t.callback instanceof Object)for(var n in t.callback)"function"==typeof t.callback[n]&&t.callback[n](this.vm,e),"function"==typeof l[n]&&l[n](this.vm,t.callback[n],e)}}]),t}(),download:function(){function t(){Object(i.a)(this,t)}return Object(a.a)(t,null,[{key:"handle",value:function(t,e,n){var o=this;this.vm=n;var i="function"==typeof t.dataAdapter?t.dataAdapter:function(t){return t};t.apiPromise(e).then(i).then((function(e){var n,o,i=null!==(n=t.fileName)&&void 0!==n?n:null===(o=e.headers["content-disposition"])||void 0===o?void 0:o.replace(/.*=(.*\.\w+)/g,"$1");Object(r.j)(e.data,decodeURIComponent(i))})).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return o.actionCallback(t,e),e}))}},{key:"actionCallback",value:function(t,e){if(t.callback instanceof Object)for(var n in t.callback)"function"==typeof t.callback[n]&&t.callback[n](this.vm,e),"function"==typeof l[n+"Handle"]&&l[n+"Handle"](this.vm,t.callback[n],e)}}]),t}()};e.a={props:{},computed:{},inject:["setGlobalDialogForm","setGlobalDialogPage","isGlobalDialogFormActive"],methods:{actionHandles:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;switch(t.actionType){case"dialogPage":case"dialogForm":case"requestApi":case"download":u[t.actionType].handle(t,e,this);break;case"submit":case"reset":case"close":case"link":case"router":"function"==typeof this[t.actionType+"Handle"]&&this[t.actionType+"Handle"](t,e),l[t.actionType]&&l[t.actionType](this);break;case"routerDialogPage":case"routerDialogForm":this.routerDialogHandle(t,e);break;default:this.customActionHandle(t,e)}},submitHandle:function(t){var e=this,n=this.$refs.DynamicFormContent||this.$parent.$refs.DynamicFormContent;n?n.validate((function(n,o){n&&u.requestApi.handle(t,o,e)})):console.warn("submit 动作 在组件中没有定义对应的 DynamicFormContent 表单 ref,")},linkHandle:function(t){window.open(t.link,t.window)},routerHandle:function(t,e){var n="function"==typeof t.router?t.router(e):t.router;this.$router[t.routerAction||"push"](n)},routerDialogHandle:function(t,e){var n,o=t.mainKey||"id",i={};"function"==typeof t.router?n=t.router(e):(n=this.$route.fullPath.replace(/[\/|\\]$/,"")+"/",t=t.router&&"string"==typeof t.router?t.router.replace(/[\/|\\]$/,"")+"/":t.actionKey,i={id:null==e?void 0:e[o],action:t}),this.$router[t.routerAction||"push"]({path:n,query:i})},customActionHandle:function(t,e){"function"!=typeof t.actionHandle?console.warn("定义了未被识别的动作"+JSON.stringify(t)):t.actionHandle(e)}}}},562:function(t,e,n){"use strict";var o=n(2),i=n(420);o({target:"String",proto:!0,forced:n(421)("link")},{link:function(t){return i(this,"a","href",t)}})},761:function(t,e,n){"use strict";n.r(e);n(11),n(156),n(118),n(82),n(83),n(37);var o=n(561),i=n(17),a={name:"DynamicForm",mixins:[o.a],data:function(){return{formData:{}}},props:{formOption:{type:Object,default:function(){return{}}},formItemList:{type:Array,default:function(){return[]}},actions:{type:Object,default:function(){return{}}},apiPromise:{type:Function,default:function(){return Promise.resolve()}},data:{type:Object,default:function(){return{}}}},computed:{formSlots:function(){return this.formItemFilter((function(t){return"slot"==t.type})).reduce((function(t,e){return t.concat(e.children)}),[])}},watch:{apiPromise:{handler:function(t){var e=this;t instanceof Function&&t(this.data).then((function(t){t instanceof Object&&(e.formData=t)}))},deep:!0,immediate:!0},data:{handler:function(t){t instanceof Object&&(this.formData=t)},immediate:!0}},mounted:function(){},components:{},methods:{formItemFilter:function(t){var e=Object(i.a)(this.formItemList);return e.forEach((function(n,o){n.children&&n.children.length>0&&(n.children.forEach((function(n,i){t(n)||delete e[o].children[i]})),e[o].children=e[o].children.filter((function(t){return t})))})),e=e.filter((function(t){return t.children.length}))},reset:function(){this.$refs.DynamicFormContent.resetFields()},actionHandle:function(t){this.actionHandles(t)},formDataUpdated:function(t,e){}}},r=n(36),c=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"dynamic-form-wraper "},[n("DynamicFormContent",t._b({ref:"DynamicFormContent",attrs:{data:t.formData,formItemList:t.formItemList},on:{formDataUpdated:t.formDataUpdated},scopedSlots:t._u([t._l(t.formSlots,(function(e){return{key:e.key,fn:function(){return[t._t(e.key,null,{value:t.formData[e.key]})]},proxy:!0}}))],null,!0)},"DynamicFormContent",t.formOption,!1)),t._v(" "),t.formOption.textModel?t._e():n("DynamicActions",{attrs:{actions:t.actions,actionData:{}}})],1)}),[],!1,null,"4ff2be9d",null);e.default=c.exports}}]);