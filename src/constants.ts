import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  BSCMAINNET = 56,
  POLYGON = 137,
  TAIKO = 167000,
  FIRE = 995
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
  [ChainId.BSCMAINNET]: '0xdf4eFDCeba0b710075E97F83A6DE81d67282c1d2',
  [ChainId.POLYGON]: '0x1473dAe330d204dbF665Cdbea11B93aC99679Ef7',
  [ChainId.TAIKO]: '0x6cF431b9e17Ab951F6A2376EC0467A9B6E68A454',
  [ChainId.FIRE]: '0x28d1170d911E0bc4302018adAd3e19195B002528'
}

export const INIT_CODE_HASH = {
  [ChainId.BSCMAINNET]: '0xd970579ada147f9b0a58b378300015a40c02837e839297f0151877526a8e407f',
  [ChainId.POLYGON]: '0xd970579ada147f9b0a58b378300015a40c02837e839297f0151877526a8e407f',
  [ChainId.TAIKO]: '0xd970579ada147f9b0a58b378300015a40c02837e839297f0151877526a8e407f',
  [ChainId.FIRE]: '0xd970579ada147f9b0a58b378300015a40c02837e839297f0151877526a8e407f'
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