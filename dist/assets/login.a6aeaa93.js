import{s as e,q as t,v as r,a as n,r as o,b as a,p as s,e as i,f as u,g as c,h as f,i as l,x as d,m as p,j as h}from"./index.48b02cb9.js";var m=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},g=Object.prototype.toString;function y(e){return"[object Array]"===g.call(e)}function v(e){return void 0===e}function w(e){return null!==e&&"object"==typeof e}function b(e){if("[object Object]"!==g.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function E(e){return"[object Function]"===g.call(e)}function x(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),y(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var j={isArray:y,isArrayBuffer:function(e){return"[object ArrayBuffer]"===g.call(e)},isBuffer:function(e){return null!==e&&!v(e)&&null!==e.constructor&&!v(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:w,isPlainObject:b,isUndefined:v,isDate:function(e){return"[object Date]"===g.call(e)},isFile:function(e){return"[object File]"===g.call(e)},isBlob:function(e){return"[object Blob]"===g.call(e)},isFunction:E,isStream:function(e){return w(e)&&E(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:x,merge:function e(){var t={};function r(r,n){b(t[n])&&b(r)?t[n]=e(t[n],r):b(r)?t[n]=e({},r):y(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)x(arguments[n],r);return t},extend:function(e,t,r){return x(t,(function(t,n){e[n]=r&&"function"==typeof t?m(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function C(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var S=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(j.isURLSearchParams(t))n=t.toString();else{var o=[];j.forEach(t,(function(e,t){null!=e&&(j.isArray(e)?t+="[]":e=[e],j.forEach(e,(function(e){j.isDate(e)?e=e.toISOString():j.isObject(e)&&(e=JSON.stringify(e)),o.push(C(t)+"="+C(e))})))})),n=o.join("&")}if(n){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e};function R(){this.handlers=[]}R.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},R.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},R.prototype.forEach=function(e){j.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var O=R,A=function(e,t,r){return j.forEach(r,(function(r){e=r(e,t)})),e},N=function(e){return!(!e||!e.__CANCEL__)},U=function(e,t){j.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},B=function(e,t,r,n,o){return function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,r,n,o)},P=j.isStandardBrowserEnv()?{write:function(e,t,r,n,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),j.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),j.isString(n)&&s.push("path="+n),j.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},T=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],k=j.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=j.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},q=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers;j.isFormData(n)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var s=e.auth.username||"",i=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(s+":"+i)}var u,c,f=(u=e.baseURL,c=e.url,u&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(c)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(u,c):c);if(a.open(e.method.toUpperCase(),S(f,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,a.onreadystatechange=function(){if(a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var n,o,s,i,u,c="getAllResponseHeaders"in a?(n=a.getAllResponseHeaders(),u={},n?(j.forEach(n.split("\n"),(function(e){if(i=e.indexOf(":"),o=j.trim(e.substr(0,i)).toLowerCase(),s=j.trim(e.substr(i+1)),o){if(u[o]&&T.indexOf(o)>=0)return;u[o]="set-cookie"===o?(u[o]?u[o]:[]).concat([s]):u[o]?u[o]+", "+s:s}})),u):u):null,f={data:e.responseType&&"text"!==e.responseType?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:c,config:e,request:a};!function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(B("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}(t,r,f),a=null}},a.onabort=function(){a&&(r(B("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){r(B("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(B(t,e,"ECONNABORTED",a)),a=null},j.isStandardBrowserEnv()){var l=(e.withCredentials||k(f))&&e.xsrfCookieName?P.read(e.xsrfCookieName):void 0;l&&(o[e.xsrfHeaderName]=l)}if("setRequestHeader"in a&&j.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)})),j.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),e.responseType)try{a.responseType=e.responseType}catch(d){if("json"!==e.responseType)throw d}"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){a&&(a.abort(),r(e),a=null)})),n||(n=null),a.send(n)}))},L={"Content-Type":"application/x-www-form-urlencoded"};function F(e,t){!j.isUndefined(e)&&j.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var D,_={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(D=q),D),transformRequest:[function(e,t){return U(t,"Accept"),U(t,"Content-Type"),j.isFormData(e)||j.isArrayBuffer(e)||j.isBuffer(e)||j.isStream(e)||j.isFile(e)||j.isBlob(e)?e:j.isArrayBufferView(e)?e.buffer:j.isURLSearchParams(e)?(F(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):j.isObject(e)?(F(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};_.headers={common:{Accept:"application/json, text/plain, */*"}},j.forEach(["delete","get","head"],(function(e){_.headers[e]={}})),j.forEach(["post","put","patch"],(function(e){_.headers[e]=j.merge(L)}));var I=_;function z(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var V=function(e){return z(e),e.headers=e.headers||{},e.data=A(e.data,e.headers,e.transformRequest),e.headers=j.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),j.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||I.adapter)(e).then((function(t){return z(e),t.data=A(t.data,t.headers,e.transformResponse),t}),(function(t){return N(t)||(z(e),t&&t.response&&(t.response.data=A(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},H=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function i(e,t){return j.isPlainObject(e)&&j.isPlainObject(t)?j.merge(e,t):j.isPlainObject(t)?j.merge({},t):j.isArray(t)?t.slice():t}function u(n){j.isUndefined(t[n])?j.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(e[n],t[n])}j.forEach(n,(function(e){j.isUndefined(t[e])||(r[e]=i(void 0,t[e]))})),j.forEach(o,u),j.forEach(a,(function(n){j.isUndefined(t[n])?j.isUndefined(e[n])||(r[n]=i(void 0,e[n])):r[n]=i(void 0,t[n])})),j.forEach(s,(function(n){n in t?r[n]=i(e[n],t[n]):n in e&&(r[n]=i(void 0,e[n]))}));var c=n.concat(o).concat(a).concat(s),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return j.forEach(f,u),r};function M(e){this.defaults=e,this.interceptors={request:new O,response:new O}}M.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=H(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[V,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},M.prototype.getUri=function(e){return e=H(this.defaults,e),S(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},j.forEach(["delete","get","head","options"],(function(e){M.prototype[e]=function(t,r){return this.request(H(r||{},{method:e,url:t,data:(r||{}).data}))}})),j.forEach(["post","put","patch"],(function(e){M.prototype[e]=function(t,r,n){return this.request(H(n||{},{method:e,url:t,data:r}))}}));var K=M;function J(e){this.message=e}J.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},J.prototype.__CANCEL__=!0;var X=J;function $(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new X(e),t(r.reason))}))}$.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},$.source=function(){var e;return{token:new $((function(t){e=t})),cancel:e}};var G=$;function Q(e){var t=new K(e),r=m(K.prototype.request,t);return j.extend(r,K.prototype,t),j.extend(r,t),r}var W=Q(I);W.Axios=K,W.create=function(e){return Q(H(W.defaults,e))},W.Cancel=X,W.CancelToken=G,W.isCancel=N,W.all=function(e){return Promise.all(e)},W.spread=function(e){return function(t){return e.apply(null,t)}},W.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var Y=W,Z=W;Y.default=Z;const ee=Y.create({baseURL:"http://localhost:3000",timeout:5e3});ee.interceptors.request.use((t=>(e.getters.token,t)),(e=>Promise.reject(e))),ee.interceptors.response.use((e=>200===e.status?Promise.resolve(e.data):(t.error(e.data.message),Promise.reject(e.data))),(e=>(403==e.response.status?(t.error("会话已过期"),r.replace("/login")):t.error(e.response.data.message),Promise.reject(e))));const te={setup(){const e=n(null),r=o({account:"admin",password:"admin"}),s=o({account:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}),i=a();return{loginForm:r,login:()=>{e.value.validate().then((()=>{if("admin"===r.account&&"admin"===r.password){let e={metaData:{username:"admin"},token:"this is token"};localStorage.setItem("userInfo",JSON.stringify(e)),i.replace("/index")}else t.error("账号或密码输入不正确！")}))},formInline:e,ruleForm:s}}},re=p();s("data-v-c21f160a");const ne={class:"login"},oe={class:"login-form"},ae=h("登录");i();const se=re(((e,t,r,n,o,a)=>{const s=u("el-input"),i=u("el-form-item"),p=u("el-button"),h=u("el-form");return c(),f("section",ne,[l("div",oe,[l(h,{ref:"formInline",model:n.loginForm,"label-width":"80px",rules:n.ruleForm},{default:re((()=>[l(i,{label:"账号：",prop:"account"},{default:re((()=>[l(s,{modelValue:n.loginForm.account,"onUpdate:modelValue":t[1]||(t[1]=e=>n.loginForm.account=e),size:"large",placeholder:"admin",onKeyup:d(n.login,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),l(i,{label:"密码：",prop:"password"},{default:re((()=>[l(s,{modelValue:n.loginForm.password,"onUpdate:modelValue":t[2]||(t[2]=e=>n.loginForm.password=e),size:"large",placeholder:"admin",type:"password",onKeyup:d(n.login,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),l(i,null,{default:re((()=>[l(p,{size:"large",type:"primary",class:"btn",onClick:n.login},{default:re((()=>[ae])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])])}));te.render=se,te.__scopeId="data-v-c21f160a";export default te;
