---
title: "A Tale of 'metadpata': When One Typo Nearly Takes Down Infrastructure"
description: "Lessons learned from a critical incident at Zalando caused by a single character typo, and the safeguards we implemented to prevent it from happening again."
date: "2024-01-23"
---

I contributed to a post on the Zalando Engineering blog about a memorable incident that taught us valuable lessons about building safety mechanisms into our infrastructure automation tools.

## The Incident

A single character typo - changing "metadata" to "metadpata" in a configuration file - caused our automated systems to interpret it as "delete all accounts," removing DNS entries across our AWS infrastructure. One character. Massive impact.

## What We Learned

The incident highlighted that "supertools"—large-scale automation scripts that manage infrastructure at scale—need more than just standard code review processes. They require layered safety mechanisms. We implemented schema validation with jsonschema and pre-commit hooks to catch configuration errors before they reach production. Change previews using AWS CloudFormation ChangeSet now show human-readable diffs in pull requests, giving reviewers clear visibility into what will change. Phased rollouts limit blast radius and catch issues early, while "scream tests" introduce a one-week simulated deletion period before permanent resource removal, giving teams time to catch mistakes.

## The Bigger Picture

This incident reinforced a critical lesson in platform engineering: the more powerful your automation tools, the more important it becomes to build in guardrails. When a tool can manage infrastructure at scale, even small mistakes can have catastrophic consequences.

Read the full story with technical details on the [Zalando Engineering Blog](https://engineering.zalando.com/posts/2024/01/tale-of-metadpata-the-revenge-of-the-supertools.html).
