(this["webpackJsonptranslator-ui-components"]=this["webpackJsonptranslator-ui-components"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var n,l=c(1),r=c.n(l),s=c(7),i=c.n(s),a=(c(14),c(15),c(2)),o=c(0),j=function(e){var t=e.heading,c=e.onClick,n="tab-list-item";return e.activeTab===t&&(n+=" tab-list-item active"),Object(o.jsx)("div",{className:n,onClick:c,"data-heading":t,children:t})},b=c(3),d=function(e){var t=e.children,c=Object(l.useState)(t[0].props.heading),n=Object(a.a)(c,2),r=n[0],s=n[1],i=function(e){s(e.target.dataset.heading)};return Object(o.jsxs)("div",{className:"tabs",children:[Object(o.jsx)("div",{className:"tab-list",children:t.map((function(e,t){var c=e.props.heading;return Object(o.jsx)(j,{activeTab:r,heading:c,onClick:i},t)}))}),t.map((function(e,t){if(r===e.props.heading)return Object(o.jsx)(b.a,{children:Object(o.jsx)("div",{className:"tab-content ".concat(r),children:e.props.children})},t)}))]})},h=function(e){var t=e.color,c=e.opacity,n=t.includes("#")?"override":t,l=c||"100";return"override"===n?Object(o.jsx)("div",{className:"circle ".concat(n," op-").concat(l),style:{backgroundColor:t}}):Object(o.jsx)("div",{className:"circle bg-".concat(n," op-").concat(l)})},O=function(e){var t=e.labelOne,c=e.labelTwo,n=e.labelInternal,r=e.checked,s=Object(l.useState)(r),i=Object(a.a)(s,2),j=i[0],b=i[1],d=t&&c?"toggle has-label":"toggle no-label";d+=n?" internal":" external";return Object(o.jsxs)("label",{className:d+" "+j,children:[t&&c&&!n&&Object(o.jsx)("span",{className:"label one",children:t}),Object(o.jsx)("input",{type:"checkbox",onChange:function(){b(!j)},defaultChecked:r}),Object(o.jsxs)("span",{className:"slider round",children:[t&&c&&n&&Object(o.jsx)("span",{className:"label one",children:t}),t&&c&&n&&Object(o.jsx)("span",{className:"label two",children:c})]}),t&&c&&!n&&Object(o.jsx)("span",{className:"label two",children:c})]})},u=function(e){var t=e.name,c=e.value,n=e.checked,r=e.children,s=Object(l.useState)(n),i=Object(a.a)(s,2),j=i[0],b=i[1],d=j?"checked":"unchecked";return Object(o.jsxs)("label",{className:"radio ".concat(d),children:[Object(o.jsx)("span",{className:"circle"}),Object(o.jsx)("input",{type:"radio",defaultChecked:j,name:t,value:c,onChange:function(){b(!j)}}),Object(o.jsx)("span",{children:r})]})},p=function(e){var t=e.name,c=e.value,n=e.checked,r=e.children,s=Object(l.useState)(n),i=Object(a.a)(s,2),j=i[0],b=i[1],d=j?"checked":"unchecked";return Object(o.jsxs)("label",{className:"checkbox ".concat(d),children:[Object(o.jsx)("span",{className:"circle"}),Object(o.jsx)("input",{type:"checkbox",defaultChecked:j,name:t,value:c,onChange:function(){b(!j)}}),Object(o.jsx)("span",{children:r})]})},x=function(e){var t=e.isSecondary,c=e.handleClick,n=e.href,r=e.iconOnly,s=e._blank,i=e.children,j=t?"secondary":"primary";j+=r?" icon-only":"";var b=Object(l.useState)(!1),d=Object(a.a)(b,2),h=d[0],O=d[1];return void 0===c&&(c=function(e){O(!0)}),Object(o.jsxs)(o.Fragment,{children:[n&&Object(o.jsx)("a",{className:"button ".concat(j," ").concat(h&&"clicked"),onClick:c,href:n,target:s&&"_blank",children:i}),!n&&Object(o.jsx)("button",{className:"button ".concat(j," ").concat(h&&"clicked"),onClick:c,children:i})]})},m=function(e){var t=e.label,c=e.subtitle,n=e.placeholder,l=e.size,r=e.rows;return l=void 0===l?"s":l,Object(o.jsxs)(o.Fragment,{children:[r>1&&Object(o.jsxs)("label",{className:"text-input ".concat(l),children:[t&&Object(o.jsx)("span",{className:"label",children:t}),c&&Object(o.jsx)("span",{className:"subtitle",children:c}),Object(o.jsx)("textarea",{type:"text",placeholder:n,rows:r})]}),(r<=1||void 0===r)&&Object(o.jsxs)("label",{className:"text-input ".concat(l),children:[t&&Object(o.jsx)("span",{className:"label",children:t}),c&&Object(o.jsx)("span",{className:"subtitle",children:c}),Object(o.jsx)("input",{type:"text",placeholder:n,size:"1"})]})]})},f=c(9),v=c.n(f),g=function(e){var t=e.label,c=e.subtitle,n=e.name,r=e.size,s=e.children,i=Object(l.useState)(void 0),j=Object(a.a)(i,2),b=j[0],d=j[1],h=Object(l.useState)(!1),O=Object(a.a)(h,2),u=O[0],p=O[1],x=Object(l.useState)(0),m=Object(a.a)(x,2),f=m[0],g=m[1],y=u?"open":"closed";r=void 0===r?"s":r;var w=function(e){e.preventDefault(),p(!u)},N=function(e){e.preventDefault(),d(e.target.dataset.value),p(!u)};return Object(l.useEffect)((function(){g(!1===u?0:"auto")}),[u]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("label",{className:"select ".concat(r),children:[t&&Object(o.jsx)("span",{className:"label",children:t}),c&&Object(o.jsx)("span",{className:"subtitle",children:c}),Object(o.jsxs)("div",{className:"select-container ".concat(y),children:[Object(o.jsx)("select",{type:"text",name:n,onMouseDown:w,value:b,children:s}),Object(o.jsx)("span",{className:"icon",onMouseDown:w}),Object(o.jsxs)(v.a,{className:"select-list ".concat(y),duration:250,height:f,children:[" ",s.map((function(e,t){return Object(o.jsx)("span",{onClick:N,className:"option","data-value":e.props.value,children:e.props.children},t)}))]})]})]})})},y=["title","titleId"];function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},w.apply(this,arguments)}function N(e,t){if(null==e)return{};var c,n,l=function(e,t){if(null==e)return{};var c,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||(l[c]=e[c]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(l[c]=e[c])}return l}function k(e,t){var c=e.title,r=e.titleId,s=N(e,y);return l.createElement("svg",w({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},s),c?l.createElement("title",{id:r},c):null,n||(n=l.createElement("path",{d:"M10.9149 17.3287C12.338 17.3284 13.7202 16.852 14.8413 15.9753L17.7991 18.9331C18.1121 19.2462 18.6197 19.2462 18.9328 18.9331C19.2459 18.6201 19.2459 18.1125 18.9328 17.7994L15.975 14.8416C16.8522 13.7204 17.3289 12.3379 17.3292 10.9144C17.3292 7.37765 14.4516 4.5 10.9149 4.5C7.37813 4.5 4.50049 7.37765 4.50049 10.9144C4.50049 14.4511 7.37813 17.3287 10.9149 17.3287ZM10.9149 6.10359C13.568 6.10359 15.7256 8.26123 15.7256 10.9144C15.7256 13.5675 13.568 15.7251 10.9149 15.7251C8.26171 15.7251 6.10408 13.5675 6.10408 10.9144C6.10408 8.26123 8.26171 6.10359 10.9149 6.10359Z",fill:"#202124"})))}var C,S,E,P=l.forwardRef(k),L=(c.p,function(e){var t=e.iconInternal,c=e.handleClick,n=e.size,l=t?"internal":"external";return n=void 0===n?"s":n,Object(o.jsxs)("div",{className:"search-container ".concat(l," ").concat(n),children:[Object(o.jsx)("input",{type:"text",placeholder:"Search",className:"search-input"}),!t&&Object(o.jsx)("button",{className:"search-button",onClick:c,children:Object(o.jsx)(P,{})})]})}),M=["title","titleId"];function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},I.apply(this,arguments)}function T(e,t){if(null==e)return{};var c,n,l=function(e,t){if(null==e)return{};var c,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||(l[c]=e[c]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(l[c]=e[c])}return l}function B(e,t){var c=e.title,n=e.titleId,r=T(e,M);return l.createElement("svg",I({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),c?l.createElement("title",{id:n},c):null,C||(C=l.createElement("circle",{cx:12,cy:12,r:8.25,stroke:"#202124",strokeWidth:1.5})),S||(S=l.createElement("path",{d:"M12.875 7.6414L12.5442 13.7154C12.53 13.8368 12.473 13.9317 12.3735 14C12.2739 14.0658 12.1494 14.0987 12 14.0987C11.8506 14.0987 11.7261 14.0658 11.6265 14C11.5269 13.9317 11.47 13.8368 11.4557 13.7154L11.125 7.65658C11.125 7.45923 11.2085 7.30109 11.3757 7.18217C11.5429 7.06072 11.751 7 12 7C12.2454 7 12.4517 7.06072 12.6189 7.18217C12.7896 7.30362 12.875 7.4567 12.875 7.6414Z",fill:"#202124",stroke:"#202124",strokeWidth:.3})),E||(E=l.createElement("path",{d:"M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z",fill:"#202124"})))}var z,F,D,R=l.forwardRef(B),A=(c.p,["title","titleId"]);function W(){return W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},W.apply(this,arguments)}function H(e,t){if(null==e)return{};var c,n,l=function(e,t){if(null==e)return{};var c,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||(l[c]=e[c]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(l[c]=e[c])}return l}function _(e,t){var c=e.title,n=e.titleId,r=H(e,A);return l.createElement("svg",W({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),c?l.createElement("title",{id:n},c):null,z||(z=l.createElement("circle",{cx:12,cy:12,r:8.25,stroke:"#202124",strokeWidth:1.5})),F||(F=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.6601 16.0494C10.6601 16.6831 10.8944 17 11.3629 17C11.688 17 12.0131 16.8704 12.3382 16.6111C12.6729 16.3423 12.9502 16.0206 13.1701 15.6461C13.39 15.262 13.5 14.9019 13.5 14.5658C13.5 14.4026 13.457 14.321 13.3709 14.321C13.304 14.321 13.2466 14.3882 13.1988 14.5226C13.0554 14.8683 12.9024 15.142 12.7398 15.3436C12.5868 15.5453 12.4482 15.6461 12.3239 15.6461C12.2187 15.6461 12.1661 15.5885 12.1661 15.4733C12.1661 15.4444 12.1757 15.3916 12.1948 15.3148L12.9119 11.5988C12.9789 11.2243 13.0123 10.9602 13.0123 10.8066C13.0123 10.2689 12.8115 10 12.4099 10C12.0848 10 11.7502 10.1344 11.4059 10.4033C11.1657 10.5909 10.9534 10.8043 10.7691 11.0434C10.6088 11.2512 10.3775 11.5428 10.5388 11.7498C10.5484 11.7621 10.56 11.7727 10.5741 11.7812C10.6295 11.8149 10.6987 11.8012 10.7659 11.7684C10.9594 11.6741 11.0583 11.4325 11.2623 11.3639C11.2822 11.3572 11.3014 11.3539 11.3199 11.3539C11.4059 11.3539 11.449 11.4211 11.449 11.5556C11.449 11.594 11.4394 11.6996 11.4203 11.8724L10.7318 15.358C10.684 15.6461 10.6601 15.8765 10.6601 16.0494Z",fill:"#202124"})),D||(D=l.createElement("circle",{cx:12.228,cy:8,r:1,fill:"#202124"})))}var Z,G,J=l.forwardRef(_),U=(c.p,["title","titleId"]);function Y(){return Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},Y.apply(this,arguments)}function q(e,t){if(null==e)return{};var c,n,l=function(e,t){if(null==e)return{};var c,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||(l[c]=e[c]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(l[c]=e[c])}return l}function K(e,t){var c=e.title,n=e.titleId,r=q(e,U);return l.createElement("svg",Y({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),c?l.createElement("title",{id:n},c):null,Z||(Z=l.createElement("circle",{cx:12,cy:12,r:8.25,stroke:"#202124",strokeWidth:1.5})),G||(G=l.createElement("path",{d:"M8 12.5L11 15.5L16 9.5",stroke:"#202124",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var Q,V,X=l.forwardRef(K),$=(c.p,["title","titleId"]);function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},ee.apply(this,arguments)}function te(e,t){if(null==e)return{};var c,n,l=function(e,t){if(null==e)return{};var c,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||(l[c]=e[c]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(l[c]=e[c])}return l}function ce(e,t){var c=e.title,n=e.titleId,r=te(e,$);return l.createElement("svg",ee({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),c?l.createElement("title",{id:n},c):null,Q||(Q=l.createElement("circle",{cx:12,cy:12,r:8.25,stroke:"#202124",strokeWidth:1.5})),V||(V=l.createElement("path",{d:"M9 15L12 12M14.85 9L12 12M12 12L15 15M12 12L9 9",stroke:"#202124",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var ne,le=l.forwardRef(ce),re=(c.p,["title","titleId"]);function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},se.apply(this,arguments)}function ie(e,t){if(null==e)return{};var c,n,l=function(e,t){if(null==e)return{};var c,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||(l[c]=e[c]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(l[c]=e[c])}return l}function ae(e,t){var c=e.title,n=e.titleId,r=ie(e,re);return l.createElement("svg",se({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),c?l.createElement("title",{id:n},c):null,ne||(ne=l.createElement("path",{d:"M9 15L12 12M14.85 9L12 12M12 12L15 15M12 12L9 9",stroke:"#202124",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var oe,je=l.forwardRef(ae),be=(c.p,function(e){var t=e.active,c=e.type,n=e.toggle,r=e.verticalPosition,s=e.horizontalPosition,i=e.timeout,j=e.fade,d=e.buttonText,h=e.children;r=r||"middle",s=s||"middle",i=i||3e3,i+=j=j||1500;var O=n,u=Object(l.useState)(t),p=Object(a.a)(u,2),m=p[0],f=p[1],v=Object(l.useState)(!1),g=Object(a.a)(v,2),y=g[0],w=g[1],N=y?"fade-out":"fade-in",k=c+" "+r+" "+s,C=Object(o.jsx)(o.Fragment,{});switch(c){case"success":C=Object(o.jsx)(X,{});break;case"warning":C=Object(o.jsx)(R,{});break;case"error":C=Object(o.jsx)(le,{});break;default:C=Object(o.jsx)(J,{})}var S=function(){w(!0);var e=setTimeout((function(){w(!1),f(!1)}),2e3);return function(){clearTimeout(e)}};return Object(l.useEffect)((function(){if(m&&!O){var e=setTimeout((function(){S()}),i);return function(){clearTimeout(e)}}}),[m,y,i,O]),Object(o.jsxs)("div",{className:"alert",children:[d&&Object(o.jsx)(x,{handleClick:function(){f(!0)},children:d}),m&&Object(o.jsx)(b.a,{className:"alert-container ".concat(k," ").concat(N),duration:j,children:Object(o.jsxs)("div",{className:"container",children:[O&&Object(o.jsx)("button",{className:"close",onClick:S,children:Object(o.jsx)(je,{})}),Object(o.jsx)("span",{className:"icon",children:C}),Object(o.jsx)("div",{className:"content",children:h})]})})]})}),de=["title","titleId"];function he(){return he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},he.apply(this,arguments)}function Oe(e,t){if(null==e)return{};var c,n,l=function(e,t){if(null==e)return{};var c,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||(l[c]=e[c]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(l[c]=e[c])}return l}function ue(e,t){var c=e.title,n=e.titleId,r=Oe(e,de);return l.createElement("svg",he({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},r),c?l.createElement("title",{id:n},c):null,oe||(oe=l.createElement("path",{d:"M8 12L11 15L16 9",stroke:"#202124",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var pe=l.forwardRef(ue);c.p;var xe=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{className:"App-header",children:Object(o.jsx)(b.a,{children:Object(o.jsx)("h1",{children:"Translator UI Components"})})}),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(d,{children:[Object(o.jsxs)(j,{heading:"Typography",children:[Object(o.jsx)("p",{className:"h1",children:"H1 Headline"}),Object(o.jsx)("p",{className:"h2",children:"H2 Headline"}),Object(o.jsx)("p",{className:"h3",children:"H3 Headline"}),Object(o.jsx)("p",{className:"h4",children:"H4 Headline"}),Object(o.jsx)("p",{className:"h5",children:"H5 Headline"}),Object(o.jsx)("p",{className:"h6",children:"h6 Headline"}),Object(o.jsx)("p",{className:"sub-one",children:"Subtitle 1"}),Object(o.jsx)("p",{className:"sub-two",children:"Subtitle 2"}),Object(o.jsx)("p",{className:"body-one",children:"Body 1"}),Object(o.jsx)("p",{className:"body-two",children:"Body 2"}),Object(o.jsx)("button",{children:"Button"}),Object(o.jsx)("p",{className:"caption",children:"Caption"}),Object(o.jsx)("p",{className:"overline",children:"Overline"})]}),Object(o.jsxs)(j,{heading:"Colors",children:[Object(o.jsxs)("div",{className:"circle-container",children:[Object(o.jsxs)("p",{children:["Red",Object(o.jsx)("br",{}),"#A62639"]}),Object(o.jsx)(h,{color:"red"})]}),Object(o.jsxs)("div",{className:"circle-container",children:[Object(o.jsxs)("p",{children:["Yellow",Object(o.jsx)("br",{}),"#FBAF00"]}),Object(o.jsx)(h,{color:"yellow"})]}),Object(o.jsxs)("div",{className:"circle-container",children:[Object(o.jsxs)("p",{children:["Green",Object(o.jsx)("br",{}),"#238571"]}),Object(o.jsx)(h,{color:"green"})]}),Object(o.jsxs)("div",{className:"circle-container",children:[Object(o.jsxs)("p",{children:["Translator Blue 1",Object(o.jsx)("br",{}),"#003494"]}),Object(o.jsx)(h,{color:"blue-one"})]}),Object(o.jsxs)("div",{className:"circle-container",children:[Object(o.jsxs)("p",{children:["Translator Blue 2",Object(o.jsx)("br",{}),"#2D5492"]}),Object(o.jsx)(h,{color:"blue-two"})]}),Object(o.jsxs)("div",{className:"circle-container",children:[Object(o.jsxs)("p",{children:["Translator Purple 1",Object(o.jsx)("br",{}),"#662E6B"]}),Object(o.jsx)(h,{color:"purple-one"})]}),Object(o.jsxs)("div",{className:"circle-container",children:[Object(o.jsxs)("p",{children:["Translator Purple 2",Object(o.jsx)("br",{}),"#524F81"]}),Object(o.jsx)(h,{color:"purple-two"})]}),Object(o.jsxs)("div",{className:"circle-container",children:[Object(o.jsxs)("p",{children:["Dark Grey",Object(o.jsx)("br",{}),"#606368"]}),Object(o.jsx)(h,{color:"dark-grey"})]}),Object(o.jsxs)("div",{className:"circle-container",children:[Object(o.jsxs)("p",{children:["Mid Grey",Object(o.jsx)("br",{}),"#CED0D0"]}),Object(o.jsx)(h,{color:"mid-grey"})]}),Object(o.jsxs)("div",{className:"circle-container",children:[Object(o.jsxs)("p",{children:["Light Grey",Object(o.jsx)("br",{}),"#F5F7F7"]}),Object(o.jsx)(h,{color:"light-grey"})]}),Object(o.jsxs)("div",{className:"circle-container",children:[Object(o.jsxs)("p",{children:["Black",Object(o.jsx)("br",{}),"#202124"]}),Object(o.jsx)(h,{color:"black"})]}),Object(o.jsxs)("div",{className:"circle-container",children:[Object(o.jsxs)("p",{children:["White",Object(o.jsx)("br",{}),"#FFFFFF"]}),Object(o.jsx)(h,{color:"white"})]})]}),Object(o.jsxs)(j,{heading:"Elevations",children:[Object(o.jsx)("div",{className:"drop-shadow",style:{height:"100px",width:"300px",marginBottom:"20px",display:"grid",alignContent:"center",justifyContent:"center"},children:Object(o.jsx)("h4",{style:{marginBottom:"0"},children:"Hover"})}),Object(o.jsx)("div",{className:"drop-shadow pressed",style:{height:"100px",width:"300px",marginBottom:"20px",display:"grid",alignContent:"center",justifyContent:"center"},children:Object(o.jsx)("h4",{style:{marginBottom:"0"},children:"Pressed"})})]}),Object(o.jsxs)(j,{heading:"Interactions",children:[Object(o.jsxs)("div",{className:"component",children:[Object(o.jsx)("h5",{children:"Checkbox"}),Object(o.jsx)(p,{children:"Checkbox Example"}),Object(o.jsx)(p,{children:"Checkbox Example"}),Object(o.jsx)(p,{children:"Checkbox Example"}),Object(o.jsx)(p,{checked:!0,children:"Checkbox Example"})]}),Object(o.jsxs)("div",{className:"component",children:[Object(o.jsx)("h5",{children:"Radio"}),Object(o.jsx)(u,{children:"Radio Button Example"}),Object(o.jsx)(u,{children:"Radio Button Example"}),Object(o.jsx)(u,{children:"Radio Button Example"}),Object(o.jsx)(u,{checked:!0,children:"Radio Button Example"})]}),Object(o.jsxs)("div",{className:"component",children:[Object(o.jsx)("h5",{children:"Toggle"}),Object(o.jsx)(O,{checked:!1}),Object(o.jsx)(O,{labelOne:"On",labelTwo:"Off",labelInternal:!0,checked:!1}),Object(o.jsx)(O,{labelOne:"On",labelTwo:"Off",labelInternal:!1,checked:!1})]}),Object(o.jsxs)("div",{className:"component",children:[Object(o.jsx)("h5",{children:"Button"}),Object(o.jsx)(x,{handleClick:function(){console.log("clicked")},children:"Button Type One"}),Object(o.jsxs)(x,{isSecondary:!0,children:[Object(o.jsx)(pe,{})," Button Type Two"]}),Object(o.jsxs)(x,{isSecondary:!1,children:[Object(o.jsx)(pe,{}),"Button With Icon"]}),Object(o.jsxs)(x,{href:"https://google.com",isSecondary:!0,_blank:!0,children:[Object(o.jsx)(pe,{}),"Button With Icon"]}),Object(o.jsx)(x,{href:"https://google.com",isSecondary:!1,iconOnly:!0,children:Object(o.jsx)(pe,{})})]})]}),Object(o.jsx)(j,{heading:"Form Fields",children:Object(o.jsxs)("div",{className:"component",children:[Object(o.jsx)("h5",{children:"Inputs"}),Object(o.jsx)(m,{label:"Label",subtitle:"Subtitle",placeholder:"Small",size:"s"}),Object(o.jsx)(m,{label:"Label",subtitle:"Subtitle",placeholder:"Small",size:"s"}),Object(o.jsx)(m,{label:"Label",subtitle:"Subtitle",placeholder:"Medium",size:"m"}),Object(o.jsx)(m,{label:"Label",subtitle:"Subtitle",placeholder:"Large",size:"l"}),Object(o.jsx)(m,{label:"Label",subtitle:"Subtitle",placeholder:"Medium Multi Row",size:"m",rows:"4"}),Object(o.jsx)(m,{label:"Label",subtitle:"Subtitle",placeholder:"Medium Multi Row",size:"m",rows:"4"}),Object(o.jsxs)(g,{label:"Label",subtitle:"Subtitle",name:"option_selector",children:[Object(o.jsx)("option",{value:"option1",children:"Option1"}),Object(o.jsx)("option",{value:"option2",children:"Option2"}),Object(o.jsx)("option",{value:"option3",children:"Option3"}),Object(o.jsx)("option",{value:"option4",children:"Option4 that is way too long"})]}),Object(o.jsxs)(g,{label:"Label",subtitle:"Subtitle",name:"option_selector",size:"s",children:[Object(o.jsx)("option",{value:"option1",children:"Option1"}),Object(o.jsx)("option",{value:"option2",children:"Option2"}),Object(o.jsx)("option",{value:"option3",children:"Option3"}),Object(o.jsx)("option",{value:"option4",children:"Option4 that is way too long"})]}),Object(o.jsxs)(g,{label:"Label",subtitle:"Subtitle",name:"option_selector",size:"m",children:[Object(o.jsx)("option",{value:"option1",children:"Option1"}),Object(o.jsx)("option",{value:"option2",children:"Option2"}),Object(o.jsx)("option",{value:"option3",children:"Option3"}),Object(o.jsx)("option",{value:"option4",children:"Option4 that is way too long"})]}),Object(o.jsxs)(g,{label:"Label",subtitle:"Subtitle",name:"option_selector",size:"l",children:[Object(o.jsx)("option",{value:"option1",children:"Option1"}),Object(o.jsx)("option",{value:"option2",children:"Option2"}),Object(o.jsx)("option",{value:"option3",children:"Option3"}),Object(o.jsx)("option",{value:"option4",children:"Option4 that is way too long"})]}),Object(o.jsx)(L,{iconInternal:!0}),Object(o.jsx)(L,{size:"m"}),Object(o.jsx)(L,{iconInternal:!0,size:"s"}),Object(o.jsx)(L,{size:"l"})]})}),Object(o.jsx)(j,{heading:"Notifications",children:Object(o.jsxs)("div",{className:"component",children:[Object(o.jsx)("h5",{children:"Alerts"}),Object(o.jsxs)(be,{type:"success",buttonText:"Alert Top Left",timeout:5e3,verticalPosition:"top",horizontalPosition:"left",children:[Object(o.jsx)("h3",{className:"sub-one",children:"Success!"}),Object(o.jsx)("p",{className:"body-two",children:"Message Details"})]}),Object(o.jsxs)(be,{type:"warning",buttonText:"Alert Top Middle",timeout:5e3,verticalPosition:"top",horizontalPosition:"middle",children:[Object(o.jsx)("h3",{className:"sub-one",children:"Warning!"}),Object(o.jsx)("p",{className:"body-two",children:"Message Details"})]}),Object(o.jsxs)(be,{type:"error",buttonText:"Alert Top Right",timeout:5e3,verticalPosition:"top",horizontalPosition:"right",children:[Object(o.jsx)("h3",{className:"sub-one",children:"Cancelled!"}),Object(o.jsx)("p",{className:"body-two",children:"Message Details"})]}),Object(o.jsxs)(be,{type:"info",buttonText:"Alert Middle Left",timeout:5e3,verticalPosition:"middle",horizontalPosition:"left",children:[Object(o.jsx)("h3",{className:"sub-one",children:"Information"}),Object(o.jsx)("p",{className:"body-two",children:"Message Details"})]}),Object(o.jsxs)(be,{type:"success",buttonText:"Alert Middle Middle",timeout:5e3,children:[Object(o.jsx)("h3",{className:"sub-one",children:"Success"}),Object(o.jsx)("p",{className:"body-two",children:"Message Details"})]}),Object(o.jsxs)(be,{type:"warning",buttonText:"Alert Middle Left",timeout:5e3,verticalPosition:"middle",horizontalPosition:"right",children:[Object(o.jsx)("h3",{className:"sub-one",children:"Warning!"}),Object(o.jsx)("p",{className:"body-two",children:"Message Details"})]}),Object(o.jsxs)(be,{type:"error",buttonText:"Alert Bottom Left",timeout:5e3,verticalPosition:"bottom",horizontalPosition:"left",children:[Object(o.jsx)("h3",{className:"sub-one",children:"Error!"}),Object(o.jsx)("p",{className:"body-two",children:"Message Details"})]}),Object(o.jsxs)(be,{type:"info",buttonText:"Alert Bottom Middle",timeout:5e3,verticalPosition:"bottom",horizontalPosition:"middle",children:[Object(o.jsx)("h3",{className:"sub-one",children:"Information"}),Object(o.jsx)("p",{className:"body-two",children:"Message Details"})]}),Object(o.jsxs)(be,{type:"success",buttonText:"Alert Bottom Right",timeout:5e3,verticalPosition:"bottom",horizontalPosition:"right",children:[Object(o.jsx)("h3",{className:"sub-one",children:"Success!"}),Object(o.jsx)("p",{className:"body-two",children:"Message Details"})]}),Object(o.jsxs)(be,{type:"success",buttonText:"Alert No Fade Out",timeout:5e3,verticalPosition:"top",horizontalPosition:"middle",toggle:!0,children:[Object(o.jsx)("h3",{className:"sub-one",children:"Success!"}),Object(o.jsx)("p",{className:"body-two",children:"Message Details"})]})]})})]})})]})},me=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,25)).then((function(t){var c=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),l(e),r(e),s(e)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(xe,{})}),document.getElementById("root")),me()}},[[24,1,2]]]);
//# sourceMappingURL=main.e7703993.chunk.js.map