parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function r(r){if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(r=e(r))){var t=0,n=function(){};return{s:n,n:function(){return t>=r.length?{done:!0}:{done:!1,value:r[t++]}},e:function(r){throw r},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,a=!0,u=!1;return{s:function(){o=r[Symbol.iterator]()},n:function(){var r=o.next();return a=r.done,r},e:function(r){u=!0,i=r},f:function(){try{a||null==o.return||o.return()}finally{if(u)throw i}}}}function t(r){return i(r)||o(r)||e(r)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(r,t){if(r){if("string"==typeof r)return a(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(r,t):void 0}}function o(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function i(r){if(Array.isArray(r))return a(r)}function a(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function u(r){for(var n=String(r).split(""),e=t(n),o=1,i=n.length-1;0!==i;i--)o%3==0&&0!==o&&e.splice(i,0,","),o++;return e.join("")}var l,c=0,f=document.querySelectorAll(".population"),y=r(f);try{for(y.s();!(l=y.n()).done;){var s=l.value,m=Number(s.innerHTML.split(",").join(""));c+=m}}catch(v){y.e(v)}finally{y.f()}var p=c/10,d=document.querySelector(".total-population"),b=document.querySelector(".average-population");d.innerHTML=u(c),b.innerHTML=u(p);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.666c97c1.js.map