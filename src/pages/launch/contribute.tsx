import { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';

// my contexts
import { TokenContext } from '@/src/contexts/TokenContext';

// my hooks
import { useLaunches } from '@/src/hooks/contracts/useLOVE20Launch';
import { useHandleContractError } from '@/src/lib/errorUtils';

// my components
import Header from '@/src/components/Header';
import LoadingIcon from '@/src/components/Common/LoadingIcon';

const Contribute = dynamic(() => import('@/src/components/Launch/Contribute'), { ssr: false });

export default function ContributePage() {
  const { token } = useContext(TokenContext) || {};
  const {
    launchInfo,
    isPending: isLaunchInfoPending,
    error: launchInfoError,
  } = useLaunches(token ? token.address : '0x0');

  // 错误处理
  const { handleContractError } = useHandleContractError();
  useEffect(() => {
    if (launchInfoError) {
      handleContractError(launchInfoError, 'launch');
    }
  }, [launchInfoError]);

  if (isLaunchInfoPending) {
    return <LoadingIcon />;
  }
  if (!launchInfo) {
    return <div className="text-red-500">找不到发射信息</div>;
  }
  return (
    <>
      <Header title="申购" />
      <main className="flex-grow">
        <Contribute token={token} launchInfo={launchInfo} />
      </main>
    </>
  );
}