(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{584:function(t,e,i){},636:function(t,e,i){"use strict";i(584)},645:function(t,e,i){"use strict";i.r(e);var a={name:"apiSchemLoader",components:{},data:function(){return{editorOptions:{selectOnLineNumbers:!1,roundedSelection:!1,readOnly:!1,cursorStyle:"line",automaticLayout:!0,glyphMargin:!0},language:"javascript",data:{title:"",code:""},dialogVisible:!1}},watch:{},methods:{confirm:function(){this.data.code=this.$refs.moEditor.editor.getValue(),this.$emit("loaded",this.data)},openDialog:function(){this.dialogVisible=!0},close:function(){this.dialogVisible=!1}}},o=(i(636),i(36)),n=Object(o.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"  relative  page-container"},[i("el-button",{attrs:{icon:"el-icon-sort",type:"primary",circle:""},on:{click:t.openDialog}}),t._v(" "),i("el-dialog",{staticClass:"hz-low-code",attrs:{visible:t.dialogVisible,"append-to-body":!0,title:"导入接口Json"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-input",{attrs:{placeholder:"请输入名称"},model:{value:t.data.title,callback:function(e){t.$set(t.data,"title",e)},expression:"data.title"}}),t._v(" "),i("MonacoEditor",{ref:"moEditor",staticClass:"editor-content mt12",attrs:{code:this.data.code,language:t.language,changeThrottle:1e3,editorOptions:t.editorOptions}}),t._v(" "),i("el-button",{staticClass:"mt12",attrs:{type:"primary"},on:{click:t.confirm}},[t._v("导入")])],1)],1)}),[],!1,null,"6e74639c",null);e.default=n.exports}}]);