(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[23],{455:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));c(3);var n=c(87),a=c.n(n),i=c(32),s=c(88),r=c(57),o=a.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_SERVER_URL});o.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(i.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),o.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(i.a)()||s.a.dispatch(Object(r.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(i.b)(),Promise.reject(e)}));var d=o,u=a.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_BLOG_BASE_URL});u.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(i.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),u.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(i.a)()||s.a.dispatch(Object(r.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(i.b)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var l=function(e){var t=e.page,c=e.parent_slug;return d.get("/dashboard/categories?page=".concat(t),{params:{parent_slug:c}})}},476:function(e,t,c){"use strict";t.a=c.p+"static/media/customer.07059049.jpg"},477:function(e,t,c){"use strict";t.a=c.p+"static/media/store.27de7930.jpg"},678:function(e,t,c){},711:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c(20),i=c(86),s=c(1),r=(c(227),c(45)),o=c(14),d=(c(32),c(57),c(455),c(145)),u=c(27),l=c(457),p=(c(476),c(477),c(678),c(5)),j=function(){var e=Object(o.i)().params.id,t=Object(s.useState)({}),c=Object(i.a)(t,2),r=c[0],d=c[1],l=function(){var t=Object(a.a)(Object(n.a)().mark((function t(){var c,a,i;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.l)(e);case 2:i=t.sent,d(null===i||void 0===i||null===(c=i.data)||void 0===c||null===(a=c.responseData)||void 0===a?void 0:a.page[0]),window.scrollTo(0,0);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){l()}),[]),Object(s.useEffect)((function(){l()}),[e]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("section",{className:"customer-section pb-10",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row align-items-center",children:Object(p.jsxs)("div",{className:"col-md-12 mb-4",children:[Object(p.jsxs)("h3",{className:"cms-page-title section-title lh-1 font-weight-light",children:[" ",null===r||void 0===r?void 0:r.title]}),Object(p.jsx)("div",{dangerouslySetInnerHTML:{__html:null===r||void 0===r?void 0:r.content},className:"cms-page-content"})]})})})})})},b=c(458);t.default=function(){Object(o.i)().url,Object(o.g)(),Object(r.c)();var e=Object(d.a)(),t=(e.get("fsz"),e.get("token"),e.get("_ga"),Object(s.useState)({})),c=Object(i.a)(t,2),O=(c[0],c[1]),m=Object(s.useState)([]),v=Object(i.a)(m,2),_=(v[0],v[1],Object(o.i)().params.id),g=Object(s.useState)({}),f=Object(i.a)(g,2),h=f[0],E=f[1],T=Object(s.useState)(!1),A=Object(i.a)(T,2),P=A[0],R=A[1],N=function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t,c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(u.y)();case 3:c=e.sent,O(null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.responseData),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){N()}),[]);var S=function(){var e=Object(a.a)(Object(n.a)().mark((function e(){var t,c,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.prev=1,e.next=4,Object(u.l)(_);case 4:a=e.sent,E(null===a||void 0===a||null===(t=a.data)||void 0===t||null===(c=t.responseData)||void 0===c?void 0:c.page[0]),R(!1),window.scrollTo(0,0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),R(!1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){S()}),[]),Object(s.useEffect)((function(){S()}),[_]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(l.a,{title:"Most Trusted NFT Marketplace To Trade Cricket NFTs",description:"Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!",image:"https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"}),Object(p.jsx)("main",{className:"main single-product",children:Object(p.jsx)("div",{className:"page-content",children:Object(p.jsxs)("div",{className:"container-fluid p-0",children:[Object(p.jsx)("div",{className:"page-header pl-4 pr-4 cms-page-imge",style:{backgroundImage:"url(".concat("https://admin.livenscience.com").concat(null===h||void 0===h?void 0:h.image,")")},children:Object(p.jsx)("h1",{className:"page-title font-weight-bold lh-1 text-white text-capitalize"})}),Object(p.jsx)("div",{class:"page-content mt-10 pt-10",children:P?"Please wait Loading":Object(p.jsx)(j,{})})]})})}),Object(p.jsx)(b.a,{})]})}}}]);
//# sourceMappingURL=23.f3a6a052.chunk.js.map