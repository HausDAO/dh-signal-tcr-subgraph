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

export class ClaimTokens extends ethereum.Event {
  get params(): ClaimTokens__Params {
    return new ClaimTokens__Params(this);
  }
}

export class ClaimTokens__Params {
  _event: ClaimTokens;

  constructor(event: ClaimTokens) {
    this._event = event;
  }

  get voter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Init extends ethereum.Event {
  get params(): Init__Params {
    return new Init__Params(this);
  }
}

export class Init__Params {
  _event: Init;

  constructor(event: Init) {
    this._event = event;
  }

  get sharesSnapshotId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get lootSnapshotId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class TokensReleased extends ethereum.Event {
  get params(): TokensReleased__Params {
    return new TokensReleased__Params(this);
  }
}

export class TokensReleased__Params {
  _event: TokensReleased;

  constructor(event: TokensReleased) {
    this._event = event;
  }

  get voteId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get voter(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get choiceId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class VoteCasted extends ethereum.Event {
  get params(): VoteCasted__Params {
    return new VoteCasted__Params(this);
  }
}

export class VoteCasted__Params {
  _event: VoteCasted;

  constructor(event: VoteCasted) {
    this._event = event;
  }

  get voteId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get voter(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get choiceId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Tcr__getVotesForAddressResultValue0Struct extends ethereum.Tuple {
  get released(): boolean {
    return this[0].toBoolean();
  }

  get voter(): Address {
    return this[1].toAddress();
  }

  get amount(): BigInt {
    return this[2].toBigInt();
  }

  get choiceId(): BigInt {
    return this[3].toBigInt();
  }

  get voteId(): BigInt {
    return this[4].toBigInt();
  }
}

export class Tcr__voterBalancesResult {
  value0: boolean;
  value1: BigInt;

  constructor(value0: boolean, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Tcr__votesResult {
  value0: boolean;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: boolean,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class Tcr extends ethereum.SmartContract {
  static bind(address: Address): Tcr {
    return new Tcr("Tcr", address);
  }

  areTokensLocked(_voteId: BigInt): boolean {
    let result = super.call(
      "areTokensLocked",
      "areTokensLocked(uint56):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_voteId)]
    );

    return result[0].toBoolean();
  }

  try_areTokensLocked(_voteId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "areTokensLocked",
      "areTokensLocked(uint56):(bool)",
      [ethereum.Value.fromUnsignedBigInt(_voteId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  baal(): Address {
    let result = super.call("baal", "baal():(address)", []);

    return result[0].toAddress();
  }

  try_baal(): ethereum.CallResult<Address> {
    let result = super.tryCall("baal", "baal():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  baalLoot(): Address {
    let result = super.call("baalLoot", "baalLoot():(address)", []);

    return result[0].toAddress();
  }

  try_baalLoot(): ethereum.CallResult<Address> {
    let result = super.tryCall("baalLoot", "baalLoot():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  baalShares(): Address {
    let result = super.call("baalShares", "baalShares():(address)", []);

    return result[0].toAddress();
  }

  try_baalShares(): ethereum.CallResult<Address> {
    let result = super.tryCall("baalShares", "baalShares():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  claim(account: Address): BigInt {
    let result = super.call("claim", "claim(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_claim(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("claim", "claim(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  currentTimestamp(): BigInt {
    let result = super.call(
      "currentTimestamp",
      "currentTimestamp():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_currentTimestamp(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "currentTimestamp",
      "currentTimestamp():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getVotesForAddress(
    _voter: Address
  ): Array<Tcr__getVotesForAddressResultValue0Struct> {
    let result = super.call(
      "getVotesForAddress",
      "getVotesForAddress(address):((bool,address,uint152,uint48,uint56)[])",
      [ethereum.Value.fromAddress(_voter)]
    );

    return result[0].toTupleArray<Tcr__getVotesForAddressResultValue0Struct>();
  }

  try_getVotesForAddress(
    _voter: Address
  ): ethereum.CallResult<Array<Tcr__getVotesForAddressResultValue0Struct>> {
    let result = super.tryCall(
      "getVotesForAddress",
      "getVotesForAddress(address):((bool,address,uint152,uint48,uint56)[])",
      [ethereum.Value.fromAddress(_voter)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Tcr__getVotesForAddressResultValue0Struct>()
    );
  }

  lootSnapshotId(): BigInt {
    let result = super.call("lootSnapshotId", "lootSnapshotId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lootSnapshotId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lootSnapshotId",
      "lootSnapshotId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  sharesSnapshotId(): BigInt {
    let result = super.call(
      "sharesSnapshotId",
      "sharesSnapshotId():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_sharesSnapshotId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "sharesSnapshotId",
      "sharesSnapshotId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  voterBalances(param0: Address): Tcr__voterBalancesResult {
    let result = super.call(
      "voterBalances",
      "voterBalances(address):(bool,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new Tcr__voterBalancesResult(
      result[0].toBoolean(),
      result[1].toBigInt()
    );
  }

  try_voterBalances(
    param0: Address
  ): ethereum.CallResult<Tcr__voterBalancesResult> {
    let result = super.tryCall(
      "voterBalances",
      "voterBalances(address):(bool,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Tcr__voterBalancesResult(value[0].toBoolean(), value[1].toBigInt())
    );
  }

  voterToVoteIds(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "voterToVoteIds",
      "voterToVoteIds(address,uint256):(uint56)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_voterToVoteIds(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "voterToVoteIds",
      "voterToVoteIds(address,uint256):(uint56)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  votes(param0: BigInt): Tcr__votesResult {
    let result = super.call(
      "votes",
      "votes(uint256):(bool,address,uint152,uint48,uint56)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Tcr__votesResult(
      result[0].toBoolean(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_votes(param0: BigInt): ethereum.CallResult<Tcr__votesResult> {
    let result = super.tryCall(
      "votes",
      "votes(uint256):(bool,address,uint152,uint48,uint56)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Tcr__votesResult(
        value[0].toBoolean(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ClaimAndVoteCall extends ethereum.Call {
  get inputs(): ClaimAndVoteCall__Inputs {
    return new ClaimAndVoteCall__Inputs(this);
  }

  get outputs(): ClaimAndVoteCall__Outputs {
    return new ClaimAndVoteCall__Outputs(this);
  }
}

export class ClaimAndVoteCall__Inputs {
  _call: ClaimAndVoteCall;

  constructor(call: ClaimAndVoteCall) {
    this._call = call;
  }

  get _batch(): Array<ClaimAndVoteCall_batchStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      ClaimAndVoteCall_batchStruct
    >();
  }
}

export class ClaimAndVoteCall__Outputs {
  _call: ClaimAndVoteCall;

  constructor(call: ClaimAndVoteCall) {
    this._call = call;
  }
}

export class ClaimAndVoteCall_batchStruct extends ethereum.Tuple {
  get choiceId(): BigInt {
    return this[0].toBigInt();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }
}

export class ReleaseTokensCall extends ethereum.Call {
  get inputs(): ReleaseTokensCall__Inputs {
    return new ReleaseTokensCall__Inputs(this);
  }

  get outputs(): ReleaseTokensCall__Outputs {
    return new ReleaseTokensCall__Outputs(this);
  }
}

export class ReleaseTokensCall__Inputs {
  _call: ReleaseTokensCall;

  constructor(call: ReleaseTokensCall) {
    this._call = call;
  }

  get _voteIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class ReleaseTokensCall__Outputs {
  _call: ReleaseTokensCall;

  constructor(call: ReleaseTokensCall) {
    this._call = call;
  }
}

export class SetUpCall extends ethereum.Call {
  get inputs(): SetUpCall__Inputs {
    return new SetUpCall__Inputs(this);
  }

  get outputs(): SetUpCall__Outputs {
    return new SetUpCall__Outputs(this);
  }
}

export class SetUpCall__Inputs {
  _call: SetUpCall;

  constructor(call: SetUpCall) {
    this._call = call;
  }

  get _baalAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetUpCall__Outputs {
  _call: SetUpCall;

  constructor(call: SetUpCall) {
    this._call = call;
  }
}

export class VoteCall extends ethereum.Call {
  get inputs(): VoteCall__Inputs {
    return new VoteCall__Inputs(this);
  }

  get outputs(): VoteCall__Outputs {
    return new VoteCall__Outputs(this);
  }
}

export class VoteCall__Inputs {
  _call: VoteCall;

  constructor(call: VoteCall) {
    this._call = call;
  }

  get _batch(): Array<VoteCall_batchStruct> {
    return this._call.inputValues[0].value.toTupleArray<VoteCall_batchStruct>();
  }
}

export class VoteCall__Outputs {
  _call: VoteCall;

  constructor(call: VoteCall) {
    this._call = call;
  }
}

export class VoteCall_batchStruct extends ethereum.Tuple {
  get choiceId(): BigInt {
    return this[0].toBigInt();
  }

  get amount(): BigInt {
    return this[1].toBigInt();
  }
}
