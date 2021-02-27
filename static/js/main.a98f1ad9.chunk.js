(this["webpackJsonpthemovie-react"]=this["webpackJsonpthemovie-react"]||[]).push([[0],{92:function(e,t,n){"use strict";n.r(t);var i,c,a,r,o,s,l,d,b,j,u,p,g,x,v,h,m,O,f,A,w,y,I,S,E,k=n(2),C=n.n(k),N=n(3),M=n(4),R="#f4f4fa",U="#141414",B="#272727",Q="#ff0558",G=Object(M.a)(i||(i=Object(N.a)(["\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        padding-top:50px;\n        margin:0;\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        background-color:",";\n        color:","\n    }\n"])),U,R),Z=n(8),_=n(6),Y=n(9),D=n.n(Y),z=n(14),T=n(5),V=n(42),F=n.n(V).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"38dacc6afb7c0de83b8f4761e2fdcca0",language:"en-US"}}),K=function(){return F.get("movie/popular")},H=function(){return F.get("movie/now_playing")},P=function(){return F.get("movie/top_rated")},L=function(){return F.get("movie/upcoming")},W=function(e){return F.get("search/movie",{params:{query:encodeURIComponent(e)}})},X=function(e){return F.get("movie/".concat(e),{params:{append_to_response:"videos"}})},J=function(){return F.get("tv/popular")},q=function(){return F.get("tv/airing_today")},$=function(){return F.get("tv/top_rated")},ee=function(){return F.get("tv/on_the_air")},te=function(e){return F.get("search/tv",{params:{query:encodeURIComponent(e)}})},ne=function(e){return F.get("tv/".concat(e),{params:{append_to_response:"videos"}})},ie=n(1),ce=M.b.div(c||(c=Object(N.a)(["\n  height: 100vh;\n  .bg-box {\n    display: flex;\n    justify-content: center;\n    .bg-img {\n      opacity: 0.5;\n      height: 100%;\n      z-index: -1;\n      position: absolute;\n    }\n  }\n  .mv-flexbox {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    .mv-box {\n      padding: 10px;\n      width: 70%;\n      background-color: rgba(20, 20, 20, 0.4);\n      display: flex;\n      @media screen and (max-width: 850px) {\n        display: block;\n        width: 320px;\n      }\n      img {\n      }\n      .desc-box {\n        margin-left: 20px;\n        .title {\n          font-size: 30px;\n          margin-bottom: 3px;\n        }\n        .rating {\n          font-size: 20px;\n          margin-bottom: 3px;\n        }\n        .genres {\n          margin-bottom: 3px;\n        }\n        .description {\n          .text {\n            opacity: 0.7;\n          }\n          .more {\n            opacity: 0.7;\n            cursor: pointer;\n            &:hover {\n              opacity: 1;\n            }\n          }\n        }\n      }\n    }\n    .blank-box {\n      height: 10%;\n    }\n  }\n"]))),ae=function(e){var t=e.mvDetail,n=e.tvDetail,i=Object(k.useState)(!0),c=Object(T.a)(i,2),a=c[0],r=c[1];console.log(n);return Object(ie.jsx)(ie.Fragment,{children:(t||n)&&Object(ie.jsxs)(ce,{children:[Object(ie.jsx)("div",{className:"bg-box",children:Object(ie.jsx)("img",{className:"bg-img",alt:"poster",src:t&&t.backdrop_path?"https://image.tmdb.org/t/p/original/".concat(t.backdrop_path):n&&n.backdrop_path?"https://image.tmdb.org/t/p/original/".concat(n.backdrop_path):null})}),Object(ie.jsxs)("div",{className:"mv-flexbox",children:[Object(ie.jsxs)("div",{className:"mv-box",children:[Object(ie.jsx)("img",{alt:"poster",src:t&&t.poster_path?"https://image.tmdb.org/t/p/w300/".concat(t.poster_path):n&&n.poster_path?"https://image.tmdb.org/t/p/w300/".concat(n.poster_path):null}),Object(ie.jsxs)("div",{className:"desc-box",children:[Object(ie.jsx)("div",{className:"title",children:t&&t.original_title?"".concat(t.original_title," (").concat(t.release_date.substring(0,4),")"):n&&n.genres?"".concat(n.original_name," (").concat(n.first_air_date.substring(0,4),")"):null}),Object(ie.jsxs)("div",{className:"rating",children:["\u2b50\ufe0f"," ",t&&t.vote_average?t.vote_average:n&&n.vote_average?n.vote_average:null," ","/ 10 (",t?t.vote_count:n.vote_count,")"]}),Object(ie.jsxs)("div",{className:"genres",children:[t&&t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," \u2022 ")})),n&&n.genres&&n.genres.map((function(e,t){return t===n.genres.length-1?e.name:"".concat(e.name," \u2022 ")}))]}),Object(ie.jsxs)("div",{className:"description",children:[Object(ie.jsxs)("div",{className:"text",children:[t&&t.overview?t.overview.length>18&&a?"".concat(t.overview.substring(0,150),"..."):t.overview:null,n&&n.overview?n.overview.length>18&&a?"".concat(n.overview.substring(0,150),"..."):n.overview:null]}),Object(ie.jsx)("span",{className:"more",onClick:function(){r(!a)},children:a?"More":" Close"})]})]})]}),Object(ie.jsx)("div",{className:"blank-box"})]})]})})},re=M.b.div(a||(a=Object(N.a)([""]))),oe=function(e){var t=e.location.pathname,n=e.match.params.id,i=parseInt(n),c=Object(k.useState)(null),a=Object(T.a)(c,2),r=a[0],o=a[1],s=Object(k.useState)(null),l=Object(T.a)(s,2),d=l[0],b=l[1],j=Object(k.useState)(null),u=Object(T.a)(j,2),p=u[0],g=u[1],x=Object(k.useState)(!0),v=Object(T.a)(x,2),h=(v[0],v[1]),m=Object(k.useState)(t.includes("/movie/")),O=Object(T.a)(m,2),f=O[0];O[1];return Object(k.useEffect)((function(){(function(){var e=Object(z.a)(D.a.mark((function e(){var t,n,c,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!f){e.next=9;break}return e.next=4,X(i);case 4:t=e.sent,n=t.data,o(n),e.next=14;break;case 9:return e.next=11,ne(i);case 11:c=e.sent,a=c.data,b(a);case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),g("Can't find information."),console.log(p);case 20:return e.prev=20,h(!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[0,16,20,23]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(ie.jsx)(re,{children:Object(ie.jsx)(ae,{mvDetail:r,tvDetail:d})})},se=n(43),le=M.b.div(r||(r=Object(N.a)(["\n  height: 100vh;\n  margin-top: 100px;\n  div {\n    text-align: center;\n    svg {\n      font-size: 200px;\n      color: ",";\n    }\n    .loading {\n      font-size: 40px;\n      font-weight: 600;\n    }\n  }\n"])),B),de=function(){return Object(ie.jsx)(le,{children:Object(ie.jsxs)("div",{children:[Object(ie.jsx)(se.a,{}),Object(ie.jsx)("div",{className:"loading",children:"Loading..."})]})})},be=M.b.div(o||(o=Object(N.a)(["\n  margin-bottom: 50px;\n"]))),je=M.b.span(s||(s=Object(N.a)(["\n  font-size: 20px;\n  font-weight: 600;\n  margin-left: 25px;\n"]))),ue=M.b.div(l||(l=Object(N.a)(["\n  margin: 15px;\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]))),pe=function(e){var t=e.title,n=e.children;return Object(ie.jsxs)(be,{children:[Object(ie.jsx)(je,{children:t}),Object(ie.jsx)(ue,{children:n})]})},ge=n.p+"static/media/noPosterSmall.ea2ad102.png",xe=M.b.div(d||(d=Object(N.a)(["\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n  background: linear-gradient(\n    to bottom,\n    rgba(20, 20, 20, 0) 10%,\n    rgba(20, 20, 20, 0.25) 25%,\n    rgba(20, 20, 20, 0.5) 50%,\n    rgba(20, 20, 20, 0.75) 75%,\n    rgba(20, 20, 20, 1) 100%\n  );\n  padding-top: 50px;\n  margin-bottom: 3px;\n  width: 100%;\n  opacity: 0;\n"]))),ve=M.b.div(b||(b=Object(N.a)(["\n  .img-box {\n    position: relative;\n    cursor: pointer;\n    &:hover {\n      "," {\n        opacity: 1;\n        transition: opacity 0.5s ease-in-out;\n      }\n    }\n    img {\n      position: relative;\n      width: 100%;\n      z-index: 0;\n    }\n  }\n  .rating {\n  }\n"])),xe),he=function(e){var t=e.title,n=e.imgUrl,i=e.rate,c=e.voteCount,a=e.id,r=e.isMovie;return Object(ie.jsx)(ve,{children:Object(ie.jsxs)(Z.b,{to:r?"/movie/".concat(a):"/show/".concat(a),children:[Object(ie.jsxs)("div",{className:"img-box",children:[Object(ie.jsxs)(xe,{className:"rating",children:[Object(ie.jsx)("span",{children:"\u2b50\ufe0f"}),i,"/10 (",c,")"]}),Object(ie.jsx)("img",{alt:"poster",src:n?"https://image.tmdb.org/t/p/w300".concat(n):ge})]}),t.length>18?"".concat(t.substring(0,10),"..."):t]})})},me=n(28),Oe=n(44),fe=n.n(Oe),Ae=(n(87),n(88),M.b.div(j||(j=Object(N.a)(["\n  position: relative;\n\n  .rank {\n    position: absolute;\n    background-color: ",";\n    width: 40px;\n    height: 40px;\n    font-size: 25px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 2px solid #c10644;\n    border-right: 4px solid #c10644;\n    border-bottom: 5px solid #c10644;\n  }\n  img {\n    width: 100%;\n    cursor: pointer;\n  }\n"])),Q)),we=function(e){var t=e.m,n=e.t,i=e.i,c=e.isMovie;return Object(ie.jsx)(Ae,{children:Object(ie.jsxs)(Z.b,{to:c?"/movie/".concat(t.id):"/show/".concat(n.id),children:[Object(ie.jsx)("div",{className:"rank",children:i+1}),Object(ie.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(t?t.poster_path:n.poster_path),alt:"poster"})]})},t?t.id:n.id)},ye=M.b.div(u||(u=Object(N.a)(["\n  background-color: ",";\n  .poster {\n    position: relative;\n    .rank {\n      position: absolute;\n      background-color: ",";\n      width: 40px;\n      height: 40px;\n      font-size: 25px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border: 2px solid #c10644;\n      border-right: 4px solid #c10644;\n      border-bottom: 5px solid #c10644;\n    }\n    img {\n      width: 100%;\n      cursor: pointer;\n    }\n  }\n"])),U,Q),Ie=function(e){var t=e.mvTopRated,n=e.tvTopRated,i=e.toggleBanner;e.isMovie;return Object(ie.jsx)(ye,{children:Object(ie.jsx)(fe.a,Object(me.a)(Object(me.a)({},{dots:!0,infinite:!0,autoplay:!0,autoplaySpeed:5e3,speed:1e3,slidesToShow:5,slidesToScroll:5,arrows:!1,responsive:[{breakpoint:700,settings:{slidesToShow:3}}]}),{},{children:i?t.map((function(e,t){return Object(ie.jsx)(we,{m:e,i:t,isMovie:!0})})):n.map((function(e,t){return Object(ie.jsx)(we,{t:e,i:t,isMovie:!1})}))}))})},Se=M.b.div(p||(p=Object(N.a)([""]))),Ee=M.b.div(g||(g=Object(N.a)(["\n  .toggle-box {\n    display: flex;\n    div {\n      z-index: 10;\n      font-weight: 600;\n      padding-bottom: 3.5px;\n      margin: 10px;\n      border-radius: 50px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 70px;\n      cursor: pointer;\n    }\n  }\n"]))),ke=M.b.div(x||(x=Object(N.a)(["\n  background-color: ",";\n"])),(function(e){return e.selected?Q:B})),Ce=M.b.div(v||(v=Object(N.a)(["\n  background-color: ",";\n"])),(function(e){return e.selected?B:Q})),Ne=function(){var e=Object(k.useState)(null),t=Object(T.a)(e,2),n=t[0],i=t[1],c=Object(k.useState)(null),a=Object(T.a)(c,2),r=a[0],o=a[1],s=Object(k.useState)(null),l=Object(T.a)(s,2),d=l[0],b=l[1],j=Object(k.useState)(null),u=Object(T.a)(j,2),p=u[0],g=u[1],x=Object(k.useState)(null),v=Object(T.a)(x,2),h=v[0],m=v[1],O=Object(k.useState)(null),f=Object(T.a)(O,2),A=f[0],w=f[1],y=Object(k.useState)(null),I=Object(T.a)(y,2),S=I[0],E=I[1],C=Object(k.useState)(!0),N=Object(T.a)(C,2),M=N[0],R=N[1],U=Object(k.useState)(!0),B=Object(T.a)(U,2),Q=B[0],G=B[1];Object(k.useEffect)((function(){(function(){var e=Object(z.a)(D.a.mark((function e(){var t,n,c,a,r,s,l,d,j,u,p,x;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P();case 3:return t=e.sent,n=t.data.results,i(n),e.next=8,$();case 8:return c=e.sent,a=c.data.results,g(a),e.next=13,L();case 13:return r=e.sent,s=r.data.results,o(s),e.next=18,ee();case 18:return l=e.sent,d=l.data.results,m(d),e.next=23,K();case 23:return j=e.sent,u=j.data.results,b(u),e.next=28,J();case 28:p=e.sent,x=p.data.results,w(x),e.next=37;break;case 33:e.prev=33,e.t0=e.catch(0),E("Can't find information."),console.log(S);case 37:return e.prev=37,R(!1),e.finish(37);case 40:case"end":return e.stop()}}),e,null,[[0,33,37,40]])})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(ie.jsx)(Se,{children:M?Object(ie.jsx)(de,{}):Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsxs)(Ee,{children:[Object(ie.jsx)(Ie,{mvTopRated:n,tvTopRated:p,toggleBanner:Q}),Object(ie.jsxs)("div",{className:"toggle-box",children:[Object(ie.jsx)(ke,{className:"toggle-mv",onClick:function(){G(!0)},selected:Q,children:"Movies"}),Object(ie.jsx)(Ce,{className:"toggle-tv",onClick:function(){G(!1)},selected:Q,children:"Shows"})]})]}),Object(ie.jsx)(pe,{title:"Upcomming Movies",children:r.map((function(e){return Object(ie.jsx)(he,{title:e.original_title,imgUrl:e.poster_path,rate:e.vote_average,voteCount:e.vote_count,id:e.id,isMovie:!0},e.id)}))}),Object(ie.jsx)(pe,{title:"Popular Movies",children:d.map((function(e){return Object(ie.jsx)(he,{title:e.original_title,imgUrl:e.poster_path,rate:e.vote_average,voteCount:e.vote_count,isMovie:!0},e.id)}))}),Object(ie.jsx)(pe,{title:"On The Air Shows",children:h.map((function(e){return Object(ie.jsx)(he,{title:e.original_name,imgUrl:e.poster_path,rate:e.vote_average,voteCount:e.vote_count,id:e.id,isMovie:!1},e.id)}))}),Object(ie.jsx)(pe,{title:"Popular Shows",children:A.map((function(e){return Object(ie.jsx)(he,{title:e.original_name,imgUrl:e.poster_path,rate:e.vote_average,voteCount:e.vote_count,id:e.id,isMovie:!1},e.id)}))})]})})},Me=(n(45),M.b.div(h||(h=Object(N.a)(["\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  div {\n    text-align: center;\n    svg {\n      font-size: 250px;\n      color: ",";\n    }\n    .big-text {\n      color: ",";\n      font-size: 40px;\n      font-weight: 600;\n      margin-bottom: 20px;\n    }\n    .small-text {\n      font-size: 28px;\n    }\n  }\n"])),B,Q),M.b.div(m||(m=Object(N.a)([""]))),n(15)),Re=M.b.div(O||(O=Object(N.a)([""]))),Ue=M.b.div(f||(f=Object(N.a)(["\n  height: ",";\n  .search-form {\n    padding: 15px;\n    input {\n      width: 50%;\n      color: ",";\n      font-size: 28px;\n      background-color: ",";\n      border: 0px solid black;\n      &:focus {\n        border-bottom: 2px solid ",";\n        outline: none;\n      }\n      @media screen and (max-width: 700px) {\n        width: 100%;\n      }\n    }\n  }\n"])),(function(e){return e.active?"100vh":""}),R,U,Q),Be=M.b.div(A||(A=Object(N.a)([""]))),Qe=function(){var e=Object(Me.useState)(!0),t=Object(T.a)(e,2),n=t[0],i=t[1],c=Object(Me.useState)(null),a=Object(T.a)(c,2),r=a[0],o=a[1],s=Object(Me.useState)(null),l=Object(T.a)(s,2),d=l[0],b=l[1],j=Object(Me.useState)(""),u=Object(T.a)(j,2),p=u[0],g=u[1],x=Object(Me.useState)(!1),v=Object(T.a)(x,2),h=v[0],m=v[1],O=Object(Me.useState)(null),f=Object(T.a)(O,2),A=f[0],w=f[1],y=function(){var e=Object(z.a)(D.a.mark((function e(){var t,n,i,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,W(p);case 4:return t=e.sent,n=t.data.results,console.log(n),o(n),e.next=10,te(p);case 10:i=e.sent,c=i.data.results,console.log(c),b(c),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),w("Can't find information."),console.log(A);case 20:return e.prev=20,m(!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[1,16,20,23]])})));return function(){return e.apply(this,arguments)}}();return Object(ie.jsxs)(Re,{children:[Object(ie.jsx)(Ue,{active:n,children:Object(ie.jsx)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),""!==p&&(y(),g(""),i(!1))},children:Object(ie.jsx)("input",{placeholder:"Search Movie or Shows",value:p,onChange:function(e){var t=e.target.value;g(t)}})})}),h?Object(ie.jsx)(de,{}):n?Object(ie.jsx)(ie.Fragment,{}):Object(ie.jsxs)(Be,{children:[Object(ie.jsx)(pe,{title:"Movie Results",children:r.map((function(e){return Object(ie.jsx)(he,{title:e.original_title,imgUrl:e.poster_path,rate:e.vote_average,voteCount:e.vote_count,id:e.id,isMovie:!0},e.id)}))}),Object(ie.jsx)(pe,{title:"Show Results",children:d.map((function(e){return Object(ie.jsx)(he,{title:e.original_name,imgUrl:e.poster_path,rate:e.vote_average,voteCount:e.vote_count,id:e.id,isMovie:!1},e.id)}))})]})]})},Ge=M.b.div(w||(w=Object(N.a)([""]))),Ze=function(){var e=Object(k.useState)(null),t=Object(T.a)(e,2),n=t[0],i=t[1],c=Object(k.useState)(null),a=Object(T.a)(c,2),r=a[0],o=a[1],s=Object(k.useState)(null),l=Object(T.a)(s,2),d=l[0],b=l[1],j=Object(k.useState)(null),u=Object(T.a)(j,2),p=u[0],g=u[1],x=Object(k.useState)(null),v=Object(T.a)(x,2),h=v[0],m=v[1],O=Object(k.useState)(!0),f=Object(T.a)(O,2),A=f[0],w=f[1];return Object(k.useEffect)((function(){(function(){var e=Object(z.a)(D.a.mark((function e(){var t,n,c,a,r,s,l,d;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$();case 3:return t=e.sent,n=t.data.results,i(n),e.next=8,q();case 8:return c=e.sent,a=c.data.results,o(a),e.next=13,J();case 13:return r=e.sent,s=r.data.results,b(s),e.next=18,ee();case 18:l=e.sent,d=l.data.results,g(d),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(0),m("Can't find information."),console.log(h);case 27:return e.prev=27,w(!1),e.finish(27);case 30:case"end":return e.stop()}}),e,null,[[0,23,27,30]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(ie.jsx)(Ge,{children:A?Object(ie.jsx)(de,{}):Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(pe,{title:"Top Rated",children:n.map((function(e){return Object(ie.jsx)(he,{title:e.original_name,imgUrl:e.poster_path,rate:e.vote_average,voteCount:e.vote_count,id:e.id,isMovie:!1},e.id)}))}),Object(ie.jsx)(pe,{title:"Airing Today",children:r.map((function(e){return Object(ie.jsx)(he,{title:e.original_name,imgUrl:e.poster_path,rate:e.vote_average,voteCount:e.vote_count,id:e.id,isMovie:!1},e.id)}))}),Object(ie.jsx)(pe,{title:"Popular",children:d.map((function(e){return Object(ie.jsx)(he,{title:e.original_name,imgUrl:e.poster_path,rate:e.vote_average,voteCount:e.vote_count,id:e.id,isMovie:!1},e.id)}))}),Object(ie.jsx)(pe,{title:"On The Air",children:p.map((function(e){return Object(ie.jsx)(he,{title:e.original_name,imgUrl:e.poster_path,rate:e.vote_average,voteCount:e.vote_count,id:e.id,isMovie:!1},e.id)}))})]})})},_e=M.b.div(y||(y=Object(N.a)([""]))),Ye=function(){var e=Object(k.useState)(null),t=Object(T.a)(e,2),n=t[0],i=t[1],c=Object(k.useState)(null),a=Object(T.a)(c,2),r=a[0],o=a[1],s=Object(k.useState)(null),l=Object(T.a)(s,2),d=l[0],b=l[1],j=Object(k.useState)(null),u=Object(T.a)(j,2),p=u[0],g=u[1],x=Object(k.useState)(null),v=Object(T.a)(x,2),h=v[0],m=v[1],O=Object(k.useState)(!0),f=Object(T.a)(O,2),A=f[0],w=f[1];return Object(k.useEffect)((function(){(function(){var e=Object(z.a)(D.a.mark((function e(){var t,n,c,a,r,s,l,d;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P();case 3:return t=e.sent,n=t.data.results,i(n),e.next=8,H();case 8:return c=e.sent,a=c.data.results,g(a),e.next=13,K();case 13:return r=e.sent,s=r.data.results,b(s),e.next=18,L();case 18:l=e.sent,d=l.data.results,o(d),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(0),m("Can't find information."),console.log(h);case 27:return e.prev=27,w(!1),e.finish(27);case 30:case"end":return e.stop()}}),e,null,[[0,23,27,30]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(ie.jsx)(_e,{children:A?Object(ie.jsx)(de,{}):Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(pe,{title:"Top Rated",children:n.map((function(e){return Object(ie.jsx)(he,{title:e.original_title,imgUrl:e.poster_path,rate:e.vote_average,voteCount:e.vote_count,id:e.id,isMovie:!0},e.id)}))}),Object(ie.jsx)(pe,{title:"Now Playing",children:p.map((function(e){return Object(ie.jsx)(he,{title:e.original_title,imgUrl:e.poster_path,rate:e.vote_average,voteCount:e.vote_count,id:e.id,isMovie:!0},e.id)}))}),Object(ie.jsx)(pe,{title:"Popular",children:d.map((function(e){return Object(ie.jsx)(he,{title:e.original_title,imgUrl:e.poster_path,rate:e.vote_average,voteCount:e.vote_count,id:e.id,isMovie:!0},e.id)}))}),Object(ie.jsx)(pe,{title:"Upcomming",children:r.map((function(e){return Object(ie.jsx)(he,{title:e.original_title,imgUrl:e.poster_path,rate:e.vote_average,voteCount:e.vote_count,id:e.id,isMovie:!0},e.id)}))})]})})},De=n(46),ze=M.b.div(I||(I=Object(N.a)(["\n  z-index: 3;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 53px;\n  background-color: rgba(20, 20, 20, 0.7);\n  display: flex;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.5);\n  .logo {\n    display: flex;\n    align-items: center;\n    margin: 0 10px;\n\n    .logo-img {\n      width: 90px;\n    }\n  }\n  .header-list {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .menu {\n    display: none;\n    align-items: center;\n    font-size: 28px;\n    flex: 1;\n    justify-content: flex-end;\n    margin-right: 10px;\n  }\n  @media screen and (max-width: 700px) {\n    .header-list {\n      display: none;\n    }\n    .menu {\n      display: flex;\n    }\n    .menu-modal {\n      position: absolute;\n      background-color: ",";\n      right: 0;\n      .header-item {\n        background-color: ",";\n      }\n    }\n  }\n"])),U,U),Te=M.b.div(S||(S=Object(N.a)(["\n  text-align: center;\n  width: 110px;\n  color: ",";\n  font-size: 22px;\n  font-weight: 600;\n  padding: 10px 0px;\n  border-bottom: 3.5px solid\n    ",";\n  margin-bottom: 1px;\n  transition: border-bottom 0.3s ease-in-out;\n  &:hover {\n    border-bottom: 3.5px solid rgba(218, 48, 93, 0.8);\n  }\n"])),R,(function(e){return e.selected?Q:"transparent"})),Ve=Object(_.g)((function(e){var t=e.location.pathname,n=Object(Me.useState)(!1),i=Object(T.a)(n,2),c=i[0],a=i[1],r=Object(Me.useRef)(null),o=function(e){var t=e.target;r.current&&!r.current.contains(t)&&a(!1)};return Object(k.useEffect)((function(){return window.addEventListener("click",o),function(){window.removeEventListener("click",o)}}),[]),Object(ie.jsxs)(ze,{children:[Object(ie.jsx)("div",{className:"logo",children:Object(ie.jsx)(Z.b,{to:"/",children:Object(ie.jsx)("img",{className:"logo-img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAABaCAYAAABe+yg5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTYwMjM3NkU3MUUyMTFFQjkzQUU5OTZBODI2RDVDNEEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTYwMjM3NkY3MUUyMTFFQjkzQUU5OTZBODI2RDVDNEEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNjAyMzc2QzcxRTIxMUVCOTNBRTk5NkE4MjZENUM0QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNjAyMzc2RDcxRTIxMUVCOTNBRTk5NkE4MjZENUM0QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlZ+htoAAAmGSURBVHja7J3Bdds4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",alt:"LOGO"})})}),Object(ie.jsxs)("div",{className:"header-list",children:[Object(ie.jsx)(Z.b,{to:"/",children:Object(ie.jsx)(Te,{className:"header-item",selected:"/"===t,children:"Home"})}),Object(ie.jsx)(Z.b,{to:"/movies",children:Object(ie.jsx)(Te,{className:"header-item",selected:"/movies"===t,children:"Movies"})}),Object(ie.jsx)(Z.b,{to:"/shows",children:Object(ie.jsx)(Te,{className:"header-item",selected:"/shows"===t,children:"Shows"})}),Object(ie.jsx)(Z.b,{to:"/search",children:Object(ie.jsx)(Te,{className:"header-item",selected:"/search"===t,children:"Search"})})]}),Object(ie.jsx)("div",{className:"menu",onClick:function(){a(!c)},ref:r,children:Object(ie.jsx)(De.a,{})}),c&&Object(ie.jsxs)("div",{className:"menu-modal",children:[Object(ie.jsx)(Z.b,{to:"/",children:Object(ie.jsx)(Te,{className:"header-item",selected:"/"===t,children:"Home"})}),Object(ie.jsx)(Z.b,{to:"/movies",children:Object(ie.jsx)(Te,{className:"header-item",selected:"/movies"===t,children:"Movies"})}),Object(ie.jsx)(Z.b,{to:"/shows",children:Object(ie.jsx)(Te,{className:"header-item",selected:"/shows"===t,children:"Shows"})}),Object(ie.jsx)(Z.b,{to:"/search",children:Object(ie.jsx)(Te,{className:"header-item",selected:"/search"===t,children:"Search"})})]})]})})),Fe=M.b.div(E||(E=Object(N.a)(["\n  height: 35px;\n  display: flex;\n  justify-content: center;\n  background-color: ",";\n  color: ",";\n  div {\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n  }\n"])),B,R),Ke=function(){return Object(ie.jsx)(Fe,{children:Object(ie.jsx)("div",{children:"THE MOVIE REACT \u2022 Designed by URE \u2022 2021"})})},He=function(){return Object(ie.jsxs)(Z.a,{children:[Object(ie.jsx)(Ve,{}),Object(ie.jsxs)(_.d,{children:[Object(ie.jsx)(_.b,{path:"/",exact:!0,component:Ne}),Object(ie.jsx)(_.b,{path:"/shows",exact:!0,component:Ze}),Object(ie.jsx)(_.b,{path:"/movies",exact:!0,component:Ye}),Object(ie.jsx)(_.b,{path:"/search",exact:!0,component:Qe}),Object(ie.jsx)(_.b,{path:"/movie/:id",component:oe}),Object(ie.jsx)(_.b,{path:"/show/:id",component:oe}),Object(ie.jsx)(_.a,{from:"*",to:"/"})]}),Object(ie.jsx)(Ke,{})]})},Pe=function(){return Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(He,{}),Object(ie.jsx)(G,{})]})},Le=n(47);n.n(Le).a.render(Object(ie.jsx)(C.a.StrictMode,{children:Object(ie.jsx)(Pe,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.a98f1ad9.chunk.js.map