(this["webpackJsonpmy-life"]=this["webpackJsonpmy-life"]||[]).push([[0],{109:function(e,s,t){},110:function(e,s,t){},111:function(e,s,t){},112:function(e,s,t){},113:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t(15),i=t.n(c),n=(t(52),t(53),t(3)),l=(t(59),t(7)),j=t(41),r=t.n(j).a.create({baseURL:"https://61746ce908834f0017c7098a.mockapi.io/myHome"}),b=function(){return r.get("/profil")},d=function(){return r.get("/adress")},o=function(){return r.get("shop")},m=function(){return r.get("/blog")},O={status:"done"},x=function(e){return{type:"APP/CHANGE_STATUS",status:e}},u={name:"",surname:"",profession:"",image:"",aboutme:"",video:""},h=t(4),v={blog:[{createdAt:"",name:"",title:"",image:"",subtitle:"",id:""}]},p=t(20),N=t(14),g=(t(77),t(0));function _(e){return Object(g.jsxs)("div",{className:"nav",children:[Object(g.jsx)(N.b,{to:Y.MAIN,className:"main"===e.type?"nav__link active":"nav__link",children:"Irma Tjandra"}),Object(g.jsx)(N.b,{to:Y.BLOG,className:"blog"===e.type?"nav__link active":"nav__link",children:"Blog"}),Object(g.jsx)(N.b,{to:Y.SHOP,className:"shop"===e.type?"nav__link active":"nav__link",children:"Shop"}),Object(g.jsx)(N.b,{to:Y.IMPRESSUM,className:"impressum"===e.type?"nav__link active":"nav__link",children:"Contact"})]})}t(82);function f(e){var s=Object(a.useState)(!1),t=Object(p.a)(s,2),c=t[0],i=t[1];return window.addEventListener("scroll",(function(){window.scrollY>=80?i(!0):i(!1)})),Object(g.jsx)("div",{className:c?"header__active":"header",children:Object(g.jsx)("div",{className:"container header__wrapper",children:Object(g.jsx)(_,{type:e.type})})})}t(83);var w=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"plasma-2__wrapper",children:[Object(g.jsx)("svg",{width:"0",height:"0",children:Object(g.jsxs)("filter",{id:"gooey-plasma-2",children:[Object(g.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"20",result:"blur"}),Object(g.jsx)("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16",result:"goo"})]})}),Object(g.jsx)("div",{className:"plasma-2",children:Object(g.jsxs)("ul",{className:"gooey-container",children:[Object(g.jsx)("li",{className:"bubble"}),Object(g.jsx)("li",{className:"bubble"}),Object(g.jsx)("li",{className:"bubble"}),Object(g.jsx)("li",{className:"bubble"}),Object(g.jsx)("li",{className:"bubble"}),Object(g.jsx)("li",{className:"bubble"})]})})]})})},y=(t(84),function(e){return Object(g.jsx)("div",{className:"section",children:Object(g.jsx)("h2",{className:"section__title",children:e.title})})}),E=(t(85),t(86),function(e){return Object(g.jsxs)("div",{className:"blogPopUp",children:[Object(g.jsx)("div",{className:"blogPopUp__item ",children:Object(g.jsx)("img",{alt:"popup",className:"blogPopUp__image",src:e.img})}),Object(g.jsx)("div",{className:"blogPopUp__subtitle",children:e.title}),Object(g.jsx)("div",{className:"blogPopUp__text",children:e.text}),Object(g.jsx)("button",{className:"blogPopUp__button",onClick:e.onButtonHandler,children:"Close"})]})}),T=function(e){var s,t=Object(a.useState)(!1),c=Object(p.a)(t,2),i=c[0],n=c[1],l=function(){n(!i)};return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("li",{className:"blog__child",children:[i?Object(g.jsx)(E,{title:e.blog.title,text:e.blog.subtitle,img:e.blog.image,onButtonHandler:l}):"",Object(g.jsx)("img",{src:e.blog.image,alt:"seo",className:"blog__img"}),Object(g.jsxs)("div",{className:"blog__calender",children:[Object(g.jsx)("div",{className:"blog__link",onClick:l,children:e.blog.title}),Object(g.jsx)("div",{className:"blog__info",children:Object(g.jsx)("span",{className:"blog__date",children:e.blog.createdAt})}),Object(g.jsxs)("div",{className:"blog__message",children:[" ",(s=e.blog.subtitle,s&&"string"===typeof s?s.length>300?s.substring(0,300)+"...":s:s>=0&&"number"===typeof s?s:void 0)]}),Object(g.jsx)("button",{className:"blog__clouse-button",onClick:l,children:"Read More"})]})]})})},P=function(){var e=Object(n.c)((function(e){return e.blog.blog})),s=Object(n.c)((function(e){return e.app.status})),t=Object(n.b)(),c=Object(h.g)().pathname;return Object(a.useEffect)((function(){t((function(e){e(x("loading")),m().then((function(s){e({type:"BLOG/GET_BLOG",blog:s.data}),e(x("done"))}))})),window.scrollTo(0,0)}),[t,c]),Object(g.jsx)(g.Fragment,{children:"loading"===s?Object(g.jsx)(w,{}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f,{type:"blog"}),Object(g.jsx)("div",{className:"blogs",children:Object(g.jsxs)("div",{className:"container blogs__container",children:[Object(g.jsx)(y,{title:"Blog"}),Object(g.jsx)("section",{className:"blog",children:Object(g.jsx)("div",{className:"content__conteiner",children:Object(g.jsx)("div",{className:"blog__news",children:Object(g.jsx)("ul",{className:"blog__list",children:e.map((function(e){return Object(g.jsx)(T,{blog:e},e.id)})).reverse()})})})})]})})]})})},k=function(){return function(e){d().then((function(s){var t,a,c,i,n,l,j=s.data[0];e((t=j.name,a=j.street,c=j.city,i=j.mobile,n=j.email,l=j.paypalme,{type:"FOOTER/GET-FOOTER",name:t,street:a,city:c,mobile:i,email:n,paypalme:l})),e(x("done"))}))}},S={createdAt:"",name:"",street:"",city:"",id:"",mobile:"",email:"",paypalme:""},A=(t(87),function(){var e=Object(n.c)((function(e){return e.footer})),s=Object(n.b)();return Object(a.useEffect)((function(){s(k())}),[s]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f,{type:"impressum"}),Object(g.jsx)("div",{id:"stars"}),Object(g.jsx)("div",{id:"stars2"}),Object(g.jsx)("div",{id:"stars3"}),Object(g.jsx)("div",{className:"impressum",children:Object(g.jsxs)("div",{className:"container impressum__container",children:[Object(g.jsx)("h1",{className:"impressum__title",children:"Impressum"}),Object(g.jsx)("span",{className:"impressum__name",children:e.name}),Object(g.jsx)("span",{className:"impressum__info",children:e.street}),Object(g.jsx)("span",{className:"impressum__info",children:e.city}),Object(g.jsxs)("a",{className:"impressum__email",href:"Tel: ".concat(e.mobile),children:["Tel: ",Object(g.jsx)("span",{className:"impressum__email_adress",children:e.mobile})]}),Object(g.jsxs)("a",{className:"impressum__email",href:"mailto:".concat(e.email),children:["E-Mail: ",Object(g.jsx)("span",{className:"impressum__email_adress",children:e.email})]})]})})]})}),G=(t(88),t(35),t(16)),M=t.n(G),F=t(43),B=t.n(F);function I(){var e=Object(n.c)((function(e){return e.profile}));return Object(g.jsx)("div",{className:"skills",children:Object(g.jsx)("div",{className:"container skills__container",children:Object(g.jsxs)(M.a,{children:[Object(g.jsx)(y,{title:"About Me"}),Object(g.jsx)("div",{className:"skills__text",children:e.aboutme}),e.video?Object(g.jsx)("div",{className:"skills__video-wrapper",children:Object(g.jsx)(B.a,{url:e.video})}):""]})})})}t(109);function R(){return Object(g.jsx)("footer",{className:"footer",children:Object(g.jsx)("div",{className:"container footer__container",children:Object(g.jsx)(M.a,{children:Object(g.jsxs)("div",{className:"footer__title",children:["\xa9 ",(new Date).getFullYear()," All Rights Reserved"]})})})})}t(110);var H=t(44),L=t.n(H),U=t(45),C=t.n(U),D=t(46);function J(){var e=Object(n.c)((function(e){return e.profile}));return Object(g.jsx)("div",{className:"main",children:Object(g.jsxs)("div",{className:"container main__container",children:[Object(g.jsx)(D.a,{style:{position:"absolute",width:"100%",height:"100vh"}}),Object(g.jsx)(M.a,{top:!0,children:Object(g.jsxs)("div",{className:"main__wrapper-conteiner",children:[Object(g.jsx)("div",{className:"main__wrapper__right",children:Object(g.jsxs)("div",{className:"main__wrapper__right-inner",children:[Object(g.jsx)(L.a,{text:e.profession,speed:300,typingDelay:1e3,cursor:"_",className:"main__typing-effect"}),Object(g.jsx)("span",{className:"main__name",children:e.name}),Object(g.jsx)("span",{className:"main__surname",children:e.surname})]})}),Object(g.jsx)("div",{className:"main__wrapper__left",children:Object(g.jsx)(C.a,{className:"Tilt",options:{max:20,speed:4e3},children:Object(g.jsx)("input",{type:"image",src:e.image,alt:"photo",className:"main__photo"})})})]})})]})})}var Y,q=function(){var e=Object(h.g)().pathname,s=Object(n.c)((function(e){return e.app.status}));return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f,{type:"main"}),"loading"===s?Object(g.jsx)(w,{}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(J,{}),Object(g.jsx)(I,{}),Object(g.jsx)(R,{})]})]})},z=(t(111),function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"container2 container-star",children:[Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-1"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"}),Object(g.jsx)("div",{className:"star-2"})]}),Object(g.jsxs)("div",{className:"container container-bird",children:[Object(g.jsx)("div",{className:"bird bird-anim",children:Object(g.jsxs)("div",{className:"bird-container",children:[Object(g.jsx)("div",{className:"wing wing-left",children:Object(g.jsx)("div",{className:"wing-left-top"})}),Object(g.jsx)("div",{className:"wing wing-right",children:Object(g.jsx)("div",{className:"wing-right-top"})})]})}),Object(g.jsx)("div",{className:"bird bird-anim",children:Object(g.jsxs)("div",{className:"bird-container",children:[Object(g.jsx)("div",{className:"wing wing-left",children:Object(g.jsx)("div",{className:"wing-left-top"})}),Object(g.jsx)("div",{className:"wing wing-right",children:Object(g.jsx)("div",{className:"wing-right-top"})})]})}),Object(g.jsx)("div",{className:"bird bird-anim",children:Object(g.jsxs)("div",{className:"bird-container",children:[Object(g.jsx)("div",{className:"wing wing-left",children:Object(g.jsx)("div",{className:"wing-left-top"})}),Object(g.jsx)("div",{className:"wing wing-right",children:Object(g.jsx)("div",{className:"wing-right-top"})})]})}),Object(g.jsx)("div",{className:"bird bird-anim",children:Object(g.jsxs)("div",{className:"bird-container",children:[Object(g.jsx)("div",{className:"wing wing-left",children:Object(g.jsx)("div",{className:"wing-left-top"})}),Object(g.jsx)("div",{className:"wing wing-right",children:Object(g.jsx)("div",{className:"wing-right-top"})})]})}),Object(g.jsx)("div",{className:"bird bird-anim",children:Object(g.jsxs)("div",{className:"bird-container",children:[Object(g.jsx)("div",{className:"wing wing-left",children:Object(g.jsx)("div",{className:"wing-left-top"})}),Object(g.jsx)("div",{className:"wing wing-right",children:Object(g.jsx)("div",{className:"wing-right-top"})})]})}),Object(g.jsx)("div",{className:"bird bird-anim",children:Object(g.jsxs)("div",{className:"bird-container",children:[Object(g.jsx)("div",{className:"wing wing-left",children:Object(g.jsx)("div",{className:"wing-left-top"})}),Object(g.jsx)("div",{className:"wing wing-right",children:Object(g.jsx)("div",{className:"wing-right-top"})})]})}),Object(g.jsxs)("div",{className:"container-title",children:[Object(g.jsxs)("div",{className:"title",children:[Object(g.jsx)("div",{className:"number",children:"4"}),Object(g.jsx)("div",{className:"moon",children:Object(g.jsxs)("div",{className:"face",children:[Object(g.jsx)("div",{className:"mouth"}),Object(g.jsxs)("div",{className:"eyes",children:[Object(g.jsx)("div",{className:"eye-left"}),Object(g.jsx)("div",{className:"eye-right"})]})]})}),Object(g.jsx)("div",{className:"number",children:"4"})]}),Object(g.jsx)("div",{className:"subtitle",children:"Oops. Looks like you took a wrong turn."}),Object(g.jsx)(N.b,{to:Y.MAIN,children:Object(g.jsx)("button",{className:"button__page",children:"Go to home"})})]})]})]})}),K=(t(112),function(e){var s=Object(n.c)((function(e){return e.footer}));return Object(g.jsx)("li",{className:"plan__elements",children:Object(g.jsxs)("div",{className:"plan__extra",children:[Object(g.jsxs)("div",{className:"plan__header",children:[Object(g.jsx)("div",{className:"plan__elements__title",children:e.shop.title}),Object(g.jsx)("div",{className:"plan__price","data-currency":"\u20ac","data-period":e.shop.unit,children:e.shop.price})]}),Object(g.jsxs)("ul",{className:"plan__info",children:[Object(g.jsx)("img",{className:"plan__list_image",src:e.shop.image,alt:"shop"}),Object(g.jsx)("li",{className:"plan__list",children:e.shop.subtitle}),Object(g.jsxs)("li",{className:"plan__list",children:["Pay ","&"," and Send Me Email:",Object(g.jsx)("a",{className:"impressum__email",href:"mailto:".concat(s.email),children:Object(g.jsx)("span",{className:"impressum__email_yellow",children:s.email})})]})]}),Object(g.jsx)("div",{className:"paypal__button-wrapper",children:Object(g.jsx)("a",{href:e.paypalMe,target:"_blank",className:"paypal__button",rel:"noreferrer",children:Object(g.jsxs)("button",{className:"paypal-button",children:[Object(g.jsx)("span",{className:"paypal-button-title",children:"Buy now with"}),Object(g.jsxs)("span",{className:"paypal-logo",children:[Object(g.jsx)("i",{children:"Pay"}),Object(g.jsx)("i",{children:"Pal"})]})]})})})]})})}),Q={shop:[{createdAt:"",name:"",avatar:"",title:"",price:"",image:"",subtitle:"",id:"1",unit:""}]};function V(){var e=Object(n.c)((function(e){return e.app.status})),s=Object(n.c)((function(e){return e.shop.shop})),t=Object(n.c)((function(e){return e.footer.paypalme})),c=Object(n.b)(),i=Object(h.g)().pathname;return Object(a.useEffect)((function(){c((function(e){e(x("loading")),o().then((function(s){e({type:"SHOP/GET_SHOP",shop:s.data}),e(x("done"))}))})),c(k()),window.scrollTo(0,0)}),[c,i]),Object(g.jsx)(g.Fragment,{children:"loading"===e?Object(g.jsx)(w,{}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f,{type:"shop"}),Object(g.jsx)("div",{className:"projects",children:Object(g.jsxs)("div",{className:"container projects__container",children:[Object(g.jsx)(y,{title:"Shop"}),Object(g.jsx)("ul",{className:" plan__elements__list ",children:s.map((function(e){return Object(g.jsx)(K,{shop:e,paypalMe:t},e.id)}))})]})})]})})}!function(e){e.MAIN="/Irma_Tjandra",e.IMPRESSUM="/impressum",e.SHOP="/shop",e.BLOG="/blog"}(Y||(Y={}));var W=function(){return Object(g.jsxs)(h.d,{children:[Object(g.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(g.jsx)(h.a,{to:Y.MAIN})}}),Object(g.jsx)(h.b,{path:Y.MAIN,component:q}),Object(g.jsx)(h.b,{exact:!0,path:Y.IMPRESSUM,component:A}),Object(g.jsx)(h.b,{exact:!0,path:Y.SHOP,component:V}),Object(g.jsx)(h.b,{exact:!0,path:Y.BLOG,component:P}),Object(g.jsx)(h.b,{exact:!0,path:"*",component:z})]})};var X=function(){var e=Object(n.b)();return Object(a.useEffect)((function(){e((function(e){return e(x("loading")),b().then((function(s){var t=s.data[0];e({type:"PROFILE/GET_DATA",name:t.name,surname:t.surname,profession:t.profession,image:t.image,video:t.video,aboutme:t.aboutme}),e(x("done"))}))}))}),[e]),Object(g.jsx)(N.a,{children:Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(W,{})})})},Z=t(21),$=t(47),ee=Object(Z.b)({shop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"SHOP/GET_SHOP":return Object(l.a)(Object(l.a)({},e),{},{shop:s.shop});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"PROFILE/GET_DATA":return Object(l.a)(Object(l.a)({},e),{},{name:s.name,surname:s.surname,profession:s.profession,image:s.image,aboutme:s.aboutme,video:s.video});default:return e}},blog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"BLOG/GET_BLOG":return Object(l.a)(Object(l.a)({},e),{},{blog:s.blog});default:return e}},footer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"FOOTER/GET-FOOTER":return Object(l.a)(Object(l.a)({},e),{},{name:s.name,street:s.street,city:s.city,mobile:s.mobile,email:s.email,paypalme:s.paypalme});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"APP/CHANGE_STATUS":return Object(l.a)(Object(l.a)({},e),{},{status:s.status});default:return e}}}),se=Object(Z.c)(ee,Object(Z.a)($.a));i.a.render(Object(g.jsx)(n.a,{store:se,children:Object(g.jsx)(X,{})}),document.getElementById("root"))},35:function(e,s,t){},52:function(e,s,t){},53:function(e,s,t){},59:function(e,s,t){},77:function(e,s,t){},82:function(e,s,t){},83:function(e,s,t){},84:function(e,s,t){},85:function(e,s,t){},86:function(e,s,t){},87:function(e,s,t){},88:function(e,s,t){}},[[113,1,2]]]);
//# sourceMappingURL=main.88f377d7.chunk.js.map