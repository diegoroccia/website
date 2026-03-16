---
title: "The Platform Engineering Dilemma: Navigating Mergers, Scope Creep, and the Path to Impact"
description: "Lessons learned from merging infrastructure teams while battling operational gravity, the unification tax, and the constant pull of legacy systems."
date: "2025-10-16"
---
As engineering leaders, we often talk about "platform engineering" as a clean, architectural pursuit - building the golden path, abstracting complexity, and enabling developer self-service. But the reality on the ground is often much messier. It’s a constant tug-of-war between strategic modernization and the gravity of legacy operational load.

Recently, I’ve been reflecting on the challenges of merging two distinct infrastructure teams into a single "Cloud Platform" unit. When you combine teams, you don't just combine headcounts; you combine backlogs, technical debt, and two different sets of operational "toil."

Here is what I’ve learned about navigating this transition while trying to deliver actual impact.

## The "Operational Gravity" Problem

The biggest threat to any platform strategy isn't a lack of vision; it's the weight of the existing world. When you merge teams responsible for core infrastructure - think Kubernetes, DNS, Cloud environments - the sheer volume of support requests, pull requests, and "keep the lights on" (KTLO) work can be staggering.

In my experience, if you don't explicitly measure this load, it will consume 100% of your capacity by default. We found that over 60% of our collective capacity was being swallowed by manual tasks and user support. This "operational gravity" makes it nearly impossible to escape the status quo.

The lesson? Visibility is the first step to freedom. You have to quantify the toil before you can justify the automation needed to kill it.

## Unification vs. Velocity: The Onboarding Tax

When two teams become one, there is an immediate "onboarding tax." Engineers who were experts in one domain (e.g., managed AWS environments) suddenly need to cross-train on another (e.g., container orchestration).

This period is dangerous because velocity naturally dips just as expectations from leadership usually rise. To survive this, you have to:

* Dedicate time to knowledge sharing: It feels like "non-work," but it’s the only way to prevent single-point-of-failure silos.  
* Be realistic about commitments: You cannot execute two full roadmaps with one merged team. You have to pick one unified path.

## The Power of "No" (and the Necessity of Deprioritization)

To deliver high-impact projects - like a major migration to a managed service or an automated cost-efficiency engine - you have to be ruthless.

A big scope is a trap. If you try to support every legacy integration and every "nice-to-have" feature, you will move at a snail's pace. We had to make the hard call to deprioritize several technical improvements (like ARM adoption or network policy fine-tuning) to focus exclusively on the migrations that would actually reduce our long-term maintenance burden.

If everything is a priority, nothing is. Impact comes from finishing a few big things, not starting fifty small ones.

## Modernization as a Toil-Reduction Strategy

We often frame modernization (like moving from custom-built tooling to native cloud features) as a "tech stack improvement." In reality, it’s a survival strategy.

Every custom, bespoke integration your team maintains is a liability. The goal should be to move toward "Abstracted Infrastructure." If a cloud provider offers a native feature that replaces 1,000 lines of your custom code, take it - even if the native feature is slightly less flexible. The reduction in "cognitive load" for your engineers is worth the trade-off.

## From Support to Self-Service

The final stage of winning the platform battle is moving from a "ticket-based" culture to a "self-service" culture. If a developer needs to open a PR for a simple configuration change, the platform has failed.

Our roadmap for 2026 focuses heavily on this: enabling users to manage their own infrastructure within established guardrails. This isn't just about "developer experience"; it’s about freeing the platform team to work on the *next* generation of problems rather than reviewing the same configuration PRs every day.

## Closing Thoughts

Merging teams and managing a massive infrastructure scope is an exercise in focus. It requires acknowledging the struggle of operational load, paying the "unification tax" upfront, and having the courage to decommission legacy systems that no longer serve the mission.

The path to a high-impact platform isn't through adding more features - it's through removing the friction that keeps your engineers (and your users) from moving fast.

*Do you have experience merging infrastructure teams? How do you handle the balance between "keeping the lights on" and strategic modernization? Let's discuss on \[Twitter/X/LinkedIn\].*
