(this["webpackJsonptesting-task"]=this["webpackJsonptesting-task"]||[]).push([[0],{10:function(e,t,a){e.exports={container:"mainblock_container__6RsvI",someText:"mainblock_someText__1NzDd",titleWrapper:"mainblock_titleWrapper__3DpFt",title:"mainblock_title__2GH3K",description:"mainblock_description__2DOi4",descriptionWrapper:"mainblock_descriptionWrapper__2H-x-",calendar:"mainblock_calendar__1kDbk"}},11:function(e,t,a){e.exports={modalContainer:"modalWindow_modalContainer__32BkY",modalContent:"modalWindow_modalContent__BnCxp",inputFields:"modalWindow_inputFields__nt6T7",labelContainer:"modalWindow_labelContainer__JzOFq",closeBtn:"modalWindow_closeBtn__2kS6j"}},13:function(e,t,a){e.exports={container:"calendarTitle_container__LMu2G",arrow:"calendarTitle_arrow__8veP-",left:"calendarTitle_left__KOkym",right:"calendarTitle_right__QOUYx",nameOfMonth:"calendarTitle_nameOfMonth__txaa0"}},19:function(e,t,a){e.exports={container:"aboutUs_container__2Qj8d",title:"aboutUs_title__yL2hy",description:"aboutUs_description__1BL7k"}},32:function(e,t,a){},33:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(25),i=a.n(r),c=(a(32),a(33),a(8)),o=a.n(c),l=a(14),d=a(0),h=function(){return Object(d.jsxs)("div",{className:o.a.container,children:[Object(d.jsxs)("div",{className:o.a.logo,children:[Object(d.jsx)("div",{className:o.a.yellowElement,children:Object(d.jsxs)("div",{className:o.a.letters,children:[Object(d.jsx)("span",{children:"w"}),Object(d.jsx)("span",{children:"e"})]})}),Object(d.jsxs)("div",{className:o.a.title,children:[Object(d.jsx)("span",{className:o.a.R,children:"R"}),"devs"]})]}),Object(d.jsxs)("nav",{className:o.a.linkGroup,children:[Object(d.jsx)(l.b,{exact:!0,to:"/",className:o.a.link,children:"home"}),Object(d.jsx)(l.b,{to:"/about",className:o.a.link,children:"about us"})]})]})},j=a(10),m=a.n(j),u=a(7),b=a.n(u),_=a(18),p=a(20),x=a(9),O=a.n(x),f=a(11),y=a.n(f),v=function(e){var t=e.closeModal,a=e.chosenDay,n=e.chosenMonth;return Object(d.jsx)("div",{className:y.a.modalContainer,children:Object(d.jsxs)("div",{className:y.a.modalContent,children:[Object(d.jsxs)("div",{className:y.a.labelContainer,children:[Object(d.jsx)("label",{children:"Month"}),Object(d.jsx)("input",{value:n,type:"text",className:y.a.inputFields})]}),Object(d.jsxs)("div",{className:y.a.labelContainer,children:[Object(d.jsx)("label",{children:"Day"}),Object(d.jsx)("input",{value:a,type:"text",className:y.a.inputFields})]}),Object(d.jsx)("button",{className:y.a.closeBtn,onClick:t,children:"x"})]})})},k=function(e){var t=e.daysArray,a=e.isCurrentDay,s=e.isCurrentMonth,r=Object(n.useState)(!1),i=Object(p.a)(r,2),c=i[0],o=i[1],l=Object(n.useState)(null),h=Object(p.a)(l,2),j=h[0],m=h[1],u=Object(n.useState)(null),b=Object(p.a)(u,2),_=b[0],x=b[1];return Object(d.jsxs)("div",{className:O.a.gridContainer,children:[t.map((function(e,t){return a(e)?a(e)&&Object(d.jsx)("div",{onClick:function(){o(!0),m(String(e._d).substr(0,10)),x(String(e._d).substr(0,10))},className:O.a.activeContainer,children:e.format("D")},t):Object(d.jsx)("div",{onClick:function(){o(!0),m(String(e._d).substr(0,10)),x(String(e._d).substr(4,3))},className:s(e)?O.a.cellContainer:O.a.cellNotCurrentMonth,children:e.format("D")},t)})),c&&Object(d.jsx)(v,{daysArray:t,closeModal:function(){o(!1)},chosenDay:j,chosenMonth:_,isCurrentMonth:s})]})},C=function(){return Object(d.jsx)("div",{className:O.a.footerContainer,children:Object(_.a)(Array(7)).map((function(e,t){return Object(d.jsx)("div",{className:O.a.dayOfWeek,children:b()().day(t+1).format("ddd")},t)}))})},N=a(13),g=a.n(N),w=function(){return Object(d.jsxs)("div",{className:g.a.container,children:[Object(d.jsx)("div",{className:"".concat(g.a.arrow," + ").concat(g.a.left)}),Object(d.jsx)("div",{className:g.a.nameOfMonth,children:"october 2021"}),Object(d.jsx)("div",{className:"".concat(g.a.arrow," + ").concat(g.a.right)})]})},M=function(e){var t=e.startDay.clone().subtract(1,"day"),a=Object(_.a)(Array(42)).map((function(){return t.add(1,"day").clone()}));return Object(d.jsxs)("div",{children:[Object(d.jsx)(w,{}),Object(d.jsx)(k,{daysArray:a,isCurrentDay:function(e){return b()().isSame(e,"day")},isCurrentMonth:function(e){return b()().isSame(e,"month")}}),Object(d.jsx)(C,{})]})},W=function(){window.moment=b.a,b.a.updateLocale("en",{week:{dow:1}});for(var e=b()().startOf("month").startOf("week"),t=b()().endOf("month").endOf("week"),a=e.clone(),n=[];!a.isAfter(t);)n.push(a.clone()),a.add(1,"day");return Object(d.jsx)("div",{children:Object(d.jsx)(M,{startDay:e})})},D=function(){return Object(d.jsxs)("div",{className:m.a.container,children:[Object(d.jsxs)("div",{className:m.a.someText,children:[Object(d.jsx)("div",{className:m.a.titleWrapper,children:Object(d.jsx)("p",{className:m.a.title,children:"choose the day for the meeting"})}),Object(d.jsx)("div",{className:m.a.descriptionWrapper,children:Object(d.jsx)("p",{className:m.a.description,children:"We encourage you to book your appointment online. This will save you time."})})]}),Object(d.jsx)("div",{className:m.a.calendar,children:Object(d.jsx)(W,{})})]})},S=a(2),A=a(19),T=a.n(A),L=function(){return Object(d.jsxs)("div",{className:T.a.container,children:[Object(d.jsx)("div",{className:T.a.title,children:"Lorem ipsum creation timelines"}),Object(d.jsxs)("div",{className:T.a.description,children:[Object(d.jsx)("p",{children:"So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book."}),Object(d.jsx)("p",{children:"It's difficult to find examples of lorem ipsum in use before Letraset made it popular as a dummy text in the 1960s, although McClintock says he remembers coming across the lorem ipsum passage in a book of old metal type samples. So far he hasn't relocated where he once saw the passage, but the popularity of Cicero in the 15th century supports the theory that the filler text has been used for centuries."}),Object(d.jsx)("p",{children:"And anyways, as Cecil Adams reasoned, \u201c[Do you really] think graphic arts supply houses were hiring classics scholars in the 1960s?\u201d Perhaps. But it seems reasonable to imagine that there was a version in use far before the age of Letraset."}),Object(d.jsx)("p",{children:"McClintock wrote to Before & After to explain his discovery:"}),Object(d.jsx)("p",{children:"\u201cWhat I find remarkable is that this text has been the industry's standard dummy text ever since some printer in the 1500s took a galley of type and scrambled it to make a type specimen book; it has survived not only four centuries of letter-by-letter resetting but even the leap into electronic typesetting, essentially unchanged except for an occasional 'ing' or 'y' thrown in. It's ironic that when the then-understood Latin was scrambled, it became as incomprehensible as Greek; the phrase 'it's Greek to me' and 'greeking' have common semantic roots!\u201d (The editors published his letter in a correction headlined \u201cLorem Oopsum\u201d)."})]})]})};var B=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{}),Object(d.jsxs)(S.c,{children:[Object(d.jsx)(S.a,{path:"/about",children:Object(d.jsx)(L,{})}),Object(d.jsx)(S.a,{path:"/",children:Object(d.jsx)(D,{})})]})]})};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(B,{})})}),document.getElementById("root"))},8:function(e,t,a){e.exports={container:"header_container__3Ywt_",logo:"header_logo__SmDPF",yellowElement:"header_yellowElement__9F_gx",letters:"header_letters__3A0Zl",title:"header_title__1uUap",R:"header_R__3-KOg",linkGroup:"header_linkGroup__1xl_j",link:"header_link__1WijR"}},9:function(e,t,a){e.exports={gridContainer:"calendar_gridContainer__RT2f9",cellContainer:"calendar_cellContainer__2QusQ",activeContainer:"calendar_activeContainer__G33sC",footerContainer:"calendar_footerContainer__1oASX",dayOfWeek:"calendar_dayOfWeek__12vxe",cellNotCurrentMonth:"calendar_cellNotCurrentMonth__28mJo"}}},[[41,1,2]]]);
//# sourceMappingURL=main.d50262aa.chunk.js.map