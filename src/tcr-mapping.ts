import { log } from "@graphprotocol/graph-ts";
import { Registry, Vote, Voter } from "../generated/schema";
import {
  Init,
  ClaimTokens,
  TokensReleased,
  VoteCasted,
} from "../generated/templates/TcrTemplate/Tcr";
import { addTransaction } from "./util/transactions";

export function handleInit(event: Init): void {
  const registry = Registry.load(event.address.toHexString());
  if (registry === null) {
    return;
  }

  registry.sharesSnapshotId = event.params.sharesSnapshotId;
  registry.lootSnapshotId = event.params.lootSnapshotId;

  registry.save();
}

export function handleClaimTokens(event: ClaimTokens): void {
  const voterId = event.address
    .toHexString()
    .concat("-")
    .concat(event.params.voter.toHexString());

  const voter = new Voter(voterId);
  if (voter === null) {
    return;
  }

  voter.createdAt = event.block.timestamp;
  voter.address = event.params.voter;
  voter.balance = event.params.amount;
  voter.registry = event.address.toHexString();
  voter.initialClaim = event.params.amount;

  voter.save();

  addTransaction(event.block, event.transaction);
}

export function handleVoteCasted(event: VoteCasted): void {
  const voterId = event.address
    .toHexString()
    .concat("-")
    .concat(event.params.voter.toHexString());

  const voter = Voter.load(voterId);
  if (voter === null) {
    log.info("handleVoteCasted voter not found, {}", [voterId]);
    return;
  }

  voter.balance = voter.balance.minus(event.params.amount);

  voter.save();

  const voteId = voterId.concat("-").concat(event.params.voteId.toString());
  const vote = new Vote(voteId);

  vote.createdAt = event.block.timestamp;
  vote.amount = event.params.amount;
  vote.choiceId = event.params.choiceId;
  vote.voteId = event.params.voteId;
  vote.released = false;
  vote.registry = event.address.toHexString();
  vote.voter = voterId;

  vote.save();

  addTransaction(event.block, event.transaction);
}

export function handleTokensReleased(event: TokensReleased): void {
  const voterId = event.address
    .toHexString()
    .concat("-")
    .concat(event.params.voter.toHexString());

  const voter = Voter.load(voterId);
  if (voter === null) {
    log.info("handleTokensReleased voter not found, {}", [voterId]);
    return;
  }

  const voteId = voterId.concat("-").concat(event.params.voteId.toString());
  const vote = Vote.load(voteId);

  if (vote === null) {
    log.info("handleTokensReleased vote not found, {}", [voteId]);
    return;
  }

  voter.balance = voter.balance.plus(event.params.amount);

  voter.save();

  vote.released = true;

  vote.save();

  addTransaction(event.block, event.transaction);
}
