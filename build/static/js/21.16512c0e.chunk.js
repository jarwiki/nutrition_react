(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[21],{476:function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));c(3);var s=c(88),n=c.n(s),i=c(36),r=c(89),a=c(60),o=n.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_SERVER_URL});o.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(i.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),o.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(i.a)()||r.a.dispatch(Object(a.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(i.b)(),Promise.reject(e)}));var d=o,l=n.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_BLOG_BASE_URL});l.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(i.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),l.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(i.a)()||r.a.dispatch(Object(a.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(i.b)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var j=function(e){var t=e.page,c=e.parent_slug;return d.get("/dashboard/categories?page=".concat(t),{params:{parent_slug:c}})}},636:function(e,t,c){},674:function(e,t,c){"use strict";c.r(t);c(9),c(484),c(20);var s=c(87),n=c(5),i=c(1),r=(c(228),c(48)),a=c(15),o=c(36),d=c(60),l=(c(476),c(144)),j=c(478),u=c(110),b=(c(636),c(88),c(491)),h=c(147),p=function(){var e,t=Object(r.c)(),c=Object(r.d)((function(e){return e})),s=(c.user,c.cart),a=Object(i.useState)([]);a.product,a.setProduct;return Object(i.useEffect)((function(){}),[]),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("section",{className:"customer-section",children:[Object(n.jsx)("div",{className:"step-by pr-4 pl-4",children:Object(n.jsx)("h3",{className:"title title-simple title-step active",children:Object(n.jsx)("a",{href:"#",children:"Shopping Cart"})})}),Object(n.jsx)("div",{className:"container mt-7 mb-2",children:Object(n.jsx)("div",{className:"row align-items-center",children:Object(n.jsxs)("div",{className:"col-lg-12 col-md-12 pr-lg-4",children:[(null===s||void 0===s||null===(e=s.data)||void 0===e?void 0:e.length)>0?Object(n.jsxs)("table",{className:"shop-table cart-table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:Object(n.jsx)("span",{children:"Product"})}),Object(n.jsx)("th",{children:"Description"}),Object(n.jsx)("th",{children:Object(n.jsx)("span",{children:"Price"})}),Object(n.jsx)("th",{children:"Remove"})]})}),Object(n.jsx)("tbody",{children:null===s||void 0===s?void 0:s.data.map((function(e,c){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"product-thumbnail",children:Object(n.jsx)("figure",{children:Object(n.jsx)("a",{href:"product-simple.html",children:Object(n.jsx)("img",{src:"http://54.177.7.240"+(null===e||void 0===e?void 0:e.photos),width:"100",height:"100",alt:"product"})})})}),Object(n.jsx)("td",{className:"product-name",children:Object(n.jsx)("div",{className:"product-name-section",children:Object(n.jsx)("a",{href:"product-simple.html",children:null===e||void 0===e?void 0:e.name})})}),Object(n.jsx)("td",{className:"product-subtotal",children:Object(n.jsx)("span",{className:"amount",children:Object(b.b)(null===e||void 0===e?void 0:e.saleAmount,"INR")})}),Object(n.jsx)("td",{className:"product-close",children:Object(n.jsx)("a",{className:"product-remove",title:"Remove this product",onClick:function(){return t(Object(h.d)(null===e||void 0===e?void 0:e._id))},children:Object(n.jsx)("i",{className:"fas fa-times"})})})]},c)}))})]}):"No Items Found",Object(n.jsx)("div",{className:"cart-actions-right mb-6 pt-4",children:function(){var e;return(null===s||void 0===s||null===(e=s.data)||void 0===e?void 0:e.length)>0?Object(n.jsxs)(u.b,{to:"/checkout",className:"btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4",children:["Continue Shopping ",Object(n.jsx)("i",{className:"d-icon-arrow-right"})]}):Object(n.jsx)(u.b,{to:"/",className:"btn btn-dark btn-md btn-rounded btn-icon-left mr-4 mb-4",children:"Back"})}()})]})})})]})})},m=c(479);t.default=function(){var e=Object(a.i)().url,t=Object(a.g)(),c=Object(r.c)(),u=Object(l.a)(),b=u.get("fsz"),h=u.get("token"),O=(u.get("_ga"),Object(i.useState)([])),v=Object(s.a)(O,2);v[0],v[1];return Object(i.useEffect)((function(){b&&(sessionStorage.setItem("fsz",b),Object(o.d)("source",b)),h&&(Object(o.c)(h),t.replace(e),c(Object(d.a)(h)))}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j.a,{title:"Most Trusted NFT Marketplace To Trade Cricket NFTs",description:"Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!",image:"https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"}),Object(n.jsx)("main",{className:"main single-product",children:Object(n.jsx)("div",{className:"page-content",children:Object(n.jsxs)("div",{className:"container-fluid p-0",children:[Object(n.jsx)("div",{className:"page-header pl-4 pr-4",style:{background:"#7ea4b1"},children:Object(n.jsx)("h1",{className:"page-title font-weight-bold lh-1 text-white text-capitalize",children:"SHOPPING CART"})}),Object(n.jsx)("div",{class:"page-content mt-10 pt-10",children:Object(n.jsx)(p,{})})]})})}),Object(n.jsx)(m.a,{})]})}}}]);
//# sourceMappingURL=21.16512c0e.chunk.js.map