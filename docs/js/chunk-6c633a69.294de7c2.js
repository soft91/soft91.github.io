(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c633a69"],{"20f6":function(t,e,i){},3131:function(t,e,i){t.exports=i.p+"img/Whateverpad.ca9c7db5.png"},4804:function(t,e,i){},"58d3":function(t,e,i){t.exports=i.p+"img/GitHub.76d344f0.svg"},5933:function(t,e,i){t.exports=i.p+"img/Vue.866cf350.png"},"86cc":function(t,e,i){},"8ce9":function(t,e,i){},"8d4f":function(t,e,i){},acca:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projects-wrapper"},[n("h1",[t._v("Projects")]),t._l(t.projectList,(function(e,s){return n("div",{key:s,staticClass:"card-container"},[n("v-card",{staticClass:"card-wrapper",attrs:{"max-width":"420"}},[n("v-img",{attrs:{src:e.imgPath,height:"300px"}}),n("v-card-title",[t._v(" "+t._s(e.title)+" ")]),n("v-card-subtitle",[t._v(" "+t._s(e.comment)+" ")]),n("v-card-actions",[n("a",{staticClass:"icon",attrs:{target:"_blank",href:e.gitURL}},[n("img",{staticClass:"iconImg",attrs:{src:i("58d3"),alt:"GitHub"}})]),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.toggleShow(s)}}},[n("v-icon",[t._v(t._s(e.isShowing?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowing,expression:"value.isShowing"}]},[n("v-divider"),n("v-card-text",[t._v(" "+t._s(e.content)+" ")])],1)])],1)],1)}))],2)},s=[],a=i("d4ec"),r=i("bee2"),o=i("262e"),c=i("2caf"),l=i("9ab4"),u=i("60a3"),h=function(t){Object(o["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.projectList=[{imgPath:i("3131"),title:"Whatever Pad",comment:"Electron + Vue.js로 구축한 NotePad",content:"Elctron + Vue.js + Vuex + Vuetify를 활용한 NotePad 구현",gitURL:"https://github.com/soft91/electron-vue-notepad",isShowing:!1},{imgPath:i("5933"),title:"Trello Clone by Vue.js",comment:"Vue.js를 이용한 Trello 클론 코딩",content:"Vue.js + Express + MySQL을 활용한 Trello Clone",gitURL:"https://github.com/soft91/vue-trello-clone",isShowing:!1},{imgPath:i("dfb8"),title:"Electron Build",comment:"일렉트론 빌드를 통한 앱 구동 테스트",content:".jar 파일로 빌드된 결과물을 실행시키는 기능을 구현함.",gitURL:"https://github.com/soft91/Electron-Study",isShowing:!1},{imgPath:i("f261"),title:"편의점 택배 요금 계산기",comment:"React Naive로 만든 택배 요금 계산기",content:"안드로이드 앱으로 출시했던 편의점 택배 요금 계산기 앱을 React Native로 재구현",gitURL:"https://github.com/soft91/ReactNative-Project",isShowing:!1}],t}return Object(r["a"])(n,[{key:"toggleShow",value:function(t){this.projectList[t].isShowing=!this.projectList[t].isShowing}}]),n}(u["b"]);h=Object(l["a"])([u["a"]],h);var d=h,v=d,f=(i("ea0d"),i("2877")),g=i("6544"),p=i.n(g),b=(i("4160"),i("caad"),i("c7cd"),i("53ca")),m=i("3835"),x=i("5530"),S=(i("86cc"),i("10d2")),C=(i("99af"),i("a9e3"),i("8d4f"),i("a9ad")),w=i("80d2"),j=C["a"].extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(w["d"])(this.calculatedSize),width:Object(w["d"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),y=j,O=i("ade3"),z=i("2b0e"),B=i("d9bd");function k(t,e){return function(){return Object(B["c"])("The ".concat(t," component must be used inside a ").concat(e))}}function L(t,e,i){var n=e&&i?{register:k(e,i),unregister:k(e,i)}:null;return z["default"].extend({name:"registrable-inject",inject:Object(O["a"])({},t,{default:n})})}function $(t,e,i){return L(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(O["a"])({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}$("itemGroup");function _(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return z["default"].extend({name:"toggleable",model:{prop:e,event:i},props:Object(O["a"])({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(O["a"])(t,e,(function(t){this.isActive=!!t})),Object(O["a"])(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(i,t)})),t)})}_();var V,P=i("fe6c"),N=i("1c87"),T=(i("c96a"),z["default"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})),D=i("58df"),E=Object(D["a"])(S["a"],N["a"],P["a"],T,$("btnToggle"),_("inputValue")),I=E.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(x["a"])(Object(x["a"])(Object(x["a"])(Object(x["a"])(Object(x["a"])({"v-btn":!0},N["a"].options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--contained":this.contained,"v-btn--depressed":this.depressed||this.outlined,"v-btn--disabled":this.disabled,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--flat":this.isFlat,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},contained:function(){return Boolean(!this.isFlat&&!this.depressed&&!this.elevation)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},isFlat:function(){return Boolean(this.icon||this.text||this.outlined)},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(x["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=Object(m["a"])(e,2),n=i[0],s=i[1];t.$attrs.hasOwnProperty(n)&&Object(B["a"])(n,s,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(y,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.isFlat?this.setTextColor:this.setBackgroundColor,n=this.generateRouteLink(),s=n.tag,a=n.data;return"button"===s&&(a.attrs.type=this.type,a.attrs.disabled=this.disabled),a.attrs.value=["string","number"].includes(Object(b["a"])(this.value))?this.value:JSON.stringify(this.value),t(s,this.disabled?a:i(this.color,a),e)}}),R=i("b0af"),F=i("99d9"),A=(i("8ce9"),i("7560")),W=A["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(x["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(x["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),M=i("0789"),U=(i("7db0"),i("c975"),i("fb6a"),i("45fc"),i("2532"),i("498a"),i("4804"),i("7e2b"));function q(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}function H(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(V||(V={}));var G=Object(D["a"])(U["a"],C["a"],T,A["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(w["n"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(w["k"])(t).find((function(e){return t[e]}));return e&&V[e]||Object(w["d"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(x["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(x["a"])(Object(x["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(x["a"])(Object(x["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var i=[],n=this.getDefaultData(),s="material-icons",a=t.indexOf("-"),r=a<=-1;r?i.push(t):(s=t.slice(0,a),q(s)&&(s="")),n.class[s]=!0,n.class[t]=!r;var o=this.getSize();return o&&(n.style={fontSize:o}),this.applyColors(n),e(this.hasClickListener?"button":this.tag,n,i)},renderSvgIcon:function(t,e){var i={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},n=this.getSize();return n&&(i.style={fontSize:n,height:n,width:n}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",i,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var i={class:{"v-icon__component":!0}},n=this.getSize();n&&(i.style={fontSize:n,height:n,width:n}),this.applyColors(i);var s=t.component;return i.props=t.props,i.nativeOn=i.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(s,i)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?H(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}}),J=z["default"].extend({name:"v-icon",$_wrapperFor:G,functional:!0,render:function(t,e){var i=e.data,n=e.children,s="";return i.domProps&&(s=i.domProps.textContent||i.domProps.innerHTML||s,delete i.domProps.textContent,delete i.domProps.innerHTML),t(G,i,s?[s]:n)}}),Q=i("adda"),K=(i("20f6"),Object(w["e"])("spacer","div","v-spacer")),X=Object(f["a"])(v,n,s,!1,null,"fdac84dc",null);e["default"]=X.exports;p()(X,{VBtn:I,VCard:R["a"],VCardActions:F["a"],VCardSubtitle:F["b"],VCardText:F["c"],VCardTitle:F["d"],VDivider:W,VExpandTransition:M["a"],VIcon:J,VImg:Q["a"],VSpacer:K})},bbbc:function(t,e,i){},c96a:function(t,e,i){"use strict";var n=i("23e7"),s=i("857a"),a=i("af03");n({target:"String",proto:!0,forced:a("small")},{small:function(){return s(this,"small","","")}})},dfb8:function(t,e,i){t.exports=i.p+"img/Electron.6c49c5aa.png"},ea0d:function(t,e,i){"use strict";i("bbbc")},f261:function(t,e,i){t.exports=i.p+"img/Post.5b3f1a87.png"}}]);
//# sourceMappingURL=chunk-6c633a69.294de7c2.js.map