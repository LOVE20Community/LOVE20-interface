(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5781],{65160:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/launch/burn",function(){return n(72587)}])},76929:function(e,t,n){"use strict";n.d(t,{l0:function(){return u},NI:function(){return j},pf:function(){return b},Wi:function(){return x},xJ:function(){return p},lX:function(){return y},zG:function(){return g}});var s=n(85893),r=n(67294),l=n(4222),i=n(87536),a=n(40108),c=n(99489);let o=(0,n(12003).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(c.f,{ref:t,className:(0,a.cn)(o(),n),...r})});d.displayName=c.f.displayName;let u=i.RV,m=r.createContext({}),x=e=>{let{...t}=e;return(0,s.jsx)(m.Provider,{value:{name:t.name},children:(0,s.jsx)(i.Qr,{...t})})},f=()=>{let e=r.useContext(m),t=r.useContext(h),{getFieldState:n,formState:s}=(0,i.Gc)(),l=n(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:a}=t;return{id:a,name:e.name,formItemId:"".concat(a,"-form-item"),formDescriptionId:"".concat(a,"-form-item-description"),formMessageId:"".concat(a,"-form-item-message"),...l}},h=r.createContext({}),p=r.forwardRef((e,t)=>{let{className:n,...l}=e,i=r.useId();return(0,s.jsx)(h.Provider,{value:{id:i},children:(0,s.jsx)("div",{ref:t,className:(0,a.cn)("space-y-2",n),...l})})});p.displayName="FormItem";let y=r.forwardRef((e,t)=>{let{className:n,...r}=e,{error:l,formItemId:i}=f();return(0,s.jsx)(d,{ref:t,className:(0,a.cn)(l&&"text-destructive",n),htmlFor:i,...r})});y.displayName="FormLabel";let j=r.forwardRef((e,t)=>{let{...n}=e,{error:r,formItemId:i,formDescriptionId:a,formMessageId:c}=f();return(0,s.jsx)(l.g7,{ref:t,id:i,"aria-describedby":r?"".concat(a," ").concat(c):"".concat(a),"aria-invalid":!!r,...n})});j.displayName="FormControl";let b=r.forwardRef((e,t)=>{let{className:n,...r}=e,{formDescriptionId:l}=f();return(0,s.jsx)("p",{ref:t,id:l,className:(0,a.cn)("text-sm text-muted-foreground",n),...r})});b.displayName="FormDescription";let g=r.forwardRef((e,t)=>{let{className:n,children:r,...l}=e,{error:i,formMessageId:c}=f(),o=i?String(null==i?void 0:i.message):r;return o?(0,s.jsx)("p",{ref:t,id:c,className:(0,a.cn)("text-sm font-medium text-destructive",n),...l,children:o}):null});g.displayName="FormMessage"},68655:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});let s=(0,n(31134).Z)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},23432:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});let s=(0,n(31134).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},44576:function(e,t,n){"use strict";var s=n(85893);n(67294);var r=n(23432);t.Z=e=>{let{isLoading:t,text:n="Loading"}=e;return t?(0,s.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50",children:(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)(r.Z,{className:"mx-auto h-8 w-8 animate-spin text-white"}),(0,s.jsx)("p",{className:"mt-2 text-sm font-medium text-white",children:n})]})}):null}},48105:function(e,t,n){"use strict";n.d(t,{S:function(){return r}});var s=n(86501);let r=e=>!!e||(s.Am.error("请先将钱包链接 ".concat("sepolia")),!1)},72587:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var s=n(85893),r=n(67294),l=n(93778),i=n(70019),a=n(67068),c=n(1604),o=n(56312),d=n(87536),u=n(92321),m=n(86501),x=n(11163),f=n(27245),h=n(21774),p=n(76929),y=n(91529),j=n(48105),b=n(19638),g=n(64777),N=n(42083),v=n(44576),w=e=>{let{token:t,launchInfo:n}=e,{address:l,chain:i}=(0,u.m)(),w=(0,x.useRouter)(),{balance:k,isPending:C,error:S}=(0,b.hS)(null==t?void 0:t.address,l),{balance:A,isPending:z,error:I}=(0,b.hS)(null==t?void 0:t.parentTokenAddress,null==t?void 0:t.address),{totalSupply:E,isPending:F,error:$}=(0,b.A5)(null==t?void 0:t.address),_=(0,r.useMemo)(()=>c.z.object({burnAmount:c.z.string().nonempty({message:"请输入销毁数量"}).refine(e=>Number(e)>0,{message:"销毁数量不能为0"})}).refine(e=>{if(!k)return!0;try{return!!(0,y.vz)(e.burnAmount)&&(0,y.vz)(e.burnAmount)<=k}catch(e){return!1}},{message:"销毁数量不能超过您的余额",path:["burnAmount"]}),[k]),Z=(0,d.cI)({resolver:(0,o.F)(_),defaultValues:{burnAmount:""},mode:"onChange"}),[B,P]=(0,r.useState)(0n);(0,r.useEffect)(()=>{let e=Z.getValues("burnAmount");E&&A&&e&&P((0,y.vz)(e)*A/E)},[Z.watch("burnAmount"),E,A]);let{approve:T,isWriting:L,isConfirming:M,isConfirmed:R,writeError:D}=(0,b.yA)(null==t?void 0:t.address),V=async e=>{if((0,j.S)(i))try{await T("0xe0B30a9765ec1C58E07949B36107d501B9DB334b",(0,y.vz)(e.burnAmount))}catch(e){console.error(e)}};(0,r.useEffect)(()=>{R&&m.Am.success("授权成功")},[R]);let{burnForParentToken:W,isPending:X,isConfirming:G,isConfirmed:H,writeError:J}=(0,b.l3)(null==t?void 0:t.address),O=async e=>{if((0,j.S)(i))try{await W((0,y.vz)(e.burnAmount))}catch(e){console.error(e)}};(0,r.useEffect)(()=>{H&&(m.Am.success("销毁成功"),setTimeout(()=>{w.push("/launch?symbol=".concat(null==t?void 0:t.symbol))},2e3))},[H,w,null==t?void 0:t.symbol]);let{handleContractError:q}=(0,a.S)();(0,r.useEffect)(()=>{S&&q(S,"token"),I&&q(I,"token"),$&&q($,"token"),D&&q(D,"token"),J&&q(J,"token")},[S,I,$,D,J,q]);let Q=L||M||R;return!t||C?(0,s.jsx)(N.Z,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"p-6",children:[(0,s.jsx)(g.Z,{title:"底池销毁"}),(0,s.jsx)("div",{className:"stats w-full",children:(0,s.jsxs)("div",{className:"stat place-items-center",children:[(0,s.jsx)("div",{className:"stat-title text-sm mr-6",children:"底池总量"}),(0,s.jsxs)("div",{className:"stat-value text-secondary mt-2",children:[(0,y.LH)(A||0n),(0,s.jsx)("span",{className:"text-greyscale-500 font-normal text-sm ml-2",children:t.parentTokenSymbol})]}),(0,s.jsxs)("div",{className:"stat-desc text-sm mt-2",children:["销毁 ",t.symbol,"，可从底池取回 ",t.parentTokenSymbol]})]})}),(0,s.jsxs)("div",{className:"mt-6",children:[(0,s.jsx)(p.l0,{...Z,children:(0,s.jsxs)("form",{onSubmit:e=>e.preventDefault(),children:[(0,s.jsx)(p.Wi,{control:Z.control,name:"burnAmount",render:e=>{let{field:n}=e;return(0,s.jsxs)(p.xJ,{children:[(0,s.jsxs)(p.lX,{children:["要销毁的 ",t.symbol," 数量："]}),(0,s.jsx)(p.NI,{children:(0,s.jsx)(h.I,{type:"number",placeholder:"请输入数量",disabled:Q||0n>=(k||0n),className:"!ring-secondary-foreground",...n})}),(0,s.jsx)(p.zG,{})]})}}),(0,s.jsxs)("div",{className:"flex items-center text-sm",children:[(0,s.jsxs)("span",{className:"text-greyscale-400",children:["我的",t.symbol,": ",(0,s.jsx)("span",{className:"text-secondary",children:(0,y.LH)(k||0n)})]}),(0,s.jsx)(f.z,{variant:"link",size:"sm",onClick:()=>{Z.setValue("burnAmount",(0,y.bM)(k||0n))},disabled:Q||0n>=(k||0n),className:"text-secondary",children:"全选"})]}),(0,s.jsx)("div",{className:"flex items-center justify-end text-sm my-2",children:(0,s.jsxs)("span",{className:"text-greyscale-400",children:["预计可取回 ",(0,s.jsx)("span",{className:"text-secondary",children:(0,y.LH)(B)})," ",t.parentTokenSymbol]})}),(0,s.jsxs)("div",{className:"flex justify-center space-x-4",children:[(0,s.jsx)(f.z,{className:"w-1/2",onClick:Z.handleSubmit(V),disabled:Q,children:L?"1.授权中...":M?"1.确认中...":R?"1.已授权":"1.授权"}),(0,s.jsx)(f.z,{className:"w-1/2 text-white py-2 rounded-lg",onClick:Z.handleSubmit(O),disabled:!R||X||G||H,children:X?"2.销毁中...":G?"2.确认中...":H?"2.销毁成功":"2.销毁"})]})]})}),(0,s.jsxs)("div",{className:"bg-gray-100 text-greyscale-500 rounded-lg p-4 text-sm mt-4",children:[(0,s.jsx)("p",{className:"mb-1",children:"计算公式："}),(0,s.jsxs)("p",{children:["所得",t.parentTokenSymbol,"数量 = 底池",t.parentTokenSymbol,"总量 * (销毁",t.symbol,"数量 /"," ",t.symbol,"总发行量)"]})]})]})]}),(0,s.jsx)(v.Z,{isLoading:L||M||X||G,text:L||X?"提交交易...":"确认交易..."})]})},k=n(37436);function C(){let{token:e}=(0,r.useContext)(l.M)||{},{launchInfo:t,isPending:n,error:c}=(0,i.zL)(e?e.address:"0x0"),{handleContractError:o}=(0,a.S)();return((0,r.useEffect)(()=>{c&&o(c,"launch")},[c]),n)?(0,s.jsx)(N.Z,{}):t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k.Z,{title:"底池销毁"}),(0,s.jsx)("main",{className:"flex-grow",children:(0,s.jsx)(w,{token:e,launchInfo:t})})]}):(0,s.jsx)("div",{className:"text-red-500",children:"找不到发射信息"})}},9008:function(e,t,n){e.exports=n(23867)},21803:function(e,t,n){"use strict";function s(e,t){let[n,s="0"]=e.split("."),r=n.startsWith("-");if(r&&(n=n.slice(1)),s=s.replace(/(0+)$/,""),0===t)1===Math.round(Number(`.${s}`))&&(n=`${BigInt(n)+1n}`),s="";else if(s.length>t){let[e,r,l]=[s.slice(0,t-1),s.slice(t-1,t),s.slice(t)],i=Math.round(Number(`${r}.${l}`));(s=i>9?`${BigInt(e)+BigInt(1)}0`.padStart(e.length+1,"0"):`${e}${i}`).length>t&&(s=s.slice(1),n=`${BigInt(n)+1n}`),s=s.slice(0,t)}else s=s.padEnd(t,"0");return BigInt(`${r?"-":""}${n}${s}`)}n.d(t,{v:function(){return s}})}},function(e){e.O(0,[2624,4637,1492,2888,9774,179],function(){return e(e.s=65160)}),_N_E=e.O()}]);