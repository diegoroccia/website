---
title: "What Actually Happens When You Merge Two Infrastructure Teams"
description: "First-hand lessons from merging two platform engineering teams: the hidden costs, authority gaps, and what actually helps."
date: "2025-10-16"
---

Last year I merged two infrastructure teams into a single "Cloud Platform" unit. On paper it made sense — overlapping scope, shared dependencies, org efficiency. In practice it was a mess for longer than I expected, and I made mistakes I could have avoided.

Here's what actually happened.

## The operational load is bigger than you think

Both teams had backlogs. When you merge the teams, you merge the backlogs. You don't get economies of scale on support load — you get the union of two support surfaces, with engineers who are only familiar with one of them.

We measured it after a few months. Over 60% of our collective capacity was going to manual support tasks, pull request reviews, and keeping things running. That's not a surprise in retrospect, but it took actually counting it to make the case that we needed to automate rather than just hire.

If you don't measure it, the assumption will be that the team is underperforming. The team isn't underperforming — the work just isn't visible.

## The onboarding tax is real

Merging teams means the engineers who were senior in one domain (say, managed AWS environments) are now junior in another (container orchestration). For a while, you have a team where everyone is good at half the job.

This is the worst time for velocity expectations to go up, which is exactly when they do. Leadership sees a bigger team and expects more output. What they get is a period where every cross-domain task takes twice as long and requires more review.

Two things help: dedicated time for cross-training (even when it feels like you can't afford it), and being honest with stakeholders about what the merged roadmap can actually deliver. You cannot run two full roadmaps with one merged team. Pick a unified direction and commit to it.

## The authority problem nobody talks about

When two teams merge, there's always a question of who decides what. Even if org charts are clear, the social reality is messier. Engineers have existing loyalties, existing ways of doing things, existing opinions about the right answer.

The danger is that this ambiguity gets resolved slowly and informally, through conflict and passive resistance, rather than explicitly. We had initiative names that were abstract enough that nobody could tell who owned what or what the next concrete step was. That's a failure mode worth naming: an initiative that can't be decomposed into a task is not an initiative, it's a wish.

## Deprioritization is the actual work

The only way we made progress on modernization — moving from custom tooling to managed services, automating account provisioning — was by explicitly stopping other things. Not "de-emphasizing" them. Stopping them.

We deprioritized ARM adoption, network policy work, and several legacy integrations. These were defensible engineering improvements, and some people were unhappy about it. But every item we kept on the roadmap that we weren't actively working on was consuming coordination overhead and creating the impression of forward motion without producing any.

If everything is a priority, your team spends its time context-switching rather than finishing things. Finishing one significant thing is worth more than starting five.

## What actually helped

A few things made a real difference:

Quantifying the toil. Once we had numbers on support load, it was much easier to justify automation work and push back on new manual processes.

Killing abstract initiatives. Any initiative that couldn't be broken down into a concrete next step got restructured or dropped. "Optimise cloud costs" is not a roadmap item. "Automate reservation coverage alerts" is.

Over-communicating during the transition. The teams had different rituals, different documentation standards, different implicit agreements. Making those explicit — even when it felt redundant — reduced friction.

The merged team eventually found its footing. It took longer than I planned for, and some of that time could have been reclaimed with better upfront decisions. The main one: acknowledge the cost of the merge before it happens, not after.
