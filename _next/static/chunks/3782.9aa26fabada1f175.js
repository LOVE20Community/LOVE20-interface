"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3782],{33782:function(e,n,t){t.r(n),t.d(n,{BaseError:function(){return u.G},ChainNotConfiguredError:function(){return eB.X4},ConnectorAccountNotFoundError:function(){return eB.JK},ConnectorAlreadyConnectedError:function(){return eB.wi},ConnectorChainMismatchError:function(){return eB.XZ},ConnectorNotFoundError:function(){return eB.Nu},ConnectorUnavailableReconnectingError:function(){return eB.$S},Context:function(){return r.V},Hydrate:function(){return nf.p},ProviderNotFoundError:function(){return nZ.M},SwitchChainNotSupportedError:function(){return nZ.O},WagmiConfig:function(){return r.F},WagmiContext:function(){return r.V},WagmiProvider:function(){return r.F},WagmiProviderNotFoundError:function(){return o.p},cookieStorage:function(){return nS},cookieToInitialState:function(){return nx},createConfig:function(){return nN._},createConnector:function(){return nO.K},createStorage:function(){return nR.o},custom:function(){return nA.P},deepEqual:function(){return nB.v},deserialize:function(){return nk.v},fallback:function(){return np},http:function(){return nD.d},noopStorage:function(){return nR.w},normalizeChainId:function(){return nM},parseCookie:function(){return nT},serialize:function(){return nW.q},unstable_connector:function(){return nF},useAccount:function(){return i.m},useAccountEffect:function(){return c.E},useBalance:function(){return a.K},useBlock:function(){return C},useBlockNumber:function(){return q.O},useBlockTransactionCount:function(){return I},useBytecode:function(){return K},useCall:function(){return S},useChainId:function(){return p.x},useChains:function(){return x.C},useClient:function(){return N},useConfig:function(){return m.Z},useConnect:function(){return O.$},useConnections:function(){return Z.b},useConnectorClient:function(){return D},useConnectors:function(){return R.Y},useContractInfiniteReads:function(){return eh},useContractRead:function(){return eI.u},useContractReads:function(){return eE},useContractWrite:function(){return nl.S},useDeployContract:function(){return _},useDisconnect:function(){return G.q},useEnsAddress:function(){return j},useEnsAvatar:function(){return J.c},useEnsName:function(){return Q.F},useEnsResolver:function(){return U},useEnsText:function(){return V},useEstimateFeesPerGas:function(){return et},useEstimateGas:function(){return eo},useEstimateMaxPriorityFeePerGas:function(){return ea},useFeeData:function(){return et},useFeeHistory:function(){return el},useGasPrice:function(){return ed},useInfiniteReadContracts:function(){return eh},usePrepareTransactionRequest:function(){return eb},useProof:function(){return eq},usePublicClient:function(){return ev.t},useReadContract:function(){return eI.u},useReadContracts:function(){return eE},useReconnect:function(){return eK},useSendTransaction:function(){return eS},useSignMessage:function(){return ex.Q},useSignTypedData:function(){return eN},useSimulateContract:function(){return eZ},useStorageAt:function(){return eD},useSwitchAccount:function(){return e$},useSwitchChain:function(){return e_.o},useToken:function(){return eQ},useTransaction:function(){return eU},useTransactionConfirmations:function(){return eV},useTransactionCount:function(){return e0},useTransactionReceipt:function(){return e7},useVerifyMessage:function(){return e3},useVerifyTypedData:function(){return e5},useWaitForTransactionReceipt:function(){return nn.A},useWalletClient:function(){return ne.p},useWatchAsset:function(){return nu},useWatchBlockNumber:function(){return no.x},useWatchBlocks:function(){return w},useWatchContractEvent:function(){return nc},useWatchPendingTransactions:function(){return ns},useWriteContract:function(){return nl.S},version:function(){return n$.i},webSocket:function(){return nP}});var r=t(25407),u=t(27694),o=t(40948),i=t(92321),c=t(3114),a=t(53438),s=t(30202),l=t(75016),f=t(81946);async function d(e,n={}){let{chainId:t,...r}=n,u=e.getClient({chainId:t}),o=(0,f.s)(u,l.Q,"getBlock");return{...await o(r),chainId:u.chain.id}}var y=t(36100),h=t(45631),p=t(82002),m=t(80666),g=t(7598),b=t(67294);function w(e={}){let{enabled:n=!0,onBlock:t,config:r,...u}=e,o=(0,m.Z)(e),i=(0,p.x)({config:o}),c=e.chainId??i;(0,b.useEffect)(()=>{if(n&&t)return function(e,n){let t,r;let{syncConnectedChain:u=e._internal.syncConnectedChain,...o}=n,i=n=>{t&&t();let r=e.getClient({chainId:n});return t=(0,f.s)(r,g.p,"watchBlocks")(o)},c=i(n.chainId);return u&&!n.chainId&&(r=e.subscribe(({chainId:e})=>e,async e=>i(e))),()=>{c?.(),r?.()}}(o,{...u,chainId:c,onBlock:t})},[c,o,n,t,u.blockTag,u.emitMissed,u.emitOnBegin,u.includeTransactions,u.onError,u.poll,u.pollingInterval,u.syncConnectedChain])}function C(e={}){let{query:n={},watch:t}=e,r=(0,m.Z)(e),u=(0,s.NL)(),o=(0,p.x)({config:r}),i=e.chainId??o,c=function(e,n={}){return{async queryFn({queryKey:n}){let{scopeKey:t,...r}=n[1];return await d(e,r)??null},queryKey:function(e={}){return["block",(0,y.OP)(e)]}(n)}}(r,{...e,chainId:i}),a=!!(n.enabled??!0);return w({...{config:e.config,chainId:e.chainId,..."object"==typeof t?t:{}},enabled:!!(a&&("object"==typeof t?t.enabled:t)),onBlock(e){u.setQueryData(c.queryKey,e)}}),(0,h.aM)({...n,...c,enabled:a})}var q=t(42757),v=t(92868);function I(e={}){let{query:n={}}=e,t=(0,m.Z)(e),r=(0,p.x)({config:t}),u=e.chainId??r,o=function(e,n={}){return{async queryFn({queryKey:n}){let{scopeKey:t,...r}=n[1];return await function(e,n={}){let{chainId:t,...r}=n,u=e.getClient({chainId:t});return(0,f.s)(u,v.c,"getBlockTransactionCount")(r)}(e,r)??null},queryKey:function(e={}){return["blockTransactionCount",(0,y.OP)(e)]}(n)}}(t,{...e,chainId:u});return(0,h.aM)({...n,...o})}var E=t(13168);async function P(e,n){let{chainId:t,...r}=n,u=e.getClient({chainId:t});return(0,f.s)(u,E.C,"getBytecode")(r)}function K(e={}){let{address:n,query:t={}}=e,r=(0,m.Z)(e),u=(0,p.x)({config:r}),o=function(e,n={}){return{async queryFn({queryKey:n}){let{address:t,scopeKey:r,...u}=n[1];if(!t)throw Error("address is required");return await P(e,{...u,address:t})??null},queryKey:["getBytecode",(0,y.OP)(n)]}}(r,{...e,chainId:e.chainId??u}),i=!!(n&&(t.enabled??!0));return(0,h.aM)({...t,...o,enabled:i})}var F=t(36083);async function k(e,n){let{chainId:t,...r}=n,u=e.getClient({chainId:t});return(0,f.s)(u,F.R,"call")(r)}function S(e={}){let{query:n={}}=e,t=(0,m.Z)(e),r=(0,p.x)({config:t}),u=function(e,n={}){return{async queryFn({queryKey:n}){let{scopeKey:t,...r}=n[1];return await k(e,{...r})??null},queryKey:["call",(0,y.OP)(n)]}}(t,{...e,chainId:e.chainId??r});return(0,h.aM)({...n,...u})}var x=t(40145),T=t(9698),M=t(52798);function N(e={}){let n=(0,m.Z)(e);return(0,M.useSyncExternalStoreWithSelector)(e=>(function(e,n){let{onChange:t}=n;return e.subscribe(()=>(0,T.s)(e),t,{equalityFn:(e,n)=>e?.uid===n?.uid})})(n,{onChange:e}),()=>(0,T.s)(n,e),()=>(0,T.s)(n,e),e=>e,(e,n)=>e?.uid===n?.uid)}var O=t(76440),Z=t(7132),R=t(56081),A=t(87831);function D(e={}){let{query:n={},...t}=e,r=(0,m.Z)(t),u=(0,s.NL)(),{address:o,connector:c,status:a}=(0,i.m)({config:r}),l=(0,p.x)({config:r}),f=e.connector??c,{queryKey:d,...g}=function(e,n={}){return{gcTime:0,async queryFn({queryKey:t}){let{connector:r}=n,{connectorUid:u,scopeKey:o,...i}=t[1];return(0,A.e)(e,{...i,connector:r})},queryKey:function(e={}){let{connector:n,...t}=e;return["connectorClient",{...(0,y.OP)(t),connectorUid:n?.uid}]}(n)}}(r,{...e,chainId:e.chainId??l,connector:f}),w=!!(("connected"===a||"reconnecting"===a&&f?.getProvider)&&(n.enabled??!0)),C=(0,b.useRef)(o);return(0,b.useEffect)(()=>{let e=C.current;!o&&e?(u.removeQueries({queryKey:d}),C.current=void 0):o!==e&&(u.invalidateQueries({queryKey:d}),C.current=o)},[o,u]),(0,h.aM)({...n,...g,queryKey:d,enabled:w,staleTime:Number.POSITIVE_INFINITY})}var B=t(98029),W=t(71681);async function $(e,n){let t;let{account:r,chainId:u,connector:o,...i}=n;t="object"==typeof r&&r?.type==="local"?e.getClient({chainId:u}):await (0,A.e)(e,{account:r??void 0,chainId:u,connector:o});let c=(0,f.s)(t,W.P,"deployContract");return await c({...i,...r?{account:r}:{},chain:u?{id:u}:null})}function _(e={}){var n;let{mutation:t}=e,r=(n=(0,m.Z)(e),{mutationFn:e=>$(n,e),mutationKey:["deployContract"]}),{mutate:u,mutateAsync:o,...i}=(0,B.D)({...t,...r});return{...i,deployContract:u,deployContractAsync:o}}var G=t(59104),L=t(18011);function j(e={}){let{name:n,query:t={}}=e,r=(0,m.Z)(e),u=(0,p.x)({config:r}),o=function(e,n={}){return{async queryFn({queryKey:n}){let{name:t,scopeKey:r,...u}=n[1];if(!t)throw Error("name is required");return function(e,n){let{chainId:t,...r}=n,u=e.getClient({chainId:t});return(0,f.s)(u,L.O,"getEnsAddress")(r)}(e,{...u,name:t})},queryKey:function(e={}){return["ensAddress",(0,y.OP)(e)]}(n)}}(r,{...e,chainId:e.chainId??u}),i=!!(n&&(t.enabled??!0));return(0,h.aM)({...t,...o,enabled:i})}var J=t(4830),Q=t(90474),H=t(15215);function U(e={}){let{name:n,query:t={}}=e,r=(0,m.Z)(e),u=(0,p.x)({config:r}),o=function(e,n={}){return{async queryFn({queryKey:n}){let{name:t,scopeKey:r,...u}=n[1];if(!t)throw Error("name is required");return function(e,n){let{chainId:t,...r}=n,u=e.getClient({chainId:t});return(0,f.s)(u,H.S,"getEnsResolver")(r)}(e,{...u,name:t})},queryKey:function(e={}){return["ensResolver",(0,y.OP)(e)]}(n)}}(r,{...e,chainId:e.chainId??u}),i=!!(n&&(t.enabled??!0));return(0,h.aM)({...t,...o,enabled:i})}var z=t(16171);function V(e={}){let{key:n,name:t,query:r={}}=e,u=(0,m.Z)(e),o=(0,p.x)({config:u}),i=function(e,n={}){return{async queryFn({queryKey:n}){let{key:t,name:r,scopeKey:u,...o}=n[1];if(!t||!r)throw Error("key and name are required");return function(e,n){let{chainId:t,...r}=n,u=e.getClient({chainId:t});return(0,f.s)(u,z.g,"getEnsText")(r)}(e,{...o,key:t,name:r})},queryKey:function(e={}){return["ensText",(0,y.OP)(e)]}(n)}}(u,{...e,chainId:e.chainId??o}),c=!!(n&&t&&(r.enabled??!0));return(0,h.aM)({...r,...i,enabled:c})}var Y=t(15229),X=t(43861),ee=t(28454);async function en(e,n={}){let{chainId:t,formatUnits:r="gwei",...u}=n,o=e.getClient({chainId:t}),i=(0,f.s)(o,X.X,"estimateFeesPerGas"),{gasPrice:c,maxFeePerGas:a,maxPriorityFeePerGas:s}=await i({...u,chain:o.chain}),l=(0,ee.W)(r);return{formatted:{gasPrice:c?(0,Y.b)(c,l):void 0,maxFeePerGas:a?(0,Y.b)(a,l):void 0,maxPriorityFeePerGas:s?(0,Y.b)(s,l):void 0},gasPrice:c,maxFeePerGas:a,maxPriorityFeePerGas:s}}function et(e={}){let{query:n={}}=e,t=(0,m.Z)(e),r=(0,p.x)({config:t}),u=function(e,n={}){return{async queryFn({queryKey:n}){let{scopeKey:t,...r}=n[1];return en(e,r)},queryKey:function(e={}){return["estimateFeesPerGas",(0,y.OP)(e)]}(n)}}(t,{...e,chainId:e.chainId??r});return(0,h.aM)({...n,...u})}var er=t(81841);async function eu(e,n){let t;let{chainId:r,connector:u,...o}=n;t=n.account?n.account:(await (0,A.e)(e,{account:n.account,chainId:r,connector:u})).account;let i=e.getClient({chainId:r});return(0,f.s)(i,er.Q,"estimateGas")({...o,account:t})}function eo(e={}){let{connector:n,query:t={}}=e,r=(0,m.Z)(e),{data:u}=D({connector:n,query:{enabled:void 0===e.account}}),o=e.account??u?.account,i=(0,p.x)({config:r}),c=function(e,n={}){return{async queryFn({queryKey:t}){let{connector:r}=n,{account:u,scopeKey:o,...i}=t[1];if(!u&&!r)throw Error("account or connector is required");return eu(e,{account:u,connector:r,...i})},queryKey:function(e={}){let{connector:n,...t}=e;return["estimateGas",(0,y.OP)(t)]}(n)}}(r,{...e,account:o,chainId:e.chainId??i,connector:n}),a=!!((o||n)&&(t.enabled??!0));return(0,h.aM)({...t,...c,enabled:a})}var ei=t(79379);async function ec(e,n={}){let{chainId:t}=n,r=e.getClient({chainId:t});return(0,f.s)(r,ei._,"estimateMaxPriorityFeePerGas")({chain:r.chain})}function ea(e={}){let{query:n={}}=e,t=(0,m.Z)(e),r=(0,p.x)({config:t}),u=function(e,n={}){return{async queryFn({queryKey:n}){let{scopeKey:t,...r}=n[1];return ec(e,r)},queryKey:function(e={}){return["estimateMaxPriorityFeePerGas",(0,y.OP)(e)]}(n)}}(t,{...e,chainId:e.chainId??r});return(0,h.aM)({...n,...u})}var es=t(88493);function el(e={}){let{blockCount:n,rewardPercentiles:t,query:r={}}=e,u=(0,m.Z)(e),o=(0,p.x)({config:u}),i=function(e,n={}){return{async queryFn({queryKey:n}){let{blockCount:t,rewardPercentiles:r,scopeKey:u,...o}=n[1];if(!t)throw Error("blockCount is required");if(!r)throw Error("rewardPercentiles is required");return await function(e,n){let{chainId:t,...r}=n,u=e.getClient({chainId:t});return(0,f.s)(u,es.Z,"getFeeHistory")(r)}(e,{...o,blockCount:t,rewardPercentiles:r})??null},queryKey:function(e={}){return["feeHistory",(0,y.OP)(e)]}(n)}}(u,{...e,chainId:e.chainId??o}),c=!!(n&&t&&(r.enabled??!0));return(0,h.aM)({...r,...i,enabled:c})}var ef=t(24453);function ed(e={}){let{query:n={}}=e,t=(0,m.Z)(e),r=(0,p.x)({config:t}),u=e.chainId??r,o=function(e,n={}){return{async queryFn({queryKey:n}){let{scopeKey:t,...r}=n[1];return await function(e,n={}){let{chainId:t}=n,r=e.getClient({chainId:t});return(0,f.s)(r,ef.o,"getGasPrice")({})}(e,r)??null},queryKey:function(e={}){return["gasPrice",(0,y.OP)(e)]}(n)}}(t,{...e,chainId:u});return(0,h.aM)({...n,...o})}var ey=t(97995);function eh(e){var n;let{contracts:t=[],query:r}=e,u=(0,m.Z)(e),o=(0,p.x)({config:u}),i={...(n={...e,chainId:o,contracts:t,query:r}).query,async queryFn({pageParam:e,queryKey:t}){let{contracts:r}=n,{cacheKey:o,scopeKey:i,...c}=t[1];return await (0,ey.J)(u,{...c,contracts:r(e)})},queryKey:function(e){let{contracts:n,query:t,...r}=e;return["infiniteReadContracts",(0,y.OP)(r)]}(n)};return(0,h.NS)({...r,...i,initialPageParam:i.initialPageParam,structuralSharing:r.structuralSharing??y.if})}var ep=t(76404),em=t(52425);async function eg(e,n){let{account:t,chainId:r,...u}=n,o=t??(0,em.D)(e).address,i=e.getClient({chainId:r});return(0,f.s)(i,ep.Z,"prepareTransactionRequest")({...u,...o?{account:o}:{}})}function eb(e={}){let{to:n,query:t={}}=e,r=(0,m.Z)(e),u=(0,p.x)({config:r}),o=function(e,n={}){return{queryFn({queryKey:n}){let{scopeKey:t,to:r,...u}=n[1];if(!r)throw Error("to is required");return eg(e,{to:r,...u})},queryKey:["prepareTransactionRequest",(0,y.OP)(n)]}}(r,{...e,chainId:e.chainId??u}),i=!!(n&&(t.enabled??!0));return(0,h.aM)({...t,...o,enabled:i})}var ew=t(29996);async function eC(e,n){let{chainId:t,...r}=n,u=e.getClient({chainId:t});return(0,f.s)(u,ew.S,"getProof")(r)}function eq(e={}){let{address:n,storageKeys:t,query:r={}}=e,u=(0,m.Z)(e),o=(0,p.x)({config:u}),i=function(e,n={}){return{async queryFn({queryKey:n}){let{address:t,scopeKey:r,storageKeys:u,...o}=n[1];if(!t||!u)throw Error("address and storageKeys are required");return eC(e,{...o,address:t,storageKeys:u})},queryKey:["getProof",(0,y.OP)(n)]}}(u,{...e,chainId:e.chainId??o}),c=!!(n&&t&&(r.enabled??!0));return(0,h.aM)({...r,...i,enabled:c})}var ev=t(94403),eI=t(89810);function eE(e={}){let{contracts:n=[],query:t={}}=e,r=(0,m.Z)(e),u=(0,p.x)({config:r}),o=function(e,n={}){return{async queryFn({queryKey:t}){let r=[],u=t[1].contracts.length;for(let e=0;e<u;e++){let u=t[1].contracts[e],o=(n.contracts?.[e]).abi;r.push({...u,abi:o})}let{scopeKey:o,...i}=t[1];return(0,ey.J)(e,{...i,contracts:r})},queryKey:function(e={}){let n=[];for(let t of e.contracts??[]){let{abi:r,...u}=t;n.push({...u,chainId:u.chainId??e.chainId})}return["readContracts",(0,y.OP)({...e,contracts:n})]}(n)}}(r,{...e,chainId:u}),i=(0,b.useMemo)(()=>{let e=!1;for(let t of n){let{abi:n,address:r,functionName:u}=t;if(!n||!r||!u){e=!1;break}e=!0}return!!(e&&(t.enabled??!0))},[n,t.enabled]);return(0,h.aM)({...o,...t,enabled:i,structuralSharing:t.structuralSharing??y.if})}var eP=t(51785);function eK(e={}){let{mutation:n}=e,t=(0,m.Z)(e),{mutate:r,mutateAsync:u,...o}=(0,B.D)({...n,mutationFn:e=>(0,eP.G)(t,e),mutationKey:["reconnect"]});return{...o,connectors:t.connectors,reconnect:r,reconnectAsync:u}}var eF=t(96128);async function ek(e,n){let t;let{account:r,chainId:u,connector:o,gas:i,...c}=n;t="object"==typeof r&&r?.type==="local"?e.getClient({chainId:u}):await (0,A.e)(e,{account:r??void 0,chainId:u,connector:o});let{connector:a}=(0,em.D)(e),s=await (async()=>{if(!(!("data"in n)||!n.data||(o??a)?.supportsSimulation)&&null!==i)return void 0===i?(0,f.s)(t,er.Q,"estimateGas")({...c,account:r,chain:u?{id:u}:null}):i})(),l=(0,f.s)(t,eF.T,"sendTransaction");return await l({...c,...r?{account:r}:{},gas:s,chain:u?{id:u}:null})}function eS(e={}){var n;let{mutation:t}=e,r=(n=(0,m.Z)(e),{mutationFn:e=>ek(n,e),mutationKey:["sendTransaction"]}),{mutate:u,mutateAsync:o,...i}=(0,B.D)({...t,...r});return{...i,sendTransaction:u,sendTransactionAsync:o}}var ex=t(8768),eT=t(20679);async function eM(e,n){let t;let{account:r,connector:u,...o}=n;return t="object"==typeof r&&"local"===r.type?e.getClient():await (0,A.e)(e,{account:r,connector:u}),(0,f.s)(t,eT.x,"signTypedData")({...o,...r?{account:r}:{}})}function eN(e={}){var n;let{mutation:t}=e,r=(n=(0,m.Z)(e),{mutationFn:e=>eM(n,e),mutationKey:["signTypedData"]}),{mutate:u,mutateAsync:o,...i}=(0,B.D)({...t,...r});return{...i,signTypedData:u,signTypedDataAsync:o}}var eO=t(13876);function eZ(e={}){let{abi:n,address:t,connector:r,functionName:u,query:o={}}=e,i=(0,m.Z)(e),{data:c}=D({connector:r,query:{enabled:void 0===e.account}}),a=(0,p.x)({config:i}),s=function(e,n={}){return{async queryFn({queryKey:t}){let{abi:r,connector:u}=n;if(!r)throw Error("abi is required");let{scopeKey:o,...i}=t[1],{address:c,functionName:a}=i;if(!c)throw Error("address is required");if(!a)throw Error("functionName is required");return(0,eO.a)(e,{abi:r,connector:u,...i})},queryKey:function(e={}){let{abi:n,connector:t,...r}=e;return["simulateContract",(0,y.OP)(r)]}(n)}}(i,{...e,account:e.account??c?.account,chainId:e.chainId??a}),l=!!(n&&t&&u&&(o.enabled??!0));return(0,h.aM)({...o,...s,enabled:l})}var eR=t(77759);async function eA(e,n){let{chainId:t,...r}=n,u=e.getClient({chainId:t});return(0,f.s)(u,eR.Y,"getStorageAt")(r)}function eD(e={}){let{address:n,slot:t,query:r={}}=e,u=(0,m.Z)(e),o=(0,p.x)({config:u}),i=function(e,n={}){return{queryFn({queryKey:n}){let{address:t,slot:r,scopeKey:u,...o}=n[1];if(!t||!r)throw Error("address and slot are required");return eA(e,{...o,address:t,slot:r})},queryKey:["getStorageAt",(0,y.OP)(n)]}}(u,{...e,chainId:e.chainId??o}),c=!!(n&&t&&(r.enabled??!0));return(0,h.aM)({...r,...i,enabled:c})}var eB=t(87675);async function eW(e,n){let{connector:t}=n,r=e.state.connections.get(t.uid);if(!r)throw new eB.aH;return await e.storage?.setItem("recentConnectorId",t.id),e.setState(e=>({...e,current:t.uid})),{accounts:r.accounts,chainId:r.chainId}}function e$(e={}){let{mutation:n}=e,t=(0,m.Z)(e),{mutate:r,mutateAsync:u,...o}=(0,B.D)({...n,mutationFn:e=>eW(t,e),mutationKey:["switchAccount"]});return{...o,connectors:(0,Z.b)({config:t}).map(e=>e.connector),switchAccount:r,switchAccountAsync:u}}var e_=t(72272),eG=t(97405),eL=t(95946),ej=t(61836);async function eJ(e,n){let{address:t,chainId:r,formatUnits:u=18}=n;function o(e){return[{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{type:e}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:e}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{type:"uint256"}]}]}try{let n=o("string"),i={address:t,abi:n,chainId:r},[c,a,s,l]=await (0,ey.J)(e,{allowFailure:!0,contracts:[{...i,functionName:"decimals"},{...i,functionName:"name"},{...i,functionName:"symbol"},{...i,functionName:"totalSupply"}]});if(a.error instanceof eG.uq)throw a.error;if(s.error instanceof eG.uq)throw s.error;if(c.error)throw c.error;if(l.error)throw l.error;return{address:t,decimals:c.result,name:a.result,symbol:s.result,totalSupply:{formatted:(0,Y.b)(l.result,(0,ee.W)(u)),value:l.result}}}catch(n){if(n instanceof eG.uq){let n={address:t,abi:o("bytes32"),chainId:r},[i,c,a,s]=await (0,ey.J)(e,{allowFailure:!1,contracts:[{...n,functionName:"decimals"},{...n,functionName:"name"},{...n,functionName:"symbol"},{...n,functionName:"totalSupply"}]});return{address:t,decimals:i,name:(0,eL.rR)((0,ej.f)(c,{dir:"right"})),symbol:(0,eL.rR)((0,ej.f)(a,{dir:"right"})),totalSupply:{formatted:(0,Y.b)(s,(0,ee.W)(u)),value:s}}}throw n}}function eQ(e={}){let{address:n,query:t={}}=e,r=(0,m.Z)(e),u=(0,p.x)({config:r}),o=function(e,n={}){return{async queryFn({queryKey:n}){let{address:t,scopeKey:r,...u}=n[1];if(!t)throw Error("address is required");return eJ(e,{...u,address:t})},queryKey:function(e={}){return["token",(0,y.OP)(e)]}(n)}}(r,{...e,chainId:e.chainId??u}),i=!!(n&&(t.enabled??!0));return(0,h.aM)({...t,...o,enabled:i})}var eH=t(23147);function eU(e={}){let{blockHash:n,blockNumber:t,blockTag:r,hash:u,query:o={}}=e,i=(0,m.Z)(e),c=(0,p.x)({config:i}),a=function(e,n={}){return{async queryFn({queryKey:n}){let{blockHash:t,blockNumber:r,blockTag:u,hash:o,index:i}=n[1];if(!t&&!r&&!u&&!o)throw Error("blockHash, blockNumber, blockTag, or hash is required");if(!o&&!i)throw Error("index is required for blockHash, blockNumber, or blockTag");let{scopeKey:c,...a}=n[1];return function(e,n){let{chainId:t,...r}=n,u=e.getClient({chainId:t});return(0,f.s)(u,eH.f,"getTransaction")(r)}(e,a)},queryKey:function(e={}){return["transaction",(0,y.OP)(e)]}(n)}}(i,{...e,chainId:e.chainId??c}),s=!!(!(n&&t&&r&&u)&&(o.enabled??!0));return(0,h.aM)({...o,...a,enabled:s})}var ez=t(11129);function eV(e={}){let{hash:n,transactionReceipt:t,query:r={}}=e,u=(0,m.Z)(e),o=(0,p.x)({config:u}),i=function(e,n={}){return{async queryFn({queryKey:n}){let{hash:t,transactionReceipt:r,scopeKey:u,...o}=n[1];if(!t&&!r)throw Error("hash or transactionReceipt is required");return await function(e,n){let{chainId:t,...r}=n,u=e.getClient({chainId:t});return(0,f.s)(u,ez.a,"getTransactionConfirmations")(r)}(e,{hash:t,transactionReceipt:r,...o})??null},queryKey:function(e={}){return["transactionConfirmations",(0,y.OP)(e)]}(n)}}(u,{...e,chainId:e.chainId??o}),c=!!(!(n&&t)&&(n||t)&&(r.enabled??!0));return(0,h.aM)({...r,...i,enabled:c})}var eY=t(86162);async function eX(e,n){let{address:t,blockNumber:r,blockTag:u,chainId:o}=n,i=e.getClient({chainId:o});return(0,f.s)(i,eY.K,"getTransactionCount")(r?{address:t,blockNumber:r}:{address:t,blockTag:u})}function e0(e={}){let{address:n,query:t={}}=e,r=(0,m.Z)(e),u=(0,p.x)({config:r}),o=function(e,n={}){return{async queryFn({queryKey:n}){let{address:t,scopeKey:r,...u}=n[1];if(!t)throw Error("address is required");return await eX(e,{...u,address:t})??null},queryKey:function(e={}){return["transactionCount",(0,y.OP)(e)]}(n)}}(r,{...e,chainId:e.chainId??u}),i=!!(n&&(t.enabled??!0));return(0,h.aM)({...t,...o,enabled:i})}var e1=t(34085);async function e2(e,n){let{chainId:t,...r}=n,u=e.getClient({chainId:t});return(0,f.s)(u,e1.a,"getTransactionReceipt")(r)}function e7(e={}){let{hash:n,query:t={}}=e,r=(0,m.Z)(e),u=(0,p.x)({config:r}),o=function(e,n={}){return{queryFn({queryKey:n}){let{hash:t,scopeKey:r,...u}=n[1];if(!t)throw Error("hash is required");return e2(e,{...u,hash:t})},queryKey:["getTransactionReceipt",(0,y.OP)(n)]}}(r,{...e,chainId:e.chainId??u}),i=!!(n&&(t.enabled??!0));return(0,h.aM)({...t,...o,enabled:i})}var e8=t(19030);async function e4(e,n){let{chainId:t,...r}=n,u=e.getClient({chainId:t});return(0,f.s)(u,e8.n,"verifyMessage")(r)}function e3(e={}){let{address:n,message:t,signature:r,query:u={}}=e,o=(0,m.Z)(e),i=(0,p.x)({config:o}),c=function(e,n={}){return{async queryFn({queryKey:n}){let{address:t,message:r,signature:u}=n[1];if(!t||!r||!u)throw Error("address, message, and signature are required");let{scopeKey:o,...i}=n[1];return await e4(e,i)??null},queryKey:["verifyMessage",(0,y.OP)(n)]}}(o,{...e,chainId:e.chainId??i}),a=!!(n&&t&&r&&(u.enabled??!0));return(0,h.aM)({...u,...c,enabled:a})}var e6=t(99684);async function e9(e,n){let{chainId:t,...r}=n,u=e.getClient({chainId:t});return(0,f.s)(u,e6.B,"verifyTypedData")(r)}function e5(e={}){let{address:n,message:t,primaryType:r,signature:u,types:o,query:i={}}=e,c=(0,m.Z)(e),a=(0,p.x)({config:c}),s=function(e,n={}){return{async queryFn({queryKey:n}){let{address:t,message:r,primaryType:u,signature:o,types:i,scopeKey:c,...a}=n[1];if(!t)throw Error("address is required");if(!r)throw Error("message is required");if(!u)throw Error("primaryType is required");if(!o)throw Error("signature is required");if(!i)throw Error("types is required");return await e9(e,{...a,address:t,message:r,primaryType:u,signature:o,types:i})??null},queryKey:["verifyTypedData",(0,y.OP)(n)]}}(c,{...e,chainId:e.chainId??a}),l=!!(n&&t&&r&&u&&o&&(i.enabled??!0));return(0,h.aM)({...i,...s,enabled:l})}var ne=t(32209),nn=t(83540),nt=t(21557);async function nr(e,n){let{connector:t,...r}=n,u=await (0,A.e)(e,{connector:t});return(0,f.s)(u,nt.d,"watchAsset")(r)}function nu(e={}){var n;let{mutation:t}=e,r=(n=(0,m.Z)(e),{mutationFn:e=>nr(n,e),mutationKey:["watchAsset"]}),{mutate:u,mutateAsync:o,...i}=(0,B.D)({...t,...r});return{...i,watchAsset:u,watchAssetAsync:o}}var no=t(97861),ni=t(52473);function nc(e={}){let{enabled:n=!0,onLogs:t,config:r,...u}=e,o=(0,m.Z)(e),i=(0,p.x)({config:o}),c=e.chainId??i;(0,b.useEffect)(()=>{if(n&&t)return function(e,n){let t,r;let{syncConnectedChain:u=e._internal.syncConnectedChain,...o}=n,i=n=>{t&&t();let r=e.getClient({chainId:n});return t=(0,f.s)(r,ni.Y,"watchContractEvent")(o)},c=i(n.chainId);return u&&!n.chainId&&(r=e.subscribe(({chainId:e})=>e,async e=>i(e))),()=>{c?.(),r?.()}}(o,{...u,chainId:c,onLogs:t})},[c,o,n,t,u.abi,u.address,u.args,u.batch,u.eventName,u.fromBlock,u.onError,u.poll,u.pollingInterval,u.strict,u.syncConnectedChain])}var na=t(37075);function ns(e={}){let{enabled:n=!0,onTransactions:t,config:r,...u}=e,o=(0,m.Z)(e),i=(0,p.x)({config:o}),c=e.chainId??i;(0,b.useEffect)(()=>{if(n&&t)return function(e,n){let t,r;let{syncConnectedChain:u=e._internal.syncConnectedChain,...o}=n,i=n=>{t&&t();let r=e.getClient({chainId:n});return t=(0,f.s)(r,na.O,"watchPendingTransactions")(o)},c=i(n.chainId);return u&&!n.chainId&&(r=e.subscribe(({chainId:e})=>e,async e=>i(e))),()=>{c?.(),r?.()}}(o,{...u,chainId:c,onTransactions:t})},[c,o,n,t,u.batch,u.onError,u.poll,u.pollingInterval,u.syncConnectedChain])}var nl=t(71366),nf=t(41922),nd=t(39028),ny=t(62914),nh=t(22319);function np(e,n){return function(e,n={}){let{key:t="fallback",name:r="Fallback",rank:u=!1,retryCount:o,retryDelay:i}=n;return({chain:n,pollingInterval:c=4e3,timeout:a,...s})=>{let l=e,f=()=>{},d=(0,nh.q)({key:t,name:r,async request({method:e,params:t}){let r=async(u=0)=>{let o=l[u]({...s,chain:n,retryCount:0,timeout:a});try{let n=await o.request({method:e,params:t});return f({method:e,params:t,response:n,transport:o,status:"success"}),n}catch(n){if(f({error:n,method:e,params:t,transport:o,status:"error"}),"code"in n&&"number"==typeof n.code&&(n.code===nd.KB.code||n.code===nd.ab.code||5e3===n.code)||u===l.length-1)throw n;return r(u+1)}};return r()},retryCount:o,retryDelay:i,type:"fallback"},{onResponse:e=>f=e,transports:l.map(e=>e({chain:n,retryCount:0}))});if(u){let e="object"==typeof u?u:{};!function({chain:e,interval:n=4e3,onTransports:t,sampleCount:r=10,timeout:u=1e3,transports:o,weights:i={}}){let{stability:c=.7,latency:a=.3}=i,s=[],l=async()=>{let i=await Promise.all(o.map(async n=>{let t,r;let o=n({chain:e,retryCount:0,timeout:u}),i=Date.now();try{await o.request({method:"net_listening"}),r=1}catch{r=0}finally{t=Date.now()}return{latency:t-i,success:r}}));s.push(i),s.length>r&&s.shift();let f=Math.max(...s.map(e=>Math.max(...e.map(({latency:e})=>e))));t(o.map((e,n)=>{let t=s.map(e=>e[n].latency),r=t.reduce((e,n)=>e+n,0)/t.length,u=s.map(e=>e[n].success),o=u.reduce((e,n)=>e+n,0)/u.length;return 0===o?[0,n]:[a*(1-r/f)+c*o,n]}).sort((e,n)=>n[0]-e[0]).map(([,e])=>o[e])),await (0,ny.D)(n),l()};l()}({chain:n,interval:e.interval??c,onTransports:e=>l=e,sampleCount:e.sampleCount,timeout:e.timeout,transports:l,weights:e.weights})}return d}}(e,n)}var nm=t(78863),ng=t(43018);t(12e3);var nb=t(32357),nw=t(60229),nC=t(18342);let nq=new Map;async function nv(e){let{getSocket:n,key:t="socket",reconnect:r=!0,url:u}=e,{attempts:o=5,delay:i=2e3}="object"==typeof r?r:{},c=nq.get(`${t}:${u}`);if(c)return c;let a=0,{schedule:s}=(0,nb.S)({id:`${t}:${u}`,fn:async()=>{let e,s;let l=new Map,f=new Map;async function d(){return n({onError(n){for(let t of(e=n,l.values()))t.onError?.(e);for(let n of f.values())n.onError?.(e);l.clear(),f.clear(),r&&a<o&&setTimeout(async()=>{a++,s=await d().catch(console.error)},i)},onOpen(){e=void 0,a=0},onResponse(e){let n="eth_subscription"===e.method,t=n?e.params.subscription:e.id,r=n?f:l,u=r.get(t);u&&u.onResponse(e),n||r.delete(t)}})}return s=await d(),e=void 0,c={close(){s.close(),nq.delete(`${t}:${u}`)},socket:s,request({body:n,onError:t,onResponse:r}){e&&t&&t(e);let u=n.id??nC.d.take(),o=e=>{("number"!=typeof e.id||u===e.id)&&("eth_subscribe"===n.method&&"string"==typeof e.result&&f.set(e.result,{onResponse:o,onError:t}),"eth_unsubscribe"===n.method&&f.delete(n.params?.[0]),r(e))};l.set(u,{onResponse:o,onError:t});try{s.request({body:{jsonrpc:"2.0",id:u,...n}})}catch(e){t?.(e)}},requestAsync({body:e,timeout:n=1e4}){return(0,nw.F)(()=>new Promise((n,t)=>this.request({body:e,onError:t,onResponse:n})),{errorInstance:new nm.W5({body:e,url:u}),timeout:n})},requests:l,subscriptions:f,url:u},nq.set(`${t}:${u}`,c),[c]}}),[l,[f]]=await s();return f}async function nI(e,n={}){let{reconnect:r}=n;return nv({async getSocket({onError:n,onOpen:r,onResponse:u}){let o=await t.e(7621).then(t.bind(t,54943)).then(e=>e.WebSocket),i=new o(e);function c(){i.removeEventListener("close",c),i.removeEventListener("message",a),i.removeEventListener("error",n),i.removeEventListener("open",r)}function a({data:e}){u(JSON.parse(e))}i.addEventListener("close",c),i.addEventListener("message",a),i.addEventListener("error",n),i.addEventListener("open",r),i.readyState===o.CONNECTING&&await new Promise((e,n)=>{i&&(i.onopen=e,i.onerror=n)});let{close:s}=i;return Object.assign(i,{close(){s.bind(i)(),c()},request({body:e}){if(i.readyState===i.CLOSED||i.readyState===i.CLOSING)throw new nm.c9({body:e,url:i.url,details:"Socket is closed."});return i.send(JSON.stringify(e))}})},reconnect:r,url:e})}async function nE(e){let n=await nI(e);return Object.assign(n.socket,{requests:n.requests,subscriptions:n.subscriptions})}function nP(e,n={}){let{key:t="webSocket",name:r="WebSocket JSON-RPC",reconnect:u,retryDelay:o}=n;return({chain:i,retryCount:c,timeout:a})=>{let s=n.retryCount??c,l=a??n.timeout??1e4,f=e||i?.rpcUrls.default.webSocket?.[0];if(!f)throw new ng.I;return(0,nh.q)({key:t,name:r,async request({method:e,params:n}){let t={method:e,params:n},r=await nI(f,{reconnect:u}),{error:o,result:i}=await r.requestAsync({body:t,timeout:l});if(o)throw new nm.bs({body:t,error:o,url:f});return i},retryCount:s,retryDelay:o,timeout:l,type:"webSocket"},{getSocket:()=>nE(f),getRpcClient:()=>nI(f),async subscribe({params:e,onData:n,onError:t}){let r=await nI(f),{result:u}=await new Promise((u,o)=>r.request({body:{method:"eth_subscribe",params:e},onResponse(e){if(e.error){o(e.error),t?.(e.error);return}if("number"==typeof e.id){u(e);return}"eth_subscription"===e.method&&n(e.params)}}));return{subscriptionId:u,unsubscribe:async()=>new Promise(e=>r.request({body:{method:"eth_unsubscribe",params:[u]},onResponse:e}))}}})}}var nK=t(7760);function nF(e,n={}){let{type:t}=e,{key:r="connector",name:u="Connector",retryDelay:o}=n;return e=>{let{chain:i,connectors:c}=e,a=n.retryCount??e.retryCount,s=async({method:e,params:n})=>{let r=c?.getState().find(e=>e.type===t);if(!r)throw new nd.u5(Error(`Could not find connector of type "${t}" in \`connectors\` passed to \`createConfig\`.`));let u=await r.getProvider({chainId:i?.id});if(!u)throw new nd.u5(Error("Provider is disconnected."));let o=(0,eL.ly)(await (0,nK.J)(()=>(0,nw.F)(()=>u.request({method:"eth_chainId"}),{timeout:100})));if(i&&o!==i.id)throw new nd.I0(Error(`The current chain of the connector (id: ${o}) does not match the target chain for the request (id: ${i.id} – ${i.name}).`));return u.request({method:e,params:n})};return(0,nh.q)({key:r,name:u,request:s,retryCount:a,retryDelay:o,type:"connector"})}}var nk=t(1381);let nS={getItem:e=>"undefined"==typeof window?null:nT(document.cookie,e)??null,setItem(e,n){"undefined"!=typeof window&&(document.cookie=`${e}=${n};path=/;samesite=Lax`)},removeItem(e){"undefined"!=typeof window&&(document.cookie=`${e}=;max-age=-1;path=/`)}};function nx(e,n){if(!n)return;let t=nT(n,`${e.storage?.key}.store`);if(t)return(0,nk.v)(t).state}function nT(e,n){let t=e.split("; ").find(e=>e.startsWith(`${n}=`));if(t)return t.substring(n.length+1)}function nM(e){if("string"==typeof e)return Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10);if("bigint"==typeof e)return Number(e);if("number"==typeof e)return e;throw Error(`Cannot normalize chainId "${e}" of type "${typeof e}"`)}var nN=t(54379),nO=t(27319),nZ=t(17897),nR=t(81713),nA=t(3980),nD=t(71506),nB=t(74751),nW=t(14777),n$=t(30204)},42757:function(e,n,t){t.d(n,{O:function(){return f}});var r=t(30202),u=t(97712),o=t(81946),i=t(36100),c=t(45631),a=t(82002),s=t(80666),l=t(97861);function f(e={}){let{query:n={},watch:t}=e,f=(0,s.Z)(e),d=(0,r.NL)(),y=(0,a.x)({config:f}),h=e.chainId??y,p=function(e,n={}){return{gcTime:0,async queryFn({queryKey:n}){let{scopeKey:t,...r}=n[1];return await function(e,n={}){let{chainId:t,...r}=n,i=e.getClient({chainId:t});return(0,o.s)(i,u.z,"getBlockNumber")(r)}(e,r)??null},queryKey:function(e={}){return["blockNumber",(0,i.OP)(e)]}(n)}}(f,{...e,chainId:h});return(0,l.x)({...{config:e.config,chainId:e.chainId,..."object"==typeof t?t:{}},enabled:!!((n.enabled??!0)&&("object"==typeof t?t.enabled:t)),onBlockNumber(e){d.setQueryData(p.queryKey,e)}}),(0,c.aM)({...n,...p})}},97861:function(e,n,t){t.d(n,{x:function(){return a}});var r=t(65185),u=t(81946),o=t(67294),i=t(82002),c=t(80666);function a(e={}){let{enabled:n=!0,onBlockNumber:t,config:a,...s}=e,l=(0,c.Z)(e),f=(0,i.x)({config:l}),d=e.chainId??f;(0,o.useEffect)(()=>{if(n&&t)return function(e,n){let t,o;let{syncConnectedChain:i=e._internal.syncConnectedChain,...c}=n,a=n=>{t&&t();let o=e.getClient({chainId:n});return t=(0,u.s)(o,r.q,"watchBlockNumber")(c)},s=a(n.chainId);return i&&!n.chainId&&(o=e.subscribe(({chainId:e})=>e,async e=>a(e))),()=>{s?.(),o?.()}}(l,{...s,chainId:d,onBlockNumber:t})},[d,l,n,t,s.onError,s.emitMissed,s.emitOnBegin,s.poll,s.pollingInterval,s.syncConnectedChain])}}}]);