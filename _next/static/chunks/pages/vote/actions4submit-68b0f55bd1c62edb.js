(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1533],{67980:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vote/actions4submit",function(){return n(76422)}])},34680:function(e,t,n){"use strict";n.d(t,{Ol:function(){return c},SZ:function(){return l},Zb:function(){return i},aY:function(){return d},eW:function(){return u},ll:function(){return o}});var r=n(85893),a=n(67294),s=n(40108);let i=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",n),...a})});i.displayName="Card";let c=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",n),...a})});c.displayName="CardHeader";let o=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",n),...a})});o.displayName="CardTitle";let l=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",n),...a})});l.displayName="CardDescription";let d=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",n),...a})});d.displayName="CardContent";let u=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",n),...a})});u.displayName="CardFooter"},68655:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(31134).Z)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},23432:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(31134).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},64777:function(e,t,n){"use strict";var r=n(85893);t.Z=e=>{let{title:t}=e;return(0,r.jsx)("div",{className:"flex justify-between items-center",children:(0,r.jsx)("h1",{className:"text-lg font-bold",children:t})})}},42083:function(e,t,n){"use strict";var r=n(85893),a=n(23432);t.Z=()=>(0,r.jsx)(a.Z,{className:"mx-auto h-4 w-4 animate-spin text-greyscale-500"})},76422:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(85893),a=n(58732),s=n(94782),i=n(67294),c=n(27245),o=n(34680),l=n(41664),d=n.n(l),u=n(93778),f=n(42083),x=n(64777),m=e=>{let{currentRound:t}=e,{token:n}=(0,i.useContext)(u.M)||{},{actionInfos:a,isPending:l,error:m}=(0,s.s4)((null==n?void 0:n.address)||"",0n,100n,!1),{actionSubmits:h,isPending:p,error:y}=(0,s.WZ)((null==n?void 0:n.address)||"",t);return m?(console.error(m),(0,r.jsx)("div",{children:"加载出错，请稍后再试。"})):n?(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,r.jsx)(x.Z,{title:"所有行动"}),(0,r.jsx)(c.z,{variant:"outline",className:"text-secondary border-secondary",children:(0,r.jsx)(d(),{href:"/action/new",children:"发起新行动"})})]}),l||p?(0,r.jsx)(f.Z,{}):(0,r.jsx)("div",{className:"space-y-4",children:null==a?void 0:a.map((e,t)=>{let n=null==h?void 0:h.some(t=>t.actionId===e.head.id);return(0,r.jsx)(o.Zb,{className:"shadow-none",children:(0,r.jsxs)(d(),{href:"/action/".concat(e.head.id,"?type=submit&submitted=").concat(n),children:[(0,r.jsxs)(o.Ol,{className:"px-3 pt-2 pb-1 flex-row justify-start items-baseline",children:[(0,r.jsx)("span",{className:"text-greyscale-400 text-sm mr-1",children:"No.".concat(e.head.id)}),(0,r.jsx)("span",{className:"font-bold text-greyscale-800",children:"".concat(e.body.action)})]}),(0,r.jsxs)(o.aY,{className:"px-3 pt-1 pb-2",children:[(0,r.jsx)("div",{className:"text-base text-greyscale-600",children:e.body.consensus}),(0,r.jsx)("div",{className:"flex justify-between mt-1 text-sm",children:(0,r.jsx)("span",{className:"text-sm",children:n?(0,r.jsx)("span",{className:"text-secondary",children:"已推举"}):(0,r.jsx)("span",{className:"text-greyscale-600",children:"未推举"})})})]})]},e.head.id)},e.head.id)})})]}):(0,r.jsx)(f.Z,{})},h=()=>{let{currentRound:e,isPending:t,error:n}=(0,s.Bk)();return t?(0,r.jsx)(f.Z,{}):n?(console.error("errorCurrentRound",n),(0,r.jsx)("div",{children:"加载出错，请稍后再试。"})):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{title:"推举"}),(0,r.jsx)("main",{className:"flex-grow",children:(0,r.jsx)(m,{currentRound:e})})]})}},9008:function(e,t,n){e.exports=n(23867)},13876:function(e,t,n){"use strict";n.d(t,{a:function(){return i}});var r=n(66432),a=n(81946),s=n(87831);async function i(e,t){let n;let{abi:i,chainId:c,connector:o,...l}=t;n=t.account?t.account:(await (0,s.e)(e,{chainId:c,connector:o})).account;let d=e.getClient({chainId:c}),u=(0,a.s)(d,r.a,"simulateContract"),{result:f,request:x}=await u({...l,abi:i,account:n});return{chainId:d.chain.id,result:f,request:{__mode:"prepared",...x,chainId:c}}}},96128:function(e,t,n){"use strict";n.d(t,{T:function(){return p}});var r=n(14503),a=n(8998),s=n(33840),i=n(26445),c=n(33639),o=n(87469),l=n(61163),d=n(74688),u=n(93714),f=n(47531),x=n(79524),m=n(76404),h=n(99238);async function p(e,t){let{account:n=e.account,chain:p=e.chain,accessList:y,blobs:w,data:j,gas:v,gasPrice:N,maxFeePerBlobGas:g,maxFeePerGas:b,maxPriorityFeePerGas:C,nonce:R,to:Z,value:k,...T}=t;if(!n)throw new a.o({docsPath:"/docs/actions/wallet/sendTransaction"});let _=(0,r.T)(n);try{let n;if((0,f.F)(t),null!==p&&(n=await (0,u.s)(e,x.L,"getChainId")({}),(0,s.q)({currentChainId:n,chain:p})),"local"===_.type){let t=await (0,u.s)(e,m.Z,"prepareTransactionRequest")({account:_,accessList:y,blobs:w,chain:p,chainId:n,data:j,gas:v,gasPrice:N,maxFeePerBlobGas:g,maxFeePerGas:b,maxPriorityFeePerGas:C,nonce:R,parameters:[...m.Q,"sidecars"],to:Z,value:k,...T}),r=p?.serializers?.transaction,a=await _.signTransaction(t,{serializer:r});return await (0,u.s)(e,h.p,"sendRawTransaction")({serializedTransaction:a})}let r=e.chain?.formatters?.transactionRequest?.format,a=(r||d.tG)({...(0,l.K)(T,{format:r}),accessList:y,blobs:w,chainId:n,data:j,from:_.address,gas:v,gasPrice:N,maxFeePerBlobGas:g,maxFeePerGas:b,maxPriorityFeePerGas:C,nonce:R,to:Z,value:k});return await e.request({method:"eth_sendTransaction",params:[a]},{retryCount:0})}catch(e){throw function(e,{docsPath:t,...n}){let r=(()=>{let t=(0,o.k)(e,n);return t instanceof i.cj?e:t})();return new c.mk(r,{docsPath:t,...n})}(e,{...t,account:_,chain:t.chain||void 0})}}},61877:function(e,t,n){"use strict";n.d(t,{n:function(){return i}});var r=n(55629),a=n(93714),s=n(96128);async function i(e,t){let{abi:n,address:i,args:c,dataSuffix:o,functionName:l,...d}=t,u=(0,r.R)({abi:n,args:c,functionName:l});return(0,a.s)(e,s.T,"sendTransaction")({data:`${u}${o?o.replace("0x",""):""}`,to:i,...d})}},33840:function(e,t,n){"use strict";n.d(t,{q:function(){return a}});var r=n(80377);function a({chain:e,currentChainId:t}){if(!e)throw new r.Bk;if(t!==e.id)throw new r.Yl({chain:e,currentChainId:t})}},83540:function(e,t,n){"use strict";n.d(t,{A:function(){return x}});var r=n(95946),a=n(51973),s=n(23147),i=n(36083),c=n(81946);async function o(e,t){let{chainId:n,timeout:o=0,...l}=t,d=e.getClient({chainId:n}),u=(0,c.s)(d,a.e,"waitForTransactionReceipt"),f=await u({...l,timeout:o});if("reverted"===f.status){let e=(0,c.s)(d,s.f,"getTransaction"),t=await e({hash:f.transactionHash}),n=(0,c.s)(d,i.R,"call"),a=await n({...t,data:t.input,gasPrice:"eip1559"!==t.type?t.gasPrice:void 0,maxFeePerGas:"eip1559"===t.type?t.maxFeePerGas:void 0,maxPriorityFeePerGas:"eip1559"===t.type?t.maxPriorityFeePerGas:void 0});throw Error(a?.data?(0,r.rR)(`0x${a.data.substring(138)}`):"unknown reason")}return{...f,chainId:d.chain.id}}var l=n(36100),d=n(45631),u=n(82002),f=n(80666);function x(e={}){let{hash:t,query:n={}}=e,r=(0,f.Z)(e),a=(0,u.x)({config:r}),s=function(e,t={}){return{async queryFn({queryKey:n}){let{hash:r,...a}=n[1];if(!r)throw Error("hash is required");return o(e,{...a,onReplaced:t.onReplaced,hash:r})},queryKey:function(e={}){let{onReplaced:t,...n}=e;return["waitForTransactionReceipt",(0,l.OP)(n)]}(t)}}(r,{...e,chainId:e.chainId??a}),i=!!(t&&(n.enabled??!0));return(0,d.aM)({...n,...s,enabled:i})}},71366:function(e,t,n){"use strict";n.d(t,{S:function(){return u}});var r=n(98029),a=n(61877),s=n(81946),i=n(52425),c=n(87831),o=n(13876);async function l(e,t){let n,r;let{account:l,chainId:d,connector:u,__mode:f,...x}=t;n="object"==typeof l&&l?.type==="local"?e.getClient({chainId:d}):await (0,c.e)(e,{account:l??void 0,chainId:d,connector:u});let{connector:m}=(0,i.D)(e);if("prepared"===f||m?.supportsSimulation)r=x;else{let{request:t}=await (0,o.a)(e,{...x,account:l,chainId:d});r=t}let h=(0,s.s)(n,a.n,"writeContract");return await h({...r,...l?{account:l}:{},chain:d?{id:d}:null})}var d=n(80666);function u(e={}){var t;let{mutation:n}=e,a=(t=(0,d.Z)(e),{mutationFn:e=>l(t,e),mutationKey:["writeContract"]}),{mutate:s,mutateAsync:i,...c}=(0,r.D)({...n,...a});return{...c,writeContract:s,writeContractAsync:i}}}},function(e){e.O(0,[1664,1502,2888,9774,179],function(){return e(e.s=67980)}),_N_E=e.O()}]);