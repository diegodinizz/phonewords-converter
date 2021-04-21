(this["webpackJsonpphonewords-converter"]=this["webpackJsonpphonewords-converter"]||[]).push([[0],{41:function(n,e,t){"use strict";t.r(e);var r,i,c,o,a,s,d,l,b,j,h,x,u,f,p,m,O,g,w,v,y,k,C=t(0),S=t.n(C),z=t(10),E=t.n(z),F=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),r(n),i(n),c(n),o(n)}))},D=t(5),P=t(24),R=t(9),H=t(2),N=t(3),T=t(1),_=N.c.div(r||(r=Object(H.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 25rem;\n\n  @media screen and (max-width: 600px) {\n    width: 20rem;\n  }\n"]))),L=N.c.p(i||(i=Object(H.a)(["\n  margin: 3px 0;\n  font-weight: 300;\n  font-size: 1rem;\n  color: gray;\n\n  @media screen and (max-width: 600px) {\n    font-size: 0.8rem;\n  }\n"]))),M=N.c.input(c||(c=Object(H.a)(["\n  border: none;\n  outline: none;\n  padding: 10px;\n  width: 100%;\n  height: 50px;\n  font-size: 17px;\n  color: #545454;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n\n  ::placeholder {\n    color: gainsboro;\n  }\n\n  @media screen and (max-width: 600px) {\n    height: 40px;\n  }\n"]))),W=function(n){var e=n.value,t=n.placeholder,r=n.onChange;return Object(T.jsxs)(_,{children:[Object(T.jsx)(L,{children:"Phone Number (Max 6 digits)"}),Object(T.jsx)(M,{value:e,placeholder:t,onChange:r,maxLength:"6",onKeyPress:function(n){new RegExp("^[2-9]+$").test(n.key)||n.preventDefault()}})]})},I=N.c.div(o||(o=Object(H.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 25rem;\n  height: auto;\n  margin-top: 1rem;\n  background-color: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n\n  @media screen and (max-width: 600px) {\n    width: 20rem;\n  }\n"]))),U=N.c.div(a||(a=Object(H.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px;\n  cursor: pointer;\n  border-top: 1px solid rgba(212, 212, 217, 0.5);\n"]))),A=N.c.p(s||(s=Object(H.a)(["\n  font-weight: 500;\n  font-size: 1rem;\n  margin: 0;\n"]))),B=Object(N.b)(d||(d=Object(H.a)(["\n  transform: rotate(-135deg);\n  -webkit-transform: rotate(-135deg);\n  transition: transform 300ms ease-out;\n"]))),J=N.c.i(l||(l=Object(H.a)(["\n  margin-right: 0.5rem;\n  border: solid #41444b;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 4px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  transition: transform 300ms ease-out;\n\n  &.turn {\n    ","\n  }\n"])),B),K=Object(N.b)(b||(b=Object(H.a)(["\n  display: grid;\n"]))),$=N.c.div(j||(j=Object(H.a)(["\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n  padding: 15px 30px;\n  display: none;\n  gap: 10px;\n\n  .row-4 {\n    grid-column-start: 2;\n  }\n\n  &.active {\n    ","\n  }\n"])),K),q=N.c.div(h||(h=Object(H.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: auto;\n  height: 60px;\n  cursor: pointer;\n  font-size: 1.5rem;\n  background-color: #e8e8e8;\n\n  :hover {\n    background-color: #f4f4f2;\n  }\n"]))),G=function(n){var e=n.onClick,t=Object(C.useState)(!1),r=Object(R.a)(t,2),i=r[0],c=r[1];return Object(T.jsxs)(I,{children:[Object(T.jsxs)(U,{onClick:function(){return c(!i)},children:[Object(T.jsx)(A,{children:"Show/Hide Phone Keyboard"}),Object(T.jsx)(J,{className:i?"turn":""})]}),Object(T.jsxs)($,{className:i?"active":"",children:[Object(T.jsx)(q,{children:"1"}),Object(T.jsx)(q,{onClick:e,children:"2"}),Object(T.jsx)(q,{onClick:e,children:"3"}),Object(T.jsx)(q,{onClick:e,children:"4"}),Object(T.jsx)(q,{onClick:e,children:"5"}),Object(T.jsx)(q,{onClick:e,children:"6"}),Object(T.jsx)(q,{onClick:e,children:"7"}),Object(T.jsx)(q,{onClick:e,children:"8"}),Object(T.jsx)(q,{onClick:e,children:"9"}),Object(T.jsx)(q,{className:"row-4",children:"0"})]})]})},Q=Object(N.b)(x||(x=Object(H.a)(["\n  opacity: 0.7;\n  cursor: not-allowed;\n"]))),V=N.c.button(u||(u=Object(H.a)(["\n  min-width: 85px;\n  width: auto;\n  background-color: ",";\n  color: #fff;\n  cursor: pointer;\n  font-size: 1rem;\n  font-weight: 600;\n  height: 50px;\n  padding: 0 1rem;\n  text-align: center;\n  border: none;\n  outline: none;\n  margin: 1rem;\n\n  ","\n\n  @media screen and (max-width: 600px) {\n    height: 45px;\n  }\n"])),(function(n){return n.backgroundColor}),(function(n){if(n.disabled)return Q})),X=function(n){var e=n.children,t=n.onClick,r=n.disabled,i=n.color;return Object(T.jsx)(V,{onClick:t,disabled:r,backgroundColor:i,children:e})},Y=N.c.div(f||(f=Object(H.a)(["\n  display: flex;\n  width: auto;\n  min-width: 3rem;\n  background-color: #0a84ff;\n  border-radius: 5px;\n  color: #eaf3f5;\n  font-size: 18px;\n  font-weight: 600;\n  height: 50px;\n  padding: 0 0.8rem;\n  margin: 0.7rem;\n  justify-content: center;\n  align-items: center;\n"]))),Z=function(n){var e=n.item;return Object(T.jsx)(Y,{children:e})},nn=N.c.div(p||(p=Object(H.a)(["\n  width: 80%;\n  margin: 2rem 0;\n  margin-left: auto;\n  margin-right: auto;\n"]))),en=N.c.div(m||(m=Object(H.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),tn=N.c.h1(O||(O=Object(H.a)(["\n  font-size: 1.5rem;\n  text-align: center;\n"]))),rn=function(n){var e=n.number,t=Object(D.c)((function(n){return n.wordsData}));return Object(T.jsx)("div",{children:t.length?Object(T.jsxs)(nn,{children:[Object(T.jsxs)(tn,{children:["List of Words for the number: ",e]}),Object(T.jsx)(en,{children:t.map((function(n,e){return Object(T.jsx)(Z,{item:n},e)}))})]}):null})},cn=t(15),on=t.n(cn),an=t(22),sn="FETCH_PHONEWORDS_START",dn="FETCH_PHONEWORDS_SUCCESS",ln="FETCH_PHONEWORDS_FAILURE",bn="CLEAR_PHONEWORDS",jn=N.c.div(g||(g=Object(H.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #41444b;\n"]))),hn=N.c.h1(w||(w=Object(H.a)(["\n  font-size: 3rem;\n  margin: 3rem 0 0 0;\n\n  @media screen and (max-width: 600px) {\n    font-size: 2rem;\n  }\n\n  @media screen and (max-width: 375px) {\n    font-size: 1.8rem;\n  }\n"]))),xn=N.c.h3(v||(v=Object(H.a)(["\n  font-size: 1rem;\n  font-weight: 300;\n  margin: 0 0 4rem 0;\n\n  @media screen and (max-width: 600px) {\n    font-size: 0.7rem;\n  }\n\n  @media screen and (max-width: 375px) {\n    font-size: 0.6rem;\n  }\n"]))),un=N.c.div(y||(y=Object(H.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),fn=function(){var n=Object(C.useState)(""),e=Object(R.a)(n,2),t=e[0],r=e[1],i=Object(C.useState)(""),c=Object(R.a)(i,2),o=c[0],a=c[1],s=Object(D.b)();return Object(T.jsxs)(jn,{children:[Object(T.jsx)(hn,{children:"Phonewords Converter"}),Object(T.jsx)(xn,{children:"Submit a phone number to display a list of its possible phone words"}),Object(T.jsx)(W,{value:o,placeholder:"Digits valid from 2 to 9",onChange:function(n){return a([n.target.value].join(""))}}),Object(T.jsx)(G,{onClick:function(n){o.length<=5&&a([].concat(Object(P.a)(o),[n.target.innerText]).join(""))}}),Object(T.jsxs)(un,{children:[Object(T.jsx)(X,{onClick:function(){s(function(n){return function(){var e=Object(an.a)(on.a.mark((function e(t){var r,i,c,o,a;return on.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:sn}),e.next=3,fetch("/phonewords/api/".concat(n));case 3:return r=e.sent,e.next=6,r.json();case 6:i=e.sent,c=i.success,o=i.error,a=i.phonewords,c||t({type:ln,payload:o}),t({type:dn,payload:a});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}(o)),r(o),a("")},disabled:""===o,color:"#30d158",children:"Submit"}),Object(T.jsx)(X,{onClick:function(){a(""),r(""),s({type:bn})},color:"#8E8E93",children:"Clear"})]}),Object(T.jsx)(rn,{number:t})]})},pn=Object(N.a)(k||(k=Object(H.a)(["\nhtml {\n  box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\nbody {\n  margin: 0;\n  background-color: #eaf3f5;\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n"])));var mn=function(){return Object(T.jsxs)("div",{children:[Object(T.jsx)(fn,{}),Object(T.jsx)(pn,{})]})},On=t(7),gn=t(23),wn=t(4),vn={wordsData:[],isFetching:!0,errorMessage:void 0},yn=Object(On.c)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case sn:return Object(wn.a)(Object(wn.a)({},n),{},{isFetching:!0});case dn:return Object(wn.a)(Object(wn.a)({},n),{},{isFetching:!1,wordsData:e.payload});case ln:return Object(wn.a)(Object(wn.a)({},n),{},{isFetching:!1,errorMessage:e.payload});case bn:return Object(wn.a)(Object(wn.a)({},n),{},{wordsData:[]});default:return n}}),Object(On.a)(gn.a));E.a.render(Object(T.jsx)(D.a,{store:yn,children:Object(T.jsx)(S.a.StrictMode,{children:Object(T.jsx)(mn,{})})}),document.getElementById("root")),F()}},[[41,1,2]]]);
//# sourceMappingURL=main.26c9696d.chunk.js.map