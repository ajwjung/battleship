(()=>{var e={890:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,':root {\n  --grid-bg: rgb(32, 119, 160);\n  --grid-outline: rgb(34, 190, 211);\n  --grid-text: rgb(98, 211, 226);\n  --blue: rgb(57, 101, 133);\n  --blue-border: rgba(34, 73, 104, 0.85);\n  --dark-blue: rgb(15, 49, 80);\n  --light-gray: rgb(211, 211, 211);\n  --dark-gray: rgb(90, 109, 119);\n  --off-white: rgb(243, 244, 245);\n  --red: rgb(185, 16, 16);\n  --border: 3px solid var(--blue-border);\n  --font-size: 1.5rem;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: var(--grid-text);\n  font-family: "Roboto Mono", monospace;\n}\n\nbody {\n  background: rgb(5, 30, 49);\n}\n\n.container {\n  height: 100vh;\n  width: 100vw;\n  margin: 0 auto;\n}\n\n.content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  justify-content: center;\n  grid-template-columns: 1fr 0.5fr 1fr;\n  grid-template-rows: repeat(3, 0.8fr) 5fr 0.5fr;\n}\n\nh1,\n.info-container,\n.player-side,\n.opponent-side,\n.player-message-container,\n.opponent-message-container,\n.icon-container,\n.chat-bubble,\n.button-container,\n.reset-game,\nfooter {\n  display: flex;\n  align-items: center;\n}\n\nh1,\n.info-container,\n.player-side,\n.opponent-side,\n.button-container,\n.reset-game,\nfooter {\n  justify-content: center;\n}\n\nh1 {\n  text-align: center;\n  grid-column: 1 / span 3;\n  grid-row: 1;\n  margin-top: 2rem;\n}\n\n.info-container {\n  grid-column: 1 / span 3;\n  grid-row: 2;\n  font-size: var(--font-size);\n  gap: 1rem;\n  flex-direction: column;\n}\n\n/* Styles message containers and buttons */\n.message-container {\n  height: 100%;\n  width: 100%;\n  padding: 0 1rem;\n  grid-column: 1 / span 3;\n  grid-row: 3;\n  display: grid;\n  grid-template-columns: 1fr 0.5fr 1fr;\n}\n\n.player-message-container {\n  width: 100%;\n  grid-column: 1;\n  justify-content: flex-start;\n  margin-left: 5rem;\n}\n\n.opponent-message-container {\n  width: 100%;\n  grid-column: 3;\n  flex-direction: row-reverse;\n  justify-content: flex-start;\n  margin-left: -5rem;\n}\n\n.icon-container {\n  flex-direction: column;\n}\n\n.user-icon {\n  height: 75px;\n  width: 75px;\n  filter: invert(77%) sepia(42%) saturate(538%) hue-rotate(141deg)\n    brightness(93%) contrast(89%);\n}\n\n.chat-bubble {\n  height: 5rem;\n  width: 60%;\n  border-radius: 10px;\n  background: var(--blue);\n}\n\n.player-message-container .chat-bubble {\n  margin-left: 4rem;\n  position: relative;\n}\n\n.player-message-container .chat-bubble::before {\n  content: "";\n  position: absolute;\n  height: 0;\n  width: 0;\n  border-top: 15px solid transparent;\n  border-right: 30px solid var(--blue);\n  border-bottom: 15px solid transparent;\n  top: 20px;\n  left: -30px;\n}\n\n.opponent-message-container .chat-bubble {\n  margin-right: 5rem;\n  position: relative;\n}\n\n.opponent-message-container .chat-bubble::after {\n  content: "";\n  position: absolute;\n  height: 0;\n  width: 0;\n  border-top: 15px solid transparent;\n  border-left: 30px solid var(--blue);\n  border-bottom: 15px solid transparent;\n  top: 20px;\n  right: -30px;\n}\n\n#player-text,\n#cpu-text {\n  margin-left: 2rem;\n  font-size: var(--font-size);\n  word-wrap: break-word;\n}\n\n/* Styles buttons */\n.button-container {\n  height: 100%;\n  width: 100%;\n  grid-column: 2;\n  font-size: var(--font-size);\n  gap: 1rem;\n  position: relative;\n}\n\n.start-game,\n.reset-game {\n  height: 40px;\n  width: 100px;\n  border: none;\n  border-radius: 3px;\n  font-size: 1rem;\n  position: relative;\n}\n\n.start-game:disabled {\n  background: var(--dark-gray);\n  color: rgb(0, 0, 0);\n  font-style: italic;\n  text-transform: lowercase;\n}\n\n.start-game:not(:disabled),\n.help,\n.reset-game {\n  background: var(--blue);\n  color: var(--off-white);\n  font-weight: 600;\n}\n\n.help,\n.reset-game {\n  height: 37px;\n  width: 37px;\n  border: none;\n  border-radius: 50%;\n  font-size: 1.2rem;\n}\n\n.start-game:not(:disabled):hover,\n.help:hover,\n.reset-game:hover {\n  background: var(--blue-border);\n}\n\n.help:hover {\n  color: rgb(231, 171, 153);\n}\n\n#reset-icon {\n  height: 75%;\n  filter: invert(99%) sepia(1%) saturate(168%) hue-rotate(169deg)\n    brightness(97%) contrast(99%);\n}\n\n#reset-icon:hover {\n  filter: invert(89%) sepia(5%) saturate(4420%) hue-rotate(308deg)\n    brightness(87%) contrast(110%);\n}\n\n/* Styles tooltip for start button */\n.start-game .tooltip-text {\n  visibility: hidden;\n  width: 165px;\n  color: rgb(255, 86, 74);\n  position: absolute;\n  top: 53px;\n  left: -32px;\n  font-style: normal;\n  text-transform: none;\n  font-size: 0.87rem;\n}\n\n.start-game:disabled:hover .tooltip-text {\n  visibility: visible;\n}\n\n/* Styles help popup box */\n.backdrop {\n  height: 100vh;\n  width: 100vw;\n  background: rgba(50, 50, 50, 0.5);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 20;\n}\n\n.help-box {\n  width: 550px;\n  background: var(--dark-blue);\n  border: 1px solid var(--grid-outline);\n  border-radius: 3px;\n  padding: 2rem;\n  font-size: 1rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 20;\n  display: grid;\n  grid-template-rows: 0.5fr 5fr;\n}\n\n.help-bar {\n  grid-row: 1;\n  display: flex;\n  justify-content: space-between;\n}\n\n#how-to,\n#close-help {\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n#close-help {\n  height: 30px;\n  width: 30px;\n  background: none;\n  border: none;\n}\n\n#close-help:hover {\n  color: var(--red);\n}\n\n.help-info {\n  grid-row: 2;\n}\n\n.help-info > ul {\n  padding-left: 25px;\n}\n\n.help-info:not(b),\n.help-info > ul li {\n  color: var(--off-white);\n}\n\n.hidden {\n  display: none;\n}\n\n.player-side {\n  grid-column: 1;\n  grid-row: 4;\n}\n\n.opponent-side {\n  grid-column: 3;\n  grid-row: 4;\n}\n\n.player-side,\n.opponent-side {\n  flex-direction: column;\n  gap: 3rem;\n}\n\n/* Styles for Gameboards*/\n.board,\n.left-panel,\n.left-ships,\n.right-ships {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-grid {\n  height: 500px;\n  width: 500px;\n  background: var(--grid-bg);\n  border: var(--border);\n}\n\n.peg-hole {\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  border: 5px solid var(--grid-outline);\n  position: absolute;\n  z-index: 10;\n}\n\n.white-miss {\n  border-color: var(--off-white);\n  background: var(--off-white);\n}\n\n.red-hit {\n  border-color: var(--red);\n  background: var(--red);\n}\n\n/* Styles the ships (left panel) */\n.left-panel {\n  border-right: none;\n  border-radius: 30% 0 0 30%;\n  justify-content: space-evenly;\n}\n\n.left-panel,\n.right-panel {\n  height: 480px;\n  width: 170px;\n  border: var(--border);\n  background: var(--blue);\n}\n\n.left-ships,\n.right-ships {\n  flex-direction: column;\n  height: 100%;\n  width: 35%;\n}\n\n.left-ships > *,\n.right-ships > * {\n  border: 2px solid;\n  margin: 1rem 0;\n}\n\n.ship {\n  cursor: pointer;\n  z-index: 1;\n}\n\n.ship,\n.ship-preview {\n  background: var(--light-gray);\n}\n\n.carrier {\n  height: 223px;\n  width: 45px;\n  border-radius: 5px;\n}\n\n.battleship {\n  height: 178px;\n  width: 45px;\n  border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;\n}\n\n.destroyer,\n.submarine {\n  height: 133px;\n  width: 45px;\n}\n\n.destroyer {\n  border-radius: 50% 50% 25% 25% / 65% 65% 10% 10%;\n}\n\n.submarine {\n  border-radius: 50% 50% 60% 55% / 50% 50% 40% 40%;\n}\n\n.patrol {\n  height: 88px;\n  width: 45px;\n  border-radius: 50% 50% 30% 30% / 70% 70% 20% 20%;\n}\n\n/* Align ships individually based on orientation */\n.horizontal {\n  position: absolute;\n}\n\n.vertical {\n  align-self: flex-start;\n  position: absolute;\n}\n\n/* Styles the pegs (right panel)*/\n.right-panel {\n  border-left: none;\n  border-radius: 0 30% 30% 0;\n}\n\n.red-peg-holder,\n.white-peg-holder {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.red-peg-holder {\n  height: 35%;\n  width: 100%;\n  border-bottom: var(--border);\n  border-radius: 0% 30% 0% 0% / 10% 80% 0% 0%;\n}\n\n.white-peg-holder {\n  height: 65%;\n  width: 100%;\n  border-radius: 0% 0% 30% 0% / 0% 30% 45% 50%;\n}\n\n.red-pegs {\n  height: 100%;\n  width: auto;\n}\n\n.white-pegs {\n  height: 90%;\n  width: auto;\n}\n\nfooter {\n  grid-column: 1 / span 3;\n  grid-row: 5;\n  font-size: 1rem;\n}\n\nfooter > a {\n  padding-right: 10px;\n}\n\n#github-icon {\n  height: 30px;\n  width: 30px;\n  filter: invert(77%) sepia(42%) saturate(538%) hue-rotate(141deg)\n    brightness(93%) contrast(89%);\n}\n\n/* Highlight CPU ships */\n.highlight {\n  background: greenyellow;\n}\n\n.hover {\n  background: var(--dark-gray);\n}\n\n/* Styles DOM-created grid*/\n.row,\n.square {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.row {\n  height: calc(100% / 11);\n  width: 100%;\n}\n\n/* Adds bottom border to all but last row (row 10)*/\n.row:not(:nth-last-child(-n + 1)) {\n  border-bottom: 3px double var(--grid-outline);\n}\n\n.square {\n  height: 100%;\n  width: calc(100% / 11);\n  font-weight: 600;\n  font-size: var(--font-size);\n  color: var(--grid-text);\n  position: relative;\n}\n\n/* Adds right border to all but last col (col "J")  */\n.square:not(:nth-child(11n)) {\n  border-right: 3px double var(--grid-outline);\n}\n',""]);const s=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var g=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},670:e=>{e.exports=function(e,t){for(let n=0;n<e.length;n+=1)if(t[0]===e[n][0]&&t[1]===e[n][1])return!0;return!1}},111:e=>{const t=["A","B","C","D","E","F","G","H","I","J"],n={convertCoordinatesToIndex:function(e){const[n,r]=e;return[n-1,t.indexOf(r)]},convertLetterToNumber:function(e){return t.indexOf(e)+1}};e.exports=n},396:e=>{const t=(()=>{const e=document.getElementById("player-text"),t=document.getElementById("cpu-text");let n=0;function r(e){const t=document.querySelector(".start-game");e.forEach((e=>{"childList"===e.type&&(n+=1)})),5===n&&(t.disabled=!1)}function o(e){const t=document.createElement("div");return t.classList.add("ship-preview",e),t}return{createBoardGrid:function(e){for(let t=0;t<11;t+=1){const n=document.createElement("div");n.classList.add("row"),e.appendChild(n),"ZABCDEFGHIJ".split("").forEach((e=>{const r=document.createElement("div");if(r.classList.add("square"),r.setAttribute("id",`${e}${t}`),t>0&&"Z"!==e?r.setAttribute("id",`${e}${t}`):r.classList.add("legend"),0===t&&"Z"!==e&&(r.textContent=`${e}`),0!==t&&"Z"===e&&(r.textContent=`${t}`),t>0&&"Z"!==e){const n=document.createElement("div");n.classList.add("peg-hole"),n.setAttribute("id",`${e}${t}`),r.appendChild(n)}n.appendChild(r)}))}},playerAttackMessage:function(n,r){if("computer"===r.playerName){const e=`${n[1]}${n[0]}`;t.textContent=e}else e.textContent=n},opponentResponse:function(n,r,o){const a="computer"!==o.playerName?e:t;"none"!==r?n&&r.isSunk()?a.textContent="Hit, sunk!":n&&(a.textContent="Hit!"):a.textContent="Miss"},updatePeg:function(e,t,n){const r=`${e[1]}${e[0]}`,o="computer"!==n.playerName?document.body.querySelector(`#my-board #${r} > .peg-hole`):document.body.querySelector(`#opponent-board #${r} > .peg-hole`);t?o.classList.add("red-hit"):o.classList.add("white-miss")},displayEndGame:function(n){"computer"===n?(e.textContent="Congrats, you win!",t.textContent=":)"):(t.textContent="Congrats, you beat me!",e.textContent=":)")},removeCpuShipBlocks:function(){document.querySelectorAll(".ship-preview").forEach((e=>e.remove()))},addStartGameText:function(){const e=document.getElementById("cpu-text");document.getElementById("info-text").textContent="The first to sink all 5 of their opponent's ships wins. Good luck!",e.textContent="You may go first."},hideTooltipText:function(){document.querySelector(".tooltip-text").style.visibility="hidden"},resetTooltipVisibility:function(){document.querySelector(".tooltip-text").style.visibility=""},helpBoxToggle:function(){const e=document.querySelector(".help-box");document.querySelector(".backdrop").classList.toggle("hidden"),e.classList.toggle("hidden")},getShipsPlacedCounter:function(){return n},startBtnListener:function(){return document.querySelector(".start-game").disabled=!0,new MutationObserver(r)},resetPlayerShipDock:function(){const e=document.querySelector("#my-ships > .left-ships"),t=document.querySelector("#my-ships > .right-ships");document.querySelectorAll("#my-board .ship").forEach((n=>{const r=n.classList[1];n.className=`ship ${r}`,n.removeAttribute("style"),n.draggable=!0,"destroyer"===r||"carrier"===r?e.appendChild(n):"battleship"!==r&&"patrol"!==r&&"submarine"!==r||t.appendChild(n)}))},resetCpuShipDock:function(){const e=document.querySelector("#opponent-ships > .left-ships"),t=document.querySelector("#opponent-ships > .right-ships");e.replaceChildren(),t.replaceChildren();const n=o("carrier"),r=o("battleship"),a=o("destroyer"),i=o("submarine"),s=o("patrol");e.appendChild(a),e.appendChild(n),t.appendChild(r),t.appendChild(s),t.appendChild(i)},resetGameGrids:function(){const e=document.querySelectorAll("#my-board .square:not(.legend)"),t=document.querySelectorAll("#opponent-board .square:not(.legend)");e.forEach((e=>{e.className="square",e.firstChild.className="peg-hole"})),t.forEach((e=>{e.className="square",e.firstChild.className="peg-hole"}))},resetChatBubbles:function(){const e=document.getElementById("player-text"),t=document.getElementById("cpu-text");e.textContent="",t.textContent=""}}})();e.exports=t},712:(e,t,n)=>{const r=n(111),o=(()=>{function e(e){return e.classList.contains("vertical")}function t(e){return e.classList.contains("horizontal")}function n(e){return e.getBoundingClientRect().width}function o(e){return e.getBoundingClientRect().height}function a(e){return Math.round((e+2)/45)}function i(e){e.classList.add("vertical"),e.style.left=""}function s(e,t){e.classList.add("horizontal");const n=22*(a(t)-1);e.style.left=`${n}px`}function c(n,r){return!t(n)&&!e(n)}function l(e,t){const n=e.classList[1];t.classList.add(`my-${n}`),t.classList.add("taken")}function d(e){const t=e.classList[1];document.querySelectorAll(`.square.taken.my-${t}`).forEach((e=>{e.classList.remove("taken"),e.classList.remove(`my-${t}`)}))}function u(e){e.classList.contains("rotated-vertical")&&e.classList.remove("rotated-vertical"),e.classList.contains("rotated-horizontal")&&e.classList.remove("rotated-horizontal")}function p(e,t,n){const r=["A","B","C","D","E","F","G","H","I","J"],o=a(t),[i,s]=[e.charAt(0),Number(e.slice(1))],c=[];for(let e=0;e<o;e+=1){let t;"vertical"===n?t=document.getElementById(`${i}${s+e}`):"horizontal"===n&&(t=document.getElementById(`${r[r.indexOf(i)+e]}${s}`)),c.push(t)}return c}function h(e,t){const n=t.classList[1];return e.some((e=>e.classList.contains("taken")&&e.classList[1]!==`my-${n}`))}function g(e,t,n,o,i){let s;return"vertical"===i?s=function(e,t){return e.slice(1)-1+a(t)<=10}(e,t)&&!h(n,o):"horizontal"===i&&(s=function(e,t){const n=e.charAt(0);return Number(r.convertLetterToNumber(n))-1+a(t)<=10}(e,t)&&!h(n,o)),s}function m(e){return!e.classList.contains("rotated-vertical")&&!e.classList.contains("rotated-horizontal")}return{dragStart:function(e){e.dataTransfer.clearData(),e.dataTransfer.setData("text",e.target.classList[1])},dragOver:function(e){e.preventDefault()},dragEnter:function(e){e.preventDefault(),e.target.classList.contains("square")&&e.target.classList.add("hover")},dragLeave:function(e){e.target.classList.contains("square")&&e.target.classList.remove("hover")},dragDrop:function(r){const a=r.dataTransfer.getData("text"),h=document.querySelector(`.ship.${a}`),f=o(h),b=n(h);if(r.target.classList.contains("square")){let n,o;e(h)||h.classList.contains("rotated-vertical")||c(h)&&m(h)?(n=p(r.target.id,f,"vertical"),o=g(r.target.id,f,n,h,"vertical")):(t(h)||h.classList.contains("rotated-horizontal"))&&(n=p(r.target.id,b,"horizontal"),o=g(r.target.id,b,n,h,"horizontal")),m(h)&&c(h)&&o||h.classList.contains("rotated-vertical")&&c(h)&&o?(i(h),r.target.append(h),n.forEach((e=>l(h,e))),u(h)):h.classList.contains("rotated-horizontal")&&c(h)&&o&&(s(h,b),r.target.append(h),n.forEach((e=>l(h,e))),u(h)),(e(h)||t(h))&&h.parentNode.classList.contains("square")&&o&&(d(h),r.target.append(h),n.forEach((e=>l(h,e))),u(h))}r.target.classList.remove("hover")},hasVerticalClass:e,hasHorizontalClass:t,getShipHeight:o,getShipWidth:n,getAdjacentSquares:p,isValidDrop:g,addHorizontalStyle:s,addVerticalStyle:i,markOldSquaresAvailable:d,markSquareTaken:l,shipNeverRotatedBefore:m,disableDragDrop:function(e){e.forEach((e=>{e.draggable=!1}))}}})();e.exports=o},907:(e,t,n)=>{const r=n(111),o=n(729),a=n(396),i=n(670),s=(()=>{const e=document.getElementById("cpu-text"),t=document.getElementById("player-text");function n(e,t){const n=["A","B","C","D","E","F","G","H","I","J"];return n[n.indexOf(e)+t]}function s(e){const t=e.split("");return[t.splice(1).join(""),t[0]]}return{placeComputerShips:function(e,t){const r=[];return t.forEach((t=>{const[a,i]=o.getRandomPlacement(r,t),s=Math.random()<.5;for(let o=0;o<t.length;o+=1)s?(e.placeShip(t,[a+o,i]),r.push([a+o,i]),document.body.querySelector(`#opponent-board #${i}${a+o}`).classList.add("cpu-ship")):(e.placeShip(t,[a,n(i,o)]),r.push([a,n(i,o)]),document.body.querySelector(`#opponent-board #${n(i,o)}${a}`).classList.add("cpu-ship"))})),r},placePlayerShips:function(e,t,n,r,o,a){document.querySelectorAll("#my-board .square.taken").forEach((i=>{const s=i.classList[1].slice(3),c=i.id,l=[c[1],c[0]];"patrol"===s?e.placeShip(t,l):"destroyer"===s?e.placeShip(n,l):"submarine"===s?e.placeShip(r,l):"battleship"===s?e.placeShip(o,l):"carrier"===s&&e.placeShip(a,l)}))},takeTurnsAttacking:function(n,o,c,l,d,u){document.body.querySelectorAll("#opponent-board .square").forEach((p=>{p.addEventListener("click",(p=>{const h=s(p.target.id);!n.checkTurn()||i(l.successfulHits,h)||i(l.missedAttacks,h)||l.allShipsSunk(d)||o.allShipsSunk(u)||(function(e,n,o,i,c){const l=s(e.target.id),d=r.convertCoordinatesToIndex(l),u=i.board[d[0]][d[1]];n.makeAttack(o,i,l),a.playerAttackMessage(e.target.id,n),setTimeout((()=>{a.opponentResponse(i.wasHit,u.ship,o)}),1e3),setTimeout((()=>{a.updatePeg(i.lastAttack,i.wasHit,o),t.textContent="Your turn.",n.endTurn(),i.allShipsSunk(c)?(a.displayEndGame("player"),document.querySelectorAll(".cpu-ship").forEach((e=>{e.classList.add("highlight")}))):o.startTurn()}),2e3)}(p,n,c,l,d),setTimeout((()=>{c.checkTurn()&&function(t,n,o,i){t.makeAttack(n,o),a.playerAttackMessage(o.lastAttack,t);const s=r.convertCoordinatesToIndex(o.lastAttack),c=o.board[s[0]][s[1]];setTimeout((()=>{a.opponentResponse(o.wasHit,c.ship,n)}),1e3),setTimeout((()=>{a.updatePeg(o.lastAttack,o.wasHit,n),e.textContent="Your turn.",t.endTurn(),o.allShipsSunk(i)?(a.displayEndGame("computer"),document.querySelectorAll(".cpu-ship").forEach((e=>{e.classList.add("highlight")}))):n.startTurn()}),2e3)}(c,n,o,u)}),4e3))}))}))}}})();e.exports=s},974:(e,t,n)=>{const r=n(670),o=n(111);e.exports=()=>{const e=[];for(let t=1;t<11;t+=1){const n=[];"ABCDEFGHIJ".split("").forEach((e=>{n.push({coordinates:[t,e],ship:"none"})})),e.push(n)}return{board:e,lastAttack:"none",wasHit:!1,successfulHits:[],missedAttacks:[],placeShip(t,n){const[r,a]=o.convertCoordinatesToIndex(n);e[r][a].ship=t},receiveAttack(t){const[n,a]=o.convertCoordinatesToIndex(t);"none"!==e[n][a].ship?(e[n][a].ship.hit(),this.successfulHits.push(t),this.lastAttack=t,this.wasHit=!0):"none"===e[n][a].ship&&(r(this.missedAttacks,t)||(this.missedAttacks.push(t),this.lastAttack=t,this.wasHit=!1))},allShipsSunk:e=>e.every((e=>e.isSunk()))}}},729:(e,t,n)=>{const r=n(670),o=(()=>{const e=["A","B","C","D","E","F","G","H","I","J"];return{getRandomCoordinates:function(){return[Math.floor(10*Math.random())+1,e[Math.floor(10*Math.random())]]},getRandomPlacement:function t(n,o){const a=Math.floor(10*Math.random())+1,i=Math.floor(10*Math.random());return a+o.length>10||i+o.length>10||r(n,[a,e[i]])||function(t,n,o,a){const i=[];let s=!1;for(let t=0;t<n.length;t+=1)i.push([o+t,e[a]]),i.push([o,e[a+t]]);return i.forEach((e=>{r(t,e)&&(s=!0)})),s}(n,o,a,i)?t(n,o):[a,e[i]]},getUnusedCoordinates:function t(n,o){const a=Math.floor(10*Math.random())+1,i=e[Math.floor(10*Math.random())];return r(n,[a,i])||r(o,[a,i])?t(n,o):[a,i]}}})();e.exports=o},753:(e,t,n)=>{const r=n(729);e.exports=e=>({playerName:e,myTurn:!1,startTurn(){this.checkTurn()||(this.myTurn=!0)},endTurn(){this.checkTurn()&&(this.myTurn=!1)},checkTurn(){return this.myTurn},makeAttack(e,t,n=[]){if(this.checkTurn())if("computer"!==e.playerName&&0===n.length){const e=r.getUnusedCoordinates(t.successfulHits,t.missedAttacks);t.receiveAttack(e)}else t.receiveAttack(n)}})},518:(e,t,n)=>{const r=n(712),o=(()=>{let e,t,n=0;function o(e){return!r.hasVerticalClass(e)&&!r.hasHorizontalClass(e)}function a(e){return e.parentNode.classList.contains("square")}function i(e){return t===e}function s(o){n=0,n=0===n?90:0;const a=r.getShipHeight(o),i=o.parentNode.id,s=r.getAdjacentSquares(i,a,"horizontal");r.isValidDrop(o.id,a,s,o,"horizontal")&&(o.style.transform=`rotate(${n}deg)`,o.classList.remove("vertical"),r.addHorizontalStyle(o,a),r.markOldSquaresAvailable(o),s.forEach((e=>r.markSquareTaken(o,e))),e="grid",t=o)}function c(o){n=90,n=90===n?0:90;const a=r.getShipWidth(o),i=o.parentNode.id,s=r.getAdjacentSquares(i,a,"vertical");r.isValidDrop(o.id,a,s,o,"vertical")&&(o.style.transform=`rotate(${n}deg)`,o.classList.remove("horizontal"),r.addVerticalStyle(o),r.markOldSquaresAvailable(o),s.forEach((e=>r.markSquareTaken(o,e))),e="grid",t=o)}function l(r){n=90,n=90===n?0:90,r.style.transform=`rotate(${n}deg)`,r.classList.add("rotated-vertical"),e="my-ships",t=r}function d(r){n=0,n=0===n?90:0,r.style.transform=`rotate(${n}deg)`,r.classList.add("rotated-horizontal"),e="my-ships",t=r}function u(e){e.stopPropagation(),e.preventDefault()}return{rotateShip:function(n){const u=n.target,p="my-ships"===u.parentNode.parentNode.id?"my-ships":"grid";!a(u)||e||t?!o(u)||e||t?"grid"===e&&"my-ships"===p?d(u):"my-ships"===e&&"grid"===p?r.hasVerticalClass(u)?s(u):r.hasHorizontalClass(u)&&c(u):e===p&&(o(u)&&i(u)?u.classList.contains("rotated-vertical")?(d(u),u.classList.remove("rotated-vertical")):u.classList.contains("rotated-horizontal")&&(l(u),u.classList.remove("rotated-horizontal")):a(u)&&i(u)?r.hasVerticalClass(u)?s(u):r.hasHorizontalClass(u)&&c(u):o(u)&&!i(u)?r.shipNeverRotatedBefore(u)?d(u):u.classList.contains("rotated-vertical")?(d(u),u.classList.remove("rotated-vertical")):u.classList.contains("rotated-horizontal")&&(l(u),u.classList.remove("rotated-horizontal")):a(u)&&!i(u)&&(r.hasVerticalClass(u)?s(u):r.hasHorizontalClass(u)&&c(u))):d(u):s(u)},disableRotateShip:function(){document.querySelectorAll("#my-board .square").forEach((e=>{e.addEventListener("click",u,!0)}))},enableRotateShip:function(){document.querySelectorAll("#my-board .square").forEach((e=>{e.removeEventListener("click",u,!1)}))}}})();e.exports=o},880:e=>{e.exports=e=>({length:e,numHits:0,hit(){this.numHits+=1},isSunk(){return this.numHits===this.length}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),c=n.n(s),l=n(216),d=n.n(l),u=n(589),p=n.n(u),h=n(890),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),t()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const m=n(880),f=n(974),b=n(753),y=n(396),v=n(907),x=n(712),S=n(518);(()=>{const e=document.getElementById("info-text");setTimeout((()=>{e.innerHTML="Drag and drop your ships to place them on the left board."}),2e3),setTimeout((()=>{e.innerHTML="Click to rotate any ship horizontally or vertically."}),6e3),setTimeout((()=>{e.innerHTML="When you're finished, click the 'Start' button to begin the game."}),9e3);const t=b("player"),n=b("computer");let r=f(),o=f();const a=document.getElementById("my-board"),i=document.getElementById("opponent-board");y.createBoardGrid(a),y.createBoardGrid(i);let s=m(5),c=m(4),l=m(3),d=m(3),u=m(2),p=[s,c,l,d,u],h=m(5),g=m(4),k=m(3),w=m(3),L=m(2),C=[h,g,k,w,L];const E=document.querySelectorAll(".ship"),T=document.body.querySelectorAll("#my-board .square:not(.legend)");E.forEach((e=>{e.addEventListener("click",(e=>S.rotateShip(e))),e.addEventListener("dragstart",(e=>x.dragStart(e))),e.addEventListener("dragend",null)})),T.forEach((e=>{e.addEventListener("dragover",(e=>x.dragOver(e))),e.addEventListener("dragenter",(e=>x.dragEnter(e))),e.addEventListener("dragleave",(e=>x.dragLeave(e))),e.addEventListener("drop",(e=>x.dragDrop(e)))}));const A=document.querySelector(".help"),q=document.getElementById("close-help");A.addEventListener("click",(()=>{y.helpBoxToggle()})),q.addEventListener("click",(()=>{y.helpBoxToggle()}));const z=document.querySelector(".start-game"),B=document.getElementById("my-ships"),H=y.startBtnListener();H.observe(B,{childList:!0,subtree:!0}),z.addEventListener("click",(()=>{const e=y.getShipsPlacedCounter(),t=document.querySelectorAll(".ship");5===e&&(z.disabled=!0,H.disconnect(),y.hideTooltipText(),y.addStartGameText(),y.removeCpuShipBlocks(),t.forEach((e=>{e.style.cursor="default"})),v.placeComputerShips(o,C),v.placePlayerShips(r,u,l,d,c,d,s),S.disableRotateShip(),x.disableDragDrop(E),z.classList.add("hidden"))})),document.querySelector(".reset-game").addEventListener("click",(()=>{y.resetChatBubbles(),z.classList.remove("hidden"),y.resetTooltipVisibility(),y.resetPlayerShipDock(),y.resetCpuShipDock(),S.enableRotateShip(),r=f(),o=f(),y.resetGameGrids(),s=m(5),c=m(4),l=m(3),d=m(3),u=m(2),p=[s,c,l,d,u],h=m(5),g=m(4),k=m(3),w=m(3),L=m(2),C=[h,g,k,w,L]})),t.startTurn(),v.takeTurnsAttacking(t,r,n,o,C,p)})()})()})();