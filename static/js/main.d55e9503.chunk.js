(this["webpackJsonpcolor-js"]=this["webpackJsonpcolor-js"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(5),r=n.n(c),i=(n(11),n(1)),l=(n(12),n(2)),u=n.n(l),s=[1,2,3,4,5,6,7,8,9];var d=function(){var e=function(e){return s.map((function(t){return{t:"lighten ".concat(t,"0% "),c:u()("#fff").mix(u()("#".concat(e)),t/10).hex()}}))},t=function(e){return s.map((function(t){return{t:"darken ".concat(t,"0% "),c:u()("#".concat(e)).darken(t/10).hex()}}))},n=Object(a.useState)("C63527"),c=Object(i.a)(n,2),r=c[0],l=c[1],d=Object(a.useState)({t:"----BASE----",c:"#".concat("C63527")}),p=Object(i.a)(d,2),h=p[0],m=p[1],g=Object(a.useState)(e("C63527")),f=Object(i.a)(g,2),x=f[0],b=f[1],v=Object(a.useState)(t("C63527")),E=Object(i.a)(v,2),w=E[0],j=E[1],k=function(e,t){return{display:"inline-block",padding:"10px",marginLeft:"10px",backgroundColor:"".concat(e),borderRadius:"6px",width:"100px",color:t?"white":"black"}},y=function(e,t){return o.a.createElement("div",{style:{padding:"5px"}},o.a.createElement("span",{style:{width:"200px",textAlign:"right"}},e.t),o.a.createElement("span",{style:k(e.c,t)},e.c))};return console.log("lightens",x),o.a.createElement("div",{className:"App"},o.a.createElement("div",{style:{width:"400px"}},o.a.createElement("div",null,"Don't add a hash before the hex code"),o.a.createElement("div",null,"Hex must be 6 chars")),o.a.createElement("input",{style:{padding:"12px",fontSize:"16px",border:"1px solid grey",borderRadius:"5px",marginTop:"40px"},onChange:function(n){console.log("input",n.target.value),l(n.target.value),console.log("basecolor",r),m({t:"----BASE----",c:"#".concat(r)}),6===n.target.value.length?(b(e(r)),j(t(r))):(b([]),j([]))},value:r,placeholder:"Hex Code"}),x.map((function(e){return y(e)})),y(h),w.map((function(e){return y(e,!0)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n(20)}},[[6,1,2]]]);
//# sourceMappingURL=main.d55e9503.chunk.js.map