(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{70:function(e,t,n){},77:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(8),l=n.n(r),s=(n(70),n(13)),i=n(33),j=n(41),o=n(126),u=n(4),d=function(e){var t=e.onClick;return Object(u.jsx)(o.a,{style:{marginTop:"1em",width:"fit-content"},onClick:t,variant:"outlined",color:"primary",children:"Generate"})},b=n(130),h=n(134),p=n(133),O=n(136),m=function(e){var t=e.model,n=e.setModel,c=a.a.useRef(null),r=a.a.useState(0),l=Object(s.a)(r,2),i=l[0],j=l[1];return a.a.useEffect((function(){j(c.current.offsetWidth)}),[]),Object(u.jsxs)(b.a,{margin:"normal",style:{width:"200px"},variant:"outlined",children:[Object(u.jsx)(h.a,{ref:c,htmlFor:"model-select",children:"\u041c\u043e\u0434\u0435\u043b\u044c"}),Object(u.jsxs)(p.a,{value:t,labelWidth:i,onChange:function(e){return n(e.target.value)},inputProps:{name:"model",id:"model-select"},children:[Object(u.jsx)(O.a,{value:"gpt2",children:"Small (117M)"}),Object(u.jsx)(O.a,{value:"gpt2-medium",children:"Medium (345M)"}),Object(u.jsx)(O.a,{value:"gpt2-large",children:"Large (774M)"})]})]})},x=n(137),f=function(e){var t=e.text,n=e.setText;return Object(u.jsx)(x.a,{margin:"normal",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441...",variant:"outlined",fullWidth:!0,multiline:!0,rows:"4",value:t,onChange:function(e){return n(e.target.value)}})},g=(n(77),n(58)),v=n.n(g),S=function(){return function(e){var t=a.a.useState({data:null,complete:!1,pending:!1,error:!1}),n=Object(s.a)(t,2),c=n[0],r=n[1],l=a.a.useState(),i=Object(s.a)(l,2),j=i[0],o=i[1];return a.a.useEffect((function(){j&&(r({data:null,pending:!0,error:!1,complete:!1}),v()(j).then((function(e){return r({data:e.data,pending:!1,error:!1,complete:!0})})).catch((function(){return r({data:null,pending:!1,error:!0,complete:!0})})))}),[j]),[c,function(){return o(e.apply(void 0,arguments))}]}((function(e){return{url:"http://localhost:5000/asd_qa",method:"POST",data:e}}))},y=n.p+"static/media/logo.58879699.svg",C=(n(96),function(e,t){return Object(j.a)(Object(j.a)({},e),{},Object(i.a)({},t.name,t.value))});var k=function(){var e=Object(c.useReducer)(C,{}),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),l=Object(s.a)(r,2),i=l[0],j=l[1],o=function(e){var t="checkbox"===e.target.type;a({name:e.target.name,value:t?e.target.checked:e.target.value})},b=Object(c.useState)(""),h=Object(s.a)(b,2),p=h[0],O=h[1],x=Object(c.useState)("gpt2"),g=Object(s.a)(x,2),v=g[0],k=g[1],N=S(),T=Object(s.a)(N,2),M=T[0],A=T[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("img",{src:y,className:"App-logo",alt:"logo"}),Object(u.jsx)("p",{children:"\u0412\u043e\u043f\u0440\u043e\u0441\u043d\u043e-\u043e\u0442\u0432\u0435\u0442\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 ASD QA"}),Object(u.jsx)("a",{className:"App-link",href:"https://ods.ai/projects/asd_qa",target:"_blank",rel:"noopener noreferrer",children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u043d\u0430 Open Data Science"}),Object(u.jsxs)("p",{children:[" ",Object(u.jsx)("strong",{children:" \u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u043c\u0441\u044f! "})," "]}),i&&Object(u.jsx)("div",{children:Object(u.jsx)("ul",{children:Object.entries(n).map((function(e){var t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("a",{children:[n,c.toString(),". "]},n)}))})}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(!0),setTimeout((function(){j(!1)}),5e4)},children:[Object(u.jsx)("fieldset",{children:Object(u.jsxs)("label",{children:[Object(u.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),Object(u.jsx)("input",{name:"\u041f\u0440\u0438\u044f\u0442\u043d\u043e \u043f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f, ",onChange:o})]})}),Object(u.jsxs)("fieldset",{children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("p",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u0443"}),Object(u.jsxs)("select",{name:"\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 ",onChange:o,children:[Object(u.jsx)("option",{value:"",children:"--\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430--"}),Object(u.jsx)("option",{value:"System 1",children:"System 1"}),Object(u.jsx)("option",{value:"System 2",children:"System 2"}),Object(u.jsx)("option",{value:"System 3",children:"System 3"})]})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448 \u0432\u043e\u0437\u0440\u0430\u0441\u0442"}),Object(u.jsx)("input",{type:"number",name:"\u0412\u0430\u0448 \u0432\u043e\u0437\u0440\u0430\u0441\u0442: ",onChange:o,step:"1"})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("p",{children:"\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445"}),Object(u.jsx)("input",{type:"checkbox",name:"\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445: ",onChange:o})]})]}),Object(u.jsx)("button",{type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]}),Object(u.jsxs)("div",{className:"app-container",children:[Object(u.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(u.jsx)("h1",{children:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 GPT-2"}),Object(u.jsx)(m,{model:v,setModel:k}),Object(u.jsx)(f,{text:p,setText:O}),Object(u.jsx)(d,{onClick:function(){A({text:p,model:v,userId:1})}})]}),M.pending&&Object(u.jsx)("div",{className:"result pending",children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435..."}),M.complete&&(M.error?Object(u.jsx)("div",{className:"result error",children:"\u041e\u0448\u0438\u0431\u043a\u0430"}):Object(u.jsx)("div",{className:"result valid",children:M.data.result}))]})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,138)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),r(e),l(e)}))};l.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root")),N()}},[[97,1,2]]]);
//# sourceMappingURL=main.6c5c36c5.chunk.js.map