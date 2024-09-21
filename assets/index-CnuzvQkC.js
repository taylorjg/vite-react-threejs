function fy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function dy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vg={exports:{}},Mc={},Gg={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),hy=Symbol.for("react.portal"),py=Symbol.for("react.fragment"),my=Symbol.for("react.strict_mode"),gy=Symbol.for("react.profiler"),_y=Symbol.for("react.provider"),vy=Symbol.for("react.context"),yy=Symbol.for("react.forward_ref"),xy=Symbol.for("react.suspense"),Sy=Symbol.for("react.memo"),My=Symbol.for("react.lazy"),mp=Symbol.iterator;function Ey(t){return t===null||typeof t!="object"?null:(t=mp&&t[mp]||t["@@iterator"],typeof t=="function"?t:null)}var Wg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$g=Object.assign,Xg={};function as(t,e,n){this.props=t,this.context=e,this.refs=Xg,this.updater=n||Wg}as.prototype.isReactComponent={};as.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};as.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jg(){}jg.prototype=as.prototype;function Vd(t,e,n){this.props=t,this.context=e,this.refs=Xg,this.updater=n||Wg}var Gd=Vd.prototype=new jg;Gd.constructor=Vd;$g(Gd,as.prototype);Gd.isPureReactComponent=!0;var gp=Array.isArray,Yg=Object.prototype.hasOwnProperty,Wd={current:null},qg={key:!0,ref:!0,__self:!0,__source:!0};function Kg(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Yg.call(e,i)&&!qg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ma,type:t,key:o,ref:s,props:r,_owner:Wd.current}}function Ty(t,e){return{$$typeof:ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $d(t){return typeof t=="object"&&t!==null&&t.$$typeof===ma}function wy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _p=/\/+/g;function ru(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wy(""+t.key):e.toString(36)}function Ml(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ma:case hy:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+ru(s,0):i,gp(r)?(n="",t!=null&&(n=t.replace(_p,"$&/")+"/"),Ml(r,e,n,"",function(c){return c})):r!=null&&($d(r)&&(r=Ty(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(_p,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",gp(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+ru(o,a);s+=Ml(o,e,n,l,r)}else if(l=Ey(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+ru(o,a++),s+=Ml(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Da(t,e,n){if(t==null)return t;var i=[],r=0;return Ml(t,i,"","",function(o){return e.call(n,o,r++)}),i}function Ay(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tn={current:null},El={transition:null},Cy={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:El,ReactCurrentOwner:Wd};function Zg(){throw Error("act(...) is not supported in production builds of React.")}Be.Children={map:Da,forEach:function(t,e,n){Da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Da(t,function(){e++}),e},toArray:function(t){return Da(t,function(e){return e})||[]},only:function(t){if(!$d(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=as;Be.Fragment=py;Be.Profiler=gy;Be.PureComponent=Vd;Be.StrictMode=my;Be.Suspense=xy;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cy;Be.act=Zg;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=$g({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Wd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Yg.call(e,l)&&!qg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ma,type:t.type,key:r,ref:o,props:i,_owner:s}};Be.createContext=function(t){return t={$$typeof:vy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_y,_context:t},t.Consumer=t};Be.createElement=Kg;Be.createFactory=function(t){var e=Kg.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:yy,render:t}};Be.isValidElement=$d;Be.lazy=function(t){return{$$typeof:My,_payload:{_status:-1,_result:t},_init:Ay}};Be.memo=function(t,e){return{$$typeof:Sy,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=El.transition;El.transition={};try{t()}finally{El.transition=e}};Be.unstable_act=Zg;Be.useCallback=function(t,e){return tn.current.useCallback(t,e)};Be.useContext=function(t){return tn.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return tn.current.useDeferredValue(t)};Be.useEffect=function(t,e){return tn.current.useEffect(t,e)};Be.useId=function(){return tn.current.useId()};Be.useImperativeHandle=function(t,e,n){return tn.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return tn.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return tn.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return tn.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return tn.current.useReducer(t,e,n)};Be.useRef=function(t){return tn.current.useRef(t)};Be.useState=function(t){return tn.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return tn.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return tn.current.useTransition()};Be.version="18.3.1";Gg.exports=Be;var Ue=Gg.exports;const Ry=dy(Ue),vp=fy({__proto__:null,default:Ry},[Ue]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var by=Ue,Py=Symbol.for("react.element"),Ly=Symbol.for("react.fragment"),Dy=Object.prototype.hasOwnProperty,Iy=by.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uy={key:!0,ref:!0,__self:!0,__source:!0};function Qg(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Dy.call(e,i)&&!Uy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Py,type:t,key:o,ref:s,props:r,_owner:Iy.current}}Mc.Fragment=Ly;Mc.jsx=Qg;Mc.jsxs=Qg;Vg.exports=Mc;var tt=Vg.exports,Jg={exports:{}},An={},e0={exports:{}},t0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,$){var Q=D.length;D.push($);e:for(;0<Q;){var oe=Q-1>>>1,Se=D[oe];if(0<r(Se,$))D[oe]=$,D[Q]=Se,Q=oe;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var $=D[0],Q=D.pop();if(Q!==$){D[0]=Q;e:for(var oe=0,Se=D.length,ze=Se>>>1;oe<ze;){var W=2*(oe+1)-1,ie=D[W],fe=W+1,ue=D[fe];if(0>r(ie,Q))fe<Se&&0>r(ue,ie)?(D[oe]=ue,D[fe]=Q,oe=fe):(D[oe]=ie,D[W]=Q,oe=W);else if(fe<Se&&0>r(ue,Q))D[oe]=ue,D[fe]=Q,oe=fe;else break e}}return $}function r(D,$){var Q=D.sortIndex-$.sortIndex;return Q!==0?Q:D.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],f=1,h=null,d=3,m=!1,y=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=D)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function M(D){if(x=!1,g(D),!y)if(n(l)!==null)y=!0,G(C);else{var $=n(c);$!==null&&q(M,$.startTime-D)}}function C(D,$){y=!1,x&&(x=!1,u(L),L=-1),m=!0;var Q=d;try{for(g($),h=n(l);h!==null&&(!(h.expirationTime>$)||D&&!b());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,d=h.priorityLevel;var Se=oe(h.expirationTime<=$);$=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&i(l),g($)}else i(l);h=n(l)}if(h!==null)var ze=!0;else{var W=n(c);W!==null&&q(M,W.startTime-$),ze=!1}return ze}finally{h=null,d=Q,m=!1}}var A=!1,w=null,L=-1,p=5,S=-1;function b(){return!(t.unstable_now()-S<p)}function B(){if(w!==null){var D=t.unstable_now();S=D;var $=!0;try{$=w(!0,D)}finally{$?O():(A=!1,w=null)}}else A=!1}var O;if(typeof v=="function")O=function(){v(B)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,j=X.port2;X.port1.onmessage=B,O=function(){j.postMessage(null)}}else O=function(){_(B,0)};function G(D){w=D,A||(A=!0,O())}function q(D,$){L=_(function(){D(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,G(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):p=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var $=3;break;default:$=d}var Q=d;d=$;try{return D()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,$){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Q=d;d=D;try{return $()}finally{d=Q}},t.unstable_scheduleCallback=function(D,$,Q){var oe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,D){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Q+Se,D={id:f++,callback:$,priorityLevel:D,startTime:Q,expirationTime:Se,sortIndex:-1},Q>oe?(D.sortIndex=Q,e(c,D),n(l)===null&&D===n(c)&&(x?(u(L),L=-1):x=!0,q(M,Q-oe))):(D.sortIndex=Se,e(l,D),y||m||(y=!0,G(C))),D},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(D){var $=d;return function(){var Q=d;d=$;try{return D.apply(this,arguments)}finally{d=Q}}}})(t0);e0.exports=t0;var Ny=e0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fy=Ue,wn=Ny;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n0=new Set,js={};function Kr(t,e){Yo(t,e),Yo(t+"Capture",e)}function Yo(t,e){for(js[t]=e,t=0;t<e.length;t++)n0.add(e[t])}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uf=Object.prototype.hasOwnProperty,Oy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yp={},xp={};function ky(t){return uf.call(xp,t)?!0:uf.call(yp,t)?!1:Oy.test(t)?xp[t]=!0:(yp[t]=!0,!1)}function By(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zy(t,e,n,i){if(e===null||typeof e>"u"||By(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xd=/[\-:]([a-z])/g;function jd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xd,jd);Wt[e]=new nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xd,jd);Wt[e]=new nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xd,jd);Wt[e]=new nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new nn(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yd(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zy(e,n,r,i)&&(n=null),i||r===null?ky(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ki=Fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ia=Symbol.for("react.element"),To=Symbol.for("react.portal"),wo=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),ff=Symbol.for("react.profiler"),i0=Symbol.for("react.provider"),r0=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),df=Symbol.for("react.suspense"),hf=Symbol.for("react.suspense_list"),Zd=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),o0=Symbol.for("react.offscreen"),Sp=Symbol.iterator;function hs(t){return t===null||typeof t!="object"?null:(t=Sp&&t[Sp]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,ou;function bs(t){if(ou===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ou=e&&e[1]||""}return`
`+ou+t}var su=!1;function au(t,e){if(!t||su)return"";su=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{su=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bs(t):""}function Hy(t){switch(t.tag){case 5:return bs(t.type);case 16:return bs("Lazy");case 13:return bs("Suspense");case 19:return bs("SuspenseList");case 0:case 2:case 15:return t=au(t.type,!1),t;case 11:return t=au(t.type.render,!1),t;case 1:return t=au(t.type,!0),t;default:return""}}function pf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wo:return"Fragment";case To:return"Portal";case ff:return"Profiler";case qd:return"StrictMode";case df:return"Suspense";case hf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case r0:return(t.displayName||"Context")+".Consumer";case i0:return(t._context.displayName||"Context")+".Provider";case Kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zd:return e=t.displayName||null,e!==null?e:pf(t.type)||"Memo";case ji:e=t._payload,t=t._init;try{return pf(t(e))}catch{}}return null}function Vy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pf(e);case 8:return e===qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function s0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gy(t){var e=s0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ua(t){t._valueTracker||(t._valueTracker=Gy(t))}function a0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=s0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mf(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function l0(t,e){e=e.checked,e!=null&&Yd(t,"checked",e,!1)}function gf(t,e){l0(t,e);var n=fr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_f(t,e.type,n):e.hasOwnProperty("defaultValue")&&_f(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ep(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _f(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ps=Array.isArray;function Oo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function vf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Ps(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function c0(t,e){var n=fr(e.value),i=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function wp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function u0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?u0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Na,f0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ys(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wy=["Webkit","ms","Moz","O"];Object.keys(Fs).forEach(function(t){Wy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fs[e]=Fs[t]})});function d0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fs.hasOwnProperty(t)&&Fs[t]?(""+e).trim():e+"px"}function h0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=d0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var $y=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xf(t,e){if(e){if($y[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Sf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mf=null;function Qd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ef=null,ko=null,Bo=null;function Ap(t){if(t=va(t)){if(typeof Ef!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Cc(e),Ef(t.stateNode,t.type,e))}}function p0(t){ko?Bo?Bo.push(t):Bo=[t]:ko=t}function m0(){if(ko){var t=ko,e=Bo;if(Bo=ko=null,Ap(t),e)for(t=0;t<e.length;t++)Ap(e[t])}}function g0(t,e){return t(e)}function _0(){}var lu=!1;function v0(t,e,n){if(lu)return t(e,n);lu=!0;try{return g0(t,e,n)}finally{lu=!1,(ko!==null||Bo!==null)&&(_0(),m0())}}function qs(t,e){var n=t.stateNode;if(n===null)return null;var i=Cc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Tf=!1;if(Pi)try{var ps={};Object.defineProperty(ps,"passive",{get:function(){Tf=!0}}),window.addEventListener("test",ps,ps),window.removeEventListener("test",ps,ps)}catch{Tf=!1}function Xy(t,e,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Os=!1,$l=null,Xl=!1,wf=null,jy={onError:function(t){Os=!0,$l=t}};function Yy(t,e,n,i,r,o,s,a,l){Os=!1,$l=null,Xy.apply(jy,arguments)}function qy(t,e,n,i,r,o,s,a,l){if(Yy.apply(this,arguments),Os){if(Os){var c=$l;Os=!1,$l=null}else throw Error(ne(198));Xl||(Xl=!0,wf=c)}}function Zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function y0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cp(t){if(Zr(t)!==t)throw Error(ne(188))}function Ky(t){var e=t.alternate;if(!e){if(e=Zr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return Cp(r),t;if(o===i)return Cp(r),e;o=o.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function x0(t){return t=Ky(t),t!==null?S0(t):null}function S0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=S0(t);if(e!==null)return e;t=t.sibling}return null}var M0=wn.unstable_scheduleCallback,Rp=wn.unstable_cancelCallback,Zy=wn.unstable_shouldYield,Qy=wn.unstable_requestPaint,Et=wn.unstable_now,Jy=wn.unstable_getCurrentPriorityLevel,Jd=wn.unstable_ImmediatePriority,E0=wn.unstable_UserBlockingPriority,jl=wn.unstable_NormalPriority,ex=wn.unstable_LowPriority,T0=wn.unstable_IdlePriority,Ec=null,ui=null;function tx(t){if(ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(Ec,t,void 0,(t.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:rx,nx=Math.log,ix=Math.LN2;function rx(t){return t>>>=0,t===0?32:31-(nx(t)/ix|0)|0}var Fa=64,Oa=4194304;function Ls(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Ls(a):(o&=s,o!==0&&(i=Ls(o)))}else s=n&~r,s!==0?i=Ls(s):o!==0&&(i=Ls(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Kn(e),r=1<<n,i|=t[n],e&=~r;return i}function ox(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Kn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=ox(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Af(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function w0(){var t=Fa;return Fa<<=1,!(Fa&4194240)&&(Fa=64),t}function cu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kn(e),t[e]=n}function ax(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Kn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function eh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function A0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var C0,th,R0,b0,P0,Cf=!1,ka=[],tr=null,nr=null,ir=null,Ks=new Map,Zs=new Map,qi=[],lx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bp(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Ks.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zs.delete(e.pointerId)}}function ms(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=va(e),e!==null&&th(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function cx(t,e,n,i,r){switch(e){case"focusin":return tr=ms(tr,t,e,n,i,r),!0;case"dragenter":return nr=ms(nr,t,e,n,i,r),!0;case"mouseover":return ir=ms(ir,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Ks.set(o,ms(Ks.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Zs.set(o,ms(Zs.get(o)||null,t,e,n,i,r)),!0}return!1}function L0(t){var e=Ur(t.target);if(e!==null){var n=Zr(e);if(n!==null){if(e=n.tag,e===13){if(e=y0(n),e!==null){t.blockedOn=e,P0(t.priority,function(){R0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Mf=i,n.target.dispatchEvent(i),Mf=null}else return e=va(n),e!==null&&th(e),t.blockedOn=n,!1;e.shift()}return!0}function Pp(t,e,n){Tl(t)&&n.delete(e)}function ux(){Cf=!1,tr!==null&&Tl(tr)&&(tr=null),nr!==null&&Tl(nr)&&(nr=null),ir!==null&&Tl(ir)&&(ir=null),Ks.forEach(Pp),Zs.forEach(Pp)}function gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Cf||(Cf=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,ux)))}function Qs(t){function e(r){return gs(r,t)}if(0<ka.length){gs(ka[0],t);for(var n=1;n<ka.length;n++){var i=ka[n];i.blockedOn===t&&(i.blockedOn=null)}}for(tr!==null&&gs(tr,t),nr!==null&&gs(nr,t),ir!==null&&gs(ir,t),Ks.forEach(e),Zs.forEach(e),n=0;n<qi.length;n++)i=qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<qi.length&&(n=qi[0],n.blockedOn===null);)L0(n),n.blockedOn===null&&qi.shift()}var zo=ki.ReactCurrentBatchConfig,ql=!0;function fx(t,e,n,i){var r=nt,o=zo.transition;zo.transition=null;try{nt=1,nh(t,e,n,i)}finally{nt=r,zo.transition=o}}function dx(t,e,n,i){var r=nt,o=zo.transition;zo.transition=null;try{nt=4,nh(t,e,n,i)}finally{nt=r,zo.transition=o}}function nh(t,e,n,i){if(ql){var r=Rf(t,e,n,i);if(r===null)yu(t,e,i,Kl,n),bp(t,i);else if(cx(r,t,e,n,i))i.stopPropagation();else if(bp(t,i),e&4&&-1<lx.indexOf(t)){for(;r!==null;){var o=va(r);if(o!==null&&C0(o),o=Rf(t,e,n,i),o===null&&yu(t,e,i,Kl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else yu(t,e,i,null,n)}}var Kl=null;function Rf(t,e,n,i){if(Kl=null,t=Qd(i),t=Ur(t),t!==null)if(e=Zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=y0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Kl=t,null}function D0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jy()){case Jd:return 1;case E0:return 4;case jl:case ex:return 16;case T0:return 536870912;default:return 16}default:return 16}}var Ji=null,ih=null,wl=null;function I0(){if(wl)return wl;var t,e=ih,n=e.length,i,r="value"in Ji?Ji.value:Ji.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return wl=r.slice(t,1<i?1-i:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ba(){return!0}function Lp(){return!1}function Cn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ba:Lp,this.isPropagationStopped=Lp,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),e}var ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rh=Cn(ls),_a=_t({},ls,{view:0,detail:0}),hx=Cn(_a),uu,fu,_s,Tc=_t({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_s&&(_s&&t.type==="mousemove"?(uu=t.screenX-_s.screenX,fu=t.screenY-_s.screenY):fu=uu=0,_s=t),uu)},movementY:function(t){return"movementY"in t?t.movementY:fu}}),Dp=Cn(Tc),px=_t({},Tc,{dataTransfer:0}),mx=Cn(px),gx=_t({},_a,{relatedTarget:0}),du=Cn(gx),_x=_t({},ls,{animationName:0,elapsedTime:0,pseudoElement:0}),vx=Cn(_x),yx=_t({},ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xx=Cn(yx),Sx=_t({},ls,{data:0}),Ip=Cn(Sx),Mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Tx[t])?!!e[t]:!1}function oh(){return wx}var Ax=_t({},_a,{key:function(t){if(t.key){var e=Mx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ex[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oh,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cx=Cn(Ax),Rx=_t({},Tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=Cn(Rx),bx=_t({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oh}),Px=Cn(bx),Lx=_t({},ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dx=Cn(Lx),Ix=_t({},Tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ux=Cn(Ix),Nx=[9,13,27,32],sh=Pi&&"CompositionEvent"in window,ks=null;Pi&&"documentMode"in document&&(ks=document.documentMode);var Fx=Pi&&"TextEvent"in window&&!ks,U0=Pi&&(!sh||ks&&8<ks&&11>=ks),Np=" ",Fp=!1;function N0(t,e){switch(t){case"keyup":return Nx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function F0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ao=!1;function Ox(t,e){switch(t){case"compositionend":return F0(e);case"keypress":return e.which!==32?null:(Fp=!0,Np);case"textInput":return t=e.data,t===Np&&Fp?null:t;default:return null}}function kx(t,e){if(Ao)return t==="compositionend"||!sh&&N0(t,e)?(t=I0(),wl=ih=Ji=null,Ao=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return U0&&e.locale!=="ko"?null:e.data;default:return null}}var Bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Bx[t.type]:e==="textarea"}function O0(t,e,n,i){p0(i),e=Zl(e,"onChange"),0<e.length&&(n=new rh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Bs=null,Js=null;function zx(t){Y0(t,0)}function wc(t){var e=bo(t);if(a0(e))return t}function Hx(t,e){if(t==="change")return e}var k0=!1;if(Pi){var hu;if(Pi){var pu="oninput"in document;if(!pu){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),pu=typeof kp.oninput=="function"}hu=pu}else hu=!1;k0=hu&&(!document.documentMode||9<document.documentMode)}function Bp(){Bs&&(Bs.detachEvent("onpropertychange",B0),Js=Bs=null)}function B0(t){if(t.propertyName==="value"&&wc(Js)){var e=[];O0(e,Js,t,Qd(t)),v0(zx,e)}}function Vx(t,e,n){t==="focusin"?(Bp(),Bs=e,Js=n,Bs.attachEvent("onpropertychange",B0)):t==="focusout"&&Bp()}function Gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wc(Js)}function Wx(t,e){if(t==="click")return wc(e)}function $x(t,e){if(t==="input"||t==="change")return wc(e)}function Xx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:Xx;function ea(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!uf.call(e,r)||!Qn(t[r],e[r]))return!1}return!0}function zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hp(t,e){var n=zp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zp(n)}}function z0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?z0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function H0(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jx(t){var e=H0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&z0(n.ownerDocument.documentElement,n)){if(i!==null&&ah(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Hp(n,o);var s=Hp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Yx=Pi&&"documentMode"in document&&11>=document.documentMode,Co=null,bf=null,zs=null,Pf=!1;function Vp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pf||Co==null||Co!==Wl(i)||(i=Co,"selectionStart"in i&&ah(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),zs&&ea(zs,i)||(zs=i,i=Zl(bf,"onSelect"),0<i.length&&(e=new rh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Co)))}function za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ro={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionend:za("Transition","TransitionEnd")},mu={},V0={};Pi&&(V0=document.createElement("div").style,"AnimationEvent"in window||(delete Ro.animationend.animation,delete Ro.animationiteration.animation,delete Ro.animationstart.animation),"TransitionEvent"in window||delete Ro.transitionend.transition);function Ac(t){if(mu[t])return mu[t];if(!Ro[t])return t;var e=Ro[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in V0)return mu[t]=e[n];return t}var G0=Ac("animationend"),W0=Ac("animationiteration"),$0=Ac("animationstart"),X0=Ac("transitionend"),j0=new Map,Gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){j0.set(t,e),Kr(e,[t])}for(var gu=0;gu<Gp.length;gu++){var _u=Gp[gu],qx=_u.toLowerCase(),Kx=_u[0].toUpperCase()+_u.slice(1);gr(qx,"on"+Kx)}gr(G0,"onAnimationEnd");gr(W0,"onAnimationIteration");gr($0,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(X0,"onTransitionEnd");Yo("onMouseEnter",["mouseout","mouseover"]);Yo("onMouseLeave",["mouseout","mouseover"]);Yo("onPointerEnter",["pointerout","pointerover"]);Yo("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ds));function Wp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,qy(i,e,void 0,t),t.currentTarget=null}function Y0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Wp(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Wp(r,a,c),o=l}}}if(Xl)throw t=wf,Xl=!1,wf=null,t}function ct(t,e){var n=e[Nf];n===void 0&&(n=e[Nf]=new Set);var i=t+"__bubble";n.has(i)||(q0(e,t,2,!1),n.add(i))}function vu(t,e,n){var i=0;e&&(i|=4),q0(n,t,i,e)}var Ha="_reactListening"+Math.random().toString(36).slice(2);function ta(t){if(!t[Ha]){t[Ha]=!0,n0.forEach(function(n){n!=="selectionchange"&&(Zx.has(n)||vu(n,!1,t),vu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ha]||(e[Ha]=!0,vu("selectionchange",!1,e))}}function q0(t,e,n,i){switch(D0(e)){case 1:var r=fx;break;case 4:r=dx;break;default:r=nh}n=r.bind(null,e,n,t),r=void 0,!Tf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function yu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Ur(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}v0(function(){var c=o,f=Qd(n),h=[];e:{var d=j0.get(t);if(d!==void 0){var m=rh,y=t;switch(t){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":m=Cx;break;case"focusin":y="focus",m=du;break;case"focusout":y="blur",m=du;break;case"beforeblur":case"afterblur":m=du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Px;break;case G0:case W0:case $0:m=vx;break;case X0:m=Dx;break;case"scroll":m=hx;break;case"wheel":m=Ux;break;case"copy":case"cut":case"paste":m=xx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Up}var x=(e&4)!==0,_=!x&&t==="scroll",u=x?d!==null?d+"Capture":null:d;x=[];for(var v=c,g;v!==null;){g=v;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,u!==null&&(M=qs(v,u),M!=null&&x.push(na(v,M,g)))),_)break;v=v.return}0<x.length&&(d=new m(d,y,null,n,f),h.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Mf&&(y=n.relatedTarget||n.fromElement)&&(Ur(y)||y[Li]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=c,y=y?Ur(y):null,y!==null&&(_=Zr(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=c),m!==y)){if(x=Dp,M="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Up,M="onPointerLeave",u="onPointerEnter",v="pointer"),_=m==null?d:bo(m),g=y==null?d:bo(y),d=new x(M,v+"leave",m,n,f),d.target=_,d.relatedTarget=g,M=null,Ur(f)===c&&(x=new x(u,v+"enter",y,n,f),x.target=g,x.relatedTarget=_,M=x),_=M,m&&y)t:{for(x=m,u=y,v=0,g=x;g;g=eo(g))v++;for(g=0,M=u;M;M=eo(M))g++;for(;0<v-g;)x=eo(x),v--;for(;0<g-v;)u=eo(u),g--;for(;v--;){if(x===u||u!==null&&x===u.alternate)break t;x=eo(x),u=eo(u)}x=null}else x=null;m!==null&&$p(h,d,m,x,!1),y!==null&&_!==null&&$p(h,_,y,x,!0)}}e:{if(d=c?bo(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var C=Hx;else if(Op(d))if(k0)C=$x;else{C=Gx;var A=Vx}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=Wx);if(C&&(C=C(t,c))){O0(h,C,n,f);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&_f(d,"number",d.value)}switch(A=c?bo(c):window,t){case"focusin":(Op(A)||A.contentEditable==="true")&&(Co=A,bf=c,zs=null);break;case"focusout":zs=bf=Co=null;break;case"mousedown":Pf=!0;break;case"contextmenu":case"mouseup":case"dragend":Pf=!1,Vp(h,n,f);break;case"selectionchange":if(Yx)break;case"keydown":case"keyup":Vp(h,n,f)}var w;if(sh)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Ao?N0(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(U0&&n.locale!=="ko"&&(Ao||L!=="onCompositionStart"?L==="onCompositionEnd"&&Ao&&(w=I0()):(Ji=f,ih="value"in Ji?Ji.value:Ji.textContent,Ao=!0)),A=Zl(c,L),0<A.length&&(L=new Ip(L,t,null,n,f),h.push({event:L,listeners:A}),w?L.data=w:(w=F0(n),w!==null&&(L.data=w)))),(w=Fx?Ox(t,n):kx(t,n))&&(c=Zl(c,"onBeforeInput"),0<c.length&&(f=new Ip("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=w))}Y0(h,e)})}function na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=qs(t,n),o!=null&&i.unshift(na(t,o,r)),o=qs(t,e),o!=null&&i.push(na(t,o,r))),t=t.return}return i}function eo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $p(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=qs(n,o),l!=null&&s.unshift(na(n,l,a))):r||(l=qs(n,o),l!=null&&s.push(na(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Qx=/\r\n?/g,Jx=/\u0000|\uFFFD/g;function Xp(t){return(typeof t=="string"?t:""+t).replace(Qx,`
`).replace(Jx,"")}function Va(t,e,n){if(e=Xp(e),Xp(t)!==e&&n)throw Error(ne(425))}function Ql(){}var Lf=null,Df=null;function If(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uf=typeof setTimeout=="function"?setTimeout:void 0,eS=typeof clearTimeout=="function"?clearTimeout:void 0,jp=typeof Promise=="function"?Promise:void 0,tS=typeof queueMicrotask=="function"?queueMicrotask:typeof jp<"u"?function(t){return jp.resolve(null).then(t).catch(nS)}:Uf;function nS(t){setTimeout(function(){throw t})}function xu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Qs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Qs(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),ai="__reactFiber$"+cs,ia="__reactProps$"+cs,Li="__reactContainer$"+cs,Nf="__reactEvents$"+cs,iS="__reactListeners$"+cs,rS="__reactHandles$"+cs;function Ur(t){var e=t[ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Li]||n[ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yp(t);t!==null;){if(n=t[ai])return n;t=Yp(t)}return e}t=n,n=t.parentNode}return null}function va(t){return t=t[ai]||t[Li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Cc(t){return t[ia]||null}var Ff=[],Po=-1;function _r(t){return{current:t}}function ft(t){0>Po||(t.current=Ff[Po],Ff[Po]=null,Po--)}function at(t,e){Po++,Ff[Po]=t.current,t.current=e}var dr={},Zt=_r(dr),ln=_r(!1),Gr=dr;function qo(t,e){var n=t.type.contextTypes;if(!n)return dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function cn(t){return t=t.childContextTypes,t!=null}function Jl(){ft(ln),ft(Zt)}function qp(t,e,n){if(Zt.current!==dr)throw Error(ne(168));at(Zt,e),at(ln,n)}function K0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,Vy(t)||"Unknown",r));return _t({},n,i)}function ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Gr=Zt.current,at(Zt,t),at(ln,ln.current),!0}function Kp(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=K0(t,e,Gr),i.__reactInternalMemoizedMergedChildContext=t,ft(ln),ft(Zt),at(Zt,t)):ft(ln),at(ln,n)}var Ei=null,Rc=!1,Su=!1;function Z0(t){Ei===null?Ei=[t]:Ei.push(t)}function oS(t){Rc=!0,Z0(t)}function vr(){if(!Su&&Ei!==null){Su=!0;var t=0,e=nt;try{var n=Ei;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ei=null,Rc=!1}catch(r){throw Ei!==null&&(Ei=Ei.slice(t+1)),M0(Jd,vr),r}finally{nt=e,Su=!1}}return null}var Lo=[],Do=0,tc=null,nc=0,Pn=[],Ln=0,Wr=null,wi=1,Ai="";function Rr(t,e){Lo[Do++]=nc,Lo[Do++]=tc,tc=t,nc=e}function Q0(t,e,n){Pn[Ln++]=wi,Pn[Ln++]=Ai,Pn[Ln++]=Wr,Wr=t;var i=wi;t=Ai;var r=32-Kn(i)-1;i&=~(1<<r),n+=1;var o=32-Kn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,wi=1<<32-Kn(e)+r|n<<r|i,Ai=o+t}else wi=1<<o|n<<r|i,Ai=t}function lh(t){t.return!==null&&(Rr(t,1),Q0(t,1,0))}function ch(t){for(;t===tc;)tc=Lo[--Do],Lo[Do]=null,nc=Lo[--Do],Lo[Do]=null;for(;t===Wr;)Wr=Pn[--Ln],Pn[Ln]=null,Ai=Pn[--Ln],Pn[Ln]=null,wi=Pn[--Ln],Pn[Ln]=null}var Sn=null,xn=null,ht=!1,jn=null;function J0(t,e){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,xn=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Wr!==null?{id:wi,overflow:Ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,xn=null,!0):!1;default:return!1}}function Of(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kf(t){if(ht){var e=xn;if(e){var n=e;if(!Zp(t,e)){if(Of(t))throw Error(ne(418));e=rr(n.nextSibling);var i=Sn;e&&Zp(t,e)?J0(i,n):(t.flags=t.flags&-4097|2,ht=!1,Sn=t)}}else{if(Of(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ht=!1,Sn=t}}}function Qp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function Ga(t){if(t!==Sn)return!1;if(!ht)return Qp(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!If(t.type,t.memoizedProps)),e&&(e=xn)){if(Of(t))throw e_(),Error(ne(418));for(;e;)J0(t,e),e=rr(e.nextSibling)}if(Qp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=Sn?rr(t.stateNode.nextSibling):null;return!0}function e_(){for(var t=xn;t;)t=rr(t.nextSibling)}function Ko(){xn=Sn=null,ht=!1}function uh(t){jn===null?jn=[t]:jn.push(t)}var sS=ki.ReactCurrentBatchConfig;function vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Wa(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jp(t){var e=t._init;return e(t._payload)}function t_(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=lr(u,v),u.index=0,u.sibling=null,u}function o(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function s(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,g,M){return v===null||v.tag!==6?(v=Ru(g,u.mode,M),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,M){var C=g.type;return C===wo?f(u,v,g.props.children,M,g.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ji&&Jp(C)===v.type)?(M=r(v,g.props),M.ref=vs(u,v,g),M.return=u,M):(M=Il(g.type,g.key,g.props,null,u.mode,M),M.ref=vs(u,v,g),M.return=u,M)}function c(u,v,g,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=bu(g,u.mode,M),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function f(u,v,g,M,C){return v===null||v.tag!==7?(v=zr(g,u.mode,M,C),v.return=u,v):(v=r(v,g),v.return=u,v)}function h(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ru(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ia:return g=Il(v.type,v.key,v.props,null,u.mode,g),g.ref=vs(u,null,v),g.return=u,g;case To:return v=bu(v,u.mode,g),v.return=u,v;case ji:var M=v._init;return h(u,M(v._payload),g)}if(Ps(v)||hs(v))return v=zr(v,u.mode,g,null),v.return=u,v;Wa(u,v)}return null}function d(u,v,g,M){var C=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(u,v,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ia:return g.key===C?l(u,v,g,M):null;case To:return g.key===C?c(u,v,g,M):null;case ji:return C=g._init,d(u,v,C(g._payload),M)}if(Ps(g)||hs(g))return C!==null?null:f(u,v,g,M,null);Wa(u,g)}return null}function m(u,v,g,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(g)||null,a(v,u,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ia:return u=u.get(M.key===null?g:M.key)||null,l(v,u,M,C);case To:return u=u.get(M.key===null?g:M.key)||null,c(v,u,M,C);case ji:var A=M._init;return m(u,v,g,A(M._payload),C)}if(Ps(M)||hs(M))return u=u.get(g)||null,f(v,u,M,C,null);Wa(v,M)}return null}function y(u,v,g,M){for(var C=null,A=null,w=v,L=v=0,p=null;w!==null&&L<g.length;L++){w.index>L?(p=w,w=null):p=w.sibling;var S=d(u,w,g[L],M);if(S===null){w===null&&(w=p);break}t&&w&&S.alternate===null&&e(u,w),v=o(S,v,L),A===null?C=S:A.sibling=S,A=S,w=p}if(L===g.length)return n(u,w),ht&&Rr(u,L),C;if(w===null){for(;L<g.length;L++)w=h(u,g[L],M),w!==null&&(v=o(w,v,L),A===null?C=w:A.sibling=w,A=w);return ht&&Rr(u,L),C}for(w=i(u,w);L<g.length;L++)p=m(w,u,L,g[L],M),p!==null&&(t&&p.alternate!==null&&w.delete(p.key===null?L:p.key),v=o(p,v,L),A===null?C=p:A.sibling=p,A=p);return t&&w.forEach(function(b){return e(u,b)}),ht&&Rr(u,L),C}function x(u,v,g,M){var C=hs(g);if(typeof C!="function")throw Error(ne(150));if(g=C.call(g),g==null)throw Error(ne(151));for(var A=C=null,w=v,L=v=0,p=null,S=g.next();w!==null&&!S.done;L++,S=g.next()){w.index>L?(p=w,w=null):p=w.sibling;var b=d(u,w,S.value,M);if(b===null){w===null&&(w=p);break}t&&w&&b.alternate===null&&e(u,w),v=o(b,v,L),A===null?C=b:A.sibling=b,A=b,w=p}if(S.done)return n(u,w),ht&&Rr(u,L),C;if(w===null){for(;!S.done;L++,S=g.next())S=h(u,S.value,M),S!==null&&(v=o(S,v,L),A===null?C=S:A.sibling=S,A=S);return ht&&Rr(u,L),C}for(w=i(u,w);!S.done;L++,S=g.next())S=m(w,u,L,S.value,M),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?L:S.key),v=o(S,v,L),A===null?C=S:A.sibling=S,A=S);return t&&w.forEach(function(B){return e(u,B)}),ht&&Rr(u,L),C}function _(u,v,g,M){if(typeof g=="object"&&g!==null&&g.type===wo&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ia:e:{for(var C=g.key,A=v;A!==null;){if(A.key===C){if(C=g.type,C===wo){if(A.tag===7){n(u,A.sibling),v=r(A,g.props.children),v.return=u,u=v;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ji&&Jp(C)===A.type){n(u,A.sibling),v=r(A,g.props),v.ref=vs(u,A,g),v.return=u,u=v;break e}n(u,A);break}else e(u,A);A=A.sibling}g.type===wo?(v=zr(g.props.children,u.mode,M,g.key),v.return=u,u=v):(M=Il(g.type,g.key,g.props,null,u.mode,M),M.ref=vs(u,v,g),M.return=u,u=M)}return s(u);case To:e:{for(A=g.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=bu(g,u.mode,M),v.return=u,u=v}return s(u);case ji:return A=g._init,_(u,v,A(g._payload),M)}if(Ps(g))return y(u,v,g,M);if(hs(g))return x(u,v,g,M);Wa(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=Ru(g,u.mode,M),v.return=u,u=v),s(u)):n(u,v)}return _}var Zo=t_(!0),n_=t_(!1),ic=_r(null),rc=null,Io=null,fh=null;function dh(){fh=Io=rc=null}function hh(t){var e=ic.current;ft(ic),t._currentValue=e}function Bf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ho(t,e){rc=t,fh=Io=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(fh!==t)if(t={context:t,memoizedValue:e,next:null},Io===null){if(rc===null)throw Error(ne(308));Io=t,rc.dependencies={lanes:0,firstContext:t}}else Io=Io.next=t;return e}var Nr=null;function ph(t){Nr===null?Nr=[t]:Nr.push(t)}function i_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ph(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yi=!1;function mh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function r_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ge&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,ph(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function Cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,eh(t,n)}}function em(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function oc(t,e,n,i){var r=t.updateQueue;Yi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(o!==null){var h=r.baseState;s=0,f=c=l=null,a=o;do{var d=a.lane,m=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,x=a;switch(d=e,m=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){h=y.call(m,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,d=typeof y=="function"?y.call(m,h,d):y,d==null)break e;h=_t({},h,d);break e;case 2:Yi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,s|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Xr|=s,t.lanes=s,t.memoizedState=h}}function tm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var ya={},fi=_r(ya),ra=_r(ya),oa=_r(ya);function Fr(t){if(t===ya)throw Error(ne(174));return t}function gh(t,e){switch(at(oa,e),at(ra,t),at(fi,ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yf(e,t)}ft(fi),at(fi,e)}function Qo(){ft(fi),ft(ra),ft(oa)}function o_(t){Fr(oa.current);var e=Fr(fi.current),n=yf(e,t.type);e!==n&&(at(ra,t),at(fi,n))}function _h(t){ra.current===t&&(ft(fi),ft(ra))}var mt=_r(0);function sc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mu=[];function vh(){for(var t=0;t<Mu.length;t++)Mu[t]._workInProgressVersionPrimary=null;Mu.length=0}var Rl=ki.ReactCurrentDispatcher,Eu=ki.ReactCurrentBatchConfig,$r=0,gt=null,Pt=null,Ft=null,ac=!1,Hs=!1,sa=0,aS=0;function $t(){throw Error(ne(321))}function yh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function xh(t,e,n,i,r,o){if($r=o,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rl.current=t===null||t.memoizedState===null?fS:dS,t=n(i,r),Hs){o=0;do{if(Hs=!1,sa=0,25<=o)throw Error(ne(301));o+=1,Ft=Pt=null,e.updateQueue=null,Rl.current=hS,t=n(i,r)}while(Hs)}if(Rl.current=lc,e=Pt!==null&&Pt.next!==null,$r=0,Ft=Pt=gt=null,ac=!1,e)throw Error(ne(300));return t}function Sh(){var t=sa!==0;return sa=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?gt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function kn(){if(Pt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=Ft===null?gt.memoizedState:Ft.next;if(e!==null)Ft=e,Pt=t;else{if(t===null)throw Error(ne(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Ft===null?gt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function aa(t,e){return typeof e=="function"?e(t):e}function Tu(t){var e=kn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var f=c.lane;if(($r&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,s=i):l=l.next=h,gt.lanes|=f,Xr|=f}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,Qn(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,gt.lanes|=o,Xr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wu(t){var e=kn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Qn(o,e.memoizedState)||(an=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function s_(){}function a_(t,e){var n=gt,i=kn(),r=e(),o=!Qn(i.memoizedState,r);if(o&&(i.memoizedState=r,an=!0),i=i.queue,Mh(u_.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,la(9,c_.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(ne(349));$r&30||l_(n,e,r)}return r}function l_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function c_(t,e,n,i){e.value=n,e.getSnapshot=i,f_(e)&&d_(t)}function u_(t,e,n){return n(function(){f_(e)&&d_(t)})}function f_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function d_(t){var e=Di(t,1);e!==null&&Zn(e,t,1,-1)}function nm(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},e.queue=t,t=t.dispatch=uS.bind(null,gt,t),[e.memoizedState,t]}function la(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function h_(){return kn().memoizedState}function bl(t,e,n,i){var r=ni();gt.flags|=t,r.memoizedState=la(1|e,n,void 0,i===void 0?null:i)}function bc(t,e,n,i){var r=kn();i=i===void 0?null:i;var o=void 0;if(Pt!==null){var s=Pt.memoizedState;if(o=s.destroy,i!==null&&yh(i,s.deps)){r.memoizedState=la(e,n,o,i);return}}gt.flags|=t,r.memoizedState=la(1|e,n,o,i)}function im(t,e){return bl(8390656,8,t,e)}function Mh(t,e){return bc(2048,8,t,e)}function p_(t,e){return bc(4,2,t,e)}function m_(t,e){return bc(4,4,t,e)}function g_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function __(t,e,n){return n=n!=null?n.concat([t]):null,bc(4,4,g_.bind(null,e,t),n)}function Eh(){}function v_(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function y_(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function x_(t,e,n){return $r&21?(Qn(n,e)||(n=w0(),gt.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function lS(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=Eu.transition;Eu.transition={};try{t(!1),e()}finally{nt=n,Eu.transition=i}}function S_(){return kn().memoizedState}function cS(t,e,n){var i=ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},M_(t))E_(e,n);else if(n=i_(t,e,n,i),n!==null){var r=en();Zn(n,t,i,r),T_(n,e,i)}}function uS(t,e,n){var i=ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(M_(t))E_(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Qn(a,s)){var l=e.interleaved;l===null?(r.next=r,ph(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=i_(t,e,r,i),n!==null&&(r=en(),Zn(n,t,i,r),T_(n,e,i))}}function M_(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function E_(t,e){Hs=ac=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function T_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,eh(t,n)}}var lc={readContext:On,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},fS={readContext:On,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:im,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,bl(4194308,4,g_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return bl(4194308,4,t,e)},useInsertionEffect:function(t,e){return bl(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=cS.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:nm,useDebugValue:Eh,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=nm(!1),e=t[0];return t=lS.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=ni();if(ht){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),kt===null)throw Error(ne(349));$r&30||l_(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,im(u_.bind(null,i,o,t),[t]),i.flags|=2048,la(9,c_.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=ni(),e=kt.identifierPrefix;if(ht){var n=Ai,i=wi;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=sa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dS={readContext:On,useCallback:v_,useContext:On,useEffect:Mh,useImperativeHandle:__,useInsertionEffect:p_,useLayoutEffect:m_,useMemo:y_,useReducer:Tu,useRef:h_,useState:function(){return Tu(aa)},useDebugValue:Eh,useDeferredValue:function(t){var e=kn();return x_(e,Pt.memoizedState,t)},useTransition:function(){var t=Tu(aa)[0],e=kn().memoizedState;return[t,e]},useMutableSource:s_,useSyncExternalStore:a_,useId:S_,unstable_isNewReconciler:!1},hS={readContext:On,useCallback:v_,useContext:On,useEffect:Mh,useImperativeHandle:__,useInsertionEffect:p_,useLayoutEffect:m_,useMemo:y_,useReducer:wu,useRef:h_,useState:function(){return wu(aa)},useDebugValue:Eh,useDeferredValue:function(t){var e=kn();return Pt===null?e.memoizedState=t:x_(e,Pt.memoizedState,t)},useTransition:function(){var t=wu(aa)[0],e=kn().memoizedState;return[t,e]},useMutableSource:s_,useSyncExternalStore:a_,useId:S_,unstable_isNewReconciler:!1};function $n(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pc={isMounted:function(t){return(t=t._reactInternals)?Zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=ar(t),o=bi(i,r);o.payload=e,n!=null&&(o.callback=n),e=or(t,o,r),e!==null&&(Zn(e,t,r,i),Cl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=ar(t),o=bi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=or(t,o,r),e!==null&&(Zn(e,t,r,i),Cl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=ar(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=or(t,r,i),e!==null&&(Zn(e,t,i,n),Cl(e,t,i))}};function rm(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!ea(n,i)||!ea(r,o):!0}function w_(t,e,n){var i=!1,r=dr,o=e.contextType;return typeof o=="object"&&o!==null?o=On(o):(r=cn(e)?Gr:Zt.current,i=e.contextTypes,o=(i=i!=null)?qo(t,r):dr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function om(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Pc.enqueueReplaceState(e,e.state,null)}function Hf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},mh(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=On(o):(o=cn(e)?Gr:Zt.current,r.context=qo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(zf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Pc.enqueueReplaceState(r,r.state,null),oc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Jo(t,e){try{var n="",i=e;do n+=Hy(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Au(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pS=typeof WeakMap=="function"?WeakMap:Map;function A_(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){uc||(uc=!0,Qf=i),Vf(t,e)},n}function C_(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Vf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Vf(t,e),typeof i!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function sm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new pS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=RS.bind(null,t,e,n),e.then(t,t))}function am(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var mS=ki.ReactCurrentOwner,an=!1;function Jt(t,e,n,i){e.child=t===null?n_(e,null,n,i):Zo(e,t.child,n,i)}function cm(t,e,n,i,r){n=n.render;var o=e.ref;return Ho(e,r),i=xh(t,e,n,i,o,r),n=Sh(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(ht&&n&&lh(e),e.flags|=1,Jt(t,e,i,r),e.child)}function um(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Lh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,R_(t,e,o,i,r)):(t=Il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(s,i)&&t.ref===e.ref)return Ii(t,e,r)}return e.flags|=1,t=lr(o,i),t.ref=e.ref,t.return=e,e.child=t}function R_(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(ea(o,i)&&t.ref===e.ref)if(an=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,Ii(t,e,r)}return Gf(t,e,n,i,r)}function b_(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(No,vn),vn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(No,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,at(No,vn),vn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,at(No,vn),vn|=i;return Jt(t,e,r,n),e.child}function P_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gf(t,e,n,i,r){var o=cn(n)?Gr:Zt.current;return o=qo(e,o),Ho(e,r),n=xh(t,e,n,i,o,r),i=Sh(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(ht&&i&&lh(e),e.flags|=1,Jt(t,e,n,r),e.child)}function fm(t,e,n,i,r){if(cn(n)){var o=!0;ec(e)}else o=!1;if(Ho(e,r),e.stateNode===null)Pl(t,e),w_(e,n,i),Hf(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=On(c):(c=cn(n)?Gr:Zt.current,c=qo(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&om(e,s,i,c),Yi=!1;var d=e.memoizedState;s.state=d,oc(e,i,s,r),l=e.memoizedState,a!==i||d!==l||ln.current||Yi?(typeof f=="function"&&(zf(e,n,f,i),l=e.memoizedState),(a=Yi||rm(e,n,a,i,d,l,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,r_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:$n(e.type,a),s.props=c,h=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=cn(n)?Gr:Zt.current,l=qo(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||d!==l)&&om(e,s,i,l),Yi=!1,d=e.memoizedState,s.state=d,oc(e,i,s,r);var y=e.memoizedState;a!==h||d!==y||ln.current||Yi?(typeof m=="function"&&(zf(e,n,m,i),y=e.memoizedState),(c=Yi||rm(e,n,c,i,d,y,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),s.props=i,s.state=y,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Wf(t,e,n,i,o,r)}function Wf(t,e,n,i,r,o){P_(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Kp(e,n,!1),Ii(t,e,o);i=e.stateNode,mS.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Zo(e,t.child,null,o),e.child=Zo(e,null,a,o)):Jt(t,e,a,o),e.memoizedState=i.state,r&&Kp(e,n,!0),e.child}function L_(t){var e=t.stateNode;e.pendingContext?qp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qp(t,e.context,!1),gh(t,e.containerInfo)}function dm(t,e,n,i,r){return Ko(),uh(r),e.flags|=256,Jt(t,e,n,i),e.child}var $f={dehydrated:null,treeContext:null,retryLane:0};function Xf(t){return{baseLanes:t,cachePool:null,transitions:null}}function D_(t,e,n){var i=e.pendingProps,r=mt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(mt,r&1),t===null)return kf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ic(s,i,0,null),t=zr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Xf(n),e.memoizedState=$f,t):Th(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return gS(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=lr(a,o):(o=zr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Xf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=$f,i}return o=t.child,t=o.sibling,i=lr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Th(t,e){return e=Ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $a(t,e,n,i){return i!==null&&uh(i),Zo(e,t.child,null,n),t=Th(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gS(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Au(Error(ne(422))),$a(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=Ic({mode:"visible",children:i.children},r,0,null),o=zr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Zo(e,t.child,null,s),e.child.memoizedState=Xf(s),e.memoizedState=$f,o);if(!(e.mode&1))return $a(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ne(419)),i=Au(o,i,void 0),$a(t,e,s,i)}if(a=(s&t.childLanes)!==0,an||a){if(i=kt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Di(t,r),Zn(i,t,r,-1))}return Ph(),i=Au(Error(ne(421))),$a(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=bS.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,xn=rr(r.nextSibling),Sn=e,ht=!0,jn=null,t!==null&&(Pn[Ln++]=wi,Pn[Ln++]=Ai,Pn[Ln++]=Wr,wi=t.id,Ai=t.overflow,Wr=e),e=Th(e,i.children),e.flags|=4096,e)}function hm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Bf(t.return,e,n)}function Cu(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function I_(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Jt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hm(t,n,e);else if(t.tag===19)hm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&sc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Cu(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&sc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Cu(e,!0,n,null,o);break;case"together":Cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ii(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _S(t,e,n){switch(e.tag){case 3:L_(e),Ko();break;case 5:o_(e);break;case 1:cn(e.type)&&ec(e);break;case 4:gh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(ic,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?D_(t,e,n):(at(mt,mt.current&1),t=Ii(t,e,n),t!==null?t.sibling:null);at(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return I_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,b_(t,e,n)}return Ii(t,e,n)}var U_,jf,N_,F_;U_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jf=function(){};N_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Fr(fi.current);var o=null;switch(n){case"input":r=mf(t,r),i=mf(t,i),o=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),o=[];break;case"textarea":r=vf(t,r),i=vf(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ql)}xf(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(js.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(js.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ct("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};F_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ys(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function vS(t,e,n){var i=e.pendingProps;switch(ch(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return cn(e.type)&&Jl(),Xt(e),null;case 3:return i=e.stateNode,Qo(),ft(ln),ft(Zt),vh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ga(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(td(jn),jn=null))),jf(t,e),Xt(e),null;case 5:_h(e);var r=Fr(oa.current);if(n=e.type,t!==null&&e.stateNode!=null)N_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Xt(e),null}if(t=Fr(fi.current),Ga(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ai]=e,i[ia]=o,t=(e.mode&1)!==0,n){case"dialog":ct("cancel",i),ct("close",i);break;case"iframe":case"object":case"embed":ct("load",i);break;case"video":case"audio":for(r=0;r<Ds.length;r++)ct(Ds[r],i);break;case"source":ct("error",i);break;case"img":case"image":case"link":ct("error",i),ct("load",i);break;case"details":ct("toggle",i);break;case"input":Mp(i,o),ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ct("invalid",i);break;case"textarea":Tp(i,o),ct("invalid",i)}xf(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Va(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Va(i.textContent,a,t),r=["children",""+a]):js.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ct("scroll",i)}switch(n){case"input":Ua(i),Ep(i,o,!0);break;case"textarea":Ua(i),wp(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Ql)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=u0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[ai]=e,t[ia]=i,U_(t,e,!1,!1),e.stateNode=t;e:{switch(s=Sf(n,i),n){case"dialog":ct("cancel",t),ct("close",t),r=i;break;case"iframe":case"object":case"embed":ct("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ds.length;r++)ct(Ds[r],t);r=i;break;case"source":ct("error",t),r=i;break;case"img":case"image":case"link":ct("error",t),ct("load",t),r=i;break;case"details":ct("toggle",t),r=i;break;case"input":Mp(t,i),r=mf(t,i),ct("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ct("invalid",t);break;case"textarea":Tp(t,i),r=vf(t,i),ct("invalid",t);break;default:r=i}xf(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?h0(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&f0(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ys(t,l):typeof l=="number"&&Ys(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(js.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ct("scroll",t):l!=null&&Yd(t,o,l,s))}switch(n){case"input":Ua(t),Ep(t,i,!1);break;case"textarea":Ua(t),wp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+fr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Oo(t,!!i.multiple,o,!1):i.defaultValue!=null&&Oo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)F_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Fr(oa.current),Fr(fi.current),Ga(e)){if(i=e.stateNode,n=e.memoizedProps,i[ai]=e,(o=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:Va(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Va(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i}return Xt(e),null;case 13:if(ft(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&xn!==null&&e.mode&1&&!(e.flags&128))e_(),Ko(),e.flags|=98560,o=!1;else if(o=Ga(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ne(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ne(317));o[ai]=e}else Ko(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),o=!1}else jn!==null&&(td(jn),jn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Lt===0&&(Lt=3):Ph())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return Qo(),jf(t,e),t===null&&ta(e.stateNode.containerInfo),Xt(e),null;case 10:return hh(e.type._context),Xt(e),null;case 17:return cn(e.type)&&Jl(),Xt(e),null;case 19:if(ft(mt),o=e.memoizedState,o===null)return Xt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)ys(o,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=sc(t),s!==null){for(e.flags|=128,ys(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(mt,mt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Et()>es&&(e.flags|=128,i=!0,ys(o,!1),e.lanes=4194304)}else{if(!i)if(t=sc(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ys(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ht)return Xt(e),null}else 2*Et()-o.renderingStartTime>es&&n!==1073741824&&(e.flags|=128,i=!0,ys(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Et(),e.sibling=null,n=mt.current,at(mt,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return bh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function yS(t,e){switch(ch(e),e.tag){case 1:return cn(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qo(),ft(ln),ft(Zt),vh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _h(e),null;case 13:if(ft(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Ko()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(mt),null;case 4:return Qo(),null;case 10:return hh(e.type._context),null;case 22:case 23:return bh(),null;case 24:return null;default:return null}}var Xa=!1,Kt=!1,xS=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Uo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Mt(t,e,i)}else n.current=null}function Yf(t,e,n){try{n()}catch(i){Mt(t,e,i)}}var pm=!1;function SS(t,e){if(Lf=ql,t=H0(),ah(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=s+r),h!==o||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=s),d===o&&++f===i&&(l=s),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Df={focusedElem:t,selectionRange:n},ql=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,_=y.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:$n(e.type,x),_);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){Mt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return y=pm,pm=!1,y}function Vs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Yf(e,n,o)}r=r.next}while(r!==i)}}function Lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function qf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function O_(t){var e=t.alternate;e!==null&&(t.alternate=null,O_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ai],delete e[ia],delete e[Nf],delete e[iS],delete e[rS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function k_(t){return t.tag===5||t.tag===3||t.tag===4}function mm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||k_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ql));else if(i!==4&&(t=t.child,t!==null))for(Kf(t,e,n),t=t.sibling;t!==null;)Kf(t,e,n),t=t.sibling}function Zf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Zf(t,e,n),t=t.sibling;t!==null;)Zf(t,e,n),t=t.sibling}var Ht=null,Xn=!1;function zi(t,e,n){for(n=n.child;n!==null;)B_(t,e,n),n=n.sibling}function B_(t,e,n){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(Ec,n)}catch{}switch(n.tag){case 5:Kt||Uo(n,e);case 6:var i=Ht,r=Xn;Ht=null,zi(t,e,n),Ht=i,Xn=r,Ht!==null&&(Xn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(Xn?(t=Ht,n=n.stateNode,t.nodeType===8?xu(t.parentNode,n):t.nodeType===1&&xu(t,n),Qs(t)):xu(Ht,n.stateNode));break;case 4:i=Ht,r=Xn,Ht=n.stateNode.containerInfo,Xn=!0,zi(t,e,n),Ht=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Yf(n,e,s),r=r.next}while(r!==i)}zi(t,e,n);break;case 1:if(!Kt&&(Uo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Mt(n,e,a)}zi(t,e,n);break;case 21:zi(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,zi(t,e,n),Kt=i):zi(t,e,n);break;default:zi(t,e,n)}}function gm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xS),e.forEach(function(i){var r=PS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,Xn=!1;break e;case 3:Ht=a.stateNode.containerInfo,Xn=!0;break e;case 4:Ht=a.stateNode.containerInfo,Xn=!0;break e}a=a.return}if(Ht===null)throw Error(ne(160));B_(o,s,r),Ht=null,Xn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)z_(e,t),e=e.sibling}function z_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),ei(t),i&4){try{Vs(3,t,t.return),Lc(3,t)}catch(x){Mt(t,t.return,x)}try{Vs(5,t,t.return)}catch(x){Mt(t,t.return,x)}}break;case 1:Hn(e,t),ei(t),i&512&&n!==null&&Uo(n,n.return);break;case 5:if(Hn(e,t),ei(t),i&512&&n!==null&&Uo(n,n.return),t.flags&32){var r=t.stateNode;try{Ys(r,"")}catch(x){Mt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&l0(r,o),Sf(a,s);var c=Sf(a,o);for(s=0;s<l.length;s+=2){var f=l[s],h=l[s+1];f==="style"?h0(r,h):f==="dangerouslySetInnerHTML"?f0(r,h):f==="children"?Ys(r,h):Yd(r,f,h,c)}switch(a){case"input":gf(r,o);break;case"textarea":c0(r,o);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Oo(r,!!o.multiple,m,!1):d!==!!o.multiple&&(o.defaultValue!=null?Oo(r,!!o.multiple,o.defaultValue,!0):Oo(r,!!o.multiple,o.multiple?[]:"",!1))}r[ia]=o}catch(x){Mt(t,t.return,x)}}break;case 6:if(Hn(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(x){Mt(t,t.return,x)}}break;case 3:if(Hn(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Qs(e.containerInfo)}catch(x){Mt(t,t.return,x)}break;case 4:Hn(e,t),ei(t);break;case 13:Hn(e,t),ei(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Ch=Et())),i&4&&gm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(c=Kt)||f,Hn(e,t),Kt=c):Hn(e,t),ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(ge=t,f=t.child;f!==null;){for(h=ge=f;ge!==null;){switch(d=ge,m=d.child,d.tag){case 0:case 11:case 14:case 15:Vs(4,d,d.return);break;case 1:Uo(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(x){Mt(i,n,x)}}break;case 5:Uo(d,d.return);break;case 22:if(d.memoizedState!==null){vm(h);continue}}m!==null?(m.return=d,ge=m):vm(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=d0("display",s))}catch(x){Mt(t,t.return,x)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){Mt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Hn(e,t),ei(t),i&4&&gm(t);break;case 21:break;default:Hn(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(k_(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ys(r,""),i.flags&=-33);var o=mm(t);Zf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=mm(t);Kf(t,a,s);break;default:throw Error(ne(161))}}catch(l){Mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function MS(t,e,n){ge=t,H_(t)}function H_(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Xa;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=Xa;var c=Kt;if(Xa=s,(Kt=l)&&!c)for(ge=r;ge!==null;)s=ge,l=s.child,s.tag===22&&s.memoizedState!==null?ym(r):l!==null?(l.return=s,ge=l):ym(r);for(;o!==null;)ge=o,H_(o),o=o.sibling;ge=r,Xa=a,Kt=c}_m(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,ge=o):_m(t)}}function _m(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||Lc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:$n(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&tm(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tm(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Qs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Kt||e.flags&512&&qf(e)}catch(d){Mt(e,e.return,d)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function vm(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function ym(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lc(4,e)}catch(l){Mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Mt(e,r,l)}}var o=e.return;try{qf(e)}catch(l){Mt(e,o,l)}break;case 5:var s=e.return;try{qf(e)}catch(l){Mt(e,s,l)}}}catch(l){Mt(e,e.return,l)}if(e===t){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var ES=Math.ceil,cc=ki.ReactCurrentDispatcher,wh=ki.ReactCurrentOwner,Fn=ki.ReactCurrentBatchConfig,Ge=0,kt=null,bt=null,Gt=0,vn=0,No=_r(0),Lt=0,ca=null,Xr=0,Dc=0,Ah=0,Gs=null,on=null,Ch=0,es=1/0,Mi=null,uc=!1,Qf=null,sr=null,ja=!1,er=null,fc=0,Ws=0,Jf=null,Ll=-1,Dl=0;function en(){return Ge&6?Et():Ll!==-1?Ll:Ll=Et()}function ar(t){return t.mode&1?Ge&2&&Gt!==0?Gt&-Gt:sS.transition!==null?(Dl===0&&(Dl=w0()),Dl):(t=nt,t!==0||(t=window.event,t=t===void 0?16:D0(t.type)),t):1}function Zn(t,e,n,i){if(50<Ws)throw Ws=0,Jf=null,Error(ne(185));ga(t,n,i),(!(Ge&2)||t!==kt)&&(t===kt&&(!(Ge&2)&&(Dc|=n),Lt===4&&Ki(t,Gt)),un(t,i),n===1&&Ge===0&&!(e.mode&1)&&(es=Et()+500,Rc&&vr()))}function un(t,e){var n=t.callbackNode;sx(t,e);var i=Yl(t,t===kt?Gt:0);if(i===0)n!==null&&Rp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Rp(n),e===1)t.tag===0?oS(xm.bind(null,t)):Z0(xm.bind(null,t)),tS(function(){!(Ge&6)&&vr()}),n=null;else{switch(A0(i)){case 1:n=Jd;break;case 4:n=E0;break;case 16:n=jl;break;case 536870912:n=T0;break;default:n=jl}n=q_(n,V_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function V_(t,e){if(Ll=-1,Dl=0,Ge&6)throw Error(ne(327));var n=t.callbackNode;if(Vo()&&t.callbackNode!==n)return null;var i=Yl(t,t===kt?Gt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=dc(t,i);else{e=i;var r=Ge;Ge|=2;var o=W_();(kt!==t||Gt!==e)&&(Mi=null,es=Et()+500,Br(t,e));do try{AS();break}catch(a){G_(t,a)}while(!0);dh(),cc.current=o,Ge=r,bt!==null?e=0:(kt=null,Gt=0,e=Lt)}if(e!==0){if(e===2&&(r=Af(t),r!==0&&(i=r,e=ed(t,r))),e===1)throw n=ca,Br(t,0),Ki(t,i),un(t,Et()),n;if(e===6)Ki(t,i);else{if(r=t.current.alternate,!(i&30)&&!TS(r)&&(e=dc(t,i),e===2&&(o=Af(t),o!==0&&(i=o,e=ed(t,o))),e===1))throw n=ca,Br(t,0),Ki(t,i),un(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:br(t,on,Mi);break;case 3:if(Ki(t,i),(i&130023424)===i&&(e=Ch+500-Et(),10<e)){if(Yl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Uf(br.bind(null,t,on,Mi),e);break}br(t,on,Mi);break;case 4:if(Ki(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Kn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ES(i/1960))-i,10<i){t.timeoutHandle=Uf(br.bind(null,t,on,Mi),i);break}br(t,on,Mi);break;case 5:br(t,on,Mi);break;default:throw Error(ne(329))}}}return un(t,Et()),t.callbackNode===n?V_.bind(null,t):null}function ed(t,e){var n=Gs;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=dc(t,e),t!==2&&(e=on,on=n,e!==null&&td(e)),t}function td(t){on===null?on=t:on.push.apply(on,t)}function TS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Qn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ki(t,e){for(e&=~Ah,e&=~Dc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kn(e),i=1<<n;t[n]=-1,e&=~i}}function xm(t){if(Ge&6)throw Error(ne(327));Vo();var e=Yl(t,0);if(!(e&1))return un(t,Et()),null;var n=dc(t,e);if(t.tag!==0&&n===2){var i=Af(t);i!==0&&(e=i,n=ed(t,i))}if(n===1)throw n=ca,Br(t,0),Ki(t,e),un(t,Et()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,on,Mi),un(t,Et()),null}function Rh(t,e){var n=Ge;Ge|=1;try{return t(e)}finally{Ge=n,Ge===0&&(es=Et()+500,Rc&&vr())}}function jr(t){er!==null&&er.tag===0&&!(Ge&6)&&Vo();var e=Ge;Ge|=1;var n=Fn.transition,i=nt;try{if(Fn.transition=null,nt=1,t)return t()}finally{nt=i,Fn.transition=n,Ge=e,!(Ge&6)&&vr()}}function bh(){vn=No.current,ft(No)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,eS(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(ch(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Jl();break;case 3:Qo(),ft(ln),ft(Zt),vh();break;case 5:_h(i);break;case 4:Qo();break;case 13:ft(mt);break;case 19:ft(mt);break;case 10:hh(i.type._context);break;case 22:case 23:bh()}n=n.return}if(kt=t,bt=t=lr(t.current,null),Gt=vn=e,Lt=0,ca=null,Ah=Dc=Xr=0,on=Gs=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Nr=null}return t}function G_(t,e){do{var n=bt;try{if(dh(),Rl.current=lc,ac){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ac=!1}if($r=0,Ft=Pt=gt=null,Hs=!1,sa=0,wh.current=null,n===null||n.return===null){Lt=1,ca=e,bt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Gt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=am(s);if(m!==null){m.flags&=-257,lm(m,s,a,o,e),m.mode&1&&sm(o,c,e),e=m,l=c;var y=e.updateQueue;if(y===null){var x=new Set;x.add(l),e.updateQueue=x}else y.add(l);break e}else{if(!(e&1)){sm(o,c,e),Ph();break e}l=Error(ne(426))}}else if(ht&&a.mode&1){var _=am(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),lm(_,s,a,o,e),uh(Jo(l,a));break e}}o=l=Jo(l,a),Lt!==4&&(Lt=2),Gs===null?Gs=[o]:Gs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var u=A_(o,l,e);em(o,u);break e;case 1:a=l;var v=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(sr===null||!sr.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var M=C_(o,a,e);em(o,M);break e}}o=o.return}while(o!==null)}X_(n)}catch(C){e=C,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function W_(){var t=cc.current;return cc.current=lc,t===null?lc:t}function Ph(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),kt===null||!(Xr&268435455)&&!(Dc&268435455)||Ki(kt,Gt)}function dc(t,e){var n=Ge;Ge|=2;var i=W_();(kt!==t||Gt!==e)&&(Mi=null,Br(t,e));do try{wS();break}catch(r){G_(t,r)}while(!0);if(dh(),Ge=n,cc.current=i,bt!==null)throw Error(ne(261));return kt=null,Gt=0,Lt}function wS(){for(;bt!==null;)$_(bt)}function AS(){for(;bt!==null&&!Zy();)$_(bt)}function $_(t){var e=Y_(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?X_(t):bt=e,wh.current=null}function X_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yS(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,bt=null;return}}else if(n=vS(n,e,vn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Lt===0&&(Lt=5)}function br(t,e,n){var i=nt,r=Fn.transition;try{Fn.transition=null,nt=1,CS(t,e,n,i)}finally{Fn.transition=r,nt=i}return null}function CS(t,e,n,i){do Vo();while(er!==null);if(Ge&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(ax(t,o),t===kt&&(bt=kt=null,Gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ja||(ja=!0,q_(jl,function(){return Vo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fn.transition,Fn.transition=null;var s=nt;nt=1;var a=Ge;Ge|=4,wh.current=null,SS(t,n),z_(n,t),jx(Df),ql=!!Lf,Df=Lf=null,t.current=n,MS(n),Qy(),Ge=a,nt=s,Fn.transition=o}else t.current=n;if(ja&&(ja=!1,er=t,fc=r),o=t.pendingLanes,o===0&&(sr=null),tx(n.stateNode),un(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(uc)throw uc=!1,t=Qf,Qf=null,t;return fc&1&&t.tag!==0&&Vo(),o=t.pendingLanes,o&1?t===Jf?Ws++:(Ws=0,Jf=t):Ws=0,vr(),null}function Vo(){if(er!==null){var t=A0(fc),e=Fn.transition,n=nt;try{if(Fn.transition=null,nt=16>t?16:t,er===null)var i=!1;else{if(t=er,er=null,fc=0,Ge&6)throw Error(ne(331));var r=Ge;for(Ge|=4,ge=t.current;ge!==null;){var o=ge,s=o.child;if(ge.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ge=c;ge!==null;){var f=ge;switch(f.tag){case 0:case 11:case 15:Vs(8,f,o)}var h=f.child;if(h!==null)h.return=f,ge=h;else for(;ge!==null;){f=ge;var d=f.sibling,m=f.return;if(O_(f),f===c){ge=null;break}if(d!==null){d.return=m,ge=d;break}ge=m}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var _=x.sibling;x.sibling=null,x=_}while(x!==null)}}ge=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,ge=s;else e:for(;ge!==null;){if(o=ge,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vs(9,o,o.return)}var u=o.sibling;if(u!==null){u.return=o.return,ge=u;break e}ge=o.return}}var v=t.current;for(ge=v;ge!==null;){s=ge;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,ge=g;else e:for(s=v;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Lc(9,a)}}catch(C){Mt(a,a.return,C)}if(a===s){ge=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,ge=M;break e}ge=a.return}}if(Ge=r,vr(),ui&&typeof ui.onPostCommitFiberRoot=="function")try{ui.onPostCommitFiberRoot(Ec,t)}catch{}i=!0}return i}finally{nt=n,Fn.transition=e}}return!1}function Sm(t,e,n){e=Jo(n,e),e=A_(t,e,1),t=or(t,e,1),e=en(),t!==null&&(ga(t,1,e),un(t,e))}function Mt(t,e,n){if(t.tag===3)Sm(t,t,n);else for(;e!==null;){if(e.tag===3){Sm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(sr===null||!sr.has(i))){t=Jo(n,t),t=C_(e,t,1),e=or(e,t,1),t=en(),e!==null&&(ga(e,1,t),un(e,t));break}}e=e.return}}function RS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Gt&n)===n&&(Lt===4||Lt===3&&(Gt&130023424)===Gt&&500>Et()-Ch?Br(t,0):Ah|=n),un(t,e)}function j_(t,e){e===0&&(t.mode&1?(e=Oa,Oa<<=1,!(Oa&130023424)&&(Oa=4194304)):e=1);var n=en();t=Di(t,e),t!==null&&(ga(t,e,n),un(t,n))}function bS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),j_(t,n)}function PS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),j_(t,n)}var Y_;Y_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,_S(t,e,n);an=!!(t.flags&131072)}else an=!1,ht&&e.flags&1048576&&Q0(e,nc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Pl(t,e),t=e.pendingProps;var r=qo(e,Zt.current);Ho(e,n),r=xh(null,e,i,t,r,n);var o=Sh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,cn(i)?(o=!0,ec(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,mh(e),r.updater=Pc,e.stateNode=r,r._reactInternals=e,Hf(e,i,t,n),e=Wf(null,e,i,!0,o,n)):(e.tag=0,ht&&o&&lh(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Pl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=DS(i),t=$n(i,t),r){case 0:e=Gf(null,e,i,t,n);break e;case 1:e=fm(null,e,i,t,n);break e;case 11:e=cm(null,e,i,t,n);break e;case 14:e=um(null,e,i,$n(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Gf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),fm(t,e,i,r,n);case 3:e:{if(L_(e),t===null)throw Error(ne(387));i=e.pendingProps,o=e.memoizedState,r=o.element,r_(t,e),oc(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Jo(Error(ne(423)),e),e=dm(t,e,i,n,r);break e}else if(i!==r){r=Jo(Error(ne(424)),e),e=dm(t,e,i,n,r);break e}else for(xn=rr(e.stateNode.containerInfo.firstChild),Sn=e,ht=!0,jn=null,n=n_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ko(),i===r){e=Ii(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return o_(e),t===null&&kf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,If(i,r)?s=null:o!==null&&If(i,o)&&(e.flags|=32),P_(t,e),Jt(t,e,s,n),e.child;case 6:return t===null&&kf(e),null;case 13:return D_(t,e,n);case 4:return gh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Zo(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),cm(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,at(ic,i._currentValue),i._currentValue=s,o!==null)if(Qn(o.value,s)){if(o.children===r.children&&!ln.current){e=Ii(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=bi(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Bf(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ne(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Bf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ho(e,n),r=On(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=$n(i,e.pendingProps),r=$n(i.type,r),um(t,e,i,r,n);case 15:return R_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Pl(t,e),e.tag=1,cn(i)?(t=!0,ec(e)):t=!1,Ho(e,n),w_(e,i,r),Hf(e,i,r,n),Wf(null,e,i,!0,t,n);case 19:return I_(t,e,n);case 22:return b_(t,e,n)}throw Error(ne(156,e.tag))};function q_(t,e){return M0(t,e)}function LS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new LS(t,e,n,i)}function Lh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function DS(t){if(typeof t=="function")return Lh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kd)return 11;if(t===Zd)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Il(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Lh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case wo:return zr(n.children,r,o,e);case qd:s=8,r|=8;break;case ff:return t=Un(12,n,e,r|2),t.elementType=ff,t.lanes=o,t;case df:return t=Un(13,n,e,r),t.elementType=df,t.lanes=o,t;case hf:return t=Un(19,n,e,r),t.elementType=hf,t.lanes=o,t;case o0:return Ic(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case i0:s=10;break e;case r0:s=9;break e;case Kd:s=11;break e;case Zd:s=14;break e;case ji:s=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Un(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function zr(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function Ic(t,e,n,i){return t=Un(22,t,i,e),t.elementType=o0,t.lanes=n,t.stateNode={isHidden:!1},t}function Ru(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function bu(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function IS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cu(0),this.expirationTimes=cu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Dh(t,e,n,i,r,o,s,a,l){return t=new IS(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Un(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mh(o),t}function US(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:To,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function K_(t){if(!t)return dr;t=t._reactInternals;e:{if(Zr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(cn(n))return K0(t,n,e)}return e}function Z_(t,e,n,i,r,o,s,a,l){return t=Dh(n,i,!0,t,r,o,s,a,l),t.context=K_(null),n=t.current,i=en(),r=ar(n),o=bi(i,r),o.callback=e??null,or(n,o,r),t.current.lanes=r,ga(t,r,i),un(t,i),t}function Uc(t,e,n,i){var r=e.current,o=en(),s=ar(r);return n=K_(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=or(r,e,s),t!==null&&(Zn(t,r,s,o),Cl(t,r,s)),s}function hc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ih(t,e){Mm(t,e),(t=t.alternate)&&Mm(t,e)}function NS(){return null}var Q_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Uh(t){this._internalRoot=t}Nc.prototype.render=Uh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Uc(t,e,null,null)};Nc.prototype.unmount=Uh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jr(function(){Uc(null,t,null,null)}),e[Li]=null}};function Nc(t){this._internalRoot=t}Nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=b0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qi.length&&e!==0&&e<qi[n].priority;n++);qi.splice(n,0,t),n===0&&L0(t)}};function Nh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Em(){}function FS(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=hc(s);o.call(c)}}var s=Z_(e,i,t,0,null,!1,!1,"",Em);return t._reactRootContainer=s,t[Li]=s.current,ta(t.nodeType===8?t.parentNode:t),jr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=hc(l);a.call(c)}}var l=Dh(t,0,!1,null,null,!1,!1,"",Em);return t._reactRootContainer=l,t[Li]=l.current,ta(t.nodeType===8?t.parentNode:t),jr(function(){Uc(e,l,n,i)}),l}function Oc(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=hc(s);a.call(l)}}Uc(e,s,t,r)}else s=FS(n,e,t,r,i);return hc(s)}C0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ls(e.pendingLanes);n!==0&&(eh(e,n|1),un(e,Et()),!(Ge&6)&&(es=Et()+500,vr()))}break;case 13:jr(function(){var i=Di(t,1);if(i!==null){var r=en();Zn(i,t,1,r)}}),Ih(t,1)}};th=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=en();Zn(e,t,134217728,n)}Ih(t,134217728)}};R0=function(t){if(t.tag===13){var e=ar(t),n=Di(t,e);if(n!==null){var i=en();Zn(n,t,e,i)}Ih(t,e)}};b0=function(){return nt};P0=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};Ef=function(t,e,n){switch(e){case"input":if(gf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Cc(i);if(!r)throw Error(ne(90));a0(i),gf(i,r)}}}break;case"textarea":c0(t,n);break;case"select":e=n.value,e!=null&&Oo(t,!!n.multiple,e,!1)}};g0=Rh;_0=jr;var OS={usingClientEntryPoint:!1,Events:[va,bo,Cc,p0,m0,Rh]},xs={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kS={bundleType:xs.bundleType,version:xs.version,rendererPackageName:xs.rendererPackageName,rendererConfig:xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=x0(t),t===null?null:t.stateNode},findFiberByHostInstance:xs.findFiberByHostInstance||NS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ya.isDisabled&&Ya.supportsFiber)try{Ec=Ya.inject(kS),ui=Ya}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OS;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nh(e))throw Error(ne(200));return US(t,e,null,n)};An.createRoot=function(t,e){if(!Nh(t))throw Error(ne(299));var n=!1,i="",r=Q_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Dh(t,1,!1,null,null,n,!1,i,r),t[Li]=e.current,ta(t.nodeType===8?t.parentNode:t),new Uh(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=x0(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return jr(t)};An.hydrate=function(t,e,n){if(!Fc(e))throw Error(ne(200));return Oc(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!Nh(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=Q_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Z_(e,null,t,1,n??null,r,!1,o,s),t[Li]=e.current,ta(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Nc(e)};An.render=function(t,e,n){if(!Fc(e))throw Error(ne(200));return Oc(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!Fc(t))throw Error(ne(40));return t._reactRootContainer?(jr(function(){Oc(null,null,t,!1,function(){t._reactRootContainer=null,t[Li]=null})}),!0):!1};An.unstable_batchedUpdates=Rh;An.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Fc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Oc(t,e,n,!1,i)};An.version="18.3.1-next-f1338f8080-20240426";function J_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J_)}catch(t){console.error(t)}}J_(),Jg.exports=An;var BS=Jg.exports,ev,Tm=BS;ev=Tm.createRoot,Tm.hydrateRoot;const ua={black:"#000",white:"#fff"},to={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},no={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},io={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},ro={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},oo={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},Ss={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},zS={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};function hr(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}const Hr="$$material";function HS(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var VS=!1;function GS(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function WS(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var $S=function(){function t(n){var i=this;this._insertTag=function(r){var o;i.tags.length===0?i.insertionPoint?o=i.insertionPoint.nextSibling:i.prepend?o=i.container.firstChild:o=i.before:o=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,o),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!VS:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(WS(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var o=GS(r);try{o.insertRule(i,o.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){var r;return(r=i.parentNode)==null?void 0:r.removeChild(i)}),this.tags=[],this.ctr=0},t}(),qt="-ms-",pc="-moz-",Xe="-webkit-",tv="comm",Fh="rule",Oh="decl",XS="@import",nv="@keyframes",jS="@layer",YS=Math.abs,kc=String.fromCharCode,qS=Object.assign;function KS(t,e){return Vt(t,0)^45?(((e<<2^Vt(t,0))<<2^Vt(t,1))<<2^Vt(t,2))<<2^Vt(t,3):0}function iv(t){return t.trim()}function ZS(t,e){return(t=e.exec(t))?t[0]:t}function je(t,e,n){return t.replace(e,n)}function nd(t,e){return t.indexOf(e)}function Vt(t,e){return t.charCodeAt(e)|0}function fa(t,e,n){return t.slice(e,n)}function ri(t){return t.length}function kh(t){return t.length}function qa(t,e){return e.push(t),t}function QS(t,e){return t.map(e).join("")}var Bc=1,ts=1,rv=0,hn=0,Rt=0,us="";function zc(t,e,n,i,r,o,s){return{value:t,root:e,parent:n,type:i,props:r,children:o,line:Bc,column:ts,length:s,return:""}}function Ms(t,e){return qS(zc("",null,null,"",null,null,0),t,{length:-t.length},e)}function JS(){return Rt}function eM(){return Rt=hn>0?Vt(us,--hn):0,ts--,Rt===10&&(ts=1,Bc--),Rt}function Mn(){return Rt=hn<rv?Vt(us,hn++):0,ts++,Rt===10&&(ts=1,Bc++),Rt}function di(){return Vt(us,hn)}function Ul(){return hn}function xa(t,e){return fa(us,t,e)}function da(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ov(t){return Bc=ts=1,rv=ri(us=t),hn=0,[]}function sv(t){return us="",t}function Nl(t){return iv(xa(hn-1,id(t===91?t+2:t===40?t+1:t)))}function tM(t){for(;(Rt=di())&&Rt<33;)Mn();return da(t)>2||da(Rt)>3?"":" "}function nM(t,e){for(;--e&&Mn()&&!(Rt<48||Rt>102||Rt>57&&Rt<65||Rt>70&&Rt<97););return xa(t,Ul()+(e<6&&di()==32&&Mn()==32))}function id(t){for(;Mn();)switch(Rt){case t:return hn;case 34:case 39:t!==34&&t!==39&&id(Rt);break;case 40:t===41&&id(t);break;case 92:Mn();break}return hn}function iM(t,e){for(;Mn()&&t+Rt!==57;)if(t+Rt===84&&di()===47)break;return"/*"+xa(e,hn-1)+"*"+kc(t===47?t:Mn())}function rM(t){for(;!da(di());)Mn();return xa(t,hn)}function oM(t){return sv(Fl("",null,null,null,[""],t=ov(t),0,[0],t))}function Fl(t,e,n,i,r,o,s,a,l){for(var c=0,f=0,h=s,d=0,m=0,y=0,x=1,_=1,u=1,v=0,g="",M=r,C=o,A=i,w=g;_;)switch(y=v,v=Mn()){case 40:if(y!=108&&Vt(w,h-1)==58){nd(w+=je(Nl(v),"&","&\f"),"&\f")!=-1&&(u=-1);break}case 34:case 39:case 91:w+=Nl(v);break;case 9:case 10:case 13:case 32:w+=tM(y);break;case 92:w+=nM(Ul()-1,7);continue;case 47:switch(di()){case 42:case 47:qa(sM(iM(Mn(),Ul()),e,n),l);break;default:w+="/"}break;case 123*x:a[c++]=ri(w)*u;case 125*x:case 59:case 0:switch(v){case 0:case 125:_=0;case 59+f:u==-1&&(w=je(w,/\f/g,"")),m>0&&ri(w)-h&&qa(m>32?Am(w+";",i,n,h-1):Am(je(w," ","")+";",i,n,h-2),l);break;case 59:w+=";";default:if(qa(A=wm(w,e,n,c,f,r,a,g,M=[],C=[],h),o),v===123)if(f===0)Fl(w,e,A,A,M,o,h,a,C);else switch(d===99&&Vt(w,3)===110?100:d){case 100:case 108:case 109:case 115:Fl(t,A,A,i&&qa(wm(t,A,A,0,0,r,a,g,r,M=[],h),C),r,C,h,a,i?M:C);break;default:Fl(w,A,A,A,[""],C,0,a,C)}}c=f=m=0,x=u=1,g=w="",h=s;break;case 58:h=1+ri(w),m=y;default:if(x<1){if(v==123)--x;else if(v==125&&x++==0&&eM()==125)continue}switch(w+=kc(v),v*x){case 38:u=f>0?1:(w+="\f",-1);break;case 44:a[c++]=(ri(w)-1)*u,u=1;break;case 64:di()===45&&(w+=Nl(Mn())),d=di(),f=h=ri(g=w+=rM(Ul())),v++;break;case 45:y===45&&ri(w)==2&&(x=0)}}return o}function wm(t,e,n,i,r,o,s,a,l,c,f){for(var h=r-1,d=r===0?o:[""],m=kh(d),y=0,x=0,_=0;y<i;++y)for(var u=0,v=fa(t,h+1,h=YS(x=s[y])),g=t;u<m;++u)(g=iv(x>0?d[u]+" "+v:je(v,/&\f/g,d[u])))&&(l[_++]=g);return zc(t,e,n,r===0?Fh:a,l,c,f)}function sM(t,e,n){return zc(t,e,n,tv,kc(JS()),fa(t,2,-2),0)}function Am(t,e,n,i){return zc(t,e,n,Oh,fa(t,0,i),fa(t,i+1,-1),i)}function Go(t,e){for(var n="",i=kh(t),r=0;r<i;r++)n+=e(t[r],r,t,e)||"";return n}function aM(t,e,n,i){switch(t.type){case jS:if(t.children.length)break;case XS:case Oh:return t.return=t.return||t.value;case tv:return"";case nv:return t.return=t.value+"{"+Go(t.children,i)+"}";case Fh:t.value=t.props.join(",")}return ri(n=Go(t.children,i))?t.return=t.value+"{"+n+"}":""}function lM(t){var e=kh(t);return function(n,i,r,o){for(var s="",a=0;a<e;a++)s+=t[a](n,i,r,o)||"";return s}}function cM(t){return function(e){e.root||(e=e.return)&&t(e)}}var uM=function(e,n,i){for(var r=0,o=0;r=o,o=di(),r===38&&o===12&&(n[i]=1),!da(o);)Mn();return xa(e,hn)},fM=function(e,n){var i=-1,r=44;do switch(da(r)){case 0:r===38&&di()===12&&(n[i]=1),e[i]+=uM(hn-1,n,i);break;case 2:e[i]+=Nl(r);break;case 4:if(r===44){e[++i]=di()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=kc(r)}while(r=Mn());return e},dM=function(e,n){return sv(fM(ov(e),n))},Cm=new WeakMap,hM=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!Cm.get(i))&&!r){Cm.set(e,!0);for(var o=[],s=dM(n,o),a=i.props,l=0,c=0;l<s.length;l++)for(var f=0;f<a.length;f++,c++)e.props[c]=o[l]?s[l].replace(/&\f/g,a[f]):a[f]+" "+s[l]}}},pM=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function av(t,e){switch(KS(t,e)){case 5103:return Xe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Xe+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Xe+t+pc+t+qt+t+t;case 6828:case 4268:return Xe+t+qt+t+t;case 6165:return Xe+t+qt+"flex-"+t+t;case 5187:return Xe+t+je(t,/(\w+).+(:[^]+)/,Xe+"box-$1$2"+qt+"flex-$1$2")+t;case 5443:return Xe+t+qt+"flex-item-"+je(t,/flex-|-self/,"")+t;case 4675:return Xe+t+qt+"flex-line-pack"+je(t,/align-content|flex-|-self/,"")+t;case 5548:return Xe+t+qt+je(t,"shrink","negative")+t;case 5292:return Xe+t+qt+je(t,"basis","preferred-size")+t;case 6060:return Xe+"box-"+je(t,"-grow","")+Xe+t+qt+je(t,"grow","positive")+t;case 4554:return Xe+je(t,/([^-])(transform)/g,"$1"+Xe+"$2")+t;case 6187:return je(je(je(t,/(zoom-|grab)/,Xe+"$1"),/(image-set)/,Xe+"$1"),t,"")+t;case 5495:case 3959:return je(t,/(image-set\([^]*)/,Xe+"$1$`$1");case 4968:return je(je(t,/(.+:)(flex-)?(.*)/,Xe+"box-pack:$3"+qt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Xe+t+t;case 4095:case 3583:case 4068:case 2532:return je(t,/(.+)-inline(.+)/,Xe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ri(t)-1-e>6)switch(Vt(t,e+1)){case 109:if(Vt(t,e+4)!==45)break;case 102:return je(t,/(.+:)(.+)-([^]+)/,"$1"+Xe+"$2-$3$1"+pc+(Vt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~nd(t,"stretch")?av(je(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Vt(t,e+1)!==115)break;case 6444:switch(Vt(t,ri(t)-3-(~nd(t,"!important")&&10))){case 107:return je(t,":",":"+Xe)+t;case 101:return je(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Xe+(Vt(t,14)===45?"inline-":"")+"box$3$1"+Xe+"$2$3$1"+qt+"$2box$3")+t}break;case 5936:switch(Vt(t,e+11)){case 114:return Xe+t+qt+je(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Xe+t+qt+je(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Xe+t+qt+je(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Xe+t+qt+t+t}return t}var mM=function(e,n,i,r){if(e.length>-1&&!e.return)switch(e.type){case Oh:e.return=av(e.value,e.length);break;case nv:return Go([Ms(e,{value:je(e.value,"@","@"+Xe)})],r);case Fh:if(e.length)return QS(e.props,function(o){switch(ZS(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Go([Ms(e,{props:[je(o,/:(read-\w+)/,":"+pc+"$1")]})],r);case"::placeholder":return Go([Ms(e,{props:[je(o,/:(plac\w+)/,":"+Xe+"input-$1")]}),Ms(e,{props:[je(o,/:(plac\w+)/,":"+pc+"$1")]}),Ms(e,{props:[je(o,/:(plac\w+)/,qt+"input-$1")]})],r)}return""})}},gM=[mM],_M=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(x){var _=x.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(x),x.setAttribute("data-s",""))})}var r=e.stylisPlugins||gM,o={},s,a=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(x){for(var _=x.getAttribute("data-emotion").split(" "),u=1;u<_.length;u++)o[_[u]]=!0;a.push(x)});var l,c=[hM,pM];{var f,h=[aM,cM(function(x){f.insert(x)})],d=lM(c.concat(r,h)),m=function(_){return Go(oM(_),d)};l=function(_,u,v,g){f=v,m(_?_+"{"+u.styles+"}":u.styles),g&&(y.inserted[u.name]=!0)}}var y={key:n,sheet:new $S({key:n,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:l};return y.sheet.hydrate(a),y},vM=function(e,n,i){e.key+""+n.name},yM=function(e,n,i){vM(e,n);var r=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+r:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function xM(t){for(var e=0,n,i=0,r=t.length;r>=4;++i,r-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var SM={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},MM=!1,EM=/[A-Z]|^ms/g,TM=/_EMO_([^_]+?)_([^]*?)_EMO_/g,lv=function(e){return e.charCodeAt(1)===45},Rm=function(e){return e!=null&&typeof e!="boolean"},Pu=HS(function(t){return lv(t)?t:t.replace(EM,"-$&").toLowerCase()}),bm=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(TM,function(i,r,o){return oi={name:r,styles:o,next:oi},r})}return SM[e]!==1&&!lv(e)&&typeof n=="number"&&n!==0?n+"px":n},wM="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function ha(t,e,n){if(n==null)return"";var i=n;if(i.__emotion_styles!==void 0)return i;switch(typeof n){case"boolean":return"";case"object":{var r=n;if(r.anim===1)return oi={name:r.name,styles:r.styles,next:oi},r.name;var o=n;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)oi={name:s.name,styles:s.styles,next:oi},s=s.next;var a=o.styles+";";return a}return AM(t,e,n)}case"function":{if(t!==void 0){var l=oi,c=n(t);return oi=l,ha(t,e,c)}break}}var f=n;return f}function AM(t,e,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=ha(t,e,n[r])+";";else for(var o in n){var s=n[o];if(typeof s!="object"){var a=s;Rm(a)&&(i+=Pu(o)+":"+bm(o,a)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&MM)throw new Error(wM);if(Array.isArray(s)&&typeof s[0]=="string"&&e==null)for(var l=0;l<s.length;l++)Rm(s[l])&&(i+=Pu(o)+":"+bm(o,s[l])+";");else{var c=ha(t,e,s);switch(o){case"animation":case"animationName":{i+=Pu(o)+":"+c+";";break}default:i+=o+"{"+c+"}"}}}}return i}var Pm=/label:\s*([^\s;\n{]+)\s*(;|$)/g,oi;function cv(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,r="";oi=void 0;var o=t[0];if(o==null||o.raw===void 0)i=!1,r+=ha(n,e,o);else{var s=o;r+=s[0]}for(var a=1;a<t.length;a++)if(r+=ha(n,e,t[a]),i){var l=o;r+=l[a]}Pm.lastIndex=0;for(var c="",f;(f=Pm.exec(r))!==null;)c+="-"+f[1];var h=xM(r)+c;return{name:h,styles:r,next:oi}}var CM=vp.useInsertionEffect?vp.useInsertionEffect:!1,Lm=CM||Ue.useLayoutEffect,uv=Ue.createContext(typeof HTMLElement<"u"?_M({key:"css"}):null);uv.Provider;var RM=function(e){return Ue.forwardRef(function(n,i){var r=Ue.useContext(uv);return e(n,r,i)})},Bh=Ue.createContext({}),bM=RM(function(t,e){var n=t.styles,i=cv([n],void 0,Ue.useContext(Bh)),r=Ue.useRef();return Lm(function(){var o=e.key+"-global",s=new e.sheet.constructor({key:o,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),a=!1,l=document.querySelector('style[data-emotion="'+o+" "+i.name+'"]');return e.sheet.tags.length&&(s.before=e.sheet.tags[0]),l!==null&&(a=!0,l.setAttribute("data-emotion",o),s.hydrate([l])),r.current=[s,a],function(){s.flush()}},[e]),Lm(function(){var o=r.current,s=o[0],a=o[1];if(a){o[1]=!1;return}if(i.next!==void 0&&yM(e,i.next),s.tags.length){var l=s.tags[s.tags.length-1].nextElementSibling;s.before=l,s.flush()}e.insert("",i,s,!1)},[e,i.name]),null});function PM(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return cv(e)}function LM(t){return t==null||Object.keys(t).length===0}function fv(t){const{styles:e,defaultTheme:n={}}=t,i=typeof e=="function"?r=>e(LM(r)?n:r):e;return tt.jsx(bM,{styles:i})}function Zi(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function dv(t){if(!Zi(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=dv(t[n])}),e}function En(t,e,n={clone:!0}){const i=n.clone?{...t}:t;return Zi(t)&&Zi(e)&&Object.keys(e).forEach(r=>{Zi(e[r])&&Object.prototype.hasOwnProperty.call(t,r)&&Zi(t[r])?i[r]=En(t[r],e[r],n):n.clone?i[r]=Zi(e[r])?dv(e[r]):e[r]:i[r]=e[r]}),i}const DM=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,i)=>n.val-i.val),e.reduce((n,i)=>({...n,[i.key]:i.val}),{})};function IM(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:i=5,...r}=t,o=DM(e),s=Object.keys(o);function a(d){return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n})`}function l(d){return`@media (max-width:${(typeof e[d]=="number"?e[d]:d)-i/100}${n})`}function c(d,m){const y=s.indexOf(m);return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n}) and (max-width:${(y!==-1&&typeof e[s[y]]=="number"?e[s[y]]:m)-i/100}${n})`}function f(d){return s.indexOf(d)+1<s.length?c(d,s[s.indexOf(d)+1]):a(d)}function h(d){const m=s.indexOf(d);return m===0?a(s[1]):m===s.length-1?l(s[m]):c(d,s[s.indexOf(d)+1]).replace("@media","@media not all and")}return{keys:s,values:o,up:a,down:l,between:c,only:f,not:h,unit:n,...r}}function UM(t,e){if(!t.containerQueries)return e;const n=Object.keys(e).filter(i=>i.startsWith("@container")).sort((i,r)=>{var s,a;const o=/min-width:\s*([0-9.]+)/;return+(((s=i.match(o))==null?void 0:s[1])||0)-+(((a=r.match(o))==null?void 0:a[1])||0)});return n.length?n.reduce((i,r)=>{const o=e[r];return delete i[r],i[r]=o,i},{...e}):e}function NM(t,e){return e==="@"||e.startsWith("@")&&(t.some(n=>e.startsWith(`@${n}`))||!!e.match(/^@\d/))}function FM(t,e){const n=e.match(/^@([^/]+)?\/?(.+)?$/);if(!n)return null;const[,i,r]=n,o=Number.isNaN(+i)?i||0:+i;return t.containerQueries(r).up(o)}function OM(t){const e=(o,s)=>o.replace("@media",s?`@container ${s}`:"@container");function n(o,s){o.up=(...a)=>e(t.breakpoints.up(...a),s),o.down=(...a)=>e(t.breakpoints.down(...a),s),o.between=(...a)=>e(t.breakpoints.between(...a),s),o.only=(...a)=>e(t.breakpoints.only(...a),s),o.not=(...a)=>{const l=e(t.breakpoints.not(...a),s);return l.includes("not all and")?l.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):l}}const i={},r=o=>(n(i,o),i);return n(r),{...t,containerQueries:r}}const kM={borderRadius:4};function $s(t,e){return e?En(t,e,{clone:!1}):t}const Hc={xs:0,sm:600,md:900,lg:1200,xl:1536},Dm={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${Hc[t]}px)`},BM={containerQueries:t=>({up:e=>{let n=typeof e=="number"?e:Hc[e]||e;return typeof n=="number"&&(n=`${n}px`),t?`@container ${t} (min-width:${n})`:`@container (min-width:${n})`}})};function Ui(t,e,n){const i=t.theme||{};if(Array.isArray(e)){const o=i.breakpoints||Dm;return e.reduce((s,a,l)=>(s[o.up(o.keys[l])]=n(e[l]),s),{})}if(typeof e=="object"){const o=i.breakpoints||Dm;return Object.keys(e).reduce((s,a)=>{if(NM(o.keys,a)){const l=FM(i.containerQueries?i:BM,a);l&&(s[l]=n(e[a],a))}else if(Object.keys(o.values||Hc).includes(a)){const l=o.up(a);s[l]=n(e[a],a)}else{const l=a;s[l]=e[l]}return s},{})}return n(e)}function zM(t={}){var n;return((n=t.keys)==null?void 0:n.reduce((i,r)=>{const o=t.up(r);return i[o]={},i},{}))||{}}function HM(t,e){return t.reduce((n,i)=>{const r=n[i];return(!r||Object.keys(r).length===0)&&delete n[i],n},e)}function hv(t){if(typeof t!="string")throw new Error(hr(7));return t.charAt(0).toUpperCase()+t.slice(1)}function Vc(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const i=`vars.${e}`.split(".").reduce((r,o)=>r&&r[o]?r[o]:null,t);if(i!=null)return i}return e.split(".").reduce((i,r)=>i&&i[r]!=null?i[r]:null,t)}function mc(t,e,n,i=n){let r;return typeof t=="function"?r=t(n):Array.isArray(t)?r=t[n]||i:r=Vc(t,n)||i,e&&(r=e(r,i,t)),r}function Tt(t){const{prop:e,cssProperty:n=t.prop,themeKey:i,transform:r}=t,o=s=>{if(s[e]==null)return null;const a=s[e],l=s.theme,c=Vc(l,i)||{};return Ui(s,a,h=>{let d=mc(c,r,h);return h===d&&typeof h=="string"&&(d=mc(c,r,`${e}${h==="default"?"":hv(h)}`,h)),n===!1?d:{[n]:d}})};return o.propTypes={},o.filterProps=[e],o}function VM(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const GM={m:"margin",p:"padding"},WM={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Im={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},$M=VM(t=>{if(t.length>2)if(Im[t])t=Im[t];else return[t];const[e,n]=t.split(""),i=GM[e],r=WM[n]||"";return Array.isArray(r)?r.map(o=>i+o):[i+r]}),zh=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Hh=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...zh,...Hh];function Sa(t,e,n,i){const r=Vc(t,e,!0)??n;return typeof r=="number"||typeof r=="string"?o=>typeof o=="string"?o:typeof r=="string"?`calc(${o} * ${r})`:r*o:Array.isArray(r)?o=>{if(typeof o=="string")return o;const s=Math.abs(o),a=r[s];return o>=0?a:typeof a=="number"?-a:`-${a}`}:typeof r=="function"?r:()=>{}}function Vh(t){return Sa(t,"spacing",8)}function Ma(t,e){return typeof e=="string"||e==null?e:t(e)}function XM(t,e){return n=>t.reduce((i,r)=>(i[r]=Ma(e,n),i),{})}function jM(t,e,n,i){if(!e.includes(n))return null;const r=$M(n),o=XM(r,i),s=t[n];return Ui(t,s,o)}function pv(t,e){const n=Vh(t.theme);return Object.keys(t).map(i=>jM(t,e,i,n)).reduce($s,{})}function xt(t){return pv(t,zh)}xt.propTypes={};xt.filterProps=zh;function St(t){return pv(t,Hh)}St.propTypes={};St.filterProps=Hh;function mv(t=8,e=Vh({spacing:t})){if(t.mui)return t;const n=(...i)=>(i.length===0?[1]:i).map(o=>{const s=e(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function Gc(...t){const e=t.reduce((i,r)=>(r.filterProps.forEach(o=>{i[o]=r}),i),{}),n=i=>Object.keys(i).reduce((r,o)=>e[o]?$s(r,e[o](i)):r,{});return n.propTypes={},n.filterProps=t.reduce((i,r)=>i.concat(r.filterProps),[]),n}function Dn(t){return typeof t!="number"?t:`${t}px solid`}function Bn(t,e){return Tt({prop:t,themeKey:"borders",transform:e})}const YM=Bn("border",Dn),qM=Bn("borderTop",Dn),KM=Bn("borderRight",Dn),ZM=Bn("borderBottom",Dn),QM=Bn("borderLeft",Dn),JM=Bn("borderColor"),eE=Bn("borderTopColor"),tE=Bn("borderRightColor"),nE=Bn("borderBottomColor"),iE=Bn("borderLeftColor"),rE=Bn("outline",Dn),oE=Bn("outlineColor"),Wc=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=Sa(t.theme,"shape.borderRadius",4),n=i=>({borderRadius:Ma(e,i)});return Ui(t,t.borderRadius,n)}return null};Wc.propTypes={};Wc.filterProps=["borderRadius"];Gc(YM,qM,KM,ZM,QM,JM,eE,tE,nE,iE,Wc,rE,oE);const $c=t=>{if(t.gap!==void 0&&t.gap!==null){const e=Sa(t.theme,"spacing",8),n=i=>({gap:Ma(e,i)});return Ui(t,t.gap,n)}return null};$c.propTypes={};$c.filterProps=["gap"];const Xc=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=Sa(t.theme,"spacing",8),n=i=>({columnGap:Ma(e,i)});return Ui(t,t.columnGap,n)}return null};Xc.propTypes={};Xc.filterProps=["columnGap"];const jc=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=Sa(t.theme,"spacing",8),n=i=>({rowGap:Ma(e,i)});return Ui(t,t.rowGap,n)}return null};jc.propTypes={};jc.filterProps=["rowGap"];const sE=Tt({prop:"gridColumn"}),aE=Tt({prop:"gridRow"}),lE=Tt({prop:"gridAutoFlow"}),cE=Tt({prop:"gridAutoColumns"}),uE=Tt({prop:"gridAutoRows"}),fE=Tt({prop:"gridTemplateColumns"}),dE=Tt({prop:"gridTemplateRows"}),hE=Tt({prop:"gridTemplateAreas"}),pE=Tt({prop:"gridArea"});Gc($c,Xc,jc,sE,aE,lE,cE,uE,fE,dE,hE,pE);function Wo(t,e){return e==="grey"?e:t}const mE=Tt({prop:"color",themeKey:"palette",transform:Wo}),gE=Tt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Wo}),_E=Tt({prop:"backgroundColor",themeKey:"palette",transform:Wo});Gc(mE,gE,_E);function yn(t){return t<=1&&t!==0?`${t*100}%`:t}const vE=Tt({prop:"width",transform:yn}),Gh=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var r,o,s,a,l;const i=((s=(o=(r=t.theme)==null?void 0:r.breakpoints)==null?void 0:o.values)==null?void 0:s[n])||Hc[n];return i?((l=(a=t.theme)==null?void 0:a.breakpoints)==null?void 0:l.unit)!=="px"?{maxWidth:`${i}${t.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:yn(n)}};return Ui(t,t.maxWidth,e)}return null};Gh.filterProps=["maxWidth"];const yE=Tt({prop:"minWidth",transform:yn}),xE=Tt({prop:"height",transform:yn}),SE=Tt({prop:"maxHeight",transform:yn}),ME=Tt({prop:"minHeight",transform:yn});Tt({prop:"size",cssProperty:"width",transform:yn});Tt({prop:"size",cssProperty:"height",transform:yn});const EE=Tt({prop:"boxSizing"});Gc(vE,Gh,yE,xE,SE,ME,EE);const Yc={border:{themeKey:"borders",transform:Dn},borderTop:{themeKey:"borders",transform:Dn},borderRight:{themeKey:"borders",transform:Dn},borderBottom:{themeKey:"borders",transform:Dn},borderLeft:{themeKey:"borders",transform:Dn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Dn},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Wc},color:{themeKey:"palette",transform:Wo},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Wo},backgroundColor:{themeKey:"palette",transform:Wo},p:{style:St},pt:{style:St},pr:{style:St},pb:{style:St},pl:{style:St},px:{style:St},py:{style:St},padding:{style:St},paddingTop:{style:St},paddingRight:{style:St},paddingBottom:{style:St},paddingLeft:{style:St},paddingX:{style:St},paddingY:{style:St},paddingInline:{style:St},paddingInlineStart:{style:St},paddingInlineEnd:{style:St},paddingBlock:{style:St},paddingBlockStart:{style:St},paddingBlockEnd:{style:St},m:{style:xt},mt:{style:xt},mr:{style:xt},mb:{style:xt},ml:{style:xt},mx:{style:xt},my:{style:xt},margin:{style:xt},marginTop:{style:xt},marginRight:{style:xt},marginBottom:{style:xt},marginLeft:{style:xt},marginX:{style:xt},marginY:{style:xt},marginInline:{style:xt},marginInlineStart:{style:xt},marginInlineEnd:{style:xt},marginBlock:{style:xt},marginBlockStart:{style:xt},marginBlockEnd:{style:xt},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:$c},rowGap:{style:jc},columnGap:{style:Xc},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:yn},maxWidth:{style:Gh},minWidth:{transform:yn},height:{transform:yn},maxHeight:{transform:yn},minHeight:{transform:yn},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function TE(...t){const e=t.reduce((i,r)=>i.concat(Object.keys(r)),[]),n=new Set(e);return t.every(i=>n.size===Object.keys(i).length)}function wE(t,e){return typeof t=="function"?t(e):t}function AE(){function t(n,i,r,o){const s={[n]:i,theme:r},a=o[n];if(!a)return{[n]:i};const{cssProperty:l=n,themeKey:c,transform:f,style:h}=a;if(i==null)return null;if(c==="typography"&&i==="inherit")return{[n]:i};const d=Vc(r,c)||{};return h?h(s):Ui(s,i,y=>{let x=mc(d,f,y);return y===x&&typeof y=="string"&&(x=mc(d,f,`${n}${y==="default"?"":hv(y)}`,y)),l===!1?x:{[l]:x}})}function e(n){const{sx:i,theme:r={}}=n||{};if(!i)return null;const o=r.unstable_sxConfig??Yc;function s(a){let l=a;if(typeof a=="function")l=a(r);else if(typeof a!="object")return a;if(!l)return null;const c=zM(r.breakpoints),f=Object.keys(c);let h=c;return Object.keys(l).forEach(d=>{const m=wE(l[d],r);if(m!=null)if(typeof m=="object")if(o[d])h=$s(h,t(d,m,r,o));else{const y=Ui({theme:r},m,x=>({[d]:x}));TE(y,m)?h[d]=e({sx:m,theme:r}):h=$s(h,y)}else h=$s(h,t(d,m,r,o))}),UM(r,HM(f,h))}return Array.isArray(i)?i.map(s):s(i)}return e}const Ea=AE();Ea.filterProps=["sx"];function CE(t,e){var i;const n=this;if(n.vars){if(!((i=n.colorSchemes)!=null&&i[t])||typeof n.getColorSchemeSelector!="function")return{};let r=n.getColorSchemeSelector(t);return r==="&"?e:((r.includes("data-")||r.includes("."))&&(r=`*:where(${r.replace(/\s*&$/,"")}) &`),{[r]:e})}return n.palette.mode===t?e:{}}function gv(t={},...e){const{breakpoints:n={},palette:i={},spacing:r,shape:o={},...s}=t,a=IM(n),l=mv(r);let c=En({breakpoints:a,direction:"ltr",components:{},palette:{mode:"light",...i},spacing:l,shape:{...kM,...o}},s);return c=OM(c),c.applyStyles=CE,c=e.reduce((f,h)=>En(f,h),c),c.unstable_sxConfig={...Yc,...s==null?void 0:s.unstable_sxConfig},c.unstable_sx=function(h){return Ea({sx:h,theme:this})},c}function RE(t){return Object.keys(t).length===0}function _v(t=null){const e=Ue.useContext(Bh);return!e||RE(e)?t:e}const bE=gv();function PE(t=bE){return _v(t)}function LE({styles:t,themeId:e,defaultTheme:n={}}){const i=PE(n),r=typeof t=="function"?t(e&&i[e]||i):t;return tt.jsx(fv,{styles:r})}function rd(t,e){const n={...e};for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i)){const r=i;if(r==="components"||r==="slots")n[r]={...t[r],...n[r]};else if(r==="componentsProps"||r==="slotProps"){const o=t[r],s=e[r];if(!s)n[r]=o||{};else if(!o)n[r]=s;else{n[r]={...s};for(const a in o)if(Object.prototype.hasOwnProperty.call(o,a)){const l=a;n[r][l]=rd(o[l],s[l])}}}else n[r]===void 0&&(n[r]=t[r])}return n}function DE(t,e=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(t,n))}function Wh(t,e=0,n=1){return DE(t,e,n)}function IE(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(i=>i+i)),n?`rgb${n.length===4?"a":""}(${n.map((i,r)=>r<3?parseInt(i,16):Math.round(parseInt(i,16)/255*1e3)/1e3).join(", ")})`:""}function pr(t){if(t.type)return t;if(t.charAt(0)==="#")return pr(IE(t));const e=t.indexOf("("),n=t.substring(0,e);if(!["rgb","rgba","hsl","hsla","color"].includes(n))throw new Error(hr(9,t));let i=t.substring(e+1,t.length-1),r;if(n==="color"){if(i=i.split(" "),r=i.shift(),i.length===4&&i[3].charAt(0)==="/"&&(i[3]=i[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(r))throw new Error(hr(10,r))}else i=i.split(",");return i=i.map(o=>parseFloat(o)),{type:n,values:i,colorSpace:r}}const UE=t=>{const e=pr(t);return e.values.slice(0,3).map((n,i)=>e.type.includes("hsl")&&i!==0?`${n}%`:n).join(" ")},Is=(t,e)=>{try{return UE(t)}catch{return t}};function qc(t){const{type:e,colorSpace:n}=t;let{values:i}=t;return e.includes("rgb")?i=i.map((r,o)=>o<3?parseInt(r,10):r):e.includes("hsl")&&(i[1]=`${i[1]}%`,i[2]=`${i[2]}%`),e.includes("color")?i=`${n} ${i.join(" ")}`:i=`${i.join(", ")}`,`${e}(${i})`}function vv(t){t=pr(t);const{values:e}=t,n=e[0],i=e[1]/100,r=e[2]/100,o=i*Math.min(r,1-r),s=(c,f=(c+n/30)%12)=>r-o*Math.max(Math.min(f-3,9-f,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return t.type==="hsla"&&(a+="a",l.push(e[3])),qc({type:a,values:l})}function od(t){t=pr(t);let e=t.type==="hsl"||t.type==="hsla"?pr(vv(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function NE(t,e){const n=od(t),i=od(e);return(Math.max(n,i)+.05)/(Math.min(n,i)+.05)}function FE(t,e){return t=pr(t),e=Wh(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,qc(t)}function Ka(t,e,n){try{return FE(t,e)}catch{return t}}function $h(t,e){if(t=pr(t),e=Wh(e),t.type.includes("hsl"))t.values[2]*=1-e;else if(t.type.includes("rgb")||t.type.includes("color"))for(let n=0;n<3;n+=1)t.values[n]*=1-e;return qc(t)}function rt(t,e,n){try{return $h(t,e)}catch{return t}}function Xh(t,e){if(t=pr(t),e=Wh(e),t.type.includes("hsl"))t.values[2]+=(100-t.values[2])*e;else if(t.type.includes("rgb"))for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.includes("color"))for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return qc(t)}function ot(t,e,n){try{return Xh(t,e)}catch{return t}}function OE(t,e=.15){return od(t)>.5?$h(t,e):Xh(t,e)}function Za(t,e,n){try{return OE(t,e)}catch{return t}}const yv=Ue.createContext(null);function jh(){return Ue.useContext(yv)}const kE=typeof Symbol=="function"&&Symbol.for,BE=kE?Symbol.for("mui.nested"):"__THEME_NESTED__";function zE(t,e){return typeof e=="function"?e(t):{...t,...e}}function HE(t){const{children:e,theme:n}=t,i=jh(),r=Ue.useMemo(()=>{const o=i===null?{...n}:zE(i,n);return o!=null&&(o[BE]=i!==null),o},[n,i]);return tt.jsx(yv.Provider,{value:r,children:e})}const VE=Ue.createContext();function GE({value:t,...e}){return tt.jsx(VE.Provider,{value:t??!0,...e})}const xv=Ue.createContext(void 0);function WE({value:t,children:e}){return tt.jsx(xv.Provider,{value:t,children:e})}function $E(t){const{theme:e,name:n,props:i}=t;if(!e||!e.components||!e.components[n])return i;const r=e.components[n];return r.defaultProps?rd(r.defaultProps,i):!r.styleOverrides&&!r.variants?rd(r,i):i}function XE({props:t,name:e}){const n=Ue.useContext(xv);return $E({props:t,name:e,theme:{components:n}})}const Um={};function Nm(t,e,n,i=!1){return Ue.useMemo(()=>{const r=t&&e[t]||e;if(typeof n=="function"){const o=n(r),s=t?{...e,[t]:o}:o;return i?()=>s:s}return t?{...e,[t]:n}:{...e,...n}},[t,e,n,i])}function Sv(t){const{children:e,theme:n,themeId:i}=t,r=_v(Um),o=jh()||Um,s=Nm(i,r,n),a=Nm(i,o,n,!0),l=s.direction==="rtl";return tt.jsx(HE,{theme:a,children:tt.jsx(Bh.Provider,{value:s,children:tt.jsx(GE,{value:l,children:tt.jsx(WE,{value:s==null?void 0:s.components,children:e})})})})}const Yh="mode",qh="color-scheme",jE="data-color-scheme";function YE(t){const{defaultLightColorScheme:e="light",defaultDarkColorScheme:n="dark",modeStorageKey:i=Yh,colorSchemeStorageKey:r=qh,attribute:o=jE,colorSchemeNode:s="document.documentElement",nonce:a}=t||{};let l="",c=o;if(o==="class"&&(c=".%s"),o==="data"&&(c="[data-%s]"),c.startsWith(".")){const h=c.substring(1);l+=`${s}.classList.remove('${h}'.replace('%s', light), '${h}'.replace('%s', dark));
      ${s}.classList.add('${h}'.replace('%s', colorScheme));`}const f=c.match(/\[([^\]]+)\]/);if(f){const[h,d]=f[1].split("=");d||(l+=`${s}.removeAttribute('${h}'.replace('%s', light));
      ${s}.removeAttribute('${h}'.replace('%s', dark));`),l+=`
      ${s}.setAttribute('${h}'.replace('%s', colorScheme), ${d?`${d}.replace('%s', colorScheme)`:'""'});`}else l+=`${s}.setAttribute('${c}', colorScheme);`;return tt.jsx("script",{suppressHydrationWarning:!0,nonce:typeof window>"u"?a:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${i}') || 'system';
  const dark = localStorage.getItem('${r}-dark') || '${n}';
  const light = localStorage.getItem('${r}-light') || '${e}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${l}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}function Fm(t){if(typeof window<"u"&&typeof window.matchMedia=="function"&&t==="system")return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Mv(t,e){if(t.mode==="light"||t.mode==="system"&&t.systemMode==="light")return e("light");if(t.mode==="dark"||t.mode==="system"&&t.systemMode==="dark")return e("dark")}function qE(t){return Mv(t,e=>{if(e==="light")return t.lightColorScheme;if(e==="dark")return t.darkColorScheme})}function Lu(t,e){if(typeof window>"u")return;let n;try{n=localStorage.getItem(t)||void 0,n||localStorage.setItem(t,e)}catch{}return n||e}function KE(t){const{defaultMode:e="light",defaultLightColorScheme:n,defaultDarkColorScheme:i,supportedColorSchemes:r=[],modeStorageKey:o=Yh,colorSchemeStorageKey:s=qh,storageWindow:a=typeof window>"u"?void 0:window}=t,l=r.join(","),c=r.length>1,[f,h]=Ue.useState(()=>{const g=Lu(o,e),M=Lu(`${s}-light`,n),C=Lu(`${s}-dark`,i);return{mode:g,systemMode:Fm(g),lightColorScheme:M,darkColorScheme:C}}),[,d]=Ue.useState(!1),m=Ue.useRef(!1);Ue.useEffect(()=>{c&&d(!0),m.current=!0},[c]);const y=qE(f),x=Ue.useCallback(g=>{h(M=>{if(g===M.mode)return M;const C=g??e;try{localStorage.setItem(o,C)}catch{}return{...M,mode:C,systemMode:Fm(C)}})},[o,e]),_=Ue.useCallback(g=>{g?typeof g=="string"?g&&!l.includes(g)?console.error(`\`${g}\` does not exist in \`theme.colorSchemes\`.`):h(M=>{const C={...M};return Mv(M,A=>{try{localStorage.setItem(`${s}-${A}`,g)}catch{}A==="light"&&(C.lightColorScheme=g),A==="dark"&&(C.darkColorScheme=g)}),C}):h(M=>{const C={...M},A=g.light===null?n:g.light,w=g.dark===null?i:g.dark;if(A)if(!l.includes(A))console.error(`\`${A}\` does not exist in \`theme.colorSchemes\`.`);else{C.lightColorScheme=A;try{localStorage.setItem(`${s}-light`,A)}catch{}}if(w)if(!l.includes(w))console.error(`\`${w}\` does not exist in \`theme.colorSchemes\`.`);else{C.darkColorScheme=w;try{localStorage.setItem(`${s}-dark`,w)}catch{}}return C}):h(M=>{try{localStorage.setItem(`${s}-light`,n),localStorage.setItem(`${s}-dark`,i)}catch{}return{...M,lightColorScheme:n,darkColorScheme:i}})},[l,s,n,i]),u=Ue.useCallback(g=>{f.mode==="system"&&h(M=>{const C=g!=null&&g.matches?"dark":"light";return M.systemMode===C?M:{...M,systemMode:C}})},[f.mode]),v=Ue.useRef(u);return v.current=u,Ue.useEffect(()=>{if(typeof window.matchMedia!="function"||!c)return;const g=(...C)=>v.current(...C),M=window.matchMedia("(prefers-color-scheme: dark)");return M.addListener(g),g(M),()=>{M.removeListener(g)}},[c]),Ue.useEffect(()=>{if(a&&c){const g=M=>{const C=M.newValue;typeof M.key=="string"&&M.key.startsWith(s)&&(!C||l.match(C))&&(M.key.endsWith("light")&&_({light:C}),M.key.endsWith("dark")&&_({dark:C})),M.key===o&&(!C||["light","dark","system"].includes(C))&&x(C||e)};return a.addEventListener("storage",g),()=>{a.removeEventListener("storage",g)}}},[_,x,o,s,l,e,a,c]),{...f,mode:m.current||!c?f.mode:void 0,systemMode:m.current||!c?f.systemMode:void 0,colorScheme:m.current||!c?y:void 0,setMode:x,setColorScheme:_}}const ZE="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function QE(t){const{themeId:e,theme:n={},modeStorageKey:i=Yh,colorSchemeStorageKey:r=qh,disableTransitionOnChange:o=!1,defaultColorScheme:s,resolveTheme:a}=t,l={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},c=Ue.createContext(void 0),f=()=>Ue.useContext(c)||l;function h(x){var E,z,K,ee,J;const{children:_,theme:u,modeStorageKey:v=i,colorSchemeStorageKey:g=r,disableTransitionOnChange:M=o,storageWindow:C=typeof window>"u"?void 0:window,documentNode:A=typeof document>"u"?void 0:document,colorSchemeNode:w=typeof document>"u"?void 0:document.documentElement,disableNestedContext:L=!1,disableStyleSheetGeneration:p=!1}=x,S=Ue.useRef(!1),b=jh(),B=Ue.useContext(c),O=!!B&&!L,X=Ue.useMemo(()=>u||(typeof n=="function"?n():n),[u]),j=X[e],{colorSchemes:G={},components:q={},cssVarPrefix:D,...$}=j||X,Q=Object.keys(G).filter(de=>!!G[de]).join(","),oe=Ue.useMemo(()=>Q.split(","),[Q]),Se=typeof s=="string"?s:s.light,ze=typeof s=="string"?s:s.dark,W=G[Se]&&G[ze]?"system":((z=(E=G[$.defaultColorScheme])==null?void 0:E.palette)==null?void 0:z.mode)||((K=$.palette)==null?void 0:K.mode),{mode:ie,setMode:fe,systemMode:ue,lightColorScheme:Te,darkColorScheme:be,colorScheme:Oe,setColorScheme:lt}=KE({supportedColorSchemes:oe,defaultLightColorScheme:Se,defaultDarkColorScheme:ze,modeStorageKey:v,colorSchemeStorageKey:g,defaultMode:W,storageWindow:C});let P=ie,We=Oe;O&&(P=B.mode,We=B.colorScheme);const $e=We||$.defaultColorScheme,Ye=((ee=$.generateThemeVars)==null?void 0:ee.call($))||$.vars,_e={...$,components:q,colorSchemes:G,cssVarPrefix:D,vars:Ye};if(typeof _e.generateSpacing=="function"&&(_e.spacing=_e.generateSpacing()),$e){const de=G[$e];de&&typeof de=="object"&&Object.keys(de).forEach(te=>{de[te]&&typeof de[te]=="object"?_e[te]={..._e[te],...de[te]}:_e[te]=de[te]})}const st=$.colorSchemeSelector;Ue.useEffect(()=>{if(We&&w&&st&&st!=="media"){const de=st;let te=st;if(de==="class"&&(te=".%s"),de==="data"&&(te="[data-%s]"),de!=null&&de.startsWith("data-")&&!de.includes("%s")&&(te=`[${de}="%s"]`),te.startsWith("."))w.classList.remove(...oe.map(he=>te.substring(1).replace("%s",he))),w.classList.add(te.substring(1).replace("%s",We));else{const he=te.replace("%s",We).match(/\[([^\]]+)\]/);if(he){const[De,re]=he[1].split("=");re||oe.forEach(me=>{w.removeAttribute(De.replace(We,me))}),w.setAttribute(De,re?re.replace(/"|'/g,""):"")}else w.setAttribute(te,We)}}},[We,st,w,oe]),Ue.useEffect(()=>{let de;if(M&&S.current&&A){const te=A.createElement("style");te.appendChild(A.createTextNode(ZE)),A.head.appendChild(te),window.getComputedStyle(A.body),de=setTimeout(()=>{A.head.removeChild(te)},1)}return()=>{clearTimeout(de)}},[We,M,A]),Ue.useEffect(()=>(S.current=!0,()=>{S.current=!1}),[]);const Ce=Ue.useMemo(()=>({allColorSchemes:oe,colorScheme:We,darkColorScheme:be,lightColorScheme:Te,mode:P,setColorScheme:lt,setMode:fe,systemMode:ue}),[oe,We,be,Te,P,lt,fe,ue]);let Pe=!0;(p||$.cssVariables===!1||O&&(b==null?void 0:b.cssVarPrefix)===D)&&(Pe=!1);const R=tt.jsxs(Ue.Fragment,{children:[tt.jsx(Sv,{themeId:j?e:void 0,theme:a?a(_e):_e,children:_}),Pe&&tt.jsx(fv,{styles:((J=_e.generateStyleSheets)==null?void 0:J.call(_e))||[]})]});return O?R:tt.jsx(c.Provider,{value:Ce,children:R})}const d=typeof s=="string"?s:s.light,m=typeof s=="string"?s:s.dark;return{CssVarsProvider:h,useColorScheme:f,getInitColorSchemeScript:x=>YE({colorSchemeStorageKey:r,defaultLightColorScheme:d,defaultDarkColorScheme:m,modeStorageKey:i,...x})}}function JE(t=""){function e(...i){if(!i.length)return"";const r=i[0];return typeof r=="string"&&!r.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${t?`${t}-`:""}${r}${e(...i.slice(1))})`:`, ${r}`}return(i,...r)=>`var(--${t?`${t}-`:""}${i}${e(...r)})`}const Om=(t,e,n,i=[])=>{let r=t;e.forEach((o,s)=>{s===e.length-1?Array.isArray(r)?r[Number(o)]=n:r&&typeof r=="object"&&(r[o]=n):r&&typeof r=="object"&&(r[o]||(r[o]=i.includes(o)?[]:{}),r=r[o])})},e1=(t,e,n)=>{function i(r,o=[],s=[]){Object.entries(r).forEach(([a,l])=>{(!n||n&&!n([...o,a]))&&l!=null&&(typeof l=="object"&&Object.keys(l).length>0?i(l,[...o,a],Array.isArray(l)?[...s,a]:s):e([...o,a],l,s))})}i(t)},t1=(t,e)=>typeof e=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(i=>t.includes(i))||t[t.length-1].toLowerCase().includes("opacity")?e:`${e}px`:e;function Du(t,e){const{prefix:n,shouldSkipGeneratingVar:i}=e||{},r={},o={},s={};return e1(t,(a,l,c)=>{if((typeof l=="string"||typeof l=="number")&&(!i||!i(a,l))){const f=`--${n?`${n}-`:""}${a.join("-")}`,h=t1(a,l);Object.assign(r,{[f]:h}),Om(o,a,`var(${f})`,c),Om(s,a,`var(${f}, ${h})`,c)}},a=>a[0]==="vars"),{css:r,vars:o,varsWithDefaults:s}}function n1(t,e={}){const{getSelector:n=_,disableCssColorScheme:i,colorSchemeSelector:r}=e,{colorSchemes:o={},components:s,defaultColorScheme:a="light",...l}=t,{vars:c,css:f,varsWithDefaults:h}=Du(l,e);let d=h;const m={},{[a]:y,...x}=o;if(Object.entries(x||{}).forEach(([g,M])=>{const{vars:C,css:A,varsWithDefaults:w}=Du(M,e);d=En(d,w),m[g]={css:A,vars:C}}),y){const{css:g,vars:M,varsWithDefaults:C}=Du(y,e);d=En(d,C),m[a]={css:g,vars:M}}function _(g,M){var A,w;let C=r;if(r==="class"&&(C=".%s"),r==="data"&&(C="[data-%s]"),r!=null&&r.startsWith("data-")&&!r.includes("%s")&&(C=`[${r}="%s"]`),g){if(C==="media")return t.defaultColorScheme===g?":root":{[`@media (prefers-color-scheme: ${((w=(A=o[g])==null?void 0:A.palette)==null?void 0:w.mode)||g})`]:{":root":M}};if(C)return t.defaultColorScheme===g?`:root, ${C.replace("%s",String(g))}`:C.replace("%s",String(g))}return":root"}return{vars:d,generateThemeVars:()=>{let g={...c};return Object.entries(m).forEach(([,{vars:M}])=>{g=En(g,M)}),g},generateStyleSheets:()=>{var L,p;const g=[],M=t.defaultColorScheme||"light";function C(S,b){Object.keys(b).length&&g.push(typeof S=="string"?{[S]:{...b}}:S)}C(n(void 0,{...f}),f);const{[M]:A,...w}=m;if(A){const{css:S}=A,b=(p=(L=o[M])==null?void 0:L.palette)==null?void 0:p.mode,B=!i&&b?{colorScheme:b,...S}:{...S};C(n(M,{...B}),B)}return Object.entries(w).forEach(([S,{css:b}])=>{var X,j;const B=(j=(X=o[S])==null?void 0:X.palette)==null?void 0:j.mode,O=!i&&B?{colorScheme:B,...b}:{...b};C(n(S,{...O}),O)}),g}}}function i1(t){return function(n){return t==="media"?`@media (prefers-color-scheme: ${n})`:t?t.startsWith("data-")&&!t.includes("%s")?`[${t}="${n}"] &`:t==="class"?`.${n} &`:t==="data"?`[data-${n}] &`:`${t.replace("%s",n)} &`:"&"}}const km={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:ua.white,default:ua.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Iu={text:{primary:ua.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:ua.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Bm(t,e,n,i){const r=i.light||i,o=i.dark||i*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=Xh(t.main,r):e==="dark"&&(t.dark=$h(t.main,o)))}function r1(t="light"){return t==="dark"?{main:io[200],light:io[50],dark:io[400]}:{main:io[700],light:io[400],dark:io[800]}}function o1(t="light"){return t==="dark"?{main:no[200],light:no[50],dark:no[400]}:{main:no[500],light:no[300],dark:no[700]}}function s1(t="light"){return t==="dark"?{main:to[500],light:to[300],dark:to[700]}:{main:to[700],light:to[400],dark:to[800]}}function a1(t="light"){return t==="dark"?{main:ro[400],light:ro[300],dark:ro[700]}:{main:ro[700],light:ro[500],dark:ro[900]}}function l1(t="light"){return t==="dark"?{main:oo[400],light:oo[300],dark:oo[700]}:{main:oo[800],light:oo[500],dark:oo[900]}}function c1(t="light"){return t==="dark"?{main:Ss[400],light:Ss[300],dark:Ss[700]}:{main:"#ed6c02",light:Ss[500],dark:Ss[900]}}function Kh(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:i=.2,...r}=t,o=t.primary||r1(e),s=t.secondary||o1(e),a=t.error||s1(e),l=t.info||a1(e),c=t.success||l1(e),f=t.warning||c1(e);function h(x){return NE(x,Iu.text.primary)>=n?Iu.text.primary:km.text.primary}const d=({color:x,name:_,mainShade:u=500,lightShade:v=300,darkShade:g=700})=>{if(x={...x},!x.main&&x[u]&&(x.main=x[u]),!x.hasOwnProperty("main"))throw new Error(hr(11,_?` (${_})`:"",u));if(typeof x.main!="string")throw new Error(hr(12,_?` (${_})`:"",JSON.stringify(x.main)));return Bm(x,"light",v,i),Bm(x,"dark",g,i),x.contrastText||(x.contrastText=h(x.main)),x},m={dark:Iu,light:km};return En({common:{...ua},mode:e,primary:d({color:o,name:"primary"}),secondary:d({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:a,name:"error"}),warning:d({color:f,name:"warning"}),info:d({color:l,name:"info"}),success:d({color:c,name:"success"}),grey:zS,contrastThreshold:n,getContrastText:h,augmentColor:d,tonalOffset:i,...m[e]},r)}function u1(t){const e={};return Object.entries(t).forEach(i=>{const[r,o]=i;typeof o=="object"&&(e[r]=`${o.fontStyle?`${o.fontStyle} `:""}${o.fontVariant?`${o.fontVariant} `:""}${o.fontWeight?`${o.fontWeight} `:""}${o.fontStretch?`${o.fontStretch} `:""}${o.fontSize||""}${o.lineHeight?`/${o.lineHeight} `:""}${o.fontFamily||""}`)}),e}function f1(t,e){return{toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}},...e}}function d1(t){return Math.round(t*1e5)/1e5}const zm={textTransform:"uppercase"},Hm='"Roboto", "Helvetica", "Arial", sans-serif';function Ev(t,e){const{fontFamily:n=Hm,fontSize:i=14,fontWeightLight:r=300,fontWeightRegular:o=400,fontWeightMedium:s=500,fontWeightBold:a=700,htmlFontSize:l=16,allVariants:c,pxToRem:f,...h}=typeof e=="function"?e(t):e,d=i/14,m=f||(_=>`${_/l*d}rem`),y=(_,u,v,g,M)=>({fontFamily:n,fontWeight:_,fontSize:m(u),lineHeight:v,...n===Hm?{letterSpacing:`${d1(g/u)}em`}:{},...M,...c}),x={h1:y(r,96,1.167,-1.5),h2:y(r,60,1.2,-.5),h3:y(o,48,1.167,0),h4:y(o,34,1.235,.25),h5:y(o,24,1.334,0),h6:y(s,20,1.6,.15),subtitle1:y(o,16,1.75,.15),subtitle2:y(s,14,1.57,.1),body1:y(o,16,1.5,.15),body2:y(o,14,1.43,.15),button:y(s,14,1.75,.4,zm),caption:y(o,12,1.66,.4),overline:y(o,12,2.66,1,zm),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return En({htmlFontSize:l,pxToRem:m,fontFamily:n,fontSize:i,fontWeightLight:r,fontWeightRegular:o,fontWeightMedium:s,fontWeightBold:a,...x},h,{clone:!1})}const h1=.2,p1=.14,m1=.12;function dt(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${h1})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${p1})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${m1})`].join(",")}const g1=["none",dt(0,2,1,-1,0,1,1,0,0,1,3,0),dt(0,3,1,-2,0,2,2,0,0,1,5,0),dt(0,3,3,-2,0,3,4,0,0,1,8,0),dt(0,2,4,-1,0,4,5,0,0,1,10,0),dt(0,3,5,-1,0,5,8,0,0,1,14,0),dt(0,3,5,-1,0,6,10,0,0,1,18,0),dt(0,4,5,-2,0,7,10,1,0,2,16,1),dt(0,5,5,-3,0,8,10,1,0,3,14,2),dt(0,5,6,-3,0,9,12,1,0,3,16,2),dt(0,6,6,-3,0,10,14,1,0,4,18,3),dt(0,6,7,-4,0,11,15,1,0,4,20,3),dt(0,7,8,-4,0,12,17,2,0,5,22,4),dt(0,7,8,-4,0,13,19,2,0,5,24,4),dt(0,7,9,-4,0,14,21,2,0,5,26,4),dt(0,8,9,-5,0,15,22,2,0,6,28,5),dt(0,8,10,-5,0,16,24,2,0,6,30,5),dt(0,8,11,-5,0,17,26,2,0,6,32,5),dt(0,9,11,-5,0,18,28,2,0,7,34,6),dt(0,9,12,-6,0,19,29,2,0,7,36,6),dt(0,10,13,-6,0,20,31,3,0,8,38,7),dt(0,10,13,-6,0,21,33,3,0,8,40,7),dt(0,10,14,-6,0,22,35,3,0,8,42,7),dt(0,11,14,-7,0,23,36,3,0,9,44,8),dt(0,11,15,-7,0,24,38,3,0,9,46,8)],_1={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},v1={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Vm(t){return`${Math.round(t)}ms`}function y1(t){if(!t)return 0;const e=t/36;return Math.min(Math.round((4+15*e**.25+e/5)*10),3e3)}function x1(t){const e={..._1,...t.easing},n={...v1,...t.duration};return{getAutoHeightDuration:y1,create:(r=["all"],o={})=>{const{duration:s=n.standard,easing:a=e.easeInOut,delay:l=0,...c}=o;return(Array.isArray(r)?r:[r]).map(f=>`${f} ${typeof s=="string"?s:Vm(s)} ${a} ${typeof l=="string"?l:Vm(l)}`).join(",")},...t,easing:e,duration:n}}const S1={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function sd(t={},...e){const{breakpoints:n,mixins:i={},spacing:r,palette:o={},transitions:s={},typography:a={},shape:l,...c}=t;if(t.vars)throw new Error(hr(20));const f=Kh(o),h=gv(t);let d=En(h,{mixins:f1(h.breakpoints,i),palette:f,shadows:g1.slice(),typography:Ev(f,a),transitions:x1(s),zIndex:{...S1}});return d=En(d,c),d=e.reduce((m,y)=>En(m,y),d),d.unstable_sxConfig={...Yc,...c==null?void 0:c.unstable_sxConfig},d.unstable_sx=function(y){return Ea({sx:y,theme:this})},d}function M1(t){let e;return t<1?e=5.11916*t**2:e=4.5*Math.log(t+1)+2,Math.round(e*10)/1e3}const E1=[...Array(25)].map((t,e)=>{if(e===0)return"none";const n=M1(e);return`linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`});function Tv(t){return{inputPlaceholder:t==="dark"?.5:.42,inputUnderline:t==="dark"?.7:.42,switchTrackDisabled:t==="dark"?.2:.12,switchTrack:t==="dark"?.3:.38}}function wv(t){return t==="dark"?E1:[]}function T1(t){const{palette:e={mode:"light"},opacity:n,overlays:i,...r}=t,o=Kh(e);return{palette:o,opacity:{...Tv(o.mode),...n},overlays:i||wv(o.mode),...r}}function w1(t){var e;return!!t[0].match(/(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/)||!!t[0].match(/sxConfig$/)||t[0]==="palette"&&!!((e=t[1])!=null&&e.match(/(mode|contrastThreshold|tonalOffset)/))}const A1=t=>[...[...Array(25)].map((e,n)=>`--${t?`${t}-`:""}overlays-${n}`),`--${t?`${t}-`:""}palette-AppBar-darkBg`,`--${t?`${t}-`:""}palette-AppBar-darkColor`],C1=t=>(e,n)=>{const i=t.colorSchemeSelector;let r=i;if(i==="class"&&(r=".%s"),i==="data"&&(r="[data-%s]"),i!=null&&i.startsWith("data-")&&!i.includes("%s")&&(r=`[${i}="%s"]`),t.defaultColorScheme===e){if(e==="dark"){const o={};return A1(t.cssVarPrefix).forEach(s=>{o[s]=n[s],delete n[s]}),r==="media"?{":root":n,"@media (prefers-color-scheme: dark)":{":root":o}}:r?{[r.replace("%s",e)]:o,[`:root, ${r.replace("%s",e)}`]:n}:{":root":{...n,...o}}}if(r&&r!=="media")return`:root, ${r.replace("%s",String(e))}`}else if(e){if(r==="media")return{[`@media (prefers-color-scheme: ${String(e)})`]:{":root":n}};if(r)return r.replace("%s",String(e))}return":root"};function R1(t){return Zi(t)||typeof t>"u"||typeof t=="string"||typeof t=="boolean"||typeof t=="number"||Array.isArray(t)}function b1(t={}){const e={...t};function n(i){const r=Object.entries(i);for(let o=0;o<r.length;o++){const[s,a]=r[o];!R1(a)||s.startsWith("unstable_")?delete i[s]:Zi(a)&&(i[s]={...a},n(i[s]))}}return n(e),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function P1(t,e){e.forEach(n=>{t[n]||(t[n]={})})}function V(t,e,n){!t[e]&&n&&(t[e]=n)}function Us(t){return!t||!t.startsWith("hsl")?t:vv(t)}function mi(t,e){`${e}Channel`in t||(t[`${e}Channel`]=Is(Us(t[e]),`MUI: Can't create \`palette.${e}Channel\` because \`palette.${e}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${e}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`))}function L1(t){return typeof t=="number"?`${t}px`:typeof t=="string"||typeof t=="function"||Array.isArray(t)?t:"8px"}const ti=t=>{try{return t()}catch{}},D1=(t="mui")=>JE(t);function Uu(t,e,n,i){if(!e)return;e=e===!0?{}:e;const r=i==="dark"?"dark":"light";if(!n){t[i]=T1({...e,palette:{mode:r,...e==null?void 0:e.palette}});return}const{palette:o,...s}=sd({...n,palette:{mode:r,...e==null?void 0:e.palette}});return t[i]={...e,palette:o,opacity:{...Tv(r),...e==null?void 0:e.opacity},overlays:(e==null?void 0:e.overlays)||wv(r)},s}function I1(t={},...e){const{colorSchemes:n={light:!0},defaultColorScheme:i,disableCssColorScheme:r=!1,cssVarPrefix:o="mui",shouldSkipGeneratingVar:s=w1,colorSchemeSelector:a=n.light&&n.dark?"media":void 0,...l}=t,c=Object.keys(n)[0],f=i||(n.light&&c!=="light"?"light":c),h=D1(o),{[f]:d,light:m,dark:y,...x}=n,_={...x};let u=d;if((f==="dark"&&!("dark"in n)||f==="light"&&!("light"in n))&&(u=!0),!u)throw new Error(hr(21,f));const v=Uu(_,u,l,f);m&&!_.light&&Uu(_,m,void 0,"light"),y&&!_.dark&&Uu(_,y,void 0,"dark");let g={defaultColorScheme:f,...v,cssVarPrefix:o,colorSchemeSelector:a,getCssVar:h,colorSchemes:_,font:{...u1(v.typography),...v.font},spacing:L1(l.spacing)};Object.keys(g.colorSchemes).forEach(L=>{const p=g.colorSchemes[L].palette,S=b=>{const B=b.split("-"),O=B[1],X=B[2];return h(b,p[O][X])};if(p.mode==="light"&&(V(p.common,"background","#fff"),V(p.common,"onBackground","#000")),p.mode==="dark"&&(V(p.common,"background","#000"),V(p.common,"onBackground","#fff")),P1(p,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),p.mode==="light"){V(p.Alert,"errorColor",rt(p.error.light,.6)),V(p.Alert,"infoColor",rt(p.info.light,.6)),V(p.Alert,"successColor",rt(p.success.light,.6)),V(p.Alert,"warningColor",rt(p.warning.light,.6)),V(p.Alert,"errorFilledBg",S("palette-error-main")),V(p.Alert,"infoFilledBg",S("palette-info-main")),V(p.Alert,"successFilledBg",S("palette-success-main")),V(p.Alert,"warningFilledBg",S("palette-warning-main")),V(p.Alert,"errorFilledColor",ti(()=>p.getContrastText(p.error.main))),V(p.Alert,"infoFilledColor",ti(()=>p.getContrastText(p.info.main))),V(p.Alert,"successFilledColor",ti(()=>p.getContrastText(p.success.main))),V(p.Alert,"warningFilledColor",ti(()=>p.getContrastText(p.warning.main))),V(p.Alert,"errorStandardBg",ot(p.error.light,.9)),V(p.Alert,"infoStandardBg",ot(p.info.light,.9)),V(p.Alert,"successStandardBg",ot(p.success.light,.9)),V(p.Alert,"warningStandardBg",ot(p.warning.light,.9)),V(p.Alert,"errorIconColor",S("palette-error-main")),V(p.Alert,"infoIconColor",S("palette-info-main")),V(p.Alert,"successIconColor",S("palette-success-main")),V(p.Alert,"warningIconColor",S("palette-warning-main")),V(p.AppBar,"defaultBg",S("palette-grey-100")),V(p.Avatar,"defaultBg",S("palette-grey-400")),V(p.Button,"inheritContainedBg",S("palette-grey-300")),V(p.Button,"inheritContainedHoverBg",S("palette-grey-A100")),V(p.Chip,"defaultBorder",S("palette-grey-400")),V(p.Chip,"defaultAvatarColor",S("palette-grey-700")),V(p.Chip,"defaultIconColor",S("palette-grey-700")),V(p.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),V(p.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),V(p.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),V(p.LinearProgress,"primaryBg",ot(p.primary.main,.62)),V(p.LinearProgress,"secondaryBg",ot(p.secondary.main,.62)),V(p.LinearProgress,"errorBg",ot(p.error.main,.62)),V(p.LinearProgress,"infoBg",ot(p.info.main,.62)),V(p.LinearProgress,"successBg",ot(p.success.main,.62)),V(p.LinearProgress,"warningBg",ot(p.warning.main,.62)),V(p.Skeleton,"bg",`rgba(${S("palette-text-primaryChannel")} / 0.11)`),V(p.Slider,"primaryTrack",ot(p.primary.main,.62)),V(p.Slider,"secondaryTrack",ot(p.secondary.main,.62)),V(p.Slider,"errorTrack",ot(p.error.main,.62)),V(p.Slider,"infoTrack",ot(p.info.main,.62)),V(p.Slider,"successTrack",ot(p.success.main,.62)),V(p.Slider,"warningTrack",ot(p.warning.main,.62));const b=Za(p.background.default,.8);V(p.SnackbarContent,"bg",b),V(p.SnackbarContent,"color",ti(()=>p.getContrastText(b))),V(p.SpeedDialAction,"fabHoverBg",Za(p.background.paper,.15)),V(p.StepConnector,"border",S("palette-grey-400")),V(p.StepContent,"border",S("palette-grey-400")),V(p.Switch,"defaultColor",S("palette-common-white")),V(p.Switch,"defaultDisabledColor",S("palette-grey-100")),V(p.Switch,"primaryDisabledColor",ot(p.primary.main,.62)),V(p.Switch,"secondaryDisabledColor",ot(p.secondary.main,.62)),V(p.Switch,"errorDisabledColor",ot(p.error.main,.62)),V(p.Switch,"infoDisabledColor",ot(p.info.main,.62)),V(p.Switch,"successDisabledColor",ot(p.success.main,.62)),V(p.Switch,"warningDisabledColor",ot(p.warning.main,.62)),V(p.TableCell,"border",ot(Ka(p.divider,1),.88)),V(p.Tooltip,"bg",Ka(p.grey[700],.92))}if(p.mode==="dark"){V(p.Alert,"errorColor",ot(p.error.light,.6)),V(p.Alert,"infoColor",ot(p.info.light,.6)),V(p.Alert,"successColor",ot(p.success.light,.6)),V(p.Alert,"warningColor",ot(p.warning.light,.6)),V(p.Alert,"errorFilledBg",S("palette-error-dark")),V(p.Alert,"infoFilledBg",S("palette-info-dark")),V(p.Alert,"successFilledBg",S("palette-success-dark")),V(p.Alert,"warningFilledBg",S("palette-warning-dark")),V(p.Alert,"errorFilledColor",ti(()=>p.getContrastText(p.error.dark))),V(p.Alert,"infoFilledColor",ti(()=>p.getContrastText(p.info.dark))),V(p.Alert,"successFilledColor",ti(()=>p.getContrastText(p.success.dark))),V(p.Alert,"warningFilledColor",ti(()=>p.getContrastText(p.warning.dark))),V(p.Alert,"errorStandardBg",rt(p.error.light,.9)),V(p.Alert,"infoStandardBg",rt(p.info.light,.9)),V(p.Alert,"successStandardBg",rt(p.success.light,.9)),V(p.Alert,"warningStandardBg",rt(p.warning.light,.9)),V(p.Alert,"errorIconColor",S("palette-error-main")),V(p.Alert,"infoIconColor",S("palette-info-main")),V(p.Alert,"successIconColor",S("palette-success-main")),V(p.Alert,"warningIconColor",S("palette-warning-main")),V(p.AppBar,"defaultBg",S("palette-grey-900")),V(p.AppBar,"darkBg",S("palette-background-paper")),V(p.AppBar,"darkColor",S("palette-text-primary")),V(p.Avatar,"defaultBg",S("palette-grey-600")),V(p.Button,"inheritContainedBg",S("palette-grey-800")),V(p.Button,"inheritContainedHoverBg",S("palette-grey-700")),V(p.Chip,"defaultBorder",S("palette-grey-700")),V(p.Chip,"defaultAvatarColor",S("palette-grey-300")),V(p.Chip,"defaultIconColor",S("palette-grey-300")),V(p.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),V(p.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),V(p.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),V(p.LinearProgress,"primaryBg",rt(p.primary.main,.5)),V(p.LinearProgress,"secondaryBg",rt(p.secondary.main,.5)),V(p.LinearProgress,"errorBg",rt(p.error.main,.5)),V(p.LinearProgress,"infoBg",rt(p.info.main,.5)),V(p.LinearProgress,"successBg",rt(p.success.main,.5)),V(p.LinearProgress,"warningBg",rt(p.warning.main,.5)),V(p.Skeleton,"bg",`rgba(${S("palette-text-primaryChannel")} / 0.13)`),V(p.Slider,"primaryTrack",rt(p.primary.main,.5)),V(p.Slider,"secondaryTrack",rt(p.secondary.main,.5)),V(p.Slider,"errorTrack",rt(p.error.main,.5)),V(p.Slider,"infoTrack",rt(p.info.main,.5)),V(p.Slider,"successTrack",rt(p.success.main,.5)),V(p.Slider,"warningTrack",rt(p.warning.main,.5));const b=Za(p.background.default,.98);V(p.SnackbarContent,"bg",b),V(p.SnackbarContent,"color",ti(()=>p.getContrastText(b))),V(p.SpeedDialAction,"fabHoverBg",Za(p.background.paper,.15)),V(p.StepConnector,"border",S("palette-grey-600")),V(p.StepContent,"border",S("palette-grey-600")),V(p.Switch,"defaultColor",S("palette-grey-300")),V(p.Switch,"defaultDisabledColor",S("palette-grey-600")),V(p.Switch,"primaryDisabledColor",rt(p.primary.main,.55)),V(p.Switch,"secondaryDisabledColor",rt(p.secondary.main,.55)),V(p.Switch,"errorDisabledColor",rt(p.error.main,.55)),V(p.Switch,"infoDisabledColor",rt(p.info.main,.55)),V(p.Switch,"successDisabledColor",rt(p.success.main,.55)),V(p.Switch,"warningDisabledColor",rt(p.warning.main,.55)),V(p.TableCell,"border",rt(Ka(p.divider,1),.68)),V(p.Tooltip,"bg",Ka(p.grey[700],.92))}mi(p.background,"default"),mi(p.background,"paper"),mi(p.common,"background"),mi(p.common,"onBackground"),mi(p,"divider"),Object.keys(p).forEach(b=>{const B=p[b];B&&typeof B=="object"&&(B.main&&V(p[b],"mainChannel",Is(Us(B.main))),B.light&&V(p[b],"lightChannel",Is(Us(B.light))),B.dark&&V(p[b],"darkChannel",Is(Us(B.dark))),B.contrastText&&V(p[b],"contrastTextChannel",Is(Us(B.contrastText))),b==="text"&&(mi(p[b],"primary"),mi(p[b],"secondary")),b==="action"&&(B.active&&mi(p[b],"active"),B.selected&&mi(p[b],"selected")))})}),g=e.reduce((L,p)=>En(L,p),g);const M={prefix:o,disableCssColorScheme:r,shouldSkipGeneratingVar:s,getSelector:C1(g)},{vars:C,generateThemeVars:A,generateStyleSheets:w}=n1(g,M);return g.vars=C,Object.entries(g.colorSchemes[g.defaultColorScheme]).forEach(([L,p])=>{g[L]=p}),g.generateThemeVars=A,g.generateStyleSheets=w,g.generateSpacing=function(){return mv(l.spacing,Vh(this))},g.getColorSchemeSelector=i1(a),g.spacing=g.generateSpacing(),g.shouldSkipGeneratingVar=s,g.unstable_sxConfig={...Yc,...l==null?void 0:l.unstable_sxConfig},g.unstable_sx=function(p){return Ea({sx:p,theme:this})},g.toRuntimeSource=b1,g}function Gm(t,e,n){t.colorSchemes&&n&&(t.colorSchemes[e]={...n!==!0&&n,palette:Kh({...n===!0?{}:n.palette,mode:e})})}function Zh(t={},...e){const{palette:n,cssVariables:i=!1,colorSchemes:r=n?void 0:{light:!0},defaultColorScheme:o=n==null?void 0:n.mode,...s}=t,a=o||"light",l=r==null?void 0:r[a],c={...r,...n?{[a]:{...typeof l!="boolean"&&l,palette:n}}:void 0};if(i===!1){if(!("colorSchemes"in t))return sd(t,...e);let f=n;"palette"in t||c[a]&&(c[a]!==!0?f=c[a].palette:a==="dark"&&(f={mode:"dark"}));const h=sd({...t,palette:f},...e);return h.defaultColorScheme=a,h.colorSchemes=c,h.palette.mode==="light"&&(h.colorSchemes.light={...c.light!==!0&&c.light,palette:h.palette},Gm(h,"dark",c.dark)),h.palette.mode==="dark"&&(h.colorSchemes.dark={...c.dark!==!0&&c.dark,palette:h.palette},Gm(h,"light",c.light)),h}return!n&&!("light"in c)&&a==="light"&&(c.light=!0),I1({...s,colorSchemes:c,defaultColorScheme:a,...typeof i!="boolean"&&i},...e)}function Wm(t){return String(parseFloat(t)).length===String(t).length}function U1(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Sr(t){return parseFloat(t)}function N1(t){return(e,n)=>{const i=U1(e);if(i===n)return e;let r=Sr(e);i!=="px"&&(i==="em"||i==="rem")&&(r=Sr(e)*Sr(t));let o=r;if(n!=="px")if(n==="em")o=r/Sr(t);else if(n==="rem")o=r/Sr(t);else return e;return parseFloat(o.toFixed(5))+n}}function F1({size:t,grid:e}){const n=t-t%e,i=n+e;return t-n<i-t?n:i}function O1({lineHeight:t,pixels:e,htmlFontSize:n}){return e/(t*n)}function k1({cssProperty:t,min:e,max:n,unit:i="rem",breakpoints:r=[600,900,1200],transform:o=null}){const s={[t]:`${e}${i}`},a=(n-e)/r[r.length-1];return r.forEach(l=>{let c=e+a*l;o!==null&&(c=o(c)),s[`@media (min-width:${l}px)`]={[t]:`${Math.round(c*1e4)/1e4}${i}`}}),s}function B1(t,e={}){const{breakpoints:n=["sm","md","lg"],disableAlign:i=!1,factor:r=2,variants:o=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]}=e,s={...t};s.typography={...s.typography};const a=s.typography,l=N1(a.htmlFontSize),c=n.map(f=>s.breakpoints.values[f]);return o.forEach(f=>{const h=a[f];if(!h)return;const d=parseFloat(l(h.fontSize,"rem"));if(d<=1)return;const m=d,y=1+(m-1)/r;let{lineHeight:x}=h;if(!Wm(x)&&!i)throw new Error(hr(6));Wm(x)||(x=parseFloat(l(x,"rem"))/parseFloat(d));let _=null;i||(_=u=>F1({size:u,grid:O1({pixels:4,lineHeight:x,htmlFontSize:a.htmlFontSize})})),a[f]={...h,...k1({cssProperty:"fontSize",min:y,max:m,unit:"rem",breakpoints:c,transform:_})}}),s}const z1=Zh();function $m({theme:t,...e}){const n=Hr in t?t[Hr]:void 0;return tt.jsx(Sv,{...e,themeId:n?Hr:void 0,theme:n||t})}const Qa={attribute:"data-mui-color-scheme",colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:H1,useColorScheme:h2,getInitColorSchemeScript:p2}=QE({themeId:Hr,theme:()=>Zh({cssVariables:!0}),colorSchemeStorageKey:Qa.colorSchemeStorageKey,modeStorageKey:Qa.modeStorageKey,defaultColorScheme:{light:Qa.defaultLightColorScheme,dark:Qa.defaultDarkColorScheme},resolveTheme:t=>{const e={...t,typography:Ev(t.palette,t.typography)};return e.unstable_sx=function(i){return Ea({sx:i,theme:this})},e}}),V1=H1;function G1({theme:t,...e}){return typeof t=="function"?tt.jsx($m,{theme:t,...e}):"colorSchemes"in(Hr in t?t[Hr]:t)?tt.jsx(V1,{theme:t,...e}):tt.jsx($m,{theme:t,...e})}function Av(t){return tt.jsx(LE,{...t,defaultTheme:z1,themeId:Hr})}function Cv(t){return function(n){return tt.jsx(Av,{styles:typeof t=="function"?i=>t({theme:i,...n}):t})}}function W1(t){return XE(t)}const ad=typeof Cv({})=="function",$1=(t,e)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...e&&!t.vars&&{colorScheme:t.palette.mode}}),X1=t=>({color:(t.vars||t).palette.text.primary,...t.typography.body1,backgroundColor:(t.vars||t).palette.background.default,"@media print":{backgroundColor:(t.vars||t).palette.common.white}}),Rv=(t,e=!1)=>{var o,s;const n={};e&&t.colorSchemes&&typeof t.getColorSchemeSelector=="function"&&Object.entries(t.colorSchemes).forEach(([a,l])=>{var f,h;const c=t.getColorSchemeSelector(a);c.startsWith("@")?n[c]={":root":{colorScheme:(f=l.palette)==null?void 0:f.mode}}:n[c.replace(/\s*&/,"")]={colorScheme:(h=l.palette)==null?void 0:h.mode}});let i={html:$1(t,e),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:{margin:0,...X1(t),"&::backdrop":{backgroundColor:(t.vars||t).palette.background.default}},...n};const r=(s=(o=t.components)==null?void 0:o.MuiCssBaseline)==null?void 0:s.styleOverrides;return r&&(i=[i,r]),i},Ol="mui-ecs",j1=t=>{const e=Rv(t,!1),n=Array.isArray(e)?e[0]:e;return!t.vars&&n&&(n.html[`:root:has(${Ol})`]={colorScheme:t.palette.mode}),t.colorSchemes&&Object.entries(t.colorSchemes).forEach(([i,r])=>{var s,a;const o=t.getColorSchemeSelector(i);o.startsWith("@")?n[o]={[`:root:not(:has(.${Ol}))`]:{colorScheme:(s=r.palette)==null?void 0:s.mode}}:n[o.replace(/\s*&/,"")]={[`&:not(:has(.${Ol}))`]:{colorScheme:(a=r.palette)==null?void 0:a.mode}}}),e},Y1=Cv(ad?({theme:t,enableColorScheme:e})=>Rv(t,e):({theme:t})=>j1(t));function q1(t){const e=W1({props:t,name:"MuiCssBaseline"}),{children:n,enableColorScheme:i=!1}=e;return tt.jsxs(Ue.Fragment,{children:[ad&&tt.jsx(Y1,{enableColorScheme:i}),!ad&&!i&&tt.jsx("span",{className:Ol,style:{display:"none"}}),n]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qh="168",K1=0,Xm=1,Z1=2,bv=1,Q1=2,Si=3,mr=0,fn=1,Ti=2,cr=0,$o=1,jm=2,Ym=3,qm=4,J1=5,Dr=100,eT=101,tT=102,nT=103,iT=104,rT=200,oT=201,sT=202,aT=203,ld=204,cd=205,lT=206,cT=207,uT=208,fT=209,dT=210,hT=211,pT=212,mT=213,gT=214,_T=0,vT=1,yT=2,gc=3,xT=4,ST=5,MT=6,ET=7,Pv=0,TT=1,wT=2,ur=0,AT=1,CT=2,RT=3,bT=4,PT=5,LT=6,DT=7,Lv=300,ns=301,is=302,ud=303,fd=304,Kc=306,dd=1e3,Or=1001,hd=1002,Nn=1003,IT=1004,Ja=1005,Yn=1006,Nu=1007,kr=1008,Ni=1009,Dv=1010,Iv=1011,pa=1012,Jh=1013,Yr=1014,Ci=1015,Ta=1016,ep=1017,tp=1018,rs=1020,Uv=35902,Nv=1021,Fv=1022,qn=1023,Ov=1024,kv=1025,Xo=1026,os=1027,Bv=1028,np=1029,zv=1030,ip=1031,rp=1033,kl=33776,Bl=33777,zl=33778,Hl=33779,pd=35840,md=35841,gd=35842,_d=35843,vd=36196,yd=37492,xd=37496,Sd=37808,Md=37809,Ed=37810,Td=37811,wd=37812,Ad=37813,Cd=37814,Rd=37815,bd=37816,Pd=37817,Ld=37818,Dd=37819,Id=37820,Ud=37821,Vl=36492,Nd=36494,Fd=36495,Hv=36283,Od=36284,kd=36285,Bd=36286,UT=3200,NT=3201,FT=0,OT=1,Qi="",ii="srgb",yr="srgb-linear",op="display-p3",Zc="display-p3-linear",_c="linear",ut="srgb",vc="rec709",yc="p3",so=7680,Km=519,kT=512,BT=513,zT=514,Vv=515,HT=516,VT=517,GT=518,WT=519,Zm=35044,Qm="300 es",Ri=2e3,xc=2001;class fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fu=Math.PI/180,zd=180/Math.PI;function wa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function sn(t,e,n){return Math.max(e,Math.min(n,t))}function $T(t,e){return(t%e+e)%e}function Ou(t,e,n){return(1-n)*t+n*e}function Es(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,o,s,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c)}set(e,n,i,r,o,s,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=o,f[5]=l,f[6]=i,f[7]=s,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],m=i[5],y=i[8],x=r[0],_=r[3],u=r[6],v=r[1],g=r[4],M=r[7],C=r[2],A=r[5],w=r[8];return o[0]=s*x+a*v+l*C,o[3]=s*_+a*g+l*A,o[6]=s*u+a*M+l*w,o[1]=c*x+f*v+h*C,o[4]=c*_+f*g+h*A,o[7]=c*u+f*M+h*w,o[2]=d*x+m*v+y*C,o[5]=d*_+m*g+y*A,o[8]=d*u+m*M+y*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*s*f-n*a*c-i*o*f+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*s-a*c,d=a*l-f*o,m=c*o-s*l,y=n*h+i*d+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return e[0]=h*x,e[1]=(r*c-f*i)*x,e[2]=(a*i-r*s)*x,e[3]=d*x,e[4]=(f*n-r*l)*x,e[5]=(r*o-a*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(s*n-i*o)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ku.makeScale(e,n)),this}rotate(e){return this.premultiply(ku.makeRotation(-e)),this}translate(e,n){return this.premultiply(ku.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ku=new Fe;function Gv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Sc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function XT(){const t=Sc("canvas");return t.style.display="block",t}const Jm={};function Xs(t){t in Jm||(Jm[t]=!0,console.warn(t))}function jT(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const eg=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tg=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ts={[yr]:{transfer:_c,primaries:vc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ii]:{transfer:ut,primaries:vc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Zc]:{transfer:_c,primaries:yc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(tg),fromReference:t=>t.applyMatrix3(eg)},[op]:{transfer:ut,primaries:yc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(tg),fromReference:t=>t.applyMatrix3(eg).convertLinearToSRGB()}},YT=new Set([yr,Zc]),Je={enabled:!0,_workingColorSpace:yr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!YT.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ts[e].toReference,r=Ts[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ts[t].primaries},getTransfer:function(t){return t===Qi?_c:Ts[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ts[e].luminanceCoefficients)}};function jo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Bu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ao;class qT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ao===void 0&&(ao=Sc("canvas")),ao.width=e.width,ao.height=e.height;const i=ao.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ao}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Sc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=jo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(jo(n[i]/255)*255):n[i]=jo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KT=0;class Wv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KT++}),this.uuid=wa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(zu(r[s].image)):o.push(zu(r[s]))}else o=zu(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function zu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?qT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZT=0;class dn extends fs{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=Or,r=Or,o=Yn,s=kr,a=qn,l=Ni,c=dn.DEFAULT_ANISOTROPY,f=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=wa(),this.name="",this.source=new Wv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dd:e.x=e.x-Math.floor(e.x);break;case Or:e.x=e.x<0?0:1;break;case hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dd:e.y=e.y-Math.floor(e.y);break;case Or:e.y=e.y<0?0:1;break;case hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Lv;dn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,n=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],m=l[5],y=l[9],x=l[2],_=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(y-_)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(y+_)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(m+1)/2,C=(u+1)/2,A=(f+d)/4,w=(h+x)/4,L=(y+_)/4;return g>M&&g>C?g<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(g),r=A/i,o=w/i):M>C?M<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(M),i=A/r,o=L/r):C<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(C),i=w/o,r=L/o),this.set(i,r,o,n),this}let v=Math.sqrt((_-y)*(_-y)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(v)<.001&&(v=1),this.x=(_-y)/v,this.y=(h-x)/v,this.z=(d-f)/v,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QT extends fs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new dn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Wv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends QT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class $v extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JT extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Aa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=o[s+0],m=o[s+1],y=o[s+2],x=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=y,e[n+3]=x;return}if(h!==x||l!==d||c!==m||f!==y){let _=1-a;const u=l*d+c*m+f*y+h*x,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const C=Math.sqrt(g),A=Math.atan2(C,u*v);_=Math.sin(_*A)/C,a=Math.sin(a*A)/C}const M=a*v;if(l=l*_+d*M,c=c*_+m*M,f=f*_+y*M,h=h*_+x*M,_===1-a){const C=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=C,c*=C,f*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=o[s],d=o[s+1],m=o[s+2],y=o[s+3];return e[n]=a*y+f*h+l*m-c*d,e[n+1]=l*y+f*d+c*h-a*m,e[n+2]=c*y+f*m+a*d-l*h,e[n+3]=f*y-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(o/2),d=l(i/2),m=l(r/2),y=l(o/2);switch(s){case"XYZ":this._x=d*f*h+c*m*y,this._y=c*m*h-d*f*y,this._z=c*f*y+d*m*h,this._w=c*f*h-d*m*y;break;case"YXZ":this._x=d*f*h+c*m*y,this._y=c*m*h-d*f*y,this._z=c*f*y-d*m*h,this._w=c*f*h+d*m*y;break;case"ZXY":this._x=d*f*h-c*m*y,this._y=c*m*h+d*f*y,this._z=c*f*y+d*m*h,this._w=c*f*h-d*m*y;break;case"ZYX":this._x=d*f*h-c*m*y,this._y=c*m*h+d*f*y,this._z=c*f*y-d*m*h,this._w=c*f*h+d*m*y;break;case"YZX":this._x=d*f*h+c*m*y,this._y=c*m*h+d*f*y,this._z=c*f*y-d*m*h,this._w=c*f*h-d*m*y;break;case"XZY":this._x=d*f*h-c*m*y,this._y=c*m*h-d*f*y,this._z=c*f*y+d*m*h,this._w=c*f*h+d*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(o-c)*m,this._z=(s-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(o-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(s-r)/m,this._x=(o+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+s*a+r*c-o*l,this._y=r*f+s*l+o*a-i*c,this._z=o*f+s*c+i*l-r*a,this._w=s*f-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=s*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ng.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ng.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),f=2*(a*n-o*r),h=2*(o*i-s*n);return this.x=n+l*c+s*h-a*f,this.y=i+l*f+a*c-o*h,this.z=r+l*h+o*f-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hu.copy(this).projectOnVector(e),this.sub(Hu)}reflect(e){return this.sub(Hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hu=new H,ng=new Aa;class Ca{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Vn):Vn.fromBufferAttribute(o,s),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),el.copy(i.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),tl.subVectors(this.max,ws),lo.subVectors(e.a,ws),co.subVectors(e.b,ws),uo.subVectors(e.c,ws),Hi.subVectors(co,lo),Vi.subVectors(uo,co),Mr.subVectors(lo,uo);let n=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-Mr.z,Mr.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,Mr.z,0,-Mr.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-Mr.y,Mr.x,0];return!Vu(n,lo,co,uo,tl)||(n=[1,0,0,0,1,0,0,0,1],!Vu(n,lo,co,uo,tl))?!1:(nl.crossVectors(Hi,Vi),n=[nl.x,nl.y,nl.z],Vu(n,lo,co,uo,tl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new H,new H,new H,new H,new H,new H,new H,new H],Vn=new H,el=new Ca,lo=new H,co=new H,uo=new H,Hi=new H,Vi=new H,Mr=new H,ws=new H,tl=new H,nl=new H,Er=new H;function Vu(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Er.fromArray(t,o);const a=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=e.dot(Er),c=n.dot(Er),f=i.dot(Er);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const ew=new Ca,As=new H,Gu=new H;class sp{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ew.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const n=As.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(As,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(Gu)),this.expandByPoint(As.copy(e.center).sub(Gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new H,Wu=new H,il=new H,Gi=new H,$u=new H,rl=new H,Xu=new H;class tw{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Wu.copy(e).add(n).multiplyScalar(.5),il.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(Wu);const o=e.distanceTo(n)*.5,s=-this.direction.dot(il),a=Gi.dot(this.direction),l=-Gi.dot(il),c=Gi.lengthSq(),f=Math.abs(1-s*s);let h,d,m,y;if(f>0)if(h=s*l-a,d=s*a-l,y=o*f,h>=0)if(d>=-y)if(d<=y){const x=1/f;h*=x,d*=x,m=h*(h+s*d+2*a)+d*(s*h+d+2*l)+c}else d=o,h=Math.max(0,-(s*d+a)),m=-h*h+d*(d+2*l)+c;else d=-o,h=Math.max(0,-(s*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-y?(h=Math.max(0,-(-s*o+a)),d=h>0?-o:Math.min(Math.max(-o,-l),o),m=-h*h+d*(d+2*l)+c):d<=y?(h=0,d=Math.min(Math.max(-o,-l),o),m=d*(d+2*l)+c):(h=Math.max(0,-(s*o+a)),d=h>0?o:Math.min(Math.max(-o,-l),o),m=-h*h+d*(d+2*l)+c);else d=s>0?-o:o,h=Math.max(0,-(s*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Wu).addScaledVector(il,d),m}intersectSphere(e,n){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(o=(e.min.y-d.y)*f,s=(e.max.y-d.y)*f):(o=(e.max.y-d.y)*f,s=(e.min.y-d.y)*f),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,n,i,r,o){$u.subVectors(n,e),rl.subVectors(i,e),Xu.crossVectors($u,rl);let s=this.direction.dot(Xu),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Gi.subVectors(this.origin,e);const l=a*this.direction.dot(rl.crossVectors(Gi,rl));if(l<0)return null;const c=a*this.direction.dot($u.cross(Gi));if(c<0||l+c>s)return null;const f=-a*Gi.dot(Xu);return f<0?null:this.at(f/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,n,i,r,o,s,a,l,c,f,h,d,m,y,x,_){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c,f,h,d,m,y,x,_)}set(e,n,i,r,o,s,a,l,c,f,h,d,m,y,x,_){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=o,u[5]=s,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=m,u[7]=y,u[11]=x,u[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/fo.setFromMatrixColumn(e,0).length(),o=1/fo.setFromMatrixColumn(e,1).length(),s=1/fo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const d=s*f,m=s*h,y=a*f,x=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=m+y*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=y+m*c,n[10]=s*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,y=c*f,x=c*h;n[0]=d+x*a,n[4]=y*a-m,n[8]=s*c,n[1]=s*h,n[5]=s*f,n[9]=-a,n[2]=m*a-y,n[6]=x+d*a,n[10]=s*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,y=c*f,x=c*h;n[0]=d-x*a,n[4]=-s*h,n[8]=y+m*a,n[1]=m+y*a,n[5]=s*f,n[9]=x-d*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const d=s*f,m=s*h,y=a*f,x=a*h;n[0]=l*f,n[4]=y*c-m,n[8]=d*c+x,n[1]=l*h,n[5]=x*c+d,n[9]=m*c-y,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const d=s*l,m=s*c,y=a*l,x=a*c;n[0]=l*f,n[4]=x-d*h,n[8]=y*h+m,n[1]=h,n[5]=s*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*h+y,n[10]=d-x*h}else if(e.order==="XZY"){const d=s*l,m=s*c,y=a*l,x=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+x,n[5]=s*f,n[9]=m*h-y,n[2]=y*h-m,n[6]=a*f,n[10]=x*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nw,e,iw)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Wi.crossVectors(i,gn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Wi.crossVectors(i,gn)),Wi.normalize(),ol.crossVectors(gn,Wi),r[0]=Wi.x,r[4]=ol.x,r[8]=gn.x,r[1]=Wi.y,r[5]=ol.y,r[9]=gn.y,r[2]=Wi.z,r[6]=ol.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],m=i[13],y=i[2],x=i[6],_=i[10],u=i[14],v=i[3],g=i[7],M=i[11],C=i[15],A=r[0],w=r[4],L=r[8],p=r[12],S=r[1],b=r[5],B=r[9],O=r[13],X=r[2],j=r[6],G=r[10],q=r[14],D=r[3],$=r[7],Q=r[11],oe=r[15];return o[0]=s*A+a*S+l*X+c*D,o[4]=s*w+a*b+l*j+c*$,o[8]=s*L+a*B+l*G+c*Q,o[12]=s*p+a*O+l*q+c*oe,o[1]=f*A+h*S+d*X+m*D,o[5]=f*w+h*b+d*j+m*$,o[9]=f*L+h*B+d*G+m*Q,o[13]=f*p+h*O+d*q+m*oe,o[2]=y*A+x*S+_*X+u*D,o[6]=y*w+x*b+_*j+u*$,o[10]=y*L+x*B+_*G+u*Q,o[14]=y*p+x*O+_*q+u*oe,o[3]=v*A+g*S+M*X+C*D,o[7]=v*w+g*b+M*j+C*$,o[11]=v*L+g*B+M*G+C*Q,o[15]=v*p+g*O+M*q+C*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],m=e[14],y=e[3],x=e[7],_=e[11],u=e[15];return y*(+o*l*h-r*c*h-o*a*d+i*c*d+r*a*m-i*l*m)+x*(+n*l*m-n*c*d+o*s*d-r*s*m+r*c*f-o*l*f)+_*(+n*c*h-n*a*m-o*s*h+i*s*m+o*a*f-i*c*f)+u*(-r*a*f-n*l*h+n*a*d+r*s*h-i*s*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],m=e[11],y=e[12],x=e[13],_=e[14],u=e[15],v=h*_*c-x*d*c+x*l*m-a*_*m-h*l*u+a*d*u,g=y*d*c-f*_*c-y*l*m+s*_*m+f*l*u-s*d*u,M=f*x*c-y*h*c+y*a*m-s*x*m-f*a*u+s*h*u,C=y*h*l-f*x*l-y*a*d+s*x*d+f*a*_-s*h*_,A=n*v+i*g+r*M+o*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=v*w,e[1]=(x*d*o-h*_*o-x*r*m+i*_*m+h*r*u-i*d*u)*w,e[2]=(a*_*o-x*l*o+x*r*c-i*_*c-a*r*u+i*l*u)*w,e[3]=(h*l*o-a*d*o-h*r*c+i*d*c+a*r*m-i*l*m)*w,e[4]=g*w,e[5]=(f*_*o-y*d*o+y*r*m-n*_*m-f*r*u+n*d*u)*w,e[6]=(y*l*o-s*_*o-y*r*c+n*_*c+s*r*u-n*l*u)*w,e[7]=(s*d*o-f*l*o+f*r*c-n*d*c-s*r*m+n*l*m)*w,e[8]=M*w,e[9]=(y*h*o-f*x*o-y*i*m+n*x*m+f*i*u-n*h*u)*w,e[10]=(s*x*o-y*a*o+y*i*c-n*x*c-s*i*u+n*a*u)*w,e[11]=(f*a*o-s*h*o-f*i*c+n*h*c+s*i*m-n*a*m)*w,e[12]=C*w,e[13]=(f*x*r-y*h*r+y*i*d-n*x*d-f*i*_+n*h*_)*w,e[14]=(y*a*r-s*x*r-y*i*l+n*x*l+s*i*_-n*a*_)*w,e[15]=(s*h*r-f*a*r+f*i*l-n*h*l-s*i*d+n*a*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,f=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*s,0,c*l-r*a,f*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,f=s+s,h=a+a,d=o*c,m=o*f,y=o*h,x=s*f,_=s*h,u=a*h,v=l*c,g=l*f,M=l*h,C=i.x,A=i.y,w=i.z;return r[0]=(1-(x+u))*C,r[1]=(m+M)*C,r[2]=(y-g)*C,r[3]=0,r[4]=(m-M)*A,r[5]=(1-(d+u))*A,r[6]=(_+v)*A,r[7]=0,r[8]=(y+g)*w,r[9]=(_-v)*w,r[10]=(1-(d+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=fo.set(r[0],r[1],r[2]).length();const s=fo.set(r[4],r[5],r[6]).length(),a=fo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const c=1/o,f=1/s,h=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=f,Gn.elements[5]*=f,Gn.elements[6]*=f,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,n.setFromRotationMatrix(Gn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Ri){const l=this.elements,c=2*o/(n-e),f=2*o/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let m,y;if(a===Ri)m=-(s+o)/(s-o),y=-2*s*o/(s-o);else if(a===xc)m=-s/(s-o),y=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Ri){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(s-o),d=(n+e)*c,m=(i+r)*f;let y,x;if(a===Ri)y=(s+o)*h,x=-2*h;else if(a===xc)y=o*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const fo=new H,Gn=new Dt,nw=new H(0,0,0),iw=new H(1,1,1),Wi=new H,ol=new H,gn=new H,ig=new Dt,rg=new Aa;class Fi{constructor(e=0,n=0,i=0,r=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-sn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ig.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ig,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return rg.setFromEuler(this),this.setFromQuaternion(rg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class Xv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rw=0;const og=new H,ho=new Aa,vi=new Dt,sl=new H,Cs=new H,ow=new H,sw=new Aa,sg=new H(1,0,0),ag=new H(0,1,0),lg=new H(0,0,1),cg={type:"added"},aw={type:"removed"},po={type:"childadded",child:null},ju={type:"childremoved",child:null};class Tn extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rw++}),this.uuid=wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new H,n=new Fi,i=new Aa,r=new H(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Fe}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ho.setFromAxisAngle(e,n),this.quaternion.multiply(ho),this}rotateOnWorldAxis(e,n){return ho.setFromAxisAngle(e,n),this.quaternion.premultiply(ho),this}rotateX(e){return this.rotateOnAxis(sg,e)}rotateY(e){return this.rotateOnAxis(ag,e)}rotateZ(e){return this.rotateOnAxis(lg,e)}translateOnAxis(e,n){return og.copy(e).applyQuaternion(this.quaternion),this.position.add(og.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(sg,e)}translateY(e){return this.translateOnAxis(ag,e)}translateZ(e){return this.translateOnAxis(lg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?sl.copy(e):sl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Cs,sl,this.up):vi.lookAt(sl,Cs,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),ho.setFromRotationMatrix(vi),this.quaternion.premultiply(ho.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cg),po.child=e,this.dispatchEvent(po),po.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(aw),ju.child=e,this.dispatchEvent(ju),ju.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cg),po.child=e,this.dispatchEvent(po),po.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,ow),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,sw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),f=s(e.images),h=s(e.shapes),d=s(e.skeletons),m=s(e.animations),y=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function s(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tn.DEFAULT_UP=new H(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new H,yi=new H,Yu=new H,xi=new H,mo=new H,go=new H,ug=new H,qu=new H,Ku=new H,Zu=new H;class li{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Wn.subVectors(r,n),yi.subVectors(i,n),Yu.subVectors(e,n);const s=Wn.dot(Wn),a=Wn.dot(yi),l=Wn.dot(Yu),c=yi.dot(yi),f=yi.dot(Yu),h=s*c-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,m=(c*l-a*f)*d,y=(s*f-a*l)*d;return o.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,xi.x),l.addScaledVector(s,xi.y),l.addScaledVector(a,xi.z),l)}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),yi.subVectors(e,n),Wn.cross(yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Wn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return li.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;mo.subVectors(r,i),go.subVectors(o,i),qu.subVectors(e,i);const l=mo.dot(qu),c=go.dot(qu);if(l<=0&&c<=0)return n.copy(i);Ku.subVectors(e,r);const f=mo.dot(Ku),h=go.dot(Ku);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return s=l/(l-f),n.copy(i).addScaledVector(mo,s);Zu.subVectors(e,o);const m=mo.dot(Zu),y=go.dot(Zu);if(y>=0&&m<=y)return n.copy(o);const x=m*c-l*y;if(x<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(go,a);const _=f*y-m*h;if(_<=0&&h-f>=0&&m-y>=0)return ug.subVectors(o,r),a=(h-f)/(h-f+(m-y)),n.copy(r).addScaledVector(ug,a);const u=1/(_+x+d);return s=x*u,a=d*u,n.copy(i).addScaledVector(mo,s).addScaledVector(go,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},al={h:0,s:0,l:0};function Qu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=$T(e,1),n=sn(n,0,1),i=sn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Qu(s,o,e+1/3),this.g=Qu(s,o,e),this.b=Qu(s,o,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=ii){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ii){const i=jv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jo(e.r),this.g=jo(e.g),this.b=jo(e.b),this}copyLinearToSRGB(e){return this.r=Bu(e.r),this.g=Bu(e.g),this.b=Bu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Je.fromWorkingColorSpace(Yt.copy(this),e),Math.round(sn(Yt.r*255,0,255))*65536+Math.round(sn(Yt.g*255,0,255))*256+Math.round(sn(Yt.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,o=Yt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const f=(a+s)/2;if(a===s)l=0,c=0;else{const h=s-a;switch(c=f<=.5?h/(s+a):h/(2-s-a),s){case i:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-i)/h+2;break;case o:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=ii){Je.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==ii?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+n,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL($i),e.getHSL(al);const i=Ou($i.h,al.h,n),r=Ou($i.s,al.s,n),o=Ou($i.l,al.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new it;it.NAMES=jv;let lw=0;class Qc extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lw++}),this.uuid=wa(),this.name="",this.type="Material",this.blending=$o,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ld,this.blendDst=cd,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=gc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Km,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=so,this.stencilZFail=so,this.stencilZPass=so,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$o&&(i.blending=this.blending),this.side!==mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ld&&(i.blendSrc=this.blendSrc),this.blendDst!==cd&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Km&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==so&&(i.stencilFail=this.stencilFail),this.stencilZFail!==so&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==so&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yv extends Qc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=Pv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new H,ll=new et;class hi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Zm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Xs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ll.fromBufferAttribute(this,n),ll.applyMatrix3(e),this.setXY(n,ll.x,ll.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Es(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Es(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Es(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Es(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Es(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array),o=rn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zm&&(e.usage=this.usage),e}}class qv extends hi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Kv extends hi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Vr extends hi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let cw=0;const bn=new Dt,Ju=new Tn,_o=new H,_n=new Ca,Rs=new Ca,Nt=new H;class Qr extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cw++}),this.uuid=wa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gv(e)?Kv:qv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Fe().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return Ju.lookAt(e),Ju.updateMatrix(),this.applyMatrix4(Ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_o).negate(),this.translate(_o.x,_o.y,_o.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Vr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ca);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];_n.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(_n.min,Rs.min),_n.expandByPoint(Nt),Nt.addVectors(_n.max,Rs.max),_n.expandByPoint(Nt)):(_n.expandByPoint(Rs.min),_n.expandByPoint(Rs.max))}_n.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Nt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Nt.fromBufferAttribute(a,c),l&&(_o.fromBufferAttribute(e,c),Nt.add(_o)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new H,l[L]=new H;const c=new H,f=new H,h=new H,d=new et,m=new et,y=new et,x=new H,_=new H;function u(L,p,S){c.fromBufferAttribute(i,L),f.fromBufferAttribute(i,p),h.fromBufferAttribute(i,S),d.fromBufferAttribute(o,L),m.fromBufferAttribute(o,p),y.fromBufferAttribute(o,S),f.sub(c),h.sub(c),m.sub(d),y.sub(d);const b=1/(m.x*y.y-y.x*m.y);isFinite(b)&&(x.copy(f).multiplyScalar(y.y).addScaledVector(h,-m.y).multiplyScalar(b),_.copy(h).multiplyScalar(m.x).addScaledVector(f,-y.x).multiplyScalar(b),a[L].add(x),a[p].add(x),a[S].add(x),l[L].add(_),l[p].add(_),l[S].add(_))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,p=v.length;L<p;++L){const S=v[L],b=S.start,B=S.count;for(let O=b,X=b+B;O<X;O+=3)u(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const g=new H,M=new H,C=new H,A=new H;function w(L){C.fromBufferAttribute(r,L),A.copy(C);const p=a[L];g.copy(p),g.sub(C.multiplyScalar(C.dot(p))).normalize(),M.crossVectors(A,p);const b=M.dot(l[L])<0?-1:1;s.setXYZW(L,g.x,g.y,g.z,b)}for(let L=0,p=v.length;L<p;++L){const S=v[L],b=S.start,B=S.count;for(let O=b,X=b+B;O<X;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new H,o=new H,s=new H,a=new H,l=new H,c=new H,f=new H,h=new H;if(e)for(let d=0,m=e.count;d<m;d+=3){const y=e.getX(d+0),x=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(n,y),o.fromBufferAttribute(n,x),s.fromBufferAttribute(n,_),f.subVectors(s,o),h.subVectors(r,o),f.cross(h),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,_),a.add(f),l.add(f),c.add(f),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),f.subVectors(s,o),h.subVectors(r,o),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let m=0,y=0;for(let x=0,_=l.length;x<_;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*f;for(let u=0;u<f;u++)d[y++]=c[m++]}return new hi(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const o=e.morphAttributes;for(const c in o){const f=[],h=o[c];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,f=s.length;c<f;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fg=new Dt,Tr=new tw,cl=new sp,dg=new H,vo=new H,yo=new H,xo=new H,ef=new H,ul=new H,fl=new et,dl=new et,hl=new et,hg=new H,pg=new H,mg=new H,pl=new H,ml=new H;class ci extends Tn{constructor(e=new Qr,n=new Yv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){ul.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const f=a[l],h=o[l];f!==0&&(ef.fromBufferAttribute(h,e),s?ul.addScaledVector(ef,f):ul.addScaledVector(ef.sub(n),f))}n.add(ul)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(o),Tr.copy(e.ray).recast(e.near),!(cl.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(cl,dg)===null||Tr.origin.distanceToSquared(dg)>(e.far-e.near)**2))&&(fg.copy(o).invert(),Tr.copy(e.ray).applyMatrix4(fg),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Tr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,f=o.attributes.uv1,h=o.attributes.normal,d=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let y=0,x=d.length;y<x;y++){const _=d[y],u=s[_.materialIndex],v=Math.max(_.start,m.start),g=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let M=v,C=g;M<C;M+=3){const A=a.getX(M),w=a.getX(M+1),L=a.getX(M+2);r=gl(this,u,e,i,c,f,h,A,w,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let _=y,u=x;_<u;_+=3){const v=a.getX(_),g=a.getX(_+1),M=a.getX(_+2);r=gl(this,s,e,i,c,f,h,v,g,M),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let y=0,x=d.length;y<x;y++){const _=d[y],u=s[_.materialIndex],v=Math.max(_.start,m.start),g=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let M=v,C=g;M<C;M+=3){const A=M,w=M+1,L=M+2;r=gl(this,u,e,i,c,f,h,A,w,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,n.push(r))}}else{const y=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let _=y,u=x;_<u;_+=3){const v=_,g=_+1,M=_+2;r=gl(this,s,e,i,c,f,h,v,g,M),r&&(r.faceIndex=Math.floor(_/3),n.push(r))}}}}function uw(t,e,n,i,r,o,s,a){let l;if(e.side===fn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===mr,a),l===null)return null;ml.copy(a),ml.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ml);return c<n.near||c>n.far?null:{distance:c,point:ml.clone(),object:t}}function gl(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,vo),t.getVertexPosition(l,yo),t.getVertexPosition(c,xo);const f=uw(t,e,n,i,vo,yo,xo,pl);if(f){r&&(fl.fromBufferAttribute(r,a),dl.fromBufferAttribute(r,l),hl.fromBufferAttribute(r,c),f.uv=li.getInterpolation(pl,vo,yo,xo,fl,dl,hl,new et)),o&&(fl.fromBufferAttribute(o,a),dl.fromBufferAttribute(o,l),hl.fromBufferAttribute(o,c),f.uv1=li.getInterpolation(pl,vo,yo,xo,fl,dl,hl,new et)),s&&(hg.fromBufferAttribute(s,a),pg.fromBufferAttribute(s,l),mg.fromBufferAttribute(s,c),f.normal=li.getInterpolation(pl,vo,yo,xo,hg,pg,mg,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new H,materialIndex:0};li.getNormal(vo,yo,xo,h.normal),f.face=h}return f}class Ra extends Qr{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],f=[],h=[];let d=0,m=0;y("z","y","x",-1,-1,i,n,e,s,o,0),y("z","y","x",1,-1,i,n,-e,s,o,1),y("x","z","y",1,1,e,i,n,r,s,2),y("x","z","y",1,-1,e,i,-n,r,s,3),y("x","y","z",1,-1,e,n,i,r,o,4),y("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Vr(c,3)),this.setAttribute("normal",new Vr(f,3)),this.setAttribute("uv",new Vr(h,2));function y(x,_,u,v,g,M,C,A,w,L,p){const S=M/w,b=C/L,B=M/2,O=C/2,X=A/2,j=w+1,G=L+1;let q=0,D=0;const $=new H;for(let Q=0;Q<G;Q++){const oe=Q*b-O;for(let Se=0;Se<j;Se++){const ze=Se*S-B;$[x]=ze*v,$[_]=oe*g,$[u]=X,c.push($.x,$.y,$.z),$[x]=0,$[_]=0,$[u]=A>0?1:-1,f.push($.x,$.y,$.z),h.push(Se/w),h.push(1-Q/L),q+=1}}for(let Q=0;Q<L;Q++)for(let oe=0;oe<w;oe++){const Se=d+oe+j*Q,ze=d+oe+j*(Q+1),W=d+(oe+1)+j*(Q+1),ie=d+(oe+1)+j*Q;l.push(Se,ze,ie),l.push(ze,W,ie),D+=6}a.addGroup(m,D,p),m+=D,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=ss(t[n]);for(const r in i)e[r]=i[r]}return e}function fw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Zv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const dw={clone:ss,merge:Qt};var hw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends Qc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hw,this.fragmentShader=pw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=fw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Qv extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new H,gg=new et,_g=new et;class In extends Qv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zd*2*Math.atan(Math.tan(Fu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,n){return this.getViewBounds(e,gg,_g),n.subVectors(_g,gg)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const So=-90,Mo=1;class mw extends Tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(So,Mo,e,n);r.layers=this.layers,this.add(r);const o=new In(So,Mo,e,n);o.layers=this.layers,this.add(o);const s=new In(So,Mo,e,n);s.layers=this.layers,this.add(s);const a=new In(So,Mo,e,n);a.layers=this.layers,this.add(a);const l=new In(So,Mo,e,n);l.layers=this.layers,this.add(l);const c=new In(So,Mo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Jv extends dn{constructor(e,n,i,r,o,s,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:ns,super(e,n,i,r,o,s,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gw extends qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Jv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Yn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ra(5,5,5),o=new Oi({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:cr});o.uniforms.tEquirect.value=n;const s=new ci(r,o),a=n.minFilter;return n.minFilter===kr&&(n.minFilter=Yn),new mw(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const tf=new H,_w=new H,vw=new Fe;class Pr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=tf.subVectors(i,n).cross(_w.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(tf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||vw.getNormalMatrix(e),r=this.coplanarPoint(tf).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wr=new sp,_l=new H;class ey{constructor(e=new Pr,n=new Pr,i=new Pr,r=new Pr,o=new Pr,s=new Pr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ri){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],m=r[8],y=r[9],x=r[10],_=r[11],u=r[12],v=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-o,d-c,_-m,M-u).normalize(),i[1].setComponents(l+o,d+c,_+m,M+u).normalize(),i[2].setComponents(l+s,d+f,_+y,M+v).normalize(),i[3].setComponents(l-s,d-f,_-y,M-v).normalize(),i[4].setComponents(l-a,d-h,_-x,M-g).normalize(),n===Ri)i[5].setComponents(l+a,d+h,_+x,M+g).normalize();else if(n===xc)i[5].setComponents(a,h,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){return wr.center.set(0,0,0),wr.radius=.7071067811865476,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(_l.x=r.normal.x>0?e.max.x:e.min.x,_l.y=r.normal.y>0?e.max.y:e.min.y,_l.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_l)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ty(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function yw(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,a),h.count===-1&&d.length===0&&t.bufferSubData(c,0,f),d.length!==0){for(let m=0,y=d.length;m<y;m++){const x=d[m];t.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}class ba extends Qr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,m=[],y=[],x=[],_=[];for(let u=0;u<f;u++){const v=u*d-s;for(let g=0;g<c;g++){const M=g*h-o;y.push(M,-v,0),x.push(0,0,1),_.push(g/a),_.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const g=v+c*u,M=v+c*(u+1),C=v+1+c*(u+1),A=v+1+c*u;m.push(g,M,A),m.push(M,C,A)}this.setIndex(m),this.setAttribute("position",new Vr(y,3)),this.setAttribute("normal",new Vr(x,3)),this.setAttribute("uv",new Vr(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.widthSegments,e.heightSegments)}}var xw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ew=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ww=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Aw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Iw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Uw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ow=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Gw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ww=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$w=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_A=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,SA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,FA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$A=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_C=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,RC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,UC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$C=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,YC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ZC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:xw,alphahash_pars_fragment:Sw,alphamap_fragment:Mw,alphamap_pars_fragment:Ew,alphatest_fragment:Tw,alphatest_pars_fragment:ww,aomap_fragment:Aw,aomap_pars_fragment:Cw,batching_pars_vertex:Rw,batching_vertex:bw,begin_vertex:Pw,beginnormal_vertex:Lw,bsdfs:Dw,iridescence_fragment:Iw,bumpmap_pars_fragment:Uw,clipping_planes_fragment:Nw,clipping_planes_pars_fragment:Fw,clipping_planes_pars_vertex:Ow,clipping_planes_vertex:kw,color_fragment:Bw,color_pars_fragment:zw,color_pars_vertex:Hw,color_vertex:Vw,common:Gw,cube_uv_reflection_fragment:Ww,defaultnormal_vertex:$w,displacementmap_pars_vertex:Xw,displacementmap_vertex:jw,emissivemap_fragment:Yw,emissivemap_pars_fragment:qw,colorspace_fragment:Kw,colorspace_pars_fragment:Zw,envmap_fragment:Qw,envmap_common_pars_fragment:Jw,envmap_pars_fragment:eA,envmap_pars_vertex:tA,envmap_physical_pars_fragment:dA,envmap_vertex:nA,fog_vertex:iA,fog_pars_vertex:rA,fog_fragment:oA,fog_pars_fragment:sA,gradientmap_pars_fragment:aA,lightmap_pars_fragment:lA,lights_lambert_fragment:cA,lights_lambert_pars_fragment:uA,lights_pars_begin:fA,lights_toon_fragment:hA,lights_toon_pars_fragment:pA,lights_phong_fragment:mA,lights_phong_pars_fragment:gA,lights_physical_fragment:_A,lights_physical_pars_fragment:vA,lights_fragment_begin:yA,lights_fragment_maps:xA,lights_fragment_end:SA,logdepthbuf_fragment:MA,logdepthbuf_pars_fragment:EA,logdepthbuf_pars_vertex:TA,logdepthbuf_vertex:wA,map_fragment:AA,map_pars_fragment:CA,map_particle_fragment:RA,map_particle_pars_fragment:bA,metalnessmap_fragment:PA,metalnessmap_pars_fragment:LA,morphinstance_vertex:DA,morphcolor_vertex:IA,morphnormal_vertex:UA,morphtarget_pars_vertex:NA,morphtarget_vertex:FA,normal_fragment_begin:OA,normal_fragment_maps:kA,normal_pars_fragment:BA,normal_pars_vertex:zA,normal_vertex:HA,normalmap_pars_fragment:VA,clearcoat_normal_fragment_begin:GA,clearcoat_normal_fragment_maps:WA,clearcoat_pars_fragment:$A,iridescence_pars_fragment:XA,opaque_fragment:jA,packing:YA,premultiplied_alpha_fragment:qA,project_vertex:KA,dithering_fragment:ZA,dithering_pars_fragment:QA,roughnessmap_fragment:JA,roughnessmap_pars_fragment:eC,shadowmap_pars_fragment:tC,shadowmap_pars_vertex:nC,shadowmap_vertex:iC,shadowmask_pars_fragment:rC,skinbase_vertex:oC,skinning_pars_vertex:sC,skinning_vertex:aC,skinnormal_vertex:lC,specularmap_fragment:cC,specularmap_pars_fragment:uC,tonemapping_fragment:fC,tonemapping_pars_fragment:dC,transmission_fragment:hC,transmission_pars_fragment:pC,uv_pars_fragment:mC,uv_pars_vertex:gC,uv_vertex:_C,worldpos_vertex:vC,background_vert:yC,background_frag:xC,backgroundCube_vert:SC,backgroundCube_frag:MC,cube_vert:EC,cube_frag:TC,depth_vert:wC,depth_frag:AC,distanceRGBA_vert:CC,distanceRGBA_frag:RC,equirect_vert:bC,equirect_frag:PC,linedashed_vert:LC,linedashed_frag:DC,meshbasic_vert:IC,meshbasic_frag:UC,meshlambert_vert:NC,meshlambert_frag:FC,meshmatcap_vert:OC,meshmatcap_frag:kC,meshnormal_vert:BC,meshnormal_frag:zC,meshphong_vert:HC,meshphong_frag:VC,meshphysical_vert:GC,meshphysical_frag:WC,meshtoon_vert:$C,meshtoon_frag:XC,points_vert:jC,points_frag:YC,shadow_vert:qC,shadow_frag:KC,sprite_vert:ZC,sprite_frag:QC},ce={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},si={basic:{uniforms:Qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new it(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Qt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Qt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Qt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new it(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Qt([ce.points,ce.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Qt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Qt([ce.common,ce.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Qt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Qt([ce.sprite,ce.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Qt([ce.common,ce.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Qt([ce.lights,ce.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};si.physical={uniforms:Qt([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const vl={r:0,b:0,g:0},Ar=new Fi,JC=new Dt;function eR(t,e,n,i,r,o,s){const a=new it(0);let l=o===!0?0:1,c,f,h=null,d=0,m=null;function y(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?n:e).get(g)),g}function x(v){let g=!1;const M=y(v);M===null?u(a,l):M&&M.isColor&&(u(M,1),g=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(v,g){const M=y(g);M&&(M.isCubeTexture||M.mapping===Kc)?(f===void 0&&(f=new ci(new Ra(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:ss(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Ar.copy(g.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(JC.makeRotationFromEuler(Ar)),f.material.toneMapped=Je.getTransfer(M.colorSpace)!==ut,(h!==M||d!==M.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,h=M,d=M.version,m=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ci(new ba(2,2),new Oi({name:"BackgroundMaterial",uniforms:ss(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Je.getTransfer(M.colorSpace)!==ut,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,m=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,g){v.getRGB(vl,Zv(t)),i.buffers.color.setClear(vl.r,vl.g,vl.b,g,s)}return{getClearColor:function(){return a},setClearColor:function(v,g=1){a.set(v),l=g,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:x,addToRenderList:_}}function tR(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let o=r,s=!1;function a(S,b,B,O,X){let j=!1;const G=h(O,B,b);o!==G&&(o=G,c(o.object)),j=m(S,O,B,X),j&&y(S,O,B,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(j||s)&&(s=!1,M(S,b,B,O),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function h(S,b,B){const O=B.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let j=X[b.id];j===void 0&&(j={},X[b.id]=j);let G=j[O];return G===void 0&&(G=d(l()),j[O]=G),G}function d(S){const b=[],B=[],O=[];for(let X=0;X<n;X++)b[X]=0,B[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:B,attributeDivisors:O,object:S,attributes:{},index:null}}function m(S,b,B,O){const X=o.attributes,j=b.attributes;let G=0;const q=B.getAttributes();for(const D in q)if(q[D].location>=0){const Q=X[D];let oe=j[D];if(oe===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),Q===void 0||Q.attribute!==oe||oe&&Q.data!==oe.data)return!0;G++}return o.attributesNum!==G||o.index!==O}function y(S,b,B,O){const X={},j=b.attributes;let G=0;const q=B.getAttributes();for(const D in q)if(q[D].location>=0){let Q=j[D];Q===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const oe={};oe.attribute=Q,Q&&Q.data&&(oe.data=Q.data),X[D]=oe,G++}o.attributes=X,o.attributesNum=G,o.index=O}function x(){const S=o.newAttributes;for(let b=0,B=S.length;b<B;b++)S[b]=0}function _(S){u(S,0)}function u(S,b){const B=o.newAttributes,O=o.enabledAttributes,X=o.attributeDivisors;B[S]=1,O[S]===0&&(t.enableVertexAttribArray(S),O[S]=1),X[S]!==b&&(t.vertexAttribDivisor(S,b),X[S]=b)}function v(){const S=o.newAttributes,b=o.enabledAttributes;for(let B=0,O=b.length;B<O;B++)b[B]!==S[B]&&(t.disableVertexAttribArray(B),b[B]=0)}function g(S,b,B,O,X,j,G){G===!0?t.vertexAttribIPointer(S,b,B,X,j):t.vertexAttribPointer(S,b,B,O,X,j)}function M(S,b,B,O){x();const X=O.attributes,j=B.getAttributes(),G=b.defaultAttributeValues;for(const q in j){const D=j[q];if(D.location>=0){let $=X[q];if($===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const Q=$.normalized,oe=$.itemSize,Se=e.get($);if(Se===void 0)continue;const ze=Se.buffer,W=Se.type,ie=Se.bytesPerElement,fe=W===t.INT||W===t.UNSIGNED_INT||$.gpuType===Jh;if($.isInterleavedBufferAttribute){const ue=$.data,Te=ue.stride,be=$.offset;if(ue.isInstancedInterleavedBuffer){for(let Oe=0;Oe<D.locationSize;Oe++)u(D.location+Oe,ue.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Oe=0;Oe<D.locationSize;Oe++)_(D.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Oe=0;Oe<D.locationSize;Oe++)g(D.location+Oe,oe/D.locationSize,W,Q,Te*ie,(be+oe/D.locationSize*Oe)*ie,fe)}else{if($.isInstancedBufferAttribute){for(let ue=0;ue<D.locationSize;ue++)u(D.location+ue,$.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ue=0;ue<D.locationSize;ue++)_(D.location+ue);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let ue=0;ue<D.locationSize;ue++)g(D.location+ue,oe/D.locationSize,W,Q,oe*ie,oe/D.locationSize*ue*ie,fe)}}else if(G!==void 0){const Q=G[q];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(D.location,Q);break;case 3:t.vertexAttrib3fv(D.location,Q);break;case 4:t.vertexAttrib4fv(D.location,Q);break;default:t.vertexAttrib1fv(D.location,Q)}}}}v()}function C(){L();for(const S in i){const b=i[S];for(const B in b){const O=b[B];for(const X in O)f(O[X].object),delete O[X];delete b[B]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const b=i[S.id];for(const B in b){const O=b[B];for(const X in O)f(O[X].object),delete O[X];delete b[B]}delete i[S.id]}function w(S){for(const b in i){const B=i[b];if(B[S.id]===void 0)continue;const O=B[S.id];for(const X in O)f(O[X].object),delete O[X];delete B[S.id]}}function L(){p(),s=!0,o!==r&&(o=r,c(o.object))}function p(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:p,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:_,disableUnusedAttributes:v}}function nR(t,e,n){let i;function r(c){i=c}function o(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function s(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function a(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let m=0;for(let y=0;y<h;y++)m+=f[y];n.update(m,i,1)}function l(c,f,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<c.length;y++)s(c[y],f[y],d[y]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let y=0;for(let x=0;x<h;x++)y+=f[x];for(let x=0;x<d.length;x++)n.update(y,i,d[x])}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function iR(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==qn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const w=A===Ta&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ni&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ci&&!w)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:u,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:M,maxSamples:C}}function rR(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Pr,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const y=h.clippingPlanes,x=h.clipIntersection,_=h.clipShadows,u=t.get(h);if(!r||y===null||y.length===0||o&&!_)o?f(null):c();else{const v=o?0:i,g=v*4;let M=u.clippingState||null;l.value=M,M=f(y,d,g,m);for(let C=0;C!==g;++C)M[C]=n[C];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,y){const x=h!==null?h.length:0;let _=null;if(x!==0){if(_=l.value,y!==!0||_===null){const u=m+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(_===null||_.length<u)&&(_=new Float32Array(u));for(let g=0,M=m;g!==x;++g,M+=4)s.copy(h[g]).applyMatrix4(v,a),s.normal.toArray(_,M),_[M+3]=s.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,_}}function oR(t){let e=new WeakMap;function n(s,a){return a===ud?s.mapping=ns:a===fd&&(s.mapping=is),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===ud||a===fd)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new gw(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class sR extends Qv{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fo=4,vg=[.125,.215,.35,.446,.526,.582],Ir=20,nf=new sR,yg=new it;let rf=null,of=0,sf=0,af=!1;const Lr=(1+Math.sqrt(5))/2,Eo=1/Lr,xg=[new H(-Lr,Eo,0),new H(Lr,Eo,0),new H(-Eo,0,Lr),new H(Eo,0,Lr),new H(0,Lr,-Eo),new H(0,Lr,Eo),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Sg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){rf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),sf=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rf,of,sf),this._renderer.xr.enabled=af,e.scissorTest=!1,yl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),sf=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Ta,format:qn,colorSpace:yr,depthBuffer:!1},r=Mg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mg(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aR(o)),this._blurMaterial=lR(o,e,n)}return r}_compileMaterial(e){const n=new ci(this._lodPlanes[0],e);this._renderer.compile(n,nf)}_sceneToCubeUV(e,n,i,r){const a=new In(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(yg),f.toneMapping=ur,f.autoClear=!1;const m=new Yv({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),y=new ci(new Ra,m);let x=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,x=!0):(m.color.copy(yg),x=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;yl(r,v*g,u>2?g:0,g,g),f.setRenderTarget(r),x&&f.render(y,a),f.render(e,a)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ns||e.mapping===is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eg());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new ci(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;yl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,nf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=xg[(r-o-1)%xg.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new ci(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Ir-1),x=o/y,_=isFinite(o)?1+Math.floor(f*x):Ir;_>Ir&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ir}`);const u=[];let v=0;for(let w=0;w<Ir;++w){const L=w/x,p=Math.exp(-L*L/2);u.push(p),w===0?v+=p:w<_&&(v+=2*p)}for(let w=0;w<u.length;w++)u[w]=u[w]/v;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=u,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=y,d.mipInt.value=g-i;const M=this._sizeLods[r],C=3*M*(r>g-Fo?r-g+Fo:0),A=4*(this._cubeSize-M);yl(n,C,A,3*M,2*M),l.setRenderTarget(n),l.render(h,nf)}}function aR(t){const e=[],n=[],i=[];let r=t;const o=t-Fo+1+vg.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Fo?l=vg[s-t+Fo-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,y=6,x=3,_=2,u=1,v=new Float32Array(x*y*m),g=new Float32Array(_*y*m),M=new Float32Array(u*y*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,L=A>2?0:-1,p=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];v.set(p,x*y*A),g.set(d,_*y*A);const S=[A,A,A,A,A,A];M.set(S,u*y*A)}const C=new Qr;C.setAttribute("position",new hi(v,x)),C.setAttribute("uv",new hi(g,_)),C.setAttribute("faceIndex",new hi(M,u)),e.push(C),r>Fo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Mg(t,e,n){const i=new qr(t,e,n);return i.texture.mapping=Kc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function lR(t,e,n){const i=new Float32Array(Ir),r=new H(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Eg(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Tg(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function ap(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cR(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ud||l===fd,f=l===ns||l===is;if(c||f){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Sg(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||f&&m&&r(m)?(n===null&&(n=new Sg(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function uR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Xs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fR(t,e,n,i){const r={},o=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);for(const y in d.morphAttributes){const x=d.morphAttributes[y];for(let _=0,u=x.length;_<u;_++)e.remove(x[_])}d.removeEventListener("dispose",s),delete r[d.id];const m=o.get(d);m&&(e.remove(m),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const y in d)e.update(d[y],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const y in m){const x=m[y];for(let _=0,u=x.length;_<u;_++)e.update(x[_],t.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,y=h.attributes.position;let x=0;if(m!==null){const v=m.array;x=m.version;for(let g=0,M=v.length;g<M;g+=3){const C=v[g+0],A=v[g+1],w=v[g+2];d.push(C,A,A,w,w,C)}}else if(y!==void 0){const v=y.array;x=y.version;for(let g=0,M=v.length/3-1;g<M;g+=3){const C=g+0,A=g+1,w=g+2;d.push(C,A,A,w,w,C)}}else return;const _=new(Gv(d)?Kv:qv)(d,1);_.version=x;const u=o.get(h);u&&e.remove(u),o.set(h,_)}function f(h){const d=o.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function dR(t,e,n){let i;function r(d){i=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function l(d,m){t.drawElements(i,m,o,d*s),n.update(m,i,1)}function c(d,m,y){y!==0&&(t.drawElementsInstanced(i,m,o,d*s,y),n.update(m,i,y))}function f(d,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,d,0,y);let _=0;for(let u=0;u<y;u++)_+=m[u];n.update(_,i,1)}function h(d,m,y,x){if(y===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let u=0;u<d.length;u++)c(d[u]/s,m[u],x[u]);else{_.multiDrawElementsInstancedWEBGL(i,m,0,o,d,0,x,0,y);let u=0;for(let v=0;v<y;v++)u+=m[v];for(let v=0;v<x.length;v++)n.update(u,i,x[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function hR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function pR(t,e,n){const i=new WeakMap,r=new Ot;function o(s,a,l){const c=s.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;d!==void 0&&d.texture.dispose();const y=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let M=0;y===!0&&(M=1),x===!0&&(M=2),_===!0&&(M=3);let C=a.attributes.position.count*M,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*A*4*h),L=new $v(w,C,A,h);L.type=Ci,L.needsUpdate=!0;const p=M*4;for(let b=0;b<h;b++){const B=u[b],O=v[b],X=g[b],j=C*A*4*b;for(let G=0;G<B.count;G++){const q=G*p;y===!0&&(r.fromBufferAttribute(B,G),w[j+q+0]=r.x,w[j+q+1]=r.y,w[j+q+2]=r.z,w[j+q+3]=0),x===!0&&(r.fromBufferAttribute(O,G),w[j+q+4]=r.x,w[j+q+5]=r.y,w[j+q+6]=r.z,w[j+q+7]=0),_===!0&&(r.fromBufferAttribute(X,G),w[j+q+8]=r.x,w[j+q+9]=r.y,w[j+q+10]=r.z,w[j+q+11]=X.itemSize===4?r.w:1)}}d={count:h,texture:L,size:new et(C,A)},i.set(a,d),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let y=0;for(let _=0;_<c.length;_++)y+=c[_];const x=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:o}}function mR(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}class ny extends dn{constructor(e,n,i,r,o,s,a,l,c,f=Xo){if(f!==Xo&&f!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Xo&&(i=Yr),i===void 0&&f===os&&(i=rs),super(null,r,o,s,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const iy=new dn,wg=new ny(1,1),ry=new $v,oy=new JT,sy=new Jv,Ag=[],Cg=[],Rg=new Float32Array(16),bg=new Float32Array(9),Pg=new Float32Array(4);function ds(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Ag[r];if(o===void 0&&(o=new Float32Array(r),Ag[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Jc(t,e){let n=Cg[e];n===void 0&&(n=new Int32Array(e),Cg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function gR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _R(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function vR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function yR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function xR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Pg.set(i),t.uniformMatrix2fv(this.addr,!1,Pg),Ut(n,i)}}function SR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;bg.set(i),t.uniformMatrix3fv(this.addr,!1,bg),Ut(n,i)}}function MR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;Rg.set(i),t.uniformMatrix4fv(this.addr,!1,Rg),Ut(n,i)}}function ER(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function TR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function wR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function AR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function CR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function RR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function bR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function PR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function LR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(wg.compareFunction=Vv,o=wg):o=iy,n.setTexture2D(e||o,r)}function DR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||oy,r)}function IR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||sy,r)}function UR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ry,r)}function NR(t){switch(t){case 5126:return gR;case 35664:return _R;case 35665:return vR;case 35666:return yR;case 35674:return xR;case 35675:return SR;case 35676:return MR;case 5124:case 35670:return ER;case 35667:case 35671:return TR;case 35668:case 35672:return wR;case 35669:case 35673:return AR;case 5125:return CR;case 36294:return RR;case 36295:return bR;case 36296:return PR;case 35678:case 36198:case 36298:case 36306:case 35682:return LR;case 35679:case 36299:case 36307:return DR;case 35680:case 36300:case 36308:case 36293:return IR;case 36289:case 36303:case 36311:case 36292:return UR}}function FR(t,e){t.uniform1fv(this.addr,e)}function OR(t,e){const n=ds(e,this.size,2);t.uniform2fv(this.addr,n)}function kR(t,e){const n=ds(e,this.size,3);t.uniform3fv(this.addr,n)}function BR(t,e){const n=ds(e,this.size,4);t.uniform4fv(this.addr,n)}function zR(t,e){const n=ds(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function HR(t,e){const n=ds(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function VR(t,e){const n=ds(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function GR(t,e){t.uniform1iv(this.addr,e)}function WR(t,e){t.uniform2iv(this.addr,e)}function $R(t,e){t.uniform3iv(this.addr,e)}function XR(t,e){t.uniform4iv(this.addr,e)}function jR(t,e){t.uniform1uiv(this.addr,e)}function YR(t,e){t.uniform2uiv(this.addr,e)}function qR(t,e){t.uniform3uiv(this.addr,e)}function KR(t,e){t.uniform4uiv(this.addr,e)}function ZR(t,e,n){const i=this.cache,r=e.length,o=Jc(n,r);It(i,o)||(t.uniform1iv(this.addr,o),Ut(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||iy,o[s])}function QR(t,e,n){const i=this.cache,r=e.length,o=Jc(n,r);It(i,o)||(t.uniform1iv(this.addr,o),Ut(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||oy,o[s])}function JR(t,e,n){const i=this.cache,r=e.length,o=Jc(n,r);It(i,o)||(t.uniform1iv(this.addr,o),Ut(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||sy,o[s])}function eb(t,e,n){const i=this.cache,r=e.length,o=Jc(n,r);It(i,o)||(t.uniform1iv(this.addr,o),Ut(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||ry,o[s])}function tb(t){switch(t){case 5126:return FR;case 35664:return OR;case 35665:return kR;case 35666:return BR;case 35674:return zR;case 35675:return HR;case 35676:return VR;case 5124:case 35670:return GR;case 35667:case 35671:return WR;case 35668:case 35672:return $R;case 35669:case 35673:return XR;case 5125:return jR;case 36294:return YR;case 36295:return qR;case 36296:return KR;case 35678:case 36198:case 36298:case 36306:case 35682:return ZR;case 35679:case 36299:case 36307:return QR;case 35680:case 36300:case 36308:case 36293:return JR;case 36289:case 36303:case 36311:case 36292:return eb}}class nb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=NR(n.type)}}class ib{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tb(n.type)}}class rb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const lf=/(\w+)(\])?(\[|\.)?/g;function Lg(t,e){t.seq.push(e),t.map[e.id]=e}function ob(t,e,n){const i=t.name,r=i.length;for(lf.lastIndex=0;;){const o=lf.exec(i),s=lf.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Lg(n,c===void 0?new nb(a,t,e):new ib(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new rb(a),Lg(n,h)),n=h}}}class Gl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);ob(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Dg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const sb=37297;let ab=0;function lb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function cb(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===yc&&n===vc?i="LinearDisplayP3ToLinearSRGB":e===vc&&n===yc&&(i="LinearSRGBToLinearDisplayP3"),t){case yr:case Zc:return[i,"LinearTransferOETF"];case ii:case op:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Ig(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+lb(t.getShaderSource(e),s)}else return r}function ub(t,e){const n=cb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function fb(t,e){let n;switch(e){case AT:n="Linear";break;case CT:n="Reinhard";break;case RT:n="Cineon";break;case bT:n="ACESFilmic";break;case LT:n="AgX";break;case DT:n="Neutral";break;case PT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const xl=new H;function db(){Je.getLuminanceCoefficients(xl);const t=xl.x.toFixed(4),e=xl.y.toFixed(4),n=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function pb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function mb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Ns(t){return t!==""}function Ug(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ng(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(t){return t.replace(gb,vb)}const _b=new Map;function vb(t,e){let n=Ne[e];if(n===void 0){const i=_b.get(e);if(i!==void 0)n=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hd(n)}const yb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fg(t){return t.replace(yb,xb)}function xb(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Og(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===bv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Q1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function Mb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ns:case is:e="ENVMAP_TYPE_CUBE";break;case Kc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Eb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case is:e="ENVMAP_MODE_REFRACTION";break}return e}function Tb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Pv:e="ENVMAP_BLENDING_MULTIPLY";break;case TT:e="ENVMAP_BLENDING_MIX";break;case wT:e="ENVMAP_BLENDING_ADD";break}return e}function wb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Ab(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=Sb(n),c=Mb(n),f=Eb(n),h=Tb(n),d=wb(n),m=hb(n),y=pb(o),x=r.createProgram();let _,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ns).join(`
`),_.length>0&&(_+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Ns).join(`
`),u.length>0&&(u+=`
`)):(_=[Og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),u=[Og(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ur?"#define TONE_MAPPING":"",n.toneMapping!==ur?Ne.tonemapping_pars_fragment:"",n.toneMapping!==ur?fb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,ub("linearToOutputTexel",n.outputColorSpace),db(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ns).join(`
`)),s=Hd(s),s=Ug(s,n),s=Ng(s,n),a=Hd(a),a=Ug(a,n),a=Ng(a,n),s=Fg(s),a=Fg(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,u=["#define varying in",n.glslVersion===Qm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=v+_+s,M=v+u+a,C=Dg(r,r.VERTEX_SHADER,g),A=Dg(r,r.FRAGMENT_SHADER,M);r.attachShader(x,C),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function w(b){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(x).trim(),O=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(A).trim();let j=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,C,A);else{const q=Ig(r,C,"vertex"),D=Ig(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+B+`
`+q+`
`+D)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||X==="")&&(G=!1);G&&(b.diagnostics={runnable:j,programLog:B,vertexShader:{log:O,prefix:_},fragmentShader:{log:X,prefix:u}})}r.deleteShader(C),r.deleteShader(A),L=new Gl(r,x),p=mb(r,x)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let p;this.getAttributes=function(){return p===void 0&&w(this),p};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,sb)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ab++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}let Cb=0;class Rb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new bb(e),n.set(e,i)),i}}class bb{constructor(e){this.id=Cb++,this.code=e,this.usedTimes=0}}function Pb(t,e,n,i,r,o,s){const a=new Xv,l=new Rb,c=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(p){return c.add(p),p===0?"uv":`uv${p}`}function _(p,S,b,B,O){const X=B.fog,j=O.geometry,G=p.isMeshStandardMaterial?B.environment:null,q=(p.isMeshStandardMaterial?n:e).get(p.envMap||G),D=q&&q.mapping===Kc?q.image.height:null,$=y[p.type];p.precision!==null&&(m=r.getMaxPrecision(p.precision),m!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",m,"instead."));const Q=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,oe=Q!==void 0?Q.length:0;let Se=0;j.morphAttributes.position!==void 0&&(Se=1),j.morphAttributes.normal!==void 0&&(Se=2),j.morphAttributes.color!==void 0&&(Se=3);let ze,W,ie,fe;if($){const qe=si[$];ze=qe.vertexShader,W=qe.fragmentShader}else ze=p.vertexShader,W=p.fragmentShader,l.update(p),ie=l.getVertexShaderID(p),fe=l.getFragmentShaderID(p);const ue=t.getRenderTarget(),Te=O.isInstancedMesh===!0,be=O.isBatchedMesh===!0,Oe=!!p.map,lt=!!p.matcap,P=!!q,We=!!p.aoMap,$e=!!p.lightMap,Ye=!!p.bumpMap,_e=!!p.normalMap,st=!!p.displacementMap,Ce=!!p.emissiveMap,Pe=!!p.metalnessMap,R=!!p.roughnessMap,E=p.anisotropy>0,z=p.clearcoat>0,K=p.dispersion>0,ee=p.iridescence>0,J=p.sheen>0,de=p.transmission>0,te=E&&!!p.anisotropyMap,he=z&&!!p.clearcoatMap,De=z&&!!p.clearcoatNormalMap,re=z&&!!p.clearcoatRoughnessMap,me=ee&&!!p.iridescenceMap,He=ee&&!!p.iridescenceThicknessMap,Le=J&&!!p.sheenColorMap,ve=J&&!!p.sheenRoughnessMap,Ie=!!p.specularMap,ke=!!p.specularColorMap,pt=!!p.specularIntensityMap,I=de&&!!p.transmissionMap,se=de&&!!p.thicknessMap,Y=!!p.gradientMap,Z=!!p.alphaMap,le=p.alphaTest>0,we=!!p.alphaHash,Ve=!!p.extensions;let wt=ur;p.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(wt=t.toneMapping);const Bt={shaderID:$,shaderType:p.type,shaderName:p.name,vertexShader:ze,fragmentShader:W,defines:p.defines,customVertexShaderID:ie,customFragmentShaderID:fe,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:m,batching:be,batchingColor:be&&O._colorsTexture!==null,instancing:Te,instancingColor:Te&&O.instanceColor!==null,instancingMorph:Te&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:yr,alphaToCoverage:!!p.alphaToCoverage,map:Oe,matcap:lt,envMap:P,envMapMode:P&&q.mapping,envMapCubeUVHeight:D,aoMap:We,lightMap:$e,bumpMap:Ye,normalMap:_e,displacementMap:d&&st,emissiveMap:Ce,normalMapObjectSpace:_e&&p.normalMapType===OT,normalMapTangentSpace:_e&&p.normalMapType===FT,metalnessMap:Pe,roughnessMap:R,anisotropy:E,anisotropyMap:te,clearcoat:z,clearcoatMap:he,clearcoatNormalMap:De,clearcoatRoughnessMap:re,dispersion:K,iridescence:ee,iridescenceMap:me,iridescenceThicknessMap:He,sheen:J,sheenColorMap:Le,sheenRoughnessMap:ve,specularMap:Ie,specularColorMap:ke,specularIntensityMap:pt,transmission:de,transmissionMap:I,thicknessMap:se,gradientMap:Y,opaque:p.transparent===!1&&p.blending===$o&&p.alphaToCoverage===!1,alphaMap:Z,alphaTest:le,alphaHash:we,combine:p.combine,mapUv:Oe&&x(p.map.channel),aoMapUv:We&&x(p.aoMap.channel),lightMapUv:$e&&x(p.lightMap.channel),bumpMapUv:Ye&&x(p.bumpMap.channel),normalMapUv:_e&&x(p.normalMap.channel),displacementMapUv:st&&x(p.displacementMap.channel),emissiveMapUv:Ce&&x(p.emissiveMap.channel),metalnessMapUv:Pe&&x(p.metalnessMap.channel),roughnessMapUv:R&&x(p.roughnessMap.channel),anisotropyMapUv:te&&x(p.anisotropyMap.channel),clearcoatMapUv:he&&x(p.clearcoatMap.channel),clearcoatNormalMapUv:De&&x(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&x(p.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&x(p.iridescenceMap.channel),iridescenceThicknessMapUv:He&&x(p.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&x(p.sheenColorMap.channel),sheenRoughnessMapUv:ve&&x(p.sheenRoughnessMap.channel),specularMapUv:Ie&&x(p.specularMap.channel),specularColorMapUv:ke&&x(p.specularColorMap.channel),specularIntensityMapUv:pt&&x(p.specularIntensityMap.channel),transmissionMapUv:I&&x(p.transmissionMap.channel),thicknessMapUv:se&&x(p.thicknessMap.channel),alphaMapUv:Z&&x(p.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(_e||E),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!j.attributes.uv&&(Oe||Z),fog:!!X,useFog:p.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:p.flatShading===!0,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:p.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:wt,decodeVideoTexture:Oe&&p.map.isVideoTexture===!0&&Je.getTransfer(p.map.colorSpace)===ut,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===Ti,flipSided:p.side===fn,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:Ve&&p.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&p.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function u(p){const S=[];if(p.shaderID?S.push(p.shaderID):(S.push(p.customVertexShaderID),S.push(p.customFragmentShaderID)),p.defines!==void 0)for(const b in p.defines)S.push(b),S.push(p.defines[b]);return p.isRawShaderMaterial===!1&&(v(S,p),g(S,p),S.push(t.outputColorSpace)),S.push(p.customProgramCacheKey),S.join()}function v(p,S){p.push(S.precision),p.push(S.outputColorSpace),p.push(S.envMapMode),p.push(S.envMapCubeUVHeight),p.push(S.mapUv),p.push(S.alphaMapUv),p.push(S.lightMapUv),p.push(S.aoMapUv),p.push(S.bumpMapUv),p.push(S.normalMapUv),p.push(S.displacementMapUv),p.push(S.emissiveMapUv),p.push(S.metalnessMapUv),p.push(S.roughnessMapUv),p.push(S.anisotropyMapUv),p.push(S.clearcoatMapUv),p.push(S.clearcoatNormalMapUv),p.push(S.clearcoatRoughnessMapUv),p.push(S.iridescenceMapUv),p.push(S.iridescenceThicknessMapUv),p.push(S.sheenColorMapUv),p.push(S.sheenRoughnessMapUv),p.push(S.specularMapUv),p.push(S.specularColorMapUv),p.push(S.specularIntensityMapUv),p.push(S.transmissionMapUv),p.push(S.thicknessMapUv),p.push(S.combine),p.push(S.fogExp2),p.push(S.sizeAttenuation),p.push(S.morphTargetsCount),p.push(S.morphAttributeCount),p.push(S.numDirLights),p.push(S.numPointLights),p.push(S.numSpotLights),p.push(S.numSpotLightMaps),p.push(S.numHemiLights),p.push(S.numRectAreaLights),p.push(S.numDirLightShadows),p.push(S.numPointLightShadows),p.push(S.numSpotLightShadows),p.push(S.numSpotLightShadowsWithMaps),p.push(S.numLightProbes),p.push(S.shadowMapType),p.push(S.toneMapping),p.push(S.numClippingPlanes),p.push(S.numClipIntersection),p.push(S.depthPacking)}function g(p,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),p.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),p.push(a.mask)}function M(p){const S=y[p.type];let b;if(S){const B=si[S];b=dw.clone(B.uniforms)}else b=p.uniforms;return b}function C(p,S){let b;for(let B=0,O=f.length;B<O;B++){const X=f[B];if(X.cacheKey===S){b=X,++b.usedTimes;break}}return b===void 0&&(b=new Ab(t,S,p,o),f.push(b)),b}function A(p){if(--p.usedTimes===0){const S=f.indexOf(p);f[S]=f[f.length-1],f.pop(),p.destroy()}}function w(p){l.remove(p)}function L(){l.dispose()}return{getParameters:_,getProgramCacheKey:u,getUniforms:M,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:f,dispose:L}}function Lb(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function Db(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function kg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Bg(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(h,d,m,y,x,_){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:m,groupOrder:y,renderOrder:h.renderOrder,z:x,group:_},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=m,u.groupOrder=y,u.renderOrder=h.renderOrder,u.z=x,u.group=_),e++,u}function a(h,d,m,y,x,_){const u=s(h,d,m,y,x,_);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,d,m,y,x,_){const u=s(h,d,m,y,x,_);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||Db),i.length>1&&i.sort(d||kg),r.length>1&&r.sort(d||kg)}function f(){for(let h=e,d=t.length;h<d;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:f,sort:c}}function Ib(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Bg,t.set(i,[s])):r>=o.length?(s=new Bg,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function Ub(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new it};break;case"SpotLight":n={position:new H,direction:new H,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function Nb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Fb=0;function Ob(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function kb(t){const e=new Ub,n=Nb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,o=new Dt,s=new Dt;function a(c){let f=0,h=0,d=0;for(let p=0;p<9;p++)i.probe[p].set(0,0,0);let m=0,y=0,x=0,_=0,u=0,v=0,g=0,M=0,C=0,A=0,w=0;c.sort(Ob);for(let p=0,S=c.length;p<S;p++){const b=c[p],B=b.color,O=b.intensity,X=b.distance,j=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)f+=B.r*O,h+=B.g*O,d+=B.b*O;else if(b.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(b.sh.coefficients[G],O);w++}else if(b.isDirectionalLight){const G=e.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const q=b.shadow,D=n.get(b);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=j,i.directionalShadowMatrix[m]=b.shadow.matrix,v++}i.directional[m]=G,m++}else if(b.isSpotLight){const G=e.get(b);G.position.setFromMatrixPosition(b.matrixWorld),G.color.copy(B).multiplyScalar(O),G.distance=X,G.coneCos=Math.cos(b.angle),G.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),G.decay=b.decay,i.spot[x]=G;const q=b.shadow;if(b.map&&(i.spotLightMap[C]=b.map,C++,q.updateMatrices(b),b.castShadow&&A++),i.spotLightMatrix[x]=q.matrix,b.castShadow){const D=n.get(b);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=j,M++}x++}else if(b.isRectAreaLight){const G=e.get(b);G.color.copy(B).multiplyScalar(O),G.halfWidth.set(b.width*.5,0,0),G.halfHeight.set(0,b.height*.5,0),i.rectArea[_]=G,_++}else if(b.isPointLight){const G=e.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),G.distance=b.distance,G.decay=b.decay,b.castShadow){const q=b.shadow,D=n.get(b);D.shadowIntensity=q.intensity,D.shadowBias=q.bias,D.shadowNormalBias=q.normalBias,D.shadowRadius=q.radius,D.shadowMapSize=q.mapSize,D.shadowCameraNear=q.camera.near,D.shadowCameraFar=q.camera.far,i.pointShadow[y]=D,i.pointShadowMap[y]=j,i.pointShadowMatrix[y]=b.shadow.matrix,g++}i.point[y]=G,y++}else if(b.isHemisphereLight){const G=e.get(b);G.skyColor.copy(b.color).multiplyScalar(O),G.groundColor.copy(b.groundColor).multiplyScalar(O),i.hemi[u]=G,u++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==m||L.pointLength!==y||L.spotLength!==x||L.rectAreaLength!==_||L.hemiLength!==u||L.numDirectionalShadows!==v||L.numPointShadows!==g||L.numSpotShadows!==M||L.numSpotMaps!==C||L.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=_,i.point.length=y,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=M+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,L.directionalLength=m,L.pointLength=y,L.spotLength=x,L.rectAreaLength=_,L.hemiLength=u,L.numDirectionalShadows=v,L.numPointShadows=g,L.numSpotShadows=M,L.numSpotMaps=C,L.numLightProbes=w,i.version=Fb++)}function l(c,f){let h=0,d=0,m=0,y=0,x=0;const _=f.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const g=c[u];if(g.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),h++}else if(g.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),m++}else if(g.isRectAreaLight){const M=i.rectArea[y];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(_),s.identity(),o.copy(g.matrixWorld),o.premultiply(_),s.extractRotation(o),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),y++}else if(g.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(_),d++}else if(g.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(_),x++}}}return{setup:a,setupView:l,state:i}}function zg(t){const e=new kb(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function o(f){n.push(f)}function s(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function Bb(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new zg(t),e.set(r,[a])):o>=s.length?(a=new zg(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class zb extends Qc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hb extends Qc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wb(t,e,n){let i=new ey;const r=new et,o=new et,s=new Ot,a=new zb({depthPacking:NT}),l=new Hb,c={},f=n.maxTextureSize,h={[mr]:fn,[fn]:mr,[Ti]:Ti},d=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Vb,fragmentShader:Gb}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const y=new Qr;y.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ci(y,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bv;let u=this.type;this.render=function(A,w,L){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;const p=t.getRenderTarget(),S=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),B=t.state;B.setBlending(cr),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=u!==Si&&this.type===Si,X=u===Si&&this.type!==Si;for(let j=0,G=A.length;j<G;j++){const q=A[j],D=q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const $=D.getFrameExtents();if(r.multiply($),o.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(o.x=Math.floor(f/$.x),r.x=o.x*$.x,D.mapSize.x=o.x),r.y>f&&(o.y=Math.floor(f/$.y),r.y=o.y*$.y,D.mapSize.y=o.y)),D.map===null||O===!0||X===!0){const oe=this.type!==Si?{minFilter:Nn,magFilter:Nn}:{};D.map!==null&&D.map.dispose(),D.map=new qr(r.x,r.y,oe),D.map.texture.name=q.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const Q=D.getViewportCount();for(let oe=0;oe<Q;oe++){const Se=D.getViewport(oe);s.set(o.x*Se.x,o.y*Se.y,o.x*Se.z,o.y*Se.w),B.viewport(s),D.updateMatrices(q,oe),i=D.getFrustum(),M(w,L,D.camera,q,this.type)}D.isPointLightShadow!==!0&&this.type===Si&&v(D,L),D.needsUpdate=!1}u=this.type,_.needsUpdate=!1,t.setRenderTarget(p,S,b)};function v(A,w){const L=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new qr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,L,d,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,L,m,x,null)}function g(A,w,L,p){let S=null;const b=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)S=b;else if(S=L.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const B=S.uuid,O=w.uuid;let X=c[B];X===void 0&&(X={},c[B]=X);let j=X[O];j===void 0&&(j=S.clone(),X[O]=j,w.addEventListener("dispose",C)),S=j}if(S.visible=w.visible,S.wireframe=w.wireframe,p===Si?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:h[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=t.properties.get(S);B.light=L}return S}function M(A,w,L,p,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Si)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const O=e.update(A),X=A.material;if(Array.isArray(X)){const j=O.groups;for(let G=0,q=j.length;G<q;G++){const D=j[G],$=X[D.materialIndex];if($&&$.visible){const Q=g(A,$,p,S);A.onBeforeShadow(t,A,w,L,O,Q,D),t.renderBufferDirect(L,null,O,Q,A,D),A.onAfterShadow(t,A,w,L,O,Q,D)}}}else if(X.visible){const j=g(A,X,p,S);A.onBeforeShadow(t,A,w,L,O,j,null),t.renderBufferDirect(L,null,O,j,A,null),A.onAfterShadow(t,A,w,L,O,j,null)}}const B=A.children;for(let O=0,X=B.length;O<X;O++)M(B[O],w,L,p,S)}function C(A){A.target.removeEventListener("dispose",C);for(const L in c){const p=c[L],S=A.target.uuid;S in p&&(p[S].dispose(),delete p[S])}}}function $b(t){function e(){let I=!1;const se=new Ot;let Y=null;const Z=new Ot(0,0,0,0);return{setMask:function(le){Y!==le&&!I&&(t.colorMask(le,le,le,le),Y=le)},setLocked:function(le){I=le},setClear:function(le,we,Ve,wt,Bt){Bt===!0&&(le*=wt,we*=wt,Ve*=wt),se.set(le,we,Ve,wt),Z.equals(se)===!1&&(t.clearColor(le,we,Ve,wt),Z.copy(se))},reset:function(){I=!1,Y=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,se=null,Y=null,Z=null;return{setTest:function(le){le?fe(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(le){se!==le&&!I&&(t.depthMask(le),se=le)},setFunc:function(le){if(Y!==le){switch(le){case _T:t.depthFunc(t.NEVER);break;case vT:t.depthFunc(t.ALWAYS);break;case yT:t.depthFunc(t.LESS);break;case gc:t.depthFunc(t.LEQUAL);break;case xT:t.depthFunc(t.EQUAL);break;case ST:t.depthFunc(t.GEQUAL);break;case MT:t.depthFunc(t.GREATER);break;case ET:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Y=le}},setLocked:function(le){I=le},setClear:function(le){Z!==le&&(t.clearDepth(le),Z=le)},reset:function(){I=!1,se=null,Y=null,Z=null}}}function i(){let I=!1,se=null,Y=null,Z=null,le=null,we=null,Ve=null,wt=null,Bt=null;return{setTest:function(qe){I||(qe?fe(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(qe){se!==qe&&!I&&(t.stencilMask(qe),se=qe)},setFunc:function(qe,pi,Jn){(Y!==qe||Z!==pi||le!==Jn)&&(t.stencilFunc(qe,pi,Jn),Y=qe,Z=pi,le=Jn)},setOp:function(qe,pi,Jn){(we!==qe||Ve!==pi||wt!==Jn)&&(t.stencilOp(qe,pi,Jn),we=qe,Ve=pi,wt=Jn)},setLocked:function(qe){I=qe},setClear:function(qe){Bt!==qe&&(t.clearStencil(qe),Bt=qe)},reset:function(){I=!1,se=null,Y=null,Z=null,le=null,we=null,Ve=null,wt=null,Bt=null}}}const r=new e,o=new n,s=new i,a=new WeakMap,l=new WeakMap;let c={},f={},h=new WeakMap,d=[],m=null,y=!1,x=null,_=null,u=null,v=null,g=null,M=null,C=null,A=new it(0,0,0),w=0,L=!1,p=null,S=null,b=null,B=null,O=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,G=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=G>=1):q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=G>=2);let D=null,$={};const Q=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),Se=new Ot().fromArray(Q),ze=new Ot().fromArray(oe);function W(I,se,Y,Z){const le=new Uint8Array(4),we=t.createTexture();t.bindTexture(I,we),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ve=0;Ve<Y;Ve++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(se+Ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return we}const ie={};ie[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),fe(t.DEPTH_TEST),o.setFunc(gc),Ye(!1),_e(Xm),fe(t.CULL_FACE),We(cr);function fe(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function ue(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Te(I,se){return f[I]!==se?(t.bindFramebuffer(I,se),f[I]=se,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=se),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=se),!0):!1}function be(I,se){let Y=d,Z=!1;if(I){Y=h.get(se),Y===void 0&&(Y=[],h.set(se,Y));const le=I.textures;if(Y.length!==le.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let we=0,Ve=le.length;we<Ve;we++)Y[we]=t.COLOR_ATTACHMENT0+we;Y.length=le.length,Z=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,Z=!0);Z&&t.drawBuffers(Y)}function Oe(I){return m!==I?(t.useProgram(I),m=I,!0):!1}const lt={[Dr]:t.FUNC_ADD,[eT]:t.FUNC_SUBTRACT,[tT]:t.FUNC_REVERSE_SUBTRACT};lt[nT]=t.MIN,lt[iT]=t.MAX;const P={[rT]:t.ZERO,[oT]:t.ONE,[sT]:t.SRC_COLOR,[ld]:t.SRC_ALPHA,[dT]:t.SRC_ALPHA_SATURATE,[uT]:t.DST_COLOR,[lT]:t.DST_ALPHA,[aT]:t.ONE_MINUS_SRC_COLOR,[cd]:t.ONE_MINUS_SRC_ALPHA,[fT]:t.ONE_MINUS_DST_COLOR,[cT]:t.ONE_MINUS_DST_ALPHA,[hT]:t.CONSTANT_COLOR,[pT]:t.ONE_MINUS_CONSTANT_COLOR,[mT]:t.CONSTANT_ALPHA,[gT]:t.ONE_MINUS_CONSTANT_ALPHA};function We(I,se,Y,Z,le,we,Ve,wt,Bt,qe){if(I===cr){y===!0&&(ue(t.BLEND),y=!1);return}if(y===!1&&(fe(t.BLEND),y=!0),I!==J1){if(I!==x||qe!==L){if((_!==Dr||g!==Dr)&&(t.blendEquation(t.FUNC_ADD),_=Dr,g=Dr),qe)switch(I){case $o:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jm:t.blendFunc(t.ONE,t.ONE);break;case Ym:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case $o:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ym:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}u=null,v=null,M=null,C=null,A.set(0,0,0),w=0,x=I,L=qe}return}le=le||se,we=we||Y,Ve=Ve||Z,(se!==_||le!==g)&&(t.blendEquationSeparate(lt[se],lt[le]),_=se,g=le),(Y!==u||Z!==v||we!==M||Ve!==C)&&(t.blendFuncSeparate(P[Y],P[Z],P[we],P[Ve]),u=Y,v=Z,M=we,C=Ve),(wt.equals(A)===!1||Bt!==w)&&(t.blendColor(wt.r,wt.g,wt.b,Bt),A.copy(wt),w=Bt),x=I,L=!1}function $e(I,se){I.side===Ti?ue(t.CULL_FACE):fe(t.CULL_FACE);let Y=I.side===fn;se&&(Y=!Y),Ye(Y),I.blending===$o&&I.transparent===!1?We(cr):We(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Z=I.stencilWrite;s.setTest(Z),Z&&(s.setMask(I.stencilWriteMask),s.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),s.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ce(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(I){p!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),p=I)}function _e(I){I!==K1?(fe(t.CULL_FACE),I!==S&&(I===Xm?t.cullFace(t.BACK):I===Z1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),S=I}function st(I){I!==b&&(j&&t.lineWidth(I),b=I)}function Ce(I,se,Y){I?(fe(t.POLYGON_OFFSET_FILL),(B!==se||O!==Y)&&(t.polygonOffset(se,Y),B=se,O=Y)):ue(t.POLYGON_OFFSET_FILL)}function Pe(I){I?fe(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function R(I){I===void 0&&(I=t.TEXTURE0+X-1),D!==I&&(t.activeTexture(I),D=I)}function E(I,se,Y){Y===void 0&&(D===null?Y=t.TEXTURE0+X-1:Y=D);let Z=$[Y];Z===void 0&&(Z={type:void 0,texture:void 0},$[Y]=Z),(Z.type!==I||Z.texture!==se)&&(D!==Y&&(t.activeTexture(Y),D=Y),t.bindTexture(I,se||ie[I]),Z.type=I,Z.texture=se)}function z(){const I=$[D];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function He(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(I){Se.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Se.copy(I))}function ve(I){ze.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),ze.copy(I))}function Ie(I,se){let Y=l.get(se);Y===void 0&&(Y=new WeakMap,l.set(se,Y));let Z=Y.get(I);Z===void 0&&(Z=t.getUniformBlockIndex(se,I.name),Y.set(I,Z))}function ke(I,se){const Z=l.get(se).get(I);a.get(se)!==Z&&(t.uniformBlockBinding(se,Z,I.__bindingPointIndex),a.set(se,Z))}function pt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},D=null,$={},f={},h=new WeakMap,d=[],m=null,y=!1,x=null,_=null,u=null,v=null,g=null,M=null,C=null,A=new it(0,0,0),w=0,L=!1,p=null,S=null,b=null,B=null,O=null,Se.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:fe,disable:ue,bindFramebuffer:Te,drawBuffers:be,useProgram:Oe,setBlending:We,setMaterial:$e,setFlipSided:Ye,setCullFace:_e,setLineWidth:st,setPolygonOffset:Ce,setScissorTest:Pe,activeTexture:R,bindTexture:E,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:ee,texImage2D:me,texImage3D:He,updateUBOMapping:Ie,uniformBlockBinding:ke,texStorage2D:De,texStorage3D:re,texSubImage2D:J,texSubImage3D:de,compressedTexSubImage2D:te,compressedTexSubImage3D:he,scissor:Le,viewport:ve,reset:pt}}function Hg(t,e,n,i){const r=Xb(i);switch(n){case Nv:return t*e;case Ov:return t*e;case kv:return t*e*2;case Bv:return t*e/r.components*r.byteLength;case np:return t*e/r.components*r.byteLength;case zv:return t*e*2/r.components*r.byteLength;case ip:return t*e*2/r.components*r.byteLength;case Fv:return t*e*3/r.components*r.byteLength;case qn:return t*e*4/r.components*r.byteLength;case rp:return t*e*4/r.components*r.byteLength;case kl:case Bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zl:case Hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case md:case _d:return Math.max(t,16)*Math.max(e,8)/4;case pd:case gd:return Math.max(t,8)*Math.max(e,8)/2;case vd:case yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Md:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Td:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case wd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case bd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Id:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Vl:case Nd:case Fd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Hv:case Od:return Math.ceil(t/4)*Math.ceil(e/4)*8;case kd:case Bd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Xb(t){switch(t){case Ni:case Dv:return{byteLength:1,components:1};case pa:case Iv:case Ta:return{byteLength:2,components:1};case ep:case tp:return{byteLength:2,components:4};case Yr:case Jh:case Ci:return{byteLength:4,components:1};case Uv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function jb(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,f=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,E){return m?new OffscreenCanvas(R,E):Sc("canvas")}function x(R,E,z){let K=1;const ee=Pe(R);if((ee.width>z||ee.height>z)&&(K=z/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(K*ee.width),de=Math.floor(K*ee.height);h===void 0&&(h=y(J,de));const te=E?y(J,de):h;return te.width=J,te.height=de,te.getContext("2d").drawImage(R,0,0,J,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+de+")."),te}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function _(R){return R.generateMipmaps&&R.minFilter!==Nn&&R.minFilter!==Yn}function u(R){t.generateMipmap(R)}function v(R,E,z,K,ee=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=E;if(E===t.RED&&(z===t.FLOAT&&(J=t.R32F),z===t.HALF_FLOAT&&(J=t.R16F),z===t.UNSIGNED_BYTE&&(J=t.R8)),E===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.R8UI),z===t.UNSIGNED_SHORT&&(J=t.R16UI),z===t.UNSIGNED_INT&&(J=t.R32UI),z===t.BYTE&&(J=t.R8I),z===t.SHORT&&(J=t.R16I),z===t.INT&&(J=t.R32I)),E===t.RG&&(z===t.FLOAT&&(J=t.RG32F),z===t.HALF_FLOAT&&(J=t.RG16F),z===t.UNSIGNED_BYTE&&(J=t.RG8)),E===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(J=t.RG8UI),z===t.UNSIGNED_SHORT&&(J=t.RG16UI),z===t.UNSIGNED_INT&&(J=t.RG32UI),z===t.BYTE&&(J=t.RG8I),z===t.SHORT&&(J=t.RG16I),z===t.INT&&(J=t.RG32I)),E===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),E===t.RGBA){const de=ee?_c:Je.getTransfer(K);z===t.FLOAT&&(J=t.RGBA32F),z===t.HALF_FLOAT&&(J=t.RGBA16F),z===t.UNSIGNED_BYTE&&(J=de===ut?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function g(R,E){let z;return R?E===null||E===Yr||E===rs?z=t.DEPTH24_STENCIL8:E===Ci?z=t.DEPTH32F_STENCIL8:E===pa&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yr||E===rs?z=t.DEPTH_COMPONENT24:E===Ci?z=t.DEPTH_COMPONENT32F:E===pa&&(z=t.DEPTH_COMPONENT16),z}function M(R,E){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==Nn&&R.minFilter!==Yn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function C(R){const E=R.target;E.removeEventListener("dispose",C),w(E),E.isVideoTexture&&f.delete(E)}function A(R){const E=R.target;E.removeEventListener("dispose",A),p(E)}function w(R){const E=i.get(R);if(E.__webglInit===void 0)return;const z=R.source,K=d.get(z);if(K){const ee=K[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&L(R),Object.keys(K).length===0&&d.delete(z)}i.remove(R)}function L(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const z=R.source,K=d.get(z);delete K[E.__cacheKey],s.memory.textures--}function p(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let ee=0;ee<E.__webglFramebuffer[K].length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[K][ee]);else t.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)t.deleteFramebuffer(E.__webglFramebuffer[K]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const z=R.textures;for(let K=0,ee=z.length;K<ee;K++){const J=i.get(z[K]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),s.memory.textures--),i.remove(z[K])}i.remove(R)}let S=0;function b(){S=0}function B(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function O(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function X(R,E){const z=i.get(R);if(R.isVideoTexture&&st(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(z,R,E);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+E)}function j(R,E){const z=i.get(R);if(R.version>0&&z.__version!==R.version){ze(z,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+E)}function G(R,E){const z=i.get(R);if(R.version>0&&z.__version!==R.version){ze(z,R,E);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+E)}function q(R,E){const z=i.get(R);if(R.version>0&&z.__version!==R.version){W(z,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+E)}const D={[dd]:t.REPEAT,[Or]:t.CLAMP_TO_EDGE,[hd]:t.MIRRORED_REPEAT},$={[Nn]:t.NEAREST,[IT]:t.NEAREST_MIPMAP_NEAREST,[Ja]:t.NEAREST_MIPMAP_LINEAR,[Yn]:t.LINEAR,[Nu]:t.LINEAR_MIPMAP_NEAREST,[kr]:t.LINEAR_MIPMAP_LINEAR},Q={[kT]:t.NEVER,[WT]:t.ALWAYS,[BT]:t.LESS,[Vv]:t.LEQUAL,[zT]:t.EQUAL,[GT]:t.GEQUAL,[HT]:t.GREATER,[VT]:t.NOTEQUAL};function oe(R,E){if(E.type===Ci&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Yn||E.magFilter===Nu||E.magFilter===Ja||E.magFilter===kr||E.minFilter===Yn||E.minFilter===Nu||E.minFilter===Ja||E.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,D[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,D[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,D[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,$[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,$[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Q[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Nn||E.minFilter!==Ja&&E.minFilter!==kr||E.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Se(R,E){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",C));const K=E.source;let ee=d.get(K);ee===void 0&&(ee={},d.set(K,ee));const J=O(E);if(J!==R.__cacheKey){ee[J]===void 0&&(ee[J]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,z=!0),ee[J].usedTimes++;const de=ee[R.__cacheKey];de!==void 0&&(ee[R.__cacheKey].usedTimes--,de.usedTimes===0&&L(E)),R.__cacheKey=J,R.__webglTexture=ee[J].texture}return z}function ze(R,E,z){let K=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=t.TEXTURE_3D);const ee=Se(R,E),J=E.source;n.bindTexture(K,R.__webglTexture,t.TEXTURE0+z);const de=i.get(J);if(J.version!==de.__version||ee===!0){n.activeTexture(t.TEXTURE0+z);const te=Je.getPrimaries(Je.workingColorSpace),he=E.colorSpace===Qi?null:Je.getPrimaries(E.colorSpace),De=E.colorSpace===Qi||te===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let re=x(E.image,!1,r.maxTextureSize);re=Ce(E,re);const me=o.convert(E.format,E.colorSpace),He=o.convert(E.type);let Le=v(E.internalFormat,me,He,E.colorSpace,E.isVideoTexture);oe(K,E);let ve;const Ie=E.mipmaps,ke=E.isVideoTexture!==!0,pt=de.__version===void 0||ee===!0,I=J.dataReady,se=M(E,re);if(E.isDepthTexture)Le=g(E.format===os,E.type),pt&&(ke?n.texStorage2D(t.TEXTURE_2D,1,Le,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,me,He,null));else if(E.isDataTexture)if(Ie.length>0){ke&&pt&&n.texStorage2D(t.TEXTURE_2D,se,Le,Ie[0].width,Ie[0].height);for(let Y=0,Z=Ie.length;Y<Z;Y++)ve=Ie[Y],ke?I&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ve.width,ve.height,me,He,ve.data):n.texImage2D(t.TEXTURE_2D,Y,Le,ve.width,ve.height,0,me,He,ve.data);E.generateMipmaps=!1}else ke?(pt&&n.texStorage2D(t.TEXTURE_2D,se,Le,re.width,re.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,me,He,re.data)):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,me,He,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ke&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,Le,Ie[0].width,Ie[0].height,re.depth);for(let Y=0,Z=Ie.length;Y<Z;Y++)if(ve=Ie[Y],E.format!==qn)if(me!==null)if(ke){if(I)if(E.layerUpdates.size>0){const le=Hg(ve.width,ve.height,E.format,E.type);for(const we of E.layerUpdates){const Ve=ve.data.subarray(we*le/ve.data.BYTES_PER_ELEMENT,(we+1)*le/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,we,ve.width,ve.height,1,me,Ve,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,re.depth,me,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,Le,ve.width,ve.height,re.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,re.depth,me,He,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,Le,ve.width,ve.height,re.depth,0,me,He,ve.data)}else{ke&&pt&&n.texStorage2D(t.TEXTURE_2D,se,Le,Ie[0].width,Ie[0].height);for(let Y=0,Z=Ie.length;Y<Z;Y++)ve=Ie[Y],E.format!==qn?me!==null?ke?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,ve.width,ve.height,me,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,Le,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?I&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ve.width,ve.height,me,He,ve.data):n.texImage2D(t.TEXTURE_2D,Y,Le,ve.width,ve.height,0,me,He,ve.data)}else if(E.isDataArrayTexture)if(ke){if(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,Le,re.width,re.height,re.depth),I)if(E.layerUpdates.size>0){const Y=Hg(re.width,re.height,E.format,E.type);for(const Z of E.layerUpdates){const le=re.data.subarray(Z*Y/re.data.BYTES_PER_ELEMENT,(Z+1)*Y/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,re.width,re.height,1,me,He,le)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,me,He,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,re.width,re.height,re.depth,0,me,He,re.data);else if(E.isData3DTexture)ke?(pt&&n.texStorage3D(t.TEXTURE_3D,se,Le,re.width,re.height,re.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,me,He,re.data)):n.texImage3D(t.TEXTURE_3D,0,Le,re.width,re.height,re.depth,0,me,He,re.data);else if(E.isFramebufferTexture){if(pt)if(ke)n.texStorage2D(t.TEXTURE_2D,se,Le,re.width,re.height);else{let Y=re.width,Z=re.height;for(let le=0;le<se;le++)n.texImage2D(t.TEXTURE_2D,le,Le,Y,Z,0,me,He,null),Y>>=1,Z>>=1}}else if(Ie.length>0){if(ke&&pt){const Y=Pe(Ie[0]);n.texStorage2D(t.TEXTURE_2D,se,Le,Y.width,Y.height)}for(let Y=0,Z=Ie.length;Y<Z;Y++)ve=Ie[Y],ke?I&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,me,He,ve):n.texImage2D(t.TEXTURE_2D,Y,Le,me,He,ve);E.generateMipmaps=!1}else if(ke){if(pt){const Y=Pe(re);n.texStorage2D(t.TEXTURE_2D,se,Le,Y.width,Y.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,He,re)}else n.texImage2D(t.TEXTURE_2D,0,Le,me,He,re);_(E)&&u(K),de.__version=J.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function W(R,E,z){if(E.image.length!==6)return;const K=Se(R,E),ee=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const J=i.get(ee);if(ee.version!==J.__version||K===!0){n.activeTexture(t.TEXTURE0+z);const de=Je.getPrimaries(Je.workingColorSpace),te=E.colorSpace===Qi?null:Je.getPrimaries(E.colorSpace),he=E.colorSpace===Qi||de===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const De=E.isCompressedTexture||E.image[0].isCompressedTexture,re=E.image[0]&&E.image[0].isDataTexture,me=[];for(let Z=0;Z<6;Z++)!De&&!re?me[Z]=x(E.image[Z],!0,r.maxCubemapSize):me[Z]=re?E.image[Z].image:E.image[Z],me[Z]=Ce(E,me[Z]);const He=me[0],Le=o.convert(E.format,E.colorSpace),ve=o.convert(E.type),Ie=v(E.internalFormat,Le,ve,E.colorSpace),ke=E.isVideoTexture!==!0,pt=J.__version===void 0||K===!0,I=ee.dataReady;let se=M(E,He);oe(t.TEXTURE_CUBE_MAP,E);let Y;if(De){ke&&pt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,se,Ie,He.width,He.height);for(let Z=0;Z<6;Z++){Y=me[Z].mipmaps;for(let le=0;le<Y.length;le++){const we=Y[le];E.format!==qn?Le!==null?ke?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,we.width,we.height,Le,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Ie,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,we.width,we.height,Le,ve,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Ie,we.width,we.height,0,Le,ve,we.data)}}}else{if(Y=E.mipmaps,ke&&pt){Y.length>0&&se++;const Z=Pe(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,se,Ie,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(re){ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,me[Z].width,me[Z].height,Le,ve,me[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ie,me[Z].width,me[Z].height,0,Le,ve,me[Z].data);for(let le=0;le<Y.length;le++){const Ve=Y[le].image[Z].image;ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Ve.width,Ve.height,Le,ve,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Ie,Ve.width,Ve.height,0,Le,ve,Ve.data)}}else{ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Le,ve,me[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ie,Le,ve,me[Z]);for(let le=0;le<Y.length;le++){const we=Y[le];ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Le,ve,we.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Ie,Le,ve,we.image[Z])}}}_(E)&&u(t.TEXTURE_CUBE_MAP),J.__version=ee.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ie(R,E,z,K,ee,J){const de=o.convert(z.format,z.colorSpace),te=o.convert(z.type),he=v(z.internalFormat,de,te,z.colorSpace);if(!i.get(E).__hasExternalTextures){const re=Math.max(1,E.width>>J),me=Math.max(1,E.height>>J);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,J,he,re,me,E.depth,0,de,te,null):n.texImage2D(ee,J,he,re,me,0,de,te,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),_e(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,ee,i.get(z).__webglTexture,0,Ye(E)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,ee,i.get(z).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(R,E,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const K=E.depthTexture,ee=K&&K.isDepthTexture?K.type:null,J=g(E.stencilBuffer,ee),de=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=Ye(E);_e(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,J,E.width,E.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,J,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,R)}else{const K=E.textures;for(let ee=0;ee<K.length;ee++){const J=K[ee],de=o.convert(J.format,J.colorSpace),te=o.convert(J.type),he=v(J.internalFormat,de,te,J.colorSpace),De=Ye(E);z&&_e(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,De,he,E.width,E.height):_e(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De,he,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,he,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ue(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const K=i.get(E.depthTexture).__webglTexture,ee=Ye(E);if(E.depthTexture.format===Xo)_e(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(E.depthTexture.format===os)_e(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Te(R){const E=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){const ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),E.__depthDisposeCallback=ee}E.__boundDepthTexture=K}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ue(E.__webglFramebuffer,R)}else if(z){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=t.createRenderbuffer(),fe(E.__webglDepthbuffer[K],R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),fe(E.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(R,E,z){const K=i.get(R);E!==void 0&&ie(K.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&Te(R)}function Oe(R){const E=R.texture,z=i.get(R),K=i.get(E);R.addEventListener("dispose",A);const ee=R.textures,J=R.isWebGLCubeRenderTarget===!0,de=ee.length>1;if(de||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=E.version,s.memory.textures++),J){z.__webglFramebuffer=[];for(let te=0;te<6;te++)if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer[te]=[];for(let he=0;he<E.mipmaps.length;he++)z.__webglFramebuffer[te][he]=t.createFramebuffer()}else z.__webglFramebuffer[te]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){z.__webglFramebuffer=[];for(let te=0;te<E.mipmaps.length;te++)z.__webglFramebuffer[te]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(de)for(let te=0,he=ee.length;te<he;te++){const De=i.get(ee[te]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),s.memory.textures++)}if(R.samples>0&&_e(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let te=0;te<ee.length;te++){const he=ee[te];z.__webglColorRenderbuffer[te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[te]);const De=o.convert(he.format,he.colorSpace),re=o.convert(he.type),me=v(he.internalFormat,De,re,he.colorSpace,R.isXRRenderTarget===!0),He=Ye(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,me,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.RENDERBUFFER,z.__webglColorRenderbuffer[te])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),oe(t.TEXTURE_CUBE_MAP,E);for(let te=0;te<6;te++)if(E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)ie(z.__webglFramebuffer[te][he],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,he);else ie(z.__webglFramebuffer[te],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);_(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(de){for(let te=0,he=ee.length;te<he;te++){const De=ee[te],re=i.get(De);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),oe(t.TEXTURE_2D,De),ie(z.__webglFramebuffer,R,De,t.COLOR_ATTACHMENT0+te,t.TEXTURE_2D,0),_(De)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let te=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(te=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(te,K.__webglTexture),oe(te,E),E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)ie(z.__webglFramebuffer[he],R,E,t.COLOR_ATTACHMENT0,te,he);else ie(z.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,te,0);_(E)&&u(te),n.unbindTexture()}R.depthBuffer&&Te(R)}function lt(R){const E=R.textures;for(let z=0,K=E.length;z<K;z++){const ee=E[z];if(_(ee)){const J=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,de=i.get(ee).__webglTexture;n.bindTexture(J,de),u(J),n.unbindTexture()}}}const P=[],We=[];function $e(R){if(R.samples>0){if(_e(R)===!1){const E=R.textures,z=R.width,K=R.height;let ee=t.COLOR_BUFFER_BIT;const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(R),te=E.length>1;if(te)for(let he=0;he<E.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let he=0;he<E.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),te){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const De=i.get(E[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,z,K,0,0,z,K,ee,t.NEAREST),l===!0&&(P.length=0,We.length=0,P.push(t.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.resolveDepthBuffer===!1&&(P.push(J),We.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,We)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,P))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),te)for(let he=0;he<E.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,de.__webglColorRenderbuffer[he]);const De=i.get(E[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ye(R){return Math.min(r.maxSamples,R.samples)}function _e(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function st(R){const E=s.render.frame;f.get(R)!==E&&(f.set(R,E),R.update())}function Ce(R,E){const z=R.colorSpace,K=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==yr&&z!==Qi&&(Je.getTransfer(z)===ut?(K!==qn||ee!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),E}function Pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=b,this.setTexture2D=X,this.setTexture2DArray=j,this.setTexture3D=G,this.setTextureCube=q,this.rebindTextures=be,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=_e}function Yb(t,e){function n(i,r=Qi){let o;const s=Je.getTransfer(r);if(i===Ni)return t.UNSIGNED_BYTE;if(i===ep)return t.UNSIGNED_SHORT_4_4_4_4;if(i===tp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Uv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Dv)return t.BYTE;if(i===Iv)return t.SHORT;if(i===pa)return t.UNSIGNED_SHORT;if(i===Jh)return t.INT;if(i===Yr)return t.UNSIGNED_INT;if(i===Ci)return t.FLOAT;if(i===Ta)return t.HALF_FLOAT;if(i===Nv)return t.ALPHA;if(i===Fv)return t.RGB;if(i===qn)return t.RGBA;if(i===Ov)return t.LUMINANCE;if(i===kv)return t.LUMINANCE_ALPHA;if(i===Xo)return t.DEPTH_COMPONENT;if(i===os)return t.DEPTH_STENCIL;if(i===Bv)return t.RED;if(i===np)return t.RED_INTEGER;if(i===zv)return t.RG;if(i===ip)return t.RG_INTEGER;if(i===rp)return t.RGBA_INTEGER;if(i===kl||i===Bl||i===zl||i===Hl)if(s===ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===kl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===kl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pd||i===md||i===gd||i===_d)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===pd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===md)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_d)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vd||i===yd||i===xd)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===vd||i===yd)return s===ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===xd)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sd||i===Md||i===Ed||i===Td||i===wd||i===Ad||i===Cd||i===Rd||i===bd||i===Pd||i===Ld||i===Dd||i===Id||i===Ud)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Sd)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Md)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ed)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Td)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wd)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ad)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cd)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rd)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bd)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pd)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ld)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dd)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Id)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ud)return s===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vl||i===Nd||i===Fd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Vl)return s===ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hv||i===Od||i===kd||i===Bd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Vl)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Od)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class qb extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sl extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kb={type:"move"};class cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const x of e.hand.values()){const _=n.getJointPose(x,i),u=this._getHandJoint(c,x);_!==null&&(u.matrix.fromArray(_.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=_.radius),u.visible=_!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,y=.005;c.inputState.pinching&&d>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Sl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Zb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new dn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Oi({vertexShader:Zb,fragmentShader:Qb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ci(new ba(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class e2 extends fs{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,m=null,y=null;const x=new Jb,_=n.getContextAttributes();let u=null,v=null;const g=[],M=[],C=new et;let A=null;const w=new In;w.layers.enable(1),w.viewport=new Ot;const L=new In;L.layers.enable(2),L.viewport=new Ot;const p=[w,L],S=new qb;S.layers.enable(1),S.layers.enable(2);let b=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ie=g[W];return ie===void 0&&(ie=new cf,g[W]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(W){let ie=g[W];return ie===void 0&&(ie=new cf,g[W]=ie),ie.getGripSpace()},this.getHand=function(W){let ie=g[W];return ie===void 0&&(ie=new cf,g[W]=ie),ie.getHandSpace()};function O(W){const ie=M.indexOf(W.inputSource);if(ie===-1)return;const fe=g[ie];fe!==void 0&&(fe.update(W.inputSource,W.frame,c||s),fe.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",j);for(let W=0;W<g.length;W++){const ie=M[W];ie!==null&&(M[W]=null,g[W].disconnect(ie))}b=null,B=null,x.reset(),e.setRenderTarget(u),m=null,d=null,h=null,r=null,v=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",X),r.addEventListener("inputsourceschange",j),_.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ie={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new qr(m.framebufferWidth,m.framebufferHeight,{format:qn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ie=null,fe=null,ue=null;_.depth&&(ue=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=_.stencil?os:Xo,fe=_.stencil?rs:Yr);const Te={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:o};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Te),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new qr(d.textureWidth,d.textureHeight,{format:qn,type:Ni,depthTexture:new ny(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(W){for(let ie=0;ie<W.removed.length;ie++){const fe=W.removed[ie],ue=M.indexOf(fe);ue>=0&&(M[ue]=null,g[ue].disconnect(fe))}for(let ie=0;ie<W.added.length;ie++){const fe=W.added[ie];let ue=M.indexOf(fe);if(ue===-1){for(let be=0;be<g.length;be++)if(be>=M.length){M.push(fe),ue=be;break}else if(M[be]===null){M[be]=fe,ue=be;break}if(ue===-1)break}const Te=g[ue];Te&&Te.connect(fe)}}const G=new H,q=new H;function D(W,ie,fe){G.setFromMatrixPosition(ie.matrixWorld),q.setFromMatrixPosition(fe.matrixWorld);const ue=G.distanceTo(q),Te=ie.projectionMatrix.elements,be=fe.projectionMatrix.elements,Oe=Te[14]/(Te[10]-1),lt=Te[14]/(Te[10]+1),P=(Te[9]+1)/Te[5],We=(Te[9]-1)/Te[5],$e=(Te[8]-1)/Te[0],Ye=(be[8]+1)/be[0],_e=Oe*$e,st=Oe*Ye,Ce=ue/(-$e+Ye),Pe=Ce*-$e;if(ie.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Pe),W.translateZ(Ce),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Te[10]===-1)W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const R=Oe+Ce,E=lt+Ce,z=_e-Pe,K=st+(ue-Pe),ee=P*lt/E*R,J=We*lt/E*R;W.projectionMatrix.makePerspective(z,K,ee,J,R,E),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function $(W,ie){ie===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ie.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ie=W.near,fe=W.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(fe=x.depthFar)),S.near=L.near=w.near=ie,S.far=L.far=w.far=fe,(b!==S.near||B!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),b=S.near,B=S.far);const ue=W.parent,Te=S.cameras;$(S,ue);for(let be=0;be<Te.length;be++)$(Te[be],ue);Te.length===2?D(S,w,L):S.projectionMatrix.copy(w.projectionMatrix),Q(W,S,ue)};function Q(W,ie,fe){fe===null?W.matrix.copy(ie.matrixWorld):(W.matrix.copy(fe.matrixWorld),W.matrix.invert(),W.matrix.multiply(ie.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=zd*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let oe=null;function Se(W,ie){if(f=ie.getViewerPose(c||s),y=ie,f!==null){const fe=f.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let ue=!1;fe.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let be=0;be<fe.length;be++){const Oe=fe[be];let lt=null;if(m!==null)lt=m.getViewport(Oe);else{const We=h.getViewSubImage(d,Oe);lt=We.viewport,be===0&&(e.setRenderTargetTextures(v,We.colorTexture,d.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(v))}let P=p[be];P===void 0&&(P=new In,P.layers.enable(be),P.viewport=new Ot,p[be]=P),P.matrix.fromArray(Oe.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Oe.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(lt.x,lt.y,lt.width,lt.height),be===0&&(S.matrix.copy(P.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(P)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const be=h.getDepthInformation(fe[0]);be&&be.isValid&&be.texture&&x.init(e,be,r.renderState)}}for(let fe=0;fe<g.length;fe++){const ue=M[fe],Te=g[fe];ue!==null&&Te!==void 0&&Te.update(ue,ie,c||s)}oe&&oe(W,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),y=null}const ze=new ty;ze.setAnimationLoop(Se),this.setAnimationLoop=function(W){oe=W},this.dispose=function(){}}}const Cr=new Fi,t2=new Dt;function n2(t,e){function n(_,u){_.matrixAutoUpdate===!0&&_.updateMatrix(),u.value.copy(_.matrix)}function i(_,u){u.color.getRGB(_.fogColor.value,Zv(t)),u.isFog?(_.fogNear.value=u.near,_.fogFar.value=u.far):u.isFogExp2&&(_.fogDensity.value=u.density)}function r(_,u,v,g,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(_,u):u.isMeshToonMaterial?(o(_,u),h(_,u)):u.isMeshPhongMaterial?(o(_,u),f(_,u)):u.isMeshStandardMaterial?(o(_,u),d(_,u),u.isMeshPhysicalMaterial&&m(_,u,M)):u.isMeshMatcapMaterial?(o(_,u),y(_,u)):u.isMeshDepthMaterial?o(_,u):u.isMeshDistanceMaterial?(o(_,u),x(_,u)):u.isMeshNormalMaterial?o(_,u):u.isLineBasicMaterial?(s(_,u),u.isLineDashedMaterial&&a(_,u)):u.isPointsMaterial?l(_,u,v,g):u.isSpriteMaterial?c(_,u):u.isShadowMaterial?(_.color.value.copy(u.color),_.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(_,u){_.opacity.value=u.opacity,u.color&&_.diffuse.value.copy(u.color),u.emissive&&_.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.bumpMap&&(_.bumpMap.value=u.bumpMap,n(u.bumpMap,_.bumpMapTransform),_.bumpScale.value=u.bumpScale,u.side===fn&&(_.bumpScale.value*=-1)),u.normalMap&&(_.normalMap.value=u.normalMap,n(u.normalMap,_.normalMapTransform),_.normalScale.value.copy(u.normalScale),u.side===fn&&_.normalScale.value.negate()),u.displacementMap&&(_.displacementMap.value=u.displacementMap,n(u.displacementMap,_.displacementMapTransform),_.displacementScale.value=u.displacementScale,_.displacementBias.value=u.displacementBias),u.emissiveMap&&(_.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,_.emissiveMapTransform)),u.specularMap&&(_.specularMap.value=u.specularMap,n(u.specularMap,_.specularMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest);const v=e.get(u),g=v.envMap,M=v.envMapRotation;g&&(_.envMap.value=g,Cr.copy(M),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),_.envMapRotation.value.setFromMatrix4(t2.makeRotationFromEuler(Cr)),_.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=u.reflectivity,_.ior.value=u.ior,_.refractionRatio.value=u.refractionRatio),u.lightMap&&(_.lightMap.value=u.lightMap,_.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,_.lightMapTransform)),u.aoMap&&(_.aoMap.value=u.aoMap,_.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,_.aoMapTransform))}function s(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform))}function a(_,u){_.dashSize.value=u.dashSize,_.totalSize.value=u.dashSize+u.gapSize,_.scale.value=u.scale}function l(_,u,v,g){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.size.value=u.size*v,_.scale.value=g*.5,u.map&&(_.map.value=u.map,n(u.map,_.uvTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function c(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.rotation.value=u.rotation,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function f(_,u){_.specular.value.copy(u.specular),_.shininess.value=Math.max(u.shininess,1e-4)}function h(_,u){u.gradientMap&&(_.gradientMap.value=u.gradientMap)}function d(_,u){_.metalness.value=u.metalness,u.metalnessMap&&(_.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,_.metalnessMapTransform)),_.roughness.value=u.roughness,u.roughnessMap&&(_.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,_.roughnessMapTransform)),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)}function m(_,u,v){_.ior.value=u.ior,u.sheen>0&&(_.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),_.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(_.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,_.sheenColorMapTransform)),u.sheenRoughnessMap&&(_.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,_.sheenRoughnessMapTransform))),u.clearcoat>0&&(_.clearcoat.value=u.clearcoat,_.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(_.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,_.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(_.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===fn&&_.clearcoatNormalScale.value.negate())),u.dispersion>0&&(_.dispersion.value=u.dispersion),u.iridescence>0&&(_.iridescence.value=u.iridescence,_.iridescenceIOR.value=u.iridescenceIOR,_.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(_.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,_.iridescenceMapTransform)),u.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),u.transmission>0&&(_.transmission.value=u.transmission,_.transmissionSamplerMap.value=v.texture,_.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(_.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,_.transmissionMapTransform)),_.thickness.value=u.thickness,u.thicknessMap&&(_.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=u.attenuationDistance,_.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(_.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(_.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=u.specularIntensity,_.specularColor.value.copy(u.specularColor),u.specularColorMap&&(_.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,_.specularColorMapTransform)),u.specularIntensityMap&&(_.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,u){u.matcap&&(_.matcap.value=u.matcap)}function x(_,u){const v=e.get(u).light;_.referencePosition.value.setFromMatrixPosition(v.matrixWorld),_.nearDistance.value=v.shadow.camera.near,_.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function i2(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const M=g.program;i.uniformBlockBinding(v,M)}function c(v,g){let M=r[v.id];M===void 0&&(y(v),M=f(v),r[v.id]=M,v.addEventListener("dispose",_));const C=g.program;i.updateUBOMapping(v,C);const A=e.render.frame;o[v.id]!==A&&(d(v),o[v.id]=A)}function f(v){const g=h();v.__bindingPointIndex=g;const M=t.createBuffer(),C=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function h(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const g=r[v.id],M=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,w=M.length;A<w;A++){const L=Array.isArray(M[A])?M[A]:[M[A]];for(let p=0,S=L.length;p<S;p++){const b=L[p];if(m(b,A,p,C)===!0){const B=b.__offset,O=Array.isArray(b.value)?b.value:[b.value];let X=0;for(let j=0;j<O.length;j++){const G=O[j],q=x(G);typeof G=="number"||typeof G=="boolean"?(b.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,B+X,b.__data)):G.isMatrix3?(b.__data[0]=G.elements[0],b.__data[1]=G.elements[1],b.__data[2]=G.elements[2],b.__data[3]=0,b.__data[4]=G.elements[3],b.__data[5]=G.elements[4],b.__data[6]=G.elements[5],b.__data[7]=0,b.__data[8]=G.elements[6],b.__data[9]=G.elements[7],b.__data[10]=G.elements[8],b.__data[11]=0):(G.toArray(b.__data,X),X+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,b.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,M,C){const A=v.value,w=g+"_"+M;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{const L=C[w];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return C[w]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function y(v){const g=v.uniforms;let M=0;const C=16;for(let w=0,L=g.length;w<L;w++){const p=Array.isArray(g[w])?g[w]:[g[w]];for(let S=0,b=p.length;S<b;S++){const B=p[S],O=Array.isArray(B.value)?B.value:[B.value];for(let X=0,j=O.length;X<j;X++){const G=O[X],q=x(G),D=M%C,$=D%q.boundary,Q=D+$;M+=$,Q!==0&&C-Q<q.storage&&(M+=C-Q),B.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=q.storage}}}const A=M%C;return A>0&&(M+=C-A),v.__size=M,v.__cache={},this}function x(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function _(v){const g=v.target;g.removeEventListener("dispose",_);const M=s.indexOf(g.__bindingPointIndex);s.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete o[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:c,dispose:u}}class r2{constructor(e={}){const{canvas:n=XT(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;const m=new Uint32Array(4),y=new Int32Array(4);let x=null,_=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this.toneMapping=ur,this.toneMappingExposure=1;const g=this;let M=!1,C=0,A=0,w=null,L=-1,p=null;const S=new Ot,b=new Ot;let B=null;const O=new it(0);let X=0,j=n.width,G=n.height,q=1,D=null,$=null;const Q=new Ot(0,0,j,G),oe=new Ot(0,0,j,G);let Se=!1;const ze=new ey;let W=!1,ie=!1;const fe=new Dt,ue=new H,Te=new Ot,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function lt(){return w===null?q:1}let P=i;function We(T,U){return n.getContext(T,U)}try{const T={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qh}`),n.addEventListener("webglcontextlost",Y,!1),n.addEventListener("webglcontextrestored",Z,!1),n.addEventListener("webglcontextcreationerror",le,!1),P===null){const U="webgl2";if(P=We(U,T),P===null)throw We(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $e,Ye,_e,st,Ce,Pe,R,E,z,K,ee,J,de,te,he,De,re,me,He,Le,ve,Ie,ke,pt;function I(){$e=new uR(P),$e.init(),Ie=new Yb(P,$e),Ye=new iR(P,$e,e,Ie),_e=new $b(P),st=new hR(P),Ce=new Lb,Pe=new jb(P,$e,_e,Ce,Ye,Ie,st),R=new oR(g),E=new cR(g),z=new yw(P),ke=new tR(P,z),K=new fR(P,z,st,ke),ee=new mR(P,K,z,st),He=new pR(P,Ye,Pe),De=new rR(Ce),J=new Pb(g,R,E,$e,Ye,ke,De),de=new n2(g,Ce),te=new Ib,he=new Bb($e),me=new eR(g,R,E,_e,ee,d,l),re=new Wb(g,ee,Ye),pt=new i2(P,st,Ye,_e),Le=new nR(P,$e,st),ve=new dR(P,$e,st),st.programs=J.programs,g.capabilities=Ye,g.extensions=$e,g.properties=Ce,g.renderLists=te,g.shadowMap=re,g.state=_e,g.info=st}I();const se=new e2(g,P);this.xr=se,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=$e.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=$e.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(j,G,!1))},this.getSize=function(T){return T.set(j,G)},this.setSize=function(T,U,F=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,G=U,n.width=Math.floor(T*q),n.height=Math.floor(U*q),F===!0&&(n.style.width=T+"px",n.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(j*q,G*q).floor()},this.setDrawingBufferSize=function(T,U,F){j=T,G=U,q=F,n.width=Math.floor(T*F),n.height=Math.floor(U*F),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,U,F,k){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,U,F,k),_e.viewport(S.copy(Q).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(oe)},this.setScissor=function(T,U,F,k){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,U,F,k),_e.scissor(b.copy(oe).multiplyScalar(q).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(T){_e.setScissorTest(Se=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(T=!0,U=!0,F=!0){let k=0;if(T){let N=!1;if(w!==null){const ae=w.texture.format;N=ae===rp||ae===ip||ae===np}if(N){const ae=w.texture.type,pe=ae===Ni||ae===Yr||ae===pa||ae===rs||ae===ep||ae===tp,ye=me.getClearColor(),xe=me.getClearAlpha(),Ae=ye.r,Re=ye.g,Me=ye.b;pe?(m[0]=Ae,m[1]=Re,m[2]=Me,m[3]=xe,P.clearBufferuiv(P.COLOR,0,m)):(y[0]=Ae,y[1]=Re,y[2]=Me,y[3]=xe,P.clearBufferiv(P.COLOR,0,y))}else k|=P.COLOR_BUFFER_BIT}U&&(k|=P.DEPTH_BUFFER_BIT),F&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Y,!1),n.removeEventListener("webglcontextrestored",Z,!1),n.removeEventListener("webglcontextcreationerror",le,!1),te.dispose(),he.dispose(),Ce.dispose(),R.dispose(),E.dispose(),ee.dispose(),ke.dispose(),pt.dispose(),J.dispose(),se.dispose(),se.removeEventListener("sessionstart",Jn),se.removeEventListener("sessionend",lp),xr.stop()};function Y(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=st.autoReset,U=re.enabled,F=re.autoUpdate,k=re.needsUpdate,N=re.type;I(),st.autoReset=T,re.enabled=U,re.autoUpdate=F,re.needsUpdate=k,re.type=N}function le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function we(T){const U=T.target;U.removeEventListener("dispose",we),Ve(U)}function Ve(T){wt(T),Ce.remove(T)}function wt(T){const U=Ce.get(T).programs;U!==void 0&&(U.forEach(function(F){J.releaseProgram(F)}),T.isShaderMaterial&&J.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,F,k,N,ae){U===null&&(U=be);const pe=N.isMesh&&N.matrixWorld.determinant()<0,ye=ay(T,U,F,k,N);_e.setMaterial(k,pe);let xe=F.index,Ae=1;if(k.wireframe===!0){if(xe=K.getWireframeAttribute(F),xe===void 0)return;Ae=2}const Re=F.drawRange,Me=F.attributes.position;let Ke=Re.start*Ae,vt=(Re.start+Re.count)*Ae;ae!==null&&(Ke=Math.max(Ke,ae.start*Ae),vt=Math.min(vt,(ae.start+ae.count)*Ae)),xe!==null?(Ke=Math.max(Ke,0),vt=Math.min(vt,xe.count)):Me!=null&&(Ke=Math.max(Ke,0),vt=Math.min(vt,Me.count));const yt=vt-Ke;if(yt<0||yt===1/0)return;ke.setup(N,k,ye,F,xe);let pn,Ze=Le;if(xe!==null&&(pn=z.get(xe),Ze=ve,Ze.setIndex(pn)),N.isMesh)k.wireframe===!0?(_e.setLineWidth(k.wireframeLinewidth*lt()),Ze.setMode(P.LINES)):Ze.setMode(P.TRIANGLES);else if(N.isLine){let Ee=k.linewidth;Ee===void 0&&(Ee=1),_e.setLineWidth(Ee*lt()),N.isLineSegments?Ze.setMode(P.LINES):N.isLineLoop?Ze.setMode(P.LINE_LOOP):Ze.setMode(P.LINE_STRIP)}else N.isPoints?Ze.setMode(P.POINTS):N.isSprite&&Ze.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ze.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))Ze.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ee=N._multiDrawStarts,zt=N._multiDrawCounts,Qe=N._multiDrawCount,zn=xe?z.get(xe).bytesPerElement:1,Jr=Ce.get(k).currentProgram.getUniforms();for(let mn=0;mn<Qe;mn++)Jr.setValue(P,"_gl_DrawID",mn),Ze.render(Ee[mn]/zn,zt[mn])}else if(N.isInstancedMesh)Ze.renderInstances(Ke,yt,N.count);else if(F.isInstancedBufferGeometry){const Ee=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,zt=Math.min(F.instanceCount,Ee);Ze.renderInstances(Ke,yt,zt)}else Ze.render(Ke,yt)};function Bt(T,U,F){T.transparent===!0&&T.side===Ti&&T.forceSinglePass===!1?(T.side=fn,T.needsUpdate=!0,La(T,U,F),T.side=mr,T.needsUpdate=!0,La(T,U,F),T.side=Ti):La(T,U,F)}this.compile=function(T,U,F=null){F===null&&(F=T),_=he.get(F),_.init(U),v.push(_),F.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(_.pushLight(N),N.castShadow&&_.pushShadow(N))}),T!==F&&T.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(_.pushLight(N),N.castShadow&&_.pushShadow(N))}),_.setupLights();const k=new Set;return T.traverse(function(N){const ae=N.material;if(ae)if(Array.isArray(ae))for(let pe=0;pe<ae.length;pe++){const ye=ae[pe];Bt(ye,F,N),k.add(ye)}else Bt(ae,F,N),k.add(ae)}),v.pop(),_=null,k},this.compileAsync=function(T,U,F=null){const k=this.compile(T,U,F);return new Promise(N=>{function ae(){if(k.forEach(function(pe){Ce.get(pe).currentProgram.isReady()&&k.delete(pe)}),k.size===0){N(T);return}setTimeout(ae,10)}$e.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let qe=null;function pi(T){qe&&qe(T)}function Jn(){xr.stop()}function lp(){xr.start()}const xr=new ty;xr.setAnimationLoop(pi),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(T){qe=T,se.setAnimationLoop(T),T===null?xr.stop():xr.start()},se.addEventListener("sessionstart",Jn),se.addEventListener("sessionend",lp),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(U),U=se.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,U,w),_=he.get(T,v.length),_.init(U),v.push(_),fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ze.setFromProjectionMatrix(fe),ie=this.localClippingEnabled,W=De.init(this.clippingPlanes,ie),x=te.get(T,u.length),x.init(),u.push(x),se.enabled===!0&&se.isPresenting===!0){const ae=g.xr.getDepthSensingMesh();ae!==null&&eu(ae,U,-1/0,g.sortObjects)}eu(T,U,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(D,$),Oe=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Oe&&me.addToRenderList(x,T),this.info.render.frame++,W===!0&&De.beginShadows();const F=_.state.shadowsArray;re.render(F,T,U),W===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=x.opaque,N=x.transmissive;if(_.setupLights(),U.isArrayCamera){const ae=U.cameras;if(N.length>0)for(let pe=0,ye=ae.length;pe<ye;pe++){const xe=ae[pe];up(k,N,T,xe)}Oe&&me.render(T);for(let pe=0,ye=ae.length;pe<ye;pe++){const xe=ae[pe];cp(x,T,xe,xe.viewport)}}else N.length>0&&up(k,N,T,U),Oe&&me.render(T),cp(x,T,U);w!==null&&(Pe.updateMultisampleRenderTarget(w),Pe.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(g,T,U),ke.resetDefaultState(),L=-1,p=null,v.pop(),v.length>0?(_=v[v.length-1],W===!0&&De.setGlobalState(g.clippingPlanes,_.state.camera)):_=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function eu(T,U,F,k){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)F=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ze.intersectsSprite(T)){k&&Te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const pe=ee.update(T),ye=T.material;ye.visible&&x.push(T,pe,ye,F,Te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ze.intersectsObject(T))){const pe=ee.update(T),ye=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Te.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Te.copy(pe.boundingSphere.center)),Te.applyMatrix4(T.matrixWorld).applyMatrix4(fe)),Array.isArray(ye)){const xe=pe.groups;for(let Ae=0,Re=xe.length;Ae<Re;Ae++){const Me=xe[Ae],Ke=ye[Me.materialIndex];Ke&&Ke.visible&&x.push(T,pe,Ke,F,Te.z,Me)}}else ye.visible&&x.push(T,pe,ye,F,Te.z,null)}}const ae=T.children;for(let pe=0,ye=ae.length;pe<ye;pe++)eu(ae[pe],U,F,k)}function cp(T,U,F,k){const N=T.opaque,ae=T.transmissive,pe=T.transparent;_.setupLightsView(F),W===!0&&De.setGlobalState(g.clippingPlanes,F),k&&_e.viewport(S.copy(k)),N.length>0&&Pa(N,U,F),ae.length>0&&Pa(ae,U,F),pe.length>0&&Pa(pe,U,F),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function up(T,U,F,k){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[k.id]===void 0&&(_.state.transmissionRenderTarget[k.id]=new qr(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?Ta:Ni,minFilter:kr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ae=_.state.transmissionRenderTarget[k.id],pe=k.viewport||S;ae.setSize(pe.z,pe.w);const ye=g.getRenderTarget();g.setRenderTarget(ae),g.getClearColor(O),X=g.getClearAlpha(),X<1&&g.setClearColor(16777215,.5),g.clear(),Oe&&me.render(F);const xe=g.toneMapping;g.toneMapping=ur;const Ae=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),_.setupLightsView(k),W===!0&&De.setGlobalState(g.clippingPlanes,k),Pa(T,F,k),Pe.updateMultisampleRenderTarget(ae),Pe.updateRenderTargetMipmap(ae),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Me=0,Ke=U.length;Me<Ke;Me++){const vt=U[Me],yt=vt.object,pn=vt.geometry,Ze=vt.material,Ee=vt.group;if(Ze.side===Ti&&yt.layers.test(k.layers)){const zt=Ze.side;Ze.side=fn,Ze.needsUpdate=!0,fp(yt,F,k,pn,Ze,Ee),Ze.side=zt,Ze.needsUpdate=!0,Re=!0}}Re===!0&&(Pe.updateMultisampleRenderTarget(ae),Pe.updateRenderTargetMipmap(ae))}g.setRenderTarget(ye),g.setClearColor(O,X),Ae!==void 0&&(k.viewport=Ae),g.toneMapping=xe}function Pa(T,U,F){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ae=T.length;N<ae;N++){const pe=T[N],ye=pe.object,xe=pe.geometry,Ae=k===null?pe.material:k,Re=pe.group;ye.layers.test(F.layers)&&fp(ye,U,F,xe,Ae,Re)}}function fp(T,U,F,k,N,ae){T.onBeforeRender(g,U,F,k,N,ae),T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(g,U,F,k,T,ae),N.transparent===!0&&N.side===Ti&&N.forceSinglePass===!1?(N.side=fn,N.needsUpdate=!0,g.renderBufferDirect(F,U,k,N,T,ae),N.side=mr,N.needsUpdate=!0,g.renderBufferDirect(F,U,k,N,T,ae),N.side=Ti):g.renderBufferDirect(F,U,k,N,T,ae),T.onAfterRender(g,U,F,k,N,ae)}function La(T,U,F){U.isScene!==!0&&(U=be);const k=Ce.get(T),N=_.state.lights,ae=_.state.shadowsArray,pe=N.state.version,ye=J.getParameters(T,N.state,ae,U,F),xe=J.getProgramCacheKey(ye);let Ae=k.programs;k.environment=T.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(T.isMeshStandardMaterial?E:R).get(T.envMap||k.environment),k.envMapRotation=k.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ae===void 0&&(T.addEventListener("dispose",we),Ae=new Map,k.programs=Ae);let Re=Ae.get(xe);if(Re!==void 0){if(k.currentProgram===Re&&k.lightsStateVersion===pe)return hp(T,ye),Re}else ye.uniforms=J.getUniforms(T),T.onBeforeCompile(ye,g),Re=J.acquireProgram(ye,xe),Ae.set(xe,Re),k.uniforms=ye.uniforms;const Me=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Me.clippingPlanes=De.uniform),hp(T,ye),k.needsLights=cy(T),k.lightsStateVersion=pe,k.needsLights&&(Me.ambientLightColor.value=N.state.ambient,Me.lightProbe.value=N.state.probe,Me.directionalLights.value=N.state.directional,Me.directionalLightShadows.value=N.state.directionalShadow,Me.spotLights.value=N.state.spot,Me.spotLightShadows.value=N.state.spotShadow,Me.rectAreaLights.value=N.state.rectArea,Me.ltc_1.value=N.state.rectAreaLTC1,Me.ltc_2.value=N.state.rectAreaLTC2,Me.pointLights.value=N.state.point,Me.pointLightShadows.value=N.state.pointShadow,Me.hemisphereLights.value=N.state.hemi,Me.directionalShadowMap.value=N.state.directionalShadowMap,Me.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Me.spotShadowMap.value=N.state.spotShadowMap,Me.spotLightMatrix.value=N.state.spotLightMatrix,Me.spotLightMap.value=N.state.spotLightMap,Me.pointShadowMap.value=N.state.pointShadowMap,Me.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Re,k.uniformsList=null,Re}function dp(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Gl.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function hp(T,U){const F=Ce.get(T);F.outputColorSpace=U.outputColorSpace,F.batching=U.batching,F.batchingColor=U.batchingColor,F.instancing=U.instancing,F.instancingColor=U.instancingColor,F.instancingMorph=U.instancingMorph,F.skinning=U.skinning,F.morphTargets=U.morphTargets,F.morphNormals=U.morphNormals,F.morphColors=U.morphColors,F.morphTargetsCount=U.morphTargetsCount,F.numClippingPlanes=U.numClippingPlanes,F.numIntersection=U.numClipIntersection,F.vertexAlphas=U.vertexAlphas,F.vertexTangents=U.vertexTangents,F.toneMapping=U.toneMapping}function ay(T,U,F,k,N){U.isScene!==!0&&(U=be),Pe.resetTextureUnits();const ae=U.fog,pe=k.isMeshStandardMaterial?U.environment:null,ye=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:yr,xe=(k.isMeshStandardMaterial?E:R).get(k.envMap||pe),Ae=k.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Re=!!F.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Me=!!F.morphAttributes.position,Ke=!!F.morphAttributes.normal,vt=!!F.morphAttributes.color;let yt=ur;k.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(yt=g.toneMapping);const pn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ze=pn!==void 0?pn.length:0,Ee=Ce.get(k),zt=_.state.lights;if(W===!0&&(ie===!0||T!==p)){const Rn=T===p&&k.id===L;De.setState(k,T,Rn)}let Qe=!1;k.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==zt.state.version||Ee.outputColorSpace!==ye||N.isBatchedMesh&&Ee.batching===!1||!N.isBatchedMesh&&Ee.batching===!0||N.isBatchedMesh&&Ee.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ee.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ee.instancing===!1||!N.isInstancedMesh&&Ee.instancing===!0||N.isSkinnedMesh&&Ee.skinning===!1||!N.isSkinnedMesh&&Ee.skinning===!0||N.isInstancedMesh&&Ee.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ee.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ee.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ee.instancingMorph===!1&&N.morphTexture!==null||Ee.envMap!==xe||k.fog===!0&&Ee.fog!==ae||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==De.numPlanes||Ee.numIntersection!==De.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==Re||Ee.morphTargets!==Me||Ee.morphNormals!==Ke||Ee.morphColors!==vt||Ee.toneMapping!==yt||Ee.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,Ee.__version=k.version);let zn=Ee.currentProgram;Qe===!0&&(zn=La(k,U,N));let Jr=!1,mn=!1,tu=!1;const At=zn.getUniforms(),Bi=Ee.uniforms;if(_e.useProgram(zn.program)&&(Jr=!0,mn=!0,tu=!0),k.id!==L&&(L=k.id,mn=!0),Jr||p!==T){At.setValue(P,"projectionMatrix",T.projectionMatrix),At.setValue(P,"viewMatrix",T.matrixWorldInverse);const Rn=At.map.cameraPosition;Rn!==void 0&&Rn.setValue(P,ue.setFromMatrixPosition(T.matrixWorld)),Ye.logarithmicDepthBuffer&&At.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&At.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),p!==T&&(p=T,mn=!0,tu=!0)}if(N.isSkinnedMesh){At.setOptional(P,N,"bindMatrix"),At.setOptional(P,N,"bindMatrixInverse");const Rn=N.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),At.setValue(P,"boneTexture",Rn.boneTexture,Pe))}N.isBatchedMesh&&(At.setOptional(P,N,"batchingTexture"),At.setValue(P,"batchingTexture",N._matricesTexture,Pe),At.setOptional(P,N,"batchingIdTexture"),At.setValue(P,"batchingIdTexture",N._indirectTexture,Pe),At.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&At.setValue(P,"batchingColorTexture",N._colorsTexture,Pe));const nu=F.morphAttributes;if((nu.position!==void 0||nu.normal!==void 0||nu.color!==void 0)&&He.update(N,F,zn),(mn||Ee.receiveShadow!==N.receiveShadow)&&(Ee.receiveShadow=N.receiveShadow,At.setValue(P,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Bi.envMap.value=xe,Bi.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Bi.envMapIntensity.value=U.environmentIntensity),mn&&(At.setValue(P,"toneMappingExposure",g.toneMappingExposure),Ee.needsLights&&ly(Bi,tu),ae&&k.fog===!0&&de.refreshFogUniforms(Bi,ae),de.refreshMaterialUniforms(Bi,k,q,G,_.state.transmissionRenderTarget[T.id]),Gl.upload(P,dp(Ee),Bi,Pe)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Gl.upload(P,dp(Ee),Bi,Pe),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&At.setValue(P,"center",N.center),At.setValue(P,"modelViewMatrix",N.modelViewMatrix),At.setValue(P,"normalMatrix",N.normalMatrix),At.setValue(P,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Rn=k.uniformsGroups;for(let iu=0,uy=Rn.length;iu<uy;iu++){const pp=Rn[iu];pt.update(pp,zn),pt.bind(pp,zn)}}return zn}function ly(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function cy(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,U,F){Ce.get(T.texture).__webglTexture=U,Ce.get(T.depthTexture).__webglTexture=F;const k=Ce.get(T);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=F===void 0,k.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const F=Ce.get(T);F.__webglFramebuffer=U,F.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,F=0){w=T,C=U,A=F;let k=!0,N=null,ae=!1,pe=!1;if(T){const xe=Ce.get(T);if(xe.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(P.FRAMEBUFFER,null),k=!1;else if(xe.__webglFramebuffer===void 0)Pe.setupRenderTarget(T);else if(xe.__hasExternalTextures)Pe.rebindTextures(T,Ce.get(T.texture).__webglTexture,Ce.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Me=T.depthTexture;if(xe.__boundDepthTexture!==Me){if(Me!==null&&Ce.has(Me)&&(T.width!==Me.image.width||T.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(T)}}const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(pe=!0);const Re=Ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?N=Re[U][F]:N=Re[U],ae=!0):T.samples>0&&Pe.useMultisampledRTT(T)===!1?N=Ce.get(T).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[F]:N=Re,S.copy(T.viewport),b.copy(T.scissor),B=T.scissorTest}else S.copy(Q).multiplyScalar(q).floor(),b.copy(oe).multiplyScalar(q).floor(),B=Se;if(_e.bindFramebuffer(P.FRAMEBUFFER,N)&&k&&_e.drawBuffers(T,N),_e.viewport(S),_e.scissor(b),_e.setScissorTest(B),ae){const xe=Ce.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,F)}else if(pe){const xe=Ce.get(T.texture),Ae=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.__webglTexture,F||0,Ae)}L=-1},this.readRenderTargetPixels=function(T,U,F,k,N,ae,pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){_e.bindFramebuffer(P.FRAMEBUFFER,ye);try{const xe=T.texture,Ae=xe.format,Re=xe.type;if(!Ye.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-k&&F>=0&&F<=T.height-N&&P.readPixels(U,F,k,N,Ie.convert(Ae),Ie.convert(Re),ae)}finally{const xe=w!==null?Ce.get(w).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(T,U,F,k,N,ae,pe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&pe!==void 0&&(ye=ye[pe]),ye){_e.bindFramebuffer(P.FRAMEBUFFER,ye);try{const xe=T.texture,Ae=xe.format,Re=xe.type;if(!Ye.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-k&&F>=0&&F<=T.height-N){const Me=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Me),P.bufferData(P.PIXEL_PACK_BUFFER,ae.byteLength,P.STREAM_READ),P.readPixels(U,F,k,N,Ie.convert(Ae),Ie.convert(Re),0),P.flush();const Ke=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await jT(P,Ke,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Me),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ae)}finally{P.deleteBuffer(Me),P.deleteSync(Ke)}return ae}}finally{const xe=w!==null?Ce.get(w).__webglFramebuffer:null;_e.bindFramebuffer(P.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(T,U=null,F=0){T.isTexture!==!0&&(Xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const k=Math.pow(2,-F),N=Math.floor(T.image.width*k),ae=Math.floor(T.image.height*k),pe=U!==null?U.x:0,ye=U!==null?U.y:0;Pe.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,F,0,0,pe,ye,N,ae),_e.unbindTexture()},this.copyTextureToTexture=function(T,U,F=null,k=null,N=0){T.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1],U=arguments[2],N=arguments[3]||0,F=null);let ae,pe,ye,xe,Ae,Re;F!==null?(ae=F.max.x-F.min.x,pe=F.max.y-F.min.y,ye=F.min.x,xe=F.min.y):(ae=T.image.width,pe=T.image.height,ye=0,xe=0),k!==null?(Ae=k.x,Re=k.y):(Ae=0,Re=0);const Me=Ie.convert(U.format),Ke=Ie.convert(U.type);Pe.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const vt=P.getParameter(P.UNPACK_ROW_LENGTH),yt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),pn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ze=P.getParameter(P.UNPACK_SKIP_ROWS),Ee=P.getParameter(P.UNPACK_SKIP_IMAGES),zt=T.isCompressedTexture?T.mipmaps[N]:T.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,zt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,zt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,xe),T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,Ae,Re,ae,pe,Me,Ke,zt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,Ae,Re,zt.width,zt.height,Me,zt.data):P.texSubImage2D(P.TEXTURE_2D,N,Ae,Re,ae,pe,Me,Ke,zt),P.pixelStorei(P.UNPACK_ROW_LENGTH,vt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,yt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ze),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ee),N===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(T,U,F=null,k=null,N=0){T.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,k=arguments[1]||null,T=arguments[2],U=arguments[3],N=arguments[4]||0);let ae,pe,ye,xe,Ae,Re,Me,Ke,vt;const yt=T.isCompressedTexture?T.mipmaps[N]:T.image;F!==null?(ae=F.max.x-F.min.x,pe=F.max.y-F.min.y,ye=F.max.z-F.min.z,xe=F.min.x,Ae=F.min.y,Re=F.min.z):(ae=yt.width,pe=yt.height,ye=yt.depth,xe=0,Ae=0,Re=0),k!==null?(Me=k.x,Ke=k.y,vt=k.z):(Me=0,Ke=0,vt=0);const pn=Ie.convert(U.format),Ze=Ie.convert(U.type);let Ee;if(U.isData3DTexture)Pe.setTexture3D(U,0),Ee=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Pe.setTexture2DArray(U,0),Ee=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const zt=P.getParameter(P.UNPACK_ROW_LENGTH),Qe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),zn=P.getParameter(P.UNPACK_SKIP_PIXELS),Jr=P.getParameter(P.UNPACK_SKIP_ROWS),mn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,yt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,yt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ae),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Re),T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Ee,N,Me,Ke,vt,ae,pe,ye,pn,Ze,yt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Ee,N,Me,Ke,vt,ae,pe,ye,pn,yt.data):P.texSubImage3D(Ee,N,Me,Ke,vt,ae,pe,ye,pn,Ze,yt),P.pixelStorei(P.UNPACK_ROW_LENGTH,zt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Qe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,zn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Jr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,mn),N===0&&U.generateMipmaps&&P.generateMipmap(Ee),_e.unbindTexture()},this.initRenderTarget=function(T){Ce.get(T).__webglFramebuffer===void 0&&Pe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Pe.setTextureCube(T,0):T.isData3DTexture?Pe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Pe.setTexture2DArray(T,0):Pe.setTexture2D(T,0),_e.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,_e.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===op?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===Zc?"display-p3":"srgb"}}class o2 extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qh);const s2=`void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,a2=`void main() {
  gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
}
`,l2=async()=>{const t=document.getElementById("three-app-root"),e=new r2({antialias:!0});e.setPixelRatio(window.devicePixelRatio),e.localClippingEnabled=!0;const n=t.offsetWidth,i=t.offsetHeight;console.log({w:n,h:i}),e.setSize(n,i),t.appendChild(e.domElement);const r=new In(45,n/i,.1,50);r.position.z=5;const o=new o2;o.visible=!1,o.add(r);const s=()=>{o.visible=!0};e.setAnimationLoop(()=>{e.render(o,r)});const a=new ba(1,1),l={vertexShader:s2,fragmentShader:a2},c=new Oi(l),f=new ci(a,c);o.add(f);const h=()=>{const d=t.offsetWidth,m=t.offsetHeight;e.setSize(d,m),r.aspect=d/m,r.updateProjectionMatrix()};return window.addEventListener("resize",h),{ready:s}},c2=()=>tt.jsx("div",{children:"App"}),u2=PM`
  // TODO
`,f2=B1(Zh({palette:{mode:"dark"}})),d2=async()=>{const t=await l2();ev(document.getElementById("react-root")).render(tt.jsx(Ue.StrictMode,{children:tt.jsxs(G1,{theme:f2,children:[tt.jsx(q1,{}),tt.jsx(Av,{styles:u2}),tt.jsx(c2,{threeAppActions:t})]})})),t.ready()};d2();
