(function(t){function e(e){for(var r,i,s=e[0],u=e[1],c=e[2],l=0,h=[];l<s.length;l++)i=s[l],a[i]&&h.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3445ddba"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(t),o=function(e){u.onerror=u.onload=null,clearTimeout(c);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[t]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:u})},12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("1356"),a=n.n(r);a.a},1356:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("bb71");n("da64"),n("15f5");r["a"].use(a["a"],{iconfont:"fa"});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Home")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("PriceDisplay",{attrs:{price:t.price}}),n("v-content",[n("ParameterInput",{attrs:{quote:t.quote},on:{"fetch-quote":t.fetchQuote}})],1),n("v-footer",{attrs:{fixed:"",dark:"",height:"48"}},[n("Footer")],1)],1)},u=[],c=n("bc3a"),l=n.n(c),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{color:"primary",dark:"",fixed:"",app:""}},[n("v-toolbar-title",[t._v("Provisional Quote:"),n("br"),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("div",{key:t.price.amount},[t._v("\n        "+t._s(t.price.amount)+" "+t._s(t.price.currency)+"\n      ")])])],1)],1)},h=[],p={name:"PriceDisplay",props:["price"]},d=p,m=(n("be1f"),n("2877")),b=n("6544"),v=n.n(b),g=n("71d9"),w=n("2a7f"),y=Object(m["a"])(d,f,h,!1,null,"35de356b",null),_=y.exports;v()(y,{VToolbar:g["a"],VToolbarTitle:w["a"]});var x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm6:""}},[n("v-card",[n("v-card-text",[n("v-select",{attrs:{items:t.types,label:"Type"},on:{change:t.fetchPrice},model:{value:t.quote.type,callback:function(e){t.$set(t.quote,"type",e)},expression:"quote.type"}}),n("v-slider",{attrs:{hint:"Maximum Allowed Weight (kg)","persistent-hint":"","tick-labels":t.weights,max:t.weights.length-1,ticks:"always","always-dirty":"","thumb-label":"","thumb-size":"32"},on:{change:t.fetchPrice},scopedSlots:t._u([{key:"thumb-label",fn:function(e){return[n("span",[t._v("\n              "+t._s(t.weight_from_index(e.value))+"\n            ")])]}}]),model:{value:t.selected_weight,callback:function(e){t.selected_weight=e},expression:"selected_weight"}}),n("v-slider",{attrs:{hint:"Number of Axles","persistent-hint":"",step:"1",min:"1",max:"3","tick-labels":[1,2,3],ticks:"always","always-dirty":"","thumb-label":"","thumb-size":"32"},on:{change:t.fetchPrice},model:{value:t.quote.axles,callback:function(e){t.$set(t.quote,"axles",e)},expression:"quote.axles"}}),n("v-slider",{attrs:{label:t.quote.length.toString(),hint:"Length (cm)","persistent-hint":"","inverse-label":"",step:"10",min:"250",max:"500",ticks:"always","always-dirty":"","thumb-label":"","thumb-size":"32"},on:{change:t.fetchPrice},model:{value:t.quote.length,callback:function(e){t.$set(t.quote,"length",e)},expression:"quote.length"}}),n("v-slider",{attrs:{label:t.quote.width.toString(),hint:"Width (cm)","persistent-hint":"","inverse-label":"",step:"10",min:"130",max:"250",ticks:"always","always-dirty":"","thumb-label":"","thumb-size":"32"},on:{change:t.fetchPrice},model:{value:t.quote.width,callback:function(e){t.$set(t.quote,"width",e)},expression:"quote.width"}})],1)],1)],1)],1)},q=[],P={name:"ParameterInput",props:["quote"],data:function(){return{types:["STANDARD BED","FLATBED","TIPPER","CLOSED - HARD TOP","CLOSED - SOFT TOP","CAR TRANSPORTER","MACHINE TRANSPORTER","MOTORCYCLE TRANSPORTER","SPECIAL"],weights:[750,1350,2e3,2700,3e3,3500]}},computed:{selected_weight:{get:function(){return this.index_from_weight(this.quote.maw)},set:function(t){this.quote.maw=this.weight_from_index(t)}}},methods:{weight_from_index:function(t){return this.weights[t]},index_from_weight:function(t){return this.weights.indexOf(t)},fetchPrice:function(){var t={type:this.quote.type,maw:this.quote.maw,axles:this.quote.axles,length:this.quote.length,width:this.quote.width};this.$emit("fetch-quote",t)}}},k=P,O=n("b0af"),T=n("99d9"),E=n("0e8f"),S=n("a722"),A=n("b56d"),j=n("ba0d"),C=Object(m["a"])(k,x,q,!1,null,null,null),R=C.exports;v()(C,{VCard:O["a"],VCardText:T["a"],VFlex:E["a"],VLayout:S["a"],VSelect:A["a"],VSlider:j["a"]});var D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"spread"},[n("span",[n("a",{attrs:{href:"https://www.linkedin.com/in/bartfransen/",target:"_blank"}},[n("v-icon",{attrs:{small:""}},[t._v("fab fa-linkedin")])],1)]),n("span",[n("a",{attrs:{href:"https://twitter.com/TechieB",target:"_blank"}},[n("v-icon",{attrs:{small:""}},[t._v("fab fa-twitter")])],1)]),n("span",[n("a",{attrs:{href:"https://github.com/bartfransen",target:"_blank"}},[n("v-icon",{attrs:{small:""}},[t._v("fab fa-github")])],1)])])])},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spread"},[n("span",[t._v("© 2019 - Bart Fransen")])])}],$=(n("760c"),n("132d")),L={},F=Object(m["a"])(L,D,V,!1,null,null,null),I=F.exports;v()(F,{VIcon:$["a"]});var M={components:{PriceDisplay:_,ParameterInput:R,Footer:I},data:function(){return{quote:{type:"STANDARD BED",maw:2700,axles:2,width:200,length:400},price:{amount:0,currency:"CAD"}}},methods:{fetchQuote:function(t){var e=this,n={quote_parameters:t};l.a.post("https://capstone.bartfransen.com/api/predict",n).then(function(t){return e.price=t.data["price"]}).catch(function(t){return console.log(t)})}},created:function(){this.fetchQuote(this.quote)}},N=M,B=n("a523"),z=n("549c"),H=n("553a"),Q=Object(m["a"])(N,s,u,!1,null,null,null),J=Q.exports;v()(Q,{VContainer:B["a"],VContent:z["a"],VFooter:H["a"]});var W={name:"App",components:{Home:J},data:function(){return{}}},Y=W,G=(n("034f"),n("7496")),K=Object(m["a"])(Y,o,i,!1,null,null,null),U=K.exports;v()(K,{VApp:G["a"]});var X=n("8c4f");r["a"].use(X["a"]);var Z=new X["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:J},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});r["a"].config.productionTip=!1,new r["a"]({router:Z,render:function(t){return t(U)}}).$mount("#app")},"760c":function(t,e,n){"use strict";var r=n("93ff"),a=n.n(r);a.a},"93ff":function(t,e,n){},ad58:function(t,e,n){},be1f:function(t,e,n){"use strict";var r=n("ad58"),a=n.n(r);a.a}});
//# sourceMappingURL=app.85c771fe.js.map