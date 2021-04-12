(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{141:function(e,t,n){"use strict";n.r(t);var r,c,s,i,o,a,d=n(0),l=n.n(d),u=n(17),j=n.n(u),h=(n(82),n(83),n(11)),b=n(74),p=n(5),m=n(18),x=n(29),f=n.n(x),O=n(39),g=n(22),v=n(40),w=n.n(v),k=n(31),y=n(66),S=n(67),C=n(76),T=n(75),D=n(21),I=Object(m.c)(p.Div)(r||(r=Object(D.a)(["\n    text-align:center;\n"]))),F=Object(m.c)(p.Input)(c||(c=Object(D.a)(["\n"]))),L=Object(m.c)(p.Div)(s||(s=Object(D.a)(["\n    background-color:",";\n    padding:",";\n    display:flex;\n    flex-direction:",";\n    border: 0.5px;\n    border-radius:0.6rem;\n    margin-top:0.5rem;\n"])),(function(e){return e.bg?e.bg:"white"}),(function(e){return e.p?e.p:"1rem"}),(function(e){return e.flexDir?e.flexDir:"column"})),N=Object(m.c)(p.Div)(i||(i=Object(D.a)(["\n    background-color:",";\n    padding:",";\n    display:flex;\n    flex-direction:",";\n    border: 0.5px;\n    border-radius:2.5rem;\n    margin-top:0.5rem;\n"])),(function(e){return e.bg?e.bg:"white"}),(function(e){return e.p?e.p:"1rem"}),(function(e){return e.flexDir?e.flexDir:"column"})),z=Object(m.c)(p.Div)(o||(o=Object(D.a)(["\n    span{\n        text-align:right;\n    }\n"]))),A=Object(m.c)(p.Text)(a||(a=Object(D.a)(["\n    color: ",";\n"])),(function(e){return e.theme.colors.successLight})),E=n(2),U=function(e){Object(C.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(y.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={showTaskCompletedNotification:!1,showTaskAddedNotification:!1,input:""},e.handleChange=function(t){e.setState({input:t.target.value})},e.handleNewEntry=function(t){var n=e.state.input,r={userId:t,id:Math.floor(Math.random()*t),title:n,completed:!1},c=e.props.todoList;c.push(r);var s=c;e.props.setTodoList(s),e.setState({input:""}),e.setState({showTaskAddedNotification:!0})},e}return Object(S.a)(n,[{key:"toggleTaskCompleted",value:function(e){var t=this.props.todoList,n=!1,r=t.map((function(t){return t.id===e?(t.completed||(n=!0),Object(k.a)(Object(k.a)({},t),{},{completed:!t.completed})):t}));n&&this.setState({showTaskCompletedNotification:!0}),this.props.setTodoList(r)}},{key:"render",value:function(){var e=this,t=this.props.loading,n=this.props.todoList,r=this.props.selectedUserId;return""!==r&&(n=n.filter((function(e){return e.userId===r}))),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(I,{m:{x:{xs:"",md:"1rem",lg:"15rem"}},children:[t&&Object(E.jsx)(p.Div,{children:"Loading Data..."}),!t&&Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(p.Col,{children:[""!==r&&Object(E.jsxs)(p.Div,{p:{xs:"0.5rem",md:"1rem"},children:[Object(E.jsxs)(A,{textSize:"F16",tag:"h2",p:{xs:"0.5rem",md:"1rem"},children:[" User selected: ",r]}),Object(E.jsx)(F,{placeholder:"Add task",onChange:this.handleChange,value:this.state.input,suffix:Object(E.jsx)(p.Icon,{name:"Add",size:"20px",cursor:"pointer",onClick:function(){return e.handleNewEntry(r)},pos:"absolute",top:"50%",right:"1rem",transform:"translateY(-50%)"})})]}),n&&n.sort((function(e,t){return e.completed?1:-1})).map((function(t,n){return Object(E.jsx)(L,{shadow:"2",hoverShadow:"4",transition:!0,children:Object(E.jsxs)(p.Row,{d:"flex",justify:"space-between",align:"center",children:[Object(E.jsxs)(p.Label,{children:[Object(E.jsx)(p.Checkbox,{onChange:function(){return e.toggleTaskCompleted(t.id)},checked:t.completed,inactiveColor:"success400",activeColor:"success700",size:"24px"}),Object(E.jsxs)(p.Text,{w:{xs:"18rem",sm:"25rem",md:"30rem"},style:{textAlign:"left",textDecoration:t.completed?"line-through":""},children:[" ",t.title]})]}),Object(E.jsxs)(p.Tag,{children:[Object(E.jsx)(p.Icon,{name:"UserCircle",color:"black",size:"18px"})," ",t.userId]})]})},n)}))]})})]}),Object(E.jsx)(p.Notification,{bg:"success700",isOpen:this.state.showTaskCompletedNotification,onClose:function(){return e.setState({showTaskCompletedNotification:!1})},prefix:Object(E.jsx)(p.Icon,{name:"Success",color:"white",size:"16px",m:{r:"0.5rem"}}),children:"Task Completed!"}),Object(E.jsxs)(p.Notification,{bg:"info700",isOpen:this.state.showTaskAddedNotification,onClose:function(){return e.setState({showTaskAddedNotification:!1})},prefix:Object(E.jsx)(p.Icon,{name:"InfoSolid",color:"white",size:"18px",m:{r:"0.5rem"}}),children:["Task Added and Assigned to User ",r,"!"]})]})}}]),n}(d.Component),M=n(71),P=n(30);n(136);var B=function(e){var t=e.userList;return Object(E.jsxs)(z,{className:"container",d:"flex",justify:"space-between",align:"center",h:"5rem",children:[Object(E.jsx)(p.Text,{textSize:"F24",tag:"h1",children:"TODO APP"}),Object(E.jsxs)(M.a,{id:"dropdown-basic-button",title:"Select User",children:[Object(E.jsx)(P.a.Item,{onClick:function(){return e.setSelectedUserId("")},children:"NONE"}),t&&t.map((function(t,n){return Object(E.jsx)(P.a.Item,{onClick:function(){return e.setSelectedUserId(t)},children:t},n)})),!t&&Object(E.jsx)(P.a.Item,{children:"Loading..."})]})]})};var R=function(){var e=Object(d.useState)([]),t=Object(g.a)(e,2),n=t[0],r=t[1],c=Object(d.useState)([]),s=Object(g.a)(c,2),i=s[0],o=s[1],a=Object(d.useState)(!0),l=Object(g.a)(a,2),u=l[0],j=l[1],h=Object(d.useState)(""),b=Object(g.a)(h,2),m=b[0],x=b[1];function v(){return(v=Object(O.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://jsonplaceholder.typicode.com/todos").then((function(e){return e.data}));case 2:t=e.sent,r(t),n=[],t.map((function(e){-1===n.indexOf(e.userId)&&n.push(e.userId)})),o(n),j(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(B,{userList:i,setSelectedUserId:x}),Object(E.jsx)(p.Div,{className:"container",children:Object(E.jsx)(U,{todoList:n,selectedUserId:m,loading:u,setTodoList:r})})]})};var J,H=function(){var e=Object(d.useState)([]),t=Object(g.a)(e,2),n=(t[0],t[1]),r=Object(d.useState)([]),c=Object(g.a)(r,2),s=c[0],i=c[1],o=Object(d.useState)(!0),a=Object(g.a)(o,2),l=a[0],u=a[1];function j(){return(j=Object(O.a)(f.a.mark((function e(){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://jsonplaceholder.typicode.com/todos").then((function(e){return e.data}));case 2:t=e.sent,n(t),r=[],t.map((function(e){-1===r.indexOf(e.userId)&&r.push(e.userId)})),i(r),u(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){var e=["#F5DEB3","#FA8072","#20B2AA","#E6E6FA","#87CEEB","#D3D3D3","#FFE4E1"];return e[Math.floor(Math.random()*e.length)]}return Object(d.useEffect)((function(){!function(){j.apply(this,arguments)}()}),[]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(B,{}),Object(E.jsxs)(I,{className:"container",children:[l&&Object(E.jsx)(p.Div,{children:"Loading Users..."}),!l&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(p.Text,{textSize:"F24",tag:"h1",p:{xs:"2rem",md:"2rem"},children:" Users List"}),Object(E.jsx)(p.Row,{justify:"space-around",children:s&&s.map((function(e,t){return Object(E.jsx)(N,{shadow:"2",hoverShadow:"4",transition:!0,style:{backgroundColor:h()},p:{xs:"2rem",md:"4rem"},m:{xs:"0.5rem",md:"1rem"},children:Object(E.jsxs)(p.Text,{children:[" User : ",e]})},t)}))})]})]})]})},Y=Object(k.a)(Object(k.a)({},p.DefaultTheme),{},{colors:{primaryDark:"#3e3d3cs",successDark:"success700",successLight:"#6b5b95"},textSize:{size:{F16:"16px",F24:"24px"}},fontFamily:{primary:"'Montserrat', sans-serif;"}}),q=n(73),G=n(7),K=Object(m.b)(J||(J=Object(D.a)(["\n    html {\n        font-size: props.theme.textSize.size.F16;\n        box-sizing:border-box;\n    }\n    *, *::before, *::after {\n        padding:0;\n        margin:0;\n        box-sizing:inherit;\n        font-family: props.theme.fontFamily.primary;\n        color:",";\n    }\n    body {\n        font-size:1rem;\n        line-height:1.5;\n    }\n    .container{\n        max-width:1440px;\n        width:90%;\n        margin:0 auto;\n    }\n"])),(function(e){return e.theme.colors.primaryDark})),Q=new h.DebugEngine,V=new b.a;var W=function(){return Object(E.jsx)(p.ThemeProvider,{theme:Y,children:Object(E.jsx)(m.a,{theme:Y,children:Object(E.jsxs)(h.Provider,{value:V,debug:Q,debugAfterHydration:!0,children:[Object(E.jsx)(p.StyleReset,{}),Object(E.jsx)(K,{}),Object(E.jsx)(q.a,{children:Object(E.jsxs)(G.c,{children:[Object(E.jsx)(G.a,{path:"/react-todo-list",exact:!0,component:R}),Object(E.jsx)(G.a,{path:"/react-todo-list/users",component:H})]})})]})})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,145)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};j.a.render(Object(E.jsx)(l.a.StrictMode,{children:Object(E.jsx)(W,{})}),document.getElementById("root")),X()},82:function(e,t,n){},83:function(e,t,n){}},[[141,1,2]]]);
//# sourceMappingURL=main.fbccbcb4.chunk.js.map