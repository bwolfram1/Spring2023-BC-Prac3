function y(){}function Q(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function P(){return Object.create(null)}function b(t){t.forEach(W)}function j(t){return typeof t=="function"}function ht(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let w;function mt(t,e){return w||(w=document.createElement("a")),w.href=e,t===w.href}function R(t){return Object.keys(t).length===0}function U(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function pt(t,e,n){t.$$.on_destroy.push(U(e,n))}function yt(t,e,n,i){if(t){const r=q(t,e,n,i);return t[0](r)}}function q(t,e,n,i){return t[1]&&i?Q(n.ctx.slice(),t[1](i(e))):n.ctx}function gt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function bt(t,e,n,i,r,o){if(r){const s=q(e,n,i,o);t.p(s,r)}}function xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function $t(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function wt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function vt(t){const e={};for(const n in t)e[n]=!0;return e}function Et(t,e,n){return t.set(n),e}function kt(t){return t&&j(t.destroy)?t.destroy:y}let k=!1;function V(){k=!0}function X(){k=!1}function Y(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Z(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:Y(1,r,$=>e[n[$]].claim_order,l))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const o=[],s=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);u>=c;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);o.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<o.length&&s[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(s[c],f)}}function tt(t,e){t.appendChild(e)}function et(t,e){if(k){for(Z(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){k&&!n?et(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function B(t){t.parentNode&&t.parentNode.removeChild(t)}function At(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function D(t){return document.createElement(t)}function nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function M(t){return document.createTextNode(t)}function Ct(){return M(" ")}function St(){return M("")}function L(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function I(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function jt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:I(t,i,e[i])}function Mt(t,e){for(const n in e)I(t,n,e[n])}function it(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,e,n,i,r=!1){rt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function H(t,e,n,i){return F(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Ot(t,e,n){return H(t,e,n,D)}function zt(t,e,n){return H(t,e,n,nt)}function st(t,e){return F(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>M(e),!0)}function Pt(t){return st(t," ")}function Lt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Tt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let v;function ct(){if(v===void 0){v=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{v=!0}}return v}function Wt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=D("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=ct();let o;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=L(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=L(i.contentWindow,"resize",e),e()}),tt(t,i),()=>{(r||o&&i.contentWindow)&&o(),B(i)}}function qt(t,e,n){t.classList[n?"add":"remove"](e)}function ot(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Bt(t,e){return new t(e)}let g;function p(t){g=t}function x(){if(!g)throw new Error("Function called outside component initialization");return g}function Dt(t){x().$$.on_mount.push(t)}function It(t){x().$$.after_update.push(t)}function Ft(){const t=x();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=ot(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}function Ht(t,e){return x().$$.context.set(t,e),e}function Gt(t){return x().$$.context.get(t)}function Jt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const h=[],T=[];let m=[];const A=[],G=Promise.resolve();let C=!1;function J(){C||(C=!0,G.then(K))}function Kt(){return J(),G}function S(t){m.push(t)}function Qt(t){A.push(t)}const N=new Set;let _=0;function K(){if(_!==0)return;const t=g;do{try{for(;_<h.length;){const e=h[_];_++,p(e),ut(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;T.length;)T.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];N.has(n)||(N.add(n),n())}m.length=0}while(h.length);for(;A.length;)A.pop()();C=!1,N.clear(),p(t)}function ut(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function lt(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const E=new Set;let d;function Rt(){d={r:0,c:[],p:d}}function Ut(){d.r||b(d.c),d=d.p}function at(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Vt(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Xt(t,e){const n={},i={},r={$$scope:1};let o=t.length;for(;o--;){const s=t[o],u=e[o];if(u){for(const c in s)c in u||(i[c]=1);for(const c in u)r[c]||(n[c]=u[c],r[c]=1);t[o]=u}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Yt(t){return typeof t=="object"&&t!==null?t:{}}function Zt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function te(t){t&&t.c()}function ee(t,e){t&&t.l(e)}function ft(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||S(()=>{const s=t.$$.on_mount.map(W).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...s):b(s),t.$$.on_mount=[]}),o.forEach(S)}function dt(t,e){const n=t.$$;n.fragment!==null&&(lt(n.after_update),b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function _t(t,e){t.$$.dirty[0]===-1&&(h.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ne(t,e,n,i,r,o,s,u=[-1]){const c=g;p(t);const l=t.$$={fragment:null,ctx:[],props:o,update:y,not_equal:r,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:P(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,$,...O)=>{const z=O.length?O[0]:$;return l.ctx&&r(l.ctx[a],l.ctx[a]=z)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](z),f&&_t(t,a)),$}):[],l.update(),f=!0,b(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){V();const a=it(e.target);l.fragment&&l.fragment.l(a),a.forEach(B)}else l.fragment&&l.fragment.c();e.intro&&at(t.$$.fragment),ft(t,e.target,e.anchor,e.customElement),X(),K()}p(c)}class ie{$destroy(){dt(this,1),this.$destroy=y}$on(e,n){if(!j(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!R(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ht as $,ft as A,dt as B,Q as C,nt as D,zt as E,Mt as F,et as G,Xt as H,y as I,wt as J,$t as K,jt as L,qt as M,L as N,b as O,Jt as P,S as Q,yt as R,ie as S,bt as T,xt as U,gt as V,pt as W,Zt as X,Qt as Y,Gt as Z,Et as _,Ct as a,Wt as a0,At as a1,Ft as a2,kt as a3,mt as a4,vt as a5,Yt as a6,U as a7,j as a8,Nt as b,Pt as c,Vt as d,St as e,Ut as f,at as g,B as h,ne as i,It as j,D as k,Ot as l,it as m,I as n,Dt as o,Tt as p,M as q,st as r,ht as s,Kt as t,Lt as u,Rt as v,T as w,Bt as x,te as y,ee as z};
