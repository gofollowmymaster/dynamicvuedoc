(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{944:function(t,n,e){"use strict";e.r(n);e(117);var o=e(418),i=e(422),s=e(643),a=e(0),r="el-amap-label-marker",u={name:r,mixins:[o.a],props:["vid","position","zooms","rank","name","icon","text","zIndex","opacity","image","size","collision","animation","markers"],data:function(){var t=this;return{$tagName:r,withSlots:!1,tmpVM:null,converters:{vnode:function(n){var e="function"==typeof n?n(t):n,o=Object(s.c)(e);return this.$customContent=o,o.$el}},handlers:{zIndex:function(t){this.setzIndex(t)},visible:function(t){!1===t?this.hide():this.show()},markers:function(t){this.add()}}}},created:function(){this.tmpVM=new a.default({data:function(){return{node:""}},render:function(t){var n=this.node;return t("div",{ref:"node"},Array.isArray(n)?n:[n])}}).$mount()},methods:{__initComponent:function(t){this.$slots.default&&this.$slots.default.length&&(t.content=this.tmpVM.$refs.node),this.$amapComponent=new AMap.Marker(t)},$$getExtData:function(){return this.$amapComponent.getExtData()},$$getPosition:function(){return Object(i.b)(this.$amapComponent.getPosition())},$$getOffset:function(){return Object(i.c)(this.$amapComponent.getOffset())}},render:function(){var t=this.$slots.default||[];return t.length&&(this.tmpVM.node=t),null},destroyed:function(){this.tmpVM.$destroy(),this.$customContent&&this.$customContent.$destroy&&this.$customContent.$destroy()}},c=e(36),d=Object(c.a)(u,void 0,void 0,!1,null,null,null);n.default=d.exports}}]);