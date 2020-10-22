/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17,3],{452:function(e,t,r){var content=r(455);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(3).default)("153c97ab",content,!0,{sourceMap:!1})},453:function(e,t,r){"use strict";r.r(t);r(20);var n={name:"PageSectionHeader",props:{title:{type:String,default:""},tag:{type:String,default:"h2"},block:{type:Boolean,default:!1},top:{type:Number,default:0},bottom:{type:Number,default:6}}},o=(r(454),r(0)),component=Object(o.a)(n,(function(){var e,t=this,r=t.$createElement,n=t._self._c||r;return n("header",{staticClass:"section-header",class:(e={block:t.block},e["_margin-top-"+t.top]=!0,e["_margin-bottom-"+t.bottom]=!0,e)},[t._t("title",[n(t.tag,{tag:"h2"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"lead"},[t._t("default")],2)],2)}),[],!1,null,null,null);t.default=component.exports},454:function(e,t,r){"use strict";var n=r(452);r.n(n).a},455:function(e,t,r){(t=r(2)(!1)).push([e.i,".section-header{text-align:center}.section-header h1,.section-header h2,.section-header h3{margin-top:0;font-weight:700;color:#244484}.section-header.-block{max-width:none}",""]),e.exports=t},456:function(e,t,r){"use strict";r.d(t,"a",(function(){return title}));var title=function(e){return"".concat(e," - CodeNotary")}},457:function(e,t,r){var content=r(464);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(3).default)("35b3f446",content,!0,{sourceMap:!1})},459:function(e,t,r){var content=r(466);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(3).default)("dd4d724e",content,!0,{sourceMap:!1})},460:function(e,t,r){"use strict";r.r(t);var n={name:"Feature",props:{title:{type:String,default:"",required:!0},subtitle:{type:String,default:""},image:{type:String,default:""},variant:{type:String,default:"dark"},color:{type:String,default:"#333"},outlined:{type:Boolean,default:!1}}},o=(r(463),r(0)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return!e.outlined&&e.color?r("div",{staticClass:"story-card",style:"background-color: "+e.color},[e.image?r("img",{staticClass:"image -responsive",attrs:{src:e.image,alt:e.title}}):e._e(),e._v(" "),e.title?r("h5",{staticClass:"title"},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.subtitle?r("p",{staticClass:"subtitle _text-white"},[e._v(e._s(e.subtitle))]):e._e()]):e.outlined?r("div",{staticClass:"story-card",style:"border: 2px solid "+e.color},[e.image?r("img",{staticClass:"image -responsive",attrs:{src:e.image,alt:e.title}}):e._e(),e._v(" "),e.title?r("h5",{staticClass:"title _text-black"},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.subtitle?r("p",{staticClass:"subtitle _text-black"},[e._v(e._s(e.subtitle))]):e._e()]):r("div",{class:"story-card _background-"+e.variant},[e.image?r("img",{staticClass:"image -responsive",attrs:{src:e.image,alt:e.title}}):e._e(),e._v(" "),e.title?r("h5",{staticClass:"title"},[e._v(e._s(e.title))]):e._e(),e._v(" "),e.subtitle?r("p",{staticClass:"subtitle _text-white"},[e._v(e._s(e.subtitle))]):e._e()])}),[],!1,null,null,null);t.default=component.exports},461:function(e,t,r){"use strict";t.a={name:"colorUtils",data:function(){return{colorOptions:["#333333","#F44336","#E91E63","#673AB7","#3F51B5","#00BCD4","#4CAF50","#FFC107","#FF9800","#FF5722","#795548","#607D8B"]}},beforeDestryed:function(){this.colorOptions=null},methods:{getColor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.colorOptions&&this.colorOptions.length&&this.colorOptions[e%this.colorOptions.length]||"grey"}}}},462:function(e,t,r){"use strict";r.r(t);var n={name:"Feature",props:{title:{type:String,default:""},image:{type:String,default:""}}},o=(r(465),r(0)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"feature"},[e.image?r("img",{staticClass:"image -responsive",attrs:{src:e.image,alt:e.title}}):e._e(),e._v(" "),r("h3",{staticClass:"title _text-primary"},[e._v(e._s(e.title))]),e._v(" "),r("div",[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports},463:function(e,t,r){"use strict";var n=r(457);r.n(n).a},464:function(e,t,r){(t=r(2)(!1)).push([e.i,".story-card{text-align:center;padding:2rem 1rem;border-radius:4px}.story-card img{width:80px;height:auto;display:block;margin:0 auto;-o-object-fit:contain;object-fit:contain}.story-card h3,.story-card h4,.story-card h5{font-weight:700;color:#fff;margin:1rem 0 0}.story-card .subtitle{font-weight:300;margin:6px 0 0;font-size:14px;line-height:18px}",""]),e.exports=t},465:function(e,t,r){"use strict";var n=r(459);r.n(n).a},466:function(e,t,r){(t=r(2)(!1)).push([e.i,".feature{text-align:center}.feature .title{font-weight:700;color:#244484}.feature img{width:80px;height:auto;display:block;margin:0 auto}",""]),e.exports=t},491:function(e,t,r){var content=r(630);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(3).default)("1da3d4a1",content,!0,{sourceMap:!1})},492:function(e,t,r){var content=r(632);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(3).default)("3a25f076",content,!0,{sourceMap:!1})},493:function(e,t,r){var content=r(634);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(3).default)("72767353",content,!0,{sourceMap:!1})},494:function(e,t,r){var content=r(636);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(3).default)("73e119be",content,!0,{sourceMap:!1})},495:function(e,t,r){var content=r(638);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(3).default)("36119668",content,!0,{sourceMap:!1})},521:function(e,t,r){"use strict";r.r(t);r(37);var n=r(9),o=r(612),c=r.n(o);function l(){return(l=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)Object.prototype.hasOwnProperty.call(source,t)&&(e[t]=source[t])}return e}).apply(this,arguments)}var d=Object.prototype.hasOwnProperty;var m,f,h,v=(m=!1,f=[],h={resolved:function(){return m},resolve:function(e){if(!m){m=!0;for(var i=0,t=f.length;i<t;i++)f[i](e)}},promise:{then:function(e){m?e():f.push(e)}}},{notify:function(){h.resolve()},wait:function(){return h.promise},render:function(e,t,r){this.wait().then((function(){r(window.grecaptcha.render(e,t))}))},reset:function(e){void 0!==e&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.reset(e)})))},execute:function(e){void 0!==e&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.execute(e)})))},checkRecaptchaLoad:function(){d.call(window,"grecaptcha")&&d.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!h.resolved())throw new Error("ReCAPTCHA has not been loaded")}});"undefined"!=typeof window&&(window.vueRecaptchaApiLoaded=v.notify);var y={name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!1},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},beforeMount:function(){if(this.loadRecaptchaScript&&!document.getElementById(this.recaptchaScriptId)){var script=document.createElement("script");script.id=this.recaptchaScriptId,script.src="https://"+this.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+this.language,script.async=!0,script.defer=!0,document.head.appendChild(script)}},mounted:function(){var e=this;v.checkRecaptchaLoad();var t=l({},this.$props,{callback:this.emitVerify,"expired-callback":this.emitExpired,"error-callback":this.emitError}),r=this.$slots.default?this.$el.children[0]:this.$el;v.render(r,t,(function(t){e.$widgetId=t,e.$emit("render",t)}))},methods:{reset:function(){v.reset(this.$widgetId)},execute:function(){v.execute(this.$widgetId)},emitVerify:function(e){this.$emit("verify",e)},emitExpired:function(){this.$emit("expired")},emitError:function(){this.$emit("error")}},render:function(e){return e("div",{},this.$slots.default)}},w="https://api.codenotary.io/immudb-beta",x={components:{VueRecaptcha:y},props:{value:{type:Boolean,default:!1}},data:function(){return{verified:!1,sending:!1,error:!1,sent:!1,sitekey:"6LeHGL4ZAAAAALlN7PGMzqnNBM6GVwhlJ-ZeiCV8",form:this.$inkline.form({contactEmail:{validators:[{rule:"required"},{rule:"email"}]}})}},methods:{onVisibilityChange:function(e){this.$emit("input",e)},onSubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.verified){t.next=2;break}return t.abrupt("return");case 2:return e.sending=!0,r=e.form.contactEmail.value,data={email:r},t.prev=5,t.next=8,c.a.post("".concat(w,"/research-paper"),data,{withCredentials:!0});case 8:e.sent=!0,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),e.error=!0;case 14:return t.prev=14,e.sending=!1,e.verified=!1,setTimeout((function(){e.sent=!1,e.error=!1,e.$emit("input",!1)}),3e3),t.finish(14);case 19:case"end":return t.stop()}}),t,null,[[5,11,14,19]])})))()},onVerify:function(e){e&&(this.verified=!0)}}},_=(r(629),r(0)),component=Object(_.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("i-modal",{staticClass:"subscribe-modal",attrs:{size:"lg",value:e.value},on:{input:e.onVisibilityChange}},[r("template",{slot:"header"},[e._v("\n        Download Research Paper\n    ")]),e._v(" "),e.sent?r("i-alert",{staticClass:"_margin-bottom-1",attrs:{variant:"success"}},[r("template",{slot:"icon"},[r("fa",{attrs:{icon:"check-circle"}})],1),e._v(" "),r("p",[e._v("Email sent successfully!")])],2):e._e(),e._v(" "),e.error?r("i-alert",{staticClass:"_margin-bottom-1",attrs:{variant:"danger"}},[r("template",{slot:"icon"},[r("fa",{attrs:{icon:"times-circle"}})],1),e._v(" "),r("p",[e._v("Something went wrong. Please try again later!")])],2):e._e(),e._v(" "),r("p",{staticClass:"_margin-top-0"},[e._v("\n        We'll send you the research paper via email.\n    ")]),e._v(" "),r("i-form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},[r("i-form-group",[r("i-input",{attrs:{schema:e.form.contactEmail,placeholder:"Enter your email"}})],1),e._v(" "),r("i-form-group",[r("vue-recaptcha",{ref:"recaptcha",attrs:{"load-recaptcha-script":!0,sitekey:e.sitekey},on:{verify:e.onVerify}})],1),e._v(" "),r("i-form-group",[r("i-button",{attrs:{type:"submit",variant:"primary",disabled:!e.verified||e.sending,block:""}},[e._v("\n                "+e._s(e.sending?"Sending..":"Send me the document")+"\n            ")])],1)],1)],2)}),[],!1,null,null,null);t.default=component.exports},522:function(e,t,r){"use strict";r.r(t);var n={name:"github-button",props:["href","ariaLabel","title","dataIcon","dataColorScheme","dataSize","dataShowCount","dataText"],render:function(e){return e("span",[e("a",{attrs:{href:this.href,"aria-label":this.ariaLabel,title:this.title,"data-icon":this.dataIcon,"data-color-scheme":this.dataColorScheme,"data-size":this.dataSize,"data-show-count":this.dataShowCount,"data-text":this.dataText},ref:"_"},this.$slots.default)])},mounted:function(){this.paint()},beforeUpdate:function(){this.reset()},updated:function(){this.paint()},beforeDestroy:function(){this.reset()},methods:{paint:function(){var e=this.$el.appendChild(document.createElement("span")),t=this;Promise.resolve().then(r.bind(null,611)).then((function(r){r.render(e.appendChild(t.$refs._),(function(t){try{e.parentNode.replaceChild(t,e)}catch(e){}}))}))},reset:function(){this.$el.replaceChild(this.$refs._,this.$el.lastChild)}}},o={name:"ImmudbHeader",components:{ResearchPaperModal:r(521).default,GithubButton:n},data:function(){return{researchPaperModalVisible:!1}},methods:{openCodingChallenge:function(){var data="https://github.com/codenotary/immuchallenge";window.open(data,"_blank")}}},c=(r(631),r(0)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("i-header",{attrs:{id:"immudb-header"}},[r("research-paper-modal",{model:{value:e.researchPaperModalVisible,callback:function(t){e.researchPaperModalVisible=t},expression:"researchPaperModalVisible"}}),e._v(" "),r("img",{attrs:{src:"/images/immudb/mascot.png",alt:"immudb mascot"}}),e._v(" "),r("h1",{staticClass:"d6 _text-primary"},[e._v("immudb")]),e._v(" "),r("div",{attrs:{id:"github-button"}},[r("github-button",{attrs:{href:"https://github.com/codenotary/immudb","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star codenotary/immudb on GitHub"}},[e._v("\n            Star\n        ")])],1),e._v(" "),r("p",{staticClass:"description lead"},[e._v("\n        immudb - the lightweight, high-speed immutable database for systems and applications. Open Source and easy to integrate into any existing application.\n    ")]),e._v(" "),r("p",{staticClass:"action"},[r("i-button",{attrs:{size:"lg",variant:"primary",href:"https://docs.immudb.io"}},[e._v("Get started now")])],1),e._v(" "),r("i-nav",{staticClass:"header-nav"},[r("i-button",{attrs:{id:"research-paper-button",link:"",variant:"primary"},on:{click:function(t){e.researchPaperModalVisible=!0}}},[r("span",{staticClass:"underline"},[e._v("Research Paper")])]),e._v(" "),r("i-nav-item",{staticClass:"dot _hidden-sm-and-down"},[e._v("·")]),e._v(" "),r("i-nav-item",{staticClass:"underline",attrs:{to:{name:"technologies-immudb-immutable-data-science"}}},[e._v("Immutable Data Science")]),e._v(" "),r("i-nav-item",{staticClass:"dot _hidden-sm-and-down"},[e._v("·")]),e._v(" "),r("i-nav-item",{staticClass:"underline",attrs:{href:"https://github.com/codenotary/immudb"}},[e._v("GitHub")])],1),e._v(" "),r("p",{staticClass:"_margin-top-3"},[r("i-button",{attrs:{id:"research-paper-button",link:"",variant:"primary"},on:{click:function(t){return e.openCodingChallenge()}}},[r("i-badge",{staticClass:"_margin-right-1-2 dont-underline",attrs:{size:"sm",variant:"danger"}},[r("fa",{staticStyle:{"margin-right":".15rem"},attrs:{icon:"fire"}}),e._v(" "),r("span",{staticClass:"dont-underline"},[e._v("Hot")])],1),e._v(" "),r("span",{staticClass:"underline"},[e._v("immudb Coding Challenge")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ResearchPaperModal:r(521).default})},542:function(e,t,r){"use strict";r.r(t);var n={components:{Feature:r(462).default}},o=(r(633),r(0)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("page-section",{attrs:{id:"immudb-features-section"}},[r("i-container",[r("i-row",[r("i-column",{attrs:{lg:"4"}},[r("feature",{attrs:{title:"Immutable",image:"/images/immudb//features/immutable2.svg"}},[r("p",[e._v("Any kind of key-value. Clients can choose how to structure data.")]),e._v(" "),r("p",[r("strong",[e._v("No data mutation APIs")]),e._v(" are provided.")]),e._v(" "),r("p",[e._v("Data is never overwritten, so multiple versions of the same key co-exist and are verifiable.")])])],1),e._v(" "),r("i-column",{attrs:{lg:"4"}},[r("feature",{attrs:{title:"Auditable",image:"/images/immudb//features/auditable3.svg"}},[r("p",[e._v("Tamper-evident history system.")]),e._v(" "),r("p",[e._v("Clients and auditors want "),r("strong",[e._v("cryptographic proof")]),e._v("  of data inclusion and historical consistency in real time.")]),e._v(" "),r("p",[e._v("If tampered, clients and auditors will notice that and take actions.")])])],1),e._v(" "),r("i-column",{attrs:{lg:"4"}},[r("feature",{attrs:{title:"Secure",image:"/images/immudb/features/secure2.svg"}},[r("p",[e._v("Data ownership is verifiable by clients and auditors.")]),e._v(" "),r("p",[e._v("Sign your data using "),r("strong",[e._v("Public-Key Cryptography")]),e._v(".")]),e._v(" "),r("p",[e._v("Keys additions and revocations is immutably stored into the database")])])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Feature:r(462).default,PageSection:r(184).default})},543:function(e,t,r){"use strict";r.r(t);var n=r(461),o=r(460),c={name:"ImmudbRunsOnSection",mixins:[n.a],components:{StoryCard:o.default},data:function(){return{items:[{title:"Operating Systems",subitems:["Windows","Linux","macOS","FreeBSD"]},{title:"Architectures",subitems:["x86","x86-64","ARM","s390x","RISC-V"]},{title:"Connectors",subitems:["Java",".Net","Node.js","Python","Go","REST API"]}]}},beforeDestroy:function(){this.items=null}},l=(r(635),r(0)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("page-section",{attrs:{id:"immudb-runs-on-section"}},[r("i-container",[r("i-row",[r("i-column",[r("page-section-header",{attrs:{title:"Runs on",bottom:2}})],1)],1),e._v(" "),r("i-row",[r("i-column",[r("i-tabs",{staticClass:"analyze-and-manage-tabs",attrs:{stretch:"",block:""}},e._l(e.items,(function(t){return r("i-tab",{key:t.title,staticClass:"_padding-top-2",attrs:{title:t.title}},[r("i-row",e._l(t.subitems,(function(t,n){return r("i-column",{key:t+"-"+n,attrs:{xs:"6",sm:"4",md:"3",lg:"3"}},[r("story-card",{attrs:{title:t,color:e.getColor(6),outlined:""}})],1)})),1)],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PageSectionHeader:r(453).default,StoryCard:r(460).default,PageSection:r(184).default})},611:function(e,t,r){"use strict";r.r(t),r.d(t,"render",(function(){return I}));var n=window.document,o=window.Math,c=window.HTMLElement,l=window.XMLHttpRequest,d=function(e){return function(t,r,n){var o=e.createElement(t);if(null!=r)for(var c in r){var l=r[c];null!=l&&(null!=o[c]?o[c]=l:o.setAttribute(c,l))}if(null!=n)for(var i=0,d=n.length;i<d;i++){var m=n[i];o.appendChild("string"==typeof m?e.createTextNode(m):m)}return o}},m=d(n),f=function(e,t){return{}.hasOwnProperty.call(e,t)},h=function(e){return(""+e).toLowerCase()},v="github.com",y=l&&"prototype"in l&&"withCredentials"in l.prototype,w=y&&c&&"attachShadow"in c.prototype&&!("prototype"in c.prototype.attachShadow),x=function(e,t,r){e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent("on"+t,r)},_=function(e,t,r){e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent("on"+t,r)},C={light:".btn{color:#24292e;background-color:#eff3f6;border-color:#c5c9cc;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e6ebf1;background-position:-0.5em;border-color:#9fa4a9;border-color:rgba(27,31,35,.35);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f0f3f6'/%3e%3cstop offset='90%25' stop-color='%23e6ebf1'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;border-color:#a1a4a8;border-color:rgba(27,31,35,.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#d1d2d3;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}",dark:".btn{color:#fafbfc;background-color:#202428;border-color:#1f2327;border-color:rgba(27,31,35,.2);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232f363d'/%3e%3cstop offset='90%25' stop-color='%23202428'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2f363d, #202428 90%);background-image:linear-gradient(180deg, #2f363d, #202428 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2F363D', endColorstr='#FF1E2226')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#1b1f23;background-position:-0.5em;border-color:#1b1f23;border-color:rgba(27,31,35,.5);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232b3137'/%3e%3cstop offset='90%25' stop-color='%231b1f23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2b3137, #1b1f23 90%);background-image:linear-gradient(180deg, #2b3137, #1b1f23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2B3137', endColorstr='#FF191D21')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#181b1f;border-color:#1a1d21;border-color:rgba(27,31,35,.5);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#fafbfc;background-color:#1b1f23;border-color:#1b1f23;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#2188ff}.octicon-heart{color:#ec6cb9}"},k=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+C[f(C,t)?t:e]+"}"},S=function(e){if(null==e)return C.light;if(f(C,e))return C[e];var t=function(e,t,r,n){null==t&&(t="&"),null==r&&(r="="),null==n&&(n=window.decodeURIComponent);for(var o={},c=e.split(t),i=0,l=c.length;i<l;i++){var d=c[i];if(""!==d){var m=d.split(r);o[n(m[0])]=null!=m[1]?n(m.slice(1).join(r)):void 0}}return o}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return C[f(C,t["no-preference"])?t["no-preference"]:"light"]+k("light",t.light)+k("dark",t.dark)},data={"mark-github":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>'}}},heart:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>'}}},eye:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>'}}},star:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>'}}},"repo-forked":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>'}}},"repo-template":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M6 .75A.75.75 0 016.75 0h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 .75zm5 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.5h-.75A.75.75 0 0111 .75zM4.992.662a.75.75 0 01-.636.848c-.436.063-.783.41-.846.846a.75.75 0 01-1.485-.212A2.501 2.501 0 014.144.025a.75.75 0 01.848.637zM2.75 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012.75 4zm10.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM2.75 8a.75.75 0 01.75.75v.268A1.72 1.72 0 013.75 9h.5a.75.75 0 010 1.5h-.5a.25.25 0 00-.25.25v.75c0 .28.114.532.3.714a.75.75 0 01-1.05 1.072A2.495 2.495 0 012 11.5V8.75A.75.75 0 012.75 8zm10.5 0a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-.75a.75.75 0 010-1.5h.75v-.25a.75.75 0 01.75-.75zM6 9.75A.75.75 0 016.75 9h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 9.75zm-1 2.5v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>'}}},"issue-opened":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>'}}},download:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>'}}}},z=function(e,t){e=h(e).replace(/^octicon-/,""),f(data,e)||(e="mark-github");var r=t>=24&&24 in data[e].heights?24:16,svg=data[e].heights[r];return'<svg viewBox="0 0 '+svg.width+" "+r+'" width="'+t*svg.width/r+'" height="'+t+'" class="octicon octicon-'+e+'" aria-hidden="true">'+svg.path+"</svg>"},M={},A=function(e,t){var r=M[e]||(M[e]=[]);if(!(r.push(t)>1)){var n=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete M[e];t=r.shift();)t.apply(null,arguments)}));if(y){var o=new l;x(o,"abort",n),x(o,"error",n),x(o,"load",(function(){var data;try{data=JSON.parse(this.responseText)}catch(e){return void n(e)}n(200!==this.status,data)})),o.open("GET",e),o.send()}else{var c=this||window;c._=function(e){c._=null,n(200!==e.meta.status,e.data)};var script=d(c.document)("script",{async:!0,src:e+(-1!==e.indexOf("?")?"&":"?")+"callback=_"}),m=function(){c._&&c._({meta:{}})};x(script,"load",m),x(script,"error",m),script.readyState&&function(e,t,r){var n=function(){if(t.test(e.readyState))return _(e,"readystatechange",n),r.apply(this,arguments)};x(e,"readystatechange",n)}(script,/de|m/,m),c.document.getElementsByTagName("head")[0].appendChild(script)}}},F=function(e,t,r){var n=d(e.ownerDocument),style=e.appendChild(n("style",{type:"text/css"})),o="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}"+S(t["data-color-scheme"]);style.styleSheet?style.styleSheet.cssText=o:style.appendChild(e.ownerDocument.createTextNode(o));var c="large"===h(t["data-size"]),l=n("a",{className:"btn",href:t.href,rel:"noopener",target:"_blank",title:t.title||void 0,"aria-label":t["aria-label"]||void 0,innerHTML:z(t["data-icon"],c?16:14)},[" ",n("span",{},[t["data-text"]||""])]),m=e.appendChild(n("div",{className:"widget"+(c?" widget-lg":"")},[l])),f=l.hostname.replace(/\.$/,"");if(f.length<v.length||("."+f).substring(f.length-v.length)!=="."+v)return l.removeAttribute("href"),void r(m);var path=(" /"+l.pathname).split(/\/+/);if(((f===v||f==="gist."+v)&&"archive"===path[3]||f===v&&"releases"===path[3]&&("download"===path[4]||"latest"===path[4]&&"download"===path[5])||f==="codeload."+v)&&(l.target="_top"),"true"===h(t["data-show-count"])&&f===v){var y,w;if(!path[2]&&path[1])w="followers",y="?tab=followers";else if(!path[3]&&path[2])w="stargazers_count",y="/stargazers";else if(path[4]||"subscription"!==path[3])if(path[4]||"fork"!==path[3]){if("issues"!==path[3])return void r(m);w="open_issues_count",y="/issues"}else w="forks_count",y="/network/members";else w="subscribers_count",y="/watchers";var x=path[2]?"/repos/"+path[1]+"/"+path[2]:"/users/"+path[1];A.call(this,"https://api.github.com"+x,(function(e,t){if(!e){var data=t[w];m.appendChild(n("a",{className:"social-count",href:t.html_url+y,rel:"noopener",target:"_blank","aria-label":data+" "+w.replace(/_count$/,"").replace("_"," ").slice(0,data<2?-1:void 0)+" on GitHub"},[(""+data).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}r(m)}))}else r(m)},E=window.devicePixelRatio||1,$=function(e){return(E>1?o.ceil(o.round(e*E)/E*2)/2:o.ceil(e))||0},R=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},I=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){for(var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},r=["icon","color-scheme","text","size","show-count"],i=0,n=r.length;i<n;i++){var o="data-"+r[i];t[o]=e.getAttribute(o)}return null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),w){var r=m("span");F(r.attachShadow({mode:"closed"}),e,(function(){t(r)}))}else{var iframe=m("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});R(iframe,[0,0]),iframe.style.border="none";var c=function(){var body,r=iframe.contentWindow;try{body=r.document.body}catch(e){return void n.body.appendChild(iframe.parentNode.removeChild(iframe))}_(iframe,"load",c),F.call(r,body,e,(function(r){var n=function(e){var t=e.offsetWidth,r=e.offsetHeight;if(e.getBoundingClientRect){var n=e.getBoundingClientRect();t=o.max(t,$(n.width)),r=o.max(r,$(n.height))}return[t,r]}(r);iframe.parentNode.removeChild(iframe),function(e,t,r){var n=function(){return _(e,t,n),r.apply(this,arguments)};x(e,t,n)}(iframe,"load",(function(){R(iframe,n)})),iframe.src="https://unpkg.com/github-buttons@2.14.0/dist/buttons.html#"+(iframe.name=function(e,t,r,n){null==t&&(t="&"),null==r&&(r="="),null==n&&(n=window.encodeURIComponent);var o=[];for(var c in e){var l=e[c];null!=l&&o.push(n(c)+r+n(l))}return o.join(t)}(e)),t(iframe)}))};x(iframe,"load",c),n.body.appendChild(iframe)}}},629:function(e,t,r){"use strict";var n=r(491);r.n(n).a},630:function(e,t,r){(t=r(2)(!1)).push([e.i,'.subscribe-modal .close .icon{display:none}.subscribe-modal .close:before{font-family:Helvetica,monospace;content:"x";font-size:12px;display:inline-block}',""]),e.exports=t},631:function(e,t,r){"use strict";var n=r(492);r.n(n).a},632:function(e,t,r){(t=r(2)(!1)).push([e.i,"#immudb-header{background-color:#fff;background-image:url(/images/immudb/header.jpg);text-align:center}#immudb-header img{height:280px;width:auto;display:block;margin:3rem auto 1.5rem}#immudb-header h1{font-weight:700}#immudb-header .description{margin:2rem auto;max-width:35rem}#immudb-header .header-nav{justify-content:center}#immudb-header .header-nav .dot{color:#868e96}@media screen and (min-width:576px){#immudb-header .header-nav{margin-left:-62px}}#immudb-header .underline{text-decoration:underline}#immudb-header .dont-underline,#immudb-header .underline .dont-underline{text-decoration:none!important}",""]),e.exports=t},633:function(e,t,r){"use strict";var n=r(493);r.n(n).a},634:function(e,t,r){(t=r(2)(!1)).push([e.i,"#immudb-features-section{background-color:transparent;margin-top:-2rem;padding-top:0}#immudb-features-section .feature{padding:2rem 1rem;background:#fff;border:1px solid #dee2e6;border-bottom:2px solid #244484}",""]),e.exports=t},635:function(e,t,r){"use strict";var n=r(494);r.n(n).a},636:function(e,t,r){(t=r(2)(!1)).push([e.i,"#immudb-runs-on-section{background-color:#f8f9fa;overflow:hidden}#immudb-runs-on-section .story-card{margin-bottom:2rem;padding:1rem}#immudb-runs-on-section .story-card h5{margin:0}@media screen and (max-width:575px){#immudb-runs-on-section .story-card h5{font-size:1rem}}",""]),e.exports=t},637:function(e,t,r){"use strict";var n=r(495);r.n(n).a},638:function(e,t,r){(t=r(2)(!1)).push([e.i,".immudb #easy-setup-section{margin-top:-2rem;text-align:center}.immudb #easy-setup-section .container{max-width:980px}.immudb #easy-setup-section pre.language-bash{width:auto;display:inline-block;max-width:100%}.immudb #performance-section{background:#f8f9fa}.immudb #performance-section img{margin:1rem auto 0}.immudb #qldb-comparison-section{padding-top:5rem}.immudb #qldb-comparison-section .fa-bolt{color:#244484;font-size:64px;margin-bottom:2rem}.immudb #video-section{color:#fff;background-color:#244484;text-align:center;background-image:url(/images/immudb/corner-left-right-asymmetric-gray.png);background-size:100% auto;background-repeat:no-repeat;background-position:top}.immudb #video-section h2{margin-top:0;border-bottom:0;color:#fff}.immudb #video-section p{color:hsla(0,0%,100%,.8)}.immudb #video-section .video-features{display:flex;width:100%;margin-top:4rem}.immudb #video-section .video-features ul{width:33%;text-align:left;margin-left:2rem}.immudb #video-section .video-features ul li{display:flex;align-items:center;margin-bottom:.5rem}.immudb #video-section .video-features ul svg{margin-right:1rem}.immudb #video-section .video-features .video{padding:1rem;background:#fff;display:block;width:67%;box-sizing:border-box}@media screen and (max-width:979px){.immudb #video-section .video-features{flex-direction:column}.immudb #video-section .video-features .video,.immudb #video-section .video-features ul{width:100%;margin-left:0}.immudb #video-section .video-features ul{margin-top:2rem}}.immudb #code-examples-section svg{width:3rem;height:3rem;color:#244484}.immudb #code-examples-section img{width:4rem}.immudb #code-examples-section h2{margin-top:1rem}.immudb #code-examples-section .row{align-items:center;margin-bottom:5rem}.immudb #code-examples-section .row:last-child{margin-bottom:0}@media screen and (max-width:979px){.immudb #code-examples-section{text-align:center}.immudb #code-examples-section .inverse{flex-direction:column-reverse}.immudb #code-examples-section p,.immudb #code-examples-section ul{text-align:left}.immudb #code-examples-section .terminal-wrapper{margin-bottom:1rem}}.immudb #comingsoon-section{text-align:center}.immudb #comingsoon-section img{display:block;margin:0 auto}.immudb #comingsoon-section ul{display:inline-block;font-weight:700}@media screen and (max-width:767px){.immudb #comingsoon-section ul li._text-muted{display:none}}.immudb #usedby-section{padding-top:4rem;padding-bottom:2rem;justify-content:space-between;text-align:center}.immudb #usedby-section .column{display:flex;flex-wrap:wrap;justify-content:center}.immudb #usedby-section .column a{margin:1rem}.immudb #usedby-section img{margin:0 auto 2rem;display:block;opacity:.5;transition:opacity .3s ease;height:45px;width:auto}.immudb #usedby-section img:hover{opacity:.6}.immudb #code-tabs-section{background:#f8f9fa}.immudb #code-tabs-section .tabs{display:flex;flex-direction:row}.immudb #code-tabs-section .tabs .header{width:25%;margin-right:1rem;flex:1}.immudb #code-tabs-section .tabs .header .button-group{display:flex;flex-direction:column;border-radius:4px;overflow:hidden}.immudb #code-tabs-section .tabs .header .button-group .button{border-radius:0}.immudb #code-tabs-section .tabs .tab{width:75%}@media screen and (max-width:991px){.immudb #code-tabs-section .tabs{flex-direction:column}.immudb #code-tabs-section .tabs .header,.immudb #code-tabs-section .tabs .tab{width:100%}}.immudb #get-started-end-section{text-align:center}",""]),e.exports=t},692:function(e,t,r){"use strict";r.r(t);r(37);var n=r(9),o=r(522),c=r(542),l=r(543),meta=r(456),d={head:function(){return{title:Object(meta.a)("immudb")}},components:{ImmudbFeaturesSection:c.default,ImmudbHeader:o.default,ImmudbRunsOnSection:l.default},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,t.next=3,r("technologies/immudb/index").fetch();case 3:return n=t.sent,t.abrupt("return",{page:n});case 5:case"end":return t.stop()}}),t)})))()}},m=(r(637),r(0)),component=Object(m.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("article",{staticClass:"immudb"},[t("immudb-header"),this._v(" "),t("immudb-features-section"),this._v(" "),t("immudb-runs-on-section"),this._v(" "),t("nuxt-content",{attrs:{document:this.page}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ImmudbHeader:r(522).default,ImmudbFeaturesSection:r(542).default,ImmudbRunsOnSection:r(543).default})}}]);