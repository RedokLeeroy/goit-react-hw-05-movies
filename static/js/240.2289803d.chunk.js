"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[240],{7969:function(e,t,n){n.d(t,{Bt:function(){return f},DD:function(){return o},bI:function(){return c},d5:function(){return s},hP:function(){return a}});var r=n(4569),u=n.n(r),i="ce11188e46260bdc0ed3140d02ef06fd";u().defaults.baseURL="https://api.themoviedb.org/3";var a=function(){return u().get("/trending/all/day",{params:{api_key:i}})},c=function(e){return u().get("/search/movie",{params:{api_key:i,query:e}})},o=function(e){return u().get("/movie/".concat(e),{params:{api_key:i}})},s=function(e){return u().get("/movie/".concat(e,"/credits"),{params:{api_key:i}})},f=function(e){return u().get("/movie/".concat(e,"/reviews"),{params:{api_key:i}})}},1240:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(885),u=n(2791),i=n(6871),a=n(7969),c=n(184),o=function(){var e=(0,u.useState)(),t=(0,r.Z)(e,2),n=t[0],o=t[1],s=(0,i.UO)().movieId;return(0,u.useEffect)((function(){(0,a.Bt)(s).then((function(e){var t=e.data;return o(t)}))}),[s]),(0,c.jsx)(c.Fragment,{children:n&&(0,c.jsx)("ul",{children:n.results&&n.results.length>0?n.results.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsxs)("div",{children:[(0,c.jsxs)("b",{children:[e.author,":"]}),(0,c.jsx)("p",{children:e.content})]})},e.id)})):(0,c.jsx)("b",{children:"No reviews yet!"})})})}}}]);
//# sourceMappingURL=240.2289803d.chunk.js.map