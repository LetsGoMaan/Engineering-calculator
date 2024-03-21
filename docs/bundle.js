(()=>{"use strict";var e={374:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(933),a=t.n(r),u=t(476),o=t.n(u)()(a());o.push([e.id,"* {\n    padding: 0;\n    margin: 0;\n    font-size: 30px;\n    color: #e6e6e6;\n    border-radius: 0;\n    border: none;\n    outline: none;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    overflow: hidden;\n    flex-direction: column;\n    background: #D3D3D3;\n}\n\n/* BODY */\n\ndiv.wrap {\n    width: 600px;\n    height: 400px;\n    border-radius: 15px;\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    overflow: hidden;\n    background: #524d4d;\n}\n\ninput.scoreboard {\n    height: 70px;\n    width: 570px;\n    background: #5a5b5c;\n    font-size: 50px;\n    padding: 15px;\n    text-align: right;\n}\n\ndiv.tableWrap {\n    display: flex;\n    flex-direction: column;\n}\n\ndiv.line {\n    display: flex;\n}\n\nbutton.cell {\n    width: 75px;\n    height: 75px;\n    text-align: center;\n    line-height: 75px;\n    background: #5a5b5c;\n}\n\nbutton.cell:hover {\n    cursor: pointer;\n    background-color: #0894f1;\n    opacity: 0.7;\n}\n\nbutton.sign {\n    background: #5a5b5c;\n    font-size: 40px;\n}\n\nbutton.number {\n    font-size: 40px;\n    background: #5a5b5c;\n}\n\nbutton.pow {\n    line-height: 65px;\n}\n\nsup {\n    font-size: 20px;\n}\n\n/* ERROR */\n\ninput.errorMessage {\n    background: rgba(255, 255, 255, 0.0000001);\n    width: 600px;\n    color: red;\n    line-height: 60px;\n    margin-top: 20px;\n    text-align: center;\n    min-height: 60px;\n}\n",""]);const i=o},476:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,u){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(void 0!==u&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=u),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),n.push(s))}},n}},933:e=>{e.exports=function(e){return e[1]}},892:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var u={},o=[],i=0;i<e.length;i++){var l=e[i],c=r.base?l[0]+r.base:l[0],s=u[c]||0,v="".concat(c," ").concat(s);u[c]=s+1;var d=t(v),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)n[d].references++,n[d].updater(m);else{var f=a(m,r);r.byIndex=i,n.splice(i,0,{identifier:v,updater:f,references:1})}o.push(v)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var u=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<u.length;o++){var i=t(u[o]);n[i].references--}for(var l=r(e,a),c=0;c<u.length;c++){var s=t(u[c]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}u=l}}},311:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},60:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},192:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},760:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var u=t.sourceMap;u&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},865:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var u=n[r]={id:r,exports:{}};return e[r](u,u.exports,t),u.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(892),n=t.n(e),r=t(760),a=t.n(r),u=t(311),o=t.n(u),i=t(192),l=t.n(i),c=t(60),s=t.n(c),v=t(865),d=t.n(v),m=t(374),f={};function h(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}f.styleTagTransform=d(),f.setAttributes=l(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=s(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var p=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.value=0,this.history=[],this.memory=0}var n,t;return n=e,(t=[{key:"resetMemory",value:function(){this.memory=0,I.innerHTML=this.memory}},{key:"changeMemory",value:function(e){this.memory+=e,I.innerHTML=this.memory}},{key:"resetValue",value:function(e){this.value=e}},{key:"executeCommand",value:function(e){this.history.push(this.value),this.value=e.execute(this.value)}},{key:"undo",value:function(){this.resetValue(this.history.pop())}}])&&h(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}()),g=document.getElementById("scoreboard"),b=document.querySelectorAll("button.number"),y=document.getElementsByName("sign"),x=document.getElementById("deleteButton"),w=document.getElementsByName("oneValueCommands"),k=document.getElementsByName("twoValueCommands"),E=document.getElementsByName("memory"),N=document.getElementById("prevValue"),I=document.getElementById("memValue"),M=document.getElementById("errorMessage"),T=["+","-","×","÷"],C=new Proxy({x:0,y:0,signIndex:0,command:"",theme:"dark"},{set:function(e,n,t){return"command"===n&&k.forEach((function(e){return e.style.backgroundColor=e.value===t?"blue":"#5a5b5c"})),e[n]=t,!0}});function S(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function L(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,n,t){return n&&L(e.prototype,n),t&&L(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}var B=function(){function e(n){S(this,e),this.valueToAdd=n}return P(e,[{key:"execute",value:function(e){return e+this.valueToAdd}}]),e}(),A=function(){function e(n){S(this,e),this.valueToSubtract=n}return P(e,[{key:"execute",value:function(e){return e-this.valueToSubtract}}]),e}(),D=function(){function e(n){S(this,e),this.valueToDivide=n}return P(e,[{key:"execute",value:function(e){return e/this.valueToDivide}}]),e}(),O=function(){function e(n){S(this,e),this.valueToMultiply=n}return P(e,[{key:"execute",value:function(e){return e*this.valueToMultiply}}]),e}(),V=function(){function e(n){S(this,e),this.valueToPow=n}return P(e,[{key:"execute",value:function(e){return Math.pow(e,this.valueToPow)}}]),e}(),j=function(){function e(){S(this,e)}return P(e,[{key:"execute",value:function(e){return R(e,1)}}]),e}(),R=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return n>18?Number.MAX_SAFE_INTEGER:n<0?-e(-n,t):1===n||0===n?t:e(n-1,t*n)},z=function(){function e(){S(this,e)}return P(e,[{key:"execute",value:function(e){return-e}}]),e}(),F=function(){function e(){S(this,e)}return P(e,[{key:"execute",value:function(e){return e/100}}]),e}(),H=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=g.value;switch(e){case"+":return new B(n);case"-":return new A(n);case"×":return new O(n);case"÷":return new D(n);case"+/-":return new z;case"%":return new F;case"!":return new j;case"x^2":return new V(2);case"x^3":return new V(3);case"10^x":case"x^y":return new V(n);case"1/x":return new V(-1);case"x^1/2":return new V(.5);case"x^1/3":return new V(1/3);case"x^1/y":return new V(1/n);case"MC":p.resetMemory();break;case"M+":p.changeMemory(Number(g.value));break;case"M-":p.changeMemory(-Number(g.value));break;case"MR":var r,a=parseFloat(t);switch(t.slice(-1)){case"+":r=a+p.memory;break;case"-":r=a-p.memory;break;case"×":r=a*p.memory;break;case"÷":r=a/p.memory;break;default:r=p.memory}g.value=String(r),C.command="",C.signIndex=0}},Z=function(e){var n="."===g.value||"-"===g.value||"+"===g.value,t=(!g.value||g.value.length&&n||C.signIndex,0===Number(g.value)&&"1/x"===e.value),r=Number(g.value)<0&&("x^1/2"===e.value||"x^1/3"===e.value),a=g.value.includes(".")&&"!"===e.value;C.command?M.value="Perform previous command":t?M.value="Division by 0":r?M.value="Can't find a root of negative number":a?M.value="Can't find factorial of a real number":"10^x"===e.value?(p.resetValue(10),p.executeCommand(H(e.value,Number(g.value))),g.value=String(p.value)):(p.resetValue(Number(g.value)),p.executeCommand(H(e.value)),g.value=String(p.value))};x.addEventListener("click",(function(){g.value=""})),b.forEach((function(e){e.addEventListener("click",(function(){return g.value+=e.value}))})),y.forEach((function(e){return e.addEventListener("click",(function(){return function(e){var n=!g.value||"-"===g.value,t=T.includes(g.value[g.value.length-1]);n?"-"!==e.value||g.value?"+"===e.value&&(g.value=""):g.value+=e.value:t?function(e){var n="-"===e.value&&C.signIndex===g.value.length-1,t=C.signIndex&&C.signIndex!==g.value.length-1;n?g.value+=e.value:t&&"="!==e.value?g.value=g.value.substring(0,g.value.length-2)+e.value:"="!==e.value&&(g.value=g.value.substring(0,g.value.length-1)+e.value)}(e):C.command?function(e){var n=!g.value||!Number.isFinite(Number(g.value)),t=0===Number(g.value)&&"x^1/y"===C.command,r=p.value<0&&Number(g.value)<1&&Number(g.value)>-1;n?M.value="N value should be one number":t?M.value="Division by 0":r?M.value="Can't find a root of negative number":(p.executeCommand(H(C.command,Number(g.value))),g.value=String(p.value),C.command="",C.signIndex="="===e.value?0:g.value.length,g.value+="="===e.value?"":e.value)}(e):function(e){if(C.signIndex){var n=Number(g.value.substring(C.signIndex+1,g.value.length));0===n&&"÷"===g.value[C.signIndex]?M.value="Division by 0":(p.executeCommand(H(g.value[C.signIndex],n)),g.value=String(p.value),C.signIndex="="===e.value?0:g.value.length,g.value+="="===e.value?"":e.value)}else p.resetValue(Number(g.value)),C.signIndex="="===e.value?0:g.value.length,g.value+="="===e.value?"":e.value}(e)}(e)}))})),w.forEach((function(e){return e.addEventListener("click",(function(){return Z(e)}))})),k.forEach((function(e){return e.addEventListener("click",(function(){return function(e){var n="."===g.value||"-"===g.value||"+"===g.value,t=!g.value||g.value.length&&n||C.signIndex,r="x^1/y"===e.value&&Number(g.value)<0;C.command?M.value="Perform previous command":t?M.value="X value should be one number":r?M.value="Can't find a root of negative number":(p.resetValue(Number(g.value)),g.value=0,C.command=e.value)}(e)}))})),E.forEach((function(e){return e.addEventListener("click",(function(){return Z(e)}))})),N.addEventListener("click",(function(){C.command?(g.value=String(p.value),C.command=""):p.history.length?(M.value&&(M.value=""),p.undo(),g.value=String(p.value)):M.value="History is empty"})),g.addEventListener("input",M.value?M.value="":"")})()})();