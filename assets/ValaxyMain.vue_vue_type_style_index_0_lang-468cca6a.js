import{f as b,k as K,l as ot,o as d,h as f,F as Ct,i as ae,j as c,a as i,t as I,c as $,m as p,q as z,_ as Et,s as re,v as A,x as ce,y as ie,z as It,A as le,d as g,B as de,C as ue,D as $t,E as _e,r as u,G as fe,H as pe,I as vt,J as mt,w as C,K as ve,L as me,M as st,N as he,O as ge,b as ye,P as D,Q as be,R as Lt,S as ke,T as St,U as we,V as Ce,W as Ee,X as Ie,Y as $e,Z as Le,$ as W,a0 as Se,a1 as tt,a2 as Ae,a3 as Oe,u as xe,a4 as Te,a5 as Ve,a6 as Ne,n as De}from"./app-6a86aef5.js";import{_ as ze}from"./YunFooter.vue_vue_type_script_setup_true_lang-3a7c72f4.js";import{_ as At}from"./YunCard.vue_vue_type_script_setup_true_lang-916c5431.js";import{_ as Re}from"./YunPageHeader.vue_vue_type_script_setup_true_lang-280989ca.js";import{s as ht}from"./index-463abdac.js";const Me=["lang"],Ye=["href"],Pe=b({__name:"YunOutlineItem",props:{headers:{},onClick:{type:Function},root:{type:Boolean}},setup(t){const{locale:e}=K();return(o,s)=>{const n=ot("YunOutlineItem",!0);return d(),f("ul",{class:z(o.root?"root":"nested")},[(d(!0),f(Ct,null,ae(o.headers,({children:a,link:l,title:_,lang:v})=>(d(),f("li",{key:l,class:"va-toc-item",lang:v||c(e)},[i("a",{class:"outline-link",href:l,onClick:s[0]||(s[0]=(...w)=>o.onClick&&o.onClick(...w))},I(_),9,Ye),a!=null&&a.length?(d(),$(n,{key:0,headers:a,"on-click":o.onClick},null,8,["headers","on-click"])):p("v-if",!0)],8,Me))),128))],2)}}});const He=Et(Pe,[["__scopeId","data-v-699db71a"]]),Be=t=>(de("data-v-75b693dc"),t=t(),ue(),t),Fe={class:"content"},Ue={class:"outline-title"},We={"aria-labelledby":"doc-outline-aria-label"},Ge=Be(()=>i("span",{id:"doc-outline-aria-label",class:"visually-hidden"}," Table of Contents for current page ",-1)),Ke=b({__name:"YunOutline",setup(t){const e=re(),o=A(),s=A();ce(o,s);const{headers:n,handleClick:a}=ie();return(l,_)=>{const v=He;return It((d(),f("div",{ref_key:"container",ref:o},[i("div",Fe,[i("div",Ue,I(c(e).outlineTitle||"On this page"),1),i("div",{ref_key:"marker",ref:s,class:"outline-marker"},null,512),i("nav",We,[Ge,g(v,{class:"va-toc relative z-1 css-i18n-toc",headers:c(n),"on-click":c(a),root:""},null,8,["headers","on-click"])])])],512)),[[le,c(n).length]])}}});const qe=Et(Ke,[["__scopeId","data-v-75b693dc"]]),je=i("div",{"i-ri-file-list-line":""},null,-1),Je=[je],Ze={class:"aside-container",flex:"~ col"},Qe={key:0,m:"t-6 b-2",font:"serif black"},Xe=i("div",{class:"flex-grow"},null,-1),to={key:2,class:"custom-container"},eo=b({__name:"YunAside",setup(t){const e=$t(),{t:o}=K(),s=_e();return(n,a)=>{const l=fe,_=qe;return d(),f(Ct,null,[i("button",{class:"xl:hidden toc-btn shadow fixed yun-icon-btn z-350",opacity:"75",right:"2",bottom:"19",onClick:a[0]||(a[0]=v=>c(s).toggleRightSidebar())},Je),g(l,{show:c(s).isRightSidebarOpen,onClick:a[1]||(a[1]=v=>c(s).toggleRightSidebar())},null,8,["show"]),p("  "),i("aside",{class:z(["va-card yun-aside",c(s).isRightSidebarOpen&&"open"]),m:"l-4",text:"center",overflow:"auto"},[i("div",Ze,[c(e).toc!==!1?(d(),f("h2",Qe,I(c(o)("sidebar.toc")),1)):p("v-if",!0),c(e).toc!==!1?(d(),$(_,{key:1})):p("v-if",!0),Xe,n.$slots.default?(d(),f("div",to,[u(n.$slots,"default")])):p("v-if",!0)])],2)],64)}}});const oo=b({__name:"YunComment",setup(t){const e=pe(),o=e.value.addons["valaxy-addon-waline"]?vt(()=>mt(()=>import("./YunWaline-a0e18023.js"),["assets/YunWaline-a0e18023.js","assets/app-6a86aef5.js","assets/index-1b781297.css"])):()=>null,s=e.value.addons["valaxy-addon-twikoo"]?vt(()=>mt(()=>import("./YunTwikoo-c51e21ff.js"),["assets/YunTwikoo-c51e21ff.js","assets/app-6a86aef5.js","assets/index-1b781297.css"])):()=>null;return(n,a)=>{const l=ot("ClientOnly"),_=At;return d(),$(_,{w:"full",p:"4",class:"comment sm:p-6 lg:px-12 xl:px-16"},{default:C(()=>[g(l,null,{default:C(()=>[g(c(o)),g(c(s))]),_:1})]),_:1})}}});const so={class:"post-nav"},no={class:"post-nav-item"},ao=i("div",{class:"icon","i-ri-arrow-left-s-line":""},null,-1),ro={class:"title truncate",text:"sm"},co={class:"post-nav-item"},io={class:"title truncate",text:"sm"},lo=i("div",{class:"icon","i-ri-arrow-right-s-line":""},null,-1),uo=b({__name:"YunPostNav",setup(t){const[e,o]=ve();return(s,n)=>{const a=ot("router-link");return d(),f("div",so,[i("div",no,[c(e)?(d(),$(a,{key:0,class:"post-nav-prev",to:c(e).path||"",title:c(e).title},{default:C(()=>[ao,i("span",ro,I(c(e).title),1)]),_:1},8,["to","title"])):p("v-if",!0)]),i("div",co,[c(o)?(d(),$(a,{key:0,to:c(o).path||"",title:c(o).title,class:"post-nav-next"},{default:C(()=>[i("span",io,I(c(o).title),1),lo]),_:1},8,["to","title"])):p("v-if",!0)])])}}});const _o={key:0,"w-full":"","pt-14":"","pb-10":""},fo={class:"decrypt-password-container w-full sm:w-1/2","flex-center":"","m-auto":"",relative:""},po=["onKeyup"],vo={key:0,class:"-bottom-6",absolute:"","text-xs":"",op:"50"},mo=i("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",target:"_blank"},[i("span",null,"Web Crypto API")],-1),ho={key:1},go=b({__name:"ValaxyDecrypt",props:{encryptedContent:{}},setup(t){const e=t,o=A(""),s=A(""),n=A(!1),{decrypt:a}=me();async function l(){const r=e.encryptedContent;if(r)try{const m=await a(o.value,r);s.value=m||"",setTimeout(()=>{D()},16)}catch{n.value=!0}}function _(){s.value="",o.value="",setTimeout(()=>{D()},16)}const v=b({name:"ValaxyDeprecatedContent",props:{html:String},render(){const r=`<div>${this.html}</div>`;return be({setup:()=>({frontmatter:$t()}),template:r})}}),w=A(!1);return st(()=>{location.protocol!=="https:"&&(w.value=!0)}),(r,m)=>(d(),f("div",null,[s.value?(d(),f("div",ho,[g(c(v),{html:s.value},null,8,["html"]),i("div",{"w-full":"","text-center":"","mt-8":""},[i("button",{"m-auto":"",class:"btn","font-bold":"",onClick:_}," Encrypt Again ")])])):(d(),f("div",_o,[i("div",fo,[It(i("input",{"onUpdate:modelValue":m[0]||(m[0]=T=>o.value=T),"w-full":"",border:"","pl-5":"","pr-11":"","py-3":"",rounded:"","hover:shadow":"",transition:"",type:"password",placeholder:"Enter password",class:z(n.value&&"border-red"),onInput:m[1]||(m[1]=T=>n.value=!1),onKeyup:ge(l,["enter"])},null,42,po),[[he,o.value]]),i("div",{"cursor-pointer":"",absolute:"","text-2xl":"","i-ri-arrow-right-circle-line":"","right-3":"","text-gray":"","hover:text-black":"",onClick:l}),w.value?(d(),f("div",vo,[mo,ye(" Only works in HTTPS ")])):p("v-if",!0)])]))]))}}),L=typeof window<"u",Ot=L&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),xt=L&&"IntersectionObserver"in window,Tt=L&&"classList"in document.createElement("p"),Vt=L&&window.devicePixelRatio>1,yo={elements_selector:".lazy",container:Ot||L?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},Nt=t=>Object.assign({},yo,t),gt=function(t,e){let o;const s="LazyLoad::Initialized",n=new t(e);try{o=new CustomEvent(s,{detail:{instance:n}})}catch{o=document.createEvent("CustomEvent"),o.initCustomEvent(s,!1,!1,{instance:n})}window.dispatchEvent(o)},bo=(t,e)=>{if(e)if(!e.length)gt(t,e);else for(let o=0,s;s=e[o];o+=1)gt(t,s)},k="src",nt="srcset",at="sizes",Dt="poster",P="llOriginalAttrs",zt="data",rt="loading",Rt="loaded",Mt="applied",ko="entered",ct="error",Yt="native",Pt="data-",Ht="ll-status",h=(t,e)=>t.getAttribute(Pt+e),wo=(t,e,o)=>{var s=Pt+e;if(o===null){t.removeAttribute(s);return}t.setAttribute(s,o)},H=t=>h(t,Ht),x=(t,e)=>wo(t,Ht,e),q=t=>x(t,null),it=t=>H(t)===null,Co=t=>H(t)===rt,Eo=t=>H(t)===ct,lt=t=>H(t)===Yt,Io=[rt,Rt,Mt,ct],$o=t=>Io.indexOf(H(t))>=0,S=(t,e,o,s)=>{if(t){if(s!==void 0){t(e,o,s);return}if(o!==void 0){t(e,o);return}t(e)}},M=(t,e)=>{if(Tt){t.classList.add(e);return}t.className+=(t.className?" ":"")+e},y=(t,e)=>{if(Tt){t.classList.remove(e);return}t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},Lo=t=>{t.llTempImage=document.createElement("IMG")},So=t=>{delete t.llTempImage},Bt=t=>t.llTempImage,j=(t,e)=>{if(!e)return;const o=e._observer;o&&o.unobserve(t)},Ao=t=>{t.disconnect()},Oo=(t,e,o)=>{e.unobserve_entered&&j(t,o)},dt=(t,e)=>{t&&(t.loadingCount+=e)},xo=t=>{t&&(t.toLoadCount-=1)},Ft=(t,e)=>{t&&(t.toLoadCount=e)},To=t=>t.loadingCount>0,Vo=t=>t.toLoadCount>0,Ut=t=>{let e=[];for(let o=0,s;s=t.children[o];o+=1)s.tagName==="SOURCE"&&e.push(s);return e},ut=(t,e)=>{const o=t.parentNode;if(!o||o.tagName!=="PICTURE")return;Ut(o).forEach(e)},Wt=(t,e)=>{Ut(t).forEach(e)},J=[k],Gt=[k,Dt],Y=[k,nt,at],Kt=[zt],Z=t=>!!t[P],qt=t=>t[P],jt=t=>delete t[P],R=(t,e)=>{if(Z(t))return;const o={};e.forEach(s=>{o[s]=t.getAttribute(s)}),t[P]=o},No=t=>{Z(t)||(t[P]={backgroundImage:t.style.backgroundImage})},Do=(t,e,o)=>{if(!o){t.removeAttribute(e);return}t.setAttribute(e,o)},O=(t,e)=>{if(!Z(t))return;const o=qt(t);e.forEach(s=>{Do(t,s,o[s])})},zo=t=>{if(!Z(t))return;const e=qt(t);t.style.backgroundImage=e.backgroundImage},Jt=(t,e,o)=>{M(t,e.class_applied),x(t,Mt),o&&(e.unobserve_completed&&j(t,e),S(e.callback_applied,t,o))},Zt=(t,e,o)=>{M(t,e.class_loading),x(t,rt),o&&(dt(o,1),S(e.callback_loading,t,o))},E=(t,e,o)=>{o&&t.setAttribute(e,o)},yt=(t,e)=>{E(t,at,h(t,e.data_sizes)),E(t,nt,h(t,e.data_srcset)),E(t,k,h(t,e.data_src))},Ro=(t,e)=>{ut(t,o=>{R(o,Y),yt(o,e)}),R(t,Y),yt(t,e)},Mo=(t,e)=>{R(t,J),E(t,k,h(t,e.data_src))},Yo=(t,e)=>{Wt(t,o=>{R(o,J),E(o,k,h(o,e.data_src))}),R(t,Gt),E(t,Dt,h(t,e.data_poster)),E(t,k,h(t,e.data_src)),t.load()},Po=(t,e)=>{R(t,Kt),E(t,zt,h(t,e.data_src))},Ho=(t,e,o)=>{const s=h(t,e.data_bg),n=h(t,e.data_bg_hidpi),a=Vt&&n?n:s;a&&(t.style.backgroundImage=`url("${a}")`,Bt(t).setAttribute(k,a),Zt(t,e,o))},Bo=(t,e,o)=>{const s=h(t,e.data_bg_multi),n=h(t,e.data_bg_multi_hidpi),a=Vt&&n?n:s;a&&(t.style.backgroundImage=a,Jt(t,e,o))},Fo=(t,e,o)=>{const s=h(t,e.data_bg_set);if(!s)return;const n=s.split("|");let a=n.map(l=>`image-set(${l})`);t.style.backgroundImage=a.join(),t.style.backgroundImage===""&&(a=n.map(l=>`-webkit-image-set(${l})`),t.style.backgroundImage=a.join()),Jt(t,e,o)},Qt={IMG:Ro,IFRAME:Mo,VIDEO:Yo,OBJECT:Po},Uo=(t,e)=>{const o=Qt[t.tagName];o&&o(t,e)},Wo=(t,e,o)=>{const s=Qt[t.tagName];s&&(s(t,e),Zt(t,e,o))},Go=["IMG","IFRAME","VIDEO","OBJECT"],Ko=t=>Go.indexOf(t.tagName)>-1,Xt=(t,e)=>{e&&!To(e)&&!Vo(e)&&S(t.callback_finish,e)},bt=(t,e,o)=>{t.addEventListener(e,o),t.llEvLisnrs[e]=o},qo=(t,e,o)=>{t.removeEventListener(e,o)},_t=t=>!!t.llEvLisnrs,jo=(t,e,o)=>{_t(t)||(t.llEvLisnrs={});const s=t.tagName==="VIDEO"?"loadeddata":"load";bt(t,s,e),bt(t,"error",o)},et=t=>{if(!_t(t))return;const e=t.llEvLisnrs;for(let o in e){const s=e[o];qo(t,o,s)}delete t.llEvLisnrs},te=(t,e,o)=>{So(t),dt(o,-1),xo(o),y(t,e.class_loading),e.unobserve_completed&&j(t,o)},Jo=(t,e,o,s)=>{const n=lt(e);te(e,o,s),M(e,o.class_loaded),x(e,Rt),S(o.callback_loaded,e,s),n||Xt(o,s)},Zo=(t,e,o,s)=>{const n=lt(e);te(e,o,s),M(e,o.class_error),x(e,ct),S(o.callback_error,e,s),o.restore_on_error&&O(e,Y),n||Xt(o,s)},ft=(t,e,o)=>{const s=Bt(t)||t;if(_t(s))return;jo(s,l=>{Jo(l,t,e,o),et(s)},l=>{Zo(l,t,e,o),et(s)})},Qo=(t,e,o)=>{Lo(t),ft(t,e,o),No(t),Ho(t,e,o),Bo(t,e,o),Fo(t,e,o)},Xo=(t,e,o)=>{ft(t,e,o),Wo(t,e,o)},pt=(t,e,o)=>{Ko(t)?Xo(t,e,o):Qo(t,e,o)},ts=(t,e,o)=>{t.setAttribute("loading","lazy"),ft(t,e,o),Uo(t,e),x(t,Yt)},kt=t=>{t.removeAttribute(k),t.removeAttribute(nt),t.removeAttribute(at)},es=t=>{ut(t,e=>{kt(e)}),kt(t)},ee=t=>{ut(t,e=>{O(e,Y)}),O(t,Y)},os=t=>{Wt(t,e=>{O(e,J)}),O(t,Gt),t.load()},ss=t=>{O(t,J)},ns=t=>{O(t,Kt)},as={IMG:ee,IFRAME:ss,VIDEO:os,OBJECT:ns},rs=t=>{const e=as[t.tagName];if(!e){zo(t);return}e(t)},cs=(t,e)=>{it(t)||lt(t)||(y(t,e.class_entered),y(t,e.class_exited),y(t,e.class_applied),y(t,e.class_loading),y(t,e.class_loaded),y(t,e.class_error))},is=(t,e)=>{rs(t),cs(t,e),q(t),jt(t)},ls=(t,e,o,s)=>{o.cancel_on_exit&&Co(t)&&t.tagName==="IMG"&&(et(t),es(t),ee(t),y(t,o.class_loading),dt(s,-1),q(t),S(o.callback_cancel,t,e,s))},ds=(t,e,o,s)=>{const n=$o(t);x(t,ko),M(t,o.class_entered),y(t,o.class_exited),Oo(t,o,s),S(o.callback_enter,t,e,s),!n&&pt(t,o,s)},us=(t,e,o,s)=>{it(t)||(M(t,o.class_exited),ls(t,e,o,s),S(o.callback_exit,t,e,s))},_s=["IMG","IFRAME","VIDEO"],oe=t=>t.use_native&&"loading"in HTMLImageElement.prototype,fs=(t,e,o)=>{t.forEach(s=>{_s.indexOf(s.tagName)!==-1&&ts(s,e,o)}),Ft(o,0)},ps=t=>t.isIntersecting||t.intersectionRatio>0,vs=t=>({root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}),ms=(t,e,o)=>{t.forEach(s=>ps(s)?ds(s.target,s,e,o):us(s.target,s,e,o))},hs=(t,e)=>{e.forEach(o=>{t.observe(o)})},gs=(t,e)=>{Ao(t),hs(t,e)},ys=(t,e)=>{!xt||oe(t)||(e._observer=new IntersectionObserver(o=>{ms(o,t,e)},vs(t)))},se=t=>Array.prototype.slice.call(t),G=t=>t.container.querySelectorAll(t.elements_selector),bs=t=>se(t).filter(it),ks=t=>Eo(t),ws=t=>se(t).filter(ks),wt=(t,e)=>bs(t||G(e)),Cs=(t,e)=>{ws(G(t)).forEach(s=>{y(s,t.class_error),q(s)}),e.update()},Es=(t,e)=>{L&&(e._onlineHandler=()=>{Cs(t,e)},window.addEventListener("online",e._onlineHandler))},Is=t=>{L&&window.removeEventListener("online",t._onlineHandler)},B=function(t,e){const o=Nt(t);this._settings=o,this.loadingCount=0,ys(o,this),Es(o,this),this.update(e)};B.prototype={update:function(t){const e=this._settings,o=wt(t,e);if(Ft(this,o.length),Ot||!xt){this.loadAll(o);return}if(oe(e)){fs(o,e,this);return}gs(this._observer,o)},destroy:function(){this._observer&&this._observer.disconnect(),Is(this),G(this._settings).forEach(t=>{jt(t)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){const e=this._settings;wt(t,e).forEach(s=>{j(s,this),pt(s,e,this)})},restoreAll:function(){const t=this._settings;G(t).forEach(e=>{is(e,t)})}};B.load=(t,e)=>{const o=Nt(e);pt(t,o)};B.resetStatus=t=>{q(t)};L&&bo(B,window.lazyLoadOptions);function $s(t={}){return new B({elements_selector:".lazy",...t})}function Ls(){const t=Lt();t.value.vanillaLazyload.enable&&st(()=>{$s(t.value.vanillaLazyload)})}function Ss(){ke&&window.addEventListener("click",t=>{var o;const e=t.target;if(e.matches(".vp-code-group input")){const s=(o=e.parentElement)==null?void 0:o.parentElement;if(!s)return;const n=Array.from(s.querySelectorAll("input")).indexOf(e);if(n<0)return;const a=s.querySelector(".blocks");if(!a)return;const l=Array.from(a.children).find(w=>w.classList.contains("active"));if(!l)return;const _=a.children[n];if(!_||l===_)return;l.classList.remove("active"),_.classList.add("active");const v=s==null?void 0:s.querySelector(`label[for="${e.id}"]`);v==null||v.scrollIntoView({block:"nearest"})}})}const As={key:2,text:"center"},Os=["href"],xs={m:"y-4",class:"end flex justify-center items-center"},Ts=i("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),Vs={p:"x-4",font:"serif bold",class:"whitespace-nowrap"},Ns=i("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),Ds=b({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(t){const e=t,{t:o}=K(),s=A();return St(()=>{we(s.value)}),st(()=>{D()}),Ce(()=>{D()}),e.frontmatter.aplayer&&Ee(),e.frontmatter.codepen&&Ie(),$e(),Ss(),(typeof e.frontmatter.medium_zoom>"u"||e.frontmatter.medium_zoom)&&Le(),Ls(),(n,a)=>{const l=go;return n.$slots.default?(d(),f("article",{key:0,class:z(n.frontmatter.markdown!==!1&&"markdown-body")},[n.frontmatter.encryptedContent?(d(),$(l,{key:0,"encrypted-content":n.frontmatter.encryptedContent},null,8,["encrypted-content"])):u(n.$slots,"default",{key:1,ref_key:"contentRef",ref:s,onVnodeUpdated:a[0]||(a[0]=(..._)=>c(D)&&c(D)(..._))}),n.frontmatter.url?(d(),f("div",As,[i("a",{href:n.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},I(c(o)("post.view_link")),9,Os)])):p("v-if",!0),n.frontmatter.end!==void 0?u(n.$slots,"end",{key:3},()=>[i("div",xs,[Ts,i("span",Vs,I(n.frontmatter.end?"Q.E.D.":"To Be Continued."),1),Ns])]):p("v-if",!0)],2)):p("v-if",!0)}}});const zs={key:0,op:"80"},Rs=b({__name:"YunMdTimeWarning",props:{frontmatter:{}},setup(t){const e=t;W.extend(Se);const{t:o}=K(),s=tt(()=>{const n=W().valueOf()-W(e.frontmatter.updated).valueOf();return typeof e.frontmatter.time_warning=="number"?n>e.frontmatter.time_warning:e.frontmatter.time_warning||n>30*24*60*60*1e3});return(n,a)=>s.value?(d(),f("blockquote",zs,I(c(o)("post.time_warning",{ago:c(W)(n.frontmatter.updated).fromNow()})),1)):p("v-if",!0)}}),Ms={class:"yun-main md:pl-$va-sidebar-width lt-md:ml-0",flex:"~"},Ys={w:"full",flex:"~"},Ps={p:"x-4 b-8",class:"sm:px-6 lg:px-12 xl:px-16",w:"full"},Gs=b({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(t){const e=t,o=Lt(),{styles:s,icon:n,color:a}=Ae(e.frontmatter.type),l=Oe(tt(()=>e.frontmatter)),_=tt(()=>e.frontmatter.aside!==!1),v=xe(),w=Te();return Ve(()=>{v.hash&&setTimeout(()=>{ht(document.body,v.hash,!0)},0)}),St(()=>{window.addEventListener("click",async r=>{const m=r.target.closest("a");if(m){const{protocol:T,hostname:Q,pathname:F,hash:V,target:X}=m,N=window.location,U=F.match(/\.\w+$/);!r.ctrlKey&&!r.shiftKey&&!r.altKey&&!r.metaKey&&X!=="_blank"&&T===N.protocol&&Q===N.hostname&&!(U&&U[0]!==".html")&&F===N.pathname&&(r.preventDefault(),V&&V!==N.hash&&(await w.push({hash:V}),history.replaceState({...history.state},""),window.dispatchEvent(new Event("hashchange")),ht(m,V,m.classList.contains("header-anchor"))))}},{capture:!0})}),(r,m)=>{const T=Re,Q=Rs,F=Ds,V=At,X=uo,N=oo,U=ze,ne=eo;return d(),f("main",Ms,[i("div",Ys,[u(r.$slots,"main",{},()=>[i("div",{class:z(["content",!_.value&&"no-aside"]),flex:"~ col grow",w:"full",p:"l-4 lt-md:0"},[g(V,{cover:r.frontmatter.cover,m:"0",class:"relative",style:De(c(s))},{default:C(()=>[u(r.$slots,"main-header",{},()=>[g(T,{class:"mb-2",title:c(l),icon:r.frontmatter.icon||c(n),color:r.frontmatter.color||c(a),cover:r.frontmatter.cover},null,8,["title","icon","color","cover"])]),u(r.$slots,"main-header-after"),i("div",Ps,[u(r.$slots,"main-content",{},()=>[g(Ne,{appear:""},{default:C(()=>[g(F,{frontmatter:r.frontmatter},{default:C(()=>[g(Q,{frontmatter:r.frontmatter},null,8,["frontmatter"]),u(r.$slots,"main-content-md"),u(r.$slots,"default")]),_:3},8,["frontmatter"])]),_:3})]),u(r.$slots,"main-content-after")])]),_:3},8,["cover","style"]),u(r.$slots,"main-nav-before"),u(r.$slots,"main-nav",{},()=>[r.frontmatter.nav!==!1?(d(),$(X,{key:0})):p("v-if",!0)]),u(r.$slots,"main-nav-after"),c(o).comment.enable&&r.frontmatter.comment!==!1?u(r.$slots,"comment",{key:0},()=>[g(N,{class:z(r.frontmatter.nav===!1?"mt-4":0)},null,8,["class"])]):p("v-if",!0),u(r.$slots,"main-footer-before"),g(U),u(r.$slots,"main-footer-after")],2)]),u(r.$slots,"aside",{},()=>[_.value?(d(),$(ne,{key:0},{default:C(()=>[u(r.$slots,"aside-custom")]),_:3})):p("v-if",!0)])])])}}});export{Gs as _};
