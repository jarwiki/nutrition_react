(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[18],{474:function(e,t,A){"use strict";A.d(t,"a",(function(){return d}));A(3);var s=A(87),c=A.n(s),a=A(34),n=A(88),o=A(60),i=c.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_SERVER_URL});i.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(a.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),i.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(a.a)()||n.a.dispatch(Object(o.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(a.b)(),Promise.reject(e)}));var l=i,r=c.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_BLOG_BASE_URL});r.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(a.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),r.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(a.a)()||n.a.dispatch(Object(o.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(a.b)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var d=function(e){var t=e.page,A=e.parent_slug;return l.get("/dashboard/categories?page=".concat(t),{params:{parent_slug:A}})}},554:function(e,t,A){"use strict";t.a="data:image/jpeg;base64,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"},555:function(e,t,A){"use strict";t.a="data:image/jpeg;base64,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"},638:function(e,t,A){},671:function(e,t,A){"use strict";A.r(t);var s=A(18),c=A.n(s),a=(A(482),A(40)),n=A(86),o=A(5),i=A(1),l=A(484),r=A.n(l),d=A(47),j=A(13),p=A(34),u=A(60),b=(A(474),A(143)),E=A(477),B=A(475),g=A.n(B),h=(A.p,A.p,A.p,A.p,A(554),A(555),A(56)),O=(A(638),A(109)),m=function(){var e=Object(j.i)().params.blogid,t=Object(i.useState)({}),A=Object(n.a)(t,2),s=A[0],l=A[1],r=Object(i.useState)({}),d=Object(n.a)(r,2),p=d[0],u=d[1],b=function(){var t=Object(a.a)(c.a.mark((function t(){var A,s,a,n,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h.g)(e);case 3:o=t.sent,l(null===o||void 0===o||null===(A=o.data)||void 0===A||null===(s=A.responseData)||void 0===s?void 0:s.blogs),u(null===o||void 0===o||null===(a=o.data)||void 0===a||null===(n=a.responseData)||void 0===n?void 0:n.recentBlogs),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){b()}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("ul",{className:"nav-filters filter-underline blog-filters justify-content-center","data-target":".posts"}),Object(o.jsx)("div",{className:"row gutter-lg",children:Object(o.jsxs)("div",{className:"offset-sm-1 col-sm-10",children:[Object(o.jsxs)("article",{className:"post-single",children:[Object(o.jsx)("figure",{className:"post-media",children:Object(o.jsx)("a",{href:"post-single.html#",children:Object(o.jsx)("img",{src:"http://54.177.7.240"+(null===s||void 0===s?void 0:s.image),width:"880",height:"450",alt:"post"})})}),Object(o.jsxs)("div",{className:"post-details",children:[Object(o.jsxs)("div",{className:"post-meta",children:["by"," ",Object(o.jsx)("a",{href:"post-single.html#",className:"post-author",children:"John Doe"}),"on"," ",Object(o.jsx)("a",{href:"post-single.html#",className:"post-date",children:"Nov 22, 2018"}),"|"," ",Object(o.jsxs)("a",{href:"post-single.html#",className:"post-comment",children:[Object(o.jsx)("span",{children:"2"})," Comments"]})]}),Object(o.jsx)("h4",{className:"post-title",children:Object(o.jsx)("a",{href:"post-single.html#",children:null===s||void 0===s?void 0:s.title})}),Object(o.jsx)("div",{className:"post-body mb-7",children:Object(o.jsxs)("p",{className:"mb-5",children:[" ",null===s||void 0===s?void 0:s.content]})})]})]}),Object(o.jsxs)("div",{className:"related-posts",children:[Object(o.jsx)("h3",{className:"title title-simple text-left text-normal font-weight-bold ls-normal",children:"Related Posts"}),(null===p||void 0===p?void 0:p.length)>0?Object(o.jsx)(g.a,{className:"owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2",margin:20,nav:!0,dots:!1,navContainerClass:"owl-nav",responsive:{0:{items:1},768:{items:3},992:{items:3}},loop:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,children:Object(o.jsx)(o.Fragment,{children:null===p||void 0===p?void 0:p.map((function(e,t){return Object(o.jsxs)("div",{className:"post",children:[Object(o.jsxs)("figure",{className:"post-media",children:[Object(o.jsx)("a",{href:"post-single.html#",children:Object(o.jsx)("img",{src:"http://54.177.7.240"+(null===e||void 0===e?void 0:e.image),width:"380",height:"250",alt:"post"})}),Object(o.jsxs)("div",{className:"post-calendar",children:[Object(o.jsx)("span",{className:"post-day",children:"19"}),Object(o.jsx)("span",{className:"post-month",children:"JAN"})]})]}),Object(o.jsxs)("div",{className:"post-details",children:[Object(o.jsx)("h4",{className:"post-title",children:Object(o.jsx)("a",{href:"post-single.html",children:null===e||void 0===e?void 0:e.title})}),Object(o.jsx)("p",{className:"post-content",children:null===e||void 0===e?void 0:e.content}),Object(o.jsxs)(O.b,{to:"/blogpost/".concat(null===e||void 0===e?void 0:e._id),className:"btn btn-link btn-underline btn-primary",children:["Read more",Object(o.jsx)("i",{className:"d-icon-arrow-right"})]})]})]})}))})}):"no record found"]})]})})]})})},Q=A(478);t.default=function(){var e=Object(j.i)().url,t=Object(j.g)(),A=Object(d.c)(),s=Object(b.a)(),c=s.get("fsz"),a=s.get("token"),l=s.get("_ga"),B=Object(i.useState)([]),g=Object(n.a)(B,2);g[0],g[1];return Object(i.useEffect)((function(){c&&(sessionStorage.setItem("fsz",c),Object(p.d)("source",c)),a&&(Object(p.c)(a),t.replace(e),A(Object(u.a)(a))),l&&t.replace(e)}),[]),Object(i.useEffect)((function(){"enabled"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_MARKETING_SCRIPT&&(r.a.init(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_META_PIXEL_ID),r.a.pageView())}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(E.a,{title:"Most Trusted NFT Marketplace To Trade Cricket NFTs",description:"Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!",image:"https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"}),Object(o.jsx)("main",{className:"main single-product",children:Object(o.jsx)("div",{className:"page-content",children:Object(o.jsxs)("div",{className:"container-fluid p-0",children:[Object(o.jsx)("div",{className:"page-header pl-4 pr-4",style:{background:"#7ea4b1"},children:Object(o.jsx)("h1",{className:"page-title font-weight-bold lh-1 text-white text-capitalize",children:"Blog "})}),Object(o.jsx)("div",{class:"page-content mt-10 pt-10",children:Object(o.jsx)(m,{})})]})})}),Object(o.jsx)(Q.a,{})]})}}}]);
//# sourceMappingURL=18.b04c1d16.chunk.js.map