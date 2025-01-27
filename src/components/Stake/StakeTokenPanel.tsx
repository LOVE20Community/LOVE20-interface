'use client';

import { useContext, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { toast } from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// shadcn/ui
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

// my funcs
import { checkWalletConnection } from '@/src/lib/web3';
import { formatTokenAmount, parseUnits } from '@/src/lib/format';

// my hooks
import { useStakeToken } from '@/src/hooks/contracts/useLOVE20Stake';
import { useApprove } from '@/src/hooks/contracts/useLOVE20Token';
import { useHandleContractError } from '@/src/lib/errorUtils';

// my contexts
import { TokenContext } from '@/src/contexts/TokenContext';

// my components
import LeftTitle from '@/src/components/Common/LeftTitle';
import LoadingOverlay from '@/src/components/Common/LoadingOverlay';

interface StakeTokenPanelProps {
  tokenBalance: bigint;
}

// 1. 定义 Zod 校验规则
//   - 质押代币数不能为0
//   - 质押代币数不能大于持有代币数
//   - releasePeriod 默认 "4"
function stakeSchemaFactory(tokenBalance: bigint) {
  return z.object({
    stakeTokenAmount: z
      .string()
      .refine((val) => val.trim() !== '', {
        message: '请输入质押数量',
      })
      .refine((val) => Number(val) > 0, {
        message: '质押代币数不能为0',
      })
      .refine((val) => parseUnits(val) <= tokenBalance, {
        message: '质押代币数不能大于持有代币数',
      }),
    releasePeriod: z.string().default('4'),
  });
}

const StakeTokenPanel: React.FC<StakeTokenPanelProps> = ({ tokenBalance }) => {
  const { address: accountAddress, chain: accountChain } = useAccount();
  const { token } = useContext(TokenContext) || {};

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

  // 2. 初始化表单
  const form = useForm<z.infer<ReturnType<typeof stakeSchemaFactory>>>({
    resolver: zodResolver(stakeSchemaFactory(tokenBalance)),
    defaultValues: {
      stakeTokenAmount: '',
      releasePeriod: '4',
    },
    mode: 'onChange',
  });

  // 3. 授权按钮点击
  const handleApprove = async (data: z.infer<ReturnType<typeof stakeSchemaFactory>>) => {
    // 先检查钱包 & 链
    if (!checkWalletConnection(accountChain)) {
      return;
    }
    try {
      await approveToken(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS_STAKE as `0x${string}`,
        parseUnits(data.stakeTokenAmount),
      );
    } catch (error: any) {
      toast.error(error?.message || '授权失败');
      console.error('Approve failed', error);
    }
  };

  // 监听授权成功
  useEffect(() => {
    if (isConfirmedApproveToken) {
      toast.success('授权成功');
    }
  }, [isConfirmedApproveToken]);

  // 4. 质押按钮点击
  const handleStake = async (data: z.infer<ReturnType<typeof stakeSchemaFactory>>) => {
    // 先检查钱包 & 链
    if (!checkWalletConnection(accountChain)) {
      return;
    }
    try {
      await stakeToken(
        token?.address as `0x${string}`,
        parseUnits(data.stakeTokenAmount),
        BigInt(data.releasePeriod),
        accountAddress as `0x${string}`,
      );
    } catch (error) {
      console.error('Stake failed', error);
    }
  };

  // 监听质押成功
  useEffect(() => {
    if (isConfirmedStakeToken) {
      toast.success('质押成功');
      // 重置表单
      form.reset();
      // 2秒后刷新页面，跳转到治理首页
      setTimeout(() => {
        window.location.href = `/gov?symbol=${token?.symbol}`;
      }, 2000);
    }
  }, [isConfirmedStakeToken, form, token?.symbol]);

  // 错误处理
  const { handleContractError } = useHandleContractError();
  useEffect(() => {
    if (errStakeToken) {
      handleContractError(errStakeToken, 'stake');
    }
    if (errApproveToken) {
      handleContractError(errApproveToken, 'token');
    }
  }, [errStakeToken, errApproveToken, handleContractError]);

  return (
    <div className="w-full flex flex-col items-center p-6 mt-1">
      <div className="w-full text-left mb-4">
        <LeftTitle title="质押增加治理收益" />
      </div>

      {/* 5. 使用 shadcn/ui 的 Form 组件，结合 react-hook-form */}
      <Form {...form}>
        {/* 用于阻止默认提交，这里手动分别处理"授权"“质押” */}
        <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md space-y-4">
          {/* 质押数量 */}
          <FormField
            control={form.control}
            name="stakeTokenAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-greyscale-500">
                  质押数 (当前持有数量：
                  <span className="text-secondary">
                    {formatTokenAmount(tokenBalance)} {token?.symbol}
                  </span>
                  )
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder={`输入 ${token?.symbol} 数量`}
                    className="!ring-secondary-foreground"
                    {...field}
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 释放期 */}
          <FormField
            control={form.control}
            name="releasePeriod"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-greyscale-500">释放期</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={(val) => field.onChange(val)}>
                    <SelectTrigger className="w-full !ring-secondary-foreground">
                      <SelectValue placeholder="请选择释放期" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 9 }, (_, i) => i + 4).map((val) => (
                        <SelectItem key={val} value={val.toString()}>
                          {val}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          {/* 按钮组：1.授权；2.质押 */}
          <div className="flex justify-center space-x-4">
            <Button
              className="w-1/2"
              disabled={isPendingApproveToken || isConfirmingApproveToken || isConfirmedApproveToken}
              onClick={() => form.handleSubmit(handleApprove)()}
            >
              {isPendingApproveToken
                ? '1.授权中...'
                : isConfirmingApproveToken
                ? '1.确认中...'
                : isConfirmedApproveToken
                ? '1.已授权'
                : '1.授权'}
            </Button>
            <Button
              className="w-1/2"
              disabled={
                !isConfirmedApproveToken || isPendingStakeToken || isConfirmingStakeToken || isConfirmedStakeToken
              }
              onClick={() => form.handleSubmit(handleStake)()}
            >
              {isPendingStakeToken
                ? '2.质押中...'
                : isConfirmingStakeToken
                ? '2.确认中...'
                : isConfirmedStakeToken
                ? '2.已质押'
                : '2.质押'}
            </Button>
          </div>
        </form>
      </Form>

      {/* Loading遮罩 */}
      <LoadingOverlay
        isLoading={isPendingApproveToken || isConfirmingApproveToken || isPendingStakeToken || isConfirmingStakeToken}
        text={isPendingApproveToken || isPendingStakeToken ? '提交交易...' : '确认交易...'}
      />
    </div>
  );
};

export default StakeTokenPanel;
