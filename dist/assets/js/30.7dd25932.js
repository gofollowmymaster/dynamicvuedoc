(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{422:function(e,t,n){"use strict";var r=n(2),i=n(1),a=n(117),o=n(79),s=n(28),l=n(18),d=n(154),f=n(59),c=n(82)("splice"),u=i.TypeError,m=Math.max,h=Math.min;r({target:"Array",proto:!0,forced:!c},{splice:function(e,t){var n,r,i,c,p,y,b=l(this),v=s(b),k=a(e,v),g=arguments.length;if(0===g?n=r=0:1===g?(n=0,r=v-k):(n=g-2,r=h(m(o(t),0),v-k)),v+n-r>9007199254740991)throw u("Maximum allowed length exceeded");for(i=d(b,r),c=0;c<r;c++)(p=k+c)in b&&f(i,c,b[p]);if(i.length=r,n<r){for(c=k;c<v-r;c++)y=c+n,(p=c+r)in b?b[y]=b[p]:delete b[y];for(c=v;c>v-r+n;c--)delete b[c-1]}else if(n>r)for(c=v-r;c>k;c--)y=c+n-1,(p=c+r-1)in b?b[y]=b[p]:delete b[y];for(c=0;c<n;c++)b[c+k]=arguments[c+2];return b.length=v-r+n,i}})},568:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(62),n(83),n(8),n(121),n(21),n(22),n(112),n(38),n(37);var r=n(96);function i(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Object(r.a)(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw o}}}}},638:function(e,t,n){"use strict";var r=n(2),i=n(58).findIndex,a=n(151),o=!0;"findIndex"in[]&&Array(1).findIndex((function(){o=!1})),r({target:"Array",proto:!0,forced:o},{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("findIndex")},744:function(e,t,n){"use strict";n.r(t);var r=n(568),i=(n(111),n(246),n(109),n(8),n(110),n(27),n(114),n(56),n(233),n(115),n(78),n(21),n(22),n(638),n(153),n(422),n(108)),a={name:"DynamicFormContent",props:{data:{type:Object,default:function(){return{}}},formProperties:{type:Object,default:function(){return{}}},formItemList:{type:Array,default:function(){return[]}},showTestTool:Boolean,showFoldBtn:{type:Boolean,default:!1},allDisabled:{type:Boolean,default:!1},borderForm:{type:Boolean,default:!0},textModel:{type:Boolean,default:!1}},data:function(){return{currentFileds:[],changeData:{allDisabled:this.allDisabled,textModel:this.textModel},foldBlockList:[],scanType:"normal",singleScanBlock:""}},watch:{data:{handler:function(e){console.log("----this.data----"+JSON.stringify(e)),this.computeExpressions()},deep:!0,immediate:!0}},components:{},provide:function(){return{statusChangeFn:{setElementDisable:this.setElementDisable,setElementHidden:this.setElementHidden,setElementRequired:this.setElementRequired,updateFormData:this.updateFormData,valueUpdateEvent:this.valueUpdateEvent},changeData:this.changeData,formItemType:"",childChangeData:{},transExpression:this.transExpression}},created:function(){},methods:{getFormItemListInit:function(){return this.formItemListInit||(this.formItemListInit=Object(i.f)(this.formItemList),Object.freeze(this.formItemListInit)),this.formItemListInit},computeExpressions:function(){var e=this;this.getFormItemListInit().forEach((function(t,n){var r=/\$\{(.+)?\}/;if("string"==typeof t.hidden&&r.test(t.hidden)&&(e.formItemList[n].hidden=e.transExpression(t.hidden)),"string"==typeof t.disabled&&r.test(t.disabled)){var a=e.transExpression(t.disabled);e.setSectionElementDisable(e.formItemList[n].children,a)}!e.textModel&&t.children.forEach((function(t,a){for(var o in t.properties){var s=t.properties[o];if("string"==typeof s&&r.test(s)){if("required"==o){e.setElementRequired(t.key,e.transExpression(s));continue}if("value"==o){var l=e.transExpression(s);l!=e.data[t.key]&&e.$set(e.data,t.key,l);continue}e.formItemList[n].children[a].properties[o]=e.transExpression(s)}if("function"==typeof s){var d=s(e.data[t.key],Object(i.f)(e.data));d!==e.data[t.key]&&e.$set(e.data,t.key,d)}}"string"==typeof t.hidden&&r.test(t.hidden)&&(e.formItemList[n].children[a].hidden=e.transExpression(t.hidden))}))}))},transExpression:function(e){var t=this.data;return-1==(e=e.replace(/\$\{(.+?)\}/g,"instance.$1")).indexOf("return")&&(e="return ".concat(e)),new Function("instance",e)(t)},valueUpdateEvent:function(e){var t=this;this.$emit("formDataUpdated",this,e),this.formItemMap((function(e){e.formDataUpdateHandle&&e.formDataUpdateHandle(t.data[e.key],t.data)}))},getData:function(){return this.filterData(this.data)},updateFormData:function(e){var t=this;Object.keys(e).forEach((function(n){t.$set(t.data,n,e[n])}))},validate:function(e){var t=this;this.$refs.form.validate((function(n){if(n){var r=Object(i.a)(t.getData()),a=[];if(t.formItemList.forEach((function(e){e.children&&e.children.length>0&&e.children.forEach((function(e){"child-form"===e.type&&a.push(e.key)}))})),0===a.length)e(!!n,r);else{var o=a.map((function(e){return t.$refs[e][0].validateForm()}));Promise.all(o).then((function(){e(!!n,r)})).catch((function(){e(!1,r)}))}}}))},filterData:function(e){var t={};return this.formItemMap((function(n){"slot"!==n.type&&(t[n.key]=e[n.key])})),t},formItemMap:function(e){var t,n=Object(r.a)(this.formItemList);try{for(n.s();!(t=n.n()).done;){var i=t.value;if(i.children&&i.children.length>0){var a,o=Object(r.a)(i.children);try{for(o.s();!(a=o.n()).done;){if(e(a.value))return}}catch(e){o.e(e)}finally{o.f()}}}}catch(e){n.e(e)}finally{n.f()}},setElementRequired:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.formItemMap((function(r){if(r.key==e){var i=r.rules;if(i.length){var a=i.findIndex((function(e){return void 0!==e.required}));a>=0?i[a].required=n:i=i.push({required:n,message:"请输入",trigger:["change"]})}else i=[{required:n,message:"请输入",trigger:["change"]}];return t.$set(r,"rules",i),!0}}))},setSectionElementDisable:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.forEach((function(e,r){t.setElementDisable(e.key,n)}))},setElementDisable:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.formItemMap((function(r){if(r.key==e)return r.properties instanceof Object?t.$set(r.properties,"disabled",n):t.$set(r,"properties",{disabled:n}),!0}))},setElementHidden:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.formItemMap((function(r){if(r.key==e)return t.$set(r,"hidden",n),!0}))},resetFields:function(){var e=this;this.$refs.form.resetFields(),this.formItemMap((function(t){if(["FormChildForm","FormCurd"].includes(t.type)){var n=e.$refs[t.key];n instanceof Array?n[0].resetFields():n.resetFields()}}))},foldBlock:function(e){var t=e.label,n=this.foldBlockList.indexOf(t);-1===n?this.foldBlockList.push(e.label):this.foldBlockList.splice(n,1)},isBlocked:function(e){return this.foldBlockList.indexOf(e.label)>-1},getBlockClass:function(e){var t=e.class;return Object.assign({},t,{"block-item":this.borderForm,"block-hide":this.foldBlockList.indexOf(e.label)>-1})},getFormItemLabel:function(e){return this.textModel&&["left","right"].includes(this.formProperties["label-position"])?e.label+":":e.label}}},o=n(33),s=Object(o.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"dynamic-form"},[n("el-form",e._b({ref:"form",class:{"border-form":e.borderForm},attrs:{model:e.data,"validate-on-rule-change":!0}},"el-form",e.formProperties,!1),[e._l(e.formItemList,(function(t){return[t.hidden?e._e():n("main",{key:t.label,staticClass:"pb12",class:e.getBlockClass(t)},[t.label?n("header",{staticClass:"block-nav flex justify-between "},[n("span",{staticClass:"block-text"},[e._v(e._s(t.label))]),e._v(" "),e.showFoldBtn&&e.borderForm&&!e.textModel&&"normal"===e.scanType?n("span",{staticClass:"block-fold-btn",on:{click:function(n){return e.foldBlock(t)}}},[e._v("\n          "+e._s(e.isBlocked(t)?"展开":"收起")+"\n          "),n("i",{class:["el-icon-arrow-"+(e.isBlocked(t)?"down":"up")]})]):e._e()]):e._e(),e._v(" "),n("article",{staticClass:"block-content relative y0 "},[n("section",{staticClass:"grid-wrap"},[e._l(t.children,(function(t){return["slot"==t.type?n(t.wrapertype,e._b({key:t.key,tag:"component",attrs:{label:e.getFormItemLabel(t)}},"component",t.wraperProperties,!1),[e._t(t.key)],2):"FormHide"==t.type?n("FormHide",{key:t.key,model:{value:e.data[t.key],callback:function(n){e.$set(e.data,t.key,n)},expression:"data[formItem.key]"}}):t.hidden?e._e():n("el-form-item",e._b({key:t.key,attrs:{rules:!e.textModel&&t.rules,label:e.getFormItemLabel(t),prop:t.key}},"el-form-item",t.wraperProperties,!1),[n(t.type||"FormInput",{key:t.key,ref:t.key,refInFor:!0,tag:"component",attrs:{item:t},model:{value:e.data[t.key],callback:function(n){e.$set(e.data,t.key,n)},expression:"data[formItem.key]"}})],1)]}))],2)])])]}))],2),e._v(" "),e.showTestTool&&!e.data.id?n("testTool",{attrs:{fields:e.formItemList,refFormName:"form"}}):e._e()],1)}),[],!1,null,"0066a27a",null);t.default=s.exports}}]);