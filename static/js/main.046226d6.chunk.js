(this.webpackJsonpcompressimage=this.webpackJsonpcompressimage||[]).push([[0],{23:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(16),i=n.n(a),s=(n(23),n(7)),l=n.n(s),o=n(17),u=n(3),j=n(18),d=n.n(j),b=(n(43),n(0)),h=function(){var e,t,n,c,a=Object(r.useState)(null),i=Object(u.a)(a,2),s=i[0],j=i[1],h=Object(r.useState)(null),O=Object(u.a)(h,2),f=O[0],g=O[1],p=Object(r.useState)(null),x=Object(u.a)(p,2),m=x[0],v=x[1],w=Object(r.useState)(null),R=Object(u.a)(w,2),B=R[0],y=R[1],F=Object(r.useState)(100),M=Object(u.a)(F,2),S=M[0],z=M[1],C=Object(r.useState)(100),E=Object(u.a)(C,2),I=E[0],N=E[1],D=Object(r.useRef)(null),L=Object(r.useRef)(null),U=Object(r.useRef)(null),k=Object(r.useRef)(null);function A(){return(A=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get(t,{timeout:1900,responseType:"arraybuffer"}).then((function(e){return e.data})).catch((function(e){return console.log("%c[ERROR]: ",t,"color:red")})).then((function(e){T(e),P(e)}));case 3:return console.log("%cpass: "+t,"color: green"),e.abrupt("return",!0);case 7:return e.prev=7,e.t0=e.catch(0),console.log("%cfail: "+t,"color: red"),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function T(e){var t=new Uint8Array(e),n=new Blob([t.buffer]),r=new FileReader;r.onload=function(e){j(e.target.result)},r.readAsDataURL(n)}function P(e){var t=new Uint8Array(e),n=new Blob([t.buffer]),r=n,c=new FileReader;c.onload=function(e){var t=new Image;t.src=e.target.result;var n=function(e,t,n){var r=e.width,c=e.height;r>c?r>t&&(c=Math.round(c*t/r),r=t):c>n&&(r=Math.round(r*n/c),c=n);return[r,c]}(t,S,I),c=Object(u.a)(n,2),a=c[0],i=c[1],s=document.createElement("canvas");s.width=a,s.height=i,s.getContext("2d").drawImage(t,0,0,a,i),s.toBlob((function(e){v(H(null===r||void 0===r?void 0:r.size)),y(H(null===e||void 0===e?void 0:e.size))}),"image/jpeg",.7),g(s.toDataURL())},c.readAsDataURL(n)}function H(e){var t=Math.floor(Math.log(e)/Math.log(1024));return(e/Math.pow(1024,t)).toFixed(2)+" "+["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}return Object(r.useEffect)((function(){!function(e){A.apply(this,arguments)}(" https://hugoapgarcia.github.io/structure/assets/focus.jpeg")})),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("img",{ref:U,src:s,alt:"original"}),Object(b.jsxs)("div",{className:"label",children:["Reg: ",m," "]}),Object(b.jsx)("img",{ref:k,src:f,alt:"resized"}),Object(b.jsxs)("div",{className:"label",children:["Reg: ",B," "]})]}),Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h5",{children:"Compressing & Resizing Image"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{htmlFor:"fname",children:"width:"}),Object(b.jsx)("input",{type:"text",id:"fname",name:"width",ref:D,placeholder:"Enter px"}),Object(b.jsx)("label",{htmlFor:"lname",children:"height:"}),Object(b.jsx)("input",{type:"text",id:"lname",name:"height",ref:L,placeholder:"Enter px"}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"button",onClick:function(e){return z(D.current.value),void N(L.current.value)},children:"Resize"})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"description",children:[Object(b.jsx)("p",{children:"Images Dimensions:"}),Object(b.jsxs)("label",{children:["Original :  ",null===(e=U.current)||void 0===e?void 0:e.naturalWidth," X ",null===(t=U.current)||void 0===t?void 0:t.naturalHeight]}),Object(b.jsx)("br",{}),Object(b.jsxs)("p",{children:["Image compressed & resized base on ",Object(b.jsx)("span",{children:"width"})," x ",Object(b.jsx)("span",{children:"height"})]}),Object(b.jsxs)("label",{children:["Compressed/Resized :  ",null===(n=k.current)||void 0===n?void 0:n.naturalWidth," X ",null===(c=k.current)||void 0===c?void 0:c.naturalHeight]})]})]})]})})};var O=function(){return Object(b.jsx)(h,{})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),f()}},[[45,1,2]]]);
//# sourceMappingURL=main.046226d6.chunk.js.map