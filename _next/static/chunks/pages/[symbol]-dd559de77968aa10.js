(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6189],{26783:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[symbol]",function(){return t(90387)}])},34680:function(e,s,t){"use strict";t.d(s,{Ol:function(){return d},SZ:function(){return c},Zb:function(){return l},aY:function(){return o},eW:function(){return u},ll:function(){return i}});var n=t(85893),r=t(67294),a=t(40108);let l=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,n.jsx)("div",{ref:s,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...r})});l.displayName="Card";let d=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,n.jsx)("div",{ref:s,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",t),...r})});d.displayName="CardHeader";let i=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,n.jsx)("div",{ref:s,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",t),...r})});i.displayName="CardTitle";let c=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,n.jsx)("div",{ref:s,className:(0,a.cn)("text-sm text-muted-foreground",t),...r})});c.displayName="CardDescription";let o=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,n.jsx)("div",{ref:s,className:(0,a.cn)("p-6 pt-0",t),...r})});o.displayName="CardContent";let u=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,n.jsx)("div",{ref:s,className:(0,a.cn)("flex items-center p-6 pt-0",t),...r})});u.displayName="CardFooter"},7191:function(e,s,t){"use strict";var n=t(85893);t(67294);var r=t(3125),a=t(74089);s.Z=e=>{let{currentRound:s,roundName:t}=e,{data:l}=(0,r.O)(),d=Number("100")||0,i=Number("12")||0,c=l?d-Number(l)%d:0;return(0,n.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,n.jsxs)("h1",{className:"text-lg font-bold",children:[t," 第 ",(0,n.jsx)("span",{className:"text-secondary",children:Number(null!=s?s:0n)})," 轮"]}),(0,n.jsxs)("span",{className:"text-sm text-greyscale-400 mt-1 pt-0",children:["本轮剩余：",(0,n.jsx)(a.Z,{initialTimeLeft:c>0?c*i:0})]})]})}},34054:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return y}});var n=t(85893),r=t(5028),a=t(67294),l=t(7399),d=t(93778),i=t(91529),c=t(42083),o=t(7191),u=e=>{let{currentRound:s}=e,{token:t}=(0,a.useContext)(d.M)||{},{rewardAvailable:u,isPending:x,error:m}=(0,l.CY)((null==t?void 0:t.address)||""),{joinedAmount:f,isPending:j,error:N}=(0,r.fP)((null==t?void 0:t.address)||"",s);return(0,n.jsxs)("div",{className:"px-6",children:[(0,n.jsx)(o.Z,{currentRound:s,roundName:"行动轮"}),(0,n.jsxs)("div",{className:"stats w-full border grid grid-cols-2 divide-x-0",children:[(0,n.jsxs)("div",{className:"stat place-items-center",children:[(0,n.jsx)("div",{className:"stat-title",children:"预计新增铸币"}),(0,n.jsx)("div",{className:"stat-value text-2xl",children:x||void 0===u?(0,n.jsx)(c.Z,{}):(0,i.LH)(99n*u/10000n)})]}),(0,n.jsxs)("div",{className:"stat place-items-center",children:[(0,n.jsx)("div",{className:"stat-title",children:"参与行动代币"}),(0,n.jsx)("div",{className:"stat-value text-2xl",children:j?(0,n.jsx)(c.Z,{}):(0,i.LH)(f||BigInt(0))})]})]})]})},x=t(58732),m=t(41664),f=t.n(m),j=t(92321),N=t(34680),h=t(45551),v=t(94782),p=t(64777),b=e=>{let{currentRound:s}=e,{token:t}=(0,a.useContext)(d.M)||{},{address:r}=(0,j.m)(),{actions:l,isPending:o,error:u}=(0,h.jA)((null==t?void 0:t.address)||"",s);null==l||l.sort((e,s)=>Number(e.actionId)-Number(s.actionId));let x=null==l?void 0:l.map(e=>e.actionId),m=(null==l?void 0:l.reduce((e,s)=>e+s.votesNum,0n))||0n,{actionInfos:b,isPending:g,error:y}=(0,v.fT)((null==t?void 0:t.address)||"",x||[]),{joinedActions:w,isPending:C,error:Z}=(0,h.dB)((null==t?void 0:t.address)||"",r);return o||x&&x.length>0&&g||C?(0,n.jsx)("div",{className:"p-4 flex justify-center items-center",children:(0,n.jsx)(c.Z,{})}):u||y||Z?(console.error("errorJoinableActions",u),console.error("errorActionInfosByIds",y),console.error("errorJoinedActions",Z),(0,n.jsx)("div",{children:"加载出错，请稍后再试。"})):(0,n.jsxs)("div",{className:"p-6",children:[(0,n.jsx)(p.Z,{title:"进行中的行动"}),(null==x?void 0:x.length)?(0,n.jsx)("div",{className:"mt-4 space-y-4",children:null==b?void 0:b.map((e,s)=>{let r=(null==w?void 0:w.some(s=>s.actionId===BigInt(e.head.id)))?"/".concat(null==t?void 0:t.symbol,"/action/").concat(e.head.id,"?type=join"):"/".concat(null==t?void 0:t.symbol,"/acting/join?id=").concat(e.head.id);return(0,n.jsx)(N.Zb,{className:"shadow-none",children:(0,n.jsxs)(f(),{href:r,children:[(0,n.jsxs)(N.Ol,{className:"px-3 pt-2 pb-1 flex-row justify-start items-baseline",children:[(0,n.jsx)("span",{className:"text-greyscale-400 text-sm mr-1",children:"No.".concat(e.head.id)}),(0,n.jsx)("span",{className:"font-bold text-greyscale-800",children:"".concat(e.body.action)})]}),(0,n.jsxs)(N.aY,{className:"px-3 pt-1 pb-2",children:[(0,n.jsx)("div",{className:"text-greyscale-500",children:e.body.consensus}),(0,n.jsxs)("div",{className:"flex justify-between mt-1 text-sm",children:[(0,n.jsxs)("span",{children:[(0,n.jsx)("span",{className:"text-greyscale-400 mr-1",children:"投票占比"}),(0,n.jsxs)("span",{className:"text-secondary",children:[(100*Number((null==l?void 0:l[s].votesNum)||0n)/Number(m)).toFixed(1),"%"]})]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("span",{className:"text-greyscale-400 mr-1",children:"参与代币数"}),(0,n.jsx)("span",{className:"text-secondary",children:(0,i.LH)((null==l?void 0:l[s].joinedAmount)||0n)})]})]})]})]})},e.head.id)})}):(0,n.jsx)("div",{className:"text-sm text-greyscale-500 text-center",children:"没有行动"})]})},g=t(66247),y=()=>{let{currentRound:e}=(0,r.Bk)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x.Z,{title:"社区首页"}),(0,n.jsxs)("main",{className:"flex-grow",children:[(0,n.jsx)(g.Z,{}),(0,n.jsx)(u,{currentRound:e}),(0,n.jsx)(b,{currentRound:e})]})]})}},90387:function(e,s,t){"use strict";t.r(s);var n=t(85893),r=t(67294),a=t(93778),l=t(42083),d=t(34054),i=t(79355);s.default=()=>{let{token:e}=(0,r.useContext)(a.M)||{};return e?e.hasEnded?(0,n.jsx)(d.default,{}):(0,n.jsx)(i.default,{}):(0,n.jsx)(l.Z,{})}}},function(e){e.O(0,[1664,7221,7548,1502,2432,6697,19,6638,9355,2888,9774,179],function(){return e(e.s=26783)}),_N_E=e.O()}]);