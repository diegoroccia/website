---
title: "Platform Orchestration and the Future of Cloud Abstractions"
description: "An exploration of the tools and patterns reshaping platform engineering, from Crossplane compositions to managed solutions like Kro, and the ongoing challenge of building abstractions that are both simple and flexible."
date: "2025-10-30"
---

A common theme in platform engineering is "operational gravity" - the force that keeps infrastructure teams stuck in a cycle of manual toil and maintenance. When a team is buried under the weight of supporting legacy systems, finding the capacity to innovate becomes a significant challenge. However, if the root problem is the sheer volume of low-level infrastructure requiring manual management, the solution likely lies in better abstraction.

At the current scale of operation, provisioning a simple cache or a database often requires a developer to navigate a 200+ line CloudFormation template or complex Kubernetes YAML. This direct exposure to the internal mechanics of the cloud provider creates a massive cognitive load. In many cases, this leads to "copy-paste engineering," where templates are repurposed without a full understanding of the underlying networking or security parameters. This lack of visibility inevitably leads to configuration drift and misconfigurations - the primary drivers of production incidents.

## Shifting from How to What

The fundamental issue is that traditional Infrastructure as Code (IaC) is often too imperative. It requires telling the cloud provider *how* to build something \- "create this subnet, then this security group, then this instance" \- rather than declaring *what* is actually needed.

To bridge this gap, a Control Plane approach is being proposed. In this model, the platform provides a high-level API that accepts "Intent." Instead of managing individual resources, developers submit a single manifest that describes a logical service. The control plane then takes on the responsibility of orchestration, ensuring that the actual state of the cloud matches the desired intent.

This shift targets two critical benefits. First, it dramatically increases velocity—engineers currently spend significant time poring over provider-specific documentation instead of writing business logic. By focusing on intent, the time-to-market for a new feature is no longer throttled by the complexity of the infrastructure required to support it. The focus shifts from VPC peering to service connectivity. Second, it enables proactive security. An intent-based model moves away from "detective" controls—scanners that find mistakes after they are deployed. Instead, the abstraction itself acts as a guardrail. If the abstraction only allows for encrypted, private databases, it becomes structurally impossible to accidentally create an insecure one.

## Exploring the Orchestration Landscape

There are several ways to implement this control plane logic, and the ecosystem is evolving rapidly. A few distinct options are currently under evaluation:

- **Custom Controllers**: Building bespoke operators in Go or Python to wrap cloud APIs. While powerful, this requires significant long-term maintenance effort from the platform team.
- **Kro**: An emerging project that simplifies the creation of custom resource definitions (CRDs) and controllers within Kubernetes, aiming to reduce the boilerplate of traditional operator development.
- **Radius**: An open-source project that defines a "graph" of application components and their relationships, attempting to abstract the underlying infrastructure provider entirely.
- **Crossplane**: A mature, CNCF-incubated project that extends the Kubernetes API to manage external resources.

## Learnings from the Crossplane Prototype

While several options remain on the table, the primary focus of current experimentation is Crossplane. Its maturity and its "Kubernetes-native" philosophy align well with the existing infrastructure stack.

The current prototype utilizes Compositions. Instead of writing low-level cloud resources, developers interact with a custom-defined resource, such as a Cache or a Database.

A typical manifest in this model looks like this:

apiVersion: platform.example.org/v1alpha1   
kind: Cache   
metadata:   
  name: my-app-cache   
spec:   
  parameters:   
    size: medium  
    replicas: 1   
    authTokenSecretRef: my-auth-token-secret 

Behind the scenes, the control plane takes this simple intent and orchestrates the creation of the ElastiCache cluster, the IAM policies, the network plumbing, and the security guardrails \- all following a predefined "Golden Path."

### Observations from Initial Testing

Unlike a standard CI/CD pipeline that runs once and stops, this approach utilizes a continuous control loop for drift detection and reconciliation. Testing shows that if a setting is changed manually in the cloud console, the platform detects the discrepancy and self-heals the resource back to the desired state defined in Git.

The use of Composite Resource Definitions (XRDs) allows the platform to hide the complexity of the underlying provider. Multiple resources—the database, subnet groups, parameter groups, and IAM roles—are bundled into a single logical unit that is versioned and managed as one. Because these abstractions are standard Kubernetes objects, they integrate seamlessly with the internal developer portal. Infrastructure is treated exactly like a microservice, with the same RBAC, auditing, and tooling.

## The Managed Appeal of Kro

While the focus remains on the Crossplane experiment due to its advanced composition features, other tools in the landscape are becoming impossible to ignore. Kro is a particularly interesting example. While it is currently not nearly as "powerful" as a solution like Crossplane \- particularly in its ability to model complex, multi-cloud resource environments out of the box \- it has become very appealing recently.

The fact that Kro is now provided as a managed capability within EKS significantly changes the trade-off. For a platform team, the reduction in operational overhead that comes with a managed service is a massive advantage. It allows the team to focus on defining the abstractions themselves rather than maintaining the health and scaling of the control plane infrastructure.

## The Struggle of Flexibility versus Simplicity

A recurring lesson from this project is that "good abstractions are hard." This is the classic leaky abstraction problem. If an abstraction is too simple, it cannot support the 10% of use cases that require specific performance tuning. If it is too powerful, it becomes just as complex as the cloud provider’s native API.

The proposed strategy follows a Convention over Configuration approach. For the 90% case, the high-level Cache object provides a "sane" environment that works out of the box with sensible defaults—this is the intended "Golden Path" for the majority of workloads. For the remaining 10% of power users who need more control, "escape hatches" or advanced parameter blocks are provided. While it's accepted that some hyper-bespoke systems may still require lower-level tools, the primary goal is making common tasks 10x easier for the majority.

## A Vision for Application-Centric Abstractions

This experiment represents the first step toward a broader goal: an Application-Centric manifest where infrastructure and code are inextricably linked.

The vision is to move away from thinking about individual deployments, services, databases, and caches. Instead, the application is defined as a single unit. This aligns with models like the Open Application Model (OAM), where a component (the code) is defined and then "traits" (such as autoscaling or storage) are attached.

## Closing Thoughts

By abstracting the "how" and focusing on the "what," the goal is not just to increase developer speed, but to make the entire platform more resilient. It is a significant transition from the current state of infrastructure management to a unified orchestration layer, but initial experiments suggest this is the most viable path to bridging the abstraction gap.
