"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[4],{7969:function(e,n,t){t.d(n,{Bt:function(){return f},DD:function(){return c},bI:function(){return o},d5:function(){return s},hP:function(){return a}});var r=t(4569),i=t.n(r),u="ce11188e46260bdc0ed3140d02ef06fd";i().defaults.baseURL="https://api.themoviedb.org/3";var a=function(){return i().get("/trending/all/day",{params:{api_key:u}})},o=function(e){return i().get("/search/movie",{params:{api_key:u,query:e}})},c=function(e){return i().get("/movie/".concat(e),{params:{api_key:u}})},s=function(e){return i().get("/movie/".concat(e,"/credits"),{params:{api_key:u}})},f=function(e){return i().get("/movie/".concat(e,"/reviews"),{params:{api_key:u}})}},6721:function(e,n,t){t.d(n,{y:function(){return a}});var r=t(501),i=t(6871),u=t(184),a=function(e){var n=e.id,t=e.title,a=e.name,o=(0,i.TH)();return console.log(o),(0,u.jsx)("li",{children:(0,u.jsx)(r.OL,{state:{from:o},to:"/movies/".concat(n),children:t||a})})}},7004:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(885),i=t(2791),u=t(184),a=function(e){var n=e.onSubmit,t=(0,i.useState)(""),a=(0,r.Z)(t,2),o=a[0],c=a[1];return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(o)},children:[(0,u.jsx)("label",{children:(0,u.jsx)("input",{value:o,onChange:function(e){c(e.target.value)},type:"text"})}),(0,u.jsx)("button",{children:"submit"})]})})},o=t(501),c=t(7969),s=t(6173),f=t(6721),l=t(5984),d=t(6066),m=function(){return(0,u.jsxs)("h1",{children:["We cant find youre page",(0,u.jsx)(o.rU,{to:"/",children:"go home pls"})]})},v=function(){var e,n=(0,o.lr)(),t=(0,r.Z)(n,2),v=t[0],p=t[1],h=(0,i.useState)(null),g=(0,r.Z)(h,2),x=g[0],j=g[1],_=null!==(e=v.get("q"))&&void 0!==e?e:"";(0,i.useEffect)((function(){_&&(0,c.bI)(_).then((function(e){var n=e.data;return j((0,s.P)(n))}))}),[_]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{onSubmit:function(e){e?p({q:e}):d.Am.error("Input some Text")}}),x&&(0,u.jsx)(u.Fragment,{children:0===x.length?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(m,{})}):(0,u.jsx)("ul",{children:x.map((function(e){var n=e.id,t=e.title,r=e.name;return(0,u.jsx)(f.y,{id:n,title:t,name:r},(0,l.x0)())}))})})]})}},6173:function(e,n,t){t.d(n,{P:function(){return r}});var r=function(e){return e.results.map((function(e){return{id:e.id,title:e.title,overwiev:e.overwiev,genre_ids:e.genre_ids,vote_average:e.vote_average,name:e.name}}))}},5984:function(e,n,t){t.d(n,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=4.6aa1c8ab.chunk.js.map