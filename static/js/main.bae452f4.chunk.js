(this["webpackJsonpcolor-js"]=this["webpackJsonpcolor-js"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(5),r=n.n(o),i=(n(12),n(6)),l=n(2),s=function(e,t){var n=Object(c.useState)(!1),o=Object(l.a)(n,2),r=o[0],i=o[1],s=Object(c.useRef)(null);return a.a.createElement("div",{style:{padding:"5px"}},a.a.createElement("span",{style:{display:"inline-block",width:"100px",textAlign:"right"}},e.t),a.a.createElement("span",{className:"color-block",ref:s,style:f(e.c,t),onClick:function(){return t=e.c,navigator.clipboard.writeText(t),i(!0),void setTimeout((function(){i(!1)}),3e3);var t}},e.c),a.a.createElement("div",{className:"copy ".concat(r&&"success")},"Copied!"))},u=(n(13),n(1)),d=n.n(u),p=[1,2,3,4,5,6,7,8,9],f=function(e,t){return{display:"inline-block",padding:"10px",marginLeft:"10px",backgroundColor:"".concat(e),borderRadius:"6px",width:"100px",color:t?"white":"black"}},m=function(e){return e.length<=7&&!e.includes("#")?"#"+e:e};var b=function(){var e=Object(c.useRef)(null),t=function(e){return p.map((function(t){var n=m(e);return n.includes("#")?{t:"lighten ".concat(10-t,"0% "),c:d()("#fff").mix(d()("".concat(n)),t/10).hex()}:n.includes("rgb")?{t:"lighten ".concat(10-t,"0% "),c:d()("#fff").mix(d()("".concat(n)),t/10).rgb()}:{t:"lighten ".concat(10-t,"0% "),c:d()("#fff").mix(d()("".concat(n)),t/10).hex()}}))},n=function(e){return p.map((function(t){var n=m(e);return n.includes("#")?{t:"darken ".concat(t,"0% "),c:d()("".concat(n)).darken(t/10).hex()}:{t:"darken ".concat(t,"0% "),c:d()("".concat(n)).darken(t/10)}}))};Object(c.useEffect)((function(){e.current.focus()}),[]);var o=Object(c.useState)("#C63527"),r=Object(l.a)(o,2),u=r[0],f=r[1],b=Object(c.useState)({t:"BASE",c:"".concat("#C63527")}),g=Object(l.a)(b,2),h=g[0],x=g[1],v=Object(c.useState)(t("#C63527")),y=Object(l.a)(v,2),k=y[0],E=y[1],j=Object(c.useState)(n("#C63527")),w=Object(l.a)(j,2),O=w[0],S=w[1],C=Object(c.useState)(!1),B=Object(l.a)(C,2),A=B[0],R=B[1],T={padding:"12px",fontSize:"16px",border:"5px solid grey",borderRadius:"8px",marginTop:"10px"},N=function(){var e=u;console.log(u),u.length<=7&&(u.includes("#")||(e="#"+u)),e.includes("#")?(R(!1),x({t:"BASE",c:"".concat(e)}),E(t(e)),S(n(e))):R("This can only handle hex codes at the moment, but will support all colors soon!")};return a.a.createElement("div",{className:"App"},a.a.createElement("div",{style:{width:"400px",display:"inline-block",marginTop:"40px",fontWeight:"bold",fontStyle:"italic",fontSize:"40px"}},a.a.createElement("div",null,"Shaderade")),a.a.createElement("div",{style:{marginBottom:"16px"}},a.a.createElement("input",{ref:e,className:"input",style:T,onChange:function(e){f(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&N()},value:u,placeholder:"Hex Code"}),a.a.createElement("button",{style:Object(i.a)({},T,{border:"1px solid grey",marginLeft:"12px",cursor:"pointer",backgroundColor:"#e0e0e0"}),type:"submit",onClick:N},"Shade It!"),A?a.a.createElement("div",{style:{color:"red",fontWeight:"bold"}},A):null),a.a.createElement("div",{style:{marginBottom:"20px"}},"Click any color to copy its value to the clipboard"),k.map((function(e){return s(e)})),a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("div",{style:{display:"inline-block",width:"400px",border:"3px solid black",borderRadius:"5px",backgroundColor:"#f0f0f0"}},s(h))),O.map((function(e){return s(e,!0)})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(21)}},[[7,1,2]]]);
//# sourceMappingURL=main.bae452f4.chunk.js.map