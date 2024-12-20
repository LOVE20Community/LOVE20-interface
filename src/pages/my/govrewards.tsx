import React, { useEffect, useState, useContext } from 'react';
import { useAccount } from 'wagmi';
import { Button } from '@/components/ui/button';

import { checkWalletConnection } from '@/src/utils/web3';
import { GovReward } from '@/src/types/life20types';
import { TokenContext } from '@/src/contexts/TokenContext';
import { useGovRewardsByAccountByRounds } from '@/src/hooks/contracts/useLOVE20DataViewer';
import { useMintGovReward, useCurrentRound } from '@/src/hooks/contracts/useLOVE20Mint';
import { formatTokenAmount } from '@/src/lib/format';
import Header from '@/src/components/Header';
import LeftTitle from '@/src/components/Common/LeftTitle';
import LoadingIcon from '@/src/components/Common/LoadingIcon';
import LoadingOverlay from '@/src/components/Common/LoadingOverlay';

const GovRewardsPage: React.FC = () => {
  const { token } = useContext(TokenContext) || {};
  const { address: accountAddress, chain: accountChain } = useAccount();

  const { currentRound } = useCurrentRound();
  const startRound = currentRound ? currentRound - 1n : 0n;
  const endRound = startRound > 20n ? startRound - 20n : 0n;

  // 获取治理奖励
  const {
    rewards,
    isPending: isLoadingRewards,
    error: errorLoadingRewards,
  } = useGovRewardsByAccountByRounds(
    token?.address as `0x${string}`,
    accountAddress as `0x${string}`,
    startRound,
    endRound,
  );

  const [rewardList, setRewardList] = useState<GovReward[]>([]);
  useEffect(() => {
    if (rewards) {
      setRewardList([...rewards].sort((a, b) => (a.round > b.round ? -1 : 1))); // 按round倒序排列
    }
  }, [rewards]);

  // 铸造治理奖励
  const { mintGovReward, isWriting, isConfirming, isConfirmed, writeError } = useMintGovReward();
  const [mintingRound, setMintingRound] = useState<bigint | null>(null);
  useEffect(() => {
    if (isConfirmed) {
      setRewardList((prev) =>
        prev.map((item) => (item.round === mintingRound ? { ...item, unminted: 0n, minted: item.unminted } : item)),
      );
    }
  }, [isConfirmed]);

  const handleClaim = async (round: bigint) => {
    if (!checkWalletConnection(accountChain)) {
      return;
    }
    if (token?.address && accountAddress) {
      setMintingRound(round);
      await mintGovReward(token.address, round);
    }
  };

  if (isLoadingRewards) return <LoadingIcon />;
  if (errorLoadingRewards) return <div className="text-red-500">发生错误: {errorLoadingRewards.message}</div>;

  return (
    <>
      <Header title="治理激励" />
      <main className="flex-grow">
        <div className="flex flex-col space-y-6 p-6">
          <LeftTitle title="铸造治理奖励" />

          <table className="table w-full table-auto">
            <thead>
              <tr className="border-b border-gray-100">
                <th>轮次</th>
                <th className="text-center">待领取奖励</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rewardList.map((item) => (
                <tr key={item.round.toString()} className="border-b border-gray-100">
                  <td>{item.round.toString()}</td>
                  <td className="text-center">{formatTokenAmount(item.unminted)}</td>
                  <td className="text-center">
                    {item.unminted > 0n ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-secondary border-secondary"
                        onClick={() => handleClaim(item.round)}
                        disabled={isWriting || isConfirming}
                      >
                        领取
                      </Button>
                    ) : item.minted > 0n ? (
                      <span className="text-secondary">已领取</span>
                    ) : (
                      <span className="text-greyscale-500">无奖励</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {writeError && <div className="text-red-500 mt-2">领取失败: {writeError.message}</div>}
        </div>
        <LoadingOverlay isLoading={isWriting || isConfirming} text={isWriting ? '提交交易...' : '确认交易...'} />
      </main>
    </>
  );
};

export default GovRewardsPage;
