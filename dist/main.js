(()=>{var t={890:(t,n,e)=>{"use strict";e.d(n,{Z:()=>i});var r=e(81),o=e.n(r),a=e(645),s=e.n(a)()(o());s.push([t.id,':root {\n    --grid-bg: rgb(32, 119, 160);\n    --grid-outline: rgb(34, 190, 211);\n    --grid-text: rgb(98, 211, 226);\n    --blue: rgb(57, 101, 133);\n    --blue-border: rgba(34, 73, 104, 0.85);\n    --border: 3px solid var(--blue-border);\n    --font-size: 1.5rem;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.container {\n    height: 100vh;\n    width: 100vw;\n    margin: 0 auto;\n}\n\n.content {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 0.5fr) 5fr;\n}\n\nh1,\n.info-container,\n.player-side,\n.opponent-side,\n.message-box {\n    display: flex;\n    align-items: center;\n}\n\nh1,\n.info-container,\n.player-side,\n.opponent-side {\n    justify-content: center;\n}\n\nh1 {\n    text-align: center;\n    grid-column: 1 / span 2;\n    grid-row: 1;\n}\n\n.info-container {\n    grid-column: 1 / span 2;\n    grid-row: 2;\n    font-size: var(--font-size);\n}\n\n.player-side {\n    grid-column: 1;\n    grid-row: 3;\n}\n\n.opponent-side {\n    grid-column: 2;\n    grid-row: 3;\n}\n\n.player-side,\n.opponent-side {\n    flex-direction: column;\n    gap: 3rem;\n}\n\n.message-box {\n    height: 5rem;\n    width: 85%;\n    border: var(--border);\n}\n\n.player-name {\n    display: inline-block;\n    text-indent: 4rem;\n    font-size: var(--font-size);\n}\n\n#player-text,\n#cpu-text {\n    margin-left: 1rem;\n    font-size: var(--font-size);\n}\n\n/* Styles for Gameboards*/\n.board,\n.left-panel,\n.left-ships,\n.right-ships {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.main-grid {\n    height: 500px;\n    width: 500px;\n    background: var(--grid-bg);\n    border: var(--border);\n}\n\n.peg-hole {\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    border: 5px solid var(--grid-outline);\n    position: absolute;\n    z-index: 10;\n}\n\n.white-miss {\n    border-color: white;\n    background: white;\n}\n\n.red-hit {\n    border-color: red;\n    background: red;\n}\n\n/* Styles the ships (left panel) */\n.left-panel {\n    border-right: none;\n    border-radius: 30% 0 0 30%;\n    justify-content: space-evenly;\n}\n\n.left-ships,\n.right-ships {\n    flex-direction: column;\n    height: 100%;\n    width: 35%;\n}\n\n.left-ships > *,\n.right-ships > * {\n    border: 2px solid;\n    margin: 1rem 0;\n}\n\n.ship {\n    cursor: pointer;\n}\n\n/* Align ships individually based on orientation */\n.horizontal {\n    position: absolute;\n}\n\n.vertical {\n    align-self: flex-start;\n    position: absolute;\n}\n\n.carrier {\n    height: 223px;\n    width: 45px;\n    background: red;\n}\n\n.battleship {\n    height: 178px;\n    width: 45px;\n    background: purple;\n}\n\n.destroyer,\n.submarine {\n    height: 133px;\n    width: 45px;\n}\n\n.destroyer {\n    background: orange;\n}\n\n.submarine {\n    background: khaki;\n}\n\n.patrol {\n    height: 88px;\n    width: 45px;\n    background: blue;\n}\n\n.left-panel,\n.right-panel {\n    height: 480px;\n    width: 170px;\n    border: var(--border);\n    background: var(--blue);\n}\n\n/* Highlight CPU ships */\n.highlight {\n    background: greenyellow;\n}\n\n.hover {\n    background: gray;\n}\n\n/* Styles the pegs (right panel)*/\n.right-panel {\n    border-left: none;\n    border-radius: 0 30% 30% 0;\n}\n\n.red-pegs {\n    height: 35%;\n    width: 100%;\n    border-bottom: var(--border);\n    border-radius: 0% 30% 0% 0% / 10% 80% 0% 0%;\n    background: rgb(226, 12, 12);\n}\n\n.white-pegs {\n    height: 65%;\n    width: 100%;\n    border-radius: 0% 0% 30% 0% / 0% 30% 45% 50%;\n    background: white;\n}\n\n/* Styles DOM-created grid*/\n.row,\n.square {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.row {\n    height: calc(100% / 11);\n    width: 100%;\n}\n\n/* Adds bottom border to all but last row (row 10)*/\n.row:not(:nth-last-child(-n+1)) {\n    border-bottom: 3px double var(--grid-outline);\n}\n\n.square {\n    height: 100%;\n    width: calc(100% / 11);\n    font-weight: 600;\n    font-size: var(--font-size);\n    color: var(--grid-text);\n    position: relative;\n}\n\n/* Adds right border to all but last col (col "J")  */\n.square:not(:nth-child(11n)) {\n    border-right: 3px double var(--grid-outline);\n}',""]);const i=s},645:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);r&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var a={},s=[],i=0;i<t.length;i++){var c=t[i],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=e(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var g=o(h,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:g,references:1})}s.push(u)}return s}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var s=0;s<a.length;s++){var i=e(a[s]);n[i].references--}for(var c=r(t,o),d=0;d<a.length;d++){var l=e(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:t=>{"use strict";var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{"use strict";t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{"use strict";t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{"use strict";t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},670:t=>{t.exports=function(t,n){for(let e=0;e<t.length;e+=1)if(n[0]===t[e][0]&&n[1]===t[e][1])return!0;return!1}},111:t=>{const n=["A","B","C","D","E","F","G","H","I","J"],e={convertCoordinatesToIndex:function(t){const[e,r]=t;return[e-1,n.indexOf(r)]},convertLetterToNumber:function(t){return n.indexOf(t)+1}};t.exports=e},396:t=>{const n=(()=>{const t=document.getElementById("player-text"),n=document.getElementById("cpu-text");return{createBoardGrid:function(t){for(let n=0;n<11;n+=1){const e=document.createElement("div");e.classList.add("row"),t.appendChild(e),"ZABCDEFGHIJ".split("").forEach((t=>{const r=document.createElement("div");if(r.classList.add("square"),r.setAttribute("id",`${t}${n}`),n>0&&"Z"!==t?r.setAttribute("id",`${t}${n}`):r.classList.add("legend"),0===n&&"Z"!==t&&(r.textContent=`${t}`),0!==n&&"Z"===t&&(r.textContent=`${n}`),n>0&&"Z"!==t){const e=document.createElement("div");e.classList.add("peg-hole"),e.setAttribute("id",`${t}${n}`),r.appendChild(e)}e.appendChild(r)}))}},playerAttackMessage:function(e,r){if("computer"===r.playerName){const t=`${e[1]}${e[0]}`;n.textContent=t}else t.textContent=e},opponentResponse:function(e,r,o){const a="computer"!==o.playerName?t:n;"none"!==r?e&&r.isSunk()?a.textContent="Hit, sunk!":e&&(a.textContent="Hit!"):a.textContent="Miss"},updatePeg:function(t,n,e){const r=`${t[1]}${t[0]}`,o="computer"!==e.playerName?document.body.querySelector(`#my-board #${r} > .peg-hole`):document.body.querySelector(`#opponent-board #${r} > .peg-hole`);n?o.classList.add("red-hit"):o.classList.add("white-miss")},displayEndGame:function(e){"computer"===e?(t.textContent="Congrats, you win!",n.textContent=":)"):(n.textContent="Congrats, you beat me!",t.textContent=":)")}}})();t.exports=n},712:(t,n,e)=>{const r=e(111),o=(()=>{let t,n=0;function e(t){return t.classList.contains("vertical")}function o(t){return t.classList.contains("horizontal")}function a(t,n){return!o(t)&&!e(t)}function s(t){return t.getBoundingClientRect().height}function i(t){return Math.round((t+2)/45)}function c(t,n){t.classList.add("horizontal");const e=22*(i(n)-1);t.style.left=`${e}px`}function d(t,n){const e=t.classList[1];n.classList.add(`my-${e}`),n.classList.add("taken")}function l(t){const n=t.classList[1];document.querySelectorAll(`.square.taken.my-${n}`).forEach((t=>{t.classList.remove("taken"),t.classList.remove(`my-${n}`)}))}function u(t,e){const r=["A","B","C","D","E","F","G","H","I","J"],o=i(e),[a,s]=[t.charAt(0),Number(t.slice(1))],c=[];for(let t=0;t<o;t+=1){let e;e=0===n?document.getElementById(`${a}${s+t}`):document.getElementById(`${r[r.indexOf(a)+t]}${s}`),c.push(e)}return c}function p(t,n){const e=n.classList[1];return t.some((t=>t.classList.contains("taken")&&t.classList[1]!==`my-${e}`))}function h(t,e,o,a){let s;return 0===n?s=function(t,n){return t.slice(1)-1+i(n)<=10}(t,e)&&!p(o,a):90===n&&(s=function(t,n){const e=t.charAt(0);return Number(r.convertLetterToNumber(e))-1+i(n)<=10}(t,e)&&!p(o,a)),s}return{dragStart:function(t){t.dataTransfer.clearData(),t.dataTransfer.setData("text",t.target.classList[1])},dragOver:function(t){t.preventDefault()},dragEnter:function(t){t.preventDefault(),t.target.classList.contains("square")&&t.target.classList.add("hover")},dragLeave:function(t){t.target.classList.contains("square")&&t.target.classList.remove("hover")},dragDrop:function(t){const r=t.dataTransfer.getData("text"),i=document.querySelector(`.ship.${r}`),p=s(i),g=function(t){return t.getBoundingClientRect().width}(i);if(t.target.classList.contains("square")){const r=u(t.target.id,0===n?p:g),s=h(t.target.id,0===n?p:g,r,i);0===n&&a(i)&&s?(function(t){t.classList.add("vertical"),t.style.left=""}(i),t.target.append(i),r.forEach((t=>d(i,t)))):90===n&&a(i)&&s&&(c(i,g),t.target.append(i),r.forEach((t=>d(i,t)))),(e(i)||o(i))&&i.parentNode.classList.contains("square")&&s&&(l(i),t.target.append(i),r.forEach((t=>d(i,t))))}t.target.classList.remove("hover")},rotateShip:function(r){const o=r.target;if(e(o)&&!t){n=0,n=0===n?90:0;const e=s(o),r=u(o.parentNode.id,e);h(o.id,e,r,o)&&(o.style.transform=`rotate(${n}deg)`,o.classList.remove("vertical"),c(o,e),l(o),r.forEach((t=>d(o,t))),t="grid")}else"grid"===t&&"my-ships"===r.target.parentNode.parentNode.id?(n=0,n=0===n?90:0,o.style.transform=`rotate(${n}deg)`,t="my-ships"):(n=0===n?90:0,o.style.transform=`rotate(${n}deg)`)}}})();t.exports=o},907:(t,n,e)=>{const r=e(111),o=e(729),a=e(396),s=e(670),i=(()=>{const t=document.getElementById("cpu-text"),n=document.getElementById("player-text");function e(t,n){const e=["A","B","C","D","E","F","G","H","I","J"];return e[e.indexOf(t)+n]}function i(t){const n=t.split("");return[n.splice(1).join(""),n[0]]}return{placeComputerShips:function(t,n){const r=[];return n.forEach((n=>{const[a,s]=o.getRandomPlacement(r,n),i=Math.random()<.5;for(let o=0;o<n.length;o+=1)i?(t.placeShip(n,[a+o,s]),r.push([a+o,s]),document.body.querySelector(`#opponent-board #${s}${a+o}`).classList.add("highlight")):(t.placeShip(n,[a,e(s,o)]),r.push([a,e(s,o)]),document.body.querySelector(`#opponent-board #${e(s,o)}${a}`).classList.add("highlight"))})),r},takeTurnsAttacking:function(e,o,c,d,l,u){document.body.querySelectorAll("#opponent-board .square").forEach((p=>{p.addEventListener("click",(p=>{const h=i(p.target.id);!e.checkTurn()||s(d.successfulHits,h)||s(d.missedAttacks,h)||d.allShipsSunk(l)||o.allShipsSunk(u)||(function(t,e,o,s,c){const d=i(t.target.id),l=r.convertCoordinatesToIndex(d),u=s.board[l[0]][l[1]];e.makeAttack(o,s,d),a.playerAttackMessage(t.target.id,e),setTimeout((()=>{a.opponentResponse(s.wasHit,u.ship,o)}),1e3),setTimeout((()=>{a.updatePeg(s.lastAttack,s.wasHit,o),n.textContent="Your turn.",e.endTurn(),s.allShipsSunk(c)?a.displayEndGame("player"):o.startTurn()}),2e3)}(p,e,c,d,l),setTimeout((()=>{c.checkTurn()&&function(n,e,o,s){n.makeAttack(e,o),a.playerAttackMessage(o.lastAttack,n);const i=r.convertCoordinatesToIndex(o.lastAttack),c=o.board[i[0]][i[1]];setTimeout((()=>{a.opponentResponse(o.wasHit,c.ship,e)}),1e3),setTimeout((()=>{a.updatePeg(o.lastAttack,o.wasHit,e),t.textContent="Your turn.",n.endTurn(),o.allShipsSunk(s)?a.displayEndGame("computer"):e.startTurn()}),2e3)}(c,e,o,u)}),4e3))}))}))}}})();t.exports=i},974:(t,n,e)=>{const r=e(670),o=e(111);t.exports=()=>{const t=[];for(let n=1;n<11;n+=1){const e=[];"ABCDEFGHIJ".split("").forEach((t=>{e.push({coordinates:[n,t],ship:"none"})})),t.push(e)}return{board:t,lastAttack:"none",wasHit:!1,successfulHits:[],missedAttacks:[],placeShip(n,e){const[r,a]=o.convertCoordinatesToIndex(e);t[r][a].ship=n},receiveAttack(n){const[e,a]=o.convertCoordinatesToIndex(n);"none"!==t[e][a].ship?(t[e][a].ship.hit(),this.successfulHits.push(n),this.lastAttack=n,this.wasHit=!0):"none"===t[e][a].ship&&(r(this.missedAttacks,n)||(this.missedAttacks.push(n),this.lastAttack=n,this.wasHit=!1))},allShipsSunk:t=>t.every((t=>t.isSunk()))}}},729:(t,n,e)=>{const r=e(670),o=(()=>{const t=["A","B","C","D","E","F","G","H","I","J"];return{getRandomCoordinates:function(){return[Math.floor(10*Math.random())+1,t[Math.floor(10*Math.random())]]},getRandomPlacement:function n(e,o){const a=Math.floor(10*Math.random())+1,s=Math.floor(10*Math.random());return a+o.length>10||s+o.length>10||r(e,[a,t[s]])||function(n,e,o,a){const s=[];let i=!1;for(let n=0;n<e.length;n+=1)s.push([o+n,t[a]]),s.push([o,t[a+n]]);return s.forEach((t=>{r(n,t)&&(i=!0)})),i}(e,o,a,s)?n(e,o):[a,t[s]]},getUnusedCoordinates:function n(e,o){const a=Math.floor(10*Math.random())+1,s=t[Math.floor(10*Math.random())];return r(e,[a,s])||r(o,[a,s])?n(e,o):[a,s]}}})();t.exports=o},753:(t,n,e)=>{const r=e(729);t.exports=t=>({playerName:t,myTurn:!1,startTurn(){this.checkTurn()||(this.myTurn=!0)},endTurn(){this.checkTurn()&&(this.myTurn=!1)},checkTurn(){return this.myTurn},makeAttack(t,n,e=[]){if(this.checkTurn())if("computer"!==t.playerName&&0===e.length){const t=r.getUnusedCoordinates(n.successfulHits,n.missedAttacks);n.receiveAttack(t)}else n.receiveAttack(e)}})},880:t=>{t.exports=t=>({length:t,numHits:0,hit(){this.numHits+=1},isSunk(){return this.numHits===this.length}})}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return t[r](a,a.exports,e),a.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{"use strict";var t=e(379),n=e.n(t),r=e(795),o=e.n(r),a=e(569),s=e.n(a),i=e(565),c=e.n(i),d=e(216),l=e.n(d),u=e(589),p=e.n(u),h=e(890),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),n()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const f=e(880),m=e(974),b=e(753),v=e(396),y=e(907),x=e(712);(()=>{const t=b("player"),n=b("computer"),e=m(),r=m(),o=document.getElementById("my-board"),a=document.getElementById("opponent-board");v.createBoardGrid(o),v.createBoardGrid(a);const s=f(5),i=f(4),c=f(3),d=f(3),l=f(2),u=[s,i,c,d,l];e.placeShip(s,[4,"A"]),e.placeShip(s,[4,"B"]),e.placeShip(s,[4,"C"]),e.placeShip(s,[4,"D"]),e.placeShip(s,[4,"E"]),e.placeShip(i,[6,"E"]),e.placeShip(i,[7,"E"]),e.placeShip(i,[8,"E"]),e.placeShip(i,[9,"E"]),e.placeShip(c,[3,"H"]),e.placeShip(c,[3,"I"]),e.placeShip(c,[3,"J"]),e.placeShip(d,[3,"G"]),e.placeShip(d,[4,"G"]),e.placeShip(d,[5,"G"]),e.placeShip(l,[8,"I"]),e.placeShip(l,[8,"J"]);const p=[f(5),f(4),f(3),f(3),f(2)];y.placeComputerShips(r,p),t.startTurn(),y.takeTurnsAttacking(t,e,n,r,p,u);const h=document.querySelectorAll(".ship"),g=document.body.querySelectorAll("#my-board .square:not(.legend)");h.forEach((t=>{t.addEventListener("click",(t=>x.rotateShip(t))),t.addEventListener("dragstart",(t=>x.dragStart(t))),t.addEventListener("dragend",null)})),g.forEach((t=>{t.addEventListener("dragover",(t=>x.dragOver(t))),t.addEventListener("dragenter",(t=>x.dragEnter(t))),t.addEventListener("dragleave",(t=>x.dragLeave(t))),t.addEventListener("drop",(t=>x.dragDrop(t)))}))})()})()})();