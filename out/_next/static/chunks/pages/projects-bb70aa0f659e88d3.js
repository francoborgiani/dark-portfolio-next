(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{2711:function(e){e.exports=function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=(o(n(1)),n(6)),a=o(r),c=o(n(7)),s=o(n(8)),u=o(n(9)),d=o(n(10)),l=o(n(11)),f=o(n(14)),m=[],p=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(p=!0),p)return m=(0,l.default)(m,b),(0,d.default)(m,b.once),m},h=function(){m=(0,f.default)(),v()},g=function(){m.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},y=function(e){return!0===e||"mobile"===e&&u.default.mobile()||"phone"===e&&u.default.phone()||"tablet"===e&&u.default.tablet()||"function"==typeof e&&!0===e()},w=function(e){b=i(b,e),m=(0,f.default)();var t=document.all&&!window.atob;return y(b.disable)||t?g():(b.disableMutationObserver||s.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,(function(){v(!0)})):document.addEventListener(b.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,c.default)(v,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(v,b.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)((function(){(0,d.default)(m,b.once)}),b.throttleDelay)),b.disableMutationObserver||s.default.ready("[data-aos]",h),m)};e.exports={init:w,refresh:v,refreshHard:h}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,y=setTimeout(d,t),S?o(e):g}function a(e){var n=t-(e-w);return N?k(n,h-(e-O)):n}function s(e){var n=e-w;return void 0===w||n>=t||n<0||N&&e-O>=h}function d(){var e=j();return s(e)?l(e):void(y=setTimeout(d,a(e)))}function l(e){return y=void 0,E&&b?o(e):(b=v=void 0,g)}function f(){void 0!==y&&clearTimeout(y),O=0,b=w=v=y=void 0}function m(){return void 0===y?g:l(j())}function p(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===y)return r(w);if(N)return y=setTimeout(d,t),o(w)}return void 0===y&&(y=setTimeout(d,t)),g}var b,v,h,g,y,w,O=0,S=!1,N=!1,E=!0;if("function"!=typeof e)throw new TypeError(u);return t=c(t)||0,i(n)&&(S=!!n.leading,h=(N="maxWait"in n)?x(c(n.maxWait)||0,t):h,E="trailing"in n?!!n.trailing:E),p.cancel=f,p.flush=m,p}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(u);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":s(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":s(e))||r(e)&&w.call(e)==l}function c(e){if("number"==typeof e)return e;if(a(e))return d;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=p.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):m.test(e)?d:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="Expected a function",d=NaN,l="[object Symbol]",f=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,h="object"==("undefined"==typeof t?"undefined":s(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,y=h||g||Function("return this")(),w=Object.prototype.toString,x=Math.max,k=Math.min,j=function(){return y.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,y=setTimeout(d,t),S?i(e):g}function c(e){var n=t-(e-j);return N?x(n,h-(e-O)):n}function u(e){var n=e-j;return void 0===j||n>=t||n<0||N&&e-O>=h}function d(){var e=k();return u(e)?l(e):void(y=setTimeout(d,c(e)))}function l(e){return y=void 0,E&&b?i(e):(b=v=void 0,g)}function f(){void 0!==y&&clearTimeout(y),O=0,b=j=v=y=void 0}function m(){return void 0===y?g:l(k())}function p(){var e=k(),n=u(e);if(b=arguments,v=this,j=e,n){if(void 0===y)return r(j);if(N)return y=setTimeout(d,t),i(j)}return void 0===y&&(y=setTimeout(d,t)),g}var b,v,h,g,y,j,O=0,S=!1,N=!1,E=!0;if("function"!=typeof e)throw new TypeError(s);return t=a(t)||0,o(n)&&(S=!!n.leading,h=(N="maxWait"in n)?w(a(n.maxWait)||0,t):h,E="trailing"in n?!!n.trailing:E),p.cancel=f,p.flush=m,p}function o(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||i(e)&&y.call(e)==d}function a(e){if("number"==typeof e)return e;if(r(e))return u;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||p.test(e)?b(e.slice(2),n?2:8):f.test(e)?u:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",u=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,p=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,h="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,g=v||h||Function("return this")(),y=Object.prototype.toString,w=Math.max,x=Math.min,k=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0;for(t=0;t<e.length;t+=1){if((o=e[t]).dataset&&o.dataset.aos)return!0;if(o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=new(o())(a);c=t,i.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(o)))return c()}))}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!c.test(e)&&!s.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach((function(e,r){n(e,i+o,t)}))};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(12)),r=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,i.default)(e.node,t.offset)})),e};t.default=r},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(13)),r=function(e,t){var n=0,o=0,r=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,i.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=r/2;break;case"bottom-center":n+=r/2+e.offsetHeight;break;case"center-center":n+=r/2+e.offsetHeight/2;break;case"top-top":n+=r;break;case"bottom-top":n+=e.offsetHeight+r;break;case"center-top":n+=e.offsetHeight/2+r}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])},94:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(7449)}])},6124:function(e,t,n){"use strict";var o=n(5893),i=n(1664);t.Z=function(e){var t=e.darkmode;return(0,o.jsxs)("footer",{className:"duration-500 fixed bg-opacity-50 backdrop-blur-sm\n     left-0 right-0 bottom-0 py-4 font-semibold text-sm\n     ".concat(t?"text-white bg-gray-800":"text-gray-900 bg-white"),children:["Copyright 2022 @ All rights reserved ",(0,o.jsx)(i.default,{href:"https://www.linkedin.com/in/francoborgiani/",children:(0,o.jsx)("a",{children:(0,o.jsx)("span",{className:"".concat(t?"text-blue-300":"text-purple-600"),children:"Franco Borgiani"})})})]})}},5073:function(e,t,n){"use strict";var o=n(5893),i=n(7294),r=n(2711),a=n.n(r);n(8279);t.Z=function(e){var t=e.children;return(0,i.useEffect)((function(){a().init({duration:500})}),[]),(0,o.jsx)("section",{className:"grid h-screen max-w-6xl px-6 mx-auto place-content-center ",children:(0,o.jsx)("div",{"data-aos":"fade-up",style:{width:"100%"},children:t})})}},7449:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var o=n(5893),i=n(7294),r=n(9008),a=n(8193),c=n(306),s=n(5073),u=n(6124),d=n(2711),l=n.n(d),f=(n(8279),function(e){var t=e.title,n=e.imageRoute,r=e.technologies,c=e.darkmode;(0,i.useEffect)((function(){l().init({duration:500})}),[]);var s="w-10 h-10 mx-10 ".concat(c?"text-white hover:text-blue-400":"text-gray-800 hover:text-purple-700","\n    ");return(0,o.jsxs)("div",{"data-aos":"fade-up",className:"flex flex-col items-center w-full px-3 py-6 mb-3 \n    text-center rounded-lg ".concat(c?"bg-gray-900":"bg-gray-200"),children:[(0,o.jsx)("figure",{children:(0,o.jsx)("img",{className:"w-full mx-auto",src:n,alt:"PROJECT IMAGE"})}),(0,o.jsx)("h3",{className:" ".concat(c?"text-white":"text-gray-800"),children:t}),(0,o.jsx)("div",{className:"rounded-lg px-2 w-auto font-bold h-6 text-sm text-center text-white \n        ".concat(c?"bg-blue-400":"bg-purple-700"),children:r}),(0,o.jsxs)("div",{className:"\n        duration-500\n        flex\n        justify-between\n        w-auto>\n        mt-4\n        \n      ",children:[(0,o.jsx)("a",{href:"#",children:(0,o.jsx)(a.RrF,{className:s})}),(0,o.jsx)("a",{href:"#",children:(0,o.jsx)(a.AJi,{className:s})})]})]})}),m=function(e){var t=e.children;return(0,o.jsx)("div",{className:"grid gap-4 ProjectCardContainer py-11",children:t})},p=function(){var e=(0,i.useContext)(c.Z).darkmode;return(0,o.jsxs)("div",{className:"w-full h-full max-w-6xl mx-auto text-2xl text-center text-pink-100 md:px-8",children:[(0,o.jsxs)(r.default,{children:[(0,o.jsx)("title",{children:"Projects | Franco Borgiani Fullstack Developer"}),(0,o.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,o.jsx)("link",{rel:"icon",type:"favicon",href:"/favicon-32x32.png",sizes:"16x16"})]}),(0,o.jsx)(s.Z,{children:(0,o.jsx)("div",{className:"flex flex-col align-items-center",children:(0,o.jsxs)("a",{href:"#projects",className:"".concat(e?"text-blue-500":"text-purple-700"),children:[(0,o.jsx)("h1",{className:"max-w-6xl md:text-4xl  ".concat(e?"text-white":"text-black"),children:"Watch my personal projects"}),(0,o.jsx)(a.Duv,{className:"w-10 h-10 m-auto mt-2 text-center"})]})})}),(0,o.jsx)("section",{className:"grid w-full max-w-6xl min-h-screen px-6 mx-auto md:px-0 place-items-center",id:"projects",children:(0,o.jsx)("div",{"data-aos":"fade-up",className:"w-full",children:(0,o.jsxs)(m,{children:[(0,o.jsx)(f,{title:"PROJECT",technologies:"JavaScript, React, SASS, Node",darkmode:e,imageRoute:"/download.png"}),(0,o.jsx)(f,{title:"PROJECT",technologies:"JavaScript, React, SASS, Node",darkmode:e,imageRoute:"/download.png"}),(0,o.jsx)(f,{title:"PROJECT",technologies:"JavaScript, React, SASS, Node",darkmode:e,imageRoute:"/download.png"}),(0,o.jsx)(f,{title:"PROJECT",technologies:"JavaScript, React, SASS, Node",darkmode:e,imageRoute:"/download.png"}),(0,o.jsx)(f,{title:"PROJECT",technologies:"JavaScript, React, SASS, Node",darkmode:e,imageRoute:"/download.png"}),(0,o.jsx)(f,{title:"PROJECT",technologies:"JavaScript, React, SASS, Node",darkmode:e,imageRoute:"/download.png"})]})})}),(0,o.jsx)(u.Z,{darkmode:e})]})}},8279:function(){},9008:function(e,t,n){e.exports=n(5443)}},function(e){e.O(0,[617,124,774,888,179],(function(){return t=94,e(e.s=t);var t}));var t=e.O();_N_E=t}]);