---
title: "A Tale of 'metadpata': When One Typo Nearly Takes Down Infrastructure"
description: "Lessons learned from a critical incident at Zalando caused by a single character typo, and the safeguards we implemented to prevent it from happening again."
date: "2024-01-23"
---

I contributed to a post on the Zalando Engineering blog about an incident that's hard to forget.

A single character typo — "metadata" becoming "metadpata" in a configuration file — caused our automation to interpret a config as "delete everything," removing DNS entries across our AWS infrastructure. One character. Significant blast radius.

## What the incident actually revealed

The bug itself wasn't the interesting part. Typos happen. What was interesting was that our tooling had no layer between "someone made an edit" and "the change runs at scale across production." For everyday tooling that's fine. For automation that manages infrastructure across hundreds of AWS accounts, it's not.

We called these "supertools" internally — scripts and pipelines that have the authority to touch a large number of resources in one operation. The more powerful the tool, the more the cost of a mistake scales with it. Standard code review processes aren't designed for that.

## What we changed

A few things came out of the post-mortem:

Schema validation with jsonschema and pre-commit hooks. Configuration errors now get caught before the PR is even opened, let alone merged.

CloudFormation ChangeSets for previewing changes. Before anything runs, reviewers see a human-readable diff of what's about to happen. "Delete 47 DNS records" is harder to miss than a YAML diff.

Phased rollouts. Changes don't apply everywhere at once. Early failures stay contained.

Scream tests before deletion. Resources that are candidates for removal get flagged and left alone for a week before anything is actually deleted. This catches the case where something looked unused but wasn't.

## The bigger point

The more powerful your automation, the more you need to build constraints into it. Not process constraints — structural ones. A change preview that shows you what's about to happen is more reliable than a checklist item that says "review the changes carefully."

The full write-up with technical details is on the [Zalando Engineering Blog](https://engineering.zalando.com/posts/2024/01/tale-of-metadpata-the-revenge-of-the-supertools.html).
