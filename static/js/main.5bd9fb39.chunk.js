(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{54:function(e,t,s){},58:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var n,c=s(0),a=s.n(c),r=s(21),i=s.n(r),d=s(6),l=s(27),o=(s(54),s(9)),j=s(40),u=s(16),b=s(33),O=s(34),f=(s(58),s(2)),h=function(e){return Object(f.jsx)(o.a,Object(u.a)(Object(u.a)({},e),{},{getProps:function(e){return{className:e.isCurrent?"active":""}}}))},m=function(){var e=Object(o.d)(),t=new URLSearchParams(e.search),s=t.get("q")||"",n=Object(c.useState)(s),a=Object(j.a)(n,2),r=a[0],i=a[1],d=Object(b.a)(),l=Object(o.e)();Object(c.useEffect)((function(){return i(s)}),[s]);return Object(f.jsxs)("div",{className:"Navbar flex-row",children:[Object(f.jsxs)("nav",{className:"Navbar-links flex-small",children:[Object(f.jsx)("div",{children:Object(f.jsx)(h,{to:"/darqube-test-preview",children:Object(f.jsx)(O.a,{id:"news",defaultMessage:"News",description:"Link"})})}),Object(f.jsx)("div",{children:Object(f.jsx)(h,{to:"/darqube-test-preview/bookmarks",children:Object(f.jsx)(O.a,{id:"bookmarks",defaultMessage:"Bookmarks",description:"Link"})})})]}),Object(f.jsx)("section",{className:"flex-small Navbar-search",children:Object(f.jsxs)("form",{onSubmit:function(s){s.preventDefault(),r?t.set("q",r):t.delete("q"),t.delete("p"),l(t.entries().next().done?e.pathname:"?".concat(t))},children:[Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 13 13",children:Object(f.jsx)("path",{fillRule:"evenodd",d:"M.9 5.37a4.37 4.37 0 118.73 0 4.37 4.37 0 01-8.73 0zm7.64 3.81l3.3 3.12-3.3-3.12z",fill:"none",stroke:"#fff",strokeWidth:"2"})}),Object(f.jsx)("input",{type:"search",placeholder:d.formatMessage({id:"search",defaultMessage:"Search",description:"Placeholder"}),value:r,onChange:function(e){return i(e.target.value)}})]})})]})},x=s(17),p=s(11),g=s(22),v=s(30),w=s.n(v),k=s(38),N={get:function(){var e=Object(k.a)(w.a.mark((function e(t){var s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((s=e.sent).ok){e.next=5;break}throw new Error("Request failed with status code ".concat(s.status));case 5:return e.abrupt("return",s.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=s(39),y=s.n(L),M=function(e){return Object(g.a)([e,function(e,t){return t.query}],(function(e,t){if(t){var s=new RegExp(y()(t),"i");e=e.filter((function(e){return s.test(e.headline)||s.test(e.summary)}))}return e}))},I=function(e,t){return Object(g.a)([e,function(e,t){return t.page}],(function(e,s){var n=e.length,c=s*t,a=Math.min(n,c+t);return{total:n,start:c,end:a,items:e.slice(c,a)}}))},E=Object(p.c)({sortComparer:function(e,t){return t.datetime-e.datetime}}),B=E.getInitialState({status:"idle",error:null}),S=Object(p.b)("news/fetchNews",(function(){return N.get("/darqube-test-preview/company-news.json")})),q=Object(p.d)({name:"news",initialState:B,reducers:{},extraReducers:(n={},Object(x.a)(n,S.pending,(function(e,t){e.status="loading"})),Object(x.a)(n,S.fulfilled,(function(e,t){e.status="succeeded",E.upsertMany(e,t.payload)})),Object(x.a)(n,S.rejected,(function(e,t){e.status="failed",e.error=t.error.message})),n)}).reducer,P=E.getSelectors((function(e){return e.news})),C=P.selectAll,R=(P.selectById,P.selectIds,I(M(Object(g.a)(C,(function(e){return e.slice(1)}))),6)),F=s(12),z=s(24),A=Object(p.d)({name:"bookmarks",initialState:[],reducers:{bookmarkTriggered:function(e,t){var s=t.payload,n=e.indexOf(s);-1===n?e.push(s):e.splice(n,1)}}}),T=A.actions.bookmarkTriggered,U=A.reducer,D=I(M(Object(g.a)([function(e){return e.news.entities},function(e){return e.bookmarks}],(function(e,t){return t.map((function(t){return e[t]}))}))),8),G=(s(61),function(e){var t=e.itemId,s=Object(d.b)(),n=Object(b.a)(),c=Object(d.c)((function(e){return e.bookmarks.includes(t)})),a=Object(z.a)("BookmarkButton",{added:c});return Object(f.jsx)("button",{type:"button",title:n.formatMessage({id:"add-to-bookmarks",defaultMessage:"Add to Bookmarks",description:"Hint"}),className:a,onClick:function(){return s(T(t))},children:Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"13",children:Object(f.jsx)("path",{d:"M0 0h11.5v12.3L5.7 10 0 12.3V0z"})})})}),J=(s(62),function(e){var t=e.item,s=e.isLast;return Object(f.jsxs)("article",{className:"ItemExcerpt",children:[Object(f.jsx)("div",{className:"ItemExcerpt-related",children:t.related}),s&&Object(f.jsx)("div",{className:"ItemExcerpt-last",children:Object(f.jsx)(O.a,{id:"latest-news",defaultMessage:"Latest News",description:"Label"})}),Object(f.jsxs)("div",{className:"ItemExcerpt-title",children:[Object(f.jsx)("h3",{children:t.headline}),Object(f.jsx)("p",{children:t.summary})]}),Object(f.jsxs)("div",{className:"ItemExcerpt-info",children:[s&&Object(f.jsxs)("div",{className:"ItemExcerpt-read-news",children:[Object(f.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",children:[Object(f.jsx)("path",{d:"M10.5 20a9.6 9.6 0 110-19.3 9.6 9.6 0 010 19.2z"}),Object(f.jsx)("path",{d:"M6.5 10.6h6.9"}),Object(f.jsx)("path",{d:"M11.8 8l2.3 2.4-2.3 2.5"})]}),Object(f.jsx)(O.a,{id:"read-news",defaultMessage:"Read News",description:"Link"})]}),Object(f.jsx)("div",{className:"ItemExcerpt-datetime",children:Object(f.jsx)(F.a,{value:1e3*t.datetime,day:"2-digit",month:"short"})}),Object(f.jsx)("div",{className:"ItemExcerpt-min-read",children:Object(f.jsx)(O.a,{id:"n-min-read",defaultMessage:"{n} min read",values:{n:6}})})]}),Object(f.jsxs)("div",{className:"ItemExcerpt-buttons",children:[Object(f.jsxs)("svg",{className:"ItemExcerpt-link",xmlns:"http://www.w3.org/2000/svg",width:"11",height:"14",children:[Object(f.jsx)("path",{d:"M1.5 12.2v-5l7.6-5"}),Object(f.jsx)("path",{d:"M6.3 1.7h3V5"})]}),Object(f.jsx)(G,{itemId:t.id})]}),Object(f.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",children:Object(f.jsx)("img",{src:t.image,alt:t.headline})})]})}),V=s(41),H=function(e){var t=e.page,s=e.disabled,n=Object(V.a)(e,["page","disabled"]),c=Object(o.d)();if(s)return Object(f.jsx)("button",Object(u.a)({disabled:!0,className:"round-button"},n));var a=new URLSearchParams(c.search);t>0?a.set("p",String(t)):a.delete("p");var r=a.entries().next().done?c.pathname:"?".concat(a);return Object(f.jsx)(o.a,Object(u.a)({to:r,className:"round-button button"},n))},W=(s(63),function(e){var t=e.selectItemsByPage,s=e.itemClass,n=e.empty,c=Object(o.d)(),a=new URLSearchParams(c.search),r=parseInt(a.get("p")||0),i=a.get("q"),l=Object(d.c)((function(e){return t(e,{query:i,page:r})})),j=l.items,u=l.start,b=l.end,h=l.total,m=Object(d.c)((function(e){return e.news.status})),x=Object(d.c)((function(e){return e.news.error}));if("loading"===m)return Object(f.jsx)("div",{className:"loader",children:Object(f.jsx)(O.a,{id:"loading",defaultMessage:"Loading..."})});if("succeeded"===m){var p=Object(z.a)("flex-small",s);return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"ListLayout-list flex-row",children:j.length?j.map((function(e){return Object(f.jsx)("div",{className:p,children:Object(f.jsx)(J,{item:e})},e.id)})):Object(f.jsx)("div",{className:"ListLayout-empty",children:n})}),Object(f.jsxs)("div",{className:"ListLayout-page",children:[Object(f.jsx)("div",{className:"ListLayout-page-info",children:Object(f.jsx)(O.a,{id:"out-of-n",defaultMessage:"{start}-{end} <secondary>out of {total}</secondary>",values:{start:Math.min(u+1,b),end:b,secondary:function(e){return Object(f.jsx)("span",{children:e})},total:h}})}),Object(f.jsxs)("div",{className:"ListLayout-page-buttons",children:[Object(f.jsx)(H,{disabled:0===u,page:r-1,children:Object(f.jsx)(O.a,{id:"previous",defaultMessage:"Previous",description:"Link"})}),Object(f.jsx)(H,{disabled:b===h,page:r+1,children:Object(f.jsx)(O.a,{id:"next",defaultMessage:"Next",description:"Link"})})]})]})]})}return"failed"===m?Object(f.jsx)("div",{children:x}):void 0}),_=function(){var e,t=Object(d.b)(),s=Object(b.a)(),n=Object(d.c)((function(e){return C(e)[0]})),a=Object(d.c)((function(e){return e.news.status})),r=Object(d.c)((function(e){return e.news.error}));return Object(c.useEffect)((function(){"idle"===a&&t(S())}),[a,t]),"loading"===a?e=Object(f.jsx)("div",{className:"loader",children:Object(f.jsx)(O.a,{id:"loading",defaultMessage:"Loading..."})}):"succeeded"===a?e=Object(f.jsxs)("div",{className:"flex-row",children:[Object(f.jsx)("div",{className:"NewsList-last flex-small one-third",children:Object(f.jsx)(J,{item:n,isLast:!0})}),Object(f.jsx)("div",{className:"flex-small two-thirds",children:Object(f.jsx)(W,{selectItemsByPage:R,itemClass:"one-third",empty:s.formatMessage({id:"not-found",defaultMessage:"Nothing Found"})})})]}):"failed"===a&&(e=Object(f.jsx)("div",{children:r})),Object(f.jsx)("section",{className:"NewsList",children:e})},K=function(){var e,t=Object(d.b)(),s=Object(b.a)(),n=Object(d.c)((function(e){return e.news.status})),a=Object(d.c)((function(e){return e.news.error}));return Object(c.useEffect)((function(){"idle"===n&&t(S())}),[n,t]),"loading"===n?e=Object(f.jsx)("div",{className:"loader",children:Object(f.jsx)(O.a,{id:"loading",defaultMessage:"Loading..."})}):"succeeded"===n?e=Object(f.jsx)(W,{selectItemsByPage:D,itemClass:"one-fourth",empty:s.formatMessage({id:"empty",defaultMessage:"Empty"})}):"failed"===n&&(e=Object(f.jsx)("div",{children:a})),Object(f.jsx)("section",{className:"BookmarksList",children:e})};var Q=function(){return Object(f.jsxs)("div",{className:"App container",children:[Object(f.jsx)("header",{className:"App-header",children:Object(f.jsx)(o.b,{children:Object(f.jsx)(m,{})})}),Object(f.jsxs)(o.c,{basepath:"/darqube-test-preview",children:[Object(f.jsx)(_,{path:"/"}),Object(f.jsx)(K,{path:"bookmarks"})]})]})},X=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,67)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),c(e),a(e),r(e)}))},Y=Object(p.a)({reducer:{news:q,bookmarks:U}});i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(d.a,{store:Y,children:Object(f.jsx)(l.a,{locale:"en-GB",defaultLocale:"en-GB",children:Object(f.jsx)(Q,{})})})}),document.getElementById("root")),X()}},[[64,1,2]]]);
//# sourceMappingURL=main.5bd9fb39.chunk.js.map