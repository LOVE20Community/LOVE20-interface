(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[846],{77474:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[symbol]/my/govrewards",function(){return s(21057)}])},91318:function(e,n,s){"use strict";var t=s(85893);n.Z=()=>(0,t.jsx)("span",{className:"flex justify-center items-center",children:(0,t.jsxs)("svg",{className:"animate-spin h-5 w-5 mr-3 text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,t.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,t.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8v8H4z"})]})})},35337:function(e,n,s){"use strict";s.d(n,{Z:function(){return u}});var t=s(85893),r=s(9008),a=s.n(r),c=s(67294),l=s(45420),i=s(41664),o=s.n(i),d=s(93778),h=()=>{let[e,n]=(0,c.useState)(!1),{token:s}=(0,c.useContext)(d.M)||{};return s?(0,t.jsxs)("div",{children:[(0,t.jsxs)("button",{className:"ml-4 mt-2 focus:outline-none",onClick:()=>{n(!e)},children:[(0,t.jsx)("div",{className:"w-6 h-1 bg-black mb-1"}),(0,t.jsx)("div",{className:"w-6 h-1 bg-black mb-1"}),(0,t.jsx)("div",{className:"w-6 h-1 bg-black"})]}),e&&(0,t.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40",onClick:()=>{n(!1)}}),(0,t.jsx)("div",{className:"fixed top-0 left-0 z-50 h-full w-64 bg-gray-800 text-white transform ".concat(e?"translate-x-0":"-translate-x-full"," transition-transform duration-300 ease-in-out"),children:(0,t.jsxs)("ul",{className:"mt-8",children:[(0,t.jsx)("li",{className:"p-4 hover:bg-gray-700",children:(0,t.jsx)(o(),{href:"/".concat(s.symbol,"/acting"),children:(0,t.jsx)("span",{children:"社区首页"})})}),(0,t.jsx)("li",{className:"p-4 hover:bg-gray-700",children:(0,t.jsx)(o(),{href:"/".concat(s.symbol,"/gov"),children:(0,t.jsx)("span",{children:"治理首页"})})}),(0,t.jsx)("li",{className:"p-4 hover:bg-gray-700",children:(0,t.jsx)(o(),{href:"/".concat(s.symbol,"/my"),children:(0,t.jsx)("span",{children:"我的首页"})})}),(0,t.jsx)("li",{className:"p-4 hover:bg-gray-700",children:(0,t.jsx)(o(),{href:"/tokens",children:(0,t.jsx)("span",{children:"所有代币"})})}),(0,t.jsx)("li",{className:"p-4 hover:bg-gray-700",children:(0,t.jsx)(o(),{href:"/".concat(s.symbol,"/launch"),children:(0,t.jsx)("span",{children:"发射平台"})})}),(0,t.jsx)("li",{className:"p-4 hover:bg-gray-700",children:(0,t.jsx)(o(),{href:"/".concat(s.symbol,"/dex/swap"),children:(0,t.jsx)("span",{children:"交易代币"})})}),(0,t.jsx)("li",{className:"p-4 hover:bg-gray-700",children:(0,t.jsx)(o(),{href:"/".concat(s.symbol,"/launch/deposit"),children:(0,t.jsxs)("span",{children:["兑换","ETH20"]})})})]})})]}):""},u=e=>{let{title:n}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a(),{children:[(0,t.jsx)("title",{children:"".concat(n," - LIFE20")}),(0,t.jsx)("meta",{name:"".concat(n," - LIFE20"),content:"A Web3 DApp for Life20 token management"})]}),(0,t.jsxs)("header",{className:"flex justify-between items-center p-4 bg-white border-b border-gray-100",children:[(0,t.jsx)(h,{}),(0,t.jsx)(l.NL,{})]})]})}},91529:function(e,n,s){"use strict";s.d(n,{LH:function(){return c},Vu:function(){return a},ZC:function(){return o},bM:function(){return i},vz:function(){return l}});var t=s(21803),r=s(15229);let a=e=>e?"".concat(e.substring(0,6),"...").concat(e.substring(e.length-4)):"",c=e=>{let n=i(e);return new Intl.NumberFormat("en-US",{maximumFractionDigits:2}).format(Number(n))},l=e=>{let n=parseInt("18",10);return(0,t.v)(e,n)},i=e=>{let n=parseInt("18",10);return(0,r.b)(e,n)},o=e=>e>86400?"".concat(Math.floor(e/86400),"天").concat(Math.floor(e%86400/3600),"小时").concat(Math.floor(e%3600/60),"分"):e>3600?"".concat(Math.floor(e/3600),"小时").concat(Math.floor(e%3600/60),"分"):"".concat(Math.floor(e/60),"分").concat(e%60,"秒")},21057:function(e,n,s){"use strict";s.r(n);var t=s(85893),r=s(67294),a=s(92321),c=s(93778),l=s(45551),i=s(7399),o=s(91529),d=s(35337),h=s(91318);n.default=()=>{let{token:e}=(0,r.useContext)(c.M)||{},{address:n}=(0,a.m)(),{currentRound:s}=(0,i.Bk)(),u=s?s-1n:0n,{rewards:x,isPending:m,error:b}=(0,l.Ci)(null==e?void 0:e.address,n,u,u>20n?u-20n:0n),[f,j]=(0,r.useState)([]);(0,r.useEffect)(()=>{x&&j([...x].sort((e,n)=>e.round>n.round?-1:1))},[x]);let{mintGovReward:g,isWriting:p,isConfirming:N,isConfirmed:y,writeError:v}=(0,i.xg)();(0,r.useEffect)(()=>{y&&j(e=>e.map(e=>e.unminted>0n?{...e,unminted:0n}:e))},[y]);let w=async s=>{(null==e?void 0:e.address)&&n&&await g(e.address,s)};return m?(0,t.jsx)(h.Z,{}):b?(0,t.jsxs)("div",{className:"text-red-500",children:["发生错误: ",b.message]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.Z,{title:"行动详情"}),(0,t.jsx)("main",{className:"flex-grow",children:(0,t.jsxs)("div",{className:"flex flex-col space-y-6 p-4 bg-white ",children:[(0,t.jsx)("h2",{className:"relative pl-4 text-gray-700 text-base font-medium before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-red-500",children:"铸造治理奖励"}),(0,t.jsxs)("table",{className:"table w-full table-auto",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,t.jsx)("th",{children:"轮次"}),(0,t.jsx)("th",{children:"奖励"}),(0,t.jsx)("th",{})]})}),(0,t.jsx)("tbody",{children:f.map(e=>(0,t.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,t.jsx)("td",{children:e.round.toString()}),(0,t.jsx)("td",{children:(0,o.LH)(e.unminted)}),(0,t.jsx)("td",{children:e.unminted>0n?(0,t.jsx)("button",{className:"btn btn-sm ".concat(p||N?"btn-disabled":"btn-primary"),onClick:()=>w(e.round),disabled:p||N,children:p||N?"领取中...":"领取"}):e.minted>0n?(0,t.jsx)("span",{className:"text-green-500",children:"已领取"}):(0,t.jsx)("span",{className:"text-gray-500",children:"无奖励"})})]},e.round.toString()))})]}),v&&(0,t.jsxs)("div",{className:"text-red-500 mt-2",children:["领取失败: ",v.message]})]})})]})}},21803:function(e,n,s){"use strict";function t(e,n){let[s,t="0"]=e.split("."),r=s.startsWith("-");if(r&&(s=s.slice(1)),t=t.replace(/(0+)$/,""),0===n)1===Math.round(Number(`.${t}`))&&(s=`${BigInt(s)+1n}`),t="";else if(t.length>n){let[e,r,a]=[t.slice(0,n-1),t.slice(n-1,n),t.slice(n)],c=Math.round(Number(`${r}.${a}`));(t=c>9?`${BigInt(e)+BigInt(1)}0`.padStart(e.length+1,"0"):`${e}${c}`).length>n&&(t=t.slice(1),s=`${BigInt(s)+1n}`),t=t.slice(0,n)}else t=t.padEnd(n,"0");return BigInt(`${r?"-":""}${s}${t}`)}s.d(n,{v:function(){return t}})}},function(e){e.O(0,[9689,7399,2888,9774,179],function(){return e(e.s=77474)}),_N_E=e.O()}]);