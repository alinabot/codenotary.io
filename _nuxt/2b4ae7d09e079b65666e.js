(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3],{450:function(t,e,n){var content=n(453);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(3).default)("153c97ab",content,!0,{sourceMap:!1})},451:function(t,e,n){"use strict";n.r(e);var r={name:"PageSectionHeader",props:{title:{type:String,default:""},tag:{type:String,default:"h2"},block:{type:Boolean,default:!1}},computed:{classes:function(){return{"-block":this.block}}}},o=(n(452),n(0)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"section-header",class:t.classes},[t._t("title",[n(t.tag,{tag:"h2"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"lead"},[t._t("default")],2)],2)}),[],!1,null,null,null);e.default=component.exports},452:function(t,e,n){"use strict";var r=n(450);n.n(r).a},453:function(t,e,n){(e=n(2)(!1)).push([t.i,".section-header{text-align:center;max-width:760px;margin:0 auto 6rem}.section-header h1,.section-header h2,.section-header h3{margin-top:0;font-weight:700;color:#244484}.section-header.-block{max-width:none}",""]),t.exports=e},454:function(t,e,n){"use strict";n.d(e,"a",(function(){return title}));var title=function(t){return"".concat(t," - CodeNotary")}},471:function(t,e,n){var content=n(546);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(3).default)("cac2cd14",content,!0,{sourceMap:!1})},545:function(t,e,n){"use strict";var r=n(471);n.n(r).a},546:function(t,e,n){(e=n(2)(!1)).push([t.i,".blog-post{margin-bottom:1rem}.blog-post .image-wrapper{width:100%;text-align:center}.blog-post .image-wrapper .image{-o-object-fit:cover;object-fit:cover;max-height:80px;margin-bottom:1rem;text-align:center;background-position:50%}.blog-post .date{font-size:80%;color:#868e96}",""]),t.exports=e},621:function(t,e,n){"use strict";n.r(e);n(48);var r=n(10),o=n(57),c=n.n(o),meta=n(454),l={components:{"no-ssr":c.a},head:function(){return{title:Object(meta.a)("Blog")}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("blog").only(["title","date","image","slug"]).sortBy("date","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){"function"==typeof this.$redrawVueMasonry&&this.$redrawVueMasonry()}},d=(n(545),n(0)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-section",[n("page-section-header",{attrs:{title:"Blog",tag:"h1"}}),t._v(" "),n("i-container",[n("i-row",[n("no-ssr",[n("masonry",{attrs:{cols:{default:4,1e3:3,700:2,400:1},gutter:{default:"1rem",700:"1rem"}}},t._l(t.articles,(function(article){return n("div",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:article.slug,staticClass:"item",attrs:{"column-width":"33px"}},[n("i-card",{staticClass:"blog-post"},[n("div",{staticClass:"image-wrapper"},[n("img",{staticClass:"image -responsive",attrs:{src:article.image||"/images/blog-post.svg",alt:article.title,onerror:"this.src='/images/blog-post.svg'"}})]),t._v(" "),n("nuxt-link",{staticClass:"_overlay-link",attrs:{to:{name:"blog-post",params:{post:article.slug}}}},[n("div",{staticClass:"title"},[t._v("\n                                        "+t._s(article.title)+"\n                                    ")])]),t._v(" "),n("div",{staticClass:"date"},[t._v("\n                                    "+t._s(article.date)+"\n                                ")])],1)],1)})),0)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageSectionHeader:n(451).default,PageSection:n(188).default})}}]);