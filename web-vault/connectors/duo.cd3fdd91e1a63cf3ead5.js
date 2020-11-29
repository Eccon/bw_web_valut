!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1031)}({1031:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(447);function r(e){var t=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}n(1032),document.addEventListener("DOMContentLoaded",(function(e){var t=document.createElement("iframe");t.setAttribute("id","duo_iframe"),a(),document.body.appendChild(t);var n=r("host"),i=r("request");function a(){t.style.height=window.innerHeight+"px"}o.init({iframe:"duo_iframe",host:n,sig_request:i,submit_callback:function(e){!function(e){try{window.invokeCSharpAction(e)}catch(t){}}(e.elements.sig_response.value)}}),window.onresize=a}))},1032:function(e,t,n){},447:function(e,t,n){var o,r,i;r=[],void 0===(i="function"==typeof(o=function(){var e,t,n,o,r,i,a,u,s=/^(?:AUTH|ENROLL)+\|[A-Za-z0-9\+\/=]+\|[A-Za-z0-9\+\/=]+$/,d=/^ERR\|[\w\s\.\(\)]+$/,c=/^DUO_OPEN_WINDOW\|/,f=["duo.com","duosecurity.com","duomobile.s3-us-west-1.amazonaws.com"];function m(){e="duo_iframe",t="",n="sig_response",o=void 0,r=void 0,i=void 0,a=void 0,u=void 0}function l(e,t){throw new Error("Duo Web SDK error: "+e+(t?"\nSee "+t+" for more information":""))}function p(e,t){return"dataset"in e?e.dataset[t]:e.getAttribute("data-"+t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase())}function h(e,t,n,o){"addEventListener"in window?e.addEventListener(t,o,!1):e.attachEvent(n,o)}function g(e,t,n,o){"removeEventListener"in window?e.removeEventListener(t,o,!1):e.detachEvent(n,o)}function w(e){h(document,"DOMContentLoaded","onreadystatechange",e)}function v(e){g(document,"DOMContentLoaded","onreadystatechange",e)}function b(e){if(e){0===e.indexOf("ERR|")&&l(e.split("|")[1]),-1!==e.indexOf(":")&&2===e.split(":").length||l("Duo was given a bad token.  This might indicate a configuration problem with one of Duo's client libraries.","https://www.duosecurity.com/docs/duoweb#first-steps");var t=e.split(":");return r=t[0],i=t[1],{sigRequest:e,duoSig:t[0],appSig:t[1]}}}function _(){if(!(a=document.getElementById(e)))throw new Error('This page does not contain an iframe for Duo to use.Add an element like <iframe id="duo_iframe"></iframe> to this page.  See https://www.duosecurity.com/docs/duoweb#3.-show-the-iframe for more information.');O(),v(_)}function y(e){return Boolean(e.origin==="https://"+o&&"string"==typeof e.data&&(e.data.match(s)||e.data.match(d)||e.data.match(c)))}function E(e){if(y(e))if(e.data.match(c)){var t=e.data.substring("DUO_OPEN_WINDOW|".length);(function(e){if(!e)return!1;var t=document.createElement("a");if(t.href=e,"duotrustedendpoints:"===t.protocol)return!0;if("https:"!==t.protocol)return!1;for(var n=0;n<f.length;n++)if(t.hostname.endsWith("."+f[n])||t.hostname===f[n])return!0;return!1})(t)&&window.open(t,"_self")}else D(e.data),g(window,"message","onmessage",E)}function O(){o||(o=p(a,"host"))||l("No API hostname is given for Duo to use.  Be sure to pass a `host` parameter to Duo.init, or through the `data-host` attribute on the iframe element.","https://www.duosecurity.com/docs/duoweb#3.-show-the-iframe"),r&&i||(b(p(a,"sigRequest")),r&&i||l("No valid signed request is given.  Be sure to give the `sig_request` parameter to Duo.init, or use the `data-sig-request` attribute on the iframe element.","https://www.duosecurity.com/docs/duoweb#3.-show-the-iframe")),""===t&&(t=p(a,"postAction")||t),"sig_response"===n&&(n=p(a,"postArgument")||n),a.src=["https://",o,"/frame/web/v1/auth?tx=",r,"&parent=",encodeURIComponent(document.location.href),"&v=2.7"].join(""),h(window,"message","onmessage",E)}function D(e){var o=document.createElement("input");o.type="hidden",o.name=n,o.value=e+":"+i;var r=document.getElementById("duo_form");r||(r=document.createElement("form"),a.parentElement.insertBefore(r,a.nextSibling)),r.method="POST",r.action=t,r.appendChild(o),"function"==typeof u?u.call(null,r):r.submit()}return m(),{init:function r(i){m(),i&&(i.host&&(o=i.host),i.sig_request&&b(i.sig_request),i.post_action&&(t=i.post_action),i.post_argument&&(n=i.post_argument),i.iframe&&(i.iframe.tagName?a=i.iframe:"string"==typeof i.iframe&&(e=i.iframe)),"function"==typeof i.submit_callback&&(u=i.submit_callback)),a||(a=document.getElementById(e))?O():w(_),v(r)},_onReady:w,_parseSigRequest:b,_isDuoMessage:y,_doPostBack:D}})?o.apply(t,r):o)||(e.exports=i)}});
//# sourceMappingURL=duo.cd3fdd91e1a63cf3ead5.js.map