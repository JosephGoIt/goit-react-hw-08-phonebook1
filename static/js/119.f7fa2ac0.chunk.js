"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[119],{4119:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var a=n(2791),r=n(9439),c=n(4420),s=n(1656),o=function(e){var t;return(null===(t=e.contacts)||void 0===t?void 0:t.items)||[]},i=function(e){return e.filter},l="ContactForm_form__dhl+T",u="ContactForm_formField__O5fo+",m="ContactForm_formLabel__TSwxK",d="ContactForm_formButton__TN6Jq",f=n(184),h=function(){var e=(0,c.I0)(),t=(0,c.v9)(o),n=(0,a.useState)(""),i=(0,r.Z)(n,2),h=i[0],p=i[1],x=(0,a.useState)(""),_=(0,r.Z)(x,2),j=_[0],v=_[1];return(0,f.jsxs)("form",{className:l,onSubmit:function(n){(n.preventDefault(),""!==h.trim()&&""!==j.trim())&&(t.find((function(e){return e.name.toLowerCase()===h.toLowerCase()}))?alert("".concat(h," already exists in contacts!")):(e((0,s.uK)({name:h,phone:j})),p(""),v("")))},children:[(0,f.jsxs)("label",{className:u,children:[(0,f.jsx)("p",{className:m,children:"Name"}),(0,f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' \\-][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$",value:h,onChange:function(e){p(e.target.value)},required:!0,placeholder:"Enter name"})]}),(0,f.jsxs)("label",{className:u,children:[(0,f.jsx)("p",{className:m,children:"Number"}),(0,f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",value:j,onChange:function(e){v(e.target.value)},required:!0,placeholder:"Enter number"})]}),(0,f.jsx)("button",{className:d,type:"submit",children:"Add Contact"})]})},p="Filter_container__L5eml",x=n(2956),_=function(){var e=(0,c.I0)(),t=(0,c.v9)(i);return(0,f.jsxs)("div",{className:p,children:[(0,f.jsx)("p",{children:"Find Contacts by Name"}),(0,f.jsx)("input",{type:"text",name:"filter",placeholder:"Search by name",value:t,onChange:function(t){e((0,x.T)(t.target.value))}})]})},j="ContactListItem_contactListItem__7AdNI",v="ContactListItem_contactAlign__0Bn72",C=function(e){var t=e.contact,n=e.deleteContact;return(0,f.jsxs)("li",{className:j,children:[(0,f.jsxs)("div",{className:v,children:[(0,f.jsx)("p",{children:t.name}),(0,f.jsx)("p",{children:t.phone})]}),(0,f.jsx)("button",{onClick:function(){n(t.id)},children:"Delete"})]})},b=function(){var e=(0,c.I0)(),t=(0,c.v9)(o),n=(0,c.v9)(i),a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{children:a.map((function(t){return(0,f.jsx)(C,{contact:t,deleteContact:function(){return e((0,s.GK)(t.id))}},t.id)}))})})},N=n(6258);function F(){return(0,a.useEffect)((function(){N.h.dispatch((0,s.yF)())}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(h,{}),(0,f.jsx)(_,{}),(0,f.jsx)(b,{})]})}}}]);
//# sourceMappingURL=119.f7fa2ac0.chunk.js.map