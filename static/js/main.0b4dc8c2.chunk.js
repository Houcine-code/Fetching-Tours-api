(this["webpackJsonpfetching-tours-api"]=this["webpackJsonpfetching-tours-api"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(5),r=c.n(i),a=c(4),j=c.n(a),l=c(6),o=c(2),u=c(0),d=function(){return Object(u.jsx)("div",{className:"Loading",children:Object(u.jsx)("h1",{children:"Loading..."})})},b=function(){var e=s.a.useState(!0),t=Object(o.a)(e,2),c=t[0],n=t[1],i=s.a.useState([]),r=Object(o.a)(i,2),a=r[0],b=r[1],h=s.a.useState(""),O=Object(o.a)(h,2),x=O[0],m=O[1],f=s.a.useState(!1),p=Object(o.a)(f,2),v=p[0],g=p[1],N=function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.prev=1,e.next=4,fetch("https://course-api.com/react-tours-project");case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,n(!1),b(c),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),n(!1),m(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();s.a.useEffect((function(){N()}),[]);return c?Object(u.jsx)("main",{children:Object(u.jsx)("div",{className:"title",children:Object(u.jsx)(d,{})})}):x?Object(u.jsx)("main",{children:Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h1",{children:x})})}):0===a.length?Object(u.jsx)("main",{children:Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("h1",{children:"Empty"}),Object(u.jsx)("button",{onClick:N,className:"btn",children:"fetch again"})]})}):Object(u.jsx)("main",{children:Object(u.jsx)("section",{children:Object(u.jsxs)("div",{className:"title",children:[Object(u.jsx)("h2",{children:"Tours"}),Object(u.jsx)("div",{className:"underline"}),a.map((function(e){return Object(u.jsxs)("article",{className:"single-tour",children:[Object(u.jsx)("img",{src:e.image,alt:e.name}),Object(u.jsxs)("footer",{children:[Object(u.jsxs)("div",{className:"tour-info",children:[Object(u.jsx)("h4",{children:e.name}),Object(u.jsxs)("h4",{className:"tour-price",children:["$",e.price]})]}),Object(u.jsxs)("p",{children:[v?e.info:"".concat(e.info.substring(0,200),"..."),Object(u.jsx)("button",{onClick:function(){return g(!v)},children:v?"Less":"more"})]}),Object(u.jsx)("button",{className:"delete-btn",onClick:function(){return function(e){var t=a.filter((function(t){return t.id!==e}));b(t)}(e.id)},children:"Delete"})]})]},e.id)}))]})})})};c(13);r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0b4dc8c2.chunk.js.map