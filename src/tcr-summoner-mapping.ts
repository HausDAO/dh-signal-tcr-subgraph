import { Registry } from "../generated/schema";
import { TcrTemplate } from "../generated/templates";
import { SummonDaoStake } from "../generated/TcrSummoner/TcrSummoner";
import { addTransaction } from "./util/transactions";

export function handleSummonDaoStake(event: SummonDaoStake): void {
  const registryId = event.params.signal.toHexString();

  let registry = new Registry(registryId);
  if (registry === null) {
    return;
  }

  TcrTemplate.create(event.params.signal);

  registry.createdAt = event.block.timestamp;
  registry.snapshotId = event.block.number;
  registry.dao = event.params.baal;

  registry.save();

  addTransaction(event.block, event.transaction);
}
