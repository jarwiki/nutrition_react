(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[3],{104:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var o=n(68),a=n(3),r=n(17),i={data:{},login:!1,loading:!1,error:!1,errorData:{},marketLive:!1},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0,n=e.payload,o=e.type;return o===r.e&&(t=Object(a.a)(Object(a.a)({},t),{},{loading:!0})),o===r.f&&(t=Object(a.a)(Object(a.a)({},t),{},{loading:!1,login:!0,data:n})),o===r.c&&(t=Object(a.a)(Object(a.a)({},t),{},{loading:!1,error:!0,errorData:n})),o===r.g&&(t=Object(a.a)(Object(a.a)({},t),{},{data:{},login:!1,loading:!1,error:!1,errorData:{}})),o===r.d&&(t=Object(a.a)(Object(a.a)({},t),{},{loading:!1,login:!1})),o===r.h&&(t=Object(a.a)(Object(a.a)({},t),{},{data:{user:Object(a.a)(Object(a.a)({},t.data.user),{},{balance:n.balance,locked:n.locked})}})),o===r.a&&(t=Object(a.a)(Object(a.a)({},t),{},{marketLive:!0})),o===r.b&&(t=Object(a.a)(Object(a.a)({},t),{},{marketLive:!1})),t},u=n(107),d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",e=arguments.length>1?arguments[1]:void 0;return e.type===u.a&&(t=e.payload),t},l=n(23),s={data:{},checkout:!1,loading:!1,error:!1,errorData:{}},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0,n=e.payload,o=e.type;return o===l.b&&(t=Object(a.a)(Object(a.a)({},t),{},{loading:!0})),o===l.c&&(t=Object(a.a)(Object(a.a)({},t),{},{loading:!1,data:Object(a.a)(Object(a.a)({},t.data),{},{total_count:n.count})})),o===l.a&&(t=Object(a.a)(Object(a.a)({},t),{},{loading:!1,error:!0,errorData:n})),o===l.m&&(t=Object(a.a)(Object(a.a)({},t),{},{loading:!0})),o===l.n&&(t=Object(a.a)(Object(a.a)({},t),{},{loading:!1,data:Object(a.a)(Object(a.a)({},t.data),{},{total_count:n.count})})),o===l.l&&(t=Object(a.a)(Object(a.a)({},t),{},{loading:!1,error:!0,errorData:n})),o===l.g&&(t=Object(a.a)(Object(a.a)({},t),{},{loading:!0})),o===l.h&&(t=Object(a.a)(Object(a.a)({},t),{},{loading:!1,data:n})),o===l.f&&(t=Object(a.a)(Object(a.a)({},t),{},{loading:!1,error:!0,errorData:n})),o===l.j&&(t=Object(a.a)(Object(a.a)({},t),{},{loading:!0})),o===l.k&&(t=Object(a.a)(Object(a.a)({},t),{},{loading:!1,data:n})),o===l.i&&(t=Object(a.a)(Object(a.a)({},t),{},{loading:!1,error:!0,errorData:n})),o===l.e&&(t=Object(a.a)(Object(a.a)({},t),{},{data:{},loading:!1,error:!1,errorData:{}})),o===l.d&&(t=Object(a.a)(Object(a.a)({},t),{},{checkout:n})),t},b=Object(o.combineReducers)({lang:d,user:c,cart:f}),O=n(108),p=n(222),j=n(223),v=Object(o.createStore)(b,Object(O.load)(),Object(p.composeWithDevTools)(Object(o.applyMiddleware)(j.a,Object(O.save)())))},107:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a}));var o="CHANGE_LANG",a=function(t){return function(e){e({type:o,payload:t})}}},143:function(t,e,n){"use strict";var o=n(1),a=n.n(o),r=n(13);e.a=function(){var t=Object(r.h)().search;return a.a.useMemo((function(){return new URLSearchParams(t)}),[t])}},17:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"h",(function(){return i})),n.d(e,"d",(function(){return c})),n.d(e,"g",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return l})),n.d(e,"l",(function(){return s})),n.d(e,"m",(function(){return f})),n.d(e,"k",(function(){return b})),n.d(e,"o",(function(){return O})),n.d(e,"p",(function(){return p})),n.d(e,"n",(function(){return j})),n.d(e,"i",(function(){return v})),n.d(e,"j",(function(){return m}));var o="USER_LOGIN_REQUEST",a="USER_LOGIN_SUCCESS",r="USER_LOGIN_FAILURE",i="USER_WALLET_UPDATE",c="USER_LOGIN_OTP",u="USER_LOGOUT",d="MARKET_LIVE",l="MARKET_LIVE_OFF",s=function(){return{type:o}},f=function(t){return{type:a,payload:t}},b=function(t){return{type:r,payload:t}},O=function(){return{type:u}},p=function(t){return{type:i,payload:t}},j=function(t){return{type:c}},v=function(){return{type:d}},m=function(){return{type:l}}},225:function(t){t.exports=JSON.parse('{"abnft":"AB NFT","signin":"Sign In","signup":"Sign Up","signout":"Sign Out","register":"Register","accountsettings":"Account Settings","profileinformation":"Profile Information","verify":"Verify","copytoclipboard":"Copy to Clipboard","mobilenumber":"Mobile Number","copied":"Copied","balance":"Balance","dashboard":"Dashboard","removecard":"Remove Card","editprofile":"Edit Profile","paymentmethod":"Payment Method","sellersettings":"Seller Settings","notifications":"Notifications","security":"Security","otp":"OTP","name":"Name","bio":"Bio","username":"Username","validate":"Validate","emailaddress":"Email Address","updateprofile":"Update Profile","confirmpassword":"Confirm Password","validateyourprofile":"Validate your profile","mobile":"Mobile","validatedesc":" Validate your unique identity by linking your phone number with your account. Once your profile is validated, you will be approved to participate in all drops that require profile validation to purchase.","password":"Password","sendemail":"Send Email","dontreceivecode":"Don\'t receive code?","resend":"Click here to resend OTP","sociallink":"Social Link","logintitle":"Login And Explore In My World","forgotpassword":"Forgot Password","donthaveaccount":"Don\'t have an account?","haveaccount":"Already have an account?","displayname":"Display Name","logindesc":"Explore the world around you with us with comfortable and quality services, let\'s join immediately and get the benefits","firstname":"First Name","lastname":"Last Name"}')},226:function(t){t.exports=JSON.parse('{"abnft":"AB NFT","signin":"\u0932\u0949\u0917 \u0907\u0928 \u0915\u0930\u0947\u0902","signup":"\u0938\u093e\u0907\u0928 \u0905\u092a \u0915\u0930\u0947\u0902","signout":"\u0938\u093e\u0907\u0928 \u0906\u0909\u091f","verify":"\u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924 \u0915\u0930\u0947\u0902","otp":"OTP","name":"\u0928\u093e\u092e","bio":"\u091c\u0948\u0935","username":"\u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e \u0928\u093e\u092e","copytoclipboard":"\u0915\u094d\u0932\u093f\u092a\u092c\u094b\u0930\u094d\u0921 \u092a\u0930 \u0915\u0949\u092a\u0940 \u0915\u0930\u0947\u0902","removecard":"\u0915\u093e\u0930\u094d\u0921 \u0928\u093f\u0915\u093e\u0932\u0947\u0902","mobilenumber":"\u092e\u094b\u092c\u093e\u0907\u0932 \u0928\u0902\u092c\u0930","copied":"\u0915\u0949\u092a\u0940 \u0915\u093f\u092f\u093e \u0917\u092f\u093e","validate":"\u092e\u093e\u0928\u094d\u092f","emailaddress":"\u0908\u092e\u0947\u0932 \u092a\u0924\u093e","updateprofile":"\u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932 \u0915\u094b \u0928\u0935\u0940\u0928\u0924\u092e \u092c\u0928\u093e\u0913","confirmpassword":"\u092a\u093e\u0938\u0935\u0930\u094d\u0921 \u0915\u0940 \u092a\u0941\u0937\u094d\u091f\u093f \u0915\u0940\u091c\u093f\u092f\u0947","validateyourprofile":"\u0905\u092a\u0928\u0940 \u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932 \u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924 \u0915\u0930\u0947\u0902","mobile":"\u092e\u094b\u092c\u093e\u0907\u0932","validatedesc":"\u0905\u092a\u0928\u0947 \u092b\u093c\u094b\u0928 \u0928\u0902\u092c\u0930 \u0915\u094b \u0905\u092a\u0928\u0947 \u0916\u093e\u0924\u0947 \u0938\u0947 \u091c\u094b\u0921\u093c\u0915\u0930 \u0905\u092a\u0928\u0940 \u0935\u093f\u0936\u093f\u0937\u094d\u091f \u092a\u0939\u091a\u093e\u0928 \u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924 \u0915\u0930\u0947\u0902\u0964 \u090f\u0915 \u092c\u093e\u0930 \u0906\u092a\u0915\u0940 \u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932 \u092e\u093e\u0928\u094d\u092f \u0939\u094b \u091c\u093e\u0928\u0947 \u0915\u0947 \u092c\u093e\u0926, \u0906\u092a\u0915\u094b \u0909\u0928 \u0938\u092d\u0940 \u0921\u094d\u0930\u0949\u092a\u094d\u0938 \u092e\u0947\u0902 \u092d\u093e\u0917 \u0932\u0947\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0938\u094d\u0935\u0940\u0915\u0943\u0924 \u0915\u093f\u092f\u093e \u091c\u093e\u090f\u0917\u093e, \u091c\u093f\u0928\u094d\u0939\u0947\u0902 \u0916\u0930\u0940\u0926\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932 \u0938\u0924\u094d\u092f\u093e\u092a\u0928 \u0915\u0940 \u0906\u0935\u0936\u094d\u092f\u0915\u0924\u093e \u0939\u094b\u0924\u0940 \u0939\u0948\u0964","password":"\u092a\u093e\u0938\u0935\u0930\u094d\u0921","sendemail":"\u0908\u092e\u0947\u0932 \u092d\u0947\u091c\u0947\u0902","dontreceivecode":"\u0915\u094b\u0921 \u0928\u0939\u0940\u0902 \u092e\u093f\u0932\u093e?","resend":"\u092b\u093f\u0930 \u0938\u0947 \u092d\u0947\u091c\u0947\u0902?","balance":"\u0938\u0902\u0924\u0941\u0932\u0928","sociallink":"\u0938\u093e\u092e\u093e\u091c\u093f\u0915 \u0932\u093f\u0902\u0915","logintitle":"\u0932\u0949\u0917 \u0907\u0928 \u0915\u0930\u0947\u0902 \u0914\u0930 \u092e\u0947\u0930\u0940 \u0926\u0941\u0928\u093f\u092f\u093e \u092e\u0947\u0902 \u090f\u0915\u094d\u0938\u092a\u094d\u0932\u094b\u0930 \u0915\u0930\u0947\u0902","forgotpassword":"\u092a\u093e\u0938\u0935\u0930\u094d\u0921 \u092d\u0942\u0932 \u0917\u090f","donthaveaccount":"\u0916\u093e\u0924\u093e \u0928\u0939\u0940\u0902 \u0939\u0948?","haveaccount":"\u0915\u094d\u092f\u093e \u0906\u092a\u0915\u0947 \u092a\u093e\u0938 \u092a\u0939\u0932\u0947 \u0938\u0947 \u090f\u0915 \u0916\u093e\u0924\u093e \u092e\u094c\u091c\u0942\u0926 \u0939\u0948?","displayname":"\u092a\u094d\u0930\u0926\u0930\u094d\u0936\u093f\u0924 \u0939\u094b\u0928\u0947 \u0935\u093e\u0932\u093e \u0928\u093e\u092e","dashboard":"\u0921\u0948\u0936\u092c\u094b\u0930\u094d\u0921","editprofile":"\u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932 \u0938\u0902\u092a\u093e\u0926\u093f\u0924 \u0915\u0930\u0947\u0902","paymentmethod":"\u092d\u0941\u0917\u0924\u093e\u0928 \u0935\u093f\u0927\u093f","sellersettings":"\u0935\u093f\u0915\u094d\u0930\u0947\u0924\u093e \u0938\u0947\u091f\u093f\u0902\u0917\u094d\u0938","notifications":"\u0938\u0942\u091a\u0928\u093e\u090f\u0902","security":"\u0938\u0941\u0930\u0915\u094d\u0937\u093e","logindesc":"\u0906\u0930\u093e\u092e\u0926\u093e\u092f\u0915 \u0914\u0930 \u0917\u0941\u0923\u0935\u0924\u094d\u0924\u093e\u092a\u0942\u0930\u094d\u0923 \u0938\u0947\u0935\u093e\u0913\u0902 \u0915\u0947 \u0938\u093e\u0925 \u0939\u092e\u093e\u0930\u0947 \u0938\u093e\u0925 \u0905\u092a\u0928\u0947 \u0906\u0938-\u092a\u093e\u0938 \u0915\u0940 \u0926\u0941\u0928\u093f\u092f\u093e \u0915\u093e \u0905\u0928\u094d\u0935\u0947\u0937\u0923 \u0915\u0930\u0947\u0902, \u0906\u0907\u090f \u0924\u0941\u0930\u0902\u0924 \u0936\u093e\u092e\u093f\u0932 \u0939\u094b\u0902 \u0914\u0930 \u0932\u093e\u092d \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0947\u0902"}')},23:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"m",(function(){return i})),n.d(e,"n",(function(){return c})),n.d(e,"l",(function(){return u})),n.d(e,"g",(function(){return d})),n.d(e,"h",(function(){return l})),n.d(e,"f",(function(){return s})),n.d(e,"j",(function(){return f})),n.d(e,"k",(function(){return b})),n.d(e,"i",(function(){return O})),n.d(e,"e",(function(){return p})),n.d(e,"d",(function(){return j})),n.d(e,"p",(function(){return v})),n.d(e,"q",(function(){return m})),n.d(e,"o",(function(){return g})),n.d(e,"z",(function(){return _})),n.d(e,"A",(function(){return h})),n.d(e,"y",(function(){return E})),n.d(e,"t",(function(){return y})),n.d(e,"u",(function(){return T})),n.d(e,"s",(function(){return S})),n.d(e,"w",(function(){return R})),n.d(e,"x",(function(){return A})),n.d(e,"v",(function(){return C})),n.d(e,"r",(function(){return P}));var o="ADD_TO_CART_REQUEST",a="ADD_TO_CART_SUCCESS",r="ADD_TO_CART_FAILURE",i="REMOVE_FROM_CART_REQUEST",c="REMOVE_FROM_CART_SUCCESS",u="REMOVE_FROM_CART_FAILURE",d="GET_CART_LIST_REQUEST",l="GET_CART_LIST_SUCCESS",s="GET_CART_LIST_FAILURE",f="PROCEED_CHECKOUT_REQUEST",b="PROCEED_CHECKOUT_SUCCESS",O="PROCEED_CHECKOUT_FAILURE",p="CLEAR_CART",j="CHECKOUT_EVENT",v=function(){return{type:o}},m=function(t){return{type:a,payload:t}},g=function(t){return{type:r,payload:t}},_=function(){return{type:i}},h=function(t){return{type:c,payload:t}},E=function(t){return{type:u,payload:t}},y=function(){return{type:d}},T=function(t){return{type:l,payload:t}},S=function(t){return{type:s,payload:t}},R=function(){return{type:f}},A=function(t){return{type:b,payload:t}},C=function(t){return{type:O,payload:t}},P=function(t){return{type:j,payload:t}}},34:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return d}));var o=n(69),a=n.n(o),r="bl_base_user_token",i=function(t,e){var n=new Date;n.setDate(Date.now()+12096e5);a.a.save(t,e,{path:"/",expires:n,maxAge:31536e3,domain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_COOKIE_DOMAIN_NAME,secure:!0})},c=function(t){var e=new Date;e.setDate(Date.now()+12096e5);a.a.save(r,t,{path:"/",expires:e,maxAge:31536e3,domain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_COOKIE_DOMAIN_NAME,secure:!0})},u=function(){return a.a.load(r)},d=function(){a.a.remove(r,{path:"/",domain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_COOKIE_DOMAIN_NAME})}},466:function(t,e,n){},467:function(t,e,n){},468:function(t,e,n){},469:function(t,e,n){},470:function(t,e,n){},471:function(t,e,n){"use strict";n.r(e);var o=n(5),a=(n(230),n(240),n(1)),r=n(61),i=n.n(r),c=n(146),u=n(47),d=n(3),l=n(142),s=n(211),f=(n(18),n(40),n(86)),b=n(109),O=n(13),p=n(144),j=n(107),v=n(106),m=n(34),g=(n(56),n(60)),_=n(143),h=n(224),E=n.n(h),y=(n.p,n(466),n(467),n(468),n(469),Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(8),n.e(1),n.e(11)]).then(n.bind(null,653))}))),T=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,638))})),S=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,654))})),R=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(18)]).then(n.bind(null,661))})),A=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(13)]).then(n.bind(null,650))})),C=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(17)]).then(n.bind(null,657))})),P=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(15)]).then(n.bind(null,658))})),x=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,656))})),D=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(14)]).then(n.bind(null,662))})),L=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(19)]).then(n.bind(null,664))})),U=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(20)]).then(n.bind(null,651))})),N=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(12),n.e(1),n.e(9)]).then(n.bind(null,660))})),k=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(16),n.e(1),n.e(10)]).then(n.bind(null,663))}));var w=function(){var t=Object(O.g)(),e=Object(O.h)().pathname,n=Object(u.c)(),r=Object(_.a)(),i=r.get("fsz"),c=r.get("token"),d=r.get("aid");return Object(a.useEffect)((function(){if(i&&(sessionStorage.setItem("fsz",i),Object(m.d)("source",i)),c&&(Object(m.c)(c),t.replace(e),n(Object(g.a)(c))),d){var o,a=Object(s.a)(r.entries());try{for(a.s();!(o=a.n()).done;){var u=Object(f.a)(o.value,2),l=u[0],b=u[1];Object(m.d)(l,b)}}catch(O){a.e(O)}finally{a.f()}}}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(O.d,{children:[Object(o.jsx)(O.b,{exact:!0,path:"/",component:y}),Object(o.jsx)(O.b,{path:"/category/:categoryid?",component:T}),Object(o.jsx)(O.b,{exact:!0,path:"/product",component:S}),Object(o.jsx)(O.b,{exact:!0,path:"/about",component:A}),Object(o.jsx)(O.b,{exact:!0,path:"/cart",component:R}),Object(o.jsx)(O.b,{exact:!0,path:"/blog",component:C}),Object(o.jsx)(O.b,{exact:!0,path:"/blogpost",component:P}),Object(o.jsx)(O.b,{exact:!0,path:"/freetrial",component:x}),Object(o.jsx)(O.b,{exact:!0,path:"/contact",component:D}),Object(o.jsx)(O.b,{exact:!0,path:"/privacy",component:L}),Object(o.jsx)(O.b,{exact:!0,path:"/terms",component:U}),Object(o.jsx)(O.b,{exact:!0,path:"/login",component:N}),Object(o.jsx)(F,{exact:!0,path:"/accounts",component:k}),Object(o.jsx)(O.b,{exact:!0,component:function(){return Object(o.jsx)(O.a,{to:"/"})}})]})})},I=Object(u.b)(null,(function(t){return{change_lang:function(e){t(Object(j.b)(e))}}}))((function(t){var e="Jul 13, 2022 11:30:00",n=Object(a.useState)(),r=Object(f.a)(n,2),i=(r[0],r[1],Object(u.c)()),c=Object(a.useState)(!0),d=Object(f.a)(c,2),l=d[0],s=d[1],j=Object(u.d)((function(t){return t})),_=j.lang,h=j.user,y=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=(new Date).getTimezoneOffset(),o=new Date(e);o.setMinutes(o.getMinutes()-n);var a=new Date;t&&a.setSeconds(a.getSeconds()+2)};return Object(a.useEffect)((function(){y(!1)}),[]),Object(a.useEffect)((function(){t.change_lang(_),Object(v.setLanguage)(_),E.a.init("fb37da042db19dafef9b171500d64106",{debug:!0})}),[t,_]),window.setFiredeskdetails=function(){setTimeout((function(){var t;if(null===(t=h.data)||void 0===t?void 0:t.user){var e,n,o,a;if(document.getElementById("chat-fc-name"))document.getElementById("chat-fc-name").value=(null===(e=h.data)||void 0===e?void 0:e.user.first_name)+" "+(null===(n=h.data)||void 0===n?void 0:n.user.last_name),document.getElementById("chat-fc-name").disabled=!0;if(document.getElementById("chat-fc-email"))document.getElementById("chat-fc-email").value=null===(o=h.data)||void 0===o?void 0:o.user.email,document.getElementById("chat-fc-email").disabled=!0;if(document.getElementById("chat-fc-phone"))document.getElementById("chat-fc-phone").value=null===(a=h.data)||void 0===a?void 0:a.user.phone_no,document.getElementById("chat-fc-phone").disabled=!0}}),1e3)},Object(a.useEffect)((function(){var t=Object(m.a)();t&&i(Object(g.a)(t)),(null===h||void 0===h?void 0:h.login)&&!t&&i(Object(g.d)())}),[]),Object(a.useEffect)((function(){window.addEventListener("online",(function(t){s(navigator.onLine)})),window.addEventListener("offline",(function(t){s(navigator.onLine)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[!l&&Object(o.jsxs)("div",{className:"offline-ribbon",children:[Object(o.jsx)("div",{className:"first",children:"You are offline, please check you internet connection"}),Object(o.jsx)("div",{children:Object(o.jsx)(p.a,{onClick:function(){return s(!0)},role:"button"})})]}),Object(o.jsx)("div",{className:"top-loader"}),Object(o.jsx)("div",{className:"riode-rounded-skin",children:Object(o.jsx)(b.a,{basename:"/",children:Object(o.jsx)(a.Suspense,{fallback:Object(o.jsx)("div",{className:"d-flex gif-loader",children:Object(o.jsx)("img",{src:"https://flevix.com/wp-content/uploads/2019/07/Spin-Preloader-1.gif",alt:"loader"})}),children:Object(o.jsx)(O.d,{children:Object(o.jsx)(O.b,{exact:!0,component:w})})})})})]})})),F=function(t){var e=t.component,n=(t.authed,Object(l.a)(t,["component","authed"])),a=Object(u.d)((function(t){return t.user}));return Object(o.jsx)(O.b,Object(d.a)(Object(d.a)({},n),{},{render:function(t){return a.login?Object(o.jsx)(e,Object(d.a)({},t)):Object(o.jsx)(O.a,{to:{pathname:"/",state:{from:t.location}}})}}))},M=function(t){t&&t instanceof Function&&n.e(21).then(n.bind(null,652)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),o(t),a(t),r(t),i(t)}))},B=n(225),K=n(226),z=n(104);n(470),n(227);Object(v.setTranslations)({en:B,hi:K}),i.a.render(Object(o.jsxs)(u.a,{store:z.a,children:[Object(o.jsx)(I,{}),Object(o.jsx)(c.a,{position:"top-right",autoClose:15e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]}),document.getElementById("root")),M()},56:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"k",(function(){return f})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return O})),n.d(e,"m",(function(){return p})),n.d(e,"i",(function(){return j})),n.d(e,"d",(function(){return v})),n.d(e,"g",(function(){return m})),n.d(e,"h",(function(){return g})),n.d(e,"e",(function(){return _})),n.d(e,"j",(function(){return h})),n.d(e,"f",(function(){return E})),n.d(e,"l",(function(){return y}));var o=n(3),a=n(103),r=n.n(a),i=n(34),c=n(104),u=n(60),d=r.a.create({baseURL:"http://54.177.7.240/api"});d.interceptors.request.use((function(t){document.body.classList.add("loading-indicator");var e=Object(i.a)();return e&&(t.headers.Authorization=e),t}),(function(t){return document.body.classList.remove("loading-indicator"),Promise.reject(t)})),d.interceptors.response.use((function(t){return document.body.classList.remove("loading-indicator"),Object(i.a)()||c.a.dispatch(Object(u.d)()),t}),(function(t){return document.body.classList.remove("loading-indicator"),401===(null===t||void 0===t?void 0:t.response.status)&&Object(i.b)(),Promise.reject(null===t||void 0===t?void 0:t.response)}));var l=d,s=function(t){return l.post("/login",Object(o.a)({},t))},f=function(t){return l.post("/register",Object(o.a)({},t))},b=function(t){return l.post("/verification/otp",Object(o.a)({},t))},O=function(){return l.get("/category")},p=function(t){return l.get("/user",{headers:{Authorization:t}})},j=function(t){return l.get("/homecontent")},v=function(t){return l.get("/notifications")},m=function(t){return l.get("/subcategory/details?subCategoryId=".concat(t))},g=function(){return l.get("/subcategory/list")},_=function(t){return l.get("/product/details?id=".concat(t))},h=function(){return l.post("/users/notification_read")},E=function(){return r.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"http://54.177.7.240/api",REACT_APP_URL:"http://localhost:4001"}).REACT_APP_BASE_SERVER_URL.replace("api/v1",""),"/time"))},y=function(t,e){return l.post("/subscribe_emails",{subscribe_emails:{email:t,source:e}})}},60:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return s})),n.d(e,"a",(function(){return f}));var o=n(18),a=n.n(o),r=n(40),i=n(56),c=n(34),u=n(17),d=function(t,e,n,o,c,d){return function(){var l=Object(r.a)(a.a.mark((function r(l){var s,f,b,O,p,j,v,m,g;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,l(Object(u.l)()),a.next=4,Object(i.a)(t);case 4:200===(s=a.sent).data.statusCode&&(n(!0),o(null===s||void 0===s||null===(f=s.data)||void 0===f||null===(b=f.responseData)||void 0===b||null===(O=b.user)||void 0===O?void 0:O._id),c(!0),d("OTP sent"),l(Object(u.n)())),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(0),422===(null===a.t0||void 0===a.t0?void 0:a.t0.status)?(c(!0),d(null===a.t0||void 0===a.t0||null===(p=a.t0.data)||void 0===p?void 0:p.message),e(null===a.t0||void 0===a.t0||null===(j=a.t0.data)||void 0===j?void 0:j.message),"email otp locked"===(null===a.t0||void 0===a.t0||null===(v=a.t0.data)||void 0===v?void 0:v.message)?e("Account lock for security reasons, please login again after 10 mins"):1001==(null===a.t0||void 0===a.t0||null===(m=a.t0.data)||void 0===m?void 0:m.error_code)?e("Your email id does not exists, please signup and try again."):1002==(null===a.t0||void 0===a.t0||null===(g=a.t0.data)||void 0===g?void 0:g.error_code)&&n(!0)):406===(null===a.t0||void 0===a.t0?void 0:a.t0.status)&&("login locked"===(null===a.t0||void 0===a.t0?void 0:a.t0.data.message)?e("login-locked"):e("confirm-email")),l(Object(u.k)(a.t0));case 12:case"end":return a.stop()}}),r,null,[[0,8]])})));return function(t){return l.apply(this,arguments)}}()},l=function(t,e,n,o,c){return function(){var d=Object(r.a)(a.a.mark((function r(d){var l,s,f,b,O,p,j,v;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,d(Object(u.l)()),a.next=4,Object(i.k)(t);case 4:200===(l=a.sent).data.statusCode&&(c(!1),n(!0),o(null===l||void 0===l||null===(s=l.data)||void 0===s||null===(f=s.responseData)||void 0===f||null===(b=f.user)||void 0===b?void 0:b._id),d(Object(u.n)())),a.next=13;break;case 8:a.prev=8,a.t0=a.catch(0),c(!1),422===(null===a.t0||void 0===a.t0?void 0:a.t0.status)?(e(null===a.t0||void 0===a.t0||null===(O=a.t0.data)||void 0===O?void 0:O.message),"email otp locked"===(null===a.t0||void 0===a.t0||null===(p=a.t0.data)||void 0===p?void 0:p.message)?e("Account lock for security reasons, please login again after 10 mins"):1001==(null===a.t0||void 0===a.t0||null===(j=a.t0.data)||void 0===j?void 0:j.error_code)?e("Your email id does not exists, please signup and try again."):1002==(null===a.t0||void 0===a.t0||null===(v=a.t0.data)||void 0===v?void 0:v.error_code)&&n(!0)):406===(null===a.t0||void 0===a.t0?void 0:a.t0.status)&&("login locked"===(null===a.t0||void 0===a.t0?void 0:a.t0.data.message)?e("login-locked"):e("confirm-email")),d(Object(u.k)(a.t0));case 13:case"end":return a.stop()}}),r,null,[[0,8]])})));return function(t){return d.apply(this,arguments)}}()},s=function(){return function(){var t=Object(r.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(c.b)(),e(Object(u.o)());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(t){return function(){var e=Object(r.a)(a.a.mark((function e(n){var o,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(i.m)(t);case 3:c=e.sent,n(Object(u.m)(null===c||void 0===c||null===(o=c.data)||void 0===o||null===(r=o.responseData)||void 0===r?void 0:r.user)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("\ud83d\ude80 ~ file: user_thunk.js ~ line 58 ~ return ~ err",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}},[[471,4,5]]]);
//# sourceMappingURL=main.205939fe.chunk.js.map