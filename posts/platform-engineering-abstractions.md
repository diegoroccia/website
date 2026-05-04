---
title: "Platform Orchestration and the Future of Cloud Abstractions"
description: "An exploration of the tools and patterns reshaping platform engineering, from Crossplane compositions to managed solutions like Kro, and the ongoing challenge of building abstractions that are both simple and flexible."
date: "2025-10-30"
---

Provisioning a cache at Zalando requires navigating a 200+ line CloudFormation template. For engineers who do this once a week, fine. For engineers who do it once a quarter, it means reading provider documentation, copying templates they don't fully understand, and hoping the network and security parameters are right.

When they're not, you get configuration drift. When you get enough configuration drift, you get production incidents. Most of the misconfigurations I've seen weren't caused by people being careless — they were caused by the gap between what IaC requires you to specify and what developers actually need to express.

The gap is: traditional IaC tells you *how* to build something. Most developers just want to say *what* they need.

## The control plane approach

The direction we're exploring is a control plane that accepts intent rather than instructions. A developer submits a manifest that says "I need a cache, medium size, one replica" — and the platform handles the rest. The ElastiCache cluster, the IAM policies, the VPC configuration, the security groups. All of it.

Two things this buys you. First, speed. The time developers spend reading CloudFormation docs and debugging VPC peering is time not spent on the actual service. Second, security by default. If the abstraction only allows encrypted, private databases, you can't accidentally create an insecure one. You move from detective controls (scanners that find mistakes after deployment) to structural controls.

## What we evaluated

A few options are on the table:

**Custom controllers** — operators written in Go or Python that wrap cloud APIs. Powerful, but the platform team owns the maintenance indefinitely. For a team already under operational pressure, that's a real cost.

**Kro** — a newer project that simplifies creating CRDs and controllers inside Kubernetes. Less powerful than Crossplane today, especially for complex multi-cloud resource graphs, but it's now available as a managed capability on EKS. That changes the trade-off significantly. Managed means we don't operate a control plane for our control plane.

**Radius** — defines application components and their relationships as a graph, abstracting away the provider. Interesting model, still evolving.

**Crossplane** — CNCF-incubated, Kubernetes-native, mature. This is where most of our current work is focused.

## What we learned from the Crossplane prototype

The core primitive in Crossplane is a Composition. Instead of writing CloudFormation, developers interact with a custom resource:

```yaml
apiVersion: platform.example.org/v1alpha1
kind: Cache
metadata:
  name: my-app-cache
spec:
  parameters:
    size: medium
    replicas: 1
    authTokenSecretRef: my-auth-token-secret
```

The control plane turns that into an ElastiCache cluster, IAM policies, network config, and security guardrails — all following a predefined golden path. The developer doesn't see any of it unless something goes wrong.

A few things stood out from testing:

Drift detection is continuous, not point-in-time. If someone manually changes a setting in the AWS console, Crossplane detects the discrepancy and reconciles back to the declared state. This is meaningfully different from a CI/CD pipeline that runs once and stops.

The abstractions are standard Kubernetes objects. That means they get the same RBAC, auditing, and portal integration as everything else. Infrastructure is treated like a microservice.

XRDs let you bundle multiple resources into a single versioned unit. The database, subnet groups, parameter groups, and IAM roles are one logical thing from the developer's perspective.

## The flexibility problem

Good abstractions are hard to get right. If the abstraction is too simple, it can't handle the 10% of use cases that need specific tuning. If it's too powerful, you've just recreated the cloud provider API with extra steps.

Our working approach: convention over configuration. For the 90% case, the high-level object provides sensible defaults and just works. For the 10% who need more control, there are escape hatches — advanced parameter blocks that expose specific settings. We've accepted that a small number of hyper-bespoke systems will still need lower-level tools. The goal isn't to serve every possible case; it's to make common cases 10x easier for the majority.

## Where this is going

This is the first step toward something broader: a single application manifest where infrastructure and code are defined together. You describe what your application is, and attach traits to it — autoscaling, storage, caching. The infrastructure follows from the declaration, not the other way around.

That's the direction. Getting there requires getting the abstraction layer right first, and that's what the Crossplane work is validating.
