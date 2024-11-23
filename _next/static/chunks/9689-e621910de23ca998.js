(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9689],{38199:function(e,t){"use strict";var n,r,o,a;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_FAST_REFRESH:function(){return s},ACTION_NAVIGATE:function(){return i},ACTION_PREFETCH:function(){return f},ACTION_REFRESH:function(){return u},ACTION_RESTORE:function(){return c},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return l},PrefetchCacheEntryStatus:function(){return r},PrefetchKind:function(){return n},isThenable:function(){return p}});let u="refresh",i="navigate",c="restore",l="server-patch",f="prefetch",s="fast-refresh",d="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(o=n||(n={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",(a=r||(r={})).fresh="fresh",a.reusable="reusable",a.expired="expired",a.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},87195:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(98337),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},98342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});let r=n(38754),o=n(85893),a=r._(n(67294)),u=n(36075),i=n(53955),c=n(48041),l=n(99903),f=n(65490),s=n(81928),d=n(60257),p=n(84229),h=n(87195),y=n(89470),v=n(38199),b=new Set;function _(e,t,n,r,o,a){if(a||(0,i.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(b.has(o))return;b.add(o)}(async()=>a?e.prefetch(t,o):e.prefetch(t,n,r))().catch(e=>{})}}function C(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let w=a.default.forwardRef(function(e,t){let n,r;let{href:c,as:b,children:w,prefetch:g=null,passHref:m,replace:T,shallow:P,scroll:R,locale:O,onClick:E,onMouseEnter:j,onTouchStart:x,legacyBehavior:I=!1,...M}=e;n=w,I&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let k=a.default.useContext(s.RouterContext),A=a.default.useContext(d.AppRouterContext),S=null!=k?k:A,F=!k,L=!1!==g,N=null===g?v.PrefetchKind.AUTO:v.PrefetchKind.FULL,{href:q,as:K}=a.default.useMemo(()=>{if(!k){let e=C(c);return{href:e,as:b?C(b):e}}let[e,t]=(0,u.resolveHref)(k,c,!0);return{href:e,as:b?(0,u.resolveHref)(k,b):t||e}},[k,c,b]),U=a.default.useRef(q),H=a.default.useRef(K);I&&(r=a.default.Children.only(n));let D=I?r&&"object"==typeof r&&r.ref:t,[G,V,Z]=(0,p.useIntersection)({rootMargin:"200px"}),$=a.default.useCallback(e=>{(H.current!==K||U.current!==q)&&(Z(),H.current=K,U.current=q),G(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[K,D,q,Z,G]);a.default.useEffect(()=>{S&&V&&L&&_(S,q,K,{locale:O},{kind:N},F)},[K,q,V,O,L,null==k?void 0:k.locale,S,F,N]);let z={ref:$,onClick(e){I||"function"!=typeof E||E(e),I&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,r,o,u,c,l,f){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,i.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==c||c;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:l,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};f?a.default.startTransition(d):d()}(e,S,q,K,T,P,R,O,F)},onMouseEnter(e){I||"function"!=typeof j||j(e),I&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),S&&(L||!F)&&_(S,q,K,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:N},F)},onTouchStart:function(e){I||"function"!=typeof x||x(e),I&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),S&&(L||!F)&&_(S,q,K,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:N},F)}};if((0,l.isAbsoluteUrl)(K))z.href=K;else if(!I||m||"a"===r.type&&!("href"in r.props)){let e=void 0!==O?O:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,h.getDomainLocale)(K,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);z.href=t||(0,y.addBasePath)((0,f.addLocale)(K,e,null==k?void 0:k.defaultLocale))}return I?a.default.cloneElement(r,z):(0,o.jsx)("a",{...M,...z,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},84229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let r=n(67294),o=n(84474),a="function"==typeof IntersectionObserver,u=new Map,i=[];function c(e){let{rootRef:t,rootMargin:n,disabled:c}=e,l=c||!a,[f,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(a){if(l||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},i.push(n),u.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),u.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!f){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[l,n,t,f,d.current]),[p,f,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,n){e.exports=n(23867)},41664:function(e,t,n){e.exports=n(98342)},96128:function(e,t,n){"use strict";n.d(t,{T:function(){return v}});var r=n(14503),o=n(8998),a=n(33840),u=n(26445),i=n(33639),c=n(87469),l=n(61163),f=n(74688),s=n(93714),d=n(47531),p=n(79524),h=n(76404),y=n(99238);async function v(e,t){let{account:n=e.account,chain:v=e.chain,accessList:b,blobs:_,data:C,gas:w,gasPrice:g,maxFeePerBlobGas:m,maxFeePerGas:T,maxPriorityFeePerGas:P,nonce:R,to:O,value:E,...j}=t;if(!n)throw new o.o({docsPath:"/docs/actions/wallet/sendTransaction"});let x=(0,r.T)(n);try{let n;if((0,d.F)(t),null!==v&&(n=await (0,s.s)(e,p.L,"getChainId")({}),(0,a.q)({currentChainId:n,chain:v})),"local"===x.type){let t=await (0,s.s)(e,h.Z,"prepareTransactionRequest")({account:x,accessList:b,blobs:_,chain:v,chainId:n,data:C,gas:w,gasPrice:g,maxFeePerBlobGas:m,maxFeePerGas:T,maxPriorityFeePerGas:P,nonce:R,parameters:[...h.Q,"sidecars"],to:O,value:E,...j}),r=v?.serializers?.transaction,o=await x.signTransaction(t,{serializer:r});return await (0,s.s)(e,y.p,"sendRawTransaction")({serializedTransaction:o})}let r=e.chain?.formatters?.transactionRequest?.format,o=(r||f.tG)({...(0,l.K)(j,{format:r}),accessList:b,blobs:_,chainId:n,data:C,from:x.address,gas:w,gasPrice:g,maxFeePerBlobGas:m,maxFeePerGas:T,maxPriorityFeePerGas:P,nonce:R,to:O,value:E});return await e.request({method:"eth_sendTransaction",params:[o]},{retryCount:0})}catch(e){throw function(e,{docsPath:t,...n}){let r=(()=>{let t=(0,c.k)(e,n);return t instanceof u.cj?e:t})();return new i.mk(r,{docsPath:t,...n})}(e,{...t,account:x,chain:t.chain||void 0})}}},61877:function(e,t,n){"use strict";n.d(t,{n:function(){return u}});var r=n(55629),o=n(93714),a=n(96128);async function u(e,t){let{abi:n,address:u,args:i,dataSuffix:c,functionName:l,...f}=t,s=(0,r.R)({abi:n,args:i,functionName:l});return(0,o.s)(e,a.T,"sendTransaction")({data:`${s}${c?c.replace("0x",""):""}`,to:u,...f})}},33840:function(e,t,n){"use strict";n.d(t,{q:function(){return o}});var r=n(80377);function o({chain:e,currentChainId:t}){if(!e)throw new r.Bk;if(t!==e.id)throw new r.Yl({chain:e,currentChainId:t})}},83540:function(e,t,n){"use strict";n.d(t,{A:function(){return p}});var r=n(95946),o=n(51973),a=n(23147),u=n(36083),i=n(81946);async function c(e,t){let{chainId:n,timeout:c=0,...l}=t,f=e.getClient({chainId:n}),s=(0,i.s)(f,o.e,"waitForTransactionReceipt"),d=await s({...l,timeout:c});if("reverted"===d.status){let e=(0,i.s)(f,a.f,"getTransaction"),t=await e({hash:d.transactionHash}),n=(0,i.s)(f,u.R,"call"),o=await n({...t,data:t.input,gasPrice:"eip1559"!==t.type?t.gasPrice:void 0,maxFeePerGas:"eip1559"===t.type?t.maxFeePerGas:void 0,maxPriorityFeePerGas:"eip1559"===t.type?t.maxPriorityFeePerGas:void 0});throw Error(o?.data?(0,r.rR)(`0x${o.data.substring(138)}`):"unknown reason")}return{...d,chainId:f.chain.id}}var l=n(36100),f=n(82451),s=n(82002),d=n(37122);function p(e={}){let{hash:t,query:n={}}=e,r=(0,d.Z)(e),o=(0,s.x)({config:r}),a=function(e,t={}){return{async queryFn({queryKey:n}){let{hash:r,...o}=n[1];if(!r)throw Error("hash is required");return c(e,{...o,onReplaced:t.onReplaced,hash:r})},queryKey:function(e={}){let{onReplaced:t,...n}=e;return["waitForTransactionReceipt",(0,l.OP)(n)]}(t)}}(r,{...e,chainId:e.chainId??o}),u=!!(t&&(n.enabled??!0));return(0,f.aM)({...n,...a,enabled:u})}},75593:function(e,t,n){"use strict";n.d(t,{S:function(){return d}});var r=n(98029),o=n(61877),a=n(81946),u=n(52425),i=n(75230),c=n(66432);async function l(e,t){let n;let{abi:r,chainId:o,connector:u,...l}=t;n=t.account?t.account:(await (0,i.e)(e,{chainId:o,connector:u})).account;let f=e.getClient({chainId:o}),s=(0,a.s)(f,c.a,"simulateContract"),{result:d,request:p}=await s({...l,abi:r,account:n});return{chainId:f.chain.id,result:d,request:{__mode:"prepared",...p,chainId:o}}}async function f(e,t){let n,r;let{account:c,chainId:f,connector:s,__mode:d,...p}=t;n="object"==typeof c&&c?.type==="local"?e.getClient({chainId:f}):await (0,i.e)(e,{account:c??void 0,chainId:f,connector:s});let{connector:h}=(0,u.D)(e);if("prepared"===d||h?.supportsSimulation)r=p;else{let{request:t}=await l(e,{...p,account:c,chainId:f});r=t}let y=(0,a.s)(n,o.n,"writeContract");return await y({...r,...c?{account:c}:{},chain:f?{id:f}:null})}var s=n(37122);function d(e={}){var t;let{mutation:n}=e,o=(t=(0,s.Z)(e),{mutationFn:e=>f(t,e),mutationKey:["writeContract"]}),{mutate:a,mutateAsync:u,...i}=(0,r.D)({...n,...o});return{...i,writeContract:a,writeContractAsync:u}}}}]);