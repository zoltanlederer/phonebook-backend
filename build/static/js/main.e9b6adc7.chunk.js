(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{44:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var a=t(19),c=t.n(a),r=t(20),o=t(10),u=t(3),i=t(1),s=t(0),l=function(e){var n=e.handleSubmit,t=e.newName,a=e.newNumber,c=e.nameInput,r=e.numberInput;return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:n,children:[Object(s.jsxs)("div",{children:["Name: ",Object(s.jsx)("input",{value:t,onChange:c})]}),Object(s.jsxs)("div",{children:["Number: ",Object(s.jsx)("input",{value:a,onChange:r})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})})},b=function(e){var n=e.persons,t=e.filter,a=e.handleDelete,c=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return Object(s.jsxs)("li",{children:[e.name,": ",e.number," \xa0",Object(s.jsx)("button",{id:e.id,"data-name":e.name,onClick:a,children:"Delete"})]},e.name)}));return Object(s.jsx)("ul",{children:c})},d=function(e){var n=e.newFilter,t=e.filterInput;return Object(s.jsxs)("div",{children:["Filter shown with ",Object(s.jsx)("input",{value:n,onChange:t})]})},f=function(e){var n=e.message,t=e.style;return null===n?null:Object(s.jsx)("div",{className:t,children:n})},j=t(5),m=t.n(j),h="/api/persons",O=function(){return m.a.get(h).then((function(e){return e.data}))},p=function(e){return m.a.post(h,e).then((function(e){return e.data}))},v=function(e,n){return m.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},w=function(e){return m.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},x=function(){var e=Object(i.useState)([]),n=Object(u.a)(e,2),t=n[0],a=n[1],c=Object(i.useState)(""),j=Object(u.a)(c,2),m=j[0],h=j[1],x=Object(i.useState)(""),g=Object(u.a)(x,2),C=g[0],I=g[1],S=Object(i.useState)(""),L=Object(u.a)(S,2),N=L[0],k=L[1],y=Object(i.useState)(),D=Object(u.a)(y,2),T=D[0],F=D[1],A=Object(i.useState)(),E=Object(u.a)(A,2),J=E[0],P=E[1];Object(i.useEffect)((function(){O().then((function(e){a(e)}))}),[]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(f,{message:T,style:J}),Object(s.jsx)(d,{newFilter:N,filterInput:function(e){k(e.target.value)}}),Object(s.jsx)("h3",{children:"Add a new"}),Object(s.jsx)(l,{handleSubmit:function(e){if(e.preventDefault(),t.some((function(e){return e.name.toLowerCase()===m.toLowerCase()}))){if(window.confirm("".concat(m," is already added to phonebook, replace the old number with a new one?"))){var n=t.filter((function(e){return e.name.toLowerCase()===m.toLowerCase()})),c=n[0].id,u=Object(o.a)(Object(o.a)({},n[0]),{},{number:C});v(c,u).then((function(e){var n=Object(r.a)(t);n[t.map((function(e){return e.name.toLowerCase()})).indexOf(m.toLowerCase())]=e,a(n),h(""),I(""),F("Phone number updated"),P("notification"),setTimeout((function(){F(null),P(null)}),5e3)})).catch((function(e){F("Information of ".concat(n[0].name," has already been removed from server")),P("warning"),setTimeout((function(){F(null),P(null)}),5e3)}))}}else p({name:m,number:C}).then((function(e){a(t.concat(e)),h(""),I(""),F("Added ".concat(m)),P("notification"),setTimeout((function(){F(null),P(null)}),5e3)}))},newName:m,newNumber:C,nameInput:function(e){h(e.target.value)},numberInput:function(e){I(e.target.value)}}),Object(s.jsx)("h3",{children:"Numbers"}),Object(s.jsx)(b,{persons:t,filter:N,handleDelete:function(e){return function(e){var n=parseInt(e.target.id);window.confirm("Delete ".concat(e.target.dataset.name,"?"))&&w(n).then((function(){a(t.filter((function(e){return e.id!==n})))})).catch((function(n){F("Information of ".concat(e.target.dataset.name," has already been removed from server")),P("warning"),setTimeout((function(){F(null),P(null)}),5e3)}))}(e)}})]})};t(44);c.a.render(Object(s.jsx)(x,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.e9b6adc7.chunk.js.map