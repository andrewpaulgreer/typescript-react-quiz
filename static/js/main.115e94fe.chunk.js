(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{18:function(e,n,t){e.exports=t.p+"static/media/ts-quiz.b59ea9b9.jpg"},19:function(e,n,t){e.exports=t(27)},27:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(14),i=t.n(c),o=t(5),u=t.n(o),l=t(8),s=t(4),p=t(7),d=t(1),f=t(2),b=t(3);function m(){var e=Object(f.a)(["\ntransition: all 0.3 ease;\n\n:hover {\n    opacity: 0.8;\n    \n}\n\nbutton {\n    cursor: pointer;\n    user-select: none;\n    font-size: 1.3rem;\n    width: 300px;\n    height: 50px;\n    margin: 5px 0;\n    background: ",";\nborder: 3px solid #fff;\nbox-shadow: 1px 2px 0px rgba(0,0,0,0.1);\nborder-radius: 10px;\ncolor: #fff;\ntext-shadow: opx 1px 0px rgba(0,0,0,0.25);\n}\n"]);return m=function(){return e},e}function x(){var e=Object(f.a)(["\nmax-width: 1100px;\nbackgorund: #ebfeff;\nborder-radius: 10px;\nborder: 2px dolid #005a3;\npadding: 20px;\nbox-shadow: 0px 5px 10px rgba(0,0,0,0.25);\ntext-align: center;\n\np{\n    font-size: 1.8rem;\n}\n\n"]);return x=function(){return e},e}var g,h=b.b.div(x()),v=b.b.div(m(),(function(e){var n=e.correct,t=e.userClicked;return n?"linear-gradient(90deg, #56ffa4, #59bc86)":!n&&t?"linear-gradient(90deg, #ff5656, #c16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),w=function(e){var n=e.question,t=e.answers,r=e.callback,c=e.userAnswer,i=e.questionNr,o=e.totalQuestions;return a.a.createElement(h,null,a.a.createElement("p",{className:"number"},"Question: ",i," / ",o),a.a.createElement("p",{dangerouslySetInnerHTML:{__html:n}}),a.a.createElement("div",null,t.map((function(e){return a.a.createElement(v,{key:e,correct:(null===c||void 0===c?void 0:c.correctAnswer)===e,userClicked:(null===c||void 0===c?void 0:c.answer)==e},a.a.createElement("button",{disabled:!!c,value:e,onClick:r},a.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}})))}))))};!function(e){e.EASY="easy",e.MEDIUM="medium",e.HARD="hard"}(g||(g={}));var E=function(){var e=Object(l.a)(u.a.mark((function e(n,t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(n,"&difficulty=").concat(t,"&type=multiple"),e.next=3,fetch(r);case 3:return e.next=5,e.sent.json();case 5:return a=e.sent,e.abrupt("return",a.results.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{answers:(n=[].concat(Object(s.a)(e.incorrect_answers),[e.correct_answer]),Object(s.a)(n).sort((function(){return Math.random()-.5})))});var n})));case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),j=t(18),O=t.n(j);function y(){var e=Object(f.a)(["\ndisplay: flex;\nflex-direction: column;\njustfy-content: center;\nalign-items: center;\n\n>p {\n    color: #fff;\n}\n\n.score {\n    justify-content: center;\n    align-items: center;\n    color: #fff;\n    font-size: 2rem;\n    margin: 0;\n}\n\nh1{\nfont-family: Kumbh Inline;\nbackground-image: linear-gradient(180deg, #fff, #87f1ff);\nbackground-size: 100%;\nbackground-clip: text;\n-webkit-background-clip: text;\n-webkit-text-fill-color: transparent;\n-moz-background-clip: text;\n-mox-text-fill-color: transparent;\nfilter: drop-shadow(2px 2px #0085a3)\nfont-size: 100px;\nfont-weight: 400;\ntext-allign: center;\nmargin: 30px;\n}\n\n.start, .next, .submit-button {\n    cursor: pointer;\n    background: linear-gradient(180deg, #fff, #87f1ff);\n    border: 2px solid #d38558;\n    box-shadow: 0px 5px 10px reba(0,0,0,0.25);\n    border-radius: 10px;\n    height: 100px;\n    margin: 20px 0;\n    padding: 0 40px;\n}\n\n.start{\n    width: 500px;\n    height: 100px;\n    font-size: 3rem;\n}\n.next{\n \n    width: 600px;\n    height: 100px;  \n}\n\n.leaderboard{\n    max-width: 1100px;\nbackgorund: #ebfeff;\nborder-radius: 10px;\nborder: 2px solid white;\npadding: 20px;\nbox-shadow: 0px 5px 10px rgba(0,0,0,0.25);\ntext-align: center;\n}\n"]);return y=function(){return e},e}function k(){var e=Object(f.a)(["\nhtml {\n    height: 100%\n}\n\nbody {\n    background-image: url(",");\n    background-size: cover;\n    margin: 0;\n    padding: 0 20px;\n    display: flex;\n    justify-content: center;\n}\n\n* {\n    box-sizing: border-box;\n    font-family: 'Kumbh', sans-sarif;\n}\n"]);return k=function(){return e},e}var S=Object(b.a)(k(),O.a),z=b.b.div(y()),N=function(e){var n=e.addInput,t=Object(r.useState)(""),c=Object(d.a)(t,2),i=c[0],o=c[1];return a.a.createElement("form",{className:"form-inline"},a.a.createElement("div",{className:"input-group"},a.a.createElement("label",{id:"initial-input",style:{marginBottom:"50px",fontSize:"40px"}},"Initials:"),a.a.createElement("input",{type:"text",onChange:function(e){o(e.target.value)},value:i,id:"inputInitials",className:"form-control",style:{marginRight:"30px",marginLeft:"30px",height:"50px",width:"200px"},"aria-describedby":"passwordHelpInline",placeholder:"AB"}),a.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),n(i)},className:"submit-button",style:{height:"75px",width:"100px",marginTop:"10px",fontSize:"1rem"}},"Submit")))};function q(){var e=Object(f.a)(["\nmax-width: 1100px;\nbackgorund: #ebfeff;\nborder-radius: 10px;\nborder: 2px dolid #005a3;\npadding: 20px;\nbox-shadow: 0px 5px 10px rgba(0,0,0,0.25);\ntext-align: center;\n\np{\n    font-size: 1.8rem;\n}\n\n"]);return q=function(){return e},e}var A=b.b.div(q()),I=function(e){var n=e.input,t=e.Score;return a.a.createElement("div",{className:"leaderboard",style:{}},a.a.createElement("span",{style:{color:"White",fontSize:"30px",marginTop:"10px"}},a.a.createElement("ul",null,n.text),a.a.createElement("ul",{id:"score-list"},t," ")))},C=function(e){var n=e.inputs,t=e.Score;return a.a.createElement(A,null,a.a.createElement("ul",null,a.a.createElement("h2",{style:{color:"White"}},"Score:"),n.map((function(e){return a.a.createElement(I,{key:e.text,input:e,Score:t})}))))},_=[{text:""}],T=function(){var e=Object(r.useState)(!1),n=Object(d.a)(e,2),t=n[0],c=n[1],i=Object(r.useState)([]),o=Object(d.a)(i,2),p=o[0],f=o[1],b=Object(r.useState)(0),m=Object(d.a)(b,2),x=m[0],h=m[1],v=Object(r.useState)([]),j=Object(d.a)(v,2),O=j[0],y=j[1],k=Object(r.useState)(0),q=Object(d.a)(k,2),A=q[0],I=q[1],T=Object(r.useState)(!0),M=Object(d.a)(T,2),Q=M[0],H=M[1],L=Object(r.useState)(_),B=Object(d.a)(L,2),D=B[0],R=B[1],J=function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),H(!1),e.next=4,E(10,g.EASY);case 4:n=e.sent,f(n),I(0),y([]),h(0),c(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(a.a.Fragment,null,a.a.createElement(S,null),a.a.createElement(z,null,a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"REACT Typescript Quiz"),Q||10==O.length?a.a.createElement("button",{className:"start",onClick:J},"Start"):null,10==O.length?a.a.createElement(N,{addInput:function(e){R([].concat(Object(s.a)(D),[{text:e}]))}}):null,Q?null:a.a.createElement("p",{className:"score"},"Score: ",A),t&&a.a.createElement("p",null,"Loading Questions .... "),!t&&!Q&&a.a.createElement(w,{questionNr:x+1,totalQuestions:10,question:p[x].question,answers:p[x].answers,userAnswer:O?O[x]:void 0,callback:function(e){if(!Q){var n=e.currentTarget.value,t=p[x].correct_answer===n;t&&I((function(e){return e+1}));var r={question:p[x].question,answer:n,correct:t,correctAnswer:p[x].correct_answer};y((function(e){return[].concat(Object(s.a)(e),[r])}))}}}),Q||t||O.length!==x+1||9===x?null:a.a.createElement("button",{className:"next",onClick:function(){var e=x+1;10===e?H(!0):h(e)}},"Next Question"),a.a.createElement(C,{inputs:D,Score:A}))))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(T,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.115e94fe.chunk.js.map