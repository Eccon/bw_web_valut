!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1030)}({1030:function(e,r,t){"use strict";t.r(r);var n=t(489);document.addEventListener("DOMContentLoaded",(function(e){var r;s(),window.addEventListener("message",(function(e){e.origin&&""!==e.origin&&e.origin===a&&("stop"===e.data?i=!0:"start"===e.data&&i&&s())}),!1),r="ready",parent.postMessage("info|"+r,o)}));var o=null,a=null,i=!1,u=!1;function s(){if(u=!1,n.isSupported){var e=f("data");if(e)if(o=f("parent")){var r=document.createElement("a");r.href=o,a=r.origin;var t=f("v");if(t){try{parseInt(t);var s=(l=e,decodeURIComponent(Array.prototype.map.call(atob(l),(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""))),d=JSON.parse(s)}catch(p){return void c("Cannot parse data.")}var l;d.appId&&d.challenge&&d.keys&&d.keys.length?(i=!1,function e(r){if(i)return;n.sign(r.appId,r.challenge,r.keys,(function(t){t.errorCode?5!==t.errorCode?(c("U2F Error: "+t.errorCode),setTimeout((function(){e(r)}),1e3)):e(r):function(e){if(u)return;var r=JSON.stringify(e);parent.postMessage("success|"+r,o),u=!0}(t)}),10)}(d)):c("Invalid data parameters.")}else c("No version.")}else c("No parent.");else c("No data.")}else c("U2F is not supported in this browser.")}function c(e){parent.postMessage("error|"+e,o)}function f(e){var r=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var t=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(r);return t?t[2]?decodeURIComponent(t[2].replace(/\+/g," ")):"":null}},489:function(e,r){e.exports=u2f}});
//# sourceMappingURL=u2f.cd3fdd91e1a63cf3ead5.js.map