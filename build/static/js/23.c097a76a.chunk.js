(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[23],{478:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));c(3);var n=c(88),a=c.n(n),i=c(36),s=c(89),r=c(60),o=a.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_SERVER_URL});o.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(i.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),o.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(i.a)()||s.a.dispatch(Object(r.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(i.b)(),Promise.reject(e)}));var d=o,u=a.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_BLOG_BASE_URL});u.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(i.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),u.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(i.a)()||s.a.dispatch(Object(r.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(i.b)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var l=function(e){var t=e.page,c=e.parent_slug;return d.get("/dashboard/categories?page=".concat(t),{params:{parent_slug:c}})}},497:function(e,t,c){"use strict";t.a=c.p+"static/media/customer.07059049.jpg"},498:function(e,t,c){"use strict";t.a=c.p+"static/media/store.27de7930.jpg"},688:function(e,t,c){},715:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c.n(n),i=c(20),s=c(87),r=c(5),o=c(1),d=(c(228),c(48)),u=c(15),l=(c(36),c(60),c(478),c(147)),p=c(29),j=c(481),b=(c(497),c(498),c(688),function(){var e=Object(u.i)().params.id,t=Object(o.useState)({}),c=Object(s.a)(t,2),n=c[0],d=c[1],l=function(){var t=Object(i.a)(a.a.mark((function t(){var c,n,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.k)(e);case 2:i=t.sent,d(null===i||void 0===i||null===(c=i.data)||void 0===c||null===(n=c.responseData)||void 0===n?void 0:n.page[0]),window.scrollTo(0,0);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){l()}),[]),Object(o.useEffect)((function(){l()}),[e]),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("section",{className:"customer-section pb-10",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row align-items-center",children:Object(r.jsxs)("div",{className:"col-md-12 mb-4",children:[Object(r.jsxs)("h3",{className:"cms-page-title section-title lh-1 font-weight-light",children:[" ",null===n||void 0===n?void 0:n.title]}),Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:null===n||void 0===n?void 0:n.content},className:"cms-page-content"})]})})})})})}),m=c(482);t.default=function(){Object(u.i)().url,Object(u.g)(),Object(d.c)();var e=Object(l.a)(),t=(e.get("fsz"),e.get("token"),e.get("_ga"),Object(o.useState)({})),c=Object(s.a)(t,2),n=(c[0],c[1]),v=Object(o.useState)([]),O=Object(s.a)(v,2),_=(O[0],O[1],Object(u.i)().params.id),g=Object(o.useState)({}),f=Object(s.a)(g,2),h=f[0],E=f[1],T=Object(o.useState)(!1),A=Object(s.a)(T,2),P=A[0],R=A[1],N=function(){var e=Object(i.a)(a.a.mark((function e(){var t,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p.u)();case 3:c=e.sent,n(null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.responseData),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){N()}),[]);var S=function(){var e=Object(i.a)(a.a.mark((function e(){var t,c,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.prev=1,e.next=4,Object(p.k)(_);case 4:n=e.sent,E(null===n||void 0===n||null===(t=n.data)||void 0===t||null===(c=t.responseData)||void 0===c?void 0:c.page[0]),R(!1),window.scrollTo(0,0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),R(!1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){S()}),[]),Object(o.useEffect)((function(){S()}),[_]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j.a,{title:"Most Trusted NFT Marketplace To Trade Cricket NFTs",description:"Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!",image:"https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"}),Object(r.jsx)("main",{className:"main single-product",children:Object(r.jsx)("div",{className:"page-content",children:Object(r.jsxs)("div",{className:"container-fluid p-0",children:[Object(r.jsx)("div",{className:"page-header pl-4 pr-4 cms-page-imge",style:{backgroundImage:"url(".concat("https://admin.livenscience.com").concat(null===h||void 0===h?void 0:h.image,")")},children:Object(r.jsx)("h1",{className:"page-title font-weight-bold lh-1 text-white text-capitalize"})}),Object(r.jsx)("div",{class:"page-content mt-10 pt-10",children:P?"Please wait Loading":Object(r.jsx)(b,{})})]})})}),Object(r.jsx)(m.a,{})]})}}}]);
//# sourceMappingURL=23.c097a76a.chunk.js.map