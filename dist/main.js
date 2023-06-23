(()=>{var t={890:(t,n,e)=>{"use strict";e.d(n,{Z:()=>s});var r=e(81),o=e.n(r),a=e(645),i=e.n(a)()(o());i.push([t.id,':root {\n    --grid-bg: rgb(32, 119, 160);\n    --grid-outline: rgb(34, 190, 211);\n    --grid-text: rgb(98, 211, 226);\n    --blue: rgb(57, 101, 133);\n    --blue-border: rgba(34, 73, 104, 0.85);\n    --light-gray: rgb(211, 211, 211);\n    --dark-gray: rgb(90, 109, 119);\n    --off-white: rgb(243, 244, 245);\n    --red: rgb(185, 16, 16);\n    --border: 3px solid var(--blue-border);\n    --font-size: 1.5rem;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    color: var(--grid-text);\n}\n\nbody {\n    background:rgb(5, 30, 49);\n}\n\n.container {\n    height: 100vh;\n    width: 100vw;\n    margin: 0 auto;\n}\n\n.content {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    justify-content: center;\n    grid-template-columns: 1fr 0.5fr 1fr;\n    grid-template-rows: repeat(3, 0.8fr) 5fr;\n}\n\nh1,\n.info-container,\n.player-side,\n.opponent-side,\n.player-message-container,\n.opponent-message-container,\n.icon-container,\n.chat-bubble,\n.button-container {\n    display: flex;\n    align-items: center;\n}\n\nh1,\n.info-container,\n.player-side,\n.opponent-side,\n.button-container {\n    justify-content: center;\n}\n\nh1 {\n    text-align: center;\n    grid-column: 1 / span 3;\n    grid-row: 1;\n    margin-top: 2rem;\n}\n\n.info-container {\n    grid-column: 1 / span 3;\n    grid-row: 2;\n    font-size: var(--font-size);\n    gap: 1rem;\n    flex-direction: column;\n}\n\n/* Styles message containers and buttons */\n.message-container {\n    height: 100%;\n    width: 100%;\n    padding: 0 1rem;\n    grid-column: 1 / span 3;\n    grid-row: 3;\n    display: grid;\n    grid-template-columns: 1fr 0.5fr 1fr;\n}\n\n.player-message-container {\n    width: 100%;\n    grid-column: 1;\n    justify-content: flex-start;\n    margin-left: 5rem;\n}\n\n.opponent-message-container {\n    width: 100%;\n    grid-column: 3;\n    flex-direction: row-reverse;\n    justify-content: flex-start;\n    margin-left: -5rem;\n}\n\n.icon-container {\n    flex-direction: column;\n}\n\n.user-icon {\n    height: 75px;\n    width: 75px;\n    filter: invert(77%) sepia(42%) saturate(538%) hue-rotate(141deg) brightness(93%) contrast(89%);\n}\n\n.chat-bubble {\n    height: 5rem;\n    width: 60%;\n    border-radius: 10px;\n    background: var(--blue);\n}\n\n.player-message-container .chat-bubble {\n    margin-left: 4rem;\n    position: relative;\n}\n\n.player-message-container .chat-bubble::before {\n    content: "";\n    position: absolute;\n    height: 0;\n    width: 0;\n    border-top: 15px solid transparent;\n    border-right: 30px solid var(--blue);\n    border-bottom: 15px solid transparent;\n    top: 20px;\n    left: -30px;\n}\n\n.opponent-message-container .chat-bubble {\n    margin-right: 5rem;\n    position: relative;\n}\n\n.opponent-message-container .chat-bubble::after {\n    content: "";\n    position: absolute;\n    height: 0;\n    width: 0;\n    border-top: 15px solid transparent;\n    border-left: 30px solid var(--blue);\n    border-bottom: 15px solid transparent;\n    top: 20px;\n    right: -30px;\n\n}\n\n#player-text,\n#cpu-text {\n    margin-left: 2rem;\n    font-size: var(--font-size);\n    word-wrap: break-word;\n}\n\n/* Styles buttons */\n.button-container {\n    height: 100%;\n    width: 100%;\n    grid-column: 2;\n    font-size: var(--font-size);\n    gap: 2rem;\n}\n\n.start-game {\n    height: 40px;\n    width: 100px;\n    border: none;\n    border-radius: 3px;\n    font-size: 1rem;\n    position: relative;\n}\n\n.start-game:disabled {\n    background: var(--dark-gray);\n    color: rgb(0, 0, 0);\n    font-style: italic;\n    text-transform: lowercase;\n}\n\n.start-game:not(:disabled) {\n    background: var(--blue);\n    color: var(--off-white);\n    font-weight: 600;\n}\n\n.help {\n    height: 37px;\n    width: 37px;\n    background: var(--blue);\n    border: none;\n    border-radius: 50%;\n    font-size: 1.2rem;\n    font-weight: 600;\n    color: var(--off-white);\n}\n\n.start-game:not(:disabled):hover,\n.help:hover {\n    background: var(--blue-border);\n}\n\n/* Styles tooltip for start button */\n.start-game .tooltip-text {\n    visibility: hidden;\n    width: 165px;\n    color: rgb(255, 86, 74);\n    position: absolute;\n    top: 53px;\n    left: -32px;\n    font-style: normal;\n    text-transform: none;\n    font-size: 0.87rem;\n}\n\n.start-game:disabled:hover .tooltip-text {\n    visibility: visible;\n}\n\n.player-side {\n    grid-column: 1;\n    grid-row: 4;\n}\n\n.opponent-side {\n    grid-column: 3;\n    grid-row: 4;\n}\n\n.player-side,\n.opponent-side {\n    flex-direction: column;\n    gap: 3rem;\n}\n\n/* Styles for Gameboards*/\n.board,\n.left-panel,\n.left-ships,\n.right-ships {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.main-grid {\n    height: 500px;\n    width: 500px;\n    background: var(--grid-bg);\n    border: var(--border);\n}\n\n.peg-hole {\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    border: 5px solid var(--grid-outline);\n    position: absolute;\n    z-index: 10;\n}\n\n.white-miss {\n    border-color: var(--off-white);\n    background: var(--off-white);\n}\n\n.red-hit {\n    border-color: var(--red);\n    background: var(--red);\n}\n\n/* Styles the ships (left panel) */\n.left-panel {\n    border-right: none;\n    border-radius: 30% 0 0 30%;\n    justify-content: space-evenly;\n}\n\n.left-panel,\n.right-panel {\n    height: 480px;\n    width: 170px;\n    border: var(--border);\n    background: var(--blue);\n}\n\n.left-ships,\n.right-ships {\n    flex-direction: column;\n    height: 100%;\n    width: 35%;\n}\n\n.left-ships > *,\n.right-ships > * {\n    border: 2px solid;\n    margin: 1rem 0;\n}\n\n.ship {\n    cursor: pointer;\n    z-index: 1;\n}\n\n.ship,\n.ship-preview {\n    background: var(--light-gray);\n}\n\n.carrier {\n    height: 223px;\n    width: 45px;\n    border-radius: 5px;\n}\n\n.battleship {\n    height: 178px;\n    width: 45px;\n    border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;\n}\n\n.destroyer,\n.submarine {\n    height: 133px;\n    width: 45px;\n}\n\n.destroyer {\n    border-radius: 50% 50% 25% 25% / 65% 65% 10% 10% \n}\n\n.submarine {\n    border-radius: 50% 50% 60% 55% / 50% 50% 40% 40%;\n}\n\n.patrol {\n    height: 88px;\n    width: 45px;\n    border-radius: 50% 50% 30% 30% / 70% 70% 20% 20% \n}\n\n/* Align ships individually based on orientation */\n.horizontal {\n    position: absolute;\n}\n\n.vertical {\n    align-self: flex-start;\n    position: absolute;\n}\n\n/* Styles the pegs (right panel)*/\n.right-panel {\n    border-left: none;\n    border-radius: 0 30% 30% 0;\n}\n\n.red-peg-holder,\n.white-peg-holder {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.red-peg-holder {\n    height: 35%;\n    width: 100%;\n    border-bottom: var(--border);\n    border-radius: 0% 30% 0% 0% / 10% 80% 0% 0%;\n}\n\n.white-peg-holder {\n    height: 65%;\n    width: 100%;\n    border-radius: 0% 0% 30% 0% / 0% 30% 45% 50%;\n}\n\n.red-pegs {\n    height: 100%;\n    width: auto;\n}\n\n.white-pegs {\n    height: 90%;\n    width: auto;\n}\n\n/* Highlight CPU ships */\n.highlight {\n    background: greenyellow;\n}\n\n.hover {\n    background: var(--dark-gray);\n}\n\n/* Styles DOM-created grid*/\n.row,\n.square {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.row {\n    height: calc(100% / 11);\n    width: 100%;\n}\n\n/* Adds bottom border to all but last row (row 10)*/\n.row:not(:nth-last-child(-n+1)) {\n    border-bottom: 3px double var(--grid-outline);\n}\n\n.square {\n    height: 100%;\n    width: calc(100% / 11);\n    font-weight: 600;\n    font-size: var(--font-size);\n    color: var(--grid-text);\n    position: relative;\n}\n\n/* Adds right border to all but last col (col "J")  */\n.square:not(:nth-child(11n)) {\n    border-right: 3px double var(--grid-outline);\n}',""]);const s=i},645:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=e(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var g=o(h,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=e(a[i]);n[s].references--}for(var c=r(t,o),l=0;l<a.length;l++){var d=e(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:t=>{"use strict";var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{"use strict";t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{"use strict";t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{"use strict";t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},670:t=>{t.exports=function(t,n){for(let e=0;e<t.length;e+=1)if(n[0]===t[e][0]&&n[1]===t[e][1])return!0;return!1}},111:t=>{const n=["A","B","C","D","E","F","G","H","I","J"],e={convertCoordinatesToIndex:function(t){const[e,r]=t;return[e-1,n.indexOf(r)]},convertLetterToNumber:function(t){return n.indexOf(t)+1}};t.exports=e},396:t=>{const n=(()=>{const t=document.getElementById("player-text"),n=document.getElementById("cpu-text");return{createBoardGrid:function(t){for(let n=0;n<11;n+=1){const e=document.createElement("div");e.classList.add("row"),t.appendChild(e),"ZABCDEFGHIJ".split("").forEach((t=>{const r=document.createElement("div");if(r.classList.add("square"),r.setAttribute("id",`${t}${n}`),n>0&&"Z"!==t?r.setAttribute("id",`${t}${n}`):r.classList.add("legend"),0===n&&"Z"!==t&&(r.textContent=`${t}`),0!==n&&"Z"===t&&(r.textContent=`${n}`),n>0&&"Z"!==t){const e=document.createElement("div");e.classList.add("peg-hole"),e.setAttribute("id",`${t}${n}`),r.appendChild(e)}e.appendChild(r)}))}},playerAttackMessage:function(e,r){if("computer"===r.playerName){const t=`${e[1]}${e[0]}`;n.textContent=t}else t.textContent=e},opponentResponse:function(e,r,o){const a="computer"!==o.playerName?t:n;"none"!==r?e&&r.isSunk()?a.textContent="Hit, sunk!":e&&(a.textContent="Hit!"):a.textContent="Miss"},updatePeg:function(t,n,e){const r=`${t[1]}${t[0]}`,o="computer"!==e.playerName?document.body.querySelector(`#my-board #${r} > .peg-hole`):document.body.querySelector(`#opponent-board #${r} > .peg-hole`);n?o.classList.add("red-hit"):o.classList.add("white-miss")},displayEndGame:function(e){"computer"===e?(t.textContent="Congrats, you win!",n.textContent=":)"):(n.textContent="Congrats, you beat me!",t.textContent=":)")}}})();t.exports=n},712:(t,n,e)=>{const r=e(111),o=(()=>{function t(t){return t.classList.contains("vertical")}function n(t){return t.classList.contains("horizontal")}function e(t){return t.getBoundingClientRect().width}function o(t){return t.getBoundingClientRect().height}function a(t){return Math.round((t+2)/45)}function i(t){t.classList.add("vertical"),t.style.left=""}function s(t,n){t.classList.add("horizontal");const e=22*(a(n)-1);t.style.left=`${e}px`}function c(e,r){return!n(e)&&!t(e)}function l(t,n){const e=t.classList[1];n.classList.add(`my-${e}`),n.classList.add("taken")}function d(t){const n=t.classList[1];document.querySelectorAll(`.square.taken.my-${n}`).forEach((t=>{t.classList.remove("taken"),t.classList.remove(`my-${n}`)}))}function u(t){t.classList.contains("rotated-vertical")&&t.classList.remove("rotated-vertical"),t.classList.contains("rotated-horizontal")&&t.classList.remove("rotated-horizontal")}function p(t,n,e){const r=["A","B","C","D","E","F","G","H","I","J"],o=a(n),[i,s]=[t.charAt(0),Number(t.slice(1))],c=[];for(let t=0;t<o;t+=1){let n;"vertical"===e?n=document.getElementById(`${i}${s+t}`):"horizontal"===e&&(n=document.getElementById(`${r[r.indexOf(i)+t]}${s}`)),c.push(n)}return c}function h(t,n){const e=n.classList[1];return t.some((t=>t.classList.contains("taken")&&t.classList[1]!==`my-${e}`))}function g(t,n,e,o,i){let s;return"vertical"===i?s=function(t,n){return t.slice(1)-1+a(n)<=10}(t,n)&&!h(e,o):"horizontal"===i&&(s=function(t,n){const e=t.charAt(0);return Number(r.convertLetterToNumber(e))-1+a(n)<=10}(t,n)&&!h(e,o)),s}function f(t){return!t.classList.contains("rotated-vertical")&&!t.classList.contains("rotated-horizontal")}return{dragStart:function(t){t.dataTransfer.clearData(),t.dataTransfer.setData("text",t.target.classList[1])},dragOver:function(t){t.preventDefault()},dragEnter:function(t){t.preventDefault(),t.target.classList.contains("square")&&t.target.classList.add("hover")},dragLeave:function(t){t.target.classList.contains("square")&&t.target.classList.remove("hover")},dragDrop:function(r){const a=r.dataTransfer.getData("text"),h=document.querySelector(`.ship.${a}`),m=o(h),b=e(h);if(r.target.classList.contains("square")){let e,o;t(h)||h.classList.contains("rotated-vertical")||c(h)&&f(h)?(e=p(r.target.id,m,"vertical"),o=g(r.target.id,m,e,h,"vertical")):(n(h)||h.classList.contains("rotated-horizontal"))&&(e=p(r.target.id,b,"horizontal"),o=g(r.target.id,b,e,h,"horizontal")),f(h)&&c(h)&&o||h.classList.contains("rotated-vertical")&&c(h)&&o?(i(h),r.target.append(h),e.forEach((t=>l(h,t))),u(h)):h.classList.contains("rotated-horizontal")&&c(h)&&o&&(s(h,b),r.target.append(h),e.forEach((t=>l(h,t))),u(h)),(t(h)||n(h))&&h.parentNode.classList.contains("square")&&o&&(d(h),r.target.append(h),e.forEach((t=>l(h,t))),u(h))}r.target.classList.remove("hover")},hasVerticalClass:t,hasHorizontalClass:n,getShipHeight:o,getShipWidth:e,getAdjacentSquares:p,isValidDrop:g,addHorizontalStyle:s,addVerticalStyle:i,markOldSquaresAvailable:d,markSquareTaken:l,shipNeverRotatedBefore:f,disableDragDrop:function(t){t.forEach((t=>{t.draggable=!1}))}}})();t.exports=o},907:(t,n,e)=>{const r=e(111),o=e(729),a=e(396),i=e(670),s=(()=>{const t=document.getElementById("cpu-text"),n=document.getElementById("player-text");function e(t,n){const e=["A","B","C","D","E","F","G","H","I","J"];return e[e.indexOf(t)+n]}function s(t){const n=t.split("");return[n.splice(1).join(""),n[0]]}return{placeComputerShips:function(t,n){const r=[];return n.forEach((n=>{const[a,i]=o.getRandomPlacement(r,n),s=Math.random()<.5;for(let o=0;o<n.length;o+=1)s?(t.placeShip(n,[a+o,i]),r.push([a+o,i]),document.body.querySelector(`#opponent-board #${i}${a+o}`).classList.add("cpu-ship")):(t.placeShip(n,[a,e(i,o)]),r.push([a,e(i,o)]),document.body.querySelector(`#opponent-board #${e(i,o)}${a}`).classList.add("cpu-ship"))})),r},takeTurnsAttacking:function(e,o,c,l,d,u){document.body.querySelectorAll("#opponent-board .square").forEach((p=>{p.addEventListener("click",(p=>{const h=s(p.target.id);!e.checkTurn()||i(l.successfulHits,h)||i(l.missedAttacks,h)||l.allShipsSunk(d)||o.allShipsSunk(u)||(function(t,e,o,i,c){const l=s(t.target.id),d=r.convertCoordinatesToIndex(l),u=i.board[d[0]][d[1]];e.makeAttack(o,i,l),a.playerAttackMessage(t.target.id,e),setTimeout((()=>{a.opponentResponse(i.wasHit,u.ship,o)}),1e3),setTimeout((()=>{a.updatePeg(i.lastAttack,i.wasHit,o),n.textContent="Your turn.",e.endTurn(),i.allShipsSunk(c)?(a.displayEndGame("player"),document.querySelectorAll(".cpu-ship").forEach((t=>{t.classList.add("highlight")}))):o.startTurn()}),2e3)}(p,e,c,l,d),setTimeout((()=>{c.checkTurn()&&function(n,e,o,i){n.makeAttack(e,o),a.playerAttackMessage(o.lastAttack,n);const s=r.convertCoordinatesToIndex(o.lastAttack),c=o.board[s[0]][s[1]];setTimeout((()=>{a.opponentResponse(o.wasHit,c.ship,e)}),1e3),setTimeout((()=>{a.updatePeg(o.lastAttack,o.wasHit,e),t.textContent="Your turn.",n.endTurn(),o.allShipsSunk(i)?(a.displayEndGame("computer"),document.querySelectorAll(".cpu-ship").forEach((t=>{t.classList.add("highlight")}))):e.startTurn()}),2e3)}(c,e,o,u)}),4e3))}))}))}}})();t.exports=s},974:(t,n,e)=>{const r=e(670),o=e(111);t.exports=()=>{const t=[];for(let n=1;n<11;n+=1){const e=[];"ABCDEFGHIJ".split("").forEach((t=>{e.push({coordinates:[n,t],ship:"none"})})),t.push(e)}return{board:t,lastAttack:"none",wasHit:!1,successfulHits:[],missedAttacks:[],placeShip(n,e){const[r,a]=o.convertCoordinatesToIndex(e);t[r][a].ship=n},receiveAttack(n){const[e,a]=o.convertCoordinatesToIndex(n);"none"!==t[e][a].ship?(t[e][a].ship.hit(),this.successfulHits.push(n),this.lastAttack=n,this.wasHit=!0):"none"===t[e][a].ship&&(r(this.missedAttacks,n)||(this.missedAttacks.push(n),this.lastAttack=n,this.wasHit=!1))},allShipsSunk:t=>t.every((t=>t.isSunk()))}}},729:(t,n,e)=>{const r=e(670),o=(()=>{const t=["A","B","C","D","E","F","G","H","I","J"];return{getRandomCoordinates:function(){return[Math.floor(10*Math.random())+1,t[Math.floor(10*Math.random())]]},getRandomPlacement:function n(e,o){const a=Math.floor(10*Math.random())+1,i=Math.floor(10*Math.random());return a+o.length>10||i+o.length>10||r(e,[a,t[i]])||function(n,e,o,a){const i=[];let s=!1;for(let n=0;n<e.length;n+=1)i.push([o+n,t[a]]),i.push([o,t[a+n]]);return i.forEach((t=>{r(n,t)&&(s=!0)})),s}(e,o,a,i)?n(e,o):[a,t[i]]},getUnusedCoordinates:function n(e,o){const a=Math.floor(10*Math.random())+1,i=t[Math.floor(10*Math.random())];return r(e,[a,i])||r(o,[a,i])?n(e,o):[a,i]}}})();t.exports=o},753:(t,n,e)=>{const r=e(729);t.exports=t=>({playerName:t,myTurn:!1,startTurn(){this.checkTurn()||(this.myTurn=!0)},endTurn(){this.checkTurn()&&(this.myTurn=!1)},checkTurn(){return this.myTurn},makeAttack(t,n,e=[]){if(this.checkTurn())if("computer"!==t.playerName&&0===e.length){const t=r.getUnusedCoordinates(n.successfulHits,n.missedAttacks);n.receiveAttack(t)}else n.receiveAttack(e)}})},518:(t,n,e)=>{const r=e(712),o=(()=>{let t,n,e=0;function o(t){return!r.hasVerticalClass(t)&&!r.hasHorizontalClass(t)}function a(t){return t.parentNode.classList.contains("square")}function i(t){return n===t}function s(o){e=0,e=0===e?90:0;const a=r.getShipHeight(o),i=o.parentNode.id,s=r.getAdjacentSquares(i,a,"horizontal");r.isValidDrop(o.id,a,s,o,"horizontal")&&(o.style.transform=`rotate(${e}deg)`,o.classList.remove("vertical"),r.addHorizontalStyle(o,a),r.markOldSquaresAvailable(o),s.forEach((t=>r.markSquareTaken(o,t))),t="grid",n=o)}function c(o){e=90,e=90===e?0:90;const a=r.getShipWidth(o),i=o.parentNode.id,s=r.getAdjacentSquares(i,a,"vertical");r.isValidDrop(o.id,a,s,o,"vertical")&&(o.style.transform=`rotate(${e}deg)`,o.classList.remove("horizontal"),r.addVerticalStyle(o),r.markOldSquaresAvailable(o),s.forEach((t=>r.markSquareTaken(o,t))),t="grid",n=o)}function l(r){e=90,e=90===e?0:90,r.style.transform=`rotate(${e}deg)`,r.classList.add("rotated-vertical"),t="my-ships",n=r}function d(r){e=0,e=0===e?90:0,r.style.transform=`rotate(${e}deg)`,r.classList.add("rotated-horizontal"),t="my-ships",n=r}function u(t){t.stopPropagation(),t.preventDefault()}return{rotateShip:function(e){const u=e.target,p="my-ships"===u.parentNode.parentNode.id?"my-ships":"grid";!a(u)||t||n?!o(u)||t||n?"grid"===t&&"my-ships"===p?d(u):"my-ships"===t&&"grid"===p?r.hasVerticalClass(u)?s(u):r.hasHorizontalClass(u)&&c(u):t===p&&(o(u)&&i(u)?u.classList.contains("rotated-vertical")?(d(u),u.classList.remove("rotated-vertical")):u.classList.contains("rotated-horizontal")&&(l(u),u.classList.remove("rotated-horizontal")):a(u)&&i(u)?r.hasVerticalClass(u)?s(u):r.hasHorizontalClass(u)&&c(u):o(u)&&!i(u)?r.shipNeverRotatedBefore(u)?d(u):u.classList.contains("rotated-vertical")?(d(u),u.classList.remove("rotated-vertical")):u.classList.contains("rotated-horizontal")&&(l(u),u.classList.remove("rotated-horizontal")):a(u)&&!i(u)&&(r.hasVerticalClass(u)?s(u):r.hasHorizontalClass(u)&&c(u))):d(u):s(u)},disableRotateShip:function(){document.querySelectorAll("#my-board .square").forEach((t=>{t.addEventListener("click",u,!0)}))}}})();t.exports=o},880:t=>{t.exports=t=>({length:t,numHits:0,hit(){this.numHits+=1},isSunk(){return this.numHits===this.length}})}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return t[r](a,a.exports,e),a.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{"use strict";var t=e(379),n=e.n(t),r=e(795),o=e.n(r),a=e(569),i=e.n(a),s=e(565),c=e.n(s),l=e(216),d=e.n(l),u=e(589),p=e.n(u),h=e(890),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),n()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const f=e(880),m=e(974),b=e(753),v=e(396),y=e(907),x=e(712),k=e(518);(()=>{const t=document.getElementById("info-text");setTimeout((()=>{t.innerHTML="Drag and drop your ships to place them on the left board."}),2e3),setTimeout((()=>{t.innerHTML="Click to rotate any ship horizontally or vertically."}),6e3),setTimeout((()=>{t.innerHTML="When you're finished, click the 'Start' button to begin the game."}),9e3);const n=b("player"),e=b("computer"),r=m(),o=m(),a=document.getElementById("my-board"),i=document.getElementById("opponent-board");v.createBoardGrid(a),v.createBoardGrid(i);const s=f(5),c=f(4),l=f(3),d=f(3),u=f(2),p=[s,c,l,d,u],h=[f(5),f(4),f(3),f(3),f(2)],g=document.querySelectorAll(".ship"),w=document.body.querySelectorAll("#my-board .square:not(.legend)");g.forEach((t=>{t.addEventListener("click",(t=>k.rotateShip(t))),t.addEventListener("dragstart",(t=>x.dragStart(t))),t.addEventListener("dragend",null)})),w.forEach((t=>{t.addEventListener("dragover",(t=>x.dragOver(t))),t.addEventListener("dragenter",(t=>x.dragEnter(t))),t.addEventListener("dragleave",(t=>x.dragLeave(t))),t.addEventListener("drop",(t=>x.dragDrop(t)))}));const S=document.querySelector(".start-game"),L=document.getElementById("my-ships"),E=document.querySelectorAll(".ship");let A=0;S.disabled=!0;const C=new MutationObserver((function(t){t.forEach((t=>{"childList"===t.type&&(A+=1)})),5===A&&(S.disabled=!1)}));C.observe(L,{childList:!0,subtree:!0}),S.addEventListener("click",(()=>{5===A&&(document.querySelectorAll(".ship-preview").forEach((t=>t.remove())),y.placeComputerShips(o,h),S.disabled=!0,document.querySelector(".tooltip-text").style.visibility="hidden",C.disconnect(),document.getElementById("cpu-text").textContent="You may go first.",t.textContent="The first to sink all 5 of their opponent's ships wins. Good luck!",E.forEach((t=>{t.style.cursor="default"})),document.querySelectorAll("#my-board .square.taken").forEach((t=>{const n=t.classList[1].slice(3),e=t.id,o=[e[1],e[0]];"patrol"===n?r.placeShip(u,o):"destroyer"===n?r.placeShip(l,o):"submarine"===n?r.placeShip(d,o):"battleship"===n?r.placeShip(c,o):"carrier"===n&&r.placeShip(s,o)})),k.disableRotateShip(),x.disableDragDrop(g))})),n.startTurn(),y.takeTurnsAttacking(n,r,e,o,h,p)})()})()})();