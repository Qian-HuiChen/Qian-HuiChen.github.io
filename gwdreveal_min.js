(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var d="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function e(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var f=e(this),g;
if("function"==typeof Object.setPrototypeOf)g=Object.setPrototypeOf;else{var h;a:{var k={a:!0},l={};try{l.__proto__=k;h=l.a;break a}catch(a){}h=!1}g=h?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var m=g;
function p(a,b){a.prototype=d(b.prototype);a.prototype.constructor=a;if(m)m(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var n=Object.getOwnPropertyDescriptor(b,c);n&&Object.defineProperty(a,c,n)}else a[c]=b[c];a.ea=b.prototype};function q(a,b,c){a=parseFloat(a.getAttribute(b));isFinite(a)||(a=c);return a};function r(){var a=HTMLElement.call(this)||this;a.O=!1;return a}p(r,HTMLElement);r.prototype.initialize=function(){};r.prototype.render=function(){};r.prototype.handlePointerUpdate=function(a,b){this.O=!0;this.U=a;this.V=b};r.prototype.handlePointerOut=function(){this.O=!1};r.prototype.shouldRenderOnHoverWhilePaused=function(){return!1};var t={$:"circle",NONE:"none",aa:"side-to-side",ba:"up-and-down",ca:"wander",da:"wrap"};var u="autoplay clear-revealed feathering xradius yradius speed track-mouse".split(" ");function v(){var a=r.call(this)||this;a.N=!1;return a}p(v,r);v.prototype.connectedCallback=function(){this.D=w(this);this.P=this.hasAttribute("clear-revealed");this.R=Math.min(1,Math.max(0,q(this,"feathering",10)/100));this.v=Math.max(1,q(this,"xradius",40));this.H=Math.max(1,q(this,"yradius",40));this.K=q(this,"speed",20);this.L=this.hasAttribute("track-mouse")};
v.prototype.attributeChangedCallback=function(a,b,c){if(this.N&&b!==c){switch(a){case "autoplay":this.D=w(this);break;case "clear-revealed":this.P=this.hasAttribute("clear-revealed");break;case "feathering":this.R=Math.min(1,Math.max(0,q(this,"feathering",10)/100));break;case "xradius":this.v=Math.max(1,q(this,"xradius",40));break;case "yradius":this.H=Math.max(1,q(this,"yradius",40));break;case "speed":this.K=q(this,"speed",20);break;case "track-mouse":this.L=this.hasAttribute("track-mouse")}x(this);
y(this)}};function x(a){a.o=a.v*a.A;a.s=a.H*a.A;var b=Math.sqrt(a.m*a.l);"wander"===a.D?a.B=1E-4*a.K*b:"wrap"===a.D&&(a.B=2E-5*a.K*b);b=.06*b+9*a.B;a.T=Math.min(a.m/2,a.o+b);a.X=Math.max(a.m/2,a.m-a.o-b);a.Z=Math.min(a.l/2,a.s+b);a.S=Math.max(a.l/2,a.l-a.s-b)}function w(a){a=a.hasAttribute("autoplay")?a.getAttribute("autoplay"):"wander";return-1!==Object.keys(t).map(function(b){return t[b]}).indexOf(a)?a:"wander"}
v.prototype.initialize=function(a,b,c){this.u=this.parentElement.querySelector("canvas").getContext("2d");this.m=this.parentElement.clientWidth*c;this.l=this.parentElement.clientHeight*c;this.A=c;this.Y=a[0]||z(this);this.W=a[1]||z(this);this.C=Math.atan2(this.l,this.m)+.3;this.F=0;this.i=.2*Math.cos(this.C);this.j=.2*Math.sin(this.C);x(this);y(this);"none"===this.D?(this.g=-this.o,this.h=-this.s):(this.g=this.m/2,this.h=this.l/2);this.N=!0};
function y(a){if(void 0!==a.u){a.M=A(a);a.J=A(a);a.G=a.J.getContext("2d");var b=a.M.getContext("2d");b.save();b.scale(a.A,a.A);b.translate(a.v,a.H);b.scale(1,a.H/a.v);var c=b.createRadialGradient(0,0,0,0,0,a.v);c.addColorStop(1-a.R,"rgba(0,0,0,1)");c.addColorStop(1,"rgba(0,0,0,0)");b.arc(0,0,a.v,0,2*Math.PI,!1);b.fillStyle=c;b.fill();b.restore()}}function z(a){var b=a.ownerDocument.createElement("canvas");b.width=a.m;b.height=a.l;return b}
function A(a){var b=a.ownerDocument.createElement("canvas");b.width=a.v*a.A*2;b.height=a.H*a.A*2;return b}
v.prototype.render=function(a){if(this.N){if(this.O&&this.L)this.g=this.m*this.U,this.h=this.l*this.V;else switch(this.D){case "circle":var b=this.K*a*5E-5;var c=(this.m/2-this.o)/2*Math.cos(b)+this.m/2;b=(this.l/2-this.s)/2*Math.sin(b)+this.l/2;this.L?(this.g=c*(1-.9)+.9*this.g,this.h=b*(1-.9)+.9*this.h):(this.g=c,this.h=b);break;case "wander":if(void 0===this.I)break;c=a-this.I;c=Math.min(50,c);b=Math.sqrt(c);this.i+=.003*(Math.random()-.5)*b;this.j+=.003*(Math.random()-.5)*b;b=!1;this.g<this.T&&
.15>this.i&&(this.i+=8E-4*c,b=!0);this.g>this.X&&-.15<this.i&&(this.i-=8E-4*c,b=!0);this.h<this.Z&&.15>this.j&&(this.j+=8E-4*c,b=!0);this.h>this.S&&-.15<this.j&&(this.j-=8E-4*c,b=!0);!1===b&&.15>Math.sqrt(this.i*this.i+this.j*this.j)&&(this.i*=1.05,this.j*=1.05);if(this.g<this.o||this.g>this.m-this.o)this.i*=.9;if(this.h<this.s||this.h>this.l-this.s)this.j*=.9;this.g+=this.i*c*this.B;this.h+=this.j*c*this.B;break;case "wrap":void 0!==this.I&&(c=a-this.I,c=Math.min(50,c),b=Math.sqrt(c),this.F+=.009*
(Math.random()-.5)*b,this.F*=Math.pow(.997,c),this.C+=this.F,b=Math.sin(this.C)*this.B,this.g+=Math.cos(this.C)*this.B*c,this.h+=b*c,this.g>this.m+this.o?this.g-=this.m+2*this.o:this.g<-this.o&&(this.g+=this.m+2*this.o),this.h>this.l+this.s?this.h-=this.l+2*this.s:this.h<-this.s&&(this.h+=this.l+2*this.s))}this.P&&void 0!==this.I||(this.u.clearRect(0,0,this.m,this.l),this.u.globalCompositeOperation="source-over",this.u.drawImage(this.Y,0,0));this.G.clearRect(0,0,this.J.width,this.J.height);this.G.globalCompositeOperation=
"source-over";this.G.drawImage(this.M,0,0);this.G.globalCompositeOperation="source-in";this.G.drawImage(this.W,this.o-this.g,this.s-this.h);this.u.globalCompositeOperation="destination-out";this.u.drawImage(this.M,this.g-this.o,this.h-this.s);this.u.globalCompositeOperation="lighter";this.u.drawImage(this.J,this.g-this.o,this.h-this.s);this.I=a}};v.prototype.shouldRenderOnHoverWhilePaused=function(){return this.L};f.Object.defineProperties(v,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return u}}});
customElements.define("gwd-reveal",v);}).call(this);