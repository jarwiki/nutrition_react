(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[15],{457:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(3);var a=n(87),c=n.n(a),r=n(32),o=n(88),i=n(57),s=c.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"https://demo.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_SERVER_URL});s.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(r.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),s.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(r.a)()||o.a.dispatch(Object(i.f)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(r.b)(),Promise.reject(e)}));var l=s,u=c.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"https://demo.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_BLOG_BASE_URL});u.interceptors.request.use((function(e){document.body.classList.add("loading-indicator");var t=Object(r.a)();return t&&(e.headers.Authorization=t),e}),(function(e){return document.body.classList.remove("loading-indicator"),Promise.reject(e)})),u.interceptors.response.use((function(e){return document.body.classList.remove("loading-indicator"),Object(r.a)()||o.a.dispatch(Object(i.f)()),e}),(function(e){return document.body.classList.remove("loading-indicator"),401===(null===e||void 0===e?void 0:e.response.status)&&Object(r.b)(),Promise.reject(null===e||void 0===e?void 0:e.response)}));var d=function(e){var t=e.page,n=e.parent_slug;return l.get("/dashboard/categories?page=".concat(t),{params:{parent_slug:n}})}},465:function(e,t,n){e.exports=n(489)()},476:function(e,t,n){"use strict";t.a=n.p+"static/media/customer.07059049.jpg"},477:function(e,t,n){"use strict";t.a=n.p+"static/media/store.27de7930.jpg"},489:function(e,t,n){"use strict";var a=n(490);function c(){}function r(){}r.resetWarningCache=c,e.exports=function(){function e(e,t,n,c,r,o){if(o!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:c};return n.PropTypes=n,n}},490:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},495:function(e,t,n){"use strict";var a=n(3),c=n(141),r=(n(1),n(694)),o=n(722),i=n(455),s=(n(496),n(4)),l=["tooltip","title","name","type","className","required","boxRequired","requiredBottom","restrictChar","scrollIncrese","placeholder","onChange","value","isPop","lengthValue","popText"];t.a=function(e){var t=e.tooltip,n=e.title,u=e.name,d=void 0===u?"":u,b=e.type,j=void 0===b?"text":b,p=e.className,O=void 0===p?"":p,m=e.required,f=void 0!==m&&m,h=e.boxRequired,v=void 0!==h&&h,g=e.requiredBottom,x=void 0!==g&&g,_=e.restrictChar,y=void 0!==_&&_,N=e.scrollIncrese,C=void 0!==N&&N,P=e.placeholder,E=void 0===P?" ":P,S=e.onChange,A=void 0===S?function(){}:S,T=e.value,R=e.isPop,I=void 0!==R&&R,k=e.lengthValue,w=void 0===k?100:k,L=e.popText,D=Object(c.a)(e,l),F=Math.floor(100*Math.random()+1),U=Object(s.jsx)(r.a,{children:Object(s.jsx)(r.a.Body,{children:Object(s.jsx)("p",{className:"password-terms",children:L})})});return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("label",{htmlFor:"floatingInput".concat(F),className:"input-title",children:[n," ",t&&t]})," ",!x&&f&&Object(s.jsx)("small",{className:"text-danger font-10",children:"(Required)"}),I?Object(s.jsx)(o.a,{trigger:"focus",placement:"top",overlay:U,children:Object(s.jsx)("input",Object(a.a)(Object(a.a)({},D),{},{id:"floatingInput".concat(F),type:j,name:d,className:"form-control ".concat(f&&"border-danger"," ").concat(O," "),placeholder:E,onChange:A,value:T,autoComplete:"off"}))}):Object(s.jsx)("input",Object(a.a)(Object(a.a)({},D),{},{id:"floatingInput".concat(F),type:j,name:d,className:"form-control ".concat((f||v)&&"border-danger","\n            ").concat(O),placeholder:E,onChange:A,value:T,maxLength:w,onKeyDown:y&&i.a,autoComplete:"off",onWheel:C&&function(e){return e.currentTarget.blur()}})),x&&Object(s.jsx)("small",{className:"text-danger font-10",children:"(Required)"})]})}},496:function(e,t,n){},497:function(e,t,n){"use strict";n(1);var a=n(544),c=n.n(a),r=(n(545),n(498),n(4));t.a=function(e){var t=e.defaultCountry,n=void 0===t?"in":t,a=e.onChange,o=void 0===a?function(){}:a,i=e.value,s=e.required,l=void 0!==s&&s,u=e.className,d=void 0===u?"":u,b=e.onEnterKeyPress,j=void 0===b?function(){}:b,p=e.title,O="";return O+=d,O+=l?" border-danger":"",Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("label",{className:"input-title",children:p})," ",l&&Object(r.jsx)("small",{className:"text-danger font-10",children:"(Required)"}),Object(r.jsx)(c.a,{onEnterKeyPress:j,country:n,value:i,onChange:o,inputClass:O})]})}},498:function(e,t,n){},513:function(e,t,n){"use strict";var a=n(7),c=n(20),r=n(1),o=n(476),i=n(477),s=n(27),l=(n(514),n(4));t.a=function(){var e=function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.a)(t);case 2:n=e.sent,console.log(n,"Abouts");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){e("about")}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("section",{className:"customer-section pb-10",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row align-items-center",children:[Object(l.jsx)("div",{className:"col-md-6 mb-4 abt-img",children:Object(l.jsx)("figure",{children:Object(l.jsx)("img",{src:o.a,alt:"Happy Customer",className:"banner-radius abt-img"})})}),Object(l.jsxs)("div",{className:"col-md-6 mb-4",children:[Object(l.jsx)("h3",{className:"section-title lh-1 font-weight-bold",children:"About Us"}),Object(l.jsxs)("p",{className:"section-desc text-grey",children:["Already millions of people are very satisfied by thi.",Object(l.jsx)("br",{}),"s page builder and the number is growing more and more. Technolog",Object(l.jsx)("br",{}),"developing, requirements are increasing. Riode has brought. Already millions of people are very satisfied by thi.",Object(l.jsx)("br",{}),"s page builder and the number is growing more and more. Technolog",Object(l.jsx)("br",{}),"developing, requirements are increasing. Riode has brought."]})]})]})})}),Object(l.jsx)("section",{className:"store-section pb-10 ",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row align-items-center",children:[Object(l.jsxs)("div",{className:"col-md-6 order-md-first mb-4",children:[Object(l.jsx)("h3",{className:"section-title lh-1 font-weight-bold",children:"Our Vission & Our Mission"}),Object(l.jsxs)("p",{className:"section-desc text-grey",children:["Already millions of people are very satisfied by thi.",Object(l.jsx)("br",{}),"s page builder and the number is growing more and more. Technolog",Object(l.jsx)("br",{}),"developing, requirements are increasing. Riode has brought. Already millions of people are very satisfied by thi.",Object(l.jsx)("br",{}),"s page builder and the number is growing more and more. Technolog",Object(l.jsx)("br",{}),"developing, requirements are increasing. Riode has brought."]})]}),Object(l.jsx)("div",{className:"col-md-6 mb-4 text-center",children:Object(l.jsx)("figure",{children:Object(l.jsx)("img",{src:i.a,alt:"Our Store",className:"banner-radius abt-img"})})})]})})})]})}},514:function(e,t,n){},515:function(e,t,n){"use strict";var a=n(3),c=n(141),r=n(465),o=n.n(r),i=n(1),s=n(453),l=n.n(s),u=n(4),d=["className","variant"],b={"aria-label":o.a.string,onClick:o.a.func,variant:o.a.oneOf(["white"])},j=i.forwardRef((function(e,t){var n=e.className,r=e.variant,o=Object(c.a)(e,d);return Object(u.jsx)("button",Object(a.a)({ref:t,type:"button",className:l()("btn-close",r&&"btn-close-".concat(r),n)},o))}));j.displayName="CloseButton",j.propTypes=b,j.defaultProps={"aria-label":"Close"},t.a=j},621:function(e,t,n){"use strict";n(1);var a=n(622),c=n.n(a),r=n(4);t.a=function(e){var t=e.numInputs,n=void 0===t?6:t,a=e.value,o=void 0===a?"":a,i=e.title,s=e.onChange,l=e.hideLabel,u=void 0!==l&&l,d=e.disabled,b=void 0!==d&&d;return Object(r.jsxs)("div",{className:"otp-input",children:[!u&&Object(r.jsx)("label",{children:i}),Object(r.jsx)(c.a,{value:o,onChange:s,numInputs:n,isInputNum:!0,separator:"-",isDisabled:b})]})}},622:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==h(e)&&"function"!==typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var a={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=c?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(1)),c=["placeholder","separator","isLastChild","inputStyle","focus","isDisabled","hasErrored","errorStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure"];function r(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m(e);if(t){var c=m(this).constructor;n=Reflect.construct(a,arguments,c)}else n=a.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){return h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}var v=function(e){return"object"===h(e)},g=function(e){d(n,e);var t=j(n);function n(e){var c;return s(this,n),f(O(c=t.call(this,e)),"getClasses",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return!v(e)&&!1!==e})).join(" ")})),f(O(c),"getType",(function(){var e=c.props,t=e.isInputSecure,n=e.isInputNum;return t?"password":n?"tel":"text"})),c.input=a.default.createRef(),c}return u(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.focus,n=e.shouldAutoFocus,a=this.input.current;a&&t&&n&&a.focus()}},{key:"componentDidUpdate",value:function(e){var t=this.props.focus,n=this.input.current;e.focus!==t&&n&&t&&(n.focus(),n.select())}},{key:"render",value:function(){var e=this.props,t=e.placeholder,n=e.separator,r=e.isLastChild,s=e.inputStyle,l=e.focus,u=e.isDisabled,d=e.hasErrored,b=e.errorStyle,j=e.focusStyle,p=e.disabledStyle,O=(e.shouldAutoFocus,e.isInputNum),m=e.index,f=e.value,h=e.className,g=(e.isInputSecure,i(e,c));return a.default.createElement("div",{className:h,style:{display:"flex",alignItems:"center"}},a.default.createElement("input",o({"aria-label":"".concat(0===m?"Please enter verification code. ":"").concat(O?"Digit":"Character"," ").concat(m+1),autoComplete:"off",style:Object.assign({width:"1em",textAlign:"center"},v(s)&&s,l&&v(j)&&j,u&&v(p)&&p,d&&v(b)&&b),placeholder:t,className:this.getClasses(s,l&&j,u&&p,d&&b),type:this.getType(),maxLength:"1",ref:this.input,disabled:u,value:f||""},g)),!r&&n)}}]),n}(a.PureComponent),x=function(e){d(n,e);var t=j(n);function n(){var e;s(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return f(O(e=t.call.apply(t,[this].concat(r))),"state",{activeInput:0}),f(O(e),"getOtpValue",(function(){return e.props.value?e.props.value.toString().split(""):[]})),f(O(e),"getPlaceholderValue",(function(){var t=e.props,n=t.placeholder,a=t.numInputs;if("string"===typeof n){if(n.length===a)return n;n.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}})),f(O(e),"handleOtpChange",(function(t){(0,e.props.onChange)(t.join(""))})),f(O(e),"isInputValueValid",(function(t){return(e.props.isInputNum?!isNaN(parseInt(t,10)):"string"===typeof t)&&1===t.trim().length})),f(O(e),"focusInput",(function(t){var n=e.props.numInputs,a=Math.max(Math.min(n-1,t),0);e.setState({activeInput:a})})),f(O(e),"focusNextInput",(function(){var t=e.state.activeInput;e.focusInput(t+1)})),f(O(e),"focusPrevInput",(function(){var t=e.state.activeInput;e.focusInput(t-1)})),f(O(e),"changeCodeAtFocus",(function(t){var n=e.state.activeInput,a=e.getOtpValue();a[n]=t[0],e.handleOtpChange(a)})),f(O(e),"handleOnPaste",(function(t){t.preventDefault();var n=e.state.activeInput,a=e.props,c=a.numInputs;if(!a.isDisabled){for(var r=e.getOtpValue(),o=n,i=t.clipboardData.getData("text/plain").slice(0,c-n).split(""),s=0;s<c;++s)s>=n&&i.length>0&&(r[s]=i.shift(),o++);e.setState({activeInput:o},(function(){e.focusInput(o),e.handleOtpChange(r)}))}})),f(O(e),"handleOnChange",(function(t){var n=t.target.value;e.isInputValueValid(n)&&e.changeCodeAtFocus(n)})),f(O(e),"handleOnKeyDown",(function(t){8===t.keyCode||"Backspace"===t.key?(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput()):46===t.keyCode||"Delete"===t.key?(t.preventDefault(),e.changeCodeAtFocus("")):37===t.keyCode||"ArrowLeft"===t.key?(t.preventDefault(),e.focusPrevInput()):39===t.keyCode||"ArrowRight"===t.key?(t.preventDefault(),e.focusNextInput()):32!==t.keyCode&&" "!==t.key&&"Spacebar"!==t.key&&"Space"!==t.key||t.preventDefault()})),f(O(e),"handleOnInput",(function(t){if(e.isInputValueValid(t.target.value))e.focusNextInput();else if(!e.props.isInputNum){var n=t.nativeEvent;null===n.data&&"deleteContentBackward"===n.inputType&&(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}})),f(O(e),"renderInputs",(function(){for(var t=e.state.activeInput,n=e.props,c=n.numInputs,r=n.inputStyle,o=n.focusStyle,i=n.separator,s=n.isDisabled,l=n.disabledStyle,u=n.hasErrored,d=n.errorStyle,b=n.shouldAutoFocus,j=n.isInputNum,p=n.isInputSecure,O=n.className,m=[],f=e.getOtpValue(),h=e.getPlaceholderValue(),v=e.props["data-cy"],x=e.props["data-testid"],_=function(n){m.push(a.default.createElement(g,{placeholder:h&&h[n],key:n,index:n,focus:t===n,value:f&&f[n],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(t){e.setState({activeInput:n}),t.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:i,inputStyle:r,focusStyle:o,isLastChild:n===c-1,isDisabled:s,disabledStyle:l,hasErrored:u,errorStyle:d,shouldAutoFocus:b,isInputNum:j,isInputSecure:p,className:O,"data-cy":v&&"".concat(v,"-").concat(n),"data-testid":x&&"".concat(x,"-").concat(n)}))},y=0;y<c;y++)_(y);return m})),e}return u(n,[{key:"render",value:function(){var e=this.props.containerStyle;return a.default.createElement("div",{style:Object.assign({display:"flex"},v(e)&&e),className:v(e)?"":e},this.renderInputs())}}]),n}(a.Component);f(x,"defaultProps",{numInputs:4,onChange:function(e){return console.log(e)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1});var _=x;t.default=_},623:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){return new URLSearchParams(e)}},683:function(e,t,n){},719:function(e,t,n){"use strict";n.r(t);var a,c=n(86),r=n(1),o=n(229),i=n.n(o),s=n(45),l=n(14),u=n(32),d=n(57),b=(n(457),n(145)),j=n(459),p=(n(513),n(460)),O=n(7),m=n(20),f=n(143),h=n(3),v=n(497),g=n(495),x=n(621),_=n(469),y=n(482),N=n(141),C=n(453),P=n.n(C),E=n(639),S=n(625),A=n(516),T=n(4),R=(a={},Object(f.a)(a,S.b,"showing"),Object(f.a)(a,S.c,"showing show"),a),I=r.forwardRef((function(e,t){return Object(T.jsx)(A.a,Object(h.a)(Object(h.a)({},e),{},{ref:t,transitionClasses:R}))}));I.displayName="ToastFade";var k=I,w=n(462),L=n(454),D=n(515),F=r.createContext({onClose:function(){}}),U=["bsPrefix","closeLabel","closeVariant","closeButton","className","children"],B=r.forwardRef((function(e,t){var n=e.bsPrefix,a=e.closeLabel,c=e.closeVariant,o=e.closeButton,i=e.className,s=e.children,l=Object(N.a)(e,U);n=Object(L.c)(n,"toast-header");var u=Object(r.useContext)(F),d=Object(w.a)((function(e){null==u||null==u.onClose||u.onClose(e)}));return Object(T.jsxs)("div",Object(h.a)(Object(h.a)({ref:t},l),{},{className:P()(n,i),children:[s,o&&Object(T.jsx)(D.a,{"aria-label":a,variant:c,onClick:d,"data-dismiss":"toast"})]}))}));B.displayName="ToastHeader",B.defaultProps={closeLabel:"Close",closeButton:!0};var V=B,M=n(463),K=Object(M.a)("toast-body"),q=["bsPrefix","className","transition","show","animation","delay","autohide","onClose","bg"],W=r.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,c=e.transition,o=void 0===c?k:c,i=e.show,s=void 0===i||i,l=e.animation,u=void 0===l||l,d=e.delay,b=void 0===d?5e3:d,j=e.autohide,p=void 0!==j&&j,O=e.onClose,m=e.bg,f=Object(N.a)(e,q);n=Object(L.c)(n,"toast");var v=Object(r.useRef)(b),g=Object(r.useRef)(O);Object(r.useEffect)((function(){v.current=b,g.current=O}),[b,O]);var x=Object(E.a)(),_=!(!p||!s),y=Object(r.useCallback)((function(){_&&(null==g.current||g.current())}),[_]);Object(r.useEffect)((function(){x.set(y,v.current)}),[x,y]);var C=Object(r.useMemo)((function(){return{onClose:O}}),[O]),S=!(!o||!u),A=Object(T.jsx)("div",Object(h.a)(Object(h.a)({},f),{},{ref:t,className:P()(n,a,m&&"bg-".concat(m),!S&&(s?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}));return Object(T.jsx)(F.Provider,{value:C,children:S&&o?Object(T.jsx)(o,{in:s,unmountOnExit:!0,children:A}):A})}));W.displayName="Toast";var H=Object.assign(W,{Body:K,Header:V}),z=n(455),J=n(623),Y=n(27),G=(n(683),function(){var e,t=Object(r.useState)(!1),n=Object(c.a)(t,2),a=n[0],o=n[1],i=Object(r.useState)(""),b=Object(c.a)(i,2),j=b[0],p=b[1],N=Object(s.d)((function(e){return e})).user,C=Object(l.g)(),P=Object(l.h)(),E=Object(J.a)(P.search).get("redirect"),S=Object(s.c)(),A=Object(r.useState)(!1),R=Object(c.a)(A,2),I=R[0],k=R[1],w=Object(r.useState)(!1),L=Object(c.a)(w,2),D=L[0],F=L[1],U=Object(r.useState)("login"),B=Object(c.a)(U,2),V=B[0],M=B[1],K=Object(r.useState)(),q=Object(c.a)(K,2),W=q[0],G=q[1],X=Object(r.useState)(!1),Q=Object(c.a)(X,2),Z=Q[0],$=Q[1],ee=Object(r.useState)(""),te=Object(c.a)(ee,2),ne=te[0],ae=te[1],ce=Object(r.useState)(""),re=Object(c.a)(ce,2),oe=re[0],ie=re[1],se=Object(r.useState)(""),le=Object(c.a)(se,2),ue=(le[0],le[1],Object(r.useState)(!1)),de=Object(c.a)(ue,2),be=de[0],je=de[1],pe=Object(r.useState)({name:"",email:"",accepted_terms_and_condition:""}),Oe=Object(c.a)(pe,2),me=Oe[0],fe=Oe[1],he=Object(r.useState)({}),ve=Object(c.a)(he,2),ge=ve[0],xe=ve[1],_e=Object(r.useState)(!1),ye=Object(c.a)(_e,2),Ne=(ye[0],ye[1],Object(r.useState)({name:!1,valid_name:!1,email:!1,valid_email:!1,phone_no:!1,valid_phone_no:!1,accepted_terms_and_condition:!1})),Ce=Object(c.a)(Ne,2),Pe=Ce[0],Ee=Ce[1],Se=Object(r.useState)({phone_no:!1,valid_phone_no:!1}),Ae=Object(c.a)(Se,2),Te=Ae[0],Re=Ae[1],Ie=function(e){"Enter"===e.key&&De()};Object(r.useEffect)((function(){null!==N&&void 0!==N&&N.login&&Object(u.a)()&&(E?window.open(E,"_self"):C.push("/"))}),[N,C,null===(e=P.state)||void 0===e?void 0:e.from,E]);var ke=function(e){e.target.value?"name"===e.target.name?Object(z.g)(e.target.value)&&(fe(Object(h.a)(Object(h.a)({},me),{},Object(f.a)({},e.target.name,Object(z.h)(e.target.value)))),Ee(Object(h.a)(Object(h.a)({},Pe),{},Object(f.a)({},e.target.name,!1)))):"email"===e.target.name?(fe(Object(h.a)(Object(h.a)({},me),{},Object(f.a)({},e.target.name,e.target.value.trim()))),Ee(Object(h.a)(Object(h.a)({},Pe),{},Object(f.a)({},e.target.name,!1)))):(fe(Object(h.a)(Object(h.a)({},me),{},Object(f.a)({},e.target.name,e.target.value))),Ee(Object(h.a)(Object(h.a)({},Pe),{},Object(f.a)({},e.target.name,!1)))):(fe(Object(h.a)(Object(h.a)({},me),{},Object(f.a)({},e.target.name,e.target.value))),Ee(Object(h.a)(Object(h.a)({},Pe),{},Object(f.a)({},e.target.name,!0))))},we=function(){var e=Object(h.a)({},Pe);return e=me.name?Object(z.g)(me.name)?Object(h.a)(Object(h.a)({},e),{},{valid_name:!1}):Object(h.a)(Object(h.a)({},e),{},{valid_name:!0}):Object(h.a)(Object(h.a)({},e),{},{name:!0}),e=me.email?Object(z.f)(me.email)?Object(h.a)(Object(h.a)({},e),{},{valid_email:!1}):Object(h.a)(Object(h.a)({},e),{},{valid_email:!0}):Object(h.a)(Object(h.a)({},e),{},{email:!0}),e=me.mobile?Object(z.e)(me.mobile,me.phone_code)?Object(h.a)(Object(h.a)({},e),{},{valid_phone_no:!1}):Object(h.a)(Object(h.a)({},e),{},{valid_phone_no:!0}):Object(h.a)(Object(h.a)({},e),{},{phone_no:!0}),me.accepted_terms_and_condition||(e=Object(h.a)(Object(h.a)({},e),{},{accepted_terms_and_condition:!0})),Ee(e),!(e.name||e.valid_name||e.email||e.phone_no||e.valid_email||e.valid_phone_no||e.accepted_terms_and_condition)},Le=function(){var e=Object(h.a)({},Te);return e=ge.mobile?Object(z.e)(ge.mobile,ge.phone_code)?Object(h.a)(Object(h.a)({},e),{},{valid_phone_no:!1}):Object(h.a)(Object(h.a)({},e),{},{valid_phone_no:!0}):Object(h.a)(Object(h.a)({},e),{},{phone_no:!0}),Re(e),!e.phone_no&&!e.valid_phone_no},De=function(){var e=Object(m.a)(Object(O.a)().mark((function e(){var t,n;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(we())try{F(!0),G(""),S(Object(d.e)(me,G,$,ae,F)),console.log(Z,"otp"),console.log(ne,"id")}catch(a){F(!1),console.log(a),422===(null===a||void 0===a?void 0:a.status)?(G(null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.message),null===a||void 0===a||null===(n=a.data)||void 0===n||n.error_code):console.log("\ud83d\ude80 ~ file: index.js ~ line 106 ~ handleSignUp ~ err",a)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(m.a)(Object(O.a)().mark((function e(){var t,n,a,c,r,o,i;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(G(null),6!==oe.length){e.next=21;break}return e.prev=2,G(""),je(!0),e.next=7,Object(Y.d)({id:ne,otp:oe});case 7:i=e.sent,Object(u.c)(null===i||void 0===i||null===(t=i.data)||void 0===t||null===(n=t.responseData)||void 0===n||null===(a=n.user)||void 0===a?void 0:a.token),je(!1),k(!0),S(Object(d.c)(null===i||void 0===i||null===(c=i.data)||void 0===c||null===(r=c.responseData)||void 0===r||null===(o=r.user)||void 0===o?void 0:o.token)),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(2),je(!1),G("It seems you have entered the wrong OTP. Please check the number(s) you have entered."),console.log("\ud83d\ude80 ~ file: index.js ~ line 172 ~ handleVerifyOTP ~ error",e.t0);case 19:e.next=22;break;case 21:G("Please enter the full OTP received through your email.");case 22:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}(),Ue=function(){var e=Object(m.a)(Object(O.a)().mark((function e(){return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(Object(d.d)(ge,G,$,ae,o,p));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Be=function(){var e=Object(m.a)(Object(O.a)().mark((function e(){var t,n;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Le())try{F(!0),G(""),S(Object(d.e)(ge,G,$,ae,F)),console.log(Z,"otp"),console.log(ne,"id"),F(!1)}catch(a){F(!1),console.log(a),422===(null===a||void 0===a?void 0:a.status)?(G(null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.message),null===a||void 0===a||null===(n=a.data)||void 0===n||n.error_code):console.log("\ud83d\ude80 ~ file: index.js ~ line 106 ~ handleSignUp ~ err",a)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)("div",{className:"login-popup",children:Object(T.jsx)("div",{className:"form-box",children:Object(T.jsxs)("div",{className:"tab tab-nav-simple tab-nav-boxed form-tab",children:[Object(T.jsx)("ul",{className:"nav nav-tabs nav-fill align-items-center border-no justify-content-center mb-5",role:"tablist",children:Object(T.jsx)("li",{className:"nav-item",children:Object(T.jsx)("a",{className:"nav-link ".concat("login"==V?"active":""," border-no lh-1 ls-normal"),href:"#signin",onClick:function(){M("login"),$(""),G(""),k(""),je(""),F(!1)},children:"Login/Register"})})}),Object(T.jsxs)("div",{className:"tab-content",children:[Object(T.jsx)("div",{className:"tab-pane ".concat("login"==V?"active":""),id:"signin",children:Z?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{children:[Object(T.jsxs)(y.a,{className:"otp_flex",children:[Object(T.jsxs)(_.a,{children:[Object(T.jsx)("h3",{children:"Enter the OTP"})," "]}),Object(T.jsx)(_.a,{className:"text-right",children:Object(T.jsx)("div",{className:"cursor_pointer",onClick:function(){return $(!1)},children:Object(T.jsx)("h4",{children:"Change"})})})]}),Object(T.jsx)("div",{className:"form-group",children:Object(T.jsx)(x.a,{onChange:function(e){return ie(e)},value:oe})}),Object(T.jsx)("button",{type:"button",className:"btn btn-dark btn-block btn-rounded",onClick:Fe,disabled:be||I,children:I?"Verified Successfully, please wait...":Object(T.jsx)(T.Fragment,{children:be?"Verifying...":"Continue"})}),W&&Object(T.jsx)("p",{className:"error_text text-center",children:W})]}),Object(T.jsxs)("div",{className:"form-footer py-3",children:[Object(T.jsxs)("div",{className:"form-checkbox",children:[Object(T.jsx)("input",{type:"checkbox",className:"custom-checkbox",id:"signin-remember",name:"signin-remember"}),Object(T.jsx)("label",{className:"form-control-label",for:"signin-remember",children:"Remember me"})]}),Object(T.jsx)("a",{href:"#",className:"lost-link",onClick:function(){return Ue()},children:"Resend code"})]})]}):Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)(v.a,{title:"Mobile",defaultCountry:"in",value:ge.mobile,required:Te.phone_no,onChange:function(e,t){var n;xe(Object(h.a)(Object(h.a)({},ge),{},{mobile:e,phone_code:null===t||void 0===t||null===(n=t.countryCode)||void 0===n?void 0:n.toUpperCase()})),Ee(e?Object(h.a)(Object(h.a)({},Te),{},{phone_no:!1}):Object(h.a)(Object(h.a)({},Te),{},{phone_no:!0}))}}),Te.valid_phone_no&&Object(T.jsx)("p",{className:"error_text",children:"Please enter a valid mobile number"})]}),Object(T.jsx)("button",{className:"btn btn-dark btn-block btn-rounded",type:"submit",onClick:Be,disabled:D,children:D?"Loading":"Request OTP"}),"confirm-email"===W?"":"login-locked"===W?Object(T.jsxs)("p",{className:"error_text text-center",children:["Your login has been disabled because we detected a suspicions activity on your account."," ",Object(T.jsx)("a",{href:"https://help.jump.trade/en/support/solutions/articles/84000345960-why-is-my-login-disabled-",children:"Learn more"})]}):Object(T.jsx)("p",{className:"error_text text-center",children:W})]})}),Object(T.jsx)("div",{className:"tab-pane ".concat("register"==V?"active":""),id:"register",children:Z?Object(T.jsxs)("div",{children:[Object(T.jsxs)(y.a,{className:"otp_flex",children:[Object(T.jsxs)(_.a,{children:[Object(T.jsx)("h3",{children:"Enter the OTP"})," "]}),Object(T.jsx)(_.a,{className:"text-right",children:Object(T.jsx)("div",{className:"cursor_pointer",onClick:function(){return $(!1)},children:Object(T.jsx)("h4",{children:"Change"})})})]}),Object(T.jsx)("div",{className:"form-group",children:Object(T.jsx)(x.a,{onChange:function(e){return ie(e)},value:oe})}),Object(T.jsx)("button",{type:"button",className:"btn btn-dark btn-block btn-rounded",onClick:Fe,disabled:be||I,children:I?"Verified Successfully, please wait...":Object(T.jsx)(T.Fragment,{children:be?"Verifying...":"Continue"})}),W&&Object(T.jsx)("p",{className:"error_text text-center",children:W})]}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)(g.a,{title:"Name",name:"name",placeholder:"Enter Name",value:me.name,required:Pe.name,onKeyPress:Ie,onChange:ke}),Pe.valid_name&&Object(T.jsx)("p",{className:"error_text",children:"Please enter a valid name"})]}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)(g.a,{title:"Email",name:"email",placeholder:"Enter Email",required:Pe.email,value:me.email,onKeyPress:Ie,onChange:ke}),Pe.valid_email&&Object(T.jsx)("p",{className:"error_text",children:"Please enter a valid email address"})]}),Object(T.jsxs)("div",{className:"form-group",children:[Object(T.jsx)(v.a,{title:"Mobile",defaultCountry:"in",value:me.mobile,required:Pe.phone_no,onEnterKeyPress:De,onChange:function(e,t){var n;fe(Object(h.a)(Object(h.a)({},me),{},{mobile:e,phone_code:null===t||void 0===t||null===(n=t.countryCode)||void 0===n?void 0:n.toUpperCase()})),Ee(e?Object(h.a)(Object(h.a)({},Pe),{},{phone_no:!1}):Object(h.a)(Object(h.a)({},Pe),{},{phone_no:!0}))}}),Pe.valid_phone_no&&Object(T.jsx)("p",{className:"error_text",children:"Please enter a valid mobile number"})]}),Object(T.jsx)("div",{className:"form-footer",children:Object(T.jsxs)("div",{className:"form-checkbox",children:[Object(T.jsx)("input",{type:"checkbox",className:"custom-checkbox",onChange:ke,name:"accepted_terms_and_condition",id:"register-agree"}),Object(T.jsx)("label",{className:"form-control-label",for:"register-agree",children:"I agree to the privacy policy"}),Pe.accepted_terms_and_condition&&Object(T.jsx)("p",{className:"error_text",children:"Please check the Terms and Condition"})]})}),Object(T.jsx)("button",{className:"btn btn-dark btn-block btn-rounded",disabled:D,type:"button",onClick:De,children:D?"Loading...":"Register"}),"confirm-email"===W?"":"login-locked"===W?Object(T.jsxs)("p",{className:"error_text text-center",children:["Your login has been disabled because we detected a suspicions activity on your account."," ",Object(T.jsx)("a",{href:"https://help.jump.trade/en/support/solutions/articles/84000345960-why-is-my-login-disabled-",children:"Learn more"})]}):Object(T.jsx)("p",{className:"error_text text-center",children:W})]}),Object(T.jsx)("div",{className:"form-choice text-center",children:Object(T.jsx)("label",{className:"ls-m",children:"or Register With"})})]})})]}),Object(T.jsx)(_.a,{sm:4,children:Object(T.jsx)(y.a,{children:Object(T.jsx)(_.a,{xs:6,children:Object(T.jsx)(H,{onClose:function(){return o(!1)},show:a,delay:3e3,autohide:!0,children:Object(T.jsx)(H.Body,{children:Object(T.jsx)("p",{children:j})})})})})})]})})})})});t.default=function(){var e,t=Object(l.h)(),n=Object(l.i)().url,a=Object(l.g)(),o=Object(s.c)(),O=Object(b.a)(),m=O.get("fsz"),f=O.get("token"),h=(O.get("_ga"),O.get("redirect")),v=Object(s.d)((function(e){return e.user.data})).user,g=Object(r.useState)([]),x=Object(c.a)(g,2);x[0],x[1];return Object(r.useEffect)((function(){m&&(sessionStorage.setItem("fsz",m),Object(u.d)("source",m)),f&&(Object(u.c)(f),a.replace(n),o(Object(d.c)(f)))}),[]),Object(r.useEffect)((function(){var e,n;null!==v&&void 0!==v&&v.login&&Object(u.a)()&&(h?window.open(h,"_self"):null!==(e=t.state)&&void 0!==e&&e.from?a.push(null===(n=t.state)||void 0===n?void 0:n.from.pathname):a.push("/"))}),[v,a,null===(e=t.state)||void 0===e?void 0:e.from,h]),Object(r.useEffect)((function(){"enabled"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"https://demo.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_MARKETING_SCRIPT&&(i.a.init(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENVIRONMENT:"prod",REACT_APP_BASE_URL:"https://admin.livenscience.com/api",REACT_APP_URL:"https://demo.livenscience.com",REACT_APP_PUBLIC_BASE_URL:"https://admin.livenscience.com",REACT_APP_COOKIE_DOMAIN_NAME:".livenscience.com"}).REACT_APP_META_PIXEL_ID),i.a.pageView())}),[]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(j.a,{title:"Most Trusted NFT Marketplace To Trade Cricket NFTs",description:"Jump.trade is the most secured NFT marketplace where you can buy & sell rare cricket NFTs. Discover, collect, and trade authentic cricket player NFTs on our NFT gaming marketplace. Sign up now!",image:"https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"}),Object(T.jsxs)("main",{className:"main",children:[Object(T.jsx)("nav",{className:"breadcrumb-nav",children:Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)("ul",{className:"breadcrumb",children:[Object(T.jsx)("li",{children:Object(T.jsx)("a",{href:"#",children:Object(T.jsx)("i",{className:"d-icon-home"})})}),Object(T.jsx)("li",{children:"My Account"})]})})}),Object(T.jsx)("div",{className:"page-content mt-6 pb-2 mb-10",children:Object(T.jsx)("div",{className:"container",children:Object(T.jsx)(G,{})})})]}),Object(T.jsx)(p.a,{})]})}}}]);
//# sourceMappingURL=15.9f4f8c16.chunk.js.map