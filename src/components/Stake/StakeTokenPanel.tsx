import { useContext, useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { toast } from 'react-hot-toast';

import { useStakeToken } from '@/src/hooks/contracts/useLOVE20Stake';
import { useApprove } from '@/src/hooks/contracts/useLOVE20Token';
import { useTotalSupply } from '@/src/hooks/contracts/useLOVE20STToken';
import { TokenContext } from '@/src/contexts/TokenContext';
import { formatTokenAmount, parseUnits } from '@/src/lib/format';
import Loading from '@/src/components/Common/Loading';
import { Button } from '@/components/ui/button';

interface StakeTokenPanelProps {
  tokenBalance: bigint;
}

const StakeTokenPanel: React.FC<StakeTokenPanelProps> = ({ tokenBalance }) => {
  const { address: accountAddress } = useAccount();
  const { token } = useContext(TokenContext) || {};

  const { totalSupply: stTokenAmount, isPending: isPendingStTokenAmount } = useTotalSupply(
    token?.stTokenAddress as `0x${string}`,
  );

  // Hooks: 授权(approve)、质押(stakeToken)
  const {
    approve: approveToken,
    isWriting: isPendingApproveToken,
    isConfirming: isConfirmingApproveToken,
    isConfirmed: isConfirmedApproveToken,
    writeError: errApproveToken,
  } = useApprove(token?.address as `0x${string}`);

  const {
    stakeToken,
    isWriting: isPendingStakeToken,
    isConfirming: isConfirmingStakeToken,
    isConfirmed: isConfirmedStakeToken,
    writeError: errStakeToken,
  } = useStakeToken();

  // 捕获表单状态
  const [stakeTokenAmount, setStakeTokenAmount] = useState('');
  const [releasePeriod, setReleasePeriod] = useState('4'); // 将初始值从 '1' 改为 '4'

  // 处理授权
  const handleApprove = async () => {
    if (BigInt(stakeTokenAmount) === 0n) {
      toast.error('请输入正确的数量');
      return;
    }
    try {
      await approveToken(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_STAKE as `0x${string}`, parseUnits(stakeTokenAmount));
    } catch (error: any) {
      toast.error(error?.message || '授权失败');
      console.error('Approve failed', error);
    }
  };
  useEffect(() => {
    if (isConfirmedApproveToken) {
      toast.success('授权成功');
    }
  }, [isConfirmedApproveToken]);

  // 处理质押
  const handleStake = async () => {
    if (BigInt(stakeTokenAmount) === 0n) {
      toast.error('请输入正确的数量');
      return;
    }
    try {
      await stakeToken(
        token?.address as `0x${string}`,
        parseUnits(stakeTokenAmount),
        BigInt(releasePeriod),
        accountAddress as `0x${string}`,
      );
    } catch (error) {
      console.error('Stake failed', error);
    }
  };
  // 监听质押交易的确认状态
  useEffect(() => {
    if (isConfirmedStakeToken) {
      toast.success('质押成功');
      // 重置表单
      setStakeTokenAmount('');
      setReleasePeriod('');
      // 2秒后刷新页面
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }, [isConfirmedStakeToken]);

  return (
    <>
      <div className="flex justify-center w-full items-center rounded p-4 bg-white mt-4">
        <span>
          <span className="text-sm text-gray-500 mr-2">代币质押总量</span>
          <span className="text-2xl font-bold text-orange-400">
            {isPendingStakeToken ? <Loading /> : formatTokenAmount(stTokenAmount || BigInt(0))}
          </span>
        </span>
      </div>
      <div className="w-full flex flex-col items-center rounded p-4 bg-white mt-1">
        <div className="w-full text-left mb-4">
          <h2 className="relative pl-4 text-gray-700 text-base font-medium before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-red-500">
            质押增加治理收益：<span className="text-gray-500 text-sm font-normal">(最多两倍)</span>
          </h2>
        </div>
        <form className="w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-left mb-1 text-sm text-gray-500">
              质押token数 (当前持有：{formatTokenAmount(tokenBalance)} {token?.symbol})
            </label>
            <input
              type="number"
              placeholder={`输入 ${token?.symbol} 数量`}
              value={stakeTokenAmount}
              onChange={(e) => {
                const stakeValue = e.target.value;
                setStakeTokenAmount(stakeValue);
              }}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring bg-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-1 text-sm text-gray-500">释放期</label>
            <select
              value={releasePeriod}
              onChange={(e) => setReleasePeriod(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring bg-white"
              required
            >
              {Array.from({ length: 9 }, (_, i) => (
                <option key={i + 4} value={i + 4}>
                  {i + 4}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-center space-x-4">
            <Button
              className={`w-1/2 ${
                isConfirmedApproveToken ? 'bg-gray-600 hover:bg-gray-700' : 'bg-blue-600 hover:bg-blue-700'
              }`}
              disabled={isPendingApproveToken || isConfirmingApproveToken || isConfirmedApproveToken}
              onClick={handleApprove}
            >
              {isPendingApproveToken || isConfirmingApproveToken
                ? '授权中...'
                : isConfirmedApproveToken
                ? '1.已授权'
                : '1.授权'}
            </Button>
            <Button
              className={`w-1/2 ${
                !isConfirmedApproveToken ? 'bg-gray-600 hover:bg-gray-700' : 'bg-blue-600 hover:bg-blue-700'
              }`}
              disabled={!isConfirmedApproveToken || isPendingStakeToken || isConfirmingStakeToken}
              onClick={handleStake}
            >
              {isPendingStakeToken || isConfirmingStakeToken ? '质押中...' : '2.质押'}
            </Button>
          </div>
        </form>
        {errStakeToken && <div className="text-red-500">{errStakeToken.message}</div>}
        {errApproveToken && <div className="text-red-500">{errApproveToken.message}</div>}
      </div>
    </>
  );
};

export default StakeTokenPanel;
