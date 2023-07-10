(function(){"use strict";var t={3556:function(t,e,a){var n=a(9963),o=a(6252);const r=(0,o._)("link",{rel:"icon",href:"/public/favicon.ico",type:"image/x-icon"},null,-1),i={id:"nav"},d=(0,o._)("hr",null,null,-1);function s(t,e,a,n,s,l){const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("header",null,[r,(0,o._)("div",i,[(0,o.Wm)(c,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("OK Board")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(c,{to:"/login"},{default:(0,o.w5)((()=>[(0,o.Uk)("Login")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(c,{to:"/signUp"},{default:(0,o.w5)((()=>[(0,o.Uk)("Sign Up")])),_:1})])]),d],64)}var l={name:"Header"},c=a(3744);const u=(0,c.Z)(l,[["render",s]]);var p=u,m=a(8363),v=a(2234),f=a(9289),g={__name:"App",setup(t){return(t,e)=>{const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(v.s,{class:"rounded rounded-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(m.L,{title:"OK Board"},{default:(0,o.w5)((()=>[(0,o.Wm)(p)])),_:1}),(0,o.Wm)(f.O,{class:"d-flex align-center justify-center",style:{"min-height":"300px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(a)])),_:1})])),_:1})}}};const _=g;var b=_,h=a(2119),w=a(2535),y=a(9357),k=a(3881),j=a(1446);function C(t,e,a,r,i,d){return(0,o.wg)(),(0,o.j4)(k.C,{width:"300",class:"mx-auto"},{default:(0,o.w5)((()=>[(0,o.Wm)(y.O,{"fast-fail":"",onSubmit:e[3]||(e[3]=(0,n.iM)((()=>{}),["prevent"]))},{default:(0,o.w5)((()=>[(0,o.Wm)(j.h,{modelValue:r.state.form.email,"onUpdate:modelValue":e[0]||(e[0]=t=>r.state.form.email=t),label:"e-mail"},null,8,["modelValue"]),(0,o.Wm)(j.h,{modelValue:r.state.form.password,"onUpdate:modelValue":e[1]||(e[1]=t=>r.state.form.password=t),label:"password"},null,8,["modelValue"]),(0,o.Wm)(w.T,{block:"",class:"mt-2",onClick:e[2]||(e[2]=t=>r.submit())},{default:(0,o.w5)((()=>[(0,o.Uk)("Login")])),_:1})])),_:1})])),_:1})}var x=a(2262),O=a(9669),L=a.n(O),U={setup(){const t=(0,x.qj)({form:{email:"",password:""}}),e=()=>{L().post("/sign-api/sign-in",t.form).then((t=>{console.log(t),alert("로그인 하였습니다.")}))};return{state:t,submit:e}}};const H=(0,c.Z)(U,[["render",C]]);var V=H;const W={class:"signUp"},M=(0,o._)("h1",null,"회원가입 페이지입니다.",-1),F=[M];function T(t,e,a,n,r,i){return(0,o.wg)(),(0,o.iD)("div",W,F)}var Z={name:"SignUp"};const D=(0,c.Z)(Z,[["render",T]]);var S=D;function q(t,e,a,n,r,i){const d=(0,o.up)("Card");return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.state.posts,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"col",key:e},[(0,o.Wm)(d,{item:t},null,8,["item"])])))),128)}var B=a(3577);const P={"data-cy":"job-card",class:"Card_className__u5rsb card"},A={href:"/wd/169153",class:"","aria-label":"position link","data-attribute-id":"position__click","data-job-category-id":"510","data-job-category":"Customer Service","data-company-id":"42933","data-company-name":"에스에스트리","data-position-id":"169153","data-position-name":"아웃바운드 TM","data-response-level":"very_high","data-response-rate":"100","data-ai-score":"","data-ai-score-status":"","data-recommend-model-status":"notBase","data-is-recommended":"false","data-recommend-model-index":"0"},R=(0,o.uE)('<header style="background-image:url(&quot;https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F42933%2Fvgpgwzqtp5pnopfi__400_400.jpg&amp;w=400&amp;q=75&quot;);" data-v-e07115de><button class="bookmarkBtn" type="button" aria-label="bookmark button" data-attribute-id="position__bookmark__click" data-job-category-id="510" data-job-category="Customer Service" data-company-id="42933" data-company-name="에스에스트리" data-position-id="169153" data-position-name="아웃바운드 TM" data-kind="add" data-v-e07115de><svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="https://www.w3.org/2000/svg" data-v-e07115de><path fill-rule="evenodd" clip-rule="evenodd" d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z" fill="white" data-v-e07115de></path><path d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z" fill="black" fill-opacity="0.25" data-v-e07115de></path></svg></button></header>',1),z={class:"body"},E={class:"job-card-position"},K=(0,o.uE)('<div class="job-card-company-name" data-v-e07115de>에스에스트리</div><div class="Tooltip_container__AvBvM" data-v-e07115de><button class="Tooltip_label__P9FMp" type="button" data-v-e07115de><div class="ResponseLevelLabel_container__dJphx ResponseLevelLabel_veryHigh__3ArDP" data-v-e07115de><span data-v-e07115de>응답률 매우 높음</span></div><div class="Tooltip_tooltipContent__6exdr" data-v-e07115de>지원 후 응답받을 확률이 95% 이상입니다.</div></button></div><div class="job-card-company-location" data-v-e07115de>서울<span class="addressDot" data-v-e07115de>.</span><span data-v-e07115de>한국</span></div><div class="reward" data-v-e07115de>채용보상금 100만원</div><div class="Card_badge__cxAr8" data-v-e07115de></div>',5);function Y(t,e,a,n,r,i){return(0,o.wg)(),(0,o.iD)("div",P,[(0,o._)("a",A,[R,(0,o._)("div",z,[(0,o._)("div",E,(0,B.zw)(a.post),1),K])])])}var I={name:"Card",props:{post:String}};const J=(0,c.Z)(I,[["render",Y],["__scopeId","data-v-e07115de"]]);var N=J,G={name:"Home",components:{Card:N},setup(){const t=(0,x.qj)({posts:[]});return L().get("/api/posts").then((e=>{t.posts=e.data})),{state:t}}};const Q=(0,c.Z)(G,[["render",q]]);var X=Q;const $=(0,h.p7)({history:(0,h.PO)("/"),routes:[{path:"/",name:"Home",component:X},{path:"/login",name:"LoginPage",component:V},{path:"/signUp",name:"SignUp",component:S}]});var tt=$,et=(a(9773),a(4047)),at=(0,et.Rd)();a(8556);const nt=L().create({baseURL:"http://api.example.com",timeout:5e3});(0,n.ri)(b).use(tt).use(at).provide("axios",nt).mount("#app")}},e={};function a(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,n,o,r){if(!n){var i=1/0;for(c=0;c<t.length;c++){n=t[c][0],o=t[c][1],r=t[c][2];for(var d=!0,s=0;s<n.length;s++)(!1&r||i>=r)&&Object.keys(a.O).every((function(t){return a.O[t](n[s])}))?n.splice(s--,1):(d=!1,r<i&&(i=r));if(d){t.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,o,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,r,i=n[0],d=n[1],s=n[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in d)a.o(d,o)&&(a.m[o]=d[o]);if(s)var c=s(a)}for(e&&e(n);l<i.length;l++)r=i[l],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(c)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(3556)}));n=a.O(n)})();
//# sourceMappingURL=app.b096f3c9.js.map