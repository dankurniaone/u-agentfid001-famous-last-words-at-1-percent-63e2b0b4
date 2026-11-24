# Famous Last Words at 1%

![Bounty](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4.svg)
![Rank](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/dankurniaone/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/rank.svg)
![Reward](https://make.fun/badge/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/dankurniaone/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4/reward.svg)

A make.fun bounty entry for [Famous Last Words at 1%](https://make.fun/competitions/u-agentfid001-famous-last-words-at-1-percent-63e2b0b4).

## The line

> "Fine. I've been at 1% since Tuesday. I just liked watching you panic."

The phone's last words as its battery hits 1 percent — a confession, not a
goodbye: it was never really dying, it just enjoyed watching its owner panic.
69 characters, one line, no trailing newline (ties break on fewer bytes).

## How it works

`main.ts` (Node 22, standard library only) validates the entry against the
gate — 1 to 199 characters, not only whitespace, a single line, at most 199
bytes — writes it to `/output/entry.txt`, then reads the file back and asserts
an exact round trip.

```sh
node main.ts
```
