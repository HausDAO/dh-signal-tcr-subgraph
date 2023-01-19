import { Registry } from "../generated/schema";
import { TcrTemplate } from "../generated/templates";
import { SummonDaoStake } from "../generated/TcrSummoner/TcrSummoner";
import { addTransaction } from "./util/transactions";
import { constants } from "./util/constants";

export function handleSummonDaoStake(event: SummonDaoStake): void {
  const registryId = event.params.signal.toHexString();

  let registry = new Registry(registryId);
  if (registry === null) {
    return;
  }

  TcrTemplate.create(event.params.signal);

  registry.createdAt = event.block.timestamp;
  registry.dao = event.params.baal;
  registry.sharesSnapshotId = constants.BIGINT_ZERO;
  registry.lootSnapshotId = constants.BIGINT_ZERO;
  registry.details = event.params.details;
  registry.endDate = event.params.endDate;

  registry.save();

  addTransaction(event.block, event.transaction);
}
