(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{440:function(t,e,r){var content=r(442);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(3).default)("dffcb380",content,!0,{sourceMap:!1})},441:function(t,e,r){"use strict";var n=r(440);r.n(n).a},442:function(t,e,r){(e=r(2)(!1)).push([t.i,".wordpress-iframe{margin-top:-80px;border:0;width:100%;height:100vh}",""]),t.exports=e},443:function(t,e,r){"use strict";var n={props:{path:{type:String,default:""},domain:{type:String,default:"wp.codenotary.io"}},computed:{url:function(){return"https://".concat(this.domain,"/").concat(this.path)}},methods:{onLoad:function(){}}},o=(r(441),r(1)),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("iframe",{ref:"iframe",staticClass:"wordpress-iframe",attrs:{title:"CodeNotary",src:this.url,width:"400",height:"600"},on:{load:this.onLoad}})}),[],!1,null,null,null);e.a=component.exports},484:function(t,e,r){"use strict";r.r(e);var n={layout:"iframe",components:{WordpressIframe:r(443).a}},o=r(1),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("wordpress-iframe",{attrs:{path:""}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);