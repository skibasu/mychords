(this.webpackJsonpmychords=this.webpackJsonpmychords||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.b126a1ff.png"},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),s=(n(12),n(6)),l=n.n(s),i=(n(13),function(){return a.a.createElement("header",{className:"Header"},a.a.createElement("div",{className:"page-logo"},a.a.createElement("a",{href:"https://skibasu.github.io/mychords/"},a.a.createElement("img",{src:l.a,alt:"My Chords"}))))}),m=(n(14),function(){var e=(new Date).getFullYear();return a.a.createElement("footer",{className:"Footer"},a.a.createElement("p",{className:"Footer__copyrights"},"My Chords ".concat(e," by ")," ",a.a.createElement("a",{className:"Footer__link",href:"mailto:skibasu@gmail.com"},"Witalis")))}),u=n(1),h=n(3),b=n(2),d=function(e){var t=e.onClickHandler,n=e.text,r=e.className,c="disabled"===r;return a.a.createElement("button",{className:"btn ".concat(r),onClick:t,disabled:c},n)},f=function(e){var t=e.name,n=e.onChangeHandler,r=e.isChecked?"selected":"";return a.a.createElement("div",{className:"GameForm__item"},a.a.createElement("button",{className:"btn btn-chords-select ".concat(r),onClick:n}),a.a.createElement("p",{className:"GameForm__label"},t))},p=(n(15),function(e){var t=e.excercises,n=e.chordsTypes,r=e.setChords,c=e.startGame;return a.a.createElement("div",{className:"GameForm"},a.a.createElement("h2",{className:"GameForm__title"},"Choose chords types:"),Object.keys(t).map((function(e,c){return a.a.createElement(f,{key:e+c,name:t[e].name,isChecked:n[e],onChangeHandler:function(){return r(e)}})})),a.a.createElement("div",{className:"GameForm__btn-wrapper"},a.a.createElement(d,{onClickHandler:c,text:"Start",className:Object.values(n).filter((function(e){return e})).length?"":"disabled"})))}),y=(n(16),function(e){var t=e.value,n=e.setAnswer,r=e.index,c=e.answerObj[t+r][1],o=2===t.length?"blackKey ".concat(c?"active":""):"whiteKey ".concat(c?"active":""," ");return a.a.createElement("button",{className:o,onClick:function(){n(t,c?"":t,r)}})}),O=function(e){var t=e.correct,n=e.tryes,r=e.workOn;return a.a.createElement("div",{className:"summary"},a.a.createElement("p",null,"Tryes: ",n," / ",t),n/t!==1?a.a.createElement("p",null,"You should work on :"):a.a.createElement("p",null,"Perfect"),r.filter((function(e,t){return r.indexOf(e)===t})).map((function(e,t){return a.a.createElement("p",{key:e+t},e)})))},j={hash:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],flats:["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"]},E={majorTriads:{name:"Major triads"},minorTriads:{name:"Minor triads"},sevenChords:{name:"Seven chords"},major7Chords:{name:"Major 7th chords"},minor7Chords:{name:"Minor 7th chords"}},v={C1:["",!1],"C#1":["",!1],Db1:["",!1],D1:["",!1],"D#1":["",!1],Eb1:["",!1],E1:["",!1],F1:["",!1],"F#1":["",!1],Gb1:["",!1],G1:["",!1],"G#1":["",!1],Ab1:["",!1],A1:["",!1],"A#1":["",!1],Bb1:["",!1],B1:["",!1],C2:["",!1],"C#2":["",!1],Db2:["",!1],D2:["",!1],"D#2":["",!1],Eb2:["",!1],E2:["",!1],F2:["",!1],"F#2":["",!1],Gb2:["",!1],G2:["",!1],"G#2":["",!1],Ab2:["",!1],A2:["",!1],"A#2":["",!1],Bb2:["",!1],B2:["",!1]};n(17);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){var t=e.chords,n=e.setGameObj,c=j.hash,o=j.flats,s=v,l=Object(r.useState)(s),i=Object(b.a)(l,2),m=i[0],f=i[1],p=Object(r.useState)(""),E=Object(b.a)(p,2),g=E[0],k=E[1],C=Object(r.useState)({tryes:0,correct:0,workOn:[]}),G=Object(b.a)(C,2),N=G[0],_=N.tryes,T=N.correct,D=N.workOn,F=G[1],P=function(e,t,n){f((function(r){return w({},r,Object(h.a)({},e+n,[t,!r[e+n][1]]))})),k("")};return a.a.createElement("div",{className:"Game"},t.length>0?a.a.createElement("h2",{className:"Game__title"},"What are correct notes"):a.a.createElement("h2",{className:"Game__title-summary"},"Summary"),a.a.createElement("div",{className:"chord"},t.length>0?a.a.createElement("span",{key:t[0].name+new Date},t[0].name):a.a.createElement(O,{tryes:_,correct:T,workOn:D})),t.length>0&&a.a.createElement("div",{className:"Game__answer"},a.a.createElement("span",{className:g&&"Game__error-message"},g||Object.values(m).map((function(e){return e[0]})).join(" "))),a.a.createElement(d,{onClickHandler:function(){return t.length>0?(e=t[0].name,F((function(e){return w({},e,{tryes:_+1})})),void(Object.values(m).map((function(e,t){return e[0]})).filter((function(e){return e})).join()===t[0].notes.join()?(k(null),f(s),F((function(e){return w({},e,{correct:T+1})})),n((function(n){return w({},n,{myChords:t.filter((function(t){return t.name!==e}))})}))):(k("Try again"),f(s),F((function(t){return w({},t,{workOn:[].concat(Object(u.a)(t.workOn),[e])})}))))):n((function(e){return w({},e,{isGame:!1})}));var e},text:t.length>0?"Check":"Back",className:"btn-answer"}),a.a.createElement("div",{className:"Game__keyboard"},a.a.createElement("div",{className:"keyboard"},t.length>0&&"hash"===t[0].type&&c.map((function(e,t){return a.a.createElement(y,{key:e+new Date,value:e,index:1,setAnswer:P,answerObj:m})})),t.length>0&&"flats"===t[0].type&&o.map((function(e,t){return a.a.createElement(y,{key:e+new Date,value:e,index:1,setAnswer:P,answerObj:m})}))),a.a.createElement("div",{className:"keyboard"},t.length>0&&"hash"===t[0].type&&c.map((function(e,t){return a.a.createElement(y,{key:e+new Date,value:e,index:2,setAnswer:P,answerObj:m})})),t.length>0&&"flats"===t[0].type&&o.map((function(e,t){return a.a.createElement(y,{key:e+new Date,value:e,index:2,setAnswer:P,answerObj:m})})))))},C=function(e,t,n){return e.map((function(r,a){var c=a+4,o=a+7,s=a+12;switch(t.chordType){case"major":c=a+4;break;case"minor":c=a+3;break;case"major7":c=a+4,s=a+11;break;case"minor7":c=a+3,s=a+10;break;case"seven":c=a+4,s=a+10;break;default:return!1}var l=e[a],i=c>e.length-1?e[c-e.length]:e[c],m=o>e.length-1?e[o-e.length]:e[o],u=s>e.length-1?e[s-e.length]:e[s],h="minor"===t.chordType||"major"===t.chordType?[l,i,m]:[l,i,m,u];return"minor"===t.chordType||t.chordType,{name:"".concat(e[a]," ").concat(t.chordType),notes:h,type:n}}))},G=function(e){var t=e.hash,n=e.flats,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{chordType:"major"};return[C(n,r,"flats"),C(t,r,"hash")]},N=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}return e};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var T=function(){var e={};Object.keys(E).forEach((function(t){return e[t]=!1}));var t=Object(r.useState)(e),n=Object(b.a)(t,2),c=n[0],o=n[1],s=Object(r.useState)({isGame:!1,myChords:[]}),l=Object(b.a)(s,2),i=l[0],m=i.isGame,d=i.myChords,f=l[1];return a.a.createElement("div",{className:"ContentModule__screen ContentModule__screen--start"},m?a.a.createElement(k,{chords:d,setGameObj:f}):a.a.createElement(p,{excercises:E,chordsTypes:c,setChords:function(e){return o((function(t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,Object(h.a)({},e,!t[e]))}))},startGame:function(){var e=[];c.minorTriads&&(e=[].concat(Object(u.a)(e),Object(u.a)(G(j,{chordType:"minor"})[0]),Object(u.a)(G(j,{chordType:"minor"})[1]))),c.majorTriads&&(e=[].concat(Object(u.a)(e),Object(u.a)(G(j,{chordType:"major"})[0]),Object(u.a)(G(j,{chordType:"major"})[1]))),c.minor7Chords&&(e=[].concat(Object(u.a)(e),Object(u.a)(G(j,{chordType:"minor7"})[0]),Object(u.a)(G(j,{chordType:"minor7"})[1]))),c.major7Chords&&(e=[].concat(Object(u.a)(e),Object(u.a)(G(j,{chordType:"major7"})[0]),Object(u.a)(G(j,{chordType:"major7"})[1]))),c.sevenChords&&(e=[].concat(Object(u.a)(e),Object(u.a)(G(j,{chordType:"seven"})[0]),Object(u.a)(G(j,{chordType:"seven"})[1]))),f((function(){return{isGame:!0,myChords:N(e)}}))}}))},D=(n(18),function(){return a.a.createElement("section",{className:"ContentModule"},a.a.createElement(T,null))}),F=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i,null),a.a.createElement(D,null),a.a.createElement(m,null))},P=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.b0d42a00.chunk.js.map