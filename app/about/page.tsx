import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-20 space-y-12">
      {/* Hero Section */}
      <section className="space-y-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          About <span className="text-primary">Me</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Engineering Manager · Platform Engineering · FinOps
        </p>
        <p className="text-md text-muted-foreground">
          Berlin, Germany
        </p>
      </section>

      {/* Professional Summary */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Professional Summary</h2>
        <p className="text-muted-foreground leading-relaxed">
          Engineering Manager with extensive experience in Platform Engineering and FinOps at Zalando.
          I specialize in building resilient cloud infrastructure, optimizing AWS costs at scale, and leading
          high-performing engineering teams. My focus is on creating robust platforms that enable organizations
          to move fast while maintaining operational excellence.
        </p>
      </section>

      {/* Current Role */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Current Role</h2>
        <Card>
          <CardHeader>
            <CardTitle>Engineering Manager - Platform Engineering & FinOps</CardTitle>
            <CardDescription>Zalando · 2023 - Present</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Leading platform engineering teams building internal developer platforms</li>
              <li>Driving FinOps initiatives and cloud cost optimization strategies across AWS infrastructure</li>
              <li>Architecting scalable, resilient systems that serve millions of customers</li>
              <li>Mentoring engineers and fostering a culture of technical excellence</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Skills & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Cloud & Infrastructure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                AWS, Kubernetes, Docker, Terraform, Infrastructure as Code, Cloud Architecture
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Platform Engineering & DevOps</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                CI/CD, Observability, Monitoring, Site Reliability Engineering, Developer Experience
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Leadership & Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Engineering Management, Team Building, Technical Strategy, FinOps, Cost Optimization
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Italian (Native), English (Professional)
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Experience</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Engineering Manager - Platform Engineering & FinOps</CardTitle>
              <CardDescription>Zalando · 2023 - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Leading platform engineering teams and FinOps initiatives</li>
                <li>Driving cloud cost optimization across large-scale AWS infrastructure</li>
                <li>Building internal developer platforms and tooling</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Principal Engineer - Platform Compute</CardTitle>
              <CardDescription>Zalando · 2022 - 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Architected and evolved compute platform infrastructure</li>
                <li>Led technical strategy for container orchestration at scale</li>
                <li>Mentored senior engineers on cloud-native architectures</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Senior System Engineer</CardTitle>
              <CardDescription>Zalando · 2018 - 2022</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Built and maintained critical infrastructure components</li>
                <li>Designed highly available systems serving millions of requests</li>
                <li>Established observability and monitoring best practices</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Previous Experience</CardTitle>
              <CardDescription>2010 - 2018</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-sm font-semibold text-foreground">Senior Software Engineer - Lucini&Lucini (2016-2018)</p>
                <p className="text-xs text-muted-foreground">Cloud infrastructure and backend systems</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Software Engineer - Subito.it (2014-2016)</p>
                <p className="text-xs text-muted-foreground">Italy&apos;s leading classifieds platform</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Software Engineer - Buongiorno (2012-2014)</p>
                <p className="text-xs text-muted-foreground">Mobile services and digital content</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Software Developer - CoMedia (2010-2012)</p>
                <p className="text-xs text-muted-foreground">Web applications and digital solutions</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interests & Hobbies */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Beyond Work</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not architecting cloud infrastructure, you&apos;ll find me experimenting in the kitchen
              with new recipes, strategizing over board games with friends, tinkering with home automation projects,
              exploring virtual worlds through videogames, or spending quality time with my family.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Resume Download */}
      <section className="flex justify-center pt-8">
        <Button asChild size="lg" className="rounded-full px-8">
          <a href="/Diego_Roccia_2025-06-01.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </Button>
      </section>
    </div>
  );
}
