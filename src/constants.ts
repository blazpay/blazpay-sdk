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
  [ChainId.BSCMAINNET]: '0x6cF431b9e17Ab951F6A2376EC0467A9B6E68A454',
  [ChainId.POLYGON]: '0x3d0781Ea61E446A3319707B93265E1BeA5329a81',
  [ChainId.TAIKO]: '0x0611095CB77f0dB4105ddFf4017919b49a26fb59'
}

export const INIT_CODE_HASH = {
  [ChainId.BSCMAINNET]: '0x16872b28403fb0c780d6c25a4102f0636f07916798c7046731c480508a4645ef',
  [ChainId.POLYGON]: '0x16872b28403fb0c780d6c25a4102f0636f07916798c7046731c480508a4645ef',
  [ChainId.TAIKO]: '0x16872b28403fb0c780d6c25a4102f0636f07916798c7046731c480508a4645ef'
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