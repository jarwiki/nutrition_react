(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[22],{866:function(e,t,a){},869:function(e,t,a){},870:function(e,t,a){},900:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(1),l=a(511),r=a(510),c=a(778),o=a(35),s=a.n(o),d=a(56),b=a(146),j=a(4),_=a(71),m=a(143),O=a(14),u=a(145),h=a(762),p=a(876),v=(a(866),function(e){var t=e.tooltip,a=e.title,i=e.name,l=void 0===i?"":i,r=e.type,c=void 0===r?"text":r,o=e.className,s=void 0===o?"":o,d=e.required,b=void 0!==d&&d,_=e.placeholder,m=void 0===_?" ":_,O=e.onChange,v=void 0===O?function(){}:O,k=e.value,f=e.isPop,x=void 0!==f&&f,g=e.popText,w=e.eg,N=void 0===w?"":w,y=e.rows,C=void 0===y?0:y,F=Object(u.a)(e,["tooltip","title","name","type","className","required","placeholder","onChange","value","isPop","popText","eg","rows"]),P=Math.floor(100*Math.random()+1),T=Object(n.jsx)(h.a,{children:Object(n.jsx)(h.a.Body,{children:Object(n.jsx)("p",{className:"password-terms",children:g})})});return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("label",{htmlFor:"floatingInput".concat(P),className:"input-title mt-4",children:[a," ",t&&t," ",b&&Object(n.jsx)("small",{className:"text-danger font-10",children:"(Required)"})]}),N&&Object(n.jsx)("div",{className:"eg-text",children:N}),x?Object(n.jsx)(p.a,{trigger:"focus",placement:"top",overlay:T,children:Object(n.jsx)("input",Object(j.a)(Object(j.a)({},F),{},{id:"floatingInput".concat(P),type:c,name:l,className:"form-control ".concat(b&&"border-danger","  ").concat(s),placeholder:m,onChange:v,value:k,autoComplete:"off"}))}):Object(n.jsx)(n.Fragment,{children:C?Object(n.jsx)("textarea",Object(j.a)(Object(j.a)({},F),{},{rows:C,id:"floatingInput".concat(P),name:l,className:"form-control text-area ".concat(b&&"border-danger","  ").concat(s),placeholder:m,onChange:v,value:k,autoComplete:"off"})):Object(n.jsx)("input",Object(j.a)(Object(j.a)({},F),{},{id:"floatingInput".concat(P),type:c,name:l,className:"form-control ".concat(b&&"border-danger","  ").concat(s),placeholder:m,onChange:v,value:k,autoComplete:"off"}))})]})}),k=a(867),f=a.n(k),x=(a(868),a(869),function(e){var t=e.defaultCountry,a=void 0===t?"in":t,i=e.onChange,l=void 0===i?function(){}:i,r=e.value,c=e.required,o=void 0!==c&&c,s=e.onEnterKeyPress,d=void 0===s?function(){}:s,b=e.title;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("label",{className:"input-title mt-4",children:[b," ",o&&Object(n.jsx)("small",{className:"text-danger font-10",children:"(Required)"})]}),Object(n.jsx)(f.a,{onEnterKeyPress:d,country:a,value:r,onChange:l,inputClass:"".concat(o&&"border-danger")})]})}),g=a.p+"static/media/creator_image.70ff03a0.jpeg",w=a(63),N=a(480),y=(a(870),function(){var e,t,a=Object(i.useRef)(null),l=Object(i.useState)(!1),r=Object(_.a)(l,2),o=r[0],u=r[1],h=Object(i.useState)(""),p=Object(_.a)(h,2),k=p[0],f=p[1],y=Object(i.useState)({file:null}),C=Object(_.a)(y,2),F=C[0],P=C[1],T=Object(i.useState)(!1),q=Object(_.a)(T,2),R=q[0],A=q[1],S=Object(O.g)(),Y=Object(i.useState)(),L=Object(_.a)(Y,2),M=L[0],E=L[1],B=Object(i.useState)({first_name:"",last_name:"",email:"",phone_code:"",phone_no:"",facebook_link:"",instagram_link:"",linkedin_link:"",twitter_link:"",twitter_share_link:"",desc:""}),I=Object(_.a)(B,2),U=I[0],z=I[1],G=Object(i.useState)({first_name:!1,valid_first_name:!1,last_name:!1,valid_last_name:!1,email:!1,valid_email:!1,phone_code:!1,phone_no:!1,valid_phone_no:!1,facebook_link:!1,valid_facebook_link:!1,instagram_link:!1,valid_instagram_link:!1,linkedin_link:!1,valid_linkedin_link:!1,twitter_link:!1,valid_twitter_link:!1,twitter_share_link:!1,valid_twitter_share_link:!1,desc:!1,asset:!1}),J=Object(_.a)(G,2),W=J[0],D=J[1],H=function(e){e.target.value?"first_name"===e.target.name||"last_name"===e.target.name?Object(N.j)(e.target.value)&&(z(Object(j.a)(Object(j.a)({},U),{},Object(b.a)({},e.target.name,Object(N.k)(e.target.value)))),D(Object(j.a)(Object(j.a)({},W),{},Object(b.a)({},e.target.name,!1)))):(z(Object(j.a)(Object(j.a)({},U),{},Object(b.a)({},e.target.name,e.target.value))),D(Object(j.a)(Object(j.a)({},W),{},Object(b.a)({},e.target.name,!1)))):(z(Object(j.a)(Object(j.a)({},U),{},Object(b.a)({},e.target.name,e.target.value))),D(Object(j.a)(Object(j.a)({},W),{},Object(b.a)({},e.target.name,!0))))},K=function(){var e,t=Object(j.a)({},W);return t=U.first_name?Object(N.j)(U.first_name)?Object(j.a)(Object(j.a)({},t),{},{valid_first_name:!1}):Object(j.a)(Object(j.a)({},t),{},{valid_first_name:!0}):Object(j.a)(Object(j.a)({},t),{},{first_name:!0}),t=U.last_name?Object(N.j)(U.last_name)?Object(j.a)(Object(j.a)({},t),{},{valid_last_name:!1}):Object(j.a)(Object(j.a)({},t),{},{valid_last_name:!0}):Object(j.a)(Object(j.a)({},t),{},{last_name:!1}),t=U.email?Object(N.i)(U.email)?Object(j.a)(Object(j.a)({},t),{},{valid_email:!1}):Object(j.a)(Object(j.a)({},t),{},{valid_email:!0}):Object(j.a)(Object(j.a)({},t),{},{email:!0}),t=U.phone_no?Object(N.g)(U.phone_no,U.phone_code)?Object(j.a)(Object(j.a)({},t),{},{valid_phone_no:!1}):Object(j.a)(Object(j.a)({},t),{},{valid_phone_no:!0}):Object(j.a)(Object(j.a)({},t),{},{phone_no:!0}),t=U.facebook_link?Object(N.m)(U.facebook_link)?Object(j.a)(Object(j.a)({},t),{},{valid_facebook_link:!1}):Object(j.a)(Object(j.a)({},t),{},{valid_facebook_link:!0}):Object(j.a)(Object(j.a)({},t),{},{facebook_link:!1}),t=U.instagram_link?Object(N.m)(U.instagram_link)?Object(j.a)(Object(j.a)({},t),{},{valid_instagram_link:!1}):Object(j.a)(Object(j.a)({},t),{},{valid_instagram_link:!0}):Object(j.a)(Object(j.a)({},t),{},{instagram_link:!1}),t=U.linkedin_link?Object(N.m)(U.linkedin_link)?Object(j.a)(Object(j.a)({},t),{},{valid_linkedin_link:!1}):Object(j.a)(Object(j.a)({},t),{},{valid_linkedin_link:!0}):Object(j.a)(Object(j.a)({},t),{},{linkedin_link:!1}),t=U.twitter_link?Object(N.m)(U.twitter_link)?Object(j.a)(Object(j.a)({},t),{},{valid_twitter_link:!1}):Object(j.a)(Object(j.a)({},t),{},{valid_twitter_link:!0}):Object(j.a)(Object(j.a)({},t),{},{twitter_link:!0}),t=U.twitter_share_link?Object(N.m)(U.twitter_share_link)?Object(j.a)(Object(j.a)({},t),{},{valid_twitter_share_link:!1}):Object(j.a)(Object(j.a)({},t),{},{valid_twitter_share_link:!0}):Object(j.a)(Object(j.a)({},t),{},{twitter_share_link:!0}),t=U.desc?Object(j.a)(Object(j.a)({},t),{},{desc:!1}):Object(j.a)(Object(j.a)({},t),{},{desc:!0}),t=(null===F||void 0===F||null===(e=F.file)||void 0===e?void 0:e.size)>0?Object(j.a)(Object(j.a)({},t),{},{asset:!1}):Object(j.a)(Object(j.a)({},t),{},{asset:!0}),D(t),!(t.first_name||t.valid_first_name||t.last_name||t.valid_last_name||t.email||t.valid_email||t.phone_no||t.valid_phone_no||t.facebook_link||t.valid_facebook_link||t.instagram_link||t.valid_instagram_link||t.linkedin_link||t.valid_linkedin_link||t.twitter_link||t.valid_twitter_link||t.twitter_share_link||t.valid_twitter_share_link||t.desc||t.asset)},V=function(){var e=Object(d.a)(s.a.mark((function e(){var t,a,n,i,l,r,c,o,d,b,j,_,O;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!K()){e.next=32;break}return e.prev=1,u(!0),f(""),t=U.email,a=U.first_name,n=U.last_name,i=U.phone_code,l=U.phone_no,r=U.facebook_link,c=U.instagram_link,o=U.twitter_link,d=U.linkedin_link,b=U.twitter_share_link,j=U.desc,_=new FormData,O=new File([F.file],(Math.random()+1).toString(36).substring(7),{type:F.file.type}),_.append("creator[asset]",O),_.append("creator[first_name]",a),_.append("creator[last_name]",n),_.append("creator[email]",t),_.append("creator[phone_code]",i),_.append("creator[phone_no]",l),_.append("creator[facebook_link]",r),_.append("creator[instagram_link]",c),_.append("creator[linkedin_link]",d),_.append("creator[twitter_link]",o),_.append("creator[twitter_share_link]",b),_.append("creator[desc]",j),e.next=21,Object(w.b)(_);case 21:201===e.sent.status&&(A(!0),document.body.scrollTop=document.documentElement.scrollTop=0),e.next=29;break;case 25:e.prev=25,e.t0=e.catch(1),u(!1),422===(null===e.t0||void 0===e.t0?void 0:e.t0.status)?f("This Email is already registered."):(m.b.error("An unexpected error occured. Please try again "),console.log("\ud83d\ude80 ~ file: index.js ~ line 264 ~ handleSubmit ~ err",e.t0));case 29:u(!1),e.next=33;break;case 32:f("Please fill all the required fields");case 33:case"end":return e.stop()}}),e,null,[[1,25]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"creator-container",children:[Object(n.jsxs)("div",{className:"creator-block",children:[Object(n.jsx)("h2",{className:"mb-0",children:"Here's where we stART! "}),R?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"success-msg-block",children:[Object(n.jsx)("h4",{children:"Thank you for your interest!"}),Object(n.jsxs)("p",{children:["Please accept our heartfelt congratulations and our warm welcome into the world of NFTs. We have received your details, and BeyondLife.club's community will look into your details shortly. We will get back to you over your registered email and/or mobile number to discuss what we can do further.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Once again, welcome to the world of NFT art."]})]}),Object(n.jsx)("button",{className:"marketplace-btn",type:"button",onClick:function(){return S.push("/")},children:"Go to Marketplace"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(v,{title:"First Name*",name:"first_name",value:U.first_name,required:W.first_name,onChange:H}),W.valid_first_name&&Object(n.jsx)("p",{className:"error_text",children:"Please enter a valid first name"}),Object(n.jsx)(v,{title:"Last Name",name:"last_name",value:U.last_name,onChange:H}),W.valid_last_name&&Object(n.jsx)("p",{className:"error_text",children:"Please enter a valid last name"}),Object(n.jsx)(v,{title:"Your Email*",name:"email",value:U.email,required:W.email,onChange:H}),W.valid_email&&Object(n.jsx)("p",{className:"error_text",children:"Please enter a valid email address"}),Object(n.jsx)(x,{title:"Your Mobile Number*",value:U.phone_no,required:W.phone_no,onChange:function(e,t){z(Object(j.a)(Object(j.a)({},U),{},{phone_no:e,phone_code:t.countryCode.toUpperCase()})),D(e?Object(j.a)(Object(j.a)({},W),{},{phone_no:!1}):Object(j.a)(Object(j.a)({},W),{},{phone_no:!0}))}}),W.valid_phone_no&&Object(n.jsx)("p",{className:"error_text",children:"Please enter a valid mobile number"}),Object(n.jsx)(v,{title:"Your Facebook Profile URL:",name:"facebook_link",value:U.facebook_link,onChange:H}),W.valid_facebook_link&&Object(n.jsx)("p",{className:"error_text",children:"Please enter a valid facebook link"}),Object(n.jsx)(v,{title:"Your Instagram Profile URL:",name:"instagram_link",value:U.instagram_link,onChange:H}),W.valid_instagram_link&&Object(n.jsx)("p",{className:"error_text",children:"Please enter a valid instagram link"}),Object(n.jsx)(v,{title:"Your Twitter Profile URL:*",name:"twitter_link",value:U.twitter_link,required:W.twitter_link,onChange:H}),W.valid_twitter_link&&Object(n.jsx)("p",{className:"error_text",children:"Please enter a valid twitter link"}),Object(n.jsx)(v,{title:"Other Relevant Online Profiles (YouTube/Behance/SoundCloud):",name:"linkedin_link",value:U.linkedin_link,onChange:H}),W.valid_linkedin_link&&Object(n.jsx)("p",{className:"error_text",children:"Please enter a valid link"}),Object(n.jsx)(v,{placeholder:"https://twitter.com/xxxx/xxxx/xxxxxxx",title:"Verify Your Profile: You can verify your profile by tweeting the below tweet in your Twitter account and providing the URL of the tweet in the box below:*",eg:"Tweet sample: \"All Excited To Be A Part of @beyondlifeclub's initiative to open its #NFT platform to all artists! Here's to the new world for creators in the #web3 era... powered by @Guardian_NFT \"",name:"twitter_share_link",value:U.twitter_share_link,required:W.twitter_share_link,onChange:H}),W.valid_twitter_share_link&&Object(n.jsx)("p",{className:"error_text",children:"Please enter a valid twitter link"}),Object(n.jsx)(v,{title:"Why should you be a part of the NFT art world?*",rows:4,name:"desc",placeholder:"Your journey into art and digital art",value:U.desc,required:W.desc,onChange:H}),Object(n.jsxs)("div",{className:"mt-4",children:[Object(n.jsxs)("label",{className:"input-title",children:["Upload your samples here (1 File. Max. 50MB. Use .zip or .rar to upload multiple files)*"," ",W.asset&&Object(n.jsx)("small",{className:"text-danger font-10",children:"(Required)"})]}),Object(n.jsx)("input",{type:"file",style:{display:"none"},ref:a,onChange:function(e){var t,a,n,i;if((null===e||void 0===e||null===(t=e.target)||void 0===t||null===(a=t.files)||void 0===a?void 0:a.length)>0)if((null===e||void 0===e||null===(n=e.target)||void 0===n||null===(i=n.files[0])||void 0===i?void 0:i.size)<=52428800){var l,r=Object(c.a)(e.target.files);try{var o=function(){var e=l.value,t=new FileReader;t.onload=function(t){P({file:e})},t.readAsDataURL(e)};for(r.s();!(l=r.n()).done;)o()}catch(s){r.e(s)}finally{r.f()}E("")}else P({file:null}),E("File size must be below 50 MB")}}),Object(n.jsx)("div",{className:"file-upload ".concat(W.asset&&"error"),role:"button",onClick:function(){return a.current.click()},children:Object(n.jsx)("div",{className:"choose-btn",children:(null===F||void 0===F||null===(e=F.file)||void 0===e?void 0:e.name)?null===F||void 0===F||null===(t=F.file)||void 0===t?void 0:t.name:"Choose your sample file"})}),M&&Object(n.jsx)("p",{className:"error_text",children:M})]}),Object(n.jsx)("div",{className:"btn-block text-center",children:Object(n.jsx)("button",{className:"submit-btn",disabled:o,type:"button",onClick:V,children:o?"Loading...":"Submit"})}),k&&Object(n.jsx)("div",{className:"error-text text-center mt-3",children:k})]})]}),Object(n.jsx)("img",{className:"bg_image",src:g}),Object(n.jsxs)("div",{className:"heading-block",children:[Object(n.jsx)("h2",{children:"A Global Platform For Your Art"}),Object(n.jsx)("p",{children:"Join The Community of NFT Enthusiasts & Artists In Elevating The Experience Of Your Art To A New League!"})]})]})})});t.default=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(r.a,{title:"Creator Application | NFT Marketplace | Biggest NFT Marketplace In India | BeyondLife.club"}),Object(n.jsx)(y,{}),Object(n.jsx)(l.a,{})]})}}}]);
//# sourceMappingURL=22.9ac46285.chunk.js.map