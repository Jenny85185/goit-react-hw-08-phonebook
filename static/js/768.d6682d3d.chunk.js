"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[768],{1768:function(e,n,r){r.r(n),r.d(n,{default:function(){return A}});var t=r(9434),o="NOT_FOUND";var i=function(e,n){return e===n};function u(e,n){var r="object"===typeof n?n:{equalityCheck:n},t=r.equalityCheck,u=void 0===t?i:t,a=r.maxSize,c=void 0===a?1:a,s=r.resultEqualityCheck,l=function(e){return function(n,r){if(null===n||null===r||n.length!==r.length)return!1;for(var t=n.length,o=0;o<t;o++)if(!e(n[o],r[o]))return!1;return!0}}(u),f=1===c?function(e){var n;return{get:function(r){return n&&e(n.key,r)?n.value:o},put:function(e,r){n={key:e,value:r}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var r=[];function t(e){var t=r.findIndex((function(r){return n(e,r.key)}));if(t>-1){var i=r[t];return t>0&&(r.splice(t,1),r.unshift(i)),i.value}return o}return{get:t,put:function(n,i){t(n)===o&&(r.unshift({key:n,value:i}),r.length>e&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(c,l);function d(){var n=f.get(arguments);if(n===o){if(n=e.apply(null,arguments),s){var r=f.getEntries(),t=r.find((function(e){return s(e.value,n)}));t&&(n=t.value)}f.put(arguments,n)}return n}return d.clearCache=function(){return f.clear()},d}function a(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var r=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return n}function c(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),t=1;t<n;t++)r[t-1]=arguments[t];var o=function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];var i,u=0,c={memoizeOptions:void 0},s=t.pop();if("object"===typeof s&&(c=s,s=t.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var l=c,f=l.memoizeOptions,d=void 0===f?r:f,p=Array.isArray(d)?d:[d],x=a(t),h=e.apply(void 0,[function(){return u++,s.apply(null,arguments)}].concat(p)),v=e((function(){for(var e=[],n=x.length,r=0;r<n;r++)e.push(x[r].apply(null,arguments));return i=h.apply(null,e)}));return Object.assign(v,{resultFunc:s,memoizedResultFunc:h,dependencies:x,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),v};return o}var s=c(u),l=function(e){return e.contacts.items},f=function(e){return e.filter},d=function(e){return e.contacts.isLoading},p=s([f,l],(function(e,n){if(""===e)return n;var r=e.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(r)}))})),x=r(9517),h=r(4087),v=r(2406),b=r(6611),m=r(184);function g(){var e=(0,t.I0)(),n=(0,t.v9)(p);return(0,m.jsx)(h.xu,{as:"ul",display:"flex",flexDirection:"column",alignItems:"center",children:(0,m.jsx)(h.xu,{width:"300px",border:"1px",borderColor:"black",p:5,borderRadius:4,children:n.map((function(n,r){return(0,m.jsxs)(h.xu,{as:"li",mb:4,display:"flex",alignItems:"center",justifyContent:"space-between",bg:"lightblue",p:2,borderRadius:20,boxShadow:"dark-lg",rounded:"md",_last:{mb:0},_hover:{background:"white",color:"teal.500"},children:[(0,m.jsxs)(v.x,{fontWeight:500,children:[n.name," ",n.phone]}),(0,m.jsx)(b.z,{borderRadius:"4",border:"1px",borderColor:"gray.500",_hover:{background:"teal"},onClick:function(){return e((0,x.GK)(n.id))},children:"Delete"})]},n.id)}))})})}var y=r(6895);function j(){var e=(0,t.v9)(f),n=(0,t.I0)();return(0,m.jsxs)(h.xu,{display:"flex",flexDirection:"column",alignItems:"center",mb:8,children:[(0,m.jsx)(v.x,{as:"label",fontSize:20,fontWeight:"500",display:"box",mb:4,children:"Find contacts by name"}),(0,m.jsx)(v.x,{as:"input",p:1,border:"1px",borderRadius:4,type:"text",name:"filter",value:e,onChange:function(e){return n((0,y.T)(e.target.value))}})]})}var C=r(2791),w=r(9439),k=r(3402);function z(){var e=(0,t.I0)(),n=(0,C.useState)(""),r=(0,w.Z)(n,2),o=r[0],i=r[1],u=(0,C.useState)(""),a=(0,w.Z)(u,2),c=a[0],s=a[1],f=(0,t.v9)(l);return(0,m.jsx)(h.xu,{p:"15px",border:"1px",borderColor:"gray.500",borderRadius:"4",width:"300px",ml:"auto",mr:"auto",mb:4,children:(0,m.jsx)("form",{onSubmit:function(n){if(n.preventDefault(),f.some((function(e){return e.name.toLowerCase()===o.toLowerCase()})))return k.Am.error("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435"),i(""),void s("");e(x.uK({name:o,number:c})),i(""),s("")},children:(0,m.jsxs)(h.xu,{display:"flex",flexDirection:"column",children:[(0,m.jsxs)(v.x,{as:"label",fontSize:20,fontWeight:"500",children:["Name",(0,m.jsx)(v.x,{as:"input",p:2,placeholder:"GoIt manager",border:"1px",borderRadius:4,name:"name",type:"text",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:function(e){return i(e.target.value)}})]}),(0,m.jsxs)(v.x,{as:"label",fontSize:20,fontWeight:"500",children:["Number",(0,m.jsx)(v.x,{as:"input",p:2,placeholder:"+38 063605 87 89",border:"1px",borderRadius:4,name:"mobile",type:"tel",value:c,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:function(e){return s(e.target.value)}})]}),(0,m.jsx)("br",{}),(0,m.jsx)(b.z,{borderRadius:"4",border:"1px",borderColor:"gray.500",_hover:{background:"blue"},type:"submit",children:"Add contact"})]})})})}function A(){var e=(0,t.I0)(),n=(0,t.v9)(d);(0,C.useEffect)((function(){e(x.yF())}),[e]);var r=(0,t.v9)(l);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("section",{children:[(0,m.jsx)(v.x,{fontSize:"28",textAlign:"center",mb:5,children:"PhoneBook"}),(0,m.jsx)(z,{})]}),(0,m.jsxs)("section",{children:[(0,m.jsx)(v.x,{fontSize:"28",textAlign:"center",mb:5,children:"Contacts"}),n&&(0,m.jsx)("b",{children:"Request in progress..."}),(null===r||void 0===r?void 0:r.length)>0&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(j,{}),(0,m.jsx)(g,{})]})]})]})}},4087:function(e,n,r){r.d(n,{xu:function(){return l}});var t=r(1413),o=r(4925),i=r(795),u=r(7872),a=r(184),c=["size","centerContent"],s=["size"],l=(0,i.m)("div");l.displayName="Box";var f=(0,u.G)((function(e,n){var r=e.size,i=e.centerContent,u=void 0===i||i,s=(0,o.Z)(e,c),f=u?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,a.jsx)(l,(0,t.Z)({ref:n,boxSize:r,__css:(0,t.Z)((0,t.Z)({},f),{},{flexShrink:0,flexGrow:0})},s))}));f.displayName="Square",(0,u.G)((function(e,n){var r=e.size,i=(0,o.Z)(e,s);return(0,a.jsx)(f,(0,t.Z)({size:r,ref:n,borderRadius:"9999px"},i))})).displayName="Circle"}}]);
//# sourceMappingURL=768.d6682d3d.chunk.js.map