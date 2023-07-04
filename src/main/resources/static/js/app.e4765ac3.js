(function(){"use strict";var t={403:function(t,e,n){var o=n(963),r=n(252);const i={id:"app"};function u(t,e,n,o,u,a){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("nav",null,[(0,r.Wm)(s,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("OK Board")])),_:1}),(0,r.Wm)(s,{to:"/login"},{default:(0,r.w5)((()=>[(0,r.Uk)("Log in")])),_:1}),(0,r.Wm)(s,{to:"/signUp"},{default:(0,r.w5)((()=>[(0,r.Uk)("Sign Up")])),_:1})])])}var a={name:"App",data:()=>({})},s=n(744);const f=(0,s.Z)(a,[["render",u]]);var c=f,l=n(201);const d={class:"login"},h=(0,r._)("img",{alt:"Vue logo",src:"../assets/logo.png"},null,-1);function m(t,e,n,o,i,u){const a=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.iD)("div",d,[h,(0,r.Wm)(a,{msg:"Welcome to Your Vue.js App"})])}var p=n(577),g=n(669),v=n(3),b=n(379),y=n(194);const w=(0,r._)("h1",{class:"display-2 font-weight-bold mb-3"}," Welcome to the Vuetify 3 Beta ",-1),_=(0,r._)("p",{class:"subheading font-weight-regular"},[(0,r.Uk)(" For help and collaboration with other Vuetify developers, "),(0,r._)("br"),(0,r.Uk)("please join our online "),(0,r._)("a",{href:"https://community.vuetifyjs.com",target:"_blank"},"Discord Community")],-1),j=(0,r._)("h2",{class:"headline font-weight-bold mb-5"}," What's next? ",-1),k=["href"],x=(0,r._)("h2",{class:"headline font-weight-bold mb-5"}," Important Links ",-1),O=["href"],W=(0,r._)("h2",{class:"headline font-weight-bold mb-5"}," Ecosystem ",-1),D=["href"];function P(t,e,o,i,u,a){return(0,r.wg)(),(0,r.j4)(g.K,null,{default:(0,r.w5)((()=>[(0,r.Wm)(v.o,{class:"text-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(b.D,{cols:"12"},{default:(0,r.w5)((()=>[(0,r.Wm)(y.f,{src:n(574),class:"my-3",contain:"",height:"200"},null,8,["src"])])),_:1}),(0,r.Wm)(b.D,{class:"mb-4"},{default:(0,r.w5)((()=>[w,_])),_:1}),(0,r.Wm)(b.D,{class:"mb-5",cols:"12"},{default:(0,r.w5)((()=>[j,(0,r.Wm)(v.o,{justify:"center"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.whatsNext,((t,e)=>((0,r.wg)(),(0,r.iD)("a",{key:e,href:t.href,class:"subheading mx-3",target:"_blank"},(0,p.zw)(t.text),9,k)))),128))])),_:1})])),_:1}),(0,r.Wm)(b.D,{class:"mb-5",cols:"12"},{default:(0,r.w5)((()=>[x,(0,r.Wm)(v.o,{justify:"center"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.importantLinks,((t,e)=>((0,r.wg)(),(0,r.iD)("a",{key:e,href:t.href,class:"subheading mx-3",target:"_blank"},(0,p.zw)(t.text),9,O)))),128))])),_:1})])),_:1}),(0,r.Wm)(b.D,{class:"mb-5",cols:"12"},{default:(0,r.w5)((()=>[W,(0,r.Wm)(v.o,{justify:"center"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.ecosystem,((t,e)=>((0,r.wg)(),(0,r.iD)("a",{key:e,href:t.href,class:"subheading mx-3",target:"_blank"},(0,p.zw)(t.text),9,D)))),128))])),_:1})])),_:1})])),_:1})])),_:1})}var U={name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader/tree/next"},{text:"github",href:"https://github.com/vuetifyjs/vuetify/tree/next"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com"},{text:"Roadmap",href:"https://vuetifyjs.com/introduction/roadmap/"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})};const E=(0,s.Z)(U,[["render",P]]);var A=E,C={name:"LoginPage",components:{HelloWorld:A}};const L=(0,s.Z)(C,[["render",m]]);var T=L;const S={class:"signUp"},H=(0,r._)("h1",null,"회원가입 페이지입니다.",-1),N=[H];function K(t,e){return(0,r.wg)(),(0,r.iD)("div",S,N)}const V={},q=(0,s.Z)(V,[["render",K]]);var F=q;const M=[{path:"/login",name:"LoginPage",component:T},{path:"/singUp",name:"SignUp",component:F},{}],Y=(0,l.p7)({history:(0,l.PO)("/"),routes:M});var Z=Y,z=(n(773),n(372)),B=(0,z.Rd)();async function R(){const t=await n.e(461).then(n.t.bind(n,933,23));t.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}R(),(0,o.ri)(c).use(Z).use(B).mount("#app")},574:function(t,e,n){t.exports=n.p+"img/logo.63028820.svg"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var u=1/0;for(c=0;c<t.length;c++){o=t[c][0],r=t[c][1],i=t[c][2];for(var a=!0,s=0;s<o.length;s++)(!1&i||u>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[s])}))?o.splice(s--,1):(a=!1,i<u&&(u=i));if(a){t.splice(c--,1);var f=r();void 0!==f&&(e=f)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[o,r,i]}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};n.t=function(o,r){if(1&r&&(o=this(o)),8&r)return o;if("object"===typeof o&&o){if(4&r&&o.__esModule)return o;if(16&r&&"function"===typeof o.then)return o}var i=Object.create(null);n.r(i);var u={};t=t||[null,e({}),e([]),e(e)];for(var a=2&r&&o;"object"==typeof a&&!~t.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach((function(t){u[t]=function(){return o[t]}}));return u["default"]=function(){return o},n.d(i,u),i}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/webfontloader.6445e084.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="frontend:";n.l=function(o,r,i,u){if(t[o])t[o].push(r);else{var a,s;if(void 0!==i)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var l=f[c];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==e+i){a=l;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+i),a.src=o),t[o]=[r];var d=function(e,n){a.onerror=a.onload=null,clearTimeout(h);var r=t[o];if(delete t[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=i);var u=n.p+n.u(e),a=new Error,s=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}};n.l(u,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,u=o[0],a=o[1],s=o[2],f=0;if(u.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(s)var c=s(n)}for(e&&e(o);f<u.length;f++)i=u[f],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(403)}));o=n.O(o)})();
//# sourceMappingURL=app.e4765ac3.js.map