(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[10],{476:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));i(3);var n=i(88),c=i.n(n),s=i(36),o=i(89),l=i(60),a=c.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://18.144.69.183/"}).REACT_APP_SERVER_URL});a.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(s.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),a.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(s.a)()||o.a.dispatch(Object(l.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(s.b)(),Promise.reject(e)}));var r=a,d=c.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://18.144.69.183/"}).REACT_APP_BLOG_BASE_URL});d.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(s.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),d.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(s.a)()||o.a.dispatch(Object(l.d)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(s.b)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var u=function(e){var t=e.page,i=e.parent_slug;return r.get("/dashboard/categories?page=".concat(t),{params:{parent_slug:i}})}},497:function(e,t,i){"use strict";var n=i(87),c=i(5),s=i(1),o=i(110),l=(i(29),i(147)),a=i(48);t.a=function(e){var t=e.ProductDetails,i=(e.key,Object(a.c)()),r=Object(a.d)((function(e){return e})),d=r.user,u=r.cart,j=(null===u||void 0===u?void 0:u.data)?null===u||void 0===u?void 0:u.data:null,v=Object(s.useState)(!1),b=Object(n.a)(v,2),m=(b[0],b[1],Object(s.useState)(!1)),h=Object(n.a)(m,2),p=h[0],O=h[1];return Object(s.useEffect)((function(){if(d){var e,i=null===j||void 0===j||null===(e=j.line_items)||void 0===e?void 0:e.find((function(e){return e._id===(null===t||void 0===t?void 0:t._id)}));O(!!i)}}),[j]),Object(c.jsxs)("div",{class:"product text-center product-with-qty",children:[Object(c.jsxs)("figure",{class:"product-media",children:[(null===t||void 0===t?void 0:t.isFree)?Object(c.jsx)(o.b,{to:"/product/free/".concat(null===t||void 0===t?void 0:t._id),children:Object(c.jsx)("img",{src:"http://54.177.7.240"+(null===t||void 0===t?void 0:t.photos[0]),alt:"product",width:"280",height:"315",style:{width:"100%"}})}):Object(c.jsx)(o.b,{to:"/product/".concat(null===t||void 0===t?void 0:t._id),children:Object(c.jsx)("img",{src:"http://54.177.7.240"+(null===t||void 0===t?void 0:t.photos[0]),alt:"product",width:"280",height:"315",style:{width:"100%"}})}),Object(c.jsx)("div",{class:"product-label-group",children:Object(c.jsx)("label",{class:"product-label label-sale",children:"25% Off"})})]}),Object(c.jsxs)("div",{class:"product-details",children:[Object(c.jsx)("h3",{class:"product-name",children:Object(c.jsx)("a",{href:"#",children:null===t||void 0===t?void 0:t.name})}),Object(c.jsxs)("div",{className:"product-price ls-md offer_price_details",children:[Object(c.jsxs)("span",{className:"price",children:["Rs ",null===t||void 0===t?void 0:t.saleAmount]}),Object(c.jsxs)("span",{className:"price line-through",children:["Rs. ",null===t||void 0===t?void 0:t.actualAmount]})]}),Object(c.jsx)("div",{class:"ratings-container",children:Object(c.jsxs)("div",{class:"ratings-full",children:[Object(c.jsx)("span",{class:"ratings",style:{width:"100%"}}),Object(c.jsx)("span",{class:"tooltiptext tooltip-top"})]})}),Object(c.jsx)("div",{class:"product-action",children:(null===d||void 0===d?void 0:d.login)?(null===t||void 0===t?void 0:t.isFree)?"":Object(c.jsxs)("a",{class:"btn-product btn-cart ls-l","data-toggle":"modal","data-target":"#addCartModal",title:"Add to cart",onClick:function(){p||i(Object(l.a)(t._id))},children:[Object(c.jsx)("i",{class:"d-icon-bag"}),Object(c.jsx)("span",{children:"Add to cart"})]}):Object(c.jsxs)(o.b,{to:"/Login",class:"btn-product btn-cart ls-l",children:[" ","Cart"," "]})})]})]},null===t||void 0===t?void 0:t._id)}},501:function(e,t,i){"use strict";t.a=i.p+"static/media/banner_1.995230f9.jpg"},502:function(e,t,i){"use strict";t.a=i.p+"static/media/pro_product_1.e9982c06.jpg"},503:function(e,t,i){"use strict";t.a=i.p+"static/media/pro_product_2.1f3d3bc0.jpg"},504:function(e,t,i){"use strict";t.a=i.p+"static/media/pro_product_3.8f7cbdb9.jpg"},505:function(e,t,i){"use strict";t.a=i.p+"static/media/pro_product_4.22dea4a6.jpg"},516:function(e,t,i){"use strict";t.a=i.p+"static/media/price_tag.98a14534.png"},528:function(e,t,i){},571:function(e,t,i){"use strict";var n=i(5),c=(i(1),i(481)),s=i.n(c);i(501),i.p,i(528),t.a=function(e){var t=e.bannerContent;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("section",{className:"intro-section",children:(null===t||void 0===t?void 0:t.length)>0&&Object(n.jsx)(s.a,{className:"owl-carousel owl-nav-inside owl-theme row owl-nav-fade intr o-slider animation-slider cols-1 gutter-no owl-nav-arrow",margin:20,nav:!0,smartSpeed:500,dots:!1,navContainerClass:"owl-nav",navText:["<img src=https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/back-arrow.png  />","<img src=https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/back-arrow.png />"],responsive:{0:{items:1},768:{items:1},800:{items:1}},autoplay:!0,loop:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,children:function(){if((null===t||void 0===t?void 0:t.length)>0)return Object(n.jsx)(n.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(n.jsx)("div",{className:"intro-slide".concat(t," banner banner-fixed"),children:Object(n.jsx)("figure",{children:Object(n.jsx)("img",{src:"http://54.177.7.240"+(null===e||void 0===e?void 0:e.image),alt:"intro-banner",width:"1903",height:"540","intro-section":!0})})})}))})}()})})})}},610:function(e,t,i){},611:function(e,t,i){},634:function(e,t,i){},668:function(e,t,i){"use strict";i.r(t);var n=i(9),c=i.n(n),s=i(20),o=i(87),l=i(5),a=i(1),r=i(228),d=i.n(r),u=i(48),j=i(15),v=i(36),b=i(60),m=(i(476),i(29)),h=i(144),p=i(478),O=i(571),x=i(481),g=i.n(x),f=(i.p,i.p,i.p,i.p,i(577),i(516),i(497)),_=(i(610),function(e){var t=e.featureProductsContent;Object(j.g)();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container-fluid base-color-bg",children:Object(l.jsxs)("section",{className:"category-section mb-4 mb-lg-6 pb-7",children:[Object(l.jsx)("h2",{className:"title-echo mb-2",children:Object(l.jsx)("span",{children:"Featured product"})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(g.a,{className:"owl-carousel owl-theme row cols-lg-4 cols-2",margin:20,nav:!0,items:1,smartSpeed:500,dots:!1,navContainerClass:"owl-nav",responsive:{0:{items:1},768:{items:3},992:{items:3}},autoplayTimeout:2e3,autoplayHoverPause:!0,children:function(){if((null===t||void 0===t?void 0:t.length)>0)return Object(l.jsx)(l.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(l.jsx)(f.a,{ProductDetails:e},t)}))})}()})})]})})})}),N=(i(147),i(502),i(503),i(504),i(505),i(611),function(e){e.homeContent;var t=e.categorylist,i=Object(a.useRef)(null),n=(Object(u.c)(),Object(u.d)((function(e){return e}))),r=n.user,d=n.cart,j=Object(a.useState)(!1),v=Object(o.a)(j,2),b=(v[0],v[1],r.data&&r.data,Object(a.useState)({})),h=Object(o.a)(b,2),p=h[0],O=h[1],x=Object(a.useState)(!0),_=Object(o.a)(x,2),N=(_[0],_[1]),C=Object(a.useState)(0),E=Object(o.a)(C,2),w=E[0],T=E[1],P=Object(a.useState)(!0),S=Object(o.a)(P,2),R=S[0],A=S[1],y=((null===d||void 0===d?void 0:d.data)&&(null===d||void 0===d||d.data),function(){var e=Object(s.a)(c.a.mark((function e(t,i){var n,s,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.q)(t);case 2:o=e.sent,O(null===o||void 0===o||null===(n=o.data)||void 0===n||null===(s=n.responseData)||void 0===s?void 0:s.Products),N(!0),A(!0),T(i);case 7:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}());return Object(a.useEffect)((function(){var e;y(null===(e=t[0])||void 0===e?void 0:e._id,0)}),[]),Object(a.useEffect)((function(){var e;(null===t||void 0===t?void 0:t.length)>0&&y(null===(e=t[0])||void 0===e?void 0:e._id,0)}),[t]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"arrivals-section need_sec",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title-echo mb-1",children:Object(l.jsx)("span",{children:"What you need? Meet the most Here!"})}),Object(l.jsxs)("p",{children:["From skin to muscles, sleep to energy and fitness to cognition \u2013 Liven nurtures ",Object(l.jsx)("br",{})," the health with essentials naturally sourced."]}),Object(l.jsxs)("div",{className:"tab tab-nav-center",children:[Object(l.jsx)("ul",{className:"nav nav-tabs",children:function(){if((null===t||void 0===t?void 0:t.length)>0){return Object(l.jsx)(l.Fragment,{children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(l.jsx)("li",{className:"nav-item ml-1 mr-1 pt-2 pb-2",ref:i,onClick:function(){return y(e._id,t)},children:Object(l.jsx)("a",{className:"nav-link nav-link-with-img border-rounded ".concat(w==t?"active":""),children:Object(l.jsxs)("h3",{className:"img-cat-title mb-0",children:[Object(l.jsx)("i",{className:"fa fa-home","aria-hidden":"true"})," ",null===e||void 0===e?void 0:e.subCategoryName]})})})}))})}}()}),Object(l.jsx)("div",{className:"tab-content",children:Object(l.jsxs)("div",{className:"tab-pane pt-4 ".concat(R?"active":""),id:"fruits",children:[(null===p||void 0===p?void 0:p.length)>0&&Object(l.jsx)(g.a,{className:"owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2",margin:20,nav:!0,smartSpeed:500,dots:!1,navContainerClass:"owl-nav",responsive:{0:{items:1},768:{items:3},992:{items:3}},autoplay:!0,children:Object(l.jsx)(l.Fragment,{children:(null===p||void 0===p?void 0:p.length)>0&&(null===p||void 0===p?void 0:p.map((function(e,t){return Object(l.jsx)(f.a,{ProductDetails:e},t)})))})}),(null===p||void 0===p?void 0:p.length)>0?"":"No found Product"]})})]})]})})})}),C=(i.p,function(e){var t,i,n,c,s,o,a,r,d,u,j,v,b,m,h,p=e.homeContent;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"product_banner_section_2 mb-10",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-sm-12",children:Object(l.jsx)("h2",{className:"title-echo mb-1",children:Object(l.jsx)("span",{children:null===p||void 0===p||null===(t=p.section)||void 0===t||null===(i=t.first)||void 0===i?void 0:i.title})})})}),Object(l.jsxs)("div",{className:"row product_banner_2",children:[Object(l.jsxs)("div",{className:"col-sm-6",children:[Object(l.jsx)("h1",{children:null===p||void 0===p||null===(n=p.section)||void 0===n||null===(c=n.first)||void 0===c?void 0:c.header}),Object(l.jsx)("p",{children:null===p||void 0===p||null===(s=p.section)||void 0===s||null===(o=s.first)||void 0===o?void 0:o.description}),Object(l.jsx)("div",{className:"row",children:(null===p||void 0===p||null===(a=p.section)||void 0===a||null===(r=a.first)||void 0===r?void 0:r.list)&&(null===p||void 0===p||null===(d=p.section)||void 0===d||null===(u=d.first)||void 0===u||null===(j=u.list)||void 0===j?void 0:j.map((function(e){return Object(l.jsx)("div",{className:"col-sm-6",children:Object(l.jsxs)("div",{className:"icon-box icon-box-side",children:[Object(l.jsx)("i",{className:"icon-box-icon d-icon-truck"}),Object(l.jsx)("div",{className:"icon-box-content",children:Object(l.jsx)("h4",{className:"icon-box-title text-capitalize ls-normal",children:e})})]})})})))})]}),Object(l.jsx)("div",{className:"col-sm-6 text-center",children:(null===p||void 0===p||null===(v=p.section)||void 0===v||null===(b=v.first)||void 0===b?void 0:b.image)&&Object(l.jsx)("img",{src:"http://54.177.7.240".concat(null===p||void 0===p||null===(m=p.section)||void 0===m||null===(h=m.first)||void 0===h?void 0:h.image),alt:"First Banner",className:"nurtures_images"})})]})]})})})}),E=(i.p,i.p+"static/media/nutri_leaf.b99de212.png"),w=function(e){var t,i,n,c,s,o,a,r,d,u,j,v,b=e.homeContent;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"",id:"weak_strongest",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-sm-12",children:Object(l.jsx)("h2",{className:"title-echo mb-1",children:Object(l.jsx)("span",{children:null===b||void 0===b||null===(t=b.section)||void 0===t||null===(i=t.second)||void 0===i?void 0:i.title})})})}),Object(l.jsxs)("div",{className:"product_banner_3",children:[Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"col-sm-12",children:Object(l.jsx)("h1",{className:"mb-10",children:null===b||void 0===b||null===(n=b.section)||void 0===n||null===(c=n.second)||void 0===c?void 0:c.header})})}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-sm-8",children:(null===b||void 0===b||null===(s=b.section)||void 0===s||null===(o=s.second)||void 0===o?void 0:o.list)&&(null===b||void 0===b||null===(a=b.section)||void 0===a||null===(r=a.second)||void 0===r||null===(d=r.list)||void 0===d?void 0:d.map((function(e){return Object(l.jsx)("p",{children:e})})))}),Object(l.jsx)("div",{className:"col-sm-4",children:(null===b||void 0===b||null===(u=b.section)||void 0===u?void 0:u.second)&&Object(l.jsx)("img",{src:"http://54.177.7.240".concat(null===b||void 0===b||null===(j=b.section)||void 0===j||null===(v=j.second)||void 0===v?void 0:v.image),className:"weak_strongest_img_absolute",alt:"First Banner"})})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-sm-4 text-center",children:Object(l.jsx)("img",{src:E,className:"weak_strongest_img"})}),Object(l.jsxs)("div",{className:"col-sm-8",children:[Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Authentic standards"}),Object(l.jsx)("li",{children:"Ensure Viability"}),Object(l.jsx)("li",{children:"Intact Ingredient properties"})]}),Object(l.jsx)("p",{}),Object(l.jsx)("p",{children:"We clear the path of GOAL to offer delicate doses, Hope, Research-based nutrients and veracious inputs that can put you on the right track of leading healthier and pleasurable life."})]})]})]})]})})})},T=(i.p,i.p,i.p,i.p,i.p,function(e){var t,i,n,c,s,o,a,r=e.homeContent;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"new_our_idea pt-10 pb-10",children:Object(l.jsxs)("div",{className:"container p-0",children:[Object(l.jsx)("h2",{className:"title-echo mb-1",children:Object(l.jsx)("span",{children:null===r||void 0===r||null===(t=r.section)||void 0===t||null===(i=t.third)||void 0===i?void 0:i.title})}),Object(l.jsx)("div",{className:"row p-20",children:(null===r||void 0===r||null===(n=r.section)||void 0===n||null===(c=n.third)||void 0===c?void 0:c.imageList)&&(null===r||void 0===r||null===(s=r.section)||void 0===s||null===(o=s.third)||void 0===o||null===(a=o.imageList)||void 0===a?void 0:a.map((function(e){return Object(l.jsxs)("div",{className:"col-xl-3 col-sm-6 col-12 category",children:[Object(l.jsx)("a",{href:"product.html",children:Object(l.jsx)("figure",{className:"category-media",children:(null===e||void 0===e?void 0:e.image)&&Object(l.jsx)("img",{src:"http://54.177.7.240".concat(null===e||void 0===e?void 0:e.image),alt:"category",className:"category_media_image"})})}),Object(l.jsx)("div",{className:"category-content",children:Object(l.jsx)("h4",{className:"category-name mb-1 mt-5",children:Object(l.jsx)("a",{href:"#",children:null===e||void 0===e?void 0:e.text})})}),Object(l.jsx)("div",{className:"pro_before_img"})]})})))})]})})})}),P=(i.p,function(e){var t,i,n,c,s,o,a,r,d,u,j,v,b,m=e.homeContent;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"product_banner_section_2 pb-6",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row product_banner_2",children:[Object(l.jsx)("div",{className:"col-sm-6 text-center",children:(null===m||void 0===m||null===(t=m.section)||void 0===t||null===(i=t.fourth)||void 0===i?void 0:i.image)&&Object(l.jsx)("img",{src:"http://54.177.7.240".concat(null===m||void 0===m||null===(n=m.section)||void 0===n||null===(c=n.fourth)||void 0===c?void 0:c.image),className:"best_img"})}),Object(l.jsxs)("div",{className:"col-sm-6",children:[Object(l.jsx)("h1",{children:null===m||void 0===m||null===(s=m.section)||void 0===s||null===(o=s.fourth)||void 0===o?void 0:o.header}),Object(l.jsx)("h3",{className:"py-2",children:null===m||void 0===m||null===(a=m.section)||void 0===a||null===(r=a.fourth)||void 0===r?void 0:r.description}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"row",children:(null===m||void 0===m||null===(d=m.section)||void 0===d||null===(u=d.fourth)||void 0===u?void 0:u.list)&&(null===m||void 0===m||null===(j=m.section)||void 0===j||null===(v=j.fourth)||void 0===v||null===(b=v.list)||void 0===b?void 0:b.map((function(e){return Object(l.jsx)("div",{className:"col-sm-6",children:Object(l.jsxs)("div",{className:"icon-box icon-box-side",children:[Object(l.jsx)("i",{className:"icon-box-icon d-icon-truck"}),Object(l.jsx)("div",{className:"icon-box-content",children:Object(l.jsx)("h4",{className:"icon-box-title text-capitalize ls-normal",children:e})})]})})})))})]})]})})})})}),S=(i.p,i.p,i.p,i.p,i.p,function(e){var t,i,n,c,s,o,a,r,d,u=e.homeContent;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"instagram-section pt-2 pt-md-7 pt-10 pb-8","data-animation-options":"{'delay': '.2s', 'duration': '.5s' }",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title-echo mb-1",children:Object(l.jsx)("span",{children:null===u||void 0===u||null===(t=u.section)||void 0===t||null===(i=t.fifth)||void 0===i?void 0:i.title})}),Object(l.jsx)("p",{children:null===u||void 0===u||null===(n=u.section)||void 0===n||null===(c=n.fifth)||void 0===c?void 0:c.description}),Object(l.jsx)(g.a,{className:"owl-carousel owl-theme row cols-lg-4 cols-md-3 cols-2",margin:20,nav:!0,smartSpeed:500,dots:!1,navContainerClass:"owl-nav",responsive:{0:{items:1},768:{items:3},992:{items:5}},autoplay:!0,loop:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,children:(null===u||void 0===u||null===(s=u.section)||void 0===s||null===(o=s.fifth)||void 0===o?void 0:o.imageList)&&(null===u||void 0===u||null===(a=u.section)||void 0===a||null===(r=a.fifth)||void 0===r||null===(d=r.imageList)||void 0===d?void 0:d.map((function(e){return Object(l.jsx)("figure",{className:"instagram",children:Object(l.jsxs)("a",{href:"product.html",children:[Object(l.jsx)("img",{src:"http://54.177.7.240".concat(e.image),alt:"Instagram",width:"220",height:"220"}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{className:"categories_title_name",children:Object(l.jsx)("h5",{children:e.text})})]})})})))})]})})})}),R=function(e){var t,i,n,c,s=e.homeContent;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"team_sec pb-5 pt-5","data-animation-options":"{'name': 'fadeInUpShorter','duration': '1.2s', 'delay': '.2s' }",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title-echo",children:Object(l.jsx)("span",{children:null===s||void 0===s||null===(t=s.section)||void 0===t||null===(i=t.sixth)||void 0===i?void 0:i.title})}),Object(l.jsx)("p",{children:null===s||void 0===s||null===(n=s.section)||void 0===n||null===(c=n.sixth)||void 0===c?void 0:c.description})]})})})},A=(i.p,i.p,i(612),i(634),function(e){var t,i,n,c,s,o=e.homeContent;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"banner-section row gutter-no",children:(null===o||void 0===o||null===(t=o.section)||void 0===t||null===(i=t.sixth)||void 0===i?void 0:i.imageList)&&(null===o||void 0===o||null===(n=o.section)||void 0===n||null===(c=n.sixth)||void 0===c||null===(s=c.imageList)||void 0===s?void 0:s.map((function(e){return Object(l.jsx)("div",{className:"col-xl-2 col-sm-6 col-12",children:Object(l.jsxs)("div",{className:"banner1 banner banner-fixed overlay-zoom",children:[Object(l.jsx)("figure",{children:Object(l.jsx)("video",{className:"card_video__1z3he",width:"auto",height:"auto",autoPlay:!0,muted:!0,loop:!0,style:{width:"100%"},children:Object(l.jsx)("source",{src:"http://54.177.7.240"+(null===e||void 0===e?void 0:e.image),type:"video/mp4"})})}),Object(l.jsxs)("div",{className:"category-content y-50 x-50 w-100 pl-2 pr-2 pb-1 p-absolute appear-animate",children:[Object(l.jsx)("h4",{className:"banner-subtitle mb-0 font-weight-bold text-white text-uppercase",children:null===e||void 0===e?void 0:e.text}),Object(l.jsx)("a",{href:"#",className:"btn btn-md-ellipse btn-ellipse btn-solid btn-primary icon-arrow-right",children:Object(l.jsx)("i",{className:"fa fa-play","aria-hidden":"true"})})]})]})})})))})})}),y=i(479);t.default=function(){var e=Object(j.i)().url,t=Object(j.g)(),i=Object(u.c)(),n=Object(h.a)(),r=n.get("fsz"),x=n.get("token"),g=n.get("_ga"),f=Object(a.useState)({}),E=Object(o.a)(f,2),L=E[0],F=E[1],k=Object(a.useState)([]),D=Object(o.a)(k,2),U=D[0],H=D[1],I=function(){var e=Object(s.a)(c.a.mark((function e(){var t,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.s)();case 3:i=e.sent,F(null===i||void 0===i||null===(t=i.data)||void 0===t?void 0:t.responseData),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(s.a)(c.a.mark((function e(){var t,i,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.r)();case 3:n=e.sent,H(null===n||void 0===n||null===(t=n.data)||void 0===t||null===(i=t.responseData)||void 0===i?void 0:i.subCategories),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){r&&(sessionStorage.setItem("fsz",r),Object(v.d)("source",r)),x&&(Object(v.c)(x),t.replace(e),i(Object(b.a)(x))),I(),W(),g&&t.replace(e)}),[]),Object(a.useEffect)((function(){"enabled"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://18.144.69.183/"}).REACT_APP_MARKETING_SCRIPT&&(d.a.init(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://18.144.69.183/"}).REACT_APP_META_PIXEL_ID),d.a.pageView())}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p.a,{title:"Most Trusted NFT Marketplace To Trade Cricket NFTs",description:"Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!",image:"https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"}),Object(l.jsx)("main",{className:"main home",children:Object(l.jsxs)("div",{className:"page-content",children:[Object(l.jsx)(O.a,{bannerContent:null===L||void 0===L?void 0:L.banner}),Object(l.jsx)(_,{featureProductsContent:null===L||void 0===L?void 0:L.featureProducts}),Object(l.jsx)(N,{homeContent:L,categorylist:U}),Object(l.jsx)(C,{homeContent:L}),Object(l.jsx)(w,{homeContent:L}),Object(l.jsx)(T,{homeContent:L}),Object(l.jsx)(P,{homeContent:L}),Object(l.jsx)(S,{homeContent:L}),Object(l.jsx)(R,{homeContent:L}),Object(l.jsx)(A,{homeContent:L}),Object(l.jsx)(y.a,{})]})})]})}}}]);
//# sourceMappingURL=10.ca4bdb8c.chunk.js.map