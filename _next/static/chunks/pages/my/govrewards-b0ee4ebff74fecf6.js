(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9280],{37162:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my/govrewards",function(){return n(27029)}])},68655:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(31134).Z)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]])},23432:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(31134).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},64777:function(e,t,n){"use strict";var r=n(85893);t.Z=e=>{let{title:t}=e;return(0,r.jsx)("div",{className:"flex justify-between items-center",children:(0,r.jsx)("h1",{className:"text-lg font-bold",children:t})})}},44576:function(e,t,n){"use strict";var r=n(85893);n(67294);var s=n(23432);t.Z=e=>{let{isLoading:t,text:n="Loading"}=e;return t?(0,r.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50",children:(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)(s.Z,{className:"mx-auto h-8 w-8 animate-spin text-white"}),(0,r.jsx)("p",{className:"mt-2 text-sm font-medium text-white",children:n})]})}):null}},37436:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(85893),s=n(9008),a=n.n(s),i=n(67294),o=n(3294),l=n(68655),d=n(12003),u=n(40108);let c=(0,d.j)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),m=i.forwardRef((e,t)=>{let{className:n,variant:s,...a}=e;return(0,r.jsx)("div",{ref:t,role:"alert",className:(0,u.cn)(c({variant:s}),n),...a})});m.displayName="Alert";let f=i.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("h5",{ref:t,className:(0,u.cn)("mb-1 font-medium leading-none tracking-tight",n),...s})});f.displayName="AlertTitle";let x=i.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,r.jsx)("div",{ref:t,className:(0,u.cn)("text-sm [&_p]:leading-relaxed",n),...s})});x.displayName="AlertDescription";var h=n(95049);let g=()=>{let{error:e,setError:t}=(0,h.V)(),[n,s]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{e&&s(!0)},[e,t]),n&&e)?(0,r.jsxs)(m,{variant:"destructive",children:[(0,r.jsx)(l.Z,{className:"h-4 w-4"}),(0,r.jsx)(f,{children:e.name}),(0,r.jsx)(x,{children:e.message})]}):null};var N=n(5884),T=n(92321),v=e=>{let{title:t}=e,{address:n,chain:s}=(0,T.m)(),{setError:l}=(0,h.V)();return(0,i.useEffect)(()=>{n&&!s&&l({name:n?"钱包网络错误":"未连接钱包",message:n?"请切换到 ".concat("sepolia"," 网络"):"请先连接钱包，再进行操作"})},[n,s]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"".concat(t," - LIFE20")}),(0,r.jsx)("meta",{name:"".concat(t," - LIFE20"),content:"A Web3 DApp for Life20 token management"})]}),(0,r.jsxs)("header",{className:"flex justify-between items-center py-2 px-4",children:[(0,r.jsx)(N.vP,{className:"-ml-1"}),(0,r.jsx)(o.NL,{})]}),(0,r.jsx)("div",{className:"px-4",children:(0,r.jsx)(g,{})})]})}},67068:function(e,t,n){"use strict";n.d(t,{S:function(){return i}});let r={launch:{AlreadyInitialized:"已初始化，无需再次初始化",InvalidTokenSymbol:"无效的代币符号",TokenSymbolExists:"代币符号已存在",NotEligibleToDeployToken:"不符合部署代币的条件",LaunchAlreadyEnded:"公平发射已结束，无法进行操作",LaunchNotEnded:"公平发射未结束，无法进行操作",NoContribution:"没有申购，无法操作",TokensAlreadyClaimed:"代币已领取，请勿重复领取",TransferFailed:"转账失败，请稍后重试",LaunchAlreadyExists:"公平发射已存在",ParentTokenNotSet:"父代币未设置",ZeroContribution:"申购数量不能为0",InvalidParentToken:"无效的父代币"},join:{AlreadyInitialized:"已初始化",AmountIsZero:"数量不能为0",AddressCannotBeZero:"地址不能为空",CannotGenerateAtCurrentRound:"不能在当前轮次生成",LastBlocksOfRoundCannotJoin:"每轮最后一些区块不能加入",ActionNotVoted:"该行动本轮没有投票",TransferFailed:"转账失败",InvalidToAddress:"目标地址无效",JoinedAmountIsZero:"加入数量为0",NotInWhiteList:"该地址不在白名单",JoinAmountExceedsMaxStake:"加入数量超过最大质押数量",RoundsIsZero:"轮次为0",RoundNotStarted:"轮次还没有开始，请耐心等待"},mint:{RoundNotFinished:"轮次未结束，无法铸造代币奖励",NoRewardAvailable:"没有奖励可用",RoundStartMustBeLessOrEqualToRoundEnd:"轮次开始必须小于或等于轮次结束",NotEnoughReward:"奖励不足，无法铸造",NotEnoughRewardToBurn:"奖励不足，无法销毁",RoundNotStarted:"轮次还没有开始，请耐心等待"},stake:{NotAllowedToStakeAtRoundZero:"不允许在0轮进行质押",InvalidToAddress:"无效的接收地址",StakeAmountMustBeSet:"质押数量必须大于0",ReleaseAlreadyRequested:"已请求释放",PromisedWaitingRoundsOutOfRange:"承诺等待的轮次超出范围",PromisedWaitingRoundsMustBeGreaterOrEqualThanBefore:"承诺等待的轮次必须大于或等于之前的轮次",NoStakedLiquidity:"无质押的流动性",NoStakedLiquidityOrToken:"没有质押的流动性或代币",AlreadyUnstaked:"已解除质押，无需再次解除",UnableToUnstakeAtRoundZero:"无法在第0轮解除质押",NotEnoughWaitingRounds:"等待轮次数量不足",RoundHasNotStartedYet:"轮次尚未开始",TokenAmountNotEnough:"代币数量不足",TransferTokenAmountForLPFailed:"为LP转账代币数量失败",TransferParentTokenAmountForLPFailed:"为LP转账父代币数量失败",TransferTokenAmountFailed:"转账代币数量失败",TransferSLTokenFailed:"转账SL代币失败",TransferSTTokenFailed:"转账ST代币失败",TransferParentTokenFailed:"转账父代币失败","transfer amount exceeds balance":"转账数量超过余额"},submit:{CannotSubmitAction:"您没有权限提交提案，请先质押获取足够代理票数",ActionIdNotExist:"提案ID不存在",ProposalIndexOutOfRange:"提案索引超出范围",StartGreaterThanEnd:"开始时间大于结束时间",MaxStakeZero:"最大质押数量必须大于0",MaxRandomAccountsZero:"最大随机账户数量必须大于0",AlreadySubmitted:"该提案已提交，请勿重复提交",OnlyOneSubmitPerRound:"每个轮次，1个地址只能提交1个行动"},token:{AlreadyInitialized:"已初始化",InvalidAddress:"无效的地址",NotEligibleToMint:"不符合铸造代币的条件",ExceedsMaxSupply:"超过最大供应量",InsufficientBalance:"余额不足",TransferFailed:"转账失败，请稍后重试",InvalidSupply:"无效的供应量"},slToken:{NotEligibleToMint:"不符合铸造代币的条件",InvalidAddress:"无效的地址",NoTokensToBurn:"没有代币可销毁",InsufficientLiquidity:"流动性不足",TotalLpExceedsBalance:"总LP数量超过余额",TransferFailed:"转账失败，请稍后重试"},stToken:{NotEligibleToMint:"不符合铸造代币的条件",InvalidAddress:"无效的地址",NoTokensToBurn:"没有代币可销毁",TransferFailed:"转账失败，请稍后重试"},verify:{AlreadyInitialized:"已初始化",AddressCannotBeZero:"地址不能为空",FirstTokenAddressCannotBeZero:"第一个代币地址不能为空",RandomAddressCannotBeZero:"随机地址不能为空",ScoresAndAccountsLengthMismatch:"分数和地址数量不匹配",ScoresExceedVotesNum:"分数超过投票数量",RoundNotStarted:"轮次还没有开始，请耐心等待"},vote:{InvalidActionIds:"无效的提案ID",CannotVote:"没有权限投票",NotEnoughVotesLeft:"投票数量不足",VotesMustBeGreaterThanZero:"投票数量必须大于0"},uniswapV2Router:{EXPIRED:"交易已过期，请重新交易",INSUFFICIENT_A_AMOUNT:"A代币数量不足，请调整输入数量",INSUFFICIENT_B_AMOUNT:"B代币数量不足，请调整输入数量",INSUFFICIENT_OUTPUT_AMOUNT:"目标代币数量不足，请调整输入数量",EXCESSIVE_INPUT_AMOUNT:"输入数量过多，请调整输入数量",INVALID_PATH:"无效的兑换路径"}};var s=n(95049),a=n(67294);let i=()=>{let{setError:e}=(0,s.V)();return{handleContractError:(0,a.useCallback)((t,n)=>{console.error("context",n),console.error("error",t),e(function(e,t){let n=null!=e?e:"",s=n.match(/(?:([A-Za-z0-9_]+)\()|(?:ERC20:\s*(.+))/),a="";s&&(void 0!=s[1]||void 0!=s[2])&&(s[1]?a=s[1]:s[2]&&(a="".concat(s[2])));let i=r[t];if(i&&i[a])return{name:"交易错误",message:i[a]};let o=n.match(/User denied transaction signature/)?"用户取消了交易":"";if(o)return{name:"交易提示",message:o};let l=function(e){let t=e.split("\n").find(e=>e.trim().startsWith("Error:"));if(t){var n;let e=null===(n=t.split("Error:")[1])||void 0===n?void 0:n.trim();if(e)return e}let r=e.split("\n"),s=r.findIndex(e=>e.includes("the following reason:"));if(-1!==s&&s+1<r.length){let e=r[s+1].trim();if(e)return e}return""}(n);return l?{name:"交易错误",message:l}:{name:"交易错误",message:"交易失败，请稍后刷新重试"}}(t.message,n))},[e])}}},91529:function(e,t,n){"use strict";n.d(t,{LH:function(){return i},Vu:function(){return a},bM:function(){return l},cK:function(){return d},vz:function(){return o}});var r=n(21803),s=n(15229);let a=e=>e?"".concat(e.substring(0,6),"...").concat(e.substring(e.length-4)):"",i=e=>{let t=l(e);return new Intl.NumberFormat("en-US",{maximumFractionDigits:4}).format(Number(t))},o=e=>{let t=parseInt("18",10);try{return(0,r.v)(e,t)}catch(e){return console.error("parseUnits error:",e),0n}},l=e=>{let t=parseInt("18",10);return(0,s.b)(e,t)},d=(e,t)=>e&&t?e-BigInt(t.initialStakeRound)+1n:0n},48105:function(e,t,n){"use strict";n.d(t,{S:function(){return s}});var r=n(86501);let s=e=>!!e||(r.Am.error("请先将钱包链接 ".concat("sepolia")),!1)},27029:function(e,t,n){"use strict";n.r(t);var r=n(85893),s=n(67294),a=n(92321),i=n(27245),o=n(48105),l=n(91529),d=n(93778),u=n(45551),c=n(67068),m=n(7399),f=n(37436),x=n(64777),h=n(42083),g=n(44576);t.default=()=>{let{token:e}=(0,s.useContext)(d.M)||{},{address:t,chain:n}=(0,a.m)(),{currentRound:N,error:T}=(0,m.Bk)(),[v,A]=(0,s.useState)(0n),[I,b]=(0,s.useState)(0n);(0,s.useEffect)(()=>{N&&e&&(N-BigInt(e.initialStakeRound)>=0n?b(N):b(BigInt(e.initialStakeRound)))},[N,e]),(0,s.useEffect)(()=>{I&&e&&(I-BigInt(e.initialStakeRound)>=20n?A(I-20n):A(BigInt(e.initialStakeRound)))},[I,e]);let{rewards:k,isPending:y,error:p}=(0,u.Ci)(null==e?void 0:e.address,t,v,I),[E,S]=(0,s.useState)([]);(0,s.useEffect)(()=>{k&&S([...k].sort((e,t)=>e.round>t.round?-1:1))},[k]);let{mintGovReward:j,isWriting:R,isConfirming:w,isConfirmed:L,writeError:B}=(0,m.xg)(),[F,Z]=(0,s.useState)(null);(0,s.useEffect)(()=>{L&&S(e=>e.map(e=>e.round===F?{...e,unminted:0n,minted:e.unminted}:e))},[L]);let C=async r=>{(0,o.S)(n)&&(null==e?void 0:e.address)&&t&&(Z(r),await j(e.address,r))},{handleContractError:_}=(0,c.S)();return((0,s.useEffect)(()=>{p&&_(p,"dataViewer"),T&&_(T,"mint"),B&&_(B,"mint")},[p,T,B]),y)?(0,r.jsx)(h.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{title:"治理激励"}),(0,r.jsxs)("main",{className:"flex-grow",children:[(0,r.jsxs)("div",{className:"flex flex-col space-y-6 p-4",children:[(0,r.jsx)(x.Z,{title:"铸造治理奖励"}),(0,r.jsxs)("table",{className:"table w-full table-auto",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,r.jsx)("th",{children:"轮次"}),(0,r.jsx)("th",{className:"text-center",children:"待领取奖励"}),(0,r.jsx)("th",{})]})}),(0,r.jsx)("tbody",{children:E.map(t=>(0,r.jsxs)("tr",{className:"border-b border-gray-100",children:[(0,r.jsx)("td",{children:e?(0,l.cK)(t.round,e).toString():"-"}),(0,r.jsx)("td",{className:"text-center",children:(0,l.LH)(t.unminted)}),(0,r.jsx)("td",{className:"text-center",children:t.unminted>0n?(0,r.jsx)(i.z,{variant:"outline",size:"sm",className:"text-secondary border-secondary",onClick:()=>C(t.round),disabled:R||w,children:"领取"}):t.minted>0n?(0,r.jsx)("span",{className:"text-secondary",children:"已领取"}):(0,r.jsx)("span",{className:"text-greyscale-500",children:"无奖励"})})]},t.round.toString()))})]})]}),(0,r.jsx)(g.Z,{isLoading:R||w,text:R?"提交交易...":"确认交易..."})]})]})}},9008:function(e,t,n){e.exports=n(23867)},21803:function(e,t,n){"use strict";function r(e,t){let[n,r="0"]=e.split("."),s=n.startsWith("-");if(s&&(n=n.slice(1)),r=r.replace(/(0+)$/,""),0===t)1===Math.round(Number(`.${r}`))&&(n=`${BigInt(n)+1n}`),r="";else if(r.length>t){let[e,s,a]=[r.slice(0,t-1),r.slice(t-1,t),r.slice(t)],i=Math.round(Number(`${s}.${a}`));(r=i>9?`${BigInt(e)+BigInt(1)}0`.padStart(e.length+1,"0"):`${e}${i}`).length>t&&(r=r.slice(1),n=`${BigInt(n)+1n}`),r=r.slice(0,t)}else r=r.padEnd(t,"0");return BigInt(`${s?"-":""}${n}${r}`)}n.d(t,{v:function(){return r}})}},function(e){e.O(0,[5112,2888,9774,179],function(){return e(e.s=37162)}),_N_E=e.O()}]);