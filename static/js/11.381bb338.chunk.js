(this["webpackJsonpreact-pwa"]=this["webpackJsonpreact-pwa"]||[]).push([[11],{189:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(187),c=a(90),o=a(133),i=function(e,t){return function(a){return r.a.createElement(o.ErrorBoundary,{FallbackComponent:t},r.a.createElement(e,a))}},m=a(86),u=a(89),s=a(172),p=a(108),b=a(30),E=a(12),d=a(84),f=Object(d.a)((function(e){return{wrapper:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},paper:{padding:40,"& h6":{paddingLeft:15}},buttons:{marginTop:30}}}));var h=function(){var e=f();return r.a.createElement("div",{className:e.wrapper},r.a.createElement(m.a,{className:e.paper},r.a.createElement(u.a,{variant:"h5",component:"h3"},E.f.app.crash.title),r.a.createElement("div",{className:e.buttons},r.a.createElement("div",null,r.a.createElement(s.a,{target:"_blank",rel:"noreferrer",href:"mailto: ".concat(E.d)},E.f.app.crash.options.email)),r.a.createElement(u.a,{component:"h6"},"or"),r.a.createElement("div",null,r.a.createElement(s.a,{onClick:b.c},E.f.app.crash.options.reset," ",r.a.createElement(p.h,null))))))},g=Object(d.a)((function(e){return{root:{height:"100%",overflow:"hidden",position:"relative","padding-left":e.spacing(b.b?1.5:3),"padding-right":e.spacing(b.b?1.5:3)}}})),v=function(e){var t=g();return r.a.createElement(c.a,{className:t.root},e.children)},O=a(93),j=[{exact:!0,component:Object(b.a)((function(e){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,193))})),path:"/"},{exact:!0,component:Object(b.a)((function(e){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,195))})),path:"/cinema"},{exact:!0,component:Object(b.a)((function(e){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,196))})),path:"politics"},{exact:!0,component:Object(b.a)((function(e){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,197))})),path:"/music"},{exact:!0,component:Object(b.a)((function(e){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,198))})),path:"/editorial"},{component:Object(b.a)((function(e){return a.e(12).then(a.bind(null,199))}))}];var x=function(){return r.a.createElement(v,null,r.a.createElement(O.c,null,j.map((function(e){return r.a.createElement(O.a,Object.assign({},e,{key:e.path||"#"}))}))))},w=Object(n.memo)(x),y=a(173),k=Object(d.a)((function(e){return{copyright:{"user-select":"none"}}}));var N=function(){var e=k();return r.a.createElement(c.a,{pt:2,pb:2},r.a.createElement(u.a,{className:e.copyright,variant:"body2",color:"textSecondary",align:"center"},E.a.title,r.a.createElement(y.a,{color:"inherit",href:E.c},E.a.link)," ",(new Date).getFullYear()))},C=Object(n.memo)(N),S=a(20),I=a(202),F=a(174),M=a(192),P=a(18),z=a(203),B=Object(P.a)((function(e){return{root:{"label + &":{marginTop:e.spacing(3)}},input:{borderRadius:3,position:"relative",backgroundColor:e.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"10px 26px 10px 12px",transition:e.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}}))(z.a),R=Object(d.a)((function(e){return{margin:{margin:e.spacing(1)}}}));var T=Object(n.memo)((function(){var e=R(),t=r.a.useState(""),a=Object(S.a)(t,2),n=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(F.a,{className:e.margin},r.a.createElement(I.a,{htmlFor:"demo-customized-select-native"},"Issue"),r.a.createElement(M.a,{id:"demo-customized-select-native",value:n,onChange:function(e){l(e.target.value)},input:r.a.createElement(B,null)},r.a.createElement("option",{"aria-label":"None",value:""}),r.a.createElement("option",{value:10},"july"),r.a.createElement("option",{value:20},"september"),r.a.createElement("option",{value:30},"November"))))})),U=a(178),A=a(177),H=a(179),J=a(176),W=a(194),q=a(140),D=a(9),G=a(106),L=Object(d.a)((function(e){return{root:{"text-decoration":"none",color:"inherit"}}}));var Y=function(e){var t=e.className,a=Object(q.a)(e,["className"]),n=L(),l=a.href?function(e){var t=e.children,a=Object(q.a)(e,["children"]);return r.a.createElement("a",a,t)}:G.b;return r.a.createElement(l,Object.assign({},a,{className:Object(D.a)(n.root,t)}))},_=a(38),K=Object(d.a)((function(e){return{toolbar:{"justify-content":"space-between"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},main:{"align-items":"center"},title:{"font-weight":100}}})),Q=Object(P.a)({root:{"margin-left":7,"margin-right":7}})((function(e){return r.a.createElement(J.a,Object.assign({flexItem:!0,orientation:"vertical"},e))}));var V=function(e){e.isMenuOpen;var t=e.onMenuOpen,a=K(),n=Object(_.c)(),l=n.state,o=n.actions;return r.a.createElement(A.a,{position:"absolute",className:a.appBar,color:"transparent",elevation:1},r.a.createElement(U.a,{className:a.toolbar},r.a.createElement(c.a,{display:"flex",className:a.main},r.a.createElement(H.a,{edge:"start","aria-label":"open menu",onClick:t},r.a.createElement(p.a,null)),r.a.createElement(Y,{to:"/"},r.a.createElement(s.a,{"aria-label":"go to home",className:a.title},E.j))),r.a.createElement(c.a,{display:"flex"},l.sw.isUpdated&&r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{title:"The application has newer version; press to update",arrow:!0},r.a.createElement(H.a,{"aria-label":"update the application",color:"secondary",onClick:function(){o.sw.update()}},r.a.createElement(p.h,null))),r.a.createElement(Q,null)),r.a.createElement(W.a,{title:"It's open source",arrow:!0},r.a.createElement(T,null)),r.a.createElement(Q,null),r.a.createElement(W.a,{title:"Change theme",arrow:!0},r.a.createElement(H.a,{"aria-label":"toggle theme",edge:"end",onClick:function(){o.theme.toggle()}},r.a.createElement(p.b,null))))))},X=a(190),Z=a(184),$=a(185),ee=a(183),te=a(200),ae=Object(d.a)((function(e){return{list:{width:250},toolbar:e.mixins.toolbar}})),ne=Object(P.a)({root:{width:"100%"}})((function(e){return r.a.createElement(te.a,e)}));var re=function(e){var t=e.isOpen,a=e.onClose,n=e.onOpen,l=ae({isOpen:t,isMobile:b.b});return r.a.createElement(X.a,{anchor:"left",open:t,onClose:a,onOpen:n,swipeAreaWidth:30,disableBackdropTransition:!0},r.a.createElement(ee.a,{className:l.list},r.a.createElement("div",{className:l.toolbar}),r.a.createElement(ne,{onClick:a,component:G.b,to:"/"},r.a.createElement(Z.a,null,r.a.createElement(p.e,null)),r.a.createElement($.a,{primary:"Welcome"})),r.a.createElement(ne,{onClick:a,component:G.b,to:"/editorial"},r.a.createElement(Z.a,null,r.a.createElement(p.g,null)),r.a.createElement($.a,{primary:"Editorial"})),r.a.createElement(ne,{onClick:a,component:G.b,to:"/cinema"},r.a.createElement(Z.a,null,r.a.createElement(p.f,null)),r.a.createElement($.a,{primary:"cinema"})),r.a.createElement(ne,{onClick:a,component:G.b,to:"/music"},r.a.createElement(Z.a,null,r.a.createElement(p.d,null)),r.a.createElement($.a,{primary:"Music"})),r.a.createElement(ne,{onClick:a,component:G.b,to:"/politics"},r.a.createElement(Z.a,null,r.a.createElement(p.c,null)),r.a.createElement($.a,{primary:"Politics"}))))};var le=function(){var e=Object(n.useState)(!1),t=Object(S.a)(e,2),a=t[0],l=t[1],c=function(){l(!0)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,{isOpen:a,onClose:function(){l(!1)},onOpen:c}),r.a.createElement(V,{isMenuOpen:a,onMenuOpen:c}))},ce=Object(n.memo)(le),oe=a(120),ie=a(13),me=a(10);var ue=function(){var e=Object(_.c)(),t=e.state.notifications,a=e.actions,r=Object(oe.b)(),l=r.enqueueSnackbar,c=r.closeSnackbar,o=Object(n.useRef)([]);return Object(n.useEffect)((function(e){t.forEach((function(e){var t,n=e.message,r=e.options;e.dismissed?c(r.key):o.current.includes(r.key)||(l(n,Object(ie.a)(Object(ie.a)({},r),{},{onExited:function(e,t){a.notifications.remove(t),function(e){o.current=Object(me.a)(o.current.filter((function(t){return e!==t})))}(t)}})),t=r.key,o.current=[].concat(Object(me.a)(o.current),[t]))}))})),null};var se=function(){return r.a.createElement(oe.a,{maxSnack:E.g.maxSnack},r.a.createElement(ue,null))},pe=Object(d.a)((function(e){return{spacer:e.mixins.toolbar,wrapper:{flexGrow:1,height:"100vh",overflow:"hidden",position:"relative"},content:{display:"flex","flex-direction":"column","justify-content":"space-between",height:"calc(100% - ".concat(e.mixins.toolbar.minHeight+8,"px)")}}}));var be=function(){var e=pe();return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,null),r.a.createElement(ce,null),r.a.createElement(c.a,{component:"main",className:e.wrapper},r.a.createElement(c.a,{className:e.spacer}),r.a.createElement(c.a,{className:e.content},r.a.createElement(w,null),r.a.createElement(C,null))))},Ee=a(186),de=a(54);var fe=function(e){var t=e.children,a=Object(_.c)().state.theme;return r.a.createElement(Ee.a,{theme:Object(de.a)(E.i[a.mode])},t)};t.default=i((function(){return r.a.createElement(_.a,null,r.a.createElement(fe,null,r.a.createElement(c.a,{display:"flex"},r.a.createElement(l.a,null),r.a.createElement(G.a,null,r.a.createElement(be,null)))))}),h)}}]);