(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1507],{32602:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},noSSR:function(){return o}});let n=r(38754);r(85893),r(67294);let a=n._(r(35491));function i(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}function l(e,t){let r=a.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e});let l=(n={...n,...t}).loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=l?l().then(i):Promise.resolve(i(()=>null))}):(delete n.webpack,delete n.modules,o(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1159:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});let n=r(38754)._(r(67294)).default.createContext(null)},35491:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f}});let n=r(38754)._(r(67294)),a=r(1159),i=[],o=[],l=!1;function u(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class s{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),i=null;function u(){if(!i){let t=new s(e,r);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!l){let e=r.webpack?r.webpack():r.modules;e&&o.push(t=>{for(let r of e)if(t.includes(r))return u()})}function c(e,t){!function(){u();let e=n.default.useContext(a.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let o=n.default.useSyncExternalStore(i.subscribe,i.getCurrentValue,i.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:i.retry}),[]),n.default.useMemo(()=>{var t;return o.loading||o.error?n.default.createElement(r.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:i.retry}):o.loaded?n.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return c.preload=()=>u(),c.displayName="LoadableComponent",n.default.forwardRef(c)}(u,e)}function d(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return d(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{d(i).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(l=!0,t());d(o,e).then(r,r)})),window.__NEXT_PRELOADREADY=c.preloadReady;let f=c},5152:function(e,t,r){e.exports=r(32602)},9008:function(e,t,r){e.exports=r(23867)},96128:function(e,t,r){"use strict";r.d(t,{T:function(){return y}});var n=r(14503),a=r(8998),i=r(33840),o=r(26445),l=r(33639),u=r(87469),s=r(61163),c=r(74688),d=r(93714),f=r(47531),p=r(79524),h=r(76404),m=r(99238);async function y(e,t){let{account:r=e.account,chain:y=e.chain,accessList:_,blobs:b,data:w,gas:g,gasPrice:v,maxFeePerBlobGas:C,maxFeePerGas:P,maxPriorityFeePerGas:T,nonce:k,to:R,value:x,...O}=t;if(!r)throw new a.o({docsPath:"/docs/actions/wallet/sendTransaction"});let j=(0,n.T)(r);try{let r;if((0,f.F)(t),null!==y&&(r=await (0,d.s)(e,p.L,"getChainId")({}),(0,i.q)({currentChainId:r,chain:y})),"local"===j.type){let t=await (0,d.s)(e,h.Z,"prepareTransactionRequest")({account:j,accessList:_,blobs:b,chain:y,chainId:r,data:w,gas:g,gasPrice:v,maxFeePerBlobGas:C,maxFeePerGas:P,maxPriorityFeePerGas:T,nonce:k,parameters:[...h.Q,"sidecars"],to:R,value:x,...O}),n=y?.serializers?.transaction,a=await j.signTransaction(t,{serializer:n});return await (0,d.s)(e,m.p,"sendRawTransaction")({serializedTransaction:a})}let n=e.chain?.formatters?.transactionRequest?.format,a=(n||c.tG)({...(0,s.K)(O,{format:n}),accessList:_,blobs:b,chainId:r,data:w,from:j.address,gas:g,gasPrice:v,maxFeePerBlobGas:C,maxFeePerGas:P,maxPriorityFeePerGas:T,nonce:k,to:R,value:x});return await e.request({method:"eth_sendTransaction",params:[a]},{retryCount:0})}catch(e){throw function(e,{docsPath:t,...r}){let n=(()=>{let t=(0,u.k)(e,r);return t instanceof o.cj?e:t})();return new l.mk(n,{docsPath:t,...r})}(e,{...t,account:j,chain:t.chain||void 0})}}},61877:function(e,t,r){"use strict";r.d(t,{n:function(){return o}});var n=r(55629),a=r(93714),i=r(96128);async function o(e,t){let{abi:r,address:o,args:l,dataSuffix:u,functionName:s,...c}=t,d=(0,n.R)({abi:r,args:l,functionName:s});return(0,a.s)(e,i.T,"sendTransaction")({data:`${d}${u?u.replace("0x",""):""}`,to:o,...c})}},33840:function(e,t,r){"use strict";r.d(t,{q:function(){return a}});var n=r(80377);function a({chain:e,currentChainId:t}){if(!e)throw new n.Bk;if(t!==e.id)throw new n.Yl({chain:e,currentChainId:t})}},83540:function(e,t,r){"use strict";r.d(t,{A:function(){return p}});var n=r(95946),a=r(51973),i=r(23147),o=r(36083),l=r(81946);async function u(e,t){let{chainId:r,timeout:u=0,...s}=t,c=e.getClient({chainId:r}),d=(0,l.s)(c,a.e,"waitForTransactionReceipt"),f=await d({...s,timeout:u});if("reverted"===f.status){let e=(0,l.s)(c,i.f,"getTransaction"),t=await e({hash:f.transactionHash}),r=(0,l.s)(c,o.R,"call"),a=await r({...t,data:t.input,gasPrice:"eip1559"!==t.type?t.gasPrice:void 0,maxFeePerGas:"eip1559"===t.type?t.maxFeePerGas:void 0,maxPriorityFeePerGas:"eip1559"===t.type?t.maxPriorityFeePerGas:void 0});throw Error(a?.data?(0,n.rR)(`0x${a.data.substring(138)}`):"unknown reason")}return{...f,chainId:c.chain.id}}var s=r(36100),c=r(82451),d=r(82002),f=r(37122);function p(e={}){let{hash:t,query:r={}}=e,n=(0,f.Z)(e),a=(0,d.x)({config:n}),i=function(e,t={}){return{async queryFn({queryKey:r}){let{hash:n,...a}=r[1];if(!n)throw Error("hash is required");return u(e,{...a,onReplaced:t.onReplaced,hash:n})},queryKey:function(e={}){let{onReplaced:t,...r}=e;return["waitForTransactionReceipt",(0,s.OP)(r)]}(t)}}(n,{...e,chainId:e.chainId??a}),o=!!(t&&(r.enabled??!0));return(0,c.aM)({...r,...i,enabled:o})}},75593:function(e,t,r){"use strict";r.d(t,{S:function(){return f}});var n=r(98029),a=r(61877),i=r(81946),o=r(52425),l=r(75230),u=r(66432);async function s(e,t){let r;let{abi:n,chainId:a,connector:o,...s}=t;r=t.account?t.account:(await (0,l.e)(e,{chainId:a,connector:o})).account;let c=e.getClient({chainId:a}),d=(0,i.s)(c,u.a,"simulateContract"),{result:f,request:p}=await d({...s,abi:n,account:r});return{chainId:c.chain.id,result:f,request:{__mode:"prepared",...p,chainId:a}}}async function c(e,t){let r,n;let{account:u,chainId:c,connector:d,__mode:f,...p}=t;r="object"==typeof u&&u?.type==="local"?e.getClient({chainId:c}):await (0,l.e)(e,{account:u??void 0,chainId:c,connector:d});let{connector:h}=(0,o.D)(e);if("prepared"===f||h?.supportsSimulation)n=p;else{let{request:t}=await s(e,{...p,account:u,chainId:c});n=t}let m=(0,i.s)(r,a.n,"writeContract");return await m({...n,...u?{account:u}:{},chain:c?{id:c}:null})}var d=r(37122);function f(e={}){var t;let{mutation:r}=e,a=(t=(0,d.Z)(e),{mutationFn:e=>c(t,e),mutationKey:["writeContract"]}),{mutate:i,mutateAsync:o,...l}=(0,n.D)({...r,...a});return{...l,writeContract:i,writeContractAsync:o}}}}]);