(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[26],{563:function(t,e,n){},564:function(t,e,n){},568:function(t,e,n){"use strict";var c=n(147),a=n(572),i=n(90),s=n(148);var r=n(1),o=n(86),d=function(){var t=Object(r.useState)(0),e=Object(o.a)(t,2),n=e[0],c=e[1];return Object(r.useEffect)((function(){var t=function(){var t=parseInt(window.pageYOffset/(document.body.offsetHeight-window.innerHeight)*100);c(t)};return window.addEventListener("scroll",t),t(),function(){return window.removeEventListener("scroll",t)}}),[]),n},l=(n(563),n(4)),j=function(t){var e=t.trigger,n=void 0===e?null:e,c=d(),a="start";return n?a=c>n?"show":"hide":(c>10&&(a="1"),c>20&&(a="2"),c>30&&(a="3"),c>40&&(a="4"),c>50&&(a="5"),c>70&&(a="end")),Object(l.jsx)("div",{className:"tablet ".concat(a),children:Object(l.jsx)("span",{className:a?"t-".concat(a):""})})},u=(n(564),function(t){var e=t.data,n=void 0===e?{}:e,c=t.variant,a=void 0===c?"content":c,i=t.className,s=void 0===i?"":i;return Object(l.jsxs)("div",{className:"".concat(a," ").concat(s).trim(),children:[(null===n||void 0===n?void 0:n.title)&&("banner"===a?Object(l.jsx)("h1",{children:"".concat(null===n||void 0===n?void 0:n.title)}):Object(l.jsx)("h4",{children:"".concat(null===n||void 0===n?void 0:n.title)})),(null===n||void 0===n?void 0:n.description)&&Object(l.jsx)("p",{children:"".concat(null===n||void 0===n?void 0:n.description)}),(null===n||void 0===n?void 0:n.image)&&Object(l.jsx)("img",{src:"https://admin.livenscience.com".concat(null===n||void 0===n?void 0:n.image)})]})});e.a=function(t){var e,n=t.data,r=void 0===n?{}:n,o=r.bannerImage,d=void 0===o?null:o,v=r.sectionArray,b=(e=void 0===v?[]:v,Object(c.a)(e)||Object(a.a)(e)||Object(i.a)(e)||Object(s.a)()),O=b[0],f=b.slice(1);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsxs)("section",{className:"aboutus",children:[Object(l.jsx)("div",{className:"banner-block",children:Object(l.jsx)(u,{variant:"banner",data:{image:d}})}),Object(l.jsxs)("div",{className:"content-block",children:[Object(l.jsx)(u,{variant:"content-with-bg",data:O}),f&&f.map((function(t,e){return Object(l.jsx)(u,{variant:"content",data:t},e)}))]}),Object(l.jsx)("div",{className:"position-relative w-100",style:{height:"100px"},children:Object(l.jsx)(j,{trigger:70})})]})]})}},709:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n(20),i=n(86),s=n(1),r=n(27),o=n(459),d=n(568),l=n(460),j=n(4);e.default=function(){var t=Object(s.useState)(null),e=Object(i.a)(t,2),n=e[0],u=e[1],v=function(){var t=Object(a.a)(Object(c.a)().mark((function t(){var e,n,a;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(r.h)();case 2:200===(a=t.sent).status&&null!==a&&void 0!==a&&null!==(e=a.data)&&void 0!==e&&e.responseData&&u((null===a||void 0===a||null===(n=a.data)||void 0===n?void 0:n.responseData)||{});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){v()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o.a,{}),n?Object(j.jsx)(d.a,{data:n}):Object(j.jsx)(j.Fragment,{children:"Loading"}),Object(j.jsx)(l.a,{})]})}}}]);
//# sourceMappingURL=26.b98cfc75.chunk.js.map