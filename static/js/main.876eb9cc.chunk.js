(this.webpackJsonpnaglfar=this.webpackJsonpnaglfar||[]).push([[0],{199:function(t){t.exports=JSON.parse('{"palette":{"common":{"black":"#000","white":"#fff"},"background":{"paper":"#fff","default":"#fafafa"},"primary":{"light":"rgba(78, 186, 170, 1)","main":"rgba(0, 137, 123, 1)","dark":"rgba(0, 91, 79, 1)","contrastText":"#fff"},"secondary":{"light":"rgba(110, 198, 255, 1)","main":"rgba(33, 150, 243, 1)","dark":"rgba(0, 105, 192, 1)","contrastText":"#fff"},"error":{"light":"#e57373","main":"#f44336","dark":"#d32f2f","contrastText":"#fff"},"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","hint":"rgba(0, 0, 0, 0.38)"}}}')},228:function(t,e){},230:function(t,e){},240:function(t,e){},242:function(t,e){},267:function(t,e){},268:function(t,e){},273:function(t,e){},275:function(t,e){},282:function(t,e){},301:function(t,e){},334:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(15),i=n.n(a),s=n(39),o=n(12),j=n(369),u=n(370),l=n(201),h=n(14),b=n(360),d=n(361),O=n(362),x=n(363),f=n(364),g=n(335),m=n(356),v=n(357),p=n(358),y=n(374),w=n(191),C=n.n(w),E=n(193),S=n.n(E),k=n(192),T=n.n(k),$=[],B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONCATHISTORY":return t.includes(e.data)?t:t.concat(e.data);case"CLEARHISTORY":return[];default:return t}},D=n(2),A=function(){var t=Object(h.c)((function(t){return t.history})),e=Object(h.b)();return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(y.a,{separator:Object(D.jsx)(T.a,{fontSize:"small"}),style:{color:"white",marginLeft:-15},children:[Object(D.jsx)(g.a,{}),t.map((function(t){return Object(D.jsx)(s.b,{to:t,style:{textDecoration:"none"},children:Object(D.jsx)(g.a,{style:{color:"white"},variant:"inherit",children:t})},t)}))]}),0!==t.length&&Object(D.jsx)(p.a,{variant:"body2",onClick:function(){var t;e({type:"CLEARHISTORY",data:t})},children:Object(D.jsx)(S.a,{style:{color:"white"}})})]})},F=function(){var t=Object(h.c)((function(t){return t.title}));return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("title",{children:t}),Object(D.jsx)("div",{position:"static",style:{height:72}}),Object(D.jsx)(m.a,{position:"fixed",children:Object(D.jsxs)(v.a,{style:{width:"100%",paddingLeft:8},children:["\u2003",Object(D.jsx)(g.a,{variant:"h6",children:t}),"\u2003",Object(D.jsx)(s.b,{to:"/",children:Object(D.jsx)(p.a,{children:Object(D.jsx)(C.a,{style:{color:"white"}})})}),Object(D.jsx)(A,{})]})})]})},I=function(t){var e=Object(h.b)();return Object(D.jsx)("div",{children:Object(D.jsx)(s.b,{to:t.to,style:{textDecoration:"none"},onClick:function(){var n;n=t.to,e({type:"CONCATHISTORY",data:n})},children:t.children})})},H=n(89),N=n(359),q=function(t){var e=Object(c.useState)(!1),n=Object(H.a)(e,2),r=n[0],a=n[1];return Object(D.jsx)(N.a,{style:{width:"100%",height:"100%"},onMouseOver:function(){a(!0)},onMouseOut:function(){a(!1)},raised:r,children:t.children})},L=function(t){return{type:"SETSUBJECT",data:t}},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SETSUBJECT":return e.data;default:return t}},U=function(){return Object(h.b)()(L("")),Object(D.jsxs)(b.a,{children:[Object(D.jsx)(F,{}),Object(D.jsx)(d.a,{in:!0,children:Object(D.jsx)(O.a,{container:!0,spacing:2,children:Object(D.jsx)(O.a,{item:!0,lg:12,xs:12,children:Object(D.jsx)(I,{to:"/exam",style:{textDecoration:"none"},children:Object(D.jsx)(q,{children:Object(D.jsx)(x.a,{style:{width:"100%",height:"100%"},children:Object(D.jsx)(f.a,{style:{textAlign:"center"},children:Object(D.jsx)(g.a,{variant:"h6",children:"\u6765\u8fd9\u91cc\u8003\u8bd5"})})})})})})})})]})},M=function(){var t=Object(h.c)((function(t){return t.links}));return Object(D.jsx)(O.a,{container:!0,spacing:2,children:t.map((function(t,e){return Object(c.createElement)(d.a,{in:!0,style:{transformOrigin:"0 0 0"},timeout:300*e,key:t.url},Object(D.jsx)(O.a,{item:!0,lg:3,md:6,sm:12,xs:12,children:Object(D.jsx)(I,{to:"/exam".concat(t.url),style:{textDecoration:"none"},children:Object(D.jsx)(q,{children:Object(D.jsx)(x.a,{style:{width:"100%",height:"100%"},children:Object(D.jsx)(f.a,{children:Object(D.jsxs)("li",{style:{color:t.color,marginLeft:20},children:[Object(D.jsx)(g.a,{gutterBottom:!0,children:t.text}),Object(D.jsx)("span",{children:Object(D.jsx)(g.a,{variant:"body2",style:{color:"#232129"},children:t.description})})]})})})})})},t.url))}))})},W=function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(F,{}),Object(D.jsxs)(b.a,{style:{maxWidth:"100%"},children:[Object(D.jsx)(g.a,{gutterBottom:!0,variant:"h6",children:"\u53ef\u7528\u9898\u5e93"}),Object(D.jsx)(M,{})]})]})},P=n(368),J=n(365),Y=n(366),X=n(375),K=n(376),Z=n(377),V=n(367),G=n(372),Q=n(373),_=n(56),z=n(122),tt=function(t,e){return[].concat(Object(z.a)(t.slice(0,e)),Object(z.a)(t.slice(e+1,t.length)))},et=function(t,e){for(var n=t,c=0;c<e.length;c++){var r=e[c];n=tt(n,r-c)}return n},nt=[{stem:"\u201c\u65e0\u77e5\u4e4b\u5e55\u201d\u7684\u6982\u5ff5\u51fa\u81ea\uff1f",img:"",choice:["\u300a\u8d44\u672c\u8bba\u300b\u2014\u2014\u9a6c\u514b\u601d","\u300a\u6b63\u4e49\u8bba\u300b\u2014\u2014\u7f57\u5c14\u65af","\u300a\u903b\u8f91\u54f2\u5b66\u8bba\u300b\u2014\u2014\u7ef4\u7279\u6839\u65af\u5766","\u300a\u541b\u4e3b\u8bba\u300b\u2014\u2014\u9a6c\u57fa\u96c5\u7ef4\u5229"],correct:"$2a$08$PW8xnEQ.ENG1yLyxl0VIfOZ6HDydZsVE/2nMTPNXXl4EaN8IpFt1i"},{stem:"\u73b0\u4ee3\u94a2\u7434\u4f7f\u7528\u54ea\u79cd\u5f8b\u5236\u6821\u97f3\uff1f",img:"",choice:["\u5341\u4e8c\u5e73\u5747\u5f8b","\u4e94\u5ea6\u76f8\u751f\u5f8b","\u7eaf\u5f8b","\u4e2d\u5eb8\u5168\u97f3\u5e73\u5747\u5f8b"],correct:"$2a$08$o5ud0nBcuT.J/61v9TUSMu7r/3vkkB9jap3vPyu.nKlGzZ4TOLCxO"},{stem:"\u201c\u751f\u4ea7\u7684\u53d1\u5c55\u548c\u79c1\u6709\u5236\u7684\u4ea7\u751f\uff0c\u4f7f\u4eba\u7c7b\u8131\u79bb\u4e86\u2018\u81ea\u7136\u72b6\u6001\u2019\uff0c\u4ea7\u751f\u4e86\u8d2b\u5bcc\u4e0d\u5747\u7684\u793e\u4f1a\u73b0\u8c61\u201d\uff0c\u8fd9\u79cd\u8bf4\u6cd5\u6700\u65e9\u51fa\u81ea\uff1f",img:"",choice:["\u300a\u5fb7\u610f\u5fd7\u610f\u8bc6\u5f62\u6001\u300b\u2014\u2014\u9a6c\u514b\u601d","\u300a\u5171\u4ea7\u515a\u5ba3\u8a00\u300b\u2014\u2014\u9a6c\u514b\u601d\u3001\u6069\u683c\u65af","\u300a\u8bba\u4eba\u7c7b\u4e0d\u5e73\u7b49\u7684\u8d77\u6e90\u548c\u57fa\u7840\u300b\u2014\u2014\u5362\u68ad","\u300a\u7eaf\u7cb9\u7406\u6027\u6279\u5224\u300b\u2014\u2014\u5eb7\u5fb7"],correct:"$2a$08$ekrM.I4WwvX9AEeH4itdVusu.c./gi7ntNqo/8f/QYhKWPn6NdoAi"},{stem:"\u300a\u5171\u4ea7\u515a\u5ba3\u8a00\u300b\u8ba4\u4e3a\uff0c\u5de5\u4eba\u9769\u547d\u7684\u7b2c\u4e00\u6b65\u5c31\u662f\u4f7f\u65e0\u4ea7\u9636\u7ea7\u4e0a\u5347\u4e3a\u7edf\u6cbb\u9636\u7ea7\uff0c\u4e89\u5f97\uff08\uff09",img:"",choice:["\u81ea\u7531","\u5e73\u7b49","\u8d22\u5bcc","\u6c11\u4e3b"],correct:"$2a$08$7n4QqL061imBYKg59sVJEO10JQC7/QKKVhZZO.LhFW8JzbFDmegHK"},{stem:"\u4ee5\u4e0b\u6cb3\u6d41\u6309\u7167\u5165\u6d77\u53e3\u4ece\u897f\u5411\u4e1c\u6392\u5217\uff0c\u987a\u5e8f\u6b63\u786e\u7684\u662f\uff1a",choice:["\u6d85\u74e6\u6cb3 \u9102\u6bd5\u6cb3 \u52d2\u62ff\u6cb3 \u53f6\u5c3c\u585e\u6cb3","\u585e\u7eb3\u6cb3 \u83b1\u8335\u6cb3 \u6613\u5317\u6cb3 \u7ef4\u65af\u74e6\u6cb3","\u591a\u7459\u6cb3 \u987f\u6cb3 \u7b2c\u8042\u4f2f\u6cb3 \u5fb7\u6d85\u65af\u7279\u6cb3","\u6052\u6cb3 \u5370\u5ea6\u6cb3 \u6e44\u516c\u6cb3 \u7ea2\u6cb3"],correct:"$2a$08$1DBCQGncWBD77o8AiUHK.ORttETIHu5XnUEa2t9XwH6Lu1B1SN6Iq"},{stem:"\u4e2d\u56fd\u4eba\u5747\u56fd\u5185\u751f\u4ea7\u603b\u503c\u7a81\u7834____\u7f8e\u5143",choice:["\u516b\u5343","\u516b\u4e07","\u516b\u767e\u4e07","\u516b\u5343\u4e07"],correct:"$2a$08$O91bouy5YX.A9bIrfYWR2euYzsB05hMZhdUMw7MViF8FfqZquEy4q"},{stem:"TCP/IP\u534f\u8bae\u6a21\u578b\u5206\u51e0\u5c42\uff1f",choice:["3","4","5","6"],correct:"$2a$08$6MIxknUxcXurMDerDrG5OOIsTIy/5xp/8Ytjqk7.sUBUVw50nt2oC"},{stem:"\u5954\u817e\u5904\u7406\u5668\u539f\u6765\u8ba1\u5212\u53eb\u4ec0\u4e48\uff1f",choice:["8086","80386","80486","80586"],correct:"$2a$08$X1.j5Fu3DFUe3PDUUvcPBOqPcOPfRmpSIJU2vu3r/w6H2pJXwM2.a"}],ct=function(t,e){return{type:"ANSWERSC",data:{objnum:t,answer:e}}},rt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ANSWERSC":var n=e.data.objnum,c=t[n],r=Object(_.a)(Object(_.a)({},c),{},{answer:e.data.answer});return t.map((function(t,e){return e===n?r:t}));case"ADDSC":var a={stem:e.data.stem,img:e.data.img,choice:e.data.choice,correct:e.data.correct};return t.concat(a);case"DELSC":var i=et(t,e.data.indexAry);return i;default:return t}},at=function(t){var e=Object(h.b)();return Object(D.jsxs)(q,{children:[t.quest.img?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(J.a,{image:t.quest.img,style:{height:250}}),Object(D.jsx)(Y.a,{})]}):null,Object(D.jsxs)(f.a,{children:[Object(D.jsxs)(x.a,{onClick:function(){e(ct(t.arynum,""))},children:[Object(D.jsx)(g.a,{gutterBottom:!0,children:t.quest.stem}),Object(D.jsx)(g.a,{variant:"body2",style:{color:"rgba(0, 0, 0, 0.54)"},children:"\uff08\u70b9\u6b64\u6e05\u9664\u672c\u9898\u5df2\u9009\u9879\uff09"})]}),Object(D.jsxs)(X.a,{children:[Object(D.jsx)(K.a,{}),Object(D.jsx)(Z.a,{onChange:function(n){e(ct(t.arynum,n.target.value))},value:t.quest.answer?t.quest.answer:"",children:t.quest.choice.map((function(t){return Object(D.jsx)(V.a,{value:t,control:Object(D.jsx)(G.a,{}),label:t},Object(Q.a)())}))})]})]})]})},it=function(t){var e=Object(h.c)((function(t){return t.singlechoices}));return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(g.a,{variant:"h6",gutterBottom:!0,children:"\u5355\u9009\u9898"}),Object(D.jsx)(O.a,{container:!0,spacing:2,children:e.map((function(t,e){return Object(c.createElement)(d.a,{in:!0,style:{transformOrigin:"0 0 0"},timeout:300*e,key:t.stem},Object(D.jsx)(O.a,{item:!0,lg:12,xs:12,children:Object(D.jsx)(at,{quest:t,arynum:e})}))}))})]})},st=n(194),ot=n.n(st),jt=function(){return Object(h.b)()(L(Object(o.f)().subject)),Object(D.jsxs)(b.a,{children:[Object(D.jsx)(F,{}),Object(D.jsx)(I,{to:"/score",children:Object(D.jsx)(P.a,{color:"primary",style:{position:"fixed",bottom:50,right:50},children:Object(D.jsx)(ot.a,{})})}),Object(D.jsx)(it,{})]})},ut=n(121),lt=n.n(ut),ht=n(195),bt=n(196),dt=n.n(bt),Ot=n(197),xt=n.n(Ot),ft=function(){var t=Object(c.useState)(""),e=Object(H.a)(t,2),n=e[0],r=e[1],a=Object(h.c)((function(t){return t.singlechoices})),i=a.filter((function(t){return!!t.answer&&dt.a.compareSync(t.answer,t.correct)})),s=function(){var t=Object(ht.a)(lt.a.mark((function t(e){var n;return lt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,xt.a.post("https://bund.penclub.club/?https://paste.ubuntu.com/","poster=naglfar&syntax=text&expiration=year&content=".concat(e));case 2:n=t.sent,r(n.request.responseURL.substring(28).replace("/",""));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){s(a.map((function(t){return t.answer})).join(", "))}),[a]);var o=(i.length/a.length*100).toFixed(0);return Object(D.jsxs)(b.a,{children:[Object(D.jsx)(F,{}),Object(D.jsxs)(g.a,{align:"center",variant:"h6",children:["\u9009\u62e9\u9898\u6709",a.length,"\u9898"]}),Object(D.jsxs)(g.a,{align:"center",variant:"h6",gutterBottom:!0,children:["\u4f60\u7b54\u5bf9\u4e86",i.length,"\u9898"]}),Object(D.jsx)(g.a,{align:"center",variant:"h6",gutterBottom:!0,children:"\u56e0\u6b64\u4f60\u7684\u603b\u5206\u662f"}),Object(D.jsxs)(g.a,{align:"center",variant:"h1",gutterBottom:!0,children:[o," / 100"]}),Object(D.jsxs)(g.a,{align:"center",variant:"body2",gutterBottom:!0,children:["\u8bf7\u4fdd\u7ba1\u597d\u5982\u4e0b\u5b57\u7b26\u4e32\uff1a",n]})]})},gt=n(53),mt=n(198),vt=[{text:"\u7efc\u5408\u6d4b\u8bc4",url:"/comprehensive",description:"\u56e0\u4e3a\u9898\u76ee\u4e0d\u591f\u5c31\u5148\u7efc\u5408\u4e86\uff08\u5c51\u989c\uff09",color:"#E95800",img:""}],pt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADDALINK":return t.concat(e.data);default:return t}},yt=[{stem:"\u7b80\u8ff0\u4ec0\u4e48\u662f\u975e\u5bf9\u79f0\u52a0\u5bc6\uff1f",img:"https://cn.bing.com/th?id=OHR.HumpbackMom_ZH-CN0218207583_1920x1080.jpg"},{stem:"\u7f16\u5199\u8fd9\u4e2a\u7f51\u9875\u7528\u5230\u4e86\u54ea\u4e9b\u8bed\u8a00\uff1f"}],wt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ANSWERSA":var n=e.data.objnum,c=t[n],r=Object(_.a)(Object(_.a)({},c),{},{answer:e.data.answer});return t.map((function(t,e){return e===n?r:t}));case"ADDSA":var a={stem:e.data.stem,img:e.data.img};return t.concat(a);default:return t}},Ct=n(199),Et=n(200),St=Object(Et.a)(Ct),kt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:St,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHANGETHEME":return e.data;default:return t}},Tt="\u7eb3\u65af\u5361\u79fb\u6c11\u5c40",$t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHANGETITLE":return e.data;default:return t}},Bt=Object(gt.combineReducers)({singlechoices:rt,shortanswers:wt,title:$t,links:pt,theme:kt,history:B,subject:R}),Dt=Object(gt.createStore)(Bt,Object(mt.composeWithDevTools)()),At=function(){var t=Object(h.c)((function(t){return t.theme})),e=r.a.createRef(),n=function(t){return function(){e.current.closeSnackbar(t)}};return Object(D.jsx)(j.a,{theme:t,children:Object(D.jsx)(l.a,{maxSnack:4,preventDuplicate:!0,ref:e,action:function(t){return Object(D.jsx)(u.a,{onClick:n(t),style:{color:"#FFF"},children:"\u5173\u95ed"})},children:Object(D.jsx)(s.a,{children:Object(D.jsxs)(o.c,{children:[Object(D.jsx)(o.a,{path:"/exam/:subject",children:Object(D.jsx)(jt,{})}),Object(D.jsx)(o.a,{path:"/exam",children:Object(D.jsx)(W,{})}),Object(D.jsx)(o.a,{path:"/score",children:Object(D.jsx)(ft,{})}),Object(D.jsx)(o.a,{path:"/",children:Object(D.jsx)(U,{})})]})})})})},Ft=function(){return Object(D.jsx)(h.a,{store:Dt,children:Object(D.jsx)(At,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var It=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,378)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))},Ht=document.getElementById("root");Ht.hasChildNodes()?i.a.hydrate(Object(D.jsx)(Ft,{}),Ht):i.a.render(Object(D.jsx)(Ft,{}),Ht),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)})),It()}},[[334,1,2]]]);