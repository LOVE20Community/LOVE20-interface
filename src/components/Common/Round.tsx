import React, { useState, useEffect } from 'react';
import { useBlockNumber } from 'wagmi';
import { formatSeconds } from '@/src/lib/format';
import LeftTime from '@/src/components/Common/LeftTime';

interface RoundProps {
  currentRound: bigint;
  roundName: string;
}

const Round: React.FC<RoundProps> = ({ currentRound, roundName }) => {
  const { data: blockNumber } = useBlockNumber();

  const ROUND_BLOCKS = Number(process.env.NEXT_PUBLIC_ROUND_BLOCKS) || 0;
  const BLOCK_TIME = Number(process.env.NEXT_PUBLIC_BLOCK_TIME) || 0;

  const leftBlocks = blockNumber ? ROUND_BLOCKS - (Number(blockNumber) % ROUND_BLOCKS) : 0;
  const initialTimeLeft = leftBlocks > 0 ? leftBlocks * BLOCK_TIME : 0;

  return (
    <>
      <h1 className="text-base text-center font-bold">
        {roundName}（第 <span className="text-red-500">{Number(currentRound ?? 0n)}</span> 轮）
      </h1>
      <span className="text-sm text-gray-400 mt-1 pt-0">
        本轮剩余：
        <LeftTime initialTimeLeft={initialTimeLeft} />
      </span>
    </>
  );
};

export default Round;