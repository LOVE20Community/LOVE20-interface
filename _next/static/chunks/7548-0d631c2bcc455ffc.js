"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7548],{93461:function(e,t,n){n.d(t,{Z:function(){return a}});let a=(0,n(31134).Z)("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]])},23432:function(e,t,n){n.d(t,{Z:function(){return a}});let a=(0,n(31134).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},89469:function(e,t,n){n.d(t,{p:function(){return z}});var a=n(30202),r=n(79524),c=n(92106);async function s(e,{chain:t}){let{id:n,name:a,nativeCurrency:r,rpcUrls:s,blockExplorers:i}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:(0,c.eC)(n),chainName:a,nativeCurrency:r,rpcUrls:s.default.http,blockExplorerUrls:i?Object.values(i).map(({url:e})=>e):void 0}]},{dedupe:!0,retryCount:0})}var i=n(30286),o=n(96128),u=n(45775);async function d(e){return e.account?.type==="local"?[e.account.address]:(await e.request({method:"eth_accounts"},{dedupe:!0})).map(e=>(0,u.x)(e))}async function l(e){return await e.request({method:"wallet_getPermissions"},{dedupe:!0})}var h=n(76404);async function y(e){return(await e.request({method:"eth_requestAccounts"},{dedupe:!0,retryCount:0})).map(e=>(0,u.K)(e))}async function p(e,t){return e.request({method:"wallet_requestPermissions",params:[t]},{retryCount:0})}var m=n(99238),f=n(22980),w=n(14503),C=n(8998),g=n(33840),T=n(74688),q=n(93714),v=n(47531);async function _(e,t){let{account:n=e.account,chain:a=e.chain,...s}=t;if(!n)throw new C.o({docsPath:"/docs/actions/wallet/signTransaction"});let i=(0,w.T)(n);(0,v.F)({account:i,...t});let o=await (0,q.s)(e,r.L,"getChainId")({});null!==a&&(0,g.q)({currentChainId:o,chain:a});let u=a?.formatters||e.chain?.formatters,d=u?.transactionRequest?.format||T.tG;return"local"===i.type?i.signTransaction({...s,chainId:o},{serializer:e.chain?.serializers?.transaction}):await e.request({method:"eth_signTransaction",params:[{...d(s),chainId:(0,c.eC)(o),from:i.address}]},{retryCount:0})}var I=n(71352);async function P(e,t){let{account:n=e.account,domain:a,message:r,primaryType:c}=t;if(!n)throw new C.o({docsPath:"/docs/actions/wallet/signTypedData"});let s=(0,w.T)(n),i={EIP712Domain:(0,I.cj)({domain:a}),...t.types};if((0,I.iC)({domain:a,message:r,primaryType:c,types:i}),"local"===s.type)return s.signTypedData({domain:a,message:r,primaryType:c,types:i});let o=(0,I.H6)({domain:a,message:r,primaryType:c,types:i});return e.request({method:"eth_signTypedData_v4",params:[s.address,o]},{retryCount:0})}async function k(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,c.eC)(t)}]},{retryCount:0})}async function E(e,t){return await e.request({method:"wallet_watchAsset",params:t},{retryCount:0})}var N=n(61877);function b(e){return{addChain:t=>s(e,t),deployContract:t=>(function(e,t){let{abi:n,args:a,bytecode:r,...c}=t,s=(0,i.w)({abi:n,args:a,bytecode:r});return(0,o.T)(e,{...c,data:s})})(e,t),getAddresses:()=>d(e),getChainId:()=>(0,r.L)(e),getPermissions:()=>l(e),prepareTransactionRequest:t=>(0,h.Z)(e,t),requestAddresses:()=>y(e),requestPermissions:t=>p(e,t),sendRawTransaction:t=>(0,m.p)(e,t),sendTransaction:t=>(0,o.T)(e,t),signMessage:t=>(0,f.l)(e,t),signTransaction:t=>_(e,t),signTypedData:t=>P(e,t),switchChain:t=>k(e,t),watchAsset:t=>E(e,t),writeContract:t=>(0,N.n)(e,t)}}var Z=n(75230);async function x(e,t={}){return(await (0,Z.e)(e,t)).extend(b)}var A=n(36100),D=n(67294),M=n(82451),L=n(92321),R=n(82002),U=n(37122);function z(e={}){let{query:t={},...n}=e,r=(0,U.Z)(n),c=(0,a.NL)(),{address:s,connector:i,status:o}=(0,L.m)({config:r}),u=(0,R.x)({config:r}),d=e.connector??i,{queryKey:l,...h}=function(e,t={}){return{gcTime:0,async queryFn({queryKey:n}){let{connector:a}=t,{connectorUid:r,scopeKey:c,...s}=n[1];return x(e,{...s,connector:a})},queryKey:function(e={}){let{connector:t,...n}=e;return["walletClient",{...(0,A.OP)(n),connectorUid:t?.uid}]}(t)}}(r,{...e,chainId:e.chainId??u,connector:e.connector??i}),y=!!(("connected"===o||"reconnecting"===o&&d?.getProvider)&&(t.enabled??!0)),p=(0,D.useRef)(s);return(0,D.useEffect)(()=>{let e=p.current;!s&&e?(c.removeQueries({queryKey:l}),p.current=void 0):s!==e&&(c.invalidateQueries({queryKey:l}),p.current=s)},[s,c]),(0,M.aM)({...t,...h,queryKey:l,enabled:y,staleTime:Number.POSITIVE_INFINITY})}}}]);