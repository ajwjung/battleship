(()=>{var t={890:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([t.id,':root {\n    --grid-bg: rgb(32, 119, 160);\n    --grid-outline: rgb(34, 190, 211);\n    --grid-text: rgb(98, 211, 226);\n    --blue: rgb(57, 101, 133);\n    --blue-border: rgba(34, 73, 104, 0.85);\n    --border: 3px solid var(--blue-border);\n    --font-size: 1.5rem;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.container {\n    height: 100vh;\n    width: 100vw;\n    margin: 0 auto;\n}\n\n.content {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 0.5fr) 5fr;\n}\n\nh1,\n.info-container,\n.player-side,\n.opponent-side,\n.message-box {\n    display: flex;\n    align-items: center;\n}\n\nh1,\n.info-container,\n.player-side,\n.opponent-side {\n    justify-content: center;\n}\n\nh1 {\n    text-align: center;\n    grid-column: 1 / span 2;\n    grid-row: 1;\n}\n\n.info-container {\n    grid-column: 1 / span 2;\n    grid-row: 2;\n    font-size: var(--font-size);\n    gap: 1rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.start-game {\n    height: 30px;\n    width: 80px;\n}\n\n.player-side {\n    grid-column: 1;\n    grid-row: 3;\n}\n\n.opponent-side {\n    grid-column: 2;\n    grid-row: 3;\n}\n\n.player-side,\n.opponent-side {\n    flex-direction: column;\n    gap: 3rem;\n}\n\n.message-box {\n    height: 5rem;\n    width: 85%;\n    border: var(--border);\n}\n\n.player-name {\n    display: inline-block;\n    text-indent: 4rem;\n    font-size: var(--font-size);\n}\n\n#player-text,\n#cpu-text {\n    margin-left: 1rem;\n    font-size: var(--font-size);\n}\n\n/* Styles for Gameboards*/\n.board,\n.left-panel,\n.left-ships,\n.right-ships {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.main-grid {\n    height: 500px;\n    width: 500px;\n    background: var(--grid-bg);\n    border: var(--border);\n}\n\n.peg-hole {\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    border: 5px solid var(--grid-outline);\n    position: absolute;\n    z-index: 10;\n}\n\n.white-miss {\n    border-color: white;\n    background: white;\n}\n\n.red-hit {\n    border-color: red;\n    background: red;\n}\n\n/* Styles the ships (left panel) */\n.left-panel {\n    border-right: none;\n    border-radius: 30% 0 0 30%;\n    justify-content: space-evenly;\n}\n\n.left-ships,\n.right-ships {\n    flex-direction: column;\n    height: 100%;\n    width: 35%;\n}\n\n.left-ships > *,\n.right-ships > * {\n    border: 2px solid;\n    margin: 1rem 0;\n}\n\n.ship {\n    cursor: pointer;\n}\n\n/* Align ships individually based on orientation */\n.horizontal {\n    position: absolute;\n}\n\n.vertical {\n    align-self: flex-start;\n    position: absolute;\n}\n\n.carrier {\n    height: 223px;\n    width: 45px;\n    background: red;\n}\n\n.battleship {\n    height: 178px;\n    width: 45px;\n    background: purple;\n}\n\n.destroyer,\n.submarine {\n    height: 133px;\n    width: 45px;\n}\n\n.destroyer {\n    background: orange;\n}\n\n.submarine {\n    background: khaki;\n}\n\n.patrol {\n    height: 88px;\n    width: 45px;\n    background: blue;\n}\n\n.left-panel,\n.right-panel {\n    height: 480px;\n    width: 170px;\n    border: var(--border);\n    background: var(--blue);\n}\n\n/* Highlight CPU ships */\n.highlight {\n    background: greenyellow;\n}\n\n.hover {\n    background: gray;\n}\n\n/* Styles the pegs (right panel)*/\n.right-panel {\n    border-left: none;\n    border-radius: 0 30% 30% 0;\n}\n\n.red-pegs {\n    height: 35%;\n    width: 100%;\n    border-bottom: var(--border);\n    border-radius: 0% 30% 0% 0% / 10% 80% 0% 0%;\n    background: rgb(226, 12, 12);\n}\n\n.white-pegs {\n    height: 65%;\n    width: 100%;\n    border-radius: 0% 0% 30% 0% / 0% 30% 45% 50%;\n    background: white;\n}\n\n/* Styles DOM-created grid*/\n.row,\n.square {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.row {\n    height: calc(100% / 11);\n    width: 100%;\n}\n\n/* Adds bottom border to all but last row (row 10)*/\n.row:not(:nth-last-child(-n+1)) {\n    border-bottom: 3px double var(--grid-outline);\n}\n\n.square {\n    height: 100%;\n    width: calc(100% / 11);\n    font-weight: 600;\n    font-size: var(--font-size);\n    color: var(--grid-text);\n    position: relative;\n}\n\n/* Adds right border to all but last col (col "J")  */\n.square:not(:nth-child(11n)) {\n    border-right: 3px double var(--grid-outline);\n}',""]);const i=s},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);r&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},s=[],i=0;i<t.length;i++){var c=t[i],d=r.base?c[0]+r.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=n(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var g=a(h,r);r.byIndex=i,e.splice(i,0,{identifier:u,updater:g,references:1})}s.push(u)}return s}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var s=0;s<o.length;s++){var i=n(o[s]);e[i].references--}for(var c=r(t,a),d=0;d<o.length;d++){var l=n(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},670:t=>{t.exports=function(t,e){for(let n=0;n<t.length;n+=1)if(e[0]===t[n][0]&&e[1]===t[n][1])return!0;return!1}},111:t=>{const e=["A","B","C","D","E","F","G","H","I","J"],n={convertCoordinatesToIndex:function(t){const[n,r]=t;return[n-1,e.indexOf(r)]},convertLetterToNumber:function(t){return e.indexOf(t)+1}};t.exports=n},396:t=>{const e=(()=>{const t=document.getElementById("player-text"),e=document.getElementById("cpu-text");return{createBoardGrid:function(t){for(let e=0;e<11;e+=1){const n=document.createElement("div");n.classList.add("row"),t.appendChild(n),"ZABCDEFGHIJ".split("").forEach((t=>{const r=document.createElement("div");if(r.classList.add("square"),r.setAttribute("id",`${t}${e}`),e>0&&"Z"!==t?r.setAttribute("id",`${t}${e}`):r.classList.add("legend"),0===e&&"Z"!==t&&(r.textContent=`${t}`),0!==e&&"Z"===t&&(r.textContent=`${e}`),e>0&&"Z"!==t){const n=document.createElement("div");n.classList.add("peg-hole"),n.setAttribute("id",`${t}${e}`),r.appendChild(n)}n.appendChild(r)}))}},playerAttackMessage:function(n,r){if("computer"===r.playerName){const t=`${n[1]}${n[0]}`;e.textContent=t}else t.textContent=n},opponentResponse:function(n,r,a){const o="computer"!==a.playerName?t:e;"none"!==r?n&&r.isSunk()?o.textContent="Hit, sunk!":n&&(o.textContent="Hit!"):o.textContent="Miss"},updatePeg:function(t,e,n){const r=`${t[1]}${t[0]}`,a="computer"!==n.playerName?document.body.querySelector(`#my-board #${r} > .peg-hole`):document.body.querySelector(`#opponent-board #${r} > .peg-hole`);e?a.classList.add("red-hit"):a.classList.add("white-miss")},displayEndGame:function(n){"computer"===n?(t.textContent="Congrats, you win!",e.textContent=":)"):(e.textContent="Congrats, you beat me!",t.textContent=":)")}}})();t.exports=e},712:(t,e,n)=>{const r=n(111),a=(()=>{function t(t){return t.classList.contains("vertical")}function e(t){return t.classList.contains("horizontal")}function n(t){return t.getBoundingClientRect().width}function a(t){return t.getBoundingClientRect().height}function o(t){return Math.round((t+2)/45)}function s(t){t.classList.add("vertical"),t.style.left=""}function i(t,e){t.classList.add("horizontal");const n=22*(o(e)-1);t.style.left=`${n}px`}function c(n,r){return!e(n)&&!t(n)}function d(t,e){const n=t.classList[1];e.classList.add(`my-${n}`),e.classList.add("taken")}function l(t){const e=t.classList[1];document.querySelectorAll(`.square.taken.my-${e}`).forEach((t=>{t.classList.remove("taken"),t.classList.remove(`my-${e}`)}))}function u(t){t.classList.contains("rotated-vertical")&&t.classList.remove("rotated-vertical"),t.classList.contains("rotated-horizontal")&&t.classList.remove("rotated-horizontal")}function p(t,e,n){const r=["A","B","C","D","E","F","G","H","I","J"],a=o(e),[s,i]=[t.charAt(0),Number(t.slice(1))],c=[];for(let t=0;t<a;t+=1){let e;"vertical"===n?e=document.getElementById(`${s}${i+t}`):"horizontal"===n&&(e=document.getElementById(`${r[r.indexOf(s)+t]}${i}`)),c.push(e)}return c}function h(t,e){const n=e.classList[1];return t.some((t=>t.classList.contains("taken")&&t.classList[1]!==`my-${n}`))}function g(t,e,n,a,s){let i;return"vertical"===s?i=function(t,e){return t.slice(1)-1+o(e)<=10}(t,e)&&!h(n,a):"horizontal"===s&&(i=function(t,e){const n=t.charAt(0);return Number(r.convertLetterToNumber(n))-1+o(e)<=10}(t,e)&&!h(n,a)),i}function f(t){return!t.classList.contains("rotated-vertical")&&!t.classList.contains("rotated-horizontal")}return{dragStart:function(t){t.dataTransfer.clearData(),t.dataTransfer.setData("text",t.target.classList[1])},dragOver:function(t){t.preventDefault()},dragEnter:function(t){t.preventDefault(),t.target.classList.contains("square")&&t.target.classList.add("hover")},dragLeave:function(t){t.target.classList.contains("square")&&t.target.classList.remove("hover")},dragDrop:function(r){const o=r.dataTransfer.getData("text"),h=document.querySelector(`.ship.${o}`),m=a(h),v=n(h);if(r.target.classList.contains("square")){let n,a;t(h)||h.classList.contains("rotated-vertical")||c(h)&&f(h)?(n=p(r.target.id,m,"vertical"),a=g(r.target.id,m,n,h,"vertical")):(e(h)||h.classList.contains("rotated-horizontal"))&&(n=p(r.target.id,v,"horizontal"),a=g(r.target.id,v,n,h,"horizontal")),f(h)&&c(h)&&a||h.classList.contains("rotated-vertical")&&c(h)&&a?(s(h),r.target.append(h),n.forEach((t=>d(h,t))),u(h)):h.classList.contains("rotated-horizontal")&&c(h)&&a&&(i(h,v),r.target.append(h),n.forEach((t=>d(h,t))),u(h)),(t(h)||e(h))&&h.parentNode.classList.contains("square")&&a&&(l(h),r.target.append(h),n.forEach((t=>d(h,t))),u(h))}r.target.classList.remove("hover")},hasVerticalClass:t,hasHorizontalClass:e,getShipHeight:a,getShipWidth:n,getAdjacentSquares:p,isValidDrop:g,addHorizontalStyle:i,addVerticalStyle:s,markOldSquaresAvailable:l,markSquareTaken:d,shipNeverRotatedBefore:f,disableDragDrop:function(t){t.forEach((t=>{t.draggable=!1}))}}})();t.exports=a},907:(t,e,n)=>{const r=n(111),a=n(729),o=n(396),s=n(670),i=(()=>{const t=document.getElementById("cpu-text"),e=document.getElementById("player-text");function n(t,e){const n=["A","B","C","D","E","F","G","H","I","J"];return n[n.indexOf(t)+e]}function i(t){const e=t.split("");return[e.splice(1).join(""),e[0]]}return{placeComputerShips:function(t,e){const r=[];return e.forEach((e=>{const[o,s]=a.getRandomPlacement(r,e),i=Math.random()<.5;for(let a=0;a<e.length;a+=1)i?(t.placeShip(e,[o+a,s]),r.push([o+a,s]),document.body.querySelector(`#opponent-board #${s}${o+a}`).classList.add("highlight")):(t.placeShip(e,[o,n(s,a)]),r.push([o,n(s,a)]),document.body.querySelector(`#opponent-board #${n(s,a)}${o}`).classList.add("highlight"))})),r},takeTurnsAttacking:function(n,a,c,d,l,u){document.body.querySelectorAll("#opponent-board .square").forEach((p=>{p.addEventListener("click",(p=>{const h=i(p.target.id);!n.checkTurn()||s(d.successfulHits,h)||s(d.missedAttacks,h)||d.allShipsSunk(l)||a.allShipsSunk(u)||(function(t,n,a,s,c){const d=i(t.target.id),l=r.convertCoordinatesToIndex(d),u=s.board[l[0]][l[1]];n.makeAttack(a,s,d),o.playerAttackMessage(t.target.id,n),setTimeout((()=>{o.opponentResponse(s.wasHit,u.ship,a)}),1e3),setTimeout((()=>{o.updatePeg(s.lastAttack,s.wasHit,a),e.textContent="Your turn.",n.endTurn(),s.allShipsSunk(c)?o.displayEndGame("player"):a.startTurn()}),2e3)}(p,n,c,d,l),setTimeout((()=>{c.checkTurn()&&function(e,n,a,s){e.makeAttack(n,a),o.playerAttackMessage(a.lastAttack,e);const i=r.convertCoordinatesToIndex(a.lastAttack),c=a.board[i[0]][i[1]];setTimeout((()=>{o.opponentResponse(a.wasHit,c.ship,n)}),1e3),setTimeout((()=>{o.updatePeg(a.lastAttack,a.wasHit,n),t.textContent="Your turn.",e.endTurn(),a.allShipsSunk(s)?o.displayEndGame("computer"):n.startTurn()}),2e3)}(c,n,a,u)}),4e3))}))}))}}})();t.exports=i},974:(t,e,n)=>{const r=n(670),a=n(111);t.exports=()=>{const t=[];for(let e=1;e<11;e+=1){const n=[];"ABCDEFGHIJ".split("").forEach((t=>{n.push({coordinates:[e,t],ship:"none"})})),t.push(n)}return{board:t,lastAttack:"none",wasHit:!1,successfulHits:[],missedAttacks:[],placeShip(e,n){const[r,o]=a.convertCoordinatesToIndex(n);t[r][o].ship=e},receiveAttack(e){const[n,o]=a.convertCoordinatesToIndex(e);"none"!==t[n][o].ship?(t[n][o].ship.hit(),this.successfulHits.push(e),this.lastAttack=e,this.wasHit=!0):"none"===t[n][o].ship&&(r(this.missedAttacks,e)||(this.missedAttacks.push(e),this.lastAttack=e,this.wasHit=!1))},allShipsSunk:t=>t.every((t=>t.isSunk()))}}},729:(t,e,n)=>{const r=n(670),a=(()=>{const t=["A","B","C","D","E","F","G","H","I","J"];return{getRandomCoordinates:function(){return[Math.floor(10*Math.random())+1,t[Math.floor(10*Math.random())]]},getRandomPlacement:function e(n,a){const o=Math.floor(10*Math.random())+1,s=Math.floor(10*Math.random());return o+a.length>10||s+a.length>10||r(n,[o,t[s]])||function(e,n,a,o){const s=[];let i=!1;for(let e=0;e<n.length;e+=1)s.push([a+e,t[o]]),s.push([a,t[o+e]]);return s.forEach((t=>{r(e,t)&&(i=!0)})),i}(n,a,o,s)?e(n,a):[o,t[s]]},getUnusedCoordinates:function e(n,a){const o=Math.floor(10*Math.random())+1,s=t[Math.floor(10*Math.random())];return r(n,[o,s])||r(a,[o,s])?e(n,a):[o,s]}}})();t.exports=a},753:(t,e,n)=>{const r=n(729);t.exports=t=>({playerName:t,myTurn:!1,startTurn(){this.checkTurn()||(this.myTurn=!0)},endTurn(){this.checkTurn()&&(this.myTurn=!1)},checkTurn(){return this.myTurn},makeAttack(t,e,n=[]){if(this.checkTurn())if("computer"!==t.playerName&&0===n.length){const t=r.getUnusedCoordinates(e.successfulHits,e.missedAttacks);e.receiveAttack(t)}else e.receiveAttack(n)}})},518:(t,e,n)=>{const r=n(712),a=(()=>{let t,e,n=0;function a(t){return!r.hasVerticalClass(t)&&!r.hasHorizontalClass(t)}function o(t){return t.parentNode.classList.contains("square")}function s(t){return e===t}function i(a){n=0,n=0===n?90:0;const o=r.getShipHeight(a),s=a.parentNode.id,i=r.getAdjacentSquares(s,o,"horizontal");r.isValidDrop(a.id,o,i,a,"horizontal")&&(a.style.transform=`rotate(${n}deg)`,a.classList.remove("vertical"),r.addHorizontalStyle(a,o),r.markOldSquaresAvailable(a),i.forEach((t=>r.markSquareTaken(a,t))),t="grid",e=a)}function c(a){n=90,n=90===n?0:90;const o=r.getShipWidth(a),s=a.parentNode.id,i=r.getAdjacentSquares(s,o,"vertical");r.isValidDrop(a.id,o,i,a,"vertical")&&(a.style.transform=`rotate(${n}deg)`,a.classList.remove("horizontal"),r.addVerticalStyle(a),r.markOldSquaresAvailable(a),i.forEach((t=>r.markSquareTaken(a,t))),t="grid",e=a)}function d(r){n=90,n=90===n?0:90,r.style.transform=`rotate(${n}deg)`,r.classList.add("rotated-vertical"),t="my-ships",e=r}function l(r){n=0,n=0===n?90:0,r.style.transform=`rotate(${n}deg)`,r.classList.add("rotated-horizontal"),t="my-ships",e=r}function u(t){t.stopPropagation(),t.preventDefault()}return{rotateShip:function(n){const u=n.target,p="my-ships"===u.parentNode.parentNode.id?"my-ships":"grid";!o(u)||t||e?!a(u)||t||e?"grid"===t&&"my-ships"===p?l(u):"my-ships"===t&&"grid"===p?r.hasVerticalClass(u)?i(u):r.hasHorizontalClass(u)&&c(u):t===p&&(a(u)&&s(u)?u.classList.contains("rotated-vertical")?(l(u),u.classList.remove("rotated-vertical")):u.classList.contains("rotated-horizontal")&&(d(u),u.classList.remove("rotated-horizontal")):o(u)&&s(u)?r.hasVerticalClass(u)?i(u):r.hasHorizontalClass(u)&&c(u):a(u)&&!s(u)?r.shipNeverRotatedBefore(u)?l(u):u.classList.contains("rotated-vertical")?(l(u),u.classList.remove("rotated-vertical")):u.classList.contains("rotated-horizontal")&&(d(u),u.classList.remove("rotated-horizontal")):o(u)&&!s(u)&&(r.hasVerticalClass(u)?i(u):r.hasHorizontalClass(u)&&c(u))):l(u):i(u)},disableRotateShip:function(){document.querySelectorAll("#my-board .square").forEach((t=>{t.addEventListener("click",u,!0)}))}}})();t.exports=a},880:t=>{t.exports=t=>({length:t,numHits:0,hit(){this.numHits+=1},isSunk(){return this.numHits===this.length}})}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),r=n(795),a=n.n(r),o=n(569),s=n.n(o),i=n(565),c=n.n(i),d=n(216),l=n.n(d),u=n(589),p=n.n(u),h=n(890),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=l(),e()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const f=n(880),m=n(974),v=n(753),b=n(396),y=n(907),x=n(712),k=n(518);(()=>{const t=v("player"),e=v("computer"),n=m(),r=m(),a=document.getElementById("my-board"),o=document.getElementById("opponent-board");b.createBoardGrid(a),b.createBoardGrid(o);const s=f(5),i=f(4),c=f(3),d=f(3),l=f(2),u=[s,i,c,d,l],p=[f(5),f(4),f(3),f(3),f(2)],h=document.querySelectorAll(".ship"),g=document.body.querySelectorAll("#my-board .square:not(.legend)");h.forEach((t=>{t.addEventListener("click",(t=>k.rotateShip(t))),t.addEventListener("dragstart",(t=>x.dragStart(t))),t.addEventListener("dragend",null)})),g.forEach((t=>{t.addEventListener("dragover",(t=>x.dragOver(t))),t.addEventListener("dragenter",(t=>x.dragEnter(t))),t.addEventListener("dragleave",(t=>x.dragLeave(t))),t.addEventListener("drop",(t=>x.dragDrop(t)))}));const L=document.querySelector(".start-game"),S=document.getElementById("my-ships"),E=document.querySelectorAll(".ship");let A=0;L.disabled=!0;const C=new MutationObserver((function(t){t.forEach((t=>{"childList"===t.type&&(A+=1)})),5===A&&(L.disabled=!1)}));C.observe(S,{childList:!0,subtree:!0}),L.addEventListener("click",(()=>{5===A&&(y.placeComputerShips(r,p),L.disabled=!0,C.disconnect(),E.forEach((t=>{t.style.cursor="default"})),document.querySelectorAll("#my-board .square.taken").forEach((t=>{const e=t.classList[1].slice(3),r=t.id,a=[r[1],r[0]];"patrol"===e?n.placeShip(l,a):"destroyer"===e?n.placeShip(c,a):"submarine"===e?n.placeShip(d,a):"battleship"===e?n.placeShip(i,a):"carrier"===e&&n.placeShip(s,a)})),k.disableRotateShip(),x.disableDragDrop(h))})),t.startTurn(),y.takeTurnsAttacking(t,n,e,r,p,u)})()})()})();