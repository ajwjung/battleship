(()=>{var t={890:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),s=n.n(a)()(o());s.push([t.id,':root {\n    --grid-bg: rgb(32, 119, 160);\n    --grid-outline: rgb(34, 190, 211);\n    --grid-text: rgb(98, 211, 226);\n    --blue: rgb(57, 101, 133);\n    --blue-border: rgba(34, 73, 104, 0.85);\n    --border: 3px solid var(--blue-border);\n    --font-size: 1.5rem;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    color: rgb(98, 211, 226);\n}\n\nbody {\n    background:rgb(5, 30, 49);\n}\n\n.container {\n    height: 100vh;\n    width: 100vw;\n    margin: 0 auto;\n}\n\n.content {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(3, 0.5fr) 5fr;\n}\n\nh1,\n.info-container,\n.button-container,\n.player-side,\n.opponent-side,\n.message-box {\n    display: flex;\n    align-items: center;\n}\n\nh1,\n.info-container,\n.button-container,\n.player-side,\n.opponent-side {\n    justify-content: center;\n}\n\nh1 {\n    text-align: center;\n    grid-column: 1 / span 2;\n    grid-row: 1;\n}\n\n.info-container {\n    grid-column: 1 / span 2;\n    grid-row: 2;\n    font-size: var(--font-size);\n    gap: 1rem;\n    flex-direction: column;\n}\n\n.button-container {\n    height: 100%;\n    width: 100%;\n    grid-column: 1 / span 2;\n    grid-row: 3;\n    font-size: var(--font-size);\n    gap: 1rem;\n}\n\n.start-game {\n    height: 32px;\n    width: 80px;\n    border: none;\n}\n\n.start-game:disabled {\n    background: rgb(105, 114, 119);\n    color: rgb(0, 0, 0);\n}\n\n.start-game:not(:disabled),\n.help {\n    background: var(--blue);\n}\n\n.help {\n    height: 32px;\n    width: 32px;\n    border: none;\n    border-radius: 50%;\n    font-weight: 600;\n}\n\n.start-game:not(:disabled):hover,\n.help:hover {\n    background: var(--blue-border);\n}\n\n.player-side {\n    grid-column: 1;\n    grid-row: 4;\n}\n\n.opponent-side {\n    grid-column: 2;\n    grid-row: 4;\n}\n\n.player-side,\n.opponent-side {\n    flex-direction: column;\n    gap: 3rem;\n}\n\n.message-box {\n    height: 5rem;\n    width: 85%;\n    border: var(--border);\n}\n\n.player-name {\n    display: inline-block;\n    text-indent: 4rem;\n    font-size: var(--font-size);\n}\n\n#player-text,\n#cpu-text {\n    margin-left: 1rem;\n    font-size: var(--font-size);\n}\n\n/* Styles for Gameboards*/\n.board,\n.left-panel,\n.left-ships,\n.right-ships {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.main-grid {\n    height: 500px;\n    width: 500px;\n    background: var(--grid-bg);\n    border: var(--border);\n}\n\n.peg-hole {\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    border: 5px solid var(--grid-outline);\n    position: absolute;\n    z-index: 10;\n}\n\n.white-miss {\n    border-color: white;\n    background: white;\n}\n\n.red-hit {\n    border-color: red;\n    background: red;\n}\n\n/* Styles the ships (left panel) */\n.left-panel {\n    border-right: none;\n    border-radius: 30% 0 0 30%;\n    justify-content: space-evenly;\n}\n\n.left-ships,\n.right-ships {\n    flex-direction: column;\n    height: 100%;\n    width: 35%;\n}\n\n.left-ships > *,\n.right-ships > * {\n    border: 2px solid;\n    margin: 1rem 0;\n}\n\n.ship {\n    cursor: pointer;\n}\n\n/* Align ships individually based on orientation */\n.horizontal {\n    position: absolute;\n}\n\n.vertical {\n    align-self: flex-start;\n    position: absolute;\n}\n\n.ship,\n.ship-preview {\n    background: rgb(211, 211, 211);\n}\n\n.carrier {\n    height: 223px;\n    width: 45px;\n    border-radius: 5px;\n}\n\n.battleship {\n    height: 178px;\n    width: 45px;\n    border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;\n}\n\n.destroyer,\n.submarine {\n    height: 133px;\n    width: 45px;\n}\n\n.destroyer {\n    border-radius: 50% 50% 25% 25% / 65% 65% 10% 10% \n}\n\n.submarine {\n    border-radius: 50% 50% 60% 55% / 50% 50% 40% 40%;\n}\n\n.patrol {\n    height: 88px;\n    width: 45px;\n    border-radius: 50% 50% 30% 30% / 70% 70% 20% 20% \n}\n\n.left-panel,\n.right-panel {\n    height: 480px;\n    width: 170px;\n    border: var(--border);\n    background: var(--blue);\n}\n\n/* Highlight CPU ships */\n.highlight {\n    background: greenyellow;\n}\n\n.hover {\n    background: gray;\n}\n\n/* Styles the pegs (right panel)*/\n.right-panel {\n    border-left: none;\n    border-radius: 0 30% 30% 0;\n}\n\n.red-pegs {\n    height: 35%;\n    width: 100%;\n    border-bottom: var(--border);\n    border-radius: 0% 30% 0% 0% / 10% 80% 0% 0%;\n    background: rgb(185, 16, 16);\n}\n\n.white-pegs {\n    height: 65%;\n    width: 100%;\n    border-radius: 0% 0% 30% 0% / 0% 30% 45% 50%;\n    background: rgb(243, 244, 245);\n}\n\n/* Styles DOM-created grid*/\n.row,\n.square {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.row {\n    height: calc(100% / 11);\n    width: 100%;\n}\n\n/* Adds bottom border to all but last row (row 10)*/\n.row:not(:nth-last-child(-n+1)) {\n    border-bottom: 3px double var(--grid-outline);\n}\n\n.square {\n    height: 100%;\n    width: calc(100% / 11);\n    font-weight: 600;\n    font-size: var(--font-size);\n    color: var(--grid-text);\n    position: relative;\n}\n\n/* Adds right border to all but last col (col "J")  */\n.square:not(:nth-child(11n)) {\n    border-right: 3px double var(--grid-outline);\n}',""]);const i=s},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);r&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},s=[],i=0;i<t.length;i++){var c=t[i],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var g=o(h,r);r.byIndex=i,e.splice(i,0,{identifier:u,updater:g,references:1})}s.push(u)}return s}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var s=0;s<a.length;s++){var i=n(a[s]);e[i].references--}for(var c=r(t,o),d=0;d<a.length;d++){var l=n(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},670:t=>{t.exports=function(t,e){for(let n=0;n<t.length;n+=1)if(e[0]===t[n][0]&&e[1]===t[n][1])return!0;return!1}},111:t=>{const e=["A","B","C","D","E","F","G","H","I","J"],n={convertCoordinatesToIndex:function(t){const[n,r]=t;return[n-1,e.indexOf(r)]},convertLetterToNumber:function(t){return e.indexOf(t)+1}};t.exports=n},396:t=>{const e=(()=>{const t=document.getElementById("player-text"),e=document.getElementById("cpu-text");return{createBoardGrid:function(t){for(let e=0;e<11;e+=1){const n=document.createElement("div");n.classList.add("row"),t.appendChild(n),"ZABCDEFGHIJ".split("").forEach((t=>{const r=document.createElement("div");if(r.classList.add("square"),r.setAttribute("id",`${t}${e}`),e>0&&"Z"!==t?r.setAttribute("id",`${t}${e}`):r.classList.add("legend"),0===e&&"Z"!==t&&(r.textContent=`${t}`),0!==e&&"Z"===t&&(r.textContent=`${e}`),e>0&&"Z"!==t){const n=document.createElement("div");n.classList.add("peg-hole"),n.setAttribute("id",`${t}${e}`),r.appendChild(n)}n.appendChild(r)}))}},playerAttackMessage:function(n,r){if("computer"===r.playerName){const t=`${n[1]}${n[0]}`;e.textContent=t}else t.textContent=n},opponentResponse:function(n,r,o){const a="computer"!==o.playerName?t:e;"none"!==r?n&&r.isSunk()?a.textContent="Hit, sunk!":n&&(a.textContent="Hit!"):a.textContent="Miss"},updatePeg:function(t,e,n){const r=`${t[1]}${t[0]}`,o="computer"!==n.playerName?document.body.querySelector(`#my-board #${r} > .peg-hole`):document.body.querySelector(`#opponent-board #${r} > .peg-hole`);e?o.classList.add("red-hit"):o.classList.add("white-miss")},displayEndGame:function(n){"computer"===n?(t.textContent="Congrats, you win!",e.textContent=":)"):(e.textContent="Congrats, you beat me!",t.textContent=":)")}}})();t.exports=e},712:(t,e,n)=>{const r=n(111),o=(()=>{function t(t){return t.classList.contains("vertical")}function e(t){return t.classList.contains("horizontal")}function n(t){return t.getBoundingClientRect().width}function o(t){return t.getBoundingClientRect().height}function a(t){return Math.round((t+2)/45)}function s(t){t.classList.add("vertical"),t.style.left=""}function i(t,e){t.classList.add("horizontal");const n=22*(a(e)-1);t.style.left=`${n}px`}function c(n,r){return!e(n)&&!t(n)}function d(t,e){const n=t.classList[1];e.classList.add(`my-${n}`),e.classList.add("taken")}function l(t){const e=t.classList[1];document.querySelectorAll(`.square.taken.my-${e}`).forEach((t=>{t.classList.remove("taken"),t.classList.remove(`my-${e}`)}))}function u(t){t.classList.contains("rotated-vertical")&&t.classList.remove("rotated-vertical"),t.classList.contains("rotated-horizontal")&&t.classList.remove("rotated-horizontal")}function p(t,e,n){const r=["A","B","C","D","E","F","G","H","I","J"],o=a(e),[s,i]=[t.charAt(0),Number(t.slice(1))],c=[];for(let t=0;t<o;t+=1){let e;"vertical"===n?e=document.getElementById(`${s}${i+t}`):"horizontal"===n&&(e=document.getElementById(`${r[r.indexOf(s)+t]}${i}`)),c.push(e)}return c}function h(t,e){const n=e.classList[1];return t.some((t=>t.classList.contains("taken")&&t.classList[1]!==`my-${n}`))}function g(t,e,n,o,s){let i;return"vertical"===s?i=function(t,e){return t.slice(1)-1+a(e)<=10}(t,e)&&!h(n,o):"horizontal"===s&&(i=function(t,e){const n=t.charAt(0);return Number(r.convertLetterToNumber(n))-1+a(e)<=10}(t,e)&&!h(n,o)),i}function f(t){return!t.classList.contains("rotated-vertical")&&!t.classList.contains("rotated-horizontal")}return{dragStart:function(t){t.dataTransfer.clearData(),t.dataTransfer.setData("text",t.target.classList[1])},dragOver:function(t){t.preventDefault()},dragEnter:function(t){t.preventDefault(),t.target.classList.contains("square")&&t.target.classList.add("hover")},dragLeave:function(t){t.target.classList.contains("square")&&t.target.classList.remove("hover")},dragDrop:function(r){const a=r.dataTransfer.getData("text"),h=document.querySelector(`.ship.${a}`),m=o(h),b=n(h);if(r.target.classList.contains("square")){let n,o;t(h)||h.classList.contains("rotated-vertical")||c(h)&&f(h)?(n=p(r.target.id,m,"vertical"),o=g(r.target.id,m,n,h,"vertical")):(e(h)||h.classList.contains("rotated-horizontal"))&&(n=p(r.target.id,b,"horizontal"),o=g(r.target.id,b,n,h,"horizontal")),f(h)&&c(h)&&o||h.classList.contains("rotated-vertical")&&c(h)&&o?(s(h),r.target.append(h),n.forEach((t=>d(h,t))),u(h)):h.classList.contains("rotated-horizontal")&&c(h)&&o&&(i(h,b),r.target.append(h),n.forEach((t=>d(h,t))),u(h)),(t(h)||e(h))&&h.parentNode.classList.contains("square")&&o&&(l(h),r.target.append(h),n.forEach((t=>d(h,t))),u(h))}r.target.classList.remove("hover")},hasVerticalClass:t,hasHorizontalClass:e,getShipHeight:o,getShipWidth:n,getAdjacentSquares:p,isValidDrop:g,addHorizontalStyle:i,addVerticalStyle:s,markOldSquaresAvailable:l,markSquareTaken:d,shipNeverRotatedBefore:f,disableDragDrop:function(t){t.forEach((t=>{t.draggable=!1}))}}})();t.exports=o},907:(t,e,n)=>{const r=n(111),o=n(729),a=n(396),s=n(670),i=(()=>{const t=document.getElementById("cpu-text"),e=document.getElementById("player-text");function n(t,e){const n=["A","B","C","D","E","F","G","H","I","J"];return n[n.indexOf(t)+e]}function i(t){const e=t.split("");return[e.splice(1).join(""),e[0]]}return{placeComputerShips:function(t,e){const r=[];return e.forEach((e=>{const[a,s]=o.getRandomPlacement(r,e),i=Math.random()<.5;for(let o=0;o<e.length;o+=1)i?(t.placeShip(e,[a+o,s]),r.push([a+o,s]),document.body.querySelector(`#opponent-board #${s}${a+o}`).classList.add("cpu-ship")):(t.placeShip(e,[a,n(s,o)]),r.push([a,n(s,o)]),document.body.querySelector(`#opponent-board #${n(s,o)}${a}`).classList.add("cpu-ship"))})),r},takeTurnsAttacking:function(n,o,c,d,l,u){document.body.querySelectorAll("#opponent-board .square").forEach((p=>{p.addEventListener("click",(p=>{const h=i(p.target.id);!n.checkTurn()||s(d.successfulHits,h)||s(d.missedAttacks,h)||d.allShipsSunk(l)||o.allShipsSunk(u)||(function(t,n,o,s,c){const d=i(t.target.id),l=r.convertCoordinatesToIndex(d),u=s.board[l[0]][l[1]];n.makeAttack(o,s,d),a.playerAttackMessage(t.target.id,n),setTimeout((()=>{a.opponentResponse(s.wasHit,u.ship,o)}),1e3),setTimeout((()=>{a.updatePeg(s.lastAttack,s.wasHit,o),e.textContent="Your turn.",n.endTurn(),s.allShipsSunk(c)?(a.displayEndGame("player"),document.querySelectorAll(".cpu-ship").forEach((t=>{t.classList.add("highlight")}))):o.startTurn()}),2e3)}(p,n,c,d,l),setTimeout((()=>{c.checkTurn()&&function(e,n,o,s){e.makeAttack(n,o),a.playerAttackMessage(o.lastAttack,e);const i=r.convertCoordinatesToIndex(o.lastAttack),c=o.board[i[0]][i[1]];setTimeout((()=>{a.opponentResponse(o.wasHit,c.ship,n)}),1e3),setTimeout((()=>{a.updatePeg(o.lastAttack,o.wasHit,n),t.textContent="Your turn.",e.endTurn(),o.allShipsSunk(s)?(a.displayEndGame("computer"),document.querySelectorAll(".cpu-ship").forEach((t=>{t.classList.add("highlight")}))):n.startTurn()}),2e3)}(c,n,o,u)}),4e3))}))}))}}})();t.exports=i},974:(t,e,n)=>{const r=n(670),o=n(111);t.exports=()=>{const t=[];for(let e=1;e<11;e+=1){const n=[];"ABCDEFGHIJ".split("").forEach((t=>{n.push({coordinates:[e,t],ship:"none"})})),t.push(n)}return{board:t,lastAttack:"none",wasHit:!1,successfulHits:[],missedAttacks:[],placeShip(e,n){const[r,a]=o.convertCoordinatesToIndex(n);t[r][a].ship=e},receiveAttack(e){const[n,a]=o.convertCoordinatesToIndex(e);"none"!==t[n][a].ship?(t[n][a].ship.hit(),this.successfulHits.push(e),this.lastAttack=e,this.wasHit=!0):"none"===t[n][a].ship&&(r(this.missedAttacks,e)||(this.missedAttacks.push(e),this.lastAttack=e,this.wasHit=!1))},allShipsSunk:t=>t.every((t=>t.isSunk()))}}},729:(t,e,n)=>{const r=n(670),o=(()=>{const t=["A","B","C","D","E","F","G","H","I","J"];return{getRandomCoordinates:function(){return[Math.floor(10*Math.random())+1,t[Math.floor(10*Math.random())]]},getRandomPlacement:function e(n,o){const a=Math.floor(10*Math.random())+1,s=Math.floor(10*Math.random());return a+o.length>10||s+o.length>10||r(n,[a,t[s]])||function(e,n,o,a){const s=[];let i=!1;for(let e=0;e<n.length;e+=1)s.push([o+e,t[a]]),s.push([o,t[a+e]]);return s.forEach((t=>{r(e,t)&&(i=!0)})),i}(n,o,a,s)?e(n,o):[a,t[s]]},getUnusedCoordinates:function e(n,o){const a=Math.floor(10*Math.random())+1,s=t[Math.floor(10*Math.random())];return r(n,[a,s])||r(o,[a,s])?e(n,o):[a,s]}}})();t.exports=o},753:(t,e,n)=>{const r=n(729);t.exports=t=>({playerName:t,myTurn:!1,startTurn(){this.checkTurn()||(this.myTurn=!0)},endTurn(){this.checkTurn()&&(this.myTurn=!1)},checkTurn(){return this.myTurn},makeAttack(t,e,n=[]){if(this.checkTurn())if("computer"!==t.playerName&&0===n.length){const t=r.getUnusedCoordinates(e.successfulHits,e.missedAttacks);e.receiveAttack(t)}else e.receiveAttack(n)}})},518:(t,e,n)=>{const r=n(712),o=(()=>{let t,e,n=0;function o(t){return!r.hasVerticalClass(t)&&!r.hasHorizontalClass(t)}function a(t){return t.parentNode.classList.contains("square")}function s(t){return e===t}function i(o){n=0,n=0===n?90:0;const a=r.getShipHeight(o),s=o.parentNode.id,i=r.getAdjacentSquares(s,a,"horizontal");r.isValidDrop(o.id,a,i,o,"horizontal")&&(o.style.transform=`rotate(${n}deg)`,o.classList.remove("vertical"),r.addHorizontalStyle(o,a),r.markOldSquaresAvailable(o),i.forEach((t=>r.markSquareTaken(o,t))),t="grid",e=o)}function c(o){n=90,n=90===n?0:90;const a=r.getShipWidth(o),s=o.parentNode.id,i=r.getAdjacentSquares(s,a,"vertical");r.isValidDrop(o.id,a,i,o,"vertical")&&(o.style.transform=`rotate(${n}deg)`,o.classList.remove("horizontal"),r.addVerticalStyle(o),r.markOldSquaresAvailable(o),i.forEach((t=>r.markSquareTaken(o,t))),t="grid",e=o)}function d(r){n=90,n=90===n?0:90,r.style.transform=`rotate(${n}deg)`,r.classList.add("rotated-vertical"),t="my-ships",e=r}function l(r){n=0,n=0===n?90:0,r.style.transform=`rotate(${n}deg)`,r.classList.add("rotated-horizontal"),t="my-ships",e=r}function u(t){t.stopPropagation(),t.preventDefault()}return{rotateShip:function(n){const u=n.target,p="my-ships"===u.parentNode.parentNode.id?"my-ships":"grid";!a(u)||t||e?!o(u)||t||e?"grid"===t&&"my-ships"===p?l(u):"my-ships"===t&&"grid"===p?r.hasVerticalClass(u)?i(u):r.hasHorizontalClass(u)&&c(u):t===p&&(o(u)&&s(u)?u.classList.contains("rotated-vertical")?(l(u),u.classList.remove("rotated-vertical")):u.classList.contains("rotated-horizontal")&&(d(u),u.classList.remove("rotated-horizontal")):a(u)&&s(u)?r.hasVerticalClass(u)?i(u):r.hasHorizontalClass(u)&&c(u):o(u)&&!s(u)?r.shipNeverRotatedBefore(u)?l(u):u.classList.contains("rotated-vertical")?(l(u),u.classList.remove("rotated-vertical")):u.classList.contains("rotated-horizontal")&&(d(u),u.classList.remove("rotated-horizontal")):a(u)&&!s(u)&&(r.hasVerticalClass(u)?i(u):r.hasHorizontalClass(u)&&c(u))):l(u):i(u)},disableRotateShip:function(){document.querySelectorAll("#my-board .square").forEach((t=>{t.addEventListener("click",u,!0)}))}}})();t.exports=o},880:t=>{t.exports=t=>({length:t,numHits:0,hit(){this.numHits+=1},isSunk(){return this.numHits===this.length}})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),r=n(795),o=n.n(r),a=n(569),s=n.n(a),i=n(565),c=n.n(i),d=n(216),l=n.n(d),u=n(589),p=n.n(u),h=n(890),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),e()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const f=n(880),m=n(974),b=n(753),v=n(396),y=n(907),x=n(712),k=n(518);(()=>{const t=document.getElementById("info-text");setTimeout((()=>{t.innerHTML="Drag and drop your ships to place them on the left board."}),2e3),setTimeout((()=>{t.innerHTML="Click to rotate any ship horizontally or vertically."}),6e3),setTimeout((()=>{t.innerHTML="When you're finished, click the 'Start' button to begin the game."}),9e3);const e=b("player"),n=b("computer"),r=m(),o=m(),a=document.getElementById("my-board"),s=document.getElementById("opponent-board");v.createBoardGrid(a),v.createBoardGrid(s);const i=f(5),c=f(4),d=f(3),l=f(3),u=f(2),p=[i,c,d,l,u],h=[f(5),f(4),f(3),f(3),f(2)],g=document.querySelectorAll(".ship"),L=document.body.querySelectorAll("#my-board .square:not(.legend)");g.forEach((t=>{t.addEventListener("click",(t=>k.rotateShip(t))),t.addEventListener("dragstart",(t=>x.dragStart(t))),t.addEventListener("dragend",null)})),L.forEach((t=>{t.addEventListener("dragover",(t=>x.dragOver(t))),t.addEventListener("dragenter",(t=>x.dragEnter(t))),t.addEventListener("dragleave",(t=>x.dragLeave(t))),t.addEventListener("drop",(t=>x.dragDrop(t)))}));const S=document.querySelector(".start-game"),E=document.getElementById("my-ships"),w=document.querySelectorAll(".ship");let A=0;S.disabled=!0;const C=new MutationObserver((function(t){t.forEach((t=>{"childList"===t.type&&(A+=1)})),5===A&&(S.disabled=!1)}));C.observe(E,{childList:!0,subtree:!0}),S.addEventListener("click",(()=>{5===A&&(document.querySelectorAll(".ship-preview").forEach((t=>t.remove())),y.placeComputerShips(o,h),S.disabled=!0,C.disconnect(),document.getElementById("cpu-text").textContent="You may go first.",w.forEach((t=>{t.style.cursor="default"})),document.querySelectorAll("#my-board .square.taken").forEach((t=>{const e=t.classList[1].slice(3),n=t.id,o=[n[1],n[0]];"patrol"===e?r.placeShip(u,o):"destroyer"===e?r.placeShip(d,o):"submarine"===e?r.placeShip(l,o):"battleship"===e?r.placeShip(c,o):"carrier"===e&&r.placeShip(i,o)})),k.disableRotateShip(),x.disableDragDrop(g))})),e.startTurn(),y.takeTurnsAttacking(e,r,n,o,h,p)})()})()})();