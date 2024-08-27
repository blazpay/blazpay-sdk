import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  BSCMAINNET = 56,
  POLYGON = 137,
  TAIKO = 167000
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = {
  [ChainId.BSCMAINNET]: '0xC1dE652E4C3245cfFf335B8831254DB1b478BA89',
  [ChainId.POLYGON]: '0xa048bc2637d8bc30Ba02c8e824E7fAC00FD7b5D2',
  [ChainId.TAIKO]: '0xE39FDeaD8cD8E2166C0b87996209c4C1A94A3293'
}

export const INIT_CODE_HASH = {
  [ChainId.BSCMAINNET]: '0xd970579ada147f9b0a58b378300015a40c02837e839297f0151877526a8e407f',
  [ChainId.POLYGON]: '0xd970579ada147f9b0a58b378300015a40c02837e839297f0151877526a8e407f',
  [ChainId.TAIKO]: '0xd970579ada147f9b0a58b378300015a40c02837e839297f0151877526a8e407f'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

export const LIQ = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

export const DEFAULT_VESTING_TIME = 356;