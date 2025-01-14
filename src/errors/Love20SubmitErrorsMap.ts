// src/errors/Love20SubmitErrorsMap.ts

/** LOVE20Submit 合约自定义错误 -> 前端展示文案
 */
export const LOVE20SubmitErrorsMap: Record<string, string> = {
  CannotSubmitAction: '您没有权限提交提案，请先质押获取足够代理票数',
  ActionIdNotExist: '提案ID不存在',
  ProposalIndexOutOfRange: '提案索引超出范围',
  StartGreaterThanEnd: '开始时间大于结束时间',
  MaxStakeZero: '最大质押数量必须大于0',
  MaxRandomAccountsZero: '最大随机账户数量必须大于0',
  AlreadySubmitted: '该提案已提交，请勿重复提交',
  OnlyOneSubmitPerRound: '每轮只能提交一次',
};