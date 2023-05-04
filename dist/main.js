(()=>{"use strict";var n={890:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,':root {\n    --grid-bg: rgb(32, 119, 160);\n    --grid-outline: rgb(34, 190, 211);\n    --grid-text: rgb(98, 211, 226);\n    --blue: rgb(57, 101, 133);\n    --blue-border: rgba(34, 73, 104, 0.85);\n    --border: 3px solid var(--blue-border);\n    --font-size: 1.5rem;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.container {\n    height: 100vh;\n    width: 100vw;\n    margin: 0 auto;\n}\n\n.content {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 0.5fr) 5fr;\n}\n\nh1,\n.info-container,\n.player-side,\n.opponent-side,\n.message-box {\n    display: flex;\n    align-items: center;\n}\n\nh1,\n.info-container,\n.player-side,\n.opponent-side {\n    justify-content: center;\n}\n\nh1 {\n    text-align: center;\n    grid-column: 1 / span 2;\n    grid-row: 1;\n}\n\n.info-container {\n    grid-column: 1 / span 2;\n    grid-row: 2;\n    font-size: var(--font-size);\n}\n\n.player-side {\n    grid-column: 1;\n    grid-row: 3;\n}\n\n.opponent-side {\n    grid-column: 2;\n    grid-row: 3;\n}\n\n.player-side,\n.opponent-side {\n    flex-direction: column;\n    gap: 3rem;\n}\n\n.message-box {\n    height: 5rem;\n    width: 85%;\n    border: var(--border);\n}\n\n.player-name {\n    display: inline-block;\n    text-indent: 4rem;\n    font-size: var(--font-size);\n}\n\n/* Styles for Gameboards*/\n.board,\n.left-panel {\n    display: flex;\n    align-items: center;\n}\n\n.main-grid {\n    height: 500px;\n    width: 500px;\n    background: var(--grid-bg);\n    border: var(--border);\n}\n\n.left-panel,\n.right-panel {\n    height: 480px;\n    width: 170px;\n    justify-content: center;\n    border: var(--border);\n    background: var(--blue);\n}\n\n/* Styles the ships (left panel) */\n.left-panel {\n    border-right: none;\n    border-radius: 30% 0 0 30%;\n    justify-content: space-evenly;\n}\n\n.left-ships,\n.right-ships {\n    height: 80%;\n    width: 35%;\n}\n\n.left-ships > *,\n.right-ships > * {\n    border: 2px solid;\n    margin: 1rem 0;\n    width: 100%;\n}\n\n#my-ships > .left-ships > *,\n#my-ships > .right-ships > * {\n    cursor: move;\n}\n\n.carrier {\n    height: 60%;\n}\n\n.battleship {\n    height: 40%;\n}\n\n.destroyer,\n.submarine {\n    height: 30%;\n}\n\n.patrol {\n    height: 15%;\n}\n\n/* Styles the pegs (right panel)*/\n.right-panel {\n    border-left: none;\n    border-radius: 0 30% 30% 0;\n}\n\n.red-pegs {\n    height: 35%;\n    width: 100%;\n    border-bottom: var(--border);\n    border-radius: 0% 30% 0% 0% / 10% 80% 0% 0%;\n    background: rgb(226, 12, 12);\n}\n\n.white-pegs {\n    height: 65%;\n    width: 100%;\n    border-radius: 0% 0% 30% 0% / 0% 30% 45% 50%;\n    background: white;\n}\n\n/* Styles DOM-created grid*/\n.row,\n.square {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.row {\n    height: calc(100% / 11);\n    width: 100%;\n}\n\n/* Adds bottom border to all but last row (row 10)*/\n.row:not(:nth-last-child(-n+1)) {\n    border-bottom: 3px double var(--grid-outline);\n}\n\n.square {\n    height: 100%;\n    width: calc(100% / 11);\n    font-weight: 600;\n    font-size: var(--font-size);\n    color: var(--grid-text);\n}\n\n/* Adds right border to all but last col (col "J")  */\n.square:not(:nth-child(11n)) {\n    border-right: 3px double var(--grid-outline);\n}\n\n.peg-hole {\n    height: 40%;\n    width: 40%;\n    border-radius: 50%;\n    border: 5px solid var(--grid-outline);\n}\n\n/* Styles drag/drop ships */\n.over {\n    background: burlywood;\n}',""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var d=n[s],c=r.base?d[0]+r.base:d[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=t(p),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=o(h,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var d=r(n,o),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{const n=function(n){for(let e=0;e<11;e+=1){const t=document.createElement("div");t.classList.add("row"),n.appendChild(t),"ZABCDEFGHIJ".split("").forEach((n=>{const r=document.createElement("div");if(r.classList.add("square"),r.setAttribute("id",`${n}${e}`),e>0&&"Z"!==n?r.setAttribute("id",`${n}${e}`):r.classList.add("legend"),0===e&&"Z"!==n&&(r.textContent=`${n}`),0!==e&&"Z"===n&&(r.textContent=`${e}`),e>0&&"Z"!==n){const t=document.createElement("div");t.classList.add("peg-hole"),t.setAttribute("id",`${n}${e}`),r.appendChild(t)}t.appendChild(r)}))}};var e=t(379),r=t.n(e),o=t(795),i=t.n(o),a=t(569),s=t.n(a),d=t(565),c=t.n(d),l=t(216),p=t.n(l),u=t(589),h=t.n(u),f=t(890),g={};g.styleTagTransform=h(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),r()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals,(()=>{const e=document.getElementById("my-board"),t=document.getElementById("opponent-board");n(e),n(t)})()})()})();