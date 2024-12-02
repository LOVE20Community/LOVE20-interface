import { useContext, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

import { formatTokenAmount } from '@/src/lib/format';
import { TOKEN_CONFIG } from '@/src/config/tokenConfig';
import { Token, TokenContext } from '@/src/contexts/TokenContext';
import { LaunchInfo } from '@/src/types/life20types';
import { useContributed, useClaimed, useExtraRefunded, useClaim } from '@/src/hooks/contracts/useLOVE20Launch';
import LoadingIcon from '@/src/components/Common/LoadingIcon';
import LeftTitle from '../Common/LeftTitle';

const Claim: React.FC<{ token: Token; launchInfo: LaunchInfo }> = ({ token, launchInfo }) => {
  const { address: account } = useAccount();
  const context = useContext(TokenContext);
  const { setToken } = context || {};

  // 读取数据的hooks
  const {
    contributed,
    isPending: isContributedPending,
    error: contributedError,
  } = useContributed(token?.address as `0x${string}`, account as `0x${string}`);
  const {
    claimed,
    isPending: isClaimedPending,
    error: claimedError,
  } = useClaimed(token?.address as `0x${string}`, account as `0x${string}`);
  const {
    extraRefunded,
    isPending: isExtraRefundedPending,
    error: extraRefundedError,
  } = useExtraRefunded(token?.address as `0x${string}`, account as `0x${string}`);

  // 计算待领取代币数量
  const gotTokens = launchInfo.totalContributed
    ? (BigInt(TOKEN_CONFIG.fairLaunch) * (contributed || 0n)) / BigInt(launchInfo.totalContributed)
    : 0n;

  // 领取代币hook
  const {
    claim,
    isWriting: isClaiming,
    writeError: claimError,
    isConfirming: isClaimConfirming,
    isConfirmed: isClaimConfirmed,
  } = useClaim();

  // 领取代币
  const handleClaim = async () => {
    try {
      await claim(token?.address as `0x${string}`);
    } catch (error) {
      console.error('领取失败:', error);
    }
  };

  // 领取成功
  useEffect(() => {
    if (isClaimConfirmed) {
      toast.success(`领取成功`);

      // 将token 的hasEnded 设置为true
      setToken?.({ ...token, hasEnded: true } as Token);

      // 2秒后刷新
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else if (claimError) {
      toast.error(`领取失败`);
    }
  }, [isClaimConfirmed, claimError]);

  if (isClaimedPending) {
    return <LoadingIcon />;
  }

  return (
    <div className="p-6">
      <LeftTitle title="我的领取" />

      <div className="stats w-full border mt-4">
        <div className="stat place-items-center">
          <div className="stat-title text-sm mr-6">共获得</div>
          <div className="stat-value text-secondary">
            {formatTokenAmount(gotTokens)}
            <span className="text-greyscale-500 font-normal text-sm ml-2">{token.symbol}</span>
          </div>
        </div>
      </div>

      <div className="stats w-full grid grid-cols-2 divide-x-0">
        <div className="stat place-items-center">
          <div className="stat-value text-xl">
            <span className="text-sm font-normal text-greyscale-500">质押 </span>
            {formatTokenAmount(contributed || 0n)}
            {isContributedPending ? (
              <LoadingIcon />
            ) : (
              <span className="text-sm font-normal text-greyscale-500 ml-1">{token?.parentTokenSymbol}</span>
            )}
          </div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-value text-xl">
            <span className="text-sm font-normal text-greyscale-500">退回 </span>
            {formatTokenAmount(extraRefunded || 0n)}
            {isExtraRefundedPending ? (
              <LoadingIcon />
            ) : (
              <span className="text-sm font-normal text-greyscale-500 ml-1">{token?.parentTokenSymbol}</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        {Number(contributed) <= 0 && (
          <Button className="w-1/2" disabled>
            未申购
          </Button>
        )}
        {Number(contributed) > 0 && !claimed && (
          <Button className="w-1/2" onClick={handleClaim} disabled={isClaiming || isClaimConfirming}>
            {isClaiming || isClaimConfirming ? '领取中...' : '领取'}
          </Button>
        )}
        {Number(contributed) > 0 && claimed && (
          <Button className="w-1/2" disabled>
            已领取
          </Button>
        )}
      </div>
      {claimError && <div className="text-red-500">{claimError.message}</div>}
      {contributedError && <div className="text-red-500">{contributedError.message}</div>}
      {extraRefundedError && <div className="text-red-500">{extraRefundedError.message}</div>}
      {claimedError && <div className="text-red-500">{claimedError.message}</div>}
    </div>
  );
};

export default Claim;