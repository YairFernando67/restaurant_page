!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";var r,o=t(1);((r=o)&&r.__esModule?r:{default:r}).default.render()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t(2);var r,o=(r=function(){var e=document.createElement("p"),n=document.createElement("p"),t=document.createElement("p"),r=document.createElement("div"),o=document.createElement("div");return r.classList="review-container",o.classList="review",o.appendChild(n),o.insertBefore(e,n),o.appendChild(t),r.appendChild(o),e.textContent="The owners of David’s Brisket House in Brooklyn were probably wise to choose a different name for the new deli they opened in East Williamsburg late last year, even though the new place, Pastrami Masters, adopted its core menu from David’s.",n.textContent="When New Yorkers hear the word brisket these days, they tend to think of brick pits, stacks of cordwood, neon Shiner Beers signs, and Willie and Waylon singing in the background.",t.textContent="Those associations are relatively recent ones locally, dating to the renaissance of the smoked-meat sciences in Texas and the national fame of pit masters like Aaron Franklin in Austin.Before brisket was synonymous with barbecue, its meaning in the five boroughs was the one that you now encounter mainly around the Jewish holidays: a flat slab of beef breast cooked in a closed, humid environment for hours, at which point it not only falls apart unprovoked but also makes its own gravy.",r},{render:function(){console.log("Render HTML");var e=document.getElementById("content");e.classList.add("container");var n=document.createElement("h1");e.appendChild(r()),n.textContent="LA COZZA INFURIATA",e.insertBefore(n,document.querySelector(".review-container"))}});n.default=o},function(e,n,t){var r=t(3),o=t(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(r(o,a),o.locals?o.locals:{});e.exports=i},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],o=0;o<e.length;o++){var a=e[o],s=n.base?a[0]+n.base:a[0],u=t[s]||0,l="".concat(s," ").concat(u);t[s]=u+1;var d=c(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:l,updater:v(f,n),references:1}),r.push(l)}return r}function u(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function f(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function p(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(e,n){var t,r,o;if(n.singleton){var a=m++;t=h||(h=u(n)),r=f.bind(null,t,a,!1),o=f.bind(null,t,a,!0)}else t=u(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);i[o].references--}for(var a=s(e,n),u=0;u<t.length;u++){var l=c(t[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=a}}}},function(e,n,t){var r=t(5),o=t(6),a=t(7);n=r(!1);var i=o(a);n.push([e.i,"body {\r\n  padding: 1rem;\r\n  font-family: Raleway;\r\n}\r\n\r\n.container {\r\n  height: calc(100vh - 3rem);\r\n  width: 100%;\r\n  background-image: url("+i+");\r\n  background-position: bottom;\r\n  background-size: cover;\r\n}\r\n\r\nh1 {\r\n  color: #fff;\r\n  position: absolute;\r\n  top: 4%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  font-size: 2.5rem;\r\n  width: 30rem;\r\n  text-align: center;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  h1 {\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n\r\n.review-container {\r\n  width: 35rem;\r\n  margin: 0 auto;\r\n  padding-top: 4rem;\r\n  font-size: .9rem;\r\n}\r\n\r\n.review {\r\n  background-color: rgba(0,0,0,0.8);\r\n  padding: 1rem;\r\n}\r\n\r\n.review > p {\r\n  color: #fff;\r\n  text-align: justify;\r\n}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([o]).join("\n")}var i,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,n,t){"use strict";t.r(n),n.default=t.p+"a8b4c4f49bd44c9966b0b9c25370407b.jpg"}]);