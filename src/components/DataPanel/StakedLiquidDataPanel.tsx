import React, { useContext, useEffect } from 'react';

import { useTokenAmounts } from '@/src/hooks/contracts/useLOVE20SLToken';
import { TokenContext } from '@/src/contexts/TokenContext';
import { formatTokenAmount } from '@/src/lib/format';

import LoadingIcon from '@/src/components/Common/LoadingIcon';

interface StakedLiquidDataPanelProps {
  showStakeToken?: boolean;
  onTokenAmountChange?: (tokenAmount: bigint) => void;
}

const StakedLiquidDataPanel: React.FC<StakedLiquidDataPanelProps> = ({
  showStakeToken = true,
  onTokenAmountChange,
}) => {
  const { token } = useContext(TokenContext) || {};

  const {
    tokenAmount,
    parentTokenAmount,
    feeTokenAmount,
    feeParentTokenAmount,
    isPending: isPendingTokenAmount,
  } = useTokenAmounts(token?.slTokenAddress as `0x${string}`);

  useEffect(() => {
    if (onTokenAmountChange && !isPendingTokenAmount) {
      onTokenAmountChange(tokenAmount || BigInt(0)); // 当 tokenAmount 变化时调用回调函数
    }
  }, [tokenAmount, isPendingTokenAmount]);

  return (
    <>
      {isPendingTokenAmount ? (
        <LoadingIcon />
      ) : (
        <>
          <div className="text-sm text-greyscale-500 font-bold">流动性质押总量</div>
          <div className="flex w-full justify-center space-x-10">
            <span className="flex flex-col items-center">
              <span className="text-sm text-greyscale-500 mr-2">${token?.symbol}</span>
              <span className="text-2xl font-bold text-orange-400">{formatTokenAmount(tokenAmount || BigInt(0))}</span>
            </span>
            <span className="flex flex-col items-center">
              <span className="text-sm text-greyscale-500 mr-2">${token?.parentTokenSymbol}</span>
              <span className="text-2xl font-bold text-orange-400">
                {formatTokenAmount(parentTokenAmount || BigInt(0))}
              </span>
            </span>
          </div>
          {showStakeToken && (
            <>
              <div className="text-sm text-greyscale-500 font-bold">手续费待分配收益</div>
              <div className="flex w-full justify-center space-x-10">
                <span className="flex flex-col items-center">
                  <span className="text-sm text-greyscale-500 mr-2">${token?.symbol}</span>
                  <span className="text-2xl font-bold text-orange-400">
                    {formatTokenAmount(feeTokenAmount || BigInt(0))}
                  </span>
                </span>
                <span className="flex flex-col items-center">
                  <span className="text-sm text-greyscale-500 mr-2">${token?.parentTokenSymbol}</span>
                  <span className="text-2xl font-bold text-orange-400">
                    {formatTokenAmount(feeParentTokenAmount || BigInt(0))}
                  </span>
                </span>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default StakedLiquidDataPanel;
