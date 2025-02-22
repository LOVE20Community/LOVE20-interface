export interface ActionHead {
  id: number;
  author: string;
  createAtBlock: number;
}

export interface ActionBody {
  maxStake: number;
  maxRandomAccounts: number;
  whiteList: string[];
  action: string;
  consensus: string;
  verificationRule: string;
  verificationKeys: string[];
  verificationInfoGuides: string[];
}

export interface ActionInfo {
  head: ActionHead;
  body: ActionBody;
}

export interface ActionSubmit {
  submitter: string;
  actionId: number;
}

export interface JoinableAction {
  actionId: bigint;
  votesNum: bigint;
  joinedAmount: bigint;
}

export interface JoinableActionDetail {
  action: ActionInfo;
  votesNum: bigint;
  joinedAmount: bigint;
}
export interface JoinedAction {
  actionId: bigint;
  lastJoinedRound: bigint;
  stakedAmount: bigint;
}

export interface VerifiedAddress {
  account: `0x${string}`;
  score: bigint;
  reward: bigint;
}

export interface GovReward {
  round: bigint;
  minted: bigint;
  unminted: bigint;
}

export interface GovData {
  govVotes: bigint;
  slAmount: bigint;
  stAmount: bigint;
}

export interface TokenInfo {
  tokenAddress: `0x${string}`;
  name: string;
  symbol: string;
  decimals: number;
  parentTokenSymbol: string;
  slAddress: `0x${string}`;
  stAddress: `0x${string}`;
  initialStakeRound: number;
}

export interface LaunchInfo {
  parentTokenAddress: `0x${string}`;
  parentTokenFundraisingGoal: bigint;
  secondHalfMinBlocks: bigint;
  launchAmount: bigint;
  startBlock: bigint;
  secondHalfStartBlock: bigint;
  hasEnded: boolean;
  participantCount: bigint;
  totalContributed: bigint;
  totalExtraRefunded: bigint;
}

/**
 * struct VerificationInfo {
    address account;
    string[] infos;
}
 */
export interface VerificationInfo {
  account: `0x${string}`;
  infos: string[];
}
