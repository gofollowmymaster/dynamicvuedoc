(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{407:function(e,t,i){"use strict";var n=i(57),a=i(35),l=i(150),s=i(12),r=(i(232),i(109),i(8),i(110),i(235),i(233),i(27),i(234),i(56),i(108));t.a={props:{item:{type:Object,default:function(){return{}}},value:[String,Number,Array,Boolean],allDisabled:{type:Boolean,default:!1},randomId:{type:String,default:""}},inject:["changeData","statusChangeFn","formItemType","childChangeData","transExpression"],computed:{bindOptions:function(){var e=Object.assign({},this.item);return delete(e=Object(s.a)(Object(s.a)({},e),e.properties)).wraperProperties,delete e.key,delete e.type,delete e.label,delete e.readonly,delete e.rules,delete e.placeholder,delete e.prepend,delete e.append,delete e.defaultValue,delete e.extra,delete e.extra,delete e.properties,delete e.options,e},getDisabled:function(){if(this.allDisabled)return!0;this.item.properties.disabled;return this.item.properties.disabled},val:{get:function(){return this.value},set:function(e){this.$emit("input",e),"childForm"!==this.formItemType?this.statusChangeFn.valueUpdateEvent(Object(l.a)({},this.item.key,e)):this.childChangeData.valueUpdateEvent()}},getTextModel:function(){return!!this.item.isText||!!this.changeData.textModel}},mounted:function(){},methods:{getPlaceholder:function(e){return e.disable?"":e.placeholder?e.placeholder:"请输入".concat(e.label)},getSelectPlaceholder:function(e){return e.disable?"":void 0!==e.placeholder&&null!==e.placeholder?e.placeholder:"请选择".concat(e.label)},onFocus:function(e){var t;null!==(t=this.item.events)&&void 0!==t&&t.onFocus&&this.item.events.onFocus({event:e,option:this.item,value:this.value})},onBlur:function(e){var t;null!==(t=this.item.events)&&void 0!==t&&t.onBlur&&this.item.events.onBlur({event:e,option:this.item,value:this.value})},_valueLink:function(e){"childForm"===this.formItemType?this._valueLinkByChildForm(e):this._valueLinkByForm(e)},_valueLinkByForm:function(e){var t=this;"object"===Object(a.a)(this.item.valueLink)&&Object.entries(this.item.valueLink).forEach((function(i){var a=Object(n.a)(i,2),l=a[0],s=a[1];"@*any*@"!==l?e===l&&t._valueLinkHandle(s,e):t._valueLinkHandle(s,e)}))},_valueLinkHandle:function(e,t){var i=this;e.length>0&&Object.entries(e).forEach((function(e){var a=Object(n.a)(e,2),s=(a[0],a[1]),o=s.linkKey,u=s.linkValue,c=s.linkDisable,h=s.linkHidden,d=s.linkRequired;Object(r.j)(u)&&("function"==typeof u&&(u=u(t)),i.statusChangeFn.updateFormData(Object(l.a)({},o,u))),Object(r.j)(c)&&i.statusChangeFn.setElementDisable(o,c),Object(r.j)(h)&&i.statusChangeFn.setElementHidden(o,h),Object(r.j)(d)&&i.statusChangeFn.setElementRequired(o,d)}))},_valueLinkByChildForm:function(e){},throwPointRightZero:function(e){var t=String(e);if(t.indexOf(".")>-1){var i=t.split("."),n=i[1];return 0===(n=n.replace(/[0]+$/g,"")).length?i[0]:i[0]+"."+n}return t},throwPointLeftZero:function(e){var t=String(e);if(t.indexOf(".")>-1){var i=t.split("."),n=i[0];return 0===(n=n.replace(/^[0]+/g,"")).length?"0."+i[1]:n+"."+i[1]}return""===(t=t.replace(/^[0]+/g,""))&&""!==e&&(t="0"),t}}}},591:function(e,t,i){},653:function(e,t,i){"use strict";i(591)},758:function(e,t,i){"use strict";i.r(t);var n=i(150),a=(i(109),i(8),i(110),i(78),{name:"FormAutoComplete",mixins:[i(407).a],methods:{querySearchAsync:function(e,t){var i=this;if(this.item.querySearchAsync)this.item.querySearchAsync(e,t,this);else{var a=Object(n.a)({},this.item.searchKey,e);this.item.otherSearchKeys&&this.item.otherSearchKeys.length>0&&this.item.otherSearchKeys.forEach((function(e){a[e.key]=e.value})),this.getSpecialAxios().post(this.item.searchUrl,a).then((function(e){var n;if(200===(n=e.request&&e.headers?e.data:e).code)if(n.data){var a=n.data.map((function(e){return i.item.mainShowKey?{value:e[i.item.mainShowKey],item:e}:{value:e[i.item.autoCompleteKeys[0]],item:e}}));t(a),i.item.fetchSuggestions&&i.item.fetchSuggestions(a,i.randomId)}else t([]),i.item.fetchSuggestions&&i.item.fetchSuggestions([],i.randomId),i.$message.error("无匹配数据");else t([]),i.item.fetchSuggestions&&i.item.fetchSuggestions([],i.randomId),i.$message.error(n.msg||"无匹配数据")})).catch((function(){i.$message.error("服务器错误")}))}},handleSelect:function(e){var t={};this.item.autoCompleteKeys.forEach((function(i){t[i]=e.item[i]})),this.statusChangeFn.updateFormData(t),this.item.onSelect&&this.item.onSelect(e,this.randomId)}}}),l=(i(653),i(33)),s=Object(l.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"form-item-box",class:"form-unqiue-"+e.item.key+" "+(e.getTextModel?"":"hz-untext-box"),style:e.item.style||{}},[e.getTextModel?i("div",{staticClass:"form-input-text",style:e.item.textStyle||{}},[e._v(e._s(e.val||"-"))]):i("el-autocomplete",e._b({staticClass:"auto-complte-input",attrs:{placeholder:e.getPlaceholder(e.item),disabled:e.getDisabled,clearable:!0,"value-key":"value","fetch-suggestions":e.querySearchAsync},on:{blur:function(t){return e.onBlur(e.item,t)},focus:function(t){return e.onFocus(e.item,t)},select:e.handleSelect},model:{value:e.val,callback:function(t){e.val="string"==typeof t?t.trim():t},expression:"val"}},"el-autocomplete",e.bindOptions,!1))],1)}),[],!1,null,"147cfa9c",null);t.default=s.exports}}]);