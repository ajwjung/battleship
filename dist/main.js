(()=>{var n={890:(n,t,e)=>{"use strict";e.d(t,{Z:()=>i});var r=e(81),o=e.n(r),a=e(645),s=e.n(a)()(o());s.push([n.id,':root {\n    --grid-bg: rgb(32, 119, 160);\n    --grid-outline: rgb(34, 190, 211);\n    --grid-text: rgb(98, 211, 226);\n    --blue: rgb(57, 101, 133);\n    --blue-border: rgba(34, 73, 104, 0.85);\n    --border: 3px solid var(--blue-border);\n    --font-size: 1.5rem;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.container {\n    height: 100vh;\n    width: 100vw;\n    margin: 0 auto;\n}\n\n.content {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 0.5fr) 5fr;\n}\n\nh1,\n.info-container,\n.player-side,\n.opponent-side,\n.message-box {\n    display: flex;\n    align-items: center;\n}\n\nh1,\n.info-container,\n.player-side,\n.opponent-side {\n    justify-content: center;\n}\n\nh1 {\n    text-align: center;\n    grid-column: 1 / span 2;\n    grid-row: 1;\n}\n\n.info-container {\n    grid-column: 1 / span 2;\n    grid-row: 2;\n    font-size: var(--font-size);\n}\n\n.player-side {\n    grid-column: 1;\n    grid-row: 3;\n}\n\n.opponent-side {\n    grid-column: 2;\n    grid-row: 3;\n}\n\n.player-side,\n.opponent-side {\n    flex-direction: column;\n    gap: 3rem;\n}\n\n.message-box {\n    height: 5rem;\n    width: 85%;\n    border: var(--border);\n}\n\n.player-name {\n    display: inline-block;\n    text-indent: 4rem;\n    font-size: var(--font-size);\n}\n\n#player-text,\n#cpu-text {\n    margin-left: 1rem;\n    font-size: var(--font-size);\n}\n\n/* Styles for Gameboards*/\n.board,\n.left-panel,\n.left-ships,\n.right-ships {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.main-grid {\n    height: 500px;\n    width: 500px;\n    background: var(--grid-bg);\n    border: var(--border);\n}\n\n.peg-hole {\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    border: 5px solid var(--grid-outline);\n    position: absolute;\n    z-index: 10;\n}\n\n.white-miss {\n    border-color: white;\n    background: white;\n}\n\n.red-hit {\n    border-color: red;\n    background: red;\n}\n\n/* Styles the ships (left panel) */\n.left-panel {\n    border-right: none;\n    border-radius: 30% 0 0 30%;\n    justify-content: space-evenly;\n}\n\n.left-ships,\n.right-ships {\n    flex-direction: column;\n    height: 100%;\n    width: 35%;\n}\n\n.left-ships > *,\n.right-ships > * {\n    border: 2px solid;\n    margin: 1rem 0;\n}\n\n#my-ships > .left-ships > *,\n#my-ships > .right-ships > * {\n    cursor: pointer;\n}\n\n/* Align ships individually based on orientation */\n.horizontal {\n    position: absolute;\n}\n\n.vertical {\n    align-self: flex-start;\n    position: absolute;\n}\n\n.carrier {\n    height: 223px;\n    width: 45px;\n    background: red;\n}\n\n.battleship {\n    height: 178px;\n    width: 45px;\n    background: purple;\n}\n\n.destroyer,\n.submarine {\n    height: 133px;\n    width: 45px;\n}\n\n.destroyer {\n    background: orange;\n}\n\n.submarine {\n    background: khaki;\n}\n\n.patrol {\n    height: 88px;\n    width: 45px;\n    background: blue;\n}\n\n.left-panel,\n.right-panel {\n    height: 480px;\n    width: 170px;\n    border: var(--border);\n    background: var(--blue);\n}\n\n/* Highlight CPU ships */\n.highlight {\n    background: greenyellow;\n}\n\n.hover {\n    background: gray;\n}\n\n/* Styles the pegs (right panel)*/\n.right-panel {\n    border-left: none;\n    border-radius: 0 30% 30% 0;\n}\n\n.red-pegs {\n    height: 35%;\n    width: 100%;\n    border-bottom: var(--border);\n    border-radius: 0% 30% 0% 0% / 10% 80% 0% 0%;\n    background: rgb(226, 12, 12);\n}\n\n.white-pegs {\n    height: 65%;\n    width: 100%;\n    border-radius: 0% 0% 30% 0% / 0% 30% 45% 50%;\n    background: white;\n}\n\n/* Styles DOM-created grid*/\n.row,\n.square {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.row {\n    height: calc(100% / 11);\n    width: 100%;\n}\n\n/* Adds bottom border to all but last row (row 10)*/\n.row:not(:nth-last-child(-n+1)) {\n    border-bottom: 3px double var(--grid-outline);\n}\n\n.square {\n    height: 100%;\n    width: calc(100% / 11);\n    font-weight: 600;\n    font-size: var(--font-size);\n    color: var(--grid-text);\n    position: relative;\n}\n\n/* Adds right border to all but last col (col "J")  */\n.square:not(:nth-child(11n)) {\n    border-right: 3px double var(--grid-outline);\n}',""]);const i=s},645:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},s=[],i=0;i<n.length;i++){var c=n[i],d=r.base?c[0]+r.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=e(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var g=o(h,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:g,references:1})}s.push(u)}return s}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var s=0;s<a.length;s++){var i=e(a[s]);t[i].references--}for(var c=r(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:n=>{"use strict";var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},670:n=>{n.exports=function(n,t){for(let e=0;e<n.length;e+=1)if(t[0]===n[e][0]&&t[1]===n[e][1])return!0;return!1}},111:n=>{const t=["A","B","C","D","E","F","G","H","I","J"],e={convertCoordinatesToIndex:function(n){const[e,r]=n;return[e-1,t.indexOf(r)]}};n.exports=e},396:n=>{const t=(()=>{const n=document.getElementById("player-text"),t=document.getElementById("cpu-text");return{createBoardGrid:function(n){for(let t=0;t<11;t+=1){const e=document.createElement("div");e.classList.add("row"),n.appendChild(e),"ZABCDEFGHIJ".split("").forEach((n=>{const r=document.createElement("div");if(r.classList.add("square"),r.setAttribute("id",`${n}${t}`),t>0&&"Z"!==n?r.setAttribute("id",`${n}${t}`):r.classList.add("legend"),0===t&&"Z"!==n&&(r.textContent=`${n}`),0!==t&&"Z"===n&&(r.textContent=`${t}`),t>0&&"Z"!==n){const e=document.createElement("div");e.classList.add("peg-hole"),e.setAttribute("id",`${n}${t}`),r.appendChild(e)}e.appendChild(r)}))}},playerAttackMessage:function(e,r){if("computer"===r.playerName){const n=`${e[1]}${e[0]}`;t.textContent=n}else n.textContent=e},opponentResponse:function(e,r,o){const a="computer"!==o.playerName?n:t;"none"!==r?e&&r.isSunk()?a.textContent="Hit, sunk!":e&&(a.textContent="Hit!"):a.textContent="Miss"},updatePeg:function(n,t,e){const r=`${n[1]}${n[0]}`,o="computer"!==e.playerName?document.body.querySelector(`#my-board #${r} > .peg-hole`):document.body.querySelector(`#opponent-board #${r} > .peg-hole`);t?o.classList.add("red-hit"):o.classList.add("white-miss")},displayEndGame:function(e){"computer"===e?(n.textContent="Congrats, you win!",t.textContent=":)"):(t.textContent="Congrats, you beat me!",n.textContent=":)")}}})();n.exports=t},907:(n,t,e)=>{const r=e(111),o=e(729),a=e(396),s=e(670),i=(()=>{const n=document.getElementById("cpu-text"),t=document.getElementById("player-text");function e(n,t){const e=["A","B","C","D","E","F","G","H","I","J"];return e[e.indexOf(n)+t]}function i(n){const t=n.split("");return[t.splice(1).join(""),t[0]]}return{placeComputerShips:function(n,t){const r=[];return t.forEach((t=>{const[a,s]=o.getRandomPlacement(r,t),i=Math.random()<.5;for(let o=0;o<t.length;o+=1)i?(n.placeShip(t,[a+o,s]),r.push([a+o,s]),document.body.querySelector(`#opponent-board #${s}${a+o}`).classList.add("highlight")):(n.placeShip(t,[a,e(s,o)]),r.push([a,e(s,o)]),document.body.querySelector(`#opponent-board #${e(s,o)}${a}`).classList.add("highlight"))})),r},takeTurnsAttacking:function(e,o,c,d,l,u){document.body.querySelectorAll("#opponent-board .square").forEach((p=>{p.addEventListener("click",(p=>{const h=i(p.target.id);!e.checkTurn()||s(d.successfulHits,h)||s(d.missedAttacks,h)||d.allShipsSunk(l)||o.allShipsSunk(u)||(function(n,e,o,s,c){const d=i(n.target.id),l=r.convertCoordinatesToIndex(d),u=s.board[l[0]][l[1]];e.makeAttack(o,s,d),a.playerAttackMessage(n.target.id,e),setTimeout((()=>{a.opponentResponse(s.wasHit,u.ship,o)}),1e3),setTimeout((()=>{a.updatePeg(s.lastAttack,s.wasHit,o),t.textContent="Your turn.",e.endTurn(),s.allShipsSunk(c)?a.displayEndGame("player"):o.startTurn()}),2e3)}(p,e,c,d,l),setTimeout((()=>{c.checkTurn()&&function(t,e,o,s){t.makeAttack(e,o),a.playerAttackMessage(o.lastAttack,t);const i=r.convertCoordinatesToIndex(o.lastAttack),c=o.board[i[0]][i[1]];setTimeout((()=>{a.opponentResponse(o.wasHit,c.ship,e)}),1e3),setTimeout((()=>{a.updatePeg(o.lastAttack,o.wasHit,e),n.textContent="Your turn.",t.endTurn(),o.allShipsSunk(s)?a.displayEndGame("computer"):e.startTurn()}),2e3)}(c,e,o,u)}),4e3))}))}))}}})();n.exports=i},974:(n,t,e)=>{const r=e(670),o=e(111);n.exports=()=>{const n=[];for(let t=1;t<11;t+=1){const e=[];"ABCDEFGHIJ".split("").forEach((n=>{e.push({coordinates:[t,n],ship:"none"})})),n.push(e)}return{board:n,lastAttack:"none",wasHit:!1,successfulHits:[],missedAttacks:[],placeShip(t,e){const[r,a]=o.convertCoordinatesToIndex(e);n[r][a].ship=t},receiveAttack(t){const[e,a]=o.convertCoordinatesToIndex(t);"none"!==n[e][a].ship?(n[e][a].ship.hit(),this.successfulHits.push(t),this.lastAttack=t,this.wasHit=!0):"none"===n[e][a].ship&&(r(this.missedAttacks,t)||(this.missedAttacks.push(t),this.lastAttack=t,this.wasHit=!1))},allShipsSunk:n=>n.every((n=>n.isSunk()))}}},729:(n,t,e)=>{const r=e(670),o=(()=>{const n=["A","B","C","D","E","F","G","H","I","J"];return{getRandomCoordinates:function(){return[Math.floor(10*Math.random())+1,n[Math.floor(10*Math.random())]]},getRandomPlacement:function t(e,o){const a=Math.floor(10*Math.random())+1,s=Math.floor(10*Math.random());return a+o.length>10||s+o.length>10||r(e,[a,n[s]])||function(t,e,o,a){const s=[];let i=!1;for(let t=0;t<e.length;t+=1)s.push([o+t,n[a]]),s.push([o,n[a+t]]);return s.forEach((n=>{r(t,n)&&(i=!0)})),i}(e,o,a,s)?t(e,o):[a,n[s]]},getUnusedCoordinates:function t(e,o){const a=Math.floor(10*Math.random())+1,s=n[Math.floor(10*Math.random())];return r(e,[a,s])||r(o,[a,s])?t(e,o):[a,s]}}})();n.exports=o},753:(n,t,e)=>{const r=e(729);n.exports=n=>({playerName:n,myTurn:!1,startTurn(){this.checkTurn()||(this.myTurn=!0)},endTurn(){this.checkTurn()&&(this.myTurn=!1)},checkTurn(){return this.myTurn},makeAttack(n,t,e=[]){if(this.checkTurn())if("computer"!==n.playerName&&0===e.length){const n=r.getUnusedCoordinates(t.successfulHits,t.missedAttacks);t.receiveAttack(n)}else t.receiveAttack(e)}})},880:n=>{n.exports=n=>({length:n,numHits:0,hit(){this.numHits+=1},isSunk(){return this.numHits===this.length}})}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{"use strict";e(111);var n=e(379),t=e.n(n),r=e(795),o=e.n(r),a=e(569),s=e.n(a),i=e(565),c=e.n(i),d=e(216),l=e.n(d),u=e(589),p=e.n(u),h=e(890),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),t()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const f=e(880),m=e(974),b=e(753),v=e(396),y=e(907);(()=>{const n=b("player"),t=b("computer"),e=m(),r=m(),o=document.getElementById("my-board"),a=document.getElementById("opponent-board");v.createBoardGrid(o),v.createBoardGrid(a);const s=f(5),i=f(4),c=f(3),d=f(3),l=f(2),u=[s,i,c,d,l];e.placeShip(s,[4,"A"]),e.placeShip(s,[4,"B"]),e.placeShip(s,[4,"C"]),e.placeShip(s,[4,"D"]),e.placeShip(s,[4,"E"]),e.placeShip(i,[6,"E"]),e.placeShip(i,[7,"E"]),e.placeShip(i,[8,"E"]),e.placeShip(i,[9,"E"]),e.placeShip(c,[3,"H"]),e.placeShip(c,[3,"I"]),e.placeShip(c,[3,"J"]),e.placeShip(d,[3,"G"]),e.placeShip(d,[4,"G"]),e.placeShip(d,[5,"G"]),e.placeShip(l,[8,"I"]),e.placeShip(l,[8,"J"]);const p=[f(5),f(4),f(3),f(3),f(2)];y.placeComputerShips(r,p),n.startTurn(),y.takeTurnsAttacking(n,e,t,r,p,u);const h=document.querySelectorAll(".ship"),g=document.body.querySelectorAll("#my-board .square:not(.legend)");let x=0;h.forEach((n=>{n.addEventListener("click",(n=>function(n){x=0===x?90:0,n.target.style.transform=`rotate(${x}deg)`}(n))),n.addEventListener("dragstart",(n=>function(n){n.dataTransfer.clearData(),n.dataTransfer.setData("text",n.target.classList[1])}(n))),n.addEventListener("dragend",null)})),g.forEach((n=>{n.addEventListener("dragover",(n=>function(n){n.preventDefault()}(n))),n.addEventListener("dragenter",(n=>function(n){n.preventDefault(),n.target.classList.contains("square")&&n.target.classList.add("hover")}(n))),n.addEventListener("dragleave",(n=>function(n){n.target.classList.contains("square")&&n.target.classList.remove("hover")}(n))),n.addEventListener("drop",(n=>function(n){const t=n.dataTransfer.getData("text"),e=document.querySelector(`.ship.${t}`);if(n.target.classList.contains("square")){if(n.target.appendChild(e),n.target.classList.remove("hover"),90===x){e.classList.contains("vertical")&&e.classList.remove("vertical"),e.classList.add("horizontal");const n=22*((e.getBoundingClientRect().width+2)/45-1);e.style.left=`${n}px`}else e.classList.contains("horizontal")&&e.classList.remove("horizontal"),e.classList.add("vertical");n.target.appendChild(e),n.target.classList.remove("hover"),x=0}}(n)))}))})()})()})();