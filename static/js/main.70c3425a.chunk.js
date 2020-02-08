(this["webpackJsonpreact-particle-image-demo"]=this["webpackJsonpreact-particle-image-demo"]||[]).push([[0],{138:function(t,e,n){"use strict";n.r(e);var r,i=n(0),o=n.n(i),a=n(17),c=n.n(a),u=(n(82),n(62)),s=n(31),l=n(11),f=n(18),h=n(73),p=n(45),d=n.n(p),v=function(t){var e=t.open,n=t.children,r=d.a.sidebar;return e&&(r=r+" "+d.a.open),o.a.createElement("div",{className:r},n)},y=n(2),g=function(t){var e=t.open,n=t.className,r=Object(y.a)(t,["open","className"]),i="hamburger hamburger--elastic";return e&&(i+=" is-active"),n&&(i+=" ".concat(n)),o.a.createElement("button",Object.assign({},r,{className:i,type:"button"}),o.a.createElement("span",{className:"hamburger-box"},o.a.createElement("span",{className:"hamburger-inner"})))},m=n(28),b=n(46),_=function(t){var e=t.text,n=t.arrowPlacement,r=t.arrowDirection,a=t.color,c=void 0===a?"white":a,u=t.width,s=void 0===u?80:u,l=Object(y.a)(t,["text","arrowPlacement","arrowDirection","color","width"]),f=Object(i.useState)(!1),h=Object(m.a)(f,2),p=h[0],d=h[1];return o.a.createElement("div",Object.assign({},l,{onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},style:{display:"flex",alignItems:"center",justifyContent:"center",width:s}}),"left"===n&&o.a.createElement(b.a,{angle:"left"===r?-90:90,length:s,color:c,style:{width:p?s:0,transition:"width .3s"}}),o.a.createElement("span",{style:{margin:0}},e),"right"===n&&o.a.createElement(b.a,{angle:"left"===r?-90:90,length:s,color:c,style:{width:p?s:0,transition:"width .3s"}}))},w=n(69),j=n.n(w),x=n(147),O=n(30),E=n.n(O),P=function(t){var e=t.values,n=t.onChange,r=Object(i.useCallback)(j()(n,25),[n]);return o.a.createElement("div",{className:E.a.root},o.a.createElement("div",{className:E.a.header},"Controls"),o.a.createElement("div",{className:E.a.controls},o.a.createElement("p",null,"Entropy"),o.a.createElement(x.a,{"aria-label":"Entropy",min:0,max:100,value:e.entropy,onChange:function(t,e){return r("entropy",e)}}),o.a.createElement("p",null,"Scale"),o.a.createElement(x.a,{"aria-label":"Scale",min:.5,max:1.5,step:.1,value:e.scale,onChange:function(t,e){return r("scale",e)}}),o.a.createElement("p",null,"Number of Particles"),o.a.createElement(x.a,{"aria-label":"Number of Particles",min:1e3,max:6e3,step:500,value:e.numParticles,onChange:function(t,e){return r("numParticles",e)}})))},F=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0",r=String(t);return r.length>=e?r:new Array(e-r.length+1).join(n)+r},k=n(3),C=n.n(k),S=Math.min(Math.max(window.innerWidth/1300,.5),.85),A=["logo512.png","coffee.png","color-wheel.jpeg"],M=(r={},Object(l.a)(r,"logo512.png",{radius:function(){return(1.4*Math.random()+.5)*S},mass:function(){return 40},filter:function(t){var e=t.x,n=t.y;return t.image.get(e,n).b>50},color:function(){return"#61dafb"},friction:function(){return.15}}),Object(l.a)(r,"coffee.png",{radius:function(){return(1.4*Math.random()+.5)*S},mass:function(){return 80},filter:function(t){var e=t.x,n=t.y,r=t.image.get(e,n);return(r.r+r.g+r.b)/3/255*r.a/255<.9},color:function(t){t.x,t.y,t.image;return"white"},friction:function(){return.15}}),Object(l.a)(r,"color-wheel.jpeg",{radius:function(t){var e=t.x,n=t.y,r=t.image;return(new f.a(r.getWidth()/2,r.getHeight()/2).subtract(new f.a(e,n)).getMagnitude()/200+.1)*S},mass:function(){return 50},filter:function(t){var e=t.x,n=t.y,r=t.image.get(e,n);return(r.r+r.g+r.b)/3/255*r.a/255<.8},color:function(t){var e=t.x,n=t.y,r=t.image.get(e,n);r.r,r.g,r.b,r.a;return"orange"},friction:function(){return.23},initialVelocity:function(t){t.image;return new f.a(1e3*(Math.random()-.5),1e3*(Math.random()-1))}}),r),D=function(){var t=Object(i.useState)(0),e=Object(s.a)(t,2),n=e[0],r=e[1],a=Object(i.useState)(!1),c=Object(s.a)(a,2),p=c[0],d=c[1],y=Object(i.useState)({entropy:20,scale:S,numParticles:4500}),m=Object(s.a)(y,2),b=m[0],w=m[1],j=A[n];return o.a.createElement("div",{className:C.a.content,onScroll:function(t){t.stopPropagation(),t.preventDefault()}},o.a.createElement("div",{className:C.a.header},o.a.createElement("p",{className:C.a.title},"PARTICLE IMAGE"),o.a.createElement(g,{className:C.a.hamburger,onClick:function(){return d((function(t){return!t}))},open:p})),o.a.createElement(v,{open:p},o.a.createElement("div",{className:C.a.sidebar},o.a.createElement(P,{values:b,onChange:function(t,e){w((function(n){return Object(u.a)({},n,Object(l.a)({},t,e))}))}}))),o.a.createElement(h.a,{handleWidth:!0,handleHeight:!0},(function(t){var e=t.width,n=t.height;return e&&n?o.a.createElement(f.b,{key:"".concat(b.numParticles),backgroundColor:"rgb(31, 31, 31)",src:j,maxParticles:b.numParticles,height:n,width:e,particleOptions:M[j],scale:b.scale,entropy:b.entropy,interactiveForce:function(t,e){return f.c.whiteHole(t,e)}}):o.a.createElement("div",null)})),o.a.createElement("div",{className:C.a.footer},o.a.createElement("p",{className:C.a.imgInfo},F(A.indexOf(j)+1,2)," / ",F(A.length,2)),o.a.createElement("div",{className:C.a.nav},o.a.createElement(_,{onClick:function(){r((function(t){return 0===t?A.length-1:(t-1)%A.length}))},className:C.a.navArrow,arrowPlacement:"left",arrowDirection:"left",text:"PREV"}),o.a.createElement(_,{onClick:function(){r((function(t){return(t+1)%A.length}))},className:C.a.navArrow,arrowPlacement:"right",arrowDirection:"right",text:"NEXT"})),o.a.createElement("a",{href:"https://github.com/malerba118/react-particle-image",target:"_blank",className:C.a.links},"GITHUB")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},18:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return C}));var r=n(0),i=n.n(r),o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function a(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var c=function(){return(c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function u(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}function s(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(c){i={error:c}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function l(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(s(arguments[e]));return t}var f=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.x=t,this.y=e}return t.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},t.prototype.subtract=function(t){return this.x-=t.x,this.y-=t.y,this},t.prototype.addScalar=function(t){return this.x+=t,this.y+=t,this},t.prototype.divideScalar=function(t){return this.x=this.x/t,this.y=this.y/t,this},t.prototype.multiplyScalar=function(t){return this.x=this.x*t,this.y=this.y*t,this},t.prototype.getMagnitude=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},t.prototype.getAngle=function(){return Math.atan2(this.y,this.x)},t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.toUnit=function(){var t=this.getMagnitude();return t?this.clone().divideScalar(t):this.clone()},t.from=function(e,n){return new t(n*Math.cos(e),n*Math.sin(e))},t.sum=function(e){var n=new t(0,0);return e.forEach((function(t){n.add(t)})),n},t}(),h="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{};var p,d=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){var n=200,r="Expected a function",i="__lodash_hash_undefined__",o=1,a=2,c=1/0,u=9007199254740991,s="[object Arguments]",l="[object Array]",f="[object Boolean]",p="[object Date]",d="[object Error]",v="[object Function]",y="[object GeneratorFunction]",g="[object Map]",m="[object Number]",b="[object Object]",_="[object RegExp]",w="[object Set]",j="[object String]",x="[object Symbol]",O="[object ArrayBuffer]",E="[object DataView]",P=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,F=/^\w*$/,k=/^\./,C=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,S=/\\(\\)?/g,A=/^\[object .+?Constructor\]$/,M=/^(?:0|[1-9]\d*)$/,D={};D["[object Float32Array]"]=D["[object Float64Array]"]=D["[object Int8Array]"]=D["[object Int16Array]"]=D["[object Int32Array]"]=D["[object Uint8Array]"]=D["[object Uint8ClampedArray]"]=D["[object Uint16Array]"]=D["[object Uint32Array]"]=!0,D[s]=D[l]=D[O]=D[f]=D[E]=D[p]=D[d]=D[v]=D[g]=D[m]=D[b]=D[_]=D[w]=D[j]=D["[object WeakMap]"]=!1;var R="object"==typeof h&&h&&h.Object===Object&&h,T="object"==typeof self&&self&&self.Object===Object&&self,W=R||T||Function("return this")(),I=e&&!e.nodeType&&e,N=I&&t&&!t.nodeType&&t,H=N&&N.exports===I&&R.process,$=function(){try{return H&&H.binding("util")}catch(t){}}(),B=$&&$.isTypedArray;function U(t,e){for(var n=-1,r=t?t.length:0,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}function V(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}function z(t,e){for(var n=-1,r=t?t.length:0;++n<r;)if(e(t[n],n,t))return!0;return!1}function L(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}function G(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function X(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var Y,Q,Z=Array.prototype,q=Function.prototype,J=Object.prototype,K=W["__core-js_shared__"],tt=function(){var t=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),et=q.toString,nt=J.hasOwnProperty,rt=J.toString,it=RegExp("^"+et.call(nt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=W.Symbol,at=W.Uint8Array,ct=J.propertyIsEnumerable,ut=Z.splice,st=ot?ot.isConcatSpreadable:void 0,lt=(Y=Object.keys,Q=Object,function(t){return Y(Q(t))}),ft=Gt(W,"DataView"),ht=Gt(W,"Map"),pt=Gt(W,"Promise"),dt=Gt(W,"Set"),vt=Gt(W,"WeakMap"),yt=Gt(Object,"create"),gt=ee(ft),mt=ee(ht),bt=ee(pt),_t=ee(dt),wt=ee(vt),jt=ot?ot.prototype:void 0,xt=jt?jt.valueOf:void 0,Ot=jt?jt.toString:void 0;function Et(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Pt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ft(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function kt(t){var e=-1,n=t?t.length:0;for(this.__data__=new Ft;++e<n;)this.add(t[e])}function Ct(t){this.__data__=new Pt(t)}function St(t,e){var n=oe(t)||ie(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,i=!!r;for(var o in t)!e&&!nt.call(t,o)||i&&("length"==o||Qt(o,r))||n.push(o);return n}function At(t,e){for(var n=t.length;n--;)if(re(t[n][0],e))return n;return-1}Et.prototype.clear=function(){this.__data__=yt?yt(null):{}},Et.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Et.prototype.get=function(t){var e=this.__data__;if(yt){var n=e[t];return n===i?void 0:n}return nt.call(e,t)?e[t]:void 0},Et.prototype.has=function(t){var e=this.__data__;return yt?void 0!==e[t]:nt.call(e,t)},Et.prototype.set=function(t,e){return this.__data__[t]=yt&&void 0===e?i:e,this},Pt.prototype.clear=function(){this.__data__=[]},Pt.prototype.delete=function(t){var e=this.__data__,n=At(e,t);return!(n<0)&&(n==e.length-1?e.pop():ut.call(e,n,1),!0)},Pt.prototype.get=function(t){var e=this.__data__,n=At(e,t);return n<0?void 0:e[n][1]},Pt.prototype.has=function(t){return At(this.__data__,t)>-1},Pt.prototype.set=function(t,e){var n=this.__data__,r=At(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},Ft.prototype.clear=function(){this.__data__={hash:new Et,map:new(ht||Pt),string:new Et}},Ft.prototype.delete=function(t){return Lt(this,t).delete(t)},Ft.prototype.get=function(t){return Lt(this,t).get(t)},Ft.prototype.has=function(t){return Lt(this,t).has(t)},Ft.prototype.set=function(t,e){return Lt(this,t).set(t,e),this},kt.prototype.add=kt.prototype.push=function(t){return this.__data__.set(t,i),this},kt.prototype.has=function(t){return this.__data__.has(t)},Ct.prototype.clear=function(){this.__data__=new Pt},Ct.prototype.delete=function(t){return this.__data__.delete(t)},Ct.prototype.get=function(t){return this.__data__.get(t)},Ct.prototype.has=function(t){return this.__data__.has(t)},Ct.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Pt){var i=r.__data__;if(!ht||i.length<n-1)return i.push([t,e]),this;r=this.__data__=new Ft(i)}return r.set(t,e),this};var Mt,Dt,Rt=(Mt=function(t,e){return t&&Tt(t,e,pe)},function(t,e){if(null==t)return t;if(!ae(t))return Mt(t,e);for(var n=t.length,r=Dt?n:-1,i=Object(t);(Dt?r--:++r<n)&&!1!==e(i[r],r,i););return t});var Tt=function(t){return function(e,n,r){for(var i=-1,o=Object(e),a=r(e),c=a.length;c--;){var u=a[t?c:++i];if(!1===n(o[u],u,o))break}return e}}();function Wt(t,e){for(var n=0,r=(e=Zt(e,t)?[e]:Vt(e)).length;null!=t&&n<r;)t=t[te(e[n++])];return n&&n==r?t:void 0}function It(t,e){return null!=t&&e in Object(t)}function Nt(t,e,n,r,i){return t===e||(null==t||null==e||!se(t)&&!le(e)?t!==t&&e!==e:function(t,e,n,r,i,c){var u=oe(t),h=oe(e),v=l,y=l;u||(v=(v=Xt(t))==s?b:v);h||(y=(y=Xt(e))==s?b:y);var P=v==b&&!L(t),F=y==b&&!L(e),k=v==y;if(k&&!P)return c||(c=new Ct),u||he(t)?zt(t,e,n,r,i,c):function(t,e,n,r,i,c,u){switch(n){case E:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case O:return!(t.byteLength!=e.byteLength||!r(new at(t),new at(e)));case f:case p:case m:return re(+t,+e);case d:return t.name==e.name&&t.message==e.message;case _:case j:return t==e+"";case g:var s=G;case w:var l=c&a;if(s||(s=X),t.size!=e.size&&!l)return!1;var h=u.get(t);if(h)return h==e;c|=o,u.set(t,e);var v=zt(s(t),s(e),r,i,c,u);return u.delete(t),v;case x:if(xt)return xt.call(t)==xt.call(e)}return!1}(t,e,v,n,r,i,c);if(!(i&a)){var C=P&&nt.call(t,"__wrapped__"),S=F&&nt.call(e,"__wrapped__");if(C||S){var A=C?t.value():t,M=S?e.value():e;return c||(c=new Ct),n(A,M,r,i,c)}}if(!k)return!1;return c||(c=new Ct),function(t,e,n,r,i,o){var c=i&a,u=pe(t),s=u.length,l=pe(e).length;if(s!=l&&!c)return!1;var f=s;for(;f--;){var h=u[f];if(!(c?h in e:nt.call(e,h)))return!1}var p=o.get(t);if(p&&o.get(e))return p==e;var d=!0;o.set(t,e),o.set(e,t);var v=c;for(;++f<s;){h=u[f];var y=t[h],g=e[h];if(r)var m=c?r(g,y,h,e,t,o):r(y,g,h,t,e,o);if(!(void 0===m?y===g||n(y,g,r,i,o):m)){d=!1;break}v||(v="constructor"==h)}if(d&&!v){var b=t.constructor,_=e.constructor;b!=_&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof _&&_ instanceof _)&&(d=!1)}return o.delete(t),o.delete(e),d}(t,e,n,r,i,c)}(t,e,Nt,n,r,i))}function Ht(t){return!(!se(t)||function(t){return!!tt&&tt in t}(t))&&(ce(t)||L(t)?it:A).test(ee(t))}function $t(t){return"function"==typeof t?t:null==t?de:"object"==typeof t?oe(t)?function(t,e){if(Zt(t)&&qt(e))return Jt(te(t),e);return function(n){var r=function(t,e,n){var r=null==t?void 0:Wt(t,e);return void 0===r?n:r}(n,t);return void 0===r&&r===e?function(t,e){return null!=t&&function(t,e,n){e=Zt(e,t)?[e]:Vt(e);var r,i=-1,o=e.length;for(;++i<o;){var a=te(e[i]);if(!(r=null!=t&&n(t,a)))break;t=t[a]}if(r)return r;return!!(o=t?t.length:0)&&ue(o)&&Qt(a,o)&&(oe(t)||ie(t))}(t,e,It)}(n,t):Nt(e,r,void 0,o|a)}}(t[0],t[1]):function(t){var e=function(t){var e=pe(t),n=e.length;for(;n--;){var r=e[n],i=t[r];e[n]=[r,i,qt(i)]}return e}(t);if(1==e.length&&e[0][2])return Jt(e[0][0],e[0][1]);return function(n){return n===t||function(t,e,n,r){var i=n.length,c=i,u=!r;if(null==t)return!c;for(t=Object(t);i--;){var s=n[i];if(u&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++i<c;){var l=(s=n[i])[0],f=t[l],h=s[1];if(u&&s[2]){if(void 0===f&&!(l in t))return!1}else{var p=new Ct;if(r)var d=r(f,h,l,t,e,p);if(!(void 0===d?Nt(h,f,r,o|a,p):d))return!1}}return!0}(n,t,e)}}(t):function(t){return Zt(t)?(e=te(t),function(t){return null==t?void 0:t[e]}):function(t){return function(e){return Wt(e,t)}}(t);var e}(t)}function Bt(t){if(!function(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||J;return t===n}(t))return lt(t);var e=[];for(var n in Object(t))nt.call(t,n)&&"constructor"!=n&&e.push(n);return e}function Ut(t,e){var n=-1,r=ae(t)?Array(t.length):[];return Rt(t,(function(t,i,o){r[++n]=e(t,i,o)})),r}function Vt(t){return oe(t)?t:Kt(t)}function zt(t,e,n,r,i,c){var u=i&a,s=t.length,l=e.length;if(s!=l&&!(u&&l>s))return!1;var f=c.get(t);if(f&&c.get(e))return f==e;var h=-1,p=!0,d=i&o?new kt:void 0;for(c.set(t,e),c.set(e,t);++h<s;){var v=t[h],y=e[h];if(r)var g=u?r(y,v,h,e,t,c):r(v,y,h,t,e,c);if(void 0!==g){if(g)continue;p=!1;break}if(d){if(!z(e,(function(t,e){if(!d.has(e)&&(v===t||n(v,t,r,i,c)))return d.add(e)}))){p=!1;break}}else if(v!==y&&!n(v,y,r,i,c)){p=!1;break}}return c.delete(t),c.delete(e),p}function Lt(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map}function Gt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Ht(n)?n:void 0}var Xt=function(t){return rt.call(t)};function Yt(t){return oe(t)||ie(t)||!!(st&&t&&t[st])}function Qt(t,e){return!!(e=null==e?u:e)&&("number"==typeof t||M.test(t))&&t>-1&&t%1==0&&t<e}function Zt(t,e){if(oe(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!fe(t))||(F.test(t)||!P.test(t)||null!=e&&t in Object(e))}function qt(t){return t===t&&!se(t)}function Jt(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}(ft&&Xt(new ft(new ArrayBuffer(1)))!=E||ht&&Xt(new ht)!=g||pt&&"[object Promise]"!=Xt(pt.resolve())||dt&&Xt(new dt)!=w||vt&&"[object WeakMap]"!=Xt(new vt))&&(Xt=function(t){var e=rt.call(t),n=e==b?t.constructor:void 0,r=n?ee(n):void 0;if(r)switch(r){case gt:return E;case mt:return g;case bt:return"[object Promise]";case _t:return w;case wt:return"[object WeakMap]"}return e});var Kt=ne((function(t){var e;t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(fe(t))return Ot?Ot.call(t):"";var e=t+"";return"0"==e&&1/t==-c?"-0":e}(e);var n=[];return k.test(t)&&n.push(""),t.replace(C,(function(t,e,r,i){n.push(r?i.replace(S,"$1"):e||t)})),n}));function te(t){if("string"==typeof t||fe(t))return t;var e=t+"";return"0"==e&&1/t==-c?"-0":e}function ee(t){if(null!=t){try{return et.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function ne(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(r);var n=function n(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a),a};return n.cache=new(ne.Cache||Ft),n}function re(t,e){return t===e||t!==t&&e!==e}function ie(t){return function(t){return le(t)&&ae(t)}(t)&&nt.call(t,"callee")&&(!ct.call(t,"callee")||rt.call(t)==s)}ne.Cache=Ft;var oe=Array.isArray;function ae(t){return null!=t&&ue(t.length)&&!ce(t)}function ce(t){var e=se(t)?rt.call(t):"";return e==v||e==y}function ue(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}function se(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function le(t){return!!t&&"object"==typeof t}function fe(t){return"symbol"==typeof t||le(t)&&rt.call(t)==x}var he=B?function(t){return function(e){return t(e)}}(B):function(t){return le(t)&&ue(t.length)&&!!D[rt.call(t)]};function pe(t){return ae(t)?St(t):Bt(t)}function de(t){return t}t.exports=function(t,e){return function t(e,n,r,i,o){var a=-1,c=e.length;for(r||(r=Yt),o||(o=[]);++a<c;){var u=e[a];n>0&&r(u)?n>1?t(u,n-1,r,i,o):V(o,u):i||(o[o.length]=u)}return o}(function(t,e){return(oe(t)?U:Ut)(t,$t(e))}(t,e),1)}})),v=function(){function t(t,e){void 0===e&&(e={}),this.particles=[],this.particleForces=[],this.subverses=[],this.parent=t,this.options=e}return t.prototype.createSubverse=function(){var e=new t(this,this.options);return this.subverses.push(e),e},t.prototype.removeSubverse=function(t){this.subverses=this.subverses.filter((function(e){return e!==t}))},t.prototype.addParticle=function(t){this.particles.push(t)},t.prototype.removeParticle=function(t){this.particles=this.particles.filter((function(e){return e!==t}))},t.prototype.getParticles=function(){return this.particles.concat(d(this.subverses,(function(t){return t.getParticles()})))},t.prototype.addParticleForce=function(t){this.particleForces.push(t)},t.prototype.removeParticleForce=function(t){this.particleForces=this.particleForces.filter((function(e){return e!==t}))},t.prototype.getParticleForces=function(){return this.parent?this.parent.getParticleForces().concat(this.particleForces):this.particleForces},t.prototype.enforceBounds=function(t,e){t.position.x>e.right?(t.position.x=e.right,t.velocity.x*=-1):t.position.x<e.left&&(t.position.x=e.left,t.velocity.x*=-1),t.position.y>e.bottom?(t.position.y=e.bottom,t.velocity.y*=-1):t.position.y<e.top&&(t.position.y=e.top,t.velocity.y*=-1)},t.prototype.applyForces=function(t,e){var n=e.map((function(e){return e(t)})),r=f.sum(n).divideScalar(t.mass);t.position.add(t.velocity),t.velocity.add(r)},t.prototype.tick=function(){var t=this,e=this.getParticleForces();this.particles.forEach((function(n){t.applyForces(n,e),t.options.bounds&&t.enforceBounds(n,t.options.bounds)})),this.subverses.forEach((function(t){return t.tick()}))},t}(),y={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},one:function(t){return 1},zero:function(t){return 0}};!function(t){t[t.Creating=0]="Creating",t[t.Created=1]="Created",t[t.Dying=2]="Dying",t[t.Dead=3]="Dead"}(p||(p={}));var g=function(t){function e(e){var n=void 0===e?{}:e,r=n.bounds,i=n.frameRate,o=void 0===i?30:i,a=n.creationDuration,c=void 0===a?500:a,u=n.deathDuration,s=void 0===u?500:u,l=n.creationTimingFn,f=void 0===l?y.easeInQuad:l,h=n.deathTimingFn,d=void 0===h?y.easeInQuad:h,v=t.call(this,null,{bounds:r})||this;return v.state=p.Creating,v.health=0,v.frameRate=30,v.creationDuration=2e3,v.creationRate=1,v.deathDuration=2e3,v.deathRate=1,v.setFrameRate(o),v.setCreationDuration(c),v.setDeathDuration(s),v.creationTimingFn=f,v.deathTimingFn=d,v}return a(e,t),e.prototype.applyGrowth=function(t){t.perceivedRadius=t.radius*this.creationTimingFn(this.health)},e.prototype.applyDecay=function(t){t.perceivedRadius=t.radius*this.deathTimingFn(this.health)},e.prototype.setCreationDuration=function(t){this.creationDuration=t,this.creationRate=1e3/(this.creationDuration*this.frameRate)},e.prototype.setDeathDuration=function(t){this.deathDuration=t,this.deathRate=1e3/(this.deathDuration*this.frameRate)},e.prototype.setFrameRate=function(t){this.frameRate=t,this.creationRate=1e3/(this.creationDuration*this.frameRate),this.deathRate=1e3/(this.deathDuration*this.frameRate)},e.prototype.die=function(){var t=this;return this.state=p.Dying,new Promise((function(e){t.resolveDeath=e}))},e.prototype.tick=function(){var e=this;this.state===p.Creating?(this.health=Math.min(this.health+this.creationRate,1),this.getParticles().forEach((function(t){e.applyGrowth(t)})),1===this.health&&(this.state=p.Created)):this.state===p.Dying&&(this.health=Math.max(this.health-this.deathRate,0),this.getParticles().forEach((function(t){e.applyDecay(t)})),0===this.health&&(this.state=p.Dead,this.resolveDeath())),t.prototype.tick.call(this)},e}(v),m=function(t){var e=void 0===t?{}:t,n=e.radius,r=void 0===n?1:n,i=e.friction,o=void 0===i?10:i,a=e.mass,c=void 0===a?100:a,u=e.position,s=void 0===u?new f(0,0):u,l=e.velocity,h=void 0===l?new f(0,0):l,p=e.color,d=void 0===p?"black":p,v=e.growthRate,y=void 0===v?.05:v,g=e.decayRate,m=void 0===g?.05:g;this.perceivedRadius=0,this.radius=r,this.friction=o,this.mass=c,this.position=s,this.velocity=h,this.color=d,this.growthRate=y,this.decayRate=m},b=function(){};function _(t){var e=new Image;e.crossOrigin="Anonymous";var n=new Promise((function(t,n){e.onload=function(){var r=document.createElement("canvas");r.width=e.width,r.height=e.height;var i=r.getContext("2d");if(!i)return n(new Error("Could not get canvas context"));i.drawImage(e,0,0,e.width,e.height,0,0,r.width,r.height);var o=i.getImageData(0,0,r.width,r.height).data;i.clearRect(0,0,r.width,r.height);for(var a=[],c=0;c<o.length-1;){var u=c/4%r.width,s=Math.floor(c/4/r.width);a[s]||(a[s]=[]),a[s][u]={r:o[c],g:o[c+1],b:o[c+2],a:o[c+3]},c+=4}t(new A(a))},e.onerror=n}));return e.src=t,n}var w=2*Math.PI,j=function(t,e){var n=this;void 0===e&&(e=30),this.setFps=function(t){n.delay=1e3/t,n.time=null,n.frame=-1},this.start=function(){n.rafId||(n.rafId=requestAnimationFrame(n.loop))},this.stop=function(){n.rafId&&(cancelAnimationFrame(n.rafId),n.rafId=null,n.time=null,n.frame=-1)},this.loop=function(t){null===n.time&&(n.time=t);var e=Math.floor((t-n.time)/n.delay);e>n.frame&&(n.frame=e,n.callback({time:t,frame:n.frame})),n.rafId=requestAnimationFrame(n.loop)},this.delay=1e3/e,this.time=null,this.frame=-1,this.callback=t},x=function(t){function e(e){var n=t.call(this)||this;return n.canvas=e,n}return a(e,t),e.prototype.context=function(){return this.canvas.getContext("2d")},e.prototype.height=function(){return this.canvas.height},e.prototype.width=function(){return this.canvas.width},e.prototype.clear=function(){var t;null===(t=this.context())||void 0===t||t.clearRect(0,0,this.width(),this.height())},e.prototype.drawParticles=function(t,e){var n=this.context();n&&(n.fillStyle=e,n.beginPath(),t.forEach((function(t){n.moveTo(t.position.x+t.radius,t.position.y),n.arc(t.position.x,t.position.y,t.perceivedRadius,0,w)})),n.fill())},e.prototype.drawFrame=function(t){var e=this;this.clear();var n,r=t.getParticles(),i=(n=function(t){return t.color},r.reduce((function(t,e){var r=n(e);return t[r]||(t[r]=[]),t[r].push(e),t}),{}));Object.keys(i).forEach((function(t){e.drawParticles(i[t],t)}))},e}(b),O=function(){function t(t,e,n){var r=this;void 0===e&&(e=null);var i=(void 0===n?{}:n).frameRate,o=void 0===i?30:i;this.id=null,this.start=function(){r.animator.start()},this.stop=function(){r.animator.stop()},this.loop=function(){r.universe&&(r.renderer.drawFrame(r.universe),r.universe.tick())},this.universe=e,this.renderer=t,this.animator=new j(this.loop,o)}return t.prototype.setUniverse=function(t){this.universe=t},t}();function E(t,e,n){return void 0===n&&(n=1),function(r){return new f(t,e).subtract(r.position).multiplyScalar(n)}}function P(t,e){return function(n){var r=new f(t,e);return r.subtract(n.position).multiplyScalar(-1),r.divideScalar((12^r.getMagnitude())/8+.01),r}}function F(t){return function(){return new f(Math.random()-.5,Math.random()-.5).multiplyScalar(t)}}var k=function(t){var e=Math.min(Math.max(t.friction,0),1);return 0===t.velocity.getMagnitude()?new f(0,0):t.velocity.clone().multiplyScalar(-e*t.mass)},C=Object.freeze({blackHole:E,whiteHole:P,entropy:F,friction:k}),S=function(t){var e=this;this.setScale=function(t){e.scale=t},this.setCanvasWidth=function(t){e.canvasWidth=t},this.setCanvasHeight=function(t){e.canvasHeight=t},this.getParticleForce=function(){return function(t){var n=e.getPixelPosition();return E(n.x,n.y)(t)}},this.getPixelPosition=function(){var t=e.pixelX*e.scale+e.canvasWidth/2-e.imageWidth*e.scale/2,n=e.pixelY*e.scale+e.canvasHeight/2-e.imageHeight*e.scale/2;return new f(t,n)},this.pixelX=t.pixelX,this.pixelY=t.pixelY,this.scale=t.scale,this.imageWidth=t.imageWidth,this.imageHeight=t.imageHeight,this.canvasWidth=t.canvasWidth,this.canvasHeight=t.canvasHeight},A=function(){function t(t){this.array=t,this.updateWidth(),this.updateHeight()}return t.prototype.updateWidth=function(){this.width=Math.min.apply(Math,l(this.array.map((function(t){return t.length}))))},t.prototype.updateHeight=function(){this.height=this.array.length},t.prototype.getHeight=function(){return this.height},t.prototype.getWidth=function(){return this.width},t.prototype.get=function(t,e){return this.array[e][t]},t.prototype.set=function(t,e,n){this.array[e]||(this.array[e]=[]),this.array[e][t]=n,this.updateWidth(),this.updateHeight()},t.prototype.slice=function(e,n){var r=s(e,2),i=r[0],o=r[1],a=s(n,2),c=a[0],u=a[1];return new t(this.array.slice(c,u).map((function(t){return t.slice(i,o)})))},t.prototype.forEach=function(t){this.array.forEach((function(e,n){e.forEach((function(e,r){t(e,r,n)}))}))},t}(),M=function(t){var e,n,r,i,o=t.url,a=t.maxParticles,c=t.particleOptions,s=t.scale,f=t.canvasWidth,h=t.canvasHeight,p=t.creationTimingFn,d=t.deathTimingFn,v=t.creationDuration,y=t.deathDuration;return e=void 0,n=void 0,i=function(){var t,e,n,r,i,b,w,j,x,O,E,P,F,k,C,A,M,D,R;return u(this,(function(u){switch(u.label){case 0:return[4,_(o)];case 1:for(t=u.sent(),e=t.getHeight(),n=t.getWidth(),r=e*n,i=function(t){for(var e,n,r=t.length;0!==r;)n=Math.floor(Math.random()*r),e=t[r-=1],t[r]=t[n],t[n]=e;return t}(l(Array(r).keys())),b=0,w=new g({creationTimingFn:p,deathTimingFn:d,creationDuration:v,deathDuration:y}),j=[],a=Math.min(r,a);b<a&&i.length;)x=i.pop()||0,O=x%n,E=Math.floor(x/n),c.filter({x:O,y:E,image:t})&&(P=w.createSubverse(),F=new S({pixelX:O,pixelY:E,scale:s,imageHeight:t.getHeight(),imageWidth:t.getWidth(),canvasHeight:h,canvasWidth:f}),j.push(F),P.addParticleForce(F.getParticleForce()),k=c.color({x:O,y:E,image:t}),C=c.radius({x:O,y:E,image:t}),A=c.friction({x:O,y:E,image:t}),M=c.mass({x:O,y:E,image:t}),D=c.initialPosition({x:O,y:E,image:t,finalPosition:F.getPixelPosition()}),R=c.initialVelocity({x:O,y:E,image:t}),P.addParticle(new m({radius:C,mass:M,color:k,friction:A,position:D,velocity:R})),b+=1);return[2,{universe:w,pixelManagers:j}]}}))},new((r=void 0)||(r=Promise))((function(t,o){function a(t){try{u(i.next(t))}catch(e){o(e)}}function c(t){try{u(i.throw(t))}catch(e){o(e)}}function u(e){e.done?t(e.value):new r((function(t){t(e.value)})).then(a,c)}u((i=i.apply(e,n||[])).next())}))},D="Expected a function",R=NaN,T="[object Symbol]",W=/^\s+|\s+$/g,I=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,H=/^0o[0-7]+$/i,$=parseInt,B="object"==typeof h&&h&&h.Object===Object&&h,U="object"==typeof self&&self&&self.Object===Object&&self,V=B||U||Function("return this")(),z=Object.prototype.toString,L=Math.max,G=Math.min,X=function(){return V.Date.now()};function Y(t,e,n){var r,i,o,a,c,u,s=0,l=!1,f=!1,h=!0;if("function"!=typeof t)throw new TypeError(D);function p(e){var n=r,o=i;return r=i=void 0,s=e,a=t.apply(o,n)}function d(t){var n=t-u;return void 0===u||n>=e||n<0||f&&t-s>=o}function v(){var t=X();if(d(t))return y(t);c=setTimeout(v,function(t){var n=e-(t-u);return f?G(n,o-(t-s)):n}(t))}function y(t){return c=void 0,h&&r?p(t):(r=i=void 0,a)}function g(){var t=X(),n=d(t);if(r=arguments,i=this,u=t,n){if(void 0===c)return function(t){return s=t,c=setTimeout(v,e),l?p(t):a}(u);if(f)return c=setTimeout(v,e),p(u)}return void 0===c&&(c=setTimeout(v,e)),a}return e=Z(e)||0,Q(n)&&(l=!!n.leading,o=(f="maxWait"in n)?L(Z(n.maxWait)||0,e):o,h="trailing"in n?!!n.trailing:h),g.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=u=i=c=void 0},g.flush=function(){return void 0===c?a:y(X())},g}function Q(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Z(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&z.call(t)==T}(t))return R;if(Q(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Q(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(W,"");var n=N.test(t);return n||H.test(t)?$(t.slice(2),n?2:8):I.test(t)?R:+t}var q=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError(D);return Q(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Y(t,e,{leading:r,maxWait:e,trailing:i})},J={filter:function(){return!0},radius:function(){return 1},mass:function(){return 25},color:function(){return"white"},friction:function(){return 10},initialPosition:function(t){return t.finalPosition},initialVelocity:function(){return new f(0,0)}},K=function(t,e){return P(t,e)};e.b=function(t){var e=t.src,n=t.height,o=void 0===n?400:n,a=t.width,u=void 0===a?400:a,l=t.scale,f=void 0===l?1:l,h=t.maxParticles,p=void 0===h?5e3:h,d=t.entropy,v=void 0===d?10:d,y=t.backgroundColor,g=void 0===y?"#222":y,m=t.particleOptions,b=void 0===m?J:m,_=t.interactiveForce,w=void 0===_?K:_,j=t.style,E=void 0===j?{}:j,P=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}(t,["src","height","width","scale","maxParticles","entropy","backgroundColor","particleOptions","interactiveForce","style"]),C=s(Object(r.useState)(),2),S=C[0],A=C[1],D=s(Object(r.useState)(),2),R=D[0],T=D[1],W=Object(r.useRef)(),I=Object(r.useRef)(),N=Object(r.useRef)(),H=s(Object(r.useState)([]),2),$=H[0],B=H[1],U=Object(r.useRef)(),V=c(c({},J),b);Object(r.useEffect)((function(){if(S){var t=new x(S),e=new O(t);return W.current=e,e.start(),function(){return e.stop()}}}),[S]),Object(r.useEffect)((function(){var t;if(S){var n=null===(t=R)||void 0===t?void 0:t.die(),r=M({url:e,maxParticles:p,particleOptions:V,scale:f,canvasWidth:u,canvasHeight:o});Promise.all([r,n]).then((function(t){var e,n=s(t,1)[0],r=n.universe,i=n.pixelManagers;B(i),r.addParticleForce(k),null===(e=W.current)||void 0===e||e.setUniverse(r),T(r)}))}}),[S,e]);var z=Object(r.useCallback)(q((function(t){$.forEach((function(e){e.setScale(t)}))}),50),[$]),L=Object(r.useCallback)(q((function(t){$.forEach((function(e){e.setCanvasWidth(t)}))}),50),[$]),G=Object(r.useCallback)(q((function(t){$.forEach((function(e){e.setCanvasHeight(t)}))}),50),[$]);Object(r.useEffect)((function(){z(f)}),[f,$]),Object(r.useEffect)((function(){L(u)}),[u,$]),Object(r.useEffect)((function(){G(o)}),[o,$]),Object(r.useEffect)((function(){var t,e=F(v);return null===(t=R)||void 0===t||t.addParticleForce(e),N.current=e,function(){var t;null===(t=R)||void 0===t||t.removeParticleForce(e)}}),[v,S,R]);var X=Object(r.useCallback)((function(t){var e=function(t){var e=t.target,n=e.getBoundingClientRect();return{x:(t.clientX-n.left)/(n.right-n.left)*e.width,y:(t.clientY-n.top)/(n.bottom-n.top)*e.height}}(t);if(R){I.current&&(window.clearTimeout(U.current),R.removeParticleForce(I.current));var n=w(e.x,e.y);I.current=n,R.addParticleForce(I.current),U.current=window.setTimeout((function(){R.removeParticleForce(n)}),100)}}),[R]),Y=Object(r.useCallback)((function(t){var e=function(t){var e=t.target,n=e.getBoundingClientRect();return{x:(t.touches[0].clientX-n.left)/(n.right-n.left)*e.width,y:(t.touches[0].clientY-n.top)/(n.bottom-n.top)*e.height}}(t);if(R){I.current&&(window.clearTimeout(U.current),R.removeParticleForce(I.current));var n=w(e.x,e.y);I.current=n,R.addParticleForce(I.current),U.current=window.setTimeout((function(){R.removeParticleForce(n)}),100)}}),[R]);return i.a.createElement("canvas",c({},P,{onMouseMove:X,onTouchMove:Y,height:o,width:u,style:c({backgroundColor:g},E),ref:function(t){var e;(null===(e=t)||void 0===e?void 0:e.getContext("2d"))&&A(t)}}))}}).call(this,n(20))},3:function(t,e,n){t.exports={content:"App_content__3La4L",hamburger:"App_hamburger__2yIw2",title:"App_title__-GfWs clickable",header:"App_header__3ZZ1n flex-row",footer:"App_footer__29Fsv flex-row",imgInfo:"App_imgInfo__3hU9-",nav:"App_nav__1_46_",navArrow:"App_navArrow__zzZjt clickable",links:"App_links__h6CZe clickable",sidebar:"App_sidebar__1l9Om"}},30:function(t,e,n){t.exports={root:"Controls_root__siV-e",header:"Controls_header__1ABvE text-lg",controls:"Controls_controls__3dV4Y"}},45:function(t,e,n){t.exports={sidebar:"Sidebar_sidebar__1aNKU",open:"Sidebar_open__2VOmW"}},77:function(t,e,n){t.exports=n(138)},82:function(t,e,n){}},[[77,1,2]]]);
//# sourceMappingURL=main.70c3425a.chunk.js.map