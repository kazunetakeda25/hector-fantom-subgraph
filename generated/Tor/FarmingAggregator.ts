// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class FarmingAggregator__calOptimalResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class FarmingAggregator__calWithdrawAndEarnedResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }
}

export class FarmingAggregator__getStakingInfoResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;
  value9: BigInt;
  value10: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt,
    value9: BigInt,
    value10: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    map.set("value9", ethereum.Value.fromUnsignedBigInt(this.value9));
    map.set("value10", ethereum.Value.fromUnsignedBigInt(this.value10));
    return map;
  }
}

export class FarmingAggregator extends ethereum.SmartContract {
  static bind(address: Address): FarmingAggregator {
    return new FarmingAggregator("FarmingAggregator", address);
  }

  assetPrice(): BigInt {
    let result = super.call("assetPrice", "assetPrice():(uint256)", []);

    return result[0].toBigInt();
  }

  try_assetPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("assetPrice", "assetPrice():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  c2pool(): Address {
    let result = super.call("c2pool", "c2pool():(address)", []);

    return result[0].toAddress();
  }

  try_c2pool(): ethereum.CallResult<Address> {
    let result = super.tryCall("c2pool", "c2pool():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  calBonusOrSlipage(
    hugsAmount: BigInt,
    daiAmount: BigInt,
    usdcAmount: BigInt
  ): BigInt {
    let result = super.call(
      "calBonusOrSlipage",
      "calBonusOrSlipage(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(hugsAmount),
        ethereum.Value.fromUnsignedBigInt(daiAmount),
        ethereum.Value.fromUnsignedBigInt(usdcAmount)
      ]
    );

    return result[0].toBigInt();
  }

  try_calBonusOrSlipage(
    hugsAmount: BigInt,
    daiAmount: BigInt,
    usdcAmount: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calBonusOrSlipage",
      "calBonusOrSlipage(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(hugsAmount),
        ethereum.Value.fromUnsignedBigInt(daiAmount),
        ethereum.Value.fromUnsignedBigInt(usdcAmount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  calOptimal(amount: BigInt): FarmingAggregator__calOptimalResult {
    let result = super.call(
      "calOptimal",
      "calOptimal(uint256):(uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(amount)]
    );

    return new FarmingAggregator__calOptimalResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_calOptimal(
    amount: BigInt
  ): ethereum.CallResult<FarmingAggregator__calOptimalResult> {
    let result = super.tryCall(
      "calOptimal",
      "calOptimal(uint256):(uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(amount)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new FarmingAggregator__calOptimalResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  calPoolToken(
    hugsAmount: BigInt,
    daiAmount: BigInt,
    usdcAmount: BigInt
  ): BigInt {
    let result = super.call(
      "calPoolToken",
      "calPoolToken(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(hugsAmount),
        ethereum.Value.fromUnsignedBigInt(daiAmount),
        ethereum.Value.fromUnsignedBigInt(usdcAmount)
      ]
    );

    return result[0].toBigInt();
  }

  try_calPoolToken(
    hugsAmount: BigInt,
    daiAmount: BigInt,
    usdcAmount: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calPoolToken",
      "calPoolToken(uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(hugsAmount),
        ethereum.Value.fromUnsignedBigInt(daiAmount),
        ethereum.Value.fromUnsignedBigInt(usdcAmount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  calWithdrawAndEarned(
    wallet: Address
  ): FarmingAggregator__calWithdrawAndEarnedResult {
    let result = super.call(
      "calWithdrawAndEarned",
      "calWithdrawAndEarned(address):(uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(wallet)]
    );

    return new FarmingAggregator__calWithdrawAndEarnedResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_calWithdrawAndEarned(
    wallet: Address
  ): ethereum.CallResult<FarmingAggregator__calWithdrawAndEarnedResult> {
    let result = super.tryCall(
      "calWithdrawAndEarned",
      "calWithdrawAndEarned(address):(uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(wallet)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new FarmingAggregator__calWithdrawAndEarnedResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  getStakingInfo(
    wallet: Address,
    amount: BigInt
  ): FarmingAggregator__getStakingInfoResult {
    let result = super.call(
      "getStakingInfo",
      "getStakingInfo(address,uint256):(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(wallet),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return new FarmingAggregator__getStakingInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt(),
      result[9].toBigInt(),
      result[10].toBigInt()
    );
  }

  try_getStakingInfo(
    wallet: Address,
    amount: BigInt
  ): ethereum.CallResult<FarmingAggregator__getStakingInfoResult> {
    let result = super.tryCall(
      "getStakingInfo",
      "getStakingInfo(address,uint256):(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(wallet),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new FarmingAggregator__getStakingInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt(),
        value[9].toBigInt(),
        value[10].toBigInt()
      )
    );
  }

  hugsPool(): Address {
    let result = super.call("hugsPool", "hugsPool():(address)", []);

    return result[0].toAddress();
  }

  try_hugsPool(): ethereum.CallResult<Address> {
    let result = super.tryCall("hugsPool", "hugsPool():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  stakingRewards(): Address {
    let result = super.call("stakingRewards", "stakingRewards():(address)", []);

    return result[0].toAddress();
  }

  try_stakingRewards(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "stakingRewards",
      "stakingRewards():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}
