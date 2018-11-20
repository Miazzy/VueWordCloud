!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.VueWordCloud=n()}(this,function(){"use strict";function c(t){return"function"==typeof t}function C(){}var h=function(t){this.previousValue=t,this.interrupted=!1,this.interruptHandlers=new Set};h.prototype.throwIfInterrupted=function(){if(this.interrupted)throw new Error},h.prototype.interrupt=function(){this.interrupted||(this.interrupted=!0,this.interruptHandlers.forEach(function(t){try{t()}catch(t){}}))},h.prototype.onInterrupt=function(t){if(this.interrupted&&!this.interruptHandlers.has(t))try{t()}catch(t){}this.interruptHandlers.add(t)};var t="asyncComputed_",l=t+"promise_",d=t+"trigger_";function n(t){return function(){return t}}function i(){return[]}var r={animationDuration:{type:Number,default:1e3},animationEasing:{type:String,default:"ease"},animationOverlap:{type:Number,default:1},color:{type:[String,Function],default:"Black"},createCanvas:{type:Function,default:function(){return document.createElement("canvas")}},createWorker:{type:Function,default:function(t){return new Worker(URL.createObjectURL(new Blob([t])))}},enterAnimation:{type:[Object,String],default:n({opacity:0})},fontFamily:{type:[String,Function],default:"serif"},fontSizeRatio:{type:Number,default:0},fontStyle:{type:[String,Function],default:"normal"},fontVariant:{type:[String,Function],default:"normal"},fontWeight:{type:[String,Function],default:"normal"},leaveAnimation:{type:[Object,String],default:n({opacity:0})},loadFont:{type:Function,default:function(t,n,i,r){return document.fonts.load([n,i,"1px",t].join(" "),r)}},rotation:{type:[Number,Function],default:0},rotationUnit:{type:[String,Function],default:"turn"},spacing:{type:Number,default:0},text:{type:[String,Function],default:""},weight:{type:[Number,Function],default:1},words:{type:Array,default:i}};var s=n(null);function L(t){return t&&"object"==typeof t}function N(t){return"string"==typeof t}var e={animationOptions:function(){var t,r,e,i=this.animationDuration,n=this.enterAnimation,o=this.leaveAnimation;if(L(n)&&L(o)){var u=(t=Object.assign({},n,o),r=s,e={},Object.entries(t).forEach(function(t){var n=t[0],i=t[1];e[n]=r(i,n)}),e),a=function(t){Object.assign(t.style,n)},f=function(t,n){setTimeout(function(){Object.assign(t.style,u),setTimeout(n,i)},1)};return{props:{css:!1},on:{beforeAppear:a,appear:f,beforeEnter:a,enter:f,leave:function(t,n){Object.assign(t.style,o),setTimeout(n,i)}}}}return N(n)&&N(o)?{props:{duration:i,appear:!0,appearActiveClass:n,enterActiveClass:n,leaveActiveClass:o}}:{}},normalizedAnimationOverlap:function(){var t=this.animationOverlap;return(t=Math.abs(t))<1&&(t=1/t),t},separateAnimationDelay:function(){var t=this.cloudWords;if(1<t.length)return(this.animationDuration-this.separateAnimationDuration)/(t.length-1);return 0},separateAnimationDuration:function(){var t=this.cloudWords;if(0<t.length){var n=this.animationDuration,i=this.normalizedAnimationOverlap;return n/Math.min(i,t.length)}return 0}};function q(t){return c(t)?t:n(t)}function z(t){return void 0===t}function D(t,n){return t.postMessage(n),o=t,new Promise(function(i,r){var e,t=function(t){var n=t.data;e(),i(n)},n=function(t){var n=t.error;e(),r(n)};e=function(){o.removeEventListener("message",t),o.removeEventListener("error",n)},o.addEventListener("message",t),o.addEventListener("error",n)});var o}function A(t,n,i){return Math.ceil(t*Math.abs(Math.sin(i))+n*Math.abs(Math.cos(i)))}function B(t,n,i){return Math.ceil(t*Math.abs(Math.cos(i))+n*Math.abs(Math.sin(i)))}function k(t,n,i,r,e){return[t,n,i,r+"px",e].join(" ")}function P(t,n){return Math.ceil(t/n)*n}function E(t,n,i){var r=i().getContext("2d");return r.font=n,r.measureText(t).width}var H=function(t,n,i,r,e,o,u){this.t=t,this.n=n,this.i=i,this.r=r,this.e=e,this.o=o,this.u=u,this.a=1,this.f=0,this.s=0,this.c=0},o={h:{configurable:!0},l:{configurable:!0},d:{configurable:!0},v:{configurable:!0},p:{configurable:!0},m:{configurable:!0},g:{configurable:!0},b:{configurable:!0},y:{configurable:!0},M:{configurable:!0},w:{configurable:!0},x:{configurable:!0},S:{configurable:!0},j:{configurable:!0},F:{configurable:!0},O:{configurable:!0},W:{configurable:!0},A:{configurable:!0},B:{configurable:!0}};o.h.get=function(){return this.a},o.h.set=function(t){this.a!==t&&(this.a=t,this.k=void 0)},o.l.get=function(){return k(this.o,this.e,this.r,this.h,this.i)},o.d.get=function(){return void 0===this.P&&(this.P=E(this.t,k(this.o,this.e,this.r,1,this.i),this.u)),this.P},o.v.get=function(){return this.d*this.h},o.p.get=function(){return this.s*this.h},o.p.set=function(t){this.s=t/this.h},o.m.get=function(){return this.c*this.h},o.m.set=function(t){this.c=t/this.h},o.g.get=function(){return B(this.v,this.h,this.n)},o.b.get=function(){return A(this.v,this.h,this.n)},o.y.get=function(){return this.p-this.g/2},o.M.get=function(){return this.m-this.b/2},o.w.get=function(){return this.f},o.w.set=function(t){this.f!==t&&(this.f=t,this.k=void 0)},o.x.get=function(){return void 0===this.k&&(this.k=function(t,n,i,r,e,o,u,a,f){var s=k(n,i,r,e*=4,o),c=E(t,s,f),h=u*e*2,l=f(),d=l.getContext("2d"),v=P(B(h+2*e+c,h+3*e,a),4),p=P(A(h+2*e+c,h+3*e,a),4);l.width=v,l.height=p,d.translate(v/2,p/2),d.rotate(a),d.font=s,d.textAlign="center",d.textBaseline="middle",d.fillText(t,0,0),0<h&&(d.miterLimit=1,d.lineWidth=h,d.strokeText(t,0,0));for(var m=d.getImageData(0,0,v,p).data,g=[],b=1/0,y=0,M=1/0,w=0,x=v/4,S=p/4,j=0;j<x;++j)for(var F=0;F<S;++F)t:for(var O=0;O<4;++O)for(var W=0;W<4;++W)if(m[4*(v*(4*F+W)+(4*j+O))+3]){g.push([j,F]),b=Math.min(j,b),y=Math.max(j+1,y),M=Math.min(F,M),w=Math.max(F+1,w);break t}return 0<g.length?[g.map(function(t){var n=t[0],i=t[1];return[n-b,i-M]}),y-b,w-M,Math.ceil(x/2)-b,Math.ceil(S/2)-M]:[g,0,0,0,0]}(this.t,this.o,this.e,this.r,this.h,this.i,this.w,this.n,this.u)),this.k},o.S.get=function(){return this.x[0]},o.j.get=function(){return this.x[1]},o.F.get=function(){return this.x[2]},o.O.get=function(){return this.x[3]},o.W.get=function(){return this.x[4]},o.A.get=function(){return Math.ceil(this.p)-this.O},o.A.set=function(t){this.p=t+this.O},o.B.get=function(){return Math.ceil(this.m)-this.W},o.B.set=function(t){this.m=t+this.W},Object.defineProperties(H.prototype,o);var u,a={name:"VueWordCloud",mixins:[(u={cloudWords:{get:function(s){var t,r=this,n=this,c=n.elementWidth,h=n.elementHeight,p=n.words,i=n.text,e=n.weight,o=n.rotation,u=n.rotationUnit,a=n.fontFamily,f=n.fontWeight,l=n.fontVariant,d=n.fontStyle,v=n.color,m=n.spacing,g=n.fontSizeRatio,b=n.createCanvas,y=n.loadFont,M=n.createWorker;t=g,g=1<(t=Math.abs(t))?1/t:t;var w,x,S,j=(x=(w=[c,h])[0],(S=w[1])<x?[1,S/x]:x<S?[x/S,1]:[1,1]);if(0<c&&0<h){var F=q(i),O=q(e),W=q(o),A=q(u),B=q(a),k=q(f),P=q(l),E=q(d),T=q(v);return p=p.map(function(t,n){var i,r,e,o,u,a,f,s,c,h,l;t&&(N(t)?e=t:Array.isArray(t)?(e=(i=t)[0],o=i[1]):L(t)&&(e=(r=t).text,o=r.weight,u=r.rotation,a=r.rotationUnit,f=r.fontFamily,s=r.fontWeight,c=r.fontVariant,h=r.fontStyle,l=r.color)),z(e)&&(e=F(t,n,p)),z(o)&&(o=O(t,n,p)),z(u)&&(u=W(t,n,p)),z(a)&&(a=A(t,n,p)),z(f)&&(f=B(t,n,p)),z(s)&&(s=k(t,n,p)),z(c)&&(c=P(t,n,p)),z(h)&&(h=E(t,n,p)),z(l)&&(l=T(t,n,p));var d=new H(e,function(){switch(a){case"turn":return u*Math.PI*2;case"deg":return u*Math.PI/180}return u}(),f,s,c,h,b);return Object.assign(d,{T:t,C:o,L:l}),d}),Promise.resolve().then(function(){return Promise.all(p.map(function(t){var n=t.i,i=t.o,r=t.r,e=t.t;return y(n,i,r,e)}))}).catch(C).then(function(){if(0<(p=p.filter(function(t){return 0<t.v}).sort(function(t,n){return n.C-t.C})).length){var t=p[0],n=(i=p)[i.length-1],e=t.C,o=n.C;if(o<e){var u=0<g?1/g:0<o?e/o:e<0?o/e:1+e-o;p.forEach(function(t){var n,i,r;t.h=(n=t.C,(r=1)+(n-(i=o))*(u-r)/(e-i))})}p.reduceRight(function(t,n){return n.h<2*t?n.h/=t:(t=n.h,n.h=1),n.N=t},1),p.forEach(function(t){t.h*=4});var a=M('!function(){"use strict";var h=function(r){self.removeEventListener("message",h);var i,o,v,c,s,n=r.data,t=function(){i={},s=c=v=o=0};t();var f=function(){return Math.ceil((o+v)/2)},a=function(){return Math.ceil((c+s)/2)},u=function(){return{left:f(),top:a(),width:v-o,height:s-c}},e=function(u,r,t){return function(r,t,n){var f,a,u=r[0],e=r[1],i=t[0],o=t[1];e<u?(f=1,a=e/u):f=u<e?(a=1,u/e):a=1;var v=[i,o];if(n(v))return v;for(var c=i,s=o,h=i,M=o,l=c,g=s;;){i-=f,o-=a,c+=f,s+=a;var d=Math.floor(i),m=Math.floor(o),p=Math.ceil(c),w=Math.ceil(s);if(l<p)for(var B=m;B<w;++B){var F=[p,B];if(n(F))return F}if(g<w)for(var b=p;d<b;--b){var j=[b,w];if(n(j))return j}if(d<h)for(var k=w;m<k;--k){var q=[d,k];if(n(q))return q}if(m<M)for(var x=d;x<p;++x){var y=[x,m];if(n(y))return y}h=d,M=m,l=p,g=w}}(n,[r+f(),t+a()],function(r){var f,a,t=r[0],n=r[1];return f=t,a=n,u.every(function(r){var t=r[0],n=r[1];return!i[f+t+"|"+(a+n)]})})};self.postMessage({}),self.addEventListener("message",function(r){self.postMessage({getBounds:u,put:function(r,u,e){r.forEach(function(r){var t=r[0],n=r[1],f=u+t,a=e+n;i[f+"|"+a]=!0,o=Math.min(f,o),v=Math.max(f+1,v),c=Math.min(a,c),s=Math.max(a+1,s)})},findFit:e,clear:t}[r.data.name].apply(null,r.data.args))})};self.addEventListener("message",h)}();\n'),f={completedWords:0,totalWords:p.length};return Promise.resolve().then(function(){return s.throwIfInterrupted(),r.progress=f,D(a,j)}).then(function(){s.throwIfInterrupted(),f.completedWords++;var n=Promise.resolve();return p.reduce(function(t,r,e){return n=n.then(function(){return r.N<t.N?Promise.resolve().then(function(){return D(a,{name:"clear"})}).then(function(){var n=Promise.resolve(),i=t.N/r.N;return p.slice(0,e).forEach(function(t){n=n.then(function(){return t.h*=i,D(a,{name:"put",args:[t.S,t.A,t.B]})})}),n}):D(a,{name:"put",args:[t.S,t.A,t.B]})}).then(function(){return r.w=m,D(a,{name:"findFit",args:[r.S,r.A,r.B]})}).then(function(t){var n=t[0],i=t[1];s.throwIfInterrupted(),f.completedWords++,r.A=n,r.B=i,r.w=0}),r}),n}).then(function(){return D(a,{name:"put",args:[n.S,n.A,n.B]})}).then(function(){return D(a,{name:"getBounds"})}).then(function(t){var n=t.left,i=t.top,r=t.width,e=t.height;if(0<r&&0<e){var o=Math.min(c/r,h/e);p.forEach(function(t){t.p-=n,t.m-=i,t.h*=o})}var v=new Set;return p.map(function(t){for(var n=t.T,i=t.t,r=t.C,e=t.n,o=t.i,u=t.r,a=t.e,f=t.o,s=t.l,c=t.p,h=t.m,l=t.L,d=JSON.stringify([i,o,u,a,f]);v.has(d);)d+="!";return v.add(d),{key:d,word:n,text:i,weight:r,rotation:e,font:s,color:l,left:c,top:h}})}).finally(function(){a.terminate()}).finally(function(){s.throwIfInterrupted(),r.progress=null})}var i;return[]})}return[]},default:i}},{data:function(){var n={};return Object.keys(u).forEach(function(t){n[d+t]={}}),n},computed:{},beforeCreate:function(){var i=this,s=new Set;Object.entries(u).forEach(function(t){var r=t[0],n=t[1],e=n.get,o=n.default,u=n.errorHandler;void 0===u&&(u=C);var a,f=!0;i.$options.computed[r]=function(){return this[d+r],this[l+r],o},i.$options.computed[l+r]=function(){var n=this;a&&(a.interrupt(),s.delete(a)),f&&(f=!1,c(o)&&(o=o.call(this)));var i=new h(o);a=i,s.add(a),new Promise(function(t){t(e.call(n,i))}).then(function(t){i.throwIfInterrupted(),o=t,n[d+r]={}}).catch(u)}})}})],props:r,data:function(){return{elementWidth:0,elementHeight:0,progress:null}},computed:e,watch:{cloudWords:function(t){this.$emit("update:cloudWords",t)},progress:{handler:function(t){this.$emit("update:progress",t)},deep:!0,immediate:!0}},mounted:function(){var n,i,r,e,t=this;n=function(){if(t._isDestroyed)return!1;t.updateElementSize()},i=1e3,r=function(t){requestAnimationFrame(function(){!1!==n()&&setTimeout(t,i)})},(e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return r.call.apply(r,[this,e].concat(t))})()},methods:{updateElementSize:function(){var t=this.$el;t&&(this.elementWidth=t.offsetWidth,this.elementHeight=t.offsetHeight)}},render:function(c){var t=this,h=t.$scopedSlots,l=t.animationEasing,d=t.animationOptions,n=t.cloudWords,v=t.separateAnimationDelay,p=t.separateAnimationDuration;return h=Object.assign({},{default:function(t){return t.text}},h),c("div",{style:{height:"100%",position:"relative",width:"100%"}},[c("div",{style:{left:"50%",position:"absolute",top:"50%",transform:"translate(-50%,-50%)"}},n.map(function(t,n){var i=t.color,r=t.font,e=t.left,o=t.rotation,u=t.text,a=t.top,f=t.weight,s=t.word;return c("transition",Object.assign({},d),[c("div",{key:n,style:Object.assign({},{left:e+"px",position:"absolute",top:a+"px"},0<p?{animation:[p+"ms",l,v*n+"ms"].join(" "),transition:["all",p+"ms",l,v*n+"ms"].join(" ")}:{})},[c("div",{style:Object.assign({},{color:i,font:r,left:"50%",position:"absolute",top:"50%",transform:["translate(-50%,-50%)","rotate("+o+"rad)"].join(" "),whiteSpace:"nowrap"},0<p?{transition:["all",p+"ms",l,v*n+"ms"].join(" ")}:{})},[h.default({color:i,font:r,left:e,text:u,top:a,weight:f,word:s})])])])}))])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(a.name,a),a});
