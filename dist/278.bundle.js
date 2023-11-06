/*! For license information please see 278.bundle.js.LICENSE.txt */
(self.webpackChunktest_task_courses=self.webpackChunktest_task_courses||[]).push([[278],{185:t=>{t.exports={functional:!0,render(t,r){const{_c:e,_v:n,data:o,children:i=[]}=r,{class:a,staticClass:c,style:s,staticStyle:u,attrs:l={},...f}=o;return e("svg",{class:[a,c],style:[s,u],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200"},l),...f},i.concat([e("rect",{attrs:{fill:"#2993DE",width:"100%",height:"100%"}}),e("circle",{attrs:{fill:"#FFF",stroke:"#FFF","stroke-width":"15",r:"15",cx:"40",cy:"65"}},[e("animate",{attrs:{attributeName:"cy",calcMode:"spline",dur:"2",values:"65;135;65;",keySplines:".5 0 .5 1;.5 0 .5 1",repeatCount:"indefinite",begin:"-.4"}})]),e("circle",{attrs:{fill:"#FFF",stroke:"#FFF","stroke-width":"15",r:"15",cx:"100",cy:"65"}},[e("animate",{attrs:{attributeName:"cy",calcMode:"spline",dur:"2",values:"65;135;65;",keySplines:".5 0 .5 1;.5 0 .5 1",repeatCount:"indefinite",begin:"-.2"}})]),e("circle",{attrs:{fill:"#FFF",stroke:"#FFF","stroke-width":"15",r:"15",cx:"160",cy:"65"}},[e("animate",{attrs:{attributeName:"cy",calcMode:"spline",dur:"2",values:"65;135;65;",keySplines:".5 0 .5 1;.5 0 .5 1",repeatCount:"indefinite",begin:"0"}})])]))}}},883:(t,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>h});var n=function(){var t=this._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"login"},[t("vLoginForm")],1)])};n._withStripped=!0;var o=function(){var t=this,r=t._self._c;return r("form",{staticClass:"login-form form",on:{submit:function(r){return r.preventDefault(),t.handleAuth.apply(null,arguments)}}},[t._v("\n  "+t._s(t.isProduction)+"\n  "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-input",class:{"form-input--invalid":t.submitted&&!t.email},attrs:{type:"text",name:"email"},domProps:{value:t.email},on:{input:function(r){r.target.composing||(t.email=r.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn--primary btn--full",attrs:{disabled:t.loading}},[t.loading?t._e():r("span",{staticClass:"btn-text"},[t._v("Login")]),t._v(" "),t.loading?r("span",{staticClass:"btn--icon btn--loader"},[r("loader")],1):t._e()])]),t._v(" "),t.error?r("span",{staticClass:"form-message form-message--error"},[t._v(t._s(t.error))]):t._e()])};o._withStripped=!0;var i=e(185);function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(){c=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var i=r&&r.prototype instanceof w?r:w,a=Object.create(i.prototype),c=new P(n||[]);return o(a,"_invoke",{value:S(t,e,c)}),a}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var v="suspendedStart",d="suspendedYield",y="executing",m="completed",g={};function w(){}function b(){}function x(){}var _={};f(_,s,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(G([])));k&&k!==e&&n.call(k,s)&&(_=k);var E=x.prototype=w.prototype=Object.create(_);function F(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function C(t,r){function e(o,i,c,s){var u=p(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==a(f)&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,c,s)}),(function(t){e("throw",t,c,s)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,s)}))}s(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function S(r,e,n){var o=v;return function(i,a){if(o===y)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=O(c,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(r,e,n);if("normal"===u.type){if(o=n.done?m:d,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function O(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,O(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(r){if(r||""===r){var e=r[s];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(a(r)+" is not iterable")}return b.prototype=x,o(E,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},F(C.prototype),f(C.prototype,u,(function(){return this})),r.AsyncIterator=C,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new C(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},F(E),f(E,l,"Generator"),f(E,s,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,P.prototype={constructor:P,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:G(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}function s(t,r,e,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void e(t)}c.done?r(s):Promise.resolve(s).then(n,o)}const u={components:{Loader:e.n(i)()},data:function(){return{email:"",submitted:!1,loading:!1,error:"",isDevEnv:"localhost"===!!location.hostname}},methods:{handleAuth:function(){var t,r=this;return(t=c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.submitted=!0,r.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){t.next=4;break}return r.error="Please enter your email.",t.abrupt("return");case 4:return t.prev=4,t.next=7,r.login(r.email);case 7:r.isDevEnv?r.$router.push({path:"/"}):r.$router.push({path:"/test-task-courses/"}),location.reload(),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(4),r.error="An error occurred during login.",console.error("Fetch error:",t.t0);case 15:return t.prev=15,r.loading=!1,t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[4,11,15,18]])})),function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){s(i,n,o,a,c,"next",t)}function c(t){s(i,n,o,a,c,"throw",t)}a(void 0)}))})()},login:function(t){return this.$store.dispatch("auth/login",t)}}};var l=e(900);const f={components:{vLoginForm:(0,l.Z)(u,o,[],!1,null,null,null).exports}},h=(0,l.Z)(f,n,[],!1,null,null,null).exports}}]);