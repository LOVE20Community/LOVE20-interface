(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[788],{68786:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/launch",function(){return a(81943)}])},34426:function(e,s,a){"use strict";a.d(s,{Z:function(){return o}});var t=a(85893),n=a(67294),l=a(23432),r=a(93461),c=a(92321),d=a(32209),i=a(86501);function o(e){let{tokenAddress:s,tokenSymbol:a,tokenDecimals:o,tokenImage:x}=e,[m,h]=(0,n.useState)(!1),{isConnected:u}=(0,c.m)(),{data:j}=(0,d.p)(),v=async()=>{if(!u){alert("请先连接你的钱包");return}h(!0);try{if(!j){alert("无法获取钱包客户端");return}await j.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:s,symbol:a,decimals:o,image:x}}})?(console.log("代币已添加到 MetaMask 钱包"),i.ZP.success("代币已成功添加到 MetaMask 钱包")):(console.log("用户拒绝添加代币"),i.ZP.error("用户拒绝添加代币"))}catch(e){console.error("添加代币失败:",e),i.ZP.error("添加代币失败，请检查控制台以获取更多信息")}finally{h(!1)}};return(0,t.jsx)("button",{onClick:v,disabled:m,className:"flex items-center justify-center p-1 rounded hover:bg-gray-200 focus:outline-none",children:m?(0,t.jsx)(l.Z,{className:"h-4 w-4 animate-spin"}):(0,t.jsx)(r.Z,{className:"h-4 w-4 text-greyscale-500"})})}},27460:function(e,s,a){"use strict";var t=a(85893),n=a(86501),l=a(74855),r=a(18289),c=a(91529);s.Z=e=>{let{address:s,showCopyButton:a=!0,showAddress:d=!0,colorClassName:i=""}=e;return(0,t.jsxs)("span",{className:"flex items-center space-x-2",children:[d&&(0,t.jsx)("span",{className:"text-xs ".concat(null!=i?i:"text-greyscale-500"),children:(0,c.Vu)(s)}),a&&(0,t.jsx)(l.CopyToClipboard,{text:s,onCopy:(e,s)=>{s?n.ZP.success("复制成功"):n.ZP.error("复制失败")},children:(0,t.jsx)("button",{className:"flex items-center justify-center p-1 rounded hover:bg-gray-200 focus:outline-none",onClick:e=>{e.preventDefault(),e.stopPropagation()},"aria-label":"复制地址",children:(0,t.jsx)(r.Z,{className:"h-4 w-4 ".concat(null!=i?i:"text-greyscale-500")})})})]})}},74089:function(e,s,a){"use strict";var t=a(85893),n=a(67294);s.Z=e=>{let{initialTimeLeft:s}=e,[a,l]=(0,n.useState)(s);(0,n.useEffect)(()=>{if(s<=0)return;l(s);let e=setInterval(()=>{l(s=>s<=1?(clearInterval(e),window.location.reload(),0):s-1)},1e3);return()=>{clearInterval(e)}},[s]);let r=Math.floor(a/86400);return(0,t.jsxs)("div",{className:"inline-flex gap-1  text-secondary",children:[r>0&&(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"countdown font-mono",children:(0,t.jsx)("span",{style:{"--value":r}})}),"天"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"countdown font-mono",children:(0,t.jsx)("span",{style:{"--value":Math.floor(a%86400/3600)}})}),"时"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"countdown font-mono",children:(0,t.jsx)("span",{style:{"--value":Math.floor(a%3600/60)}})}),"分"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"countdown font-mono",children:(0,t.jsx)("span",{style:{"--value":a%60}})}),"秒"]})]})}},66247:function(e,s,a){"use strict";a.d(s,{Z:function(){return x}});var t=a(85893),n=a(67294),l=a(93778),r=a(19638),c=a(42083),d=a(27460),i=a(34426),o=e=>{let{}=e,{token:s}=(0,n.useContext)(l.M)||{};return s?(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)("div",{className:"mr-2",children:(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("span",{className:"font-bold text-2xl mr-2",children:s.symbol}),(0,t.jsx)(d.Z,{address:s.address}),(0,t.jsx)(i.Z,{tokenAddress:s.address,tokenSymbol:s.symbol||"",tokenDecimals:s.decimals||0})]})})}):(0,t.jsx)(c.Z,{})};function x(){let{token:e}=(0,n.useContext)(l.M)||{},{totalSupply:s,isPending:a,error:d}=(0,r.A5)((null==e?void 0:e.address)||""),[i,x]=(0,n.useState)(!1);return(null==e?void 0:e.address)?(0,t.jsxs)("div",{className:"px-6 pt-2 pb-6",children:[(0,t.jsx)(o,{}),!1]}):(0,t.jsx)(c.Z,{})}},81943:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return Z}});var t=a(85893),n=a(67294),l=a(93778),r=a(70019),c=a(58732),d=a(42083),i=a(91529),o=a(42757);let x={totalSupply:1e28,fairLaunch:1e27,govRewards:45e26,actionRewards:45e26};var m=a(74089),h=e=>{let{token:s,launchInfo:a}=e,{data:n}=(0,o.O)(),l=n?a.secondHalfMinBlocks-(n-a.secondHalfStartBlock):0,r=l>0?Number(l)*Number("12"):0,c=Number(a.totalContributed)/Number(a.parentTokenFundraisingGoal),h=(100*c).toFixed(1);return a?s?(0,t.jsxs)("div",{className:"flex-col items-center px-6",children:[(0,t.jsxs)("div",{className:"stats w-full grid grid-cols-2 divide-x-0",children:[(0,t.jsxs)("div",{className:"stat place-items-center",children:[(0,t.jsxs)("div",{className:"stat-title text-sm",children:[(0,t.jsxs)("span",{className:"text-secondary",children:[s.symbol," "]}),"发射总量"]}),(0,t.jsx)("div",{className:"stat-value text-xl",children:"".concat((0,i.LH)(BigInt(x.fairLaunch)))})]}),(0,t.jsxs)("div",{className:"stat place-items-center",children:[(0,t.jsxs)("div",{className:"stat-title text-sm",children:[(0,t.jsxs)("span",{className:"text-secondary",children:[s.parentTokenSymbol," "]}),"筹集目标"]}),(0,t.jsx)("div",{className:"stat-value text-xl",children:(0,i.LH)(a.parentTokenFundraisingGoal)})]})]}),(0,t.jsx)("div",{className:"stats w-full border",children:(0,t.jsxs)("div",{className:"stat place-items-center",children:[(0,t.jsx)("div",{className:"stat-title text-sm mr-6 ".concat(a.hasEnded?"text-secondary":""),children:a.hasEnded?"发射已结束":"已筹集到"}),(0,t.jsxs)("div",{className:"stat-value",children:[a.hasEnded&&(0,t.jsx)("span",{className:"text-greyscale-500 font-normal text-sm mr-2",children:"共筹得"}),(0,t.jsx)("span",{className:"".concat(a.hasEnded?"":"text-secondary"),children:(0,i.LH)(a.totalContributed)}),(0,t.jsx)("span",{className:"text-greyscale-500 font-normal text-sm ml-2",children:s.parentTokenSymbol})]}),(0,t.jsxs)("div",{className:"stat-desc pt-2",children:[a.hasEnded&&"超出筹集目标的 ".concat(s.parentTokenSymbol," 在申领时退还"),!a.hasEnded&&c<.5&&"已筹集".concat(h,"%，达到 50% 开始倒计时"),!a.hasEnded&&c>=.5&&l<=0&&"已筹集".concat(h,"%，达到 100% 即结束发射"),!a.hasEnded&&c>=.5&&l>0&&(0,t.jsxs)(t.Fragment,{children:[c<1?"发射结束至少要":"距离发射结束","：",(0,t.jsx)(m.Z,{initialTimeLeft:r})]})]})]})}),(0,t.jsxs)("div",{className:"bg-gray-100 text-greyscale-500 rounded-lg p-4 mt-2 text-sm",children:[(0,t.jsx)("p",{className:"mb-1 font-medium",children:"经济模型："}),(0,t.jsxs)("p",{children:["1. 代币总量：",(0,i.LH)(BigInt(x.totalSupply))]}),(0,t.jsxs)("p",{children:["2. 发射数量：",(0,i.LH)(BigInt(x.fairLaunch))," (10%)"]}),(0,t.jsxs)("p",{children:["3. 治理激励：",(0,i.LH)(BigInt(x.govRewards))," (45%)"]}),(0,t.jsxs)("p",{children:["4. 行动激励：",(0,i.LH)(BigInt(x.actionRewards))," (45%)"]}),(0,t.jsx)("p",{className:"mt-2 mb-1 font-medium",children:"发射规则："}),(0,t.jsx)("p",{children:"1. 代币发放：按申购数量占比比例发放"}),(0,t.jsx)("p",{children:"2. 超过募集目标的父币，将按申购比例返还"})]})]}):(0,t.jsx)(d.Z,{}):(0,t.jsx)("div",{className:"text-red-500",children:"找不到发射信息"})},u=a(92321),j=a(27245),v=a(41664),N=a.n(v),p=a(64777),f=e=>{let{token:s,launchInfo:a}=e,{address:n}=(0,u.m)(),{contributed:l,isPending:c,error:d}=(0,r.ap)(null==s?void 0:s.address,n);return s?(0,t.jsxs)("div",{className:"p-6",children:[(0,t.jsx)(p.Z,{title:"参与申购"}),(0,t.jsx)("div",{className:"stats w-full",children:(0,t.jsxs)("div",{className:"stat place-items-center",children:[(0,t.jsx)("div",{className:"stat-title text-sm mr-6",children:"我的申购质押"}),(0,t.jsxs)("div",{className:"stat-value text-secondary",children:[(0,i.LH)(l||0n),(0,t.jsx)("span",{className:"text-greyscale-500 font-normal text-sm ml-2",children:s.parentTokenSymbol})]})]})}),(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)(j.z,{variant:"outline",size:"sm",className:"w-1/2 text-secondary border-secondary",asChild:!0,children:(0,t.jsx)(N(),{href:"/launch/contribute?symbol=".concat(s.symbol),children:"去申购"})})})]}):""},y=a(86501),g=e=>{let{token:s,launchInfo:a}=e,{address:c}=(0,u.m)(),{setToken:o}=(0,n.useContext)(l.M)||{},{contributed:m,isPending:h,error:v}=(0,r.ap)(null==s?void 0:s.address,c),{claimed:f,isPending:g,error:b}=(0,r.ur)(null==s?void 0:s.address,c),{extraRefunded:w,isPending:k,error:Z}=(0,r.Vh)(null==s?void 0:s.address,c),E=a.totalContributed?BigInt(x.fairLaunch)*(m||0n)/BigInt(a.totalContributed):0n,{claim:C,isWriting:L,writeError:P,isConfirming:I,isConfirmed:M}=(0,r.z7)(),T=async()=>{try{await C(null==s?void 0:s.address)}catch(e){console.error("领取失败:",e)}};return((0,n.useEffect)(()=>{M?(y.ZP.success("领取成功"),null==o||o({...s,hasEnded:!0}),setTimeout(()=>{window.location.reload()},2e3)):P&&y.ZP.error("领取失败")},[M,P]),c)?g?(0,t.jsx)(d.Z,{}):(0,t.jsxs)("div",{className:"p-6",children:[(0,t.jsx)(p.Z,{title:"我的领取"}),(0,t.jsx)("div",{className:"stats w-full border mt-4",children:(0,t.jsxs)("div",{className:"stat place-items-center",children:[(0,t.jsx)("div",{className:"stat-title text-sm mr-6",children:"共获得"}),(0,t.jsxs)("div",{className:"stat-value text-secondary",children:[(0,i.LH)(E),(0,t.jsx)("span",{className:"text-greyscale-500 font-normal text-sm ml-2",children:s.symbol})]})]})}),(0,t.jsxs)("div",{className:"stats w-full grid grid-cols-2 divide-x-0",children:[(0,t.jsx)("div",{className:"stat place-items-center",children:(0,t.jsxs)("div",{className:"stat-value text-xl",children:[(0,t.jsx)("span",{className:"text-sm font-normal text-greyscale-500",children:"质押 "}),(0,i.LH)(m||0n),h?(0,t.jsx)(d.Z,{}):(0,t.jsx)("span",{className:"text-sm font-normal text-greyscale-500 ml-1",children:null==s?void 0:s.parentTokenSymbol})]})}),(0,t.jsx)("div",{className:"stat place-items-center",children:(0,t.jsxs)("div",{className:"stat-value text-xl",children:[(0,t.jsx)("span",{className:"text-sm font-normal text-greyscale-500",children:"退回 "}),(0,i.LH)(w||0n),k?(0,t.jsx)(d.Z,{}):(0,t.jsx)("span",{className:"text-sm font-normal text-greyscale-500 ml-1",children:null==s?void 0:s.parentTokenSymbol})]})})]}),(0,t.jsxs)("div",{className:"flex justify-center space-x-4",children:[0>=Number(m)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j.z,{className:"w-1/2",disabled:!0,children:"未申购"}),(0,t.jsx)(j.z,{className:"w-1/2",asChild:!0,children:(0,t.jsx)(N(),{href:"/launch/burn?symbol=".concat(null==s?void 0:s.symbol),children:"底池销毁"})})]}),Number(m)>0&&!f&&(0,t.jsx)(j.z,{className:"w-1/2",onClick:T,disabled:L||I||M,children:L?"领取中...":I?"确认中...":M?"已领取":"领取"}),Number(m)>0&&f&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j.z,{className:"w-1/2",disabled:!0,children:"已领取"}),(0,t.jsx)(j.z,{className:"w-1/2",asChild:!0,children:(0,t.jsx)(N(),{href:"/launch/burn?symbol=".concat(null==s?void 0:s.symbol),children:"底池销毁"})})]})]}),P&&(0,t.jsx)("div",{className:"text-red-500",children:P.message}),v&&(0,t.jsx)("div",{className:"text-red-500",children:v.message}),Z&&(0,t.jsx)("div",{className:"text-red-500",children:Z.message}),b&&(0,t.jsx)("div",{className:"text-red-500",children:b.message})]}):""},b=a(66247);let w=(0,a(31134).Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);var k=e=>{let{token:s,launchInfo:a}=e;return(0,t.jsxs)("div",{className:"p-6",children:[(0,t.jsx)(p.Z,{title:"部署子币"}),(0,t.jsx)("div",{className:"w-full text-center",children:(0,t.jsx)(j.z,{variant:"outline",size:"sm",className:"mt-2 w-1/2 text-secondary border-secondary",asChild:!0,children:(0,t.jsxs)(N(),{href:"/launch/deploy?symbol=".concat(null==s?void 0:s.symbol),children:[(0,t.jsx)(w,{className:"w-4 h-4"}),"去部署"]})})}),(0,t.jsxs)("div",{className:"bg-gray-100 text-greyscale-500 rounded-lg p-4 text-sm mt-4",children:[(0,t.jsx)("p",{className:"mb-1",children:"说明："}),(0,t.jsxs)("p",{children:["1. 部署者：须持有$",null==s?void 0:s.symbol,"不少于 0.5%的治理票"]}),(0,t.jsxs)("p",{children:["2. 子币发射目标：须筹集 20,000,000个 ",null==s?void 0:s.symbol]})]})]})};function Z(){let{token:e,setToken:s}=(0,n.useContext)(l.M)||{token:null,setToken:null},{launchInfo:a,isPending:i,error:o}=(0,r.zL)(e?e.address:"0x0");return((0,n.useEffect)(()=>{a&&e&&a.hasEnded&&!e.hasEnded&&s&&s({...e,hasEnded:!0})},[a,e,s]),i)?(0,t.jsx)(d.Z,{}):o?(0,t.jsx)("div",{className:"text-red-500",children:"加载发射信息失败"}):a?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Z,{title:"公平发射"}),(0,t.jsxs)("main",{className:"flex-grow",children:[(0,t.jsx)(b.Z,{}),(0,t.jsx)(h,{token:e,launchInfo:a}),!a.hasEnded&&e&&(0,t.jsx)(f,{token:e,launchInfo:a}),a.hasEnded&&e&&(0,t.jsx)(g,{token:e,launchInfo:a}),a.hasEnded&&e&&(0,t.jsx)(k,{token:e,launchInfo:a})]})]}):(0,t.jsx)("div",{className:"text-red-500",children:"找不到发射信息"})}}},function(e){e.O(0,[1664,2209,3543,4637,4335,2888,9774,179],function(){return e(e.s=68786)}),_N_E=e.O()}]);