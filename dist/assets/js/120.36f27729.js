(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{712:function(t,e,o){"use strict";o.r(e);var n={name:"DynamicPageDialog",props:{data:{},visible:{type:Object,default:function(){return{value:!1}}},container:{type:String,default:"el-dialog"},body:{type:Array,default:function(){return[]}},properties:{type:Object,default:function(){return{}}},layout:{type:[String,Object],default:"LayoutGrid"},onclose:{type:Function,default:function(){}}},computed:{layoutComp:function(){return"string"==typeof this.layout?{name:this.layout}:this.layout}},mounted:function(){console.log("----this.$attrs----",this.data)},components:{},methods:{afterClose:function(){this.onclose()}}},a=o(36),c=Object(a.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o(t.container,t._b({tag:"component",attrs:{visible:t.visible.value,"custom-class":"hz-low-code"},on:{"update:visible":function(e){return t.$set(t.visible,"value",e)},closed:t.afterClose}},"component",t.properties,!1),[o(t.layoutComp.name,t._b({tag:"components"},"components",t.layoutComp.properties,!1),t._l(t.body,(function(e){return o(e.component,t._b({key:e.name,tag:"component",attrs:{label:e.label,data:"@object@"==e.name?t.data:t.data[e.name],props:e.props}},"component",e.props,!1),t._l(e.children,(function(e,n){return o(e.component,t._b({key:n,tag:"component"},"component",e.props,!1))})),1)})),1)],1)}),[],!1,null,"7d99563c",null);e.default=c.exports}}]);