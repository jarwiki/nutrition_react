(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[16],{506:function(e,i,t){"use strict";var l=t(3),d=t(71),n=t(1),s=t(481),c=t.n(s),a=t(14),o=t(111),r=t(55),v=t(849),u=t(869),j=t(476),m=t(475),b=t(144),x=t(491);t(507);i.a=function(e){var i,t,s,O,h,_,g,N,p,f,y,w,C,F,S,T,E,D,k,U,P,B,G,z=e.nft,A=e.ownedCard,M=void 0!==A&&A,Y=e.recentSold,q=void 0!==Y&&Y,L=e.liveAuction,J=void 0!==L&&L,R=e.favouriteNFTs,K=void 0!==R&&R,H=e.onsale,I=void 0!==H&&H,Q=e.textColor,V=e.reloadNFTList,W=(e.isExplore,e.relativeUrl),X=void 0===W?"":W,Z=e.searchPrefix,$=void 0===Z?"":Z,ee=(e.exploreSlug,e.isFaltoo,e.clientUrl,"erc721"===(null===z||void 0===z?void 0:z.nft_type)),ie=Object(r.c)(),te=Object(r.d)((function(e){return e})),le=te.user,de=te.cart,ne=Object(a.i)().params.search,se=Object(n.useState)(!1),ce=Object(d.a)(se,2),ae=ce[0],oe=ce[1],re=Object(n.useState)(!1),ve=Object(d.a)(re,2),ue=ve[0],je=ve[1],me=Object(n.useState)(!1),be=Object(d.a)(me,2),xe=be[0],Oe=be[1],he=Object(n.useState)(!1),_e=Object(d.a)(he,2),ge=_e[0],Ne=_e[1],pe=(null===(i=le.data)||void 0===i?void 0:i.user)?null===(t=le.data)||void 0===t||null===(s=t.user)||void 0===s?void 0:s.slug:null,fe=(null===de||void 0===de?void 0:de.data)?null===de||void 0===de?void 0:de.data:null;Object(n.useEffect)((function(){var e,i,t;(null===z||void 0===z||null===(e=z.order_details)||void 0===e?void 0:e.timed_auction)&&(oe(new Date(null===z||void 0===z?void 0:z.time).getTime()>=new Date(null===z||void 0===z||null===(i=z.order_details)||void 0===i?void 0:i.auction_start_time).getTime()),je(new Date(null===z||void 0===z?void 0:z.time).getTime()>new Date(null===z||void 0===z||null===(t=z.order_details)||void 0===t?void 0:t.auction_end_time).getTime()),Oe(!0));I&&(null===z||void 0===z?void 0:z.timed_auction)&&(oe(new Date(null===z||void 0===z?void 0:z.time).getTime()>=new Date(null===z||void 0===z?void 0:z.auction_start_time).getTime()),je(new Date(null===z||void 0===z?void 0:z.time).getTime()>new Date(null===z||void 0===z?void 0:z.auction_end_time).getTime()),Oe(!0)),K&&(null===z||void 0===z?void 0:z.timed_auction)&&(oe(new Date(null===z||void 0===z?void 0:z.time).getTime()>=new Date(null===z||void 0===z?void 0:z.auction_start_time).getTime()),je(new Date(null===z||void 0===z?void 0:z.time).getTime()>new Date(null===z||void 0===z?void 0:z.auction_end_time).getTime()),Oe(!0))}),[]);var ye=function(){oe(!0)},we=function(){je(!0)},Ce=function(){J&&V()},Fe=Object(j.f)(null===z||void 0===z||null===(O=z.core_statistics)||void 0===O||null===(h=O.level)||void 0===h?void 0:h.value),Se=Object(j.i)(null===z||void 0===z||null===(_=z.core_statistics)||void 0===_||null===(g=_.role)||void 0===g?void 0:g.value),Te=Object(j.h)(null===z||void 0===z||null===(N=z.core_statistics)||void 0===N||null===(p=N.category)||void 0===p?void 0:p.value);Object(n.useEffect)((function(){if(pe){var e,i=null===fe||void 0===fe||null===(e=fe.line_items)||void 0===e?void 0:e.find((function(e){var i;return e.order_slug===(null===z||void 0===z||null===(i=z.order_details)||void 0===i?void 0:i.slug)}));Ne(!!i)}}),[fe]);return Object(l.jsxs)("div",{className:"more-card jt-card",children:[Object(l.jsx)("span",{className:"nft-type-badge-rank",children:Object(l.jsx)("span",{className:"rank-title",children:"Rank ".concat(z.core_statistics.rank.value,"/").concat(z.core_statistics.rank.maximum)})}),Object(l.jsx)("span",{className:"nft-type-badge",children:z.nft_type.toUpperCase()}),Object(l.jsxs)("article",{className:"player_stats ",children:[Se&&Object(l.jsx)("div",{className:"player-type",children:Object(l.jsx)("img",{src:null===Se||void 0===Se?void 0:Se.value,alt:"Player-type",loading:"lazy"})}),Te&&Object(l.jsx)("div",{className:"player-range",style:{borderBottom:Fe?"0.1rem solid #fff":"none"},children:Object(l.jsx)("span",{className:"band",style:{background:(null===Te||void 0===Te?void 0:Te.textColor)?null===Te||void 0===Te?void 0:Te.textColor:""},children:null===Te||void 0===Te?void 0:Te.value})}),Fe&&Object(l.jsxs)("div",{className:"player-level",children:[Object(l.jsx)("h6",{children:null===Fe||void 0===Fe?void 0:Fe.name}),Object(l.jsx)("img",{src:null===Fe||void 0===Fe?void 0:Fe.value,alt:"Player-level",loading:"lazy"})]})]}),Object(l.jsx)(o.b,{to:function(){return I||K||q?X?ne?"/".concat(X,"/").concat($?$+"/"+ne:ne,"/order/details/").concat(null===z||void 0===z?void 0:z.slug,"/").concat(null===z||void 0===z?void 0:z.order_slug):"/".concat(X,"/order/details/").concat(null===z||void 0===z?void 0:z.slug,"/").concat(null===z||void 0===z?void 0:z.order_slug):ne?"/".concat(ne,"/order/details/").concat(null===z||void 0===z?void 0:z.slug,"/").concat(null===z||void 0===z?void 0:z.order_slug):"/order/details/".concat(null===z||void 0===z?void 0:z.slug,"/").concat(null===z||void 0===z?void 0:z.order_slug):(null===z||void 0===z?void 0:z.is_on_sale)?X?ne?"/".concat(X,"/").concat($?$+"/"+ne:ne,"/order/details/").concat(null===z||void 0===z?void 0:z.slug,"/").concat(null===z||void 0===z||null===(e=z.order_details)||void 0===e?void 0:e.slug):"/".concat(X,"/order/details/").concat(null===z||void 0===z?void 0:z.slug,"/").concat(null===z||void 0===z||null===(i=z.order_details)||void 0===i?void 0:i.slug):ne?"/".concat(ne,"/order/details/").concat(null===z||void 0===z?void 0:z.slug,"/").concat(null===z||void 0===z||null===(t=z.order_details)||void 0===t?void 0:t.slug):"/order/details/".concat(null===z||void 0===z?void 0:z.slug,"/").concat(null===z||void 0===z||null===(l=z.order_details)||void 0===l?void 0:l.slug):X?ne?"/".concat(X,"/").concat($?$+"/"+ne:ne,"/details/").concat(null===z||void 0===z?void 0:z.slug):"/".concat(X,"/details/").concat(null===z||void 0===z?void 0:z.slug):ne?"/".concat(ne,"/details/").concat(null===z||void 0===z?void 0:z.slug):"/details/".concat(null===z||void 0===z?void 0:z.slug);var e,i,t,l}(),children:Object(l.jsx)("img",{alt:"media logo",src:function(){var e;return(null===z||void 0===z||null===(e=z.asset_type)||void 0===e?void 0:e.includes("image"))?z.asset_url?z.asset_url:m.sample:(null===z||void 0===z?void 0:z.cover_url)?z.cover_url?z.cover_url:m.sample:z.asset_url?z.asset_url:m.sample}(),role:"button",loading:"lazy"})}),Object(l.jsxs)("div",{className:"top-content-title",children:[pe&&(null===z||void 0===z?void 0:z.is_on_sale)&&(null===z||void 0===z||null===(f=z.order_details)||void 0===f?void 0:f.is_buy)&&(null===z||void 0===z?void 0:z.owner_slug)!==pe&&Object(l.jsx)(l.Fragment,{children:"success"!==(null===le||void 0===le||null===(y=le.data)||void 0===y||null===(w=y.user)||void 0===w?void 0:w.kyc_status)?Object(l.jsx)(u.a,{trigger:["click"],rootClose:!0,placement:"top",overlay:Object(l.jsx)(v.a,{children:Object(l.jsx)(v.a.Body,{children:Object(l.jsx)("p",{className:"password-terms",children:"Please complete your KYC process to be eligible for purchasing NFTs."})})}),children:Object(l.jsxs)("div",{className:"cart_box",children:[Object(l.jsx)("div",{className:"svg_size cart_icon"}),Object(l.jsx)("span",{className:"cart_text",children:"Add To Cart"})]})}):Object(l.jsxs)("div",{className:"cart_box ".concat(ge&&"add_cart"),onClick:function(){var e;ge||ie(Object(x.a)(null===z||void 0===z||null===(e=z.order_details)||void 0===e?void 0:e.slug,null===z||void 0===z?void 0:z.quantity))},children:[Object(l.jsx)("div",{className:"svg_size cart_icon"}),Object(l.jsx)("span",{className:"cart_text",children:ge?"Added To Cart":"Add To Cart"})]})}),Object(l.jsxs)("div",{style:{color:Q},children:[(null===z||void 0===z?void 0:z.owner_name)&&Object(l.jsx)("div",{className:"more-nft-desc",children:null===z||void 0===z?void 0:z.owner_name}),q&&(null===z||void 0===z||null===(C=z.buyer)||void 0===C?void 0:C.user_name)&&Object(l.jsx)("div",{className:"more-nft-desc",children:null===z||void 0===z||null===(F=z.buyer)||void 0===F?void 0:F.user_name}),Object(l.jsx)("div",{className:"more-nft-title",children:null===z||void 0===z?void 0:z.name}),Object(l.jsx)("h6",{className:"nft-signature",children:(null===z||void 0===z||null===(S=z.signed_by)||void 0===S?void 0:S.length)>0?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("span",{children:"Signed by "})," ",null===z||void 0===z?void 0:z.signed_by[0]," ",(null===z||void 0===z||null===(T=z.signed_by)||void 0===T?void 0:T.length)>1&&Object(l.jsxs)(l.Fragment,{children:["& ",null===z||void 0===z?void 0:z.signed_by[1]]})]}):Object(l.jsx)("br",{})})]}),(null===z||void 0===z?void 0:z.is_on_sale)&&Object(l.jsxs)(l.Fragment,{children:[(null===z||void 0===z||null===(E=z.order_details)||void 0===E?void 0:E.is_bid)&&(null===z||void 0===z||null===(D=z.order_details)||void 0===D?void 0:D.timed_auction)&&Object(l.jsx)(l.Fragment,{children:xe&&Object(l.jsxs)(l.Fragment,{children:[!ae&&!ue&&Object(l.jsx)("div",{className:"time-counter-box",children:Object(l.jsxs)("span",{className:"time-counter-card",children:[Object(l.jsx)("span",{className:"time-title",children:"Starts"}),Object(l.jsx)(b.a,{time:null===z||void 0===z||null===(k=z.order_details)||void 0===k?void 0:k.auction_start_time,cTime:null===z||void 0===z?void 0:z.time,timeClass:"font-onerem",intervalClass:"font-psevenrem",intervalGapClass:"me-1",handleEndEvent:ye})]})}),!ue&&ae&&Object(l.jsx)("div",{className:"time-counter-box",children:Object(l.jsxs)("span",{className:"time-counter-card",children:[Object(l.jsx)("span",{className:"time-title",children:"Ends"}),Object(l.jsx)(b.a,{time:null===z||void 0===z||null===(U=z.order_details)||void 0===U?void 0:U.auction_end_time,cTime:null===z||void 0===z?void 0:z.time,timeClass:"font-onerem",intervalClass:"font-psevenrem",intervalGapClass:"me-1",handleEndEvent:we})]})})]})}),Object(l.jsxs)("div",{className:"more-bid-details",style:{color:Q},children:[Object(l.jsxs)("div",{className:"text-start",children:[Object(l.jsx)("div",{className:"mb-title text-secondary",children:function(){var e;return ee&&(null===z||void 0===z||null===(e=z.order_details)||void 0===e?void 0:e.is_bid)?"Bid Price":"Buy Price"}()}),Object(l.jsx)("div",{className:"mb-value",children:function(){var e,i,t,l,d,n;return ee?(null===z||void 0===z||null===(e=z.order_details)||void 0===e?void 0:e.is_bid)?Object(j.d)((null===z||void 0===z||null===(i=z.order_details)||void 0===i?void 0:i.top_bid)?null===z||void 0===z||null===(t=z.order_details)||void 0===t?void 0:t.top_bid:null===z||void 0===z||null===(l=z.order_details)||void 0===l?void 0:l.minimum_bid,"USD"):Object(j.d)(null===z||void 0===z||null===(d=z.order_details)||void 0===d?void 0:d.buy_amount,"USD"):Object(j.d)(null===z||void 0===z||null===(n=z.order_details)||void 0===n?void 0:n.buy_amount,"USD")}()})]}),ee&&(null===z||void 0===z||null===(P=z.order_details)||void 0===P?void 0:P.is_bid)&&(null===z||void 0===z||null===(B=z.order_details)||void 0===B?void 0:B.is_buy)&&Object(l.jsxs)("div",{className:"text-end",children:[Object(l.jsx)("div",{className:"mb-title text-secondary",children:"Buy Price"}),Object(l.jsx)("div",{className:"mb-value",children:Object(j.d)(null===z||void 0===z||null===(G=z.order_details)||void 0===G?void 0:G.buy_amount,"USD")})]})]})]}),I&&Object(l.jsxs)(l.Fragment,{children:[(null===z||void 0===z?void 0:z.is_bid)&&(null===z||void 0===z?void 0:z.timed_auction)&&Object(l.jsx)(l.Fragment,{children:xe&&Object(l.jsxs)(l.Fragment,{children:[!ae&&!ue&&Object(l.jsx)("div",{className:"time-counter-box",children:Object(l.jsxs)("span",{className:"time-counter-card",children:[Object(l.jsx)("span",{className:"time-title",children:"Starts"}),Object(l.jsx)(b.a,{time:null===z||void 0===z?void 0:z.auction_start_time,cTime:null===z||void 0===z?void 0:z.time,timeClass:"font-onerem",intervalClass:"font-psevenrem",intervalGapClass:"me-1",handleEndEvent:ye,handleNFTEndEvent:Ce})]})}),!ue&&ae&&Object(l.jsx)("div",{className:"time-counter-box",children:Object(l.jsxs)("span",{className:"time-counter-card",children:[Object(l.jsx)("span",{className:"time-title",children:"Ends"}),Object(l.jsx)(b.a,{time:null===z||void 0===z?void 0:z.auction_end_time,cTime:null===z||void 0===z?void 0:z.time,timeClass:"font-onerem",intervalClass:"font-psevenrem",intervalGapClass:"me-1",handleEndEvent:we,handleNFTEndEvent:Ce})]})})]})}),Object(l.jsxs)("div",{className:"more-bid-details",children:[Object(l.jsxs)("div",{className:"text-start",children:[Object(l.jsx)("div",{className:"mb-title text-secondary",children:ee&&(null===z||void 0===z?void 0:z.is_bid)?"Bid Price":"Buy Price"}),Object(l.jsx)("div",{className:"mb-value",children:ee&&(null===z||void 0===z?void 0:z.is_bid)?Object(j.d)((null===z||void 0===z?void 0:z.top_bid)?null===z||void 0===z?void 0:z.top_bid:null===z||void 0===z?void 0:z.minimum_bid,"USD"):Object(j.d)(null===z||void 0===z?void 0:z.buy_amount,"USD")})]}),ee&&(null===z||void 0===z?void 0:z.is_bid)&&(null===z||void 0===z?void 0:z.is_buy)&&Object(l.jsxs)("div",{className:"text-end",children:[Object(l.jsx)("div",{className:"mb-title text-secondary",children:"Buy Price"}),Object(l.jsx)("div",{className:"mb-value",children:Object(j.d)(null===z||void 0===z?void 0:z.buy_amount,"USD")})]})]})]}),M&&(null===z||void 0===z?void 0:z.quantity)&&Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"more-bid-details",children:[Object(l.jsx)("div",{className:"text-start"}),Object(l.jsxs)("div",{className:"text-end",children:[Object(l.jsx)("div",{className:"mb-title text-secondary",children:"Owned"}),Object(l.jsx)("div",{className:"mb-value",children:null===z||void 0===z?void 0:z.quantity})]})]})}),q&&Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"more-bid-details",children:[Object(l.jsxs)("div",{className:"text-start",children:[Object(l.jsx)("div",{className:"mb-title text-secondary",children:"Sold For"}),Object(l.jsx)("div",{className:"mb-value",children:Object(j.d)(null===z||void 0===z?void 0:z.amount,"USD")})]}),Object(l.jsxs)("div",{className:"text-end",children:[Object(l.jsx)("div",{className:"mb-title text-secondary",children:"Sold On"}),Object(l.jsx)("div",{className:"mb-value",children:c()(null===z||void 0===z?void 0:z.created_at).format("MMM D, YYYY hh:mm A")})]})]})}),K&&Object(l.jsxs)(l.Fragment,{children:[(null===z||void 0===z?void 0:z.is_bid)&&(null===z||void 0===z?void 0:z.timed_auction)&&Object(l.jsx)(l.Fragment,{children:xe&&Object(l.jsxs)(l.Fragment,{children:[!ae&&!ue&&Object(l.jsx)("div",{className:"time-counter-box",children:Object(l.jsxs)("span",{className:"time-counter-card",children:[Object(l.jsx)("span",{className:"time-title",children:"Starts"}),Object(l.jsx)(b.a,{time:null===z||void 0===z?void 0:z.auction_start_time,cTime:null===z||void 0===z?void 0:z.time,timeClass:"font-onerem",intervalClass:"font-psevenrem",intervalGapClass:"me-1",handleEndEvent:ye,handleNFTEndEvent:Ce})]})}),!ue&&ae&&Object(l.jsx)("div",{className:"time-counter-box",children:Object(l.jsxs)("span",{className:"time-counter-card",children:[Object(l.jsx)("span",{className:"time-title",children:"Ends"}),Object(l.jsx)(b.a,{time:null===z||void 0===z?void 0:z.auction_end_time,cTime:null===z||void 0===z?void 0:z.time,timeClass:"font-onerem",intervalClass:"font-psevenrem",intervalGapClass:"me-1",handleEndEvent:we,handleNFTEndEvent:Ce})]})})]})}),Object(l.jsxs)("div",{className:"more-bid-details",children:[Object(l.jsxs)("div",{className:"text-start",children:[Object(l.jsx)("div",{className:"mb-title text-secondary",children:ee&&(null===z||void 0===z?void 0:z.is_bid)?"Bid Price":"Buy Price"}),Object(l.jsx)("div",{className:"mb-value",children:ee&&(null===z||void 0===z?void 0:z.is_bid)?Object(j.d)((null===z||void 0===z?void 0:z.top_bid)?null===z||void 0===z?void 0:z.top_bid:null===z||void 0===z?void 0:z.minimum_bid,"USD"):Object(j.d)(null===z||void 0===z?void 0:z.buy_amount,"USD")})]}),ee&&(null===z||void 0===z?void 0:z.is_bid)&&(null===z||void 0===z?void 0:z.is_buy)&&Object(l.jsxs)("div",{className:"text-end",children:[Object(l.jsx)("div",{className:"mb-title text-secondary",children:"Buy Price"}),Object(l.jsx)("div",{className:"mb-value",children:Object(j.d)(null===z||void 0===z?void 0:z.buy_amount,"USD")})]})]})]})]})]})}},507:function(e,i,t){},826:function(e,i,t){},877:function(e,i,t){"use strict";t.r(i);var l=t(3),d=t(1),n=t(498),s=t(495),c=t(4),a=t(35),o=t.n(a),r=t(487),v=t(56),u=t(71),j=t(503),m=t(479),b=t(506),x=t(475),O=(t(826),function(e){return Object(l.jsxs)(j.a,Object(c.a)(Object(c.a)({viewBox:"0 50 900 300",width:"100%",height:"100%",backgroundColor:"#f5f5f5",foregroundColor:"#dbdbdb",className:"mt-1"},e),{},{children:[Object(l.jsx)("rect",{x:"0",y:"5",rx:"2",ry:"2",width:"218",height:"280"}),Object(l.jsx)("rect",{x:"228",y:"5",rx:"2",ry:"2",width:"218",height:"280"}),Object(l.jsx)("rect",{x:"456",y:"5",rx:"2",ry:"2",width:"218",height:"280"}),Object(l.jsx)("rect",{x:"684",y:"5",rx:"2",ry:"2",width:"218",height:"280"})]}))}),h=function(){var e=Object(d.useState)(1),i=Object(u.a)(e,2),t=i[0],n=i[1],s=Object(d.useState)([]),c=Object(u.a)(s,2),a=c[0],j=c[1],h=Object(d.useState)(!1),_=Object(u.a)(h,2),g=_[0],N=_[1],p=Object(d.useState)(!1),f=Object(u.a)(p,2),y=f[0],w=f[1],C=Object(d.useState)(!1),F=Object(u.a)(C,2),S=F[0],T=F[1];Object(d.useEffect)((function(){E(1)}),[]);var E=function(){var e=Object(v.a)(o.a.mark((function e(i){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,1===i&&N(!0),T(!0),e.next=5,Object(m.F)(i);case 5:t=e.sent,console.log(t,"response"),j([].concat(Object(r.a)(a),Object(r.a)(t.data.data.orders))),w(t.data.data.next_page),1===i&&N(!1),T(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(i){return e.apply(this,arguments)}}();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("section",{className:"explore-nft-section",children:Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col-sm-12",children:[Object(l.jsx)("div",{className:"sec-heading d-flex align-items-center mb-5 explore-heading",children:Object(l.jsx)("div",{className:"flex-heading",children:Object(l.jsx)("span",{className:"title full-width-title",children:"\u2764\ufe0f My Favorites On Sale"})})}),g?Object(l.jsx)(O,{}):Object(l.jsxs)("div",{className:"row",children:[a.length>0?a.map((function(e,i){return Object(l.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-6",children:Object(l.jsx)(b.a,{nft:e,image:x.sample,favouriteNFTs:!0},i)},"list-nft-".concat(i))})):Object(l.jsx)("div",{className:"col-12 text-center mb-5",children:Object(l.jsx)("h3",{className:"my-3",children:"No Records Found!"})}),!g&&S&&Object(l.jsx)(O,{}),y&&Object(l.jsx)("div",{className:"row mb-5",children:Object(l.jsx)("div",{className:"col-md-12 text-center",children:Object(l.jsx)("button",{className:"load_more",disabled:S,onClick:function(){y&&(n(t+1),E(t+1),n(t+1))},children:S?"Loading...":"Load More"})})})]})]})})})})})};i.default=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(n.a,{}),Object(l.jsx)(h,{}),Object(l.jsx)(s.a,{})]})}}}]);
//# sourceMappingURL=16.bcd89912.chunk.js.map