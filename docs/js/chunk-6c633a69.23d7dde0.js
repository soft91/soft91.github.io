(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c633a69"],{"20f6":function(t,e,i){},3131:function(t,e,i){t.exports=i.p+"img/Whateverpad.ca9c7db5.png"},4804:function(t,e,i){},"58d3":function(t,e,i){t.exports=i.p+"img/GitHub.76d344f0.svg"},5933:function(t,e,i){t.exports=i.p+"img/Vue.866cf350.png"},"86cc":function(t,e,i){},"8ce9":function(t,e,i){},"8d4f":function(t,e,i){},acca:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"projects-wrapper"},[s("h1",[t._v("Projects")]),t._l(t.projectList,(function(e,n){return s("div",{key:n,staticClass:"card-container"},[s("v-card",{staticClass:"card-wrapper",attrs:{"max-width":"420"}},[s("v-img",{attrs:{src:e.imgPath,height:"300px"}}),s("v-card-title",[t._v(" "+t._s(e.title)+" ")]),s("v-card-subtitle",[t._v(" "+t._s(e.comment)+" ")]),s("v-card-actions",[s("a",{staticClass:"icon",attrs:{target:"_blank",href:e.gitURL}},[s("img",{staticClass:"iconImg",attrs:{src:i("58d3"),alt:"GitHub"}})]),s("v-spacer"),s("v-btn",{attrs:{icon:""},on:{click:function(e){return t.toggleShow(n)}}},[s("v-icon",[t._v(t._s(e.isShowing?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),s("v-expand-transition",[s("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowing,expression:"value.isShowing"}]},[s("v-divider"),s("v-card-text",[t._v(" "+t._s(e.content)+" ")])],1)])],1)],1)}))],2)},n=[],a=i("d4ec"),r=i("bee2"),o=i("262e"),c=i("2caf"),l=i("9ab4"),u=i("60a3"),h=function(t){Object(o["a"])(s,t);var e=Object(c["a"])(s);function s(){var t;return Object(a["a"])(this,s),t=e.apply(this,arguments),t.projectList=[{imgPath:i("3131"),title:"Whatever Pad",comment:"Electron + Vue.js로 구축한 NotePad",content:"Elctron + Vue.js + Vuex + Vuetify를 활용한 NotePad 구현",gitURL:"https://github.com/soft91/electron-vue-notepad",isShowing:!1},{imgPath:i("5933"),title:"Trello Clone by Vue.js",comment:"Vue.js를 이용한 Trello 클론 코딩",content:"Vue.js + Express + MySQL을 활용한 Trello Clone",gitURL:"https://github.com/soft91/vue-trello-clone",isShowing:!1},{imgPath:i("dfb8"),title:"Electron Build",comment:"일렉트론 빌드를 통한 앱 구동 테스트",content:".jar 파일로 빌드된 결과물을 실행시키는 기능을 구현함.",gitURL:"https://github.com/soft91/Electron-Study",isShowing:!1},{imgPath:i("f261"),title:"편의점 택배 요금 계산기",comment:"React Naive로 만든 택배 요금 계산기",content:"안드로이드 앱으로 출시했던 편의점 택배 요금 계산기 앱을 React Native로 재구현",gitURL:"https://github.com/soft91/ReactNative-Project",isShowing:!1}],t}return Object(r["a"])(s,[{key:"toggleShow",value:function(t){this.projectList[t].isShowing=!this.projectList[t].isShowing}}]),s}(u["b"]);h=Object(l["a"])([u["a"]],h);var d=h,v=d,f=(i("ea0d"),i("2877")),g=i("6544"),p=i.n(g),b=i("53ca"),m=i("3835"),x=i("5530"),S=(i("c7cd"),i("a9e3"),i("caad"),i("86cc"),i("10d2")),C=(i("99af"),i("8d4f"),i("90a2")),w=i("a9ad"),j=i("80d2"),y=w["a"].extend({name:"v-progress-circular",directives:{intersect:C["a"]},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20,isVisible:!0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(j["d"])(this.calculatedSize),width:Object(j["d"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve:function(t,e,i){this.isVisible=i}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),O=y,B=i("ade3"),z=i("2b0e"),k=i("d9bd");function L(t,e){return function(){return Object(k["c"])("The ".concat(t," component must be used inside a ").concat(e))}}function $(t,e,i){var s=e&&i?{register:L(e,i),unregister:L(e,i)}:null;return z["default"].extend({name:"registrable-inject",inject:Object(B["a"])({},t,{default:s})})}function V(t,e,i){return $(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(B["a"])({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}V("itemGroup");function _(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return z["default"].extend({name:"toggleable",model:{prop:e,event:i},props:Object(B["a"])({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(B["a"])(t,e,(function(t){this.isActive=!!t})),Object(B["a"])(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(i,t)})),t)})}_();var E,P=i("c995"),N=i("fe6c"),T=i("1c87"),D=(i("c96a"),z["default"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})),I=i("58df"),R=Object(I["a"])(S["a"],T["a"],N["a"],D,V("btnToggle"),_("inputValue")),A=R.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(x["a"])(Object(x["a"])(Object(x["a"])(Object(x["a"])(Object(x["a"])({"v-btn":!0},T["a"].options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},computedElevation:function(){if(!this.disabled)return P["a"].options.computed.computedElevation.call(this)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg:function(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated:function(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(x["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=Object(m["a"])(e,2),s=i[0],n=i[1];t.$attrs.hasOwnProperty(s)&&Object(k["a"])(s,n,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(O,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.generateRouteLink(),s=i.tag,n=i.data,a=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===s&&(n.attrs.type=this.type,n.attrs.disabled=this.disabled),n.attrs.value=["string","number"].includes(Object(b["a"])(this.value))?this.value:JSON.stringify(this.value),t(s,this.disabled?n:a(this.color,n),e)}}),W=i("b0af"),F=i("99d9"),M=(i("8ce9"),i("7560")),U=M["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(x["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(x["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),q=i("0789"),H=(i("2532"),i("498a"),i("7db0"),i("fb6a"),i("4804"),i("7e2b"));function G(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function J(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(E||(E={}));var Q=Object(I["a"])(H["a"],w["a"],D,M["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(j["n"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(j["k"])(t).find((function(e){return t[e]}));return e&&E[e]||Object(j["d"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(x["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(x["a"])(Object(x["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(x["a"])(Object(x["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var i=[],s=this.getDefaultData(),n="material-icons",a=t.indexOf("-"),r=a<=-1;r?i.push(t):(n=t.slice(0,a),G(n)&&(n="")),s.class[n]=!0,s.class[t]=!r;var o=this.getSize();return o&&(s.style={fontSize:o}),this.applyColors(s),e(this.hasClickListener?"button":this.tag,s,i)},renderSvgIcon:function(t,e){var i={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},s=this.getSize();return s&&(i.style={fontSize:s,height:s,width:s}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",i,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var i={class:{"v-icon__component":!0}},s=this.getSize();s&&(i.style={fontSize:s,height:s,width:s}),this.applyColors(i);var n=t.component;return i.props=t.props,i.nativeOn=i.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(n,i)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?J(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}}),K=z["default"].extend({name:"v-icon",$_wrapperFor:Q,functional:!0,render:function(t,e){var i=e.data,s=e.children,n="";return i.domProps&&(n=i.domProps.textContent||i.domProps.innerHTML||n,delete i.domProps.textContent,delete i.domProps.innerHTML),t(Q,i,n?[n]:s)}}),X=i("adda"),Y=(i("20f6"),Object(j["e"])("spacer","div","v-spacer")),Z=Object(f["a"])(v,s,n,!1,null,"fdac84dc",null);e["default"]=Z.exports;p()(Z,{VBtn:A,VCard:W["a"],VCardActions:F["a"],VCardSubtitle:F["b"],VCardText:F["c"],VCardTitle:F["d"],VDivider:U,VExpandTransition:q["a"],VIcon:K,VImg:X["a"],VSpacer:Y})},bbbc:function(t,e,i){},c96a:function(t,e,i){"use strict";var s=i("23e7"),n=i("857a"),a=i("af03");s({target:"String",proto:!0,forced:a("small")},{small:function(){return n(this,"small","","")}})},dfb8:function(t,e,i){t.exports=i.p+"img/Electron.6c49c5aa.png"},ea0d:function(t,e,i){"use strict";i("bbbc")},f261:function(t,e,i){t.exports=i.p+"img/Post.5b3f1a87.png"}}]);
//# sourceMappingURL=chunk-6c633a69.23d7dde0.js.map