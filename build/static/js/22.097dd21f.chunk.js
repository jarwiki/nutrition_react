(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[22],{478:function(e,A,t){"use strict";t.d(A,"a",(function(){return d}));t(3);var c=t(88),s=t.n(c),n=t(36),i=t(89),a=t(60),o=s.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_SERVER_URL});o.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var A=Object(n.a)();return A&&(e.headers.Authorization=A),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),o.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(n.a)()||i.a.dispatch(Object(a.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(n.b)(),Promise.reject(e)}));var l=o,r=s.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_BLOG_BASE_URL});r.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var A=Object(n.a)();return A&&(e.headers.Authorization=A),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),r.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(n.a)()||i.a.dispatch(Object(a.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(n.b)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var d=function(e){var A=e.page,t=e.parent_slug;return l.get("/dashboard/categories?page=".concat(A),{params:{parent_slug:t}})}},593:function(e,A,t){"use strict";A.a="data:image/jpeg;base64,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"},594:function(e,A,t){"use strict";A.a="data:image/jpeg;base64,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"},679:function(e,A,t){},706:function(e,A,t){"use strict";t.r(A);var c=t(9),s=t.n(c),n=(t(490),t(20)),i=t(87),a=t(5),o=t(1),l=t(228),r=t.n(l),d=t(48),E=t(15),j=t(36),u=t(60),p=(t(478),t(147)),B=t(481),m=t(489),b=t.n(m),O=(t.p,t.p,t.p,t.p,t(593),t(594),t(29)),g=(t(679),t(110)),Q=t(501),v=t.n(Q),h=function(){var e=Object(E.i)().params.blogid,A=Object(o.useState)({}),t=Object(i.a)(A,2),c=t[0],l=t[1],r=Object(o.useState)({}),d=Object(i.a)(r,2),j=d[0],u=d[1],p=Object(o.useState)(0),B=Object(i.a)(p,2),m=(B[0],B[1],function(){var A=Object(n.a)(s.a.mark((function A(){var t,c,n,i,a;return s.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,Object(O.i)(e);case 3:a=A.sent,l(null===a||void 0===a||null===(t=a.data)||void 0===t||null===(c=t.responseData)||void 0===c?void 0:c.blogs),u(null===a||void 0===a||null===(n=a.data)||void 0===n||null===(i=n.responseData)||void 0===i?void 0:i.recentBlogs),window.scrollTo(0,0),A.next=12;break;case 9:A.prev=9,A.t0=A.catch(0),console.log(A.t0);case 12:case"end":return A.stop()}}),A,null,[[0,9]])})));return function(){return A.apply(this,arguments)}}());return Object(o.useEffect)((function(){m()}),[]),Object(o.useEffect)((function(){m()}),[e]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("ul",{className:"nav-filters j ustify-content-center","data-target":".posts"}),Object(a.jsx)("div",{className:"row gutter-lg",children:Object(a.jsxs)("div",{className:"offset-sm-1 col-sm-10",children:[Object(a.jsxs)("article",{className:"post-single",children:[(null===c||void 0===c?void 0:c.image)&&Object(a.jsx)("figure",{className:"post-media",children:Object(a.jsx)("a",{href:"",children:Object(a.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===c||void 0===c?void 0:c.image),className:"blog_post_img",alt:"post"})})}),Object(a.jsxs)("div",{className:"post-details",children:[Object(a.jsxs)("div",{className:"post-meta",children:["by"," ",Object(a.jsx)("a",{href:"",className:"post-author",children:null===c||void 0===c?void 0:c.username})," ","on"," ",Object(a.jsx)("a",{href:"",className:"post-date",children:v()(null===c||void 0===c?void 0:c.createdAt).format("MMM DD,YYYY")})]}),Object(a.jsx)("h4",{className:"post-title",children:Object(a.jsx)("a",{href:"post-single.html#",children:null===c||void 0===c?void 0:c.title})}),Object(a.jsx)("div",{className:"post-body mb-7",children:Object(a.jsxs)("p",{className:"mb-5",children:[" ",null===c||void 0===c?void 0:c.content]})})]})]}),Object(a.jsxs)("div",{className:"related-posts",children:[Object(a.jsx)("h3",{className:"title title-simple text-left text-normal font-weight-bold ls-normal",children:"Related Posts"}),(null===j||void 0===j?void 0:j.length)>0?Object(a.jsx)(b.a,{className:"owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2",margin:20,nav:!0,dots:!1,navContainerClass:"owl-nav",responsive:{0:{items:1},768:{items:3},992:{items:3}},loop:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,children:Object(a.jsx)(a.Fragment,{children:null===j||void 0===j?void 0:j.map((function(e,A){return Object(a.jsxs)("div",{className:"post",children:[Object(a.jsxs)("figure",{className:"post-media",children:[Object(a.jsx)("a",{href:"post-single.html#",children:Object(a.jsx)("img",{src:"".concat("https://admin.livenscience.com").concat(null===e||void 0===e?void 0:e.image),width:"380",height:"250",alt:"post"})}),Object(a.jsxs)("div",{className:"post-calendar",children:[Object(a.jsxs)("span",{className:"post-day",children:[" ",v()(null===e||void 0===e?void 0:e.createdAt).format("DD")]}),Object(a.jsxs)("span",{className:"post-month",children:[" ",v()(null===e||void 0===e?void 0:e.createdAt).format("MMM")]})]})]}),Object(a.jsxs)("div",{className:"post-details",children:[Object(a.jsx)("h4",{className:"post-title",children:Object(a.jsx)("a",{href:"post-single.html",children:null===e||void 0===e?void 0:e.title})}),Object(a.jsx)("p",{className:"post-content",children:null===e||void 0===e?void 0:e.content}),Object(a.jsxs)(g.b,{to:"/blogpost/".concat(null===e||void 0===e?void 0:e._id),className:"btn btn-link btn-underline btn-primary",children:["Read more",Object(a.jsx)("i",{className:"d-icon-arrow-right"})]})]})]})}))})}):"no record found"]})]})})]})})},U=t(482);A.default=function(){var e=Object(E.i)().url,A=Object(E.g)(),t=Object(d.c)(),c=Object(p.a)(),s=c.get("fsz"),n=c.get("token"),l=c.get("_ga"),m=Object(o.useState)([]),b=Object(i.a)(m,2);b[0],b[1];return Object(o.useEffect)((function(){s&&(sessionStorage.setItem("fsz",s),Object(j.d)("source",s)),n&&(Object(j.c)(n),A.replace(e),t(Object(u.a)(n))),l&&A.replace(e)}),[]),Object(o.useEffect)((function(){"enabled"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_MARKETING_SCRIPT&&(r.a.init(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"http://www.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_META_PIXEL_ID),r.a.pageView())}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(B.a,{title:"Most Trusted NFT Marketplace To Trade Cricket NFTs",description:"Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!",image:"https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"}),Object(a.jsx)("main",{className:"main single-product",children:Object(a.jsx)("div",{className:"page-content",children:Object(a.jsxs)("div",{className:"container-fluid p-0",children:[Object(a.jsx)("div",{className:"page-header pl-4 pr-4",style:{background:"#7ea4b1"},children:Object(a.jsx)("h1",{className:"page-title font-weight-bold lh-1 text-white text-capitalize",children:"Blog "})}),Object(a.jsx)("div",{class:"page-content mt-10 pt-10",children:Object(a.jsx)(h,{})})]})})}),Object(a.jsx)(U.a,{})]})}}}]);
//# sourceMappingURL=22.097dd21f.chunk.js.map