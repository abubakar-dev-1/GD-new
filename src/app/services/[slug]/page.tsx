import { Suspense } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceDetailHero from "@/components/services/ServiceDetailHero";
import ServiceProcess from "@/components/services/ServiceProcess";
import TrustedBy from "@/components/sections/TrustedBy";
import ServiceTechStack from "@/components/services/ServiceTechStack";
import RelatedProjects from "@/components/projects/RelatedProjects";
import ServiceCTABanner from "@/components/services/ServiceCTABanner";
import { client } from "../../../../sanity/lib/client";
import {
  serviceBySlugQuery,
  serviceSlugsQuery,
  latestProjectsQuery,
} from "../../../../sanity/lib/queries";
import { Service } from "@/types/service";
import { Project } from "@/types/project";
import { transformServiceToDetail, transformProjectToRelated } from "@/lib/sanity-helpers";
import {
  SkeletonServiceDetailBody,
  SkeletonRelatedProjectsSection,
} from "@/components/ui/Skeleton";

export const revalidate = 60;

// Hardcoded fallback data per slug (used when no Sanity data exists yet)
const fallbackData: Record<
  string,
  {
    heroTitle: string;
    heroDescription: string;
    heroImage: string;
    mobileHeroImage: string;
    processHeading: string;
    processDescription: string;
    processSteps: { title: string; description: string }[];
  }
> = {
  "software-development": {
    heroTitle: "Custom Software That Powers Your Business.",
    heroDescription:
      "From concept to code, we deliver scalable and secure software solutions that solve your unique challenges.",
    heroImage: "/services/image 52.png",
    mobileHeroImage: "/services/mobile_image 52.png",
    processHeading: "Process for Developing software",
    processDescription:
      "We are a collective of strategists, creatives, and engineers united by a passion for building brands that matter.",
    processSteps: [
      { title: "Idea & Goal", description: "Define the problem, who it's for, and what success looks like (clear outcomes and KPIs)." },
      { title: "Requirements", description: 'Capture functional needs ("what it must do") and non-functional needs (performance, security, compliance).' },
      { title: "Architecture & Technical Design", description: "Choose stack, design system components/APIs, data models, and quality/security standards." },
      { title: "Implementation", description: "Code to the stories with peer reviews; keep changes small and frequent." },
      { title: "Testing", description: "Run unit, integration, end-to-end, performance, and security tests; fix defects fast." },
      { title: "Deployment", description: "Automate deploys to staging → production; verify with smoke tests and monitoring." },
    ],
  },
  "chat-bot-development": {
    heroTitle: "Intelligent Chatbots That Drive Results.",
    heroDescription:
      "Creating conversational AI chatbots that enhance customer engagement, automate support, and drive sales 24/7.",
    heroImage: "/services/image 51(5).png",
    mobileHeroImage: "/services/mobile_image 51(3).png",
    processHeading: "Process for Building Chatbots",
    processDescription:
      "We are a collective of strategists, creatives, and engineers united by a passion for building brands that matter.",
    processSteps: [
      { title: "Discovery & Use Cases", description: "Identify the key conversations, user intents, and channels your chatbot needs to support." },
      { title: "Conversation Design", description: "Map out dialogue flows, fallback strategies, and personality guidelines for natural interactions." },
      { title: "NLP & AI Training", description: "Train language models on your domain data to ensure accurate intent recognition and entity extraction." },
      { title: "Integration & Development", description: "Build and connect the chatbot to your existing systems, CRMs, and communication platforms." },
      { title: "Testing & Refinement", description: "Simulate real conversations, test edge cases, and refine responses for optimal user experience." },
      { title: "Launch & Optimization", description: "Deploy across channels and continuously improve using analytics and user feedback." },
    ],
  },
  "ai-development": {
    heroTitle: "AI Solutions That Transform Your Business.",
    heroDescription:
      "Leveraging the power of Artificial Intelligence and Machine Learning to unlock predictive insights and automate complex processes.",
    heroImage: "/services/image 51(4).png",
    mobileHeroImage: "/services/mobile_image 51(4).png",
    processHeading: "Process for AI Development",
    processDescription:
      "We are a collective of strategists, creatives, and engineers united by a passion for building brands that matter.",
    processSteps: [
      { title: "Problem Definition", description: "Identify the business problem, define success metrics, and evaluate AI feasibility." },
      { title: "Data Collection & Prep", description: "Gather, clean, and prepare training data to ensure quality model performance." },
      { title: "Model Selection & Design", description: "Choose the right algorithms, architectures, and frameworks for your specific use case." },
      { title: "Training & Validation", description: "Train models iteratively, validate against benchmarks, and tune hyperparameters." },
      { title: "Integration & Testing", description: "Embed AI into your product with robust APIs, and test thoroughly in real scenarios." },
      { title: "Deployment & Monitoring", description: "Deploy to production with monitoring for model drift, performance, and continuous improvement." },
    ],
  },
  "mobile-app-development": {
    heroTitle: "Mobile Apps Built for Performance.",
    heroDescription:
      "Building beautiful, high-performance native and cross-platform mobile applications for iOS and Android.",
    heroImage: "/services/image 51(2).png",
    mobileHeroImage: "/services/mobile_image 51(2).png",
    processHeading: "Process for Mobile App Development",
    processDescription:
      "We are a collective of strategists, creatives, and engineers united by a passion for building brands that matter.",
    processSteps: [
      { title: "Strategy & Planning", description: "Define target platforms, user personas, and core features for your mobile experience." },
      { title: "UX/UI Design", description: "Design intuitive interfaces following platform guidelines for seamless user experiences." },
      { title: "Architecture Setup", description: "Choose the right tech stack (native, cross-platform) and set up scalable app architecture." },
      { title: "Development & Iteration", description: "Build features in sprints with regular demos, feedback loops, and code reviews." },
      { title: "QA & Device Testing", description: "Test across devices, OS versions, and network conditions to ensure reliability." },
      { title: "Launch & Store Submission", description: "Prepare store assets, submit for review, and launch with monitoring and crash reporting." },
    ],
  },
  "web-development": {
    heroTitle: "Web Experiences That Stand Out.",
    heroDescription:
      "Developing responsive, fast, and feature-rich web applications and websites that serve as the digital cornerstone of your brand.",
    heroImage: "/services/image 51(1).png",
    mobileHeroImage: "/services/mobile_image 51(1).png",
    processHeading: "Process for Web Development",
    processDescription:
      "We are a collective of strategists, creatives, and engineers united by a passion for building brands that matter.",
    processSteps: [
      { title: "Discovery & Planning", description: "Understand your goals, target audience, and technical requirements for the web project." },
      { title: "Wireframing & Design", description: "Create wireframes and high-fidelity designs that align with your brand and user needs." },
      { title: "Frontend Development", description: "Build responsive, accessible interfaces with modern frameworks and best practices." },
      { title: "Backend & API", description: "Develop robust server-side logic, databases, and APIs to power your application." },
      { title: "Testing & Optimization", description: "Ensure cross-browser compatibility, performance, accessibility, and SEO optimization." },
      { title: "Deployment & Support", description: "Launch with CI/CD pipelines, monitoring, and ongoing maintenance and support." },
    ],
  },
  "ui-ux-design": {
    heroTitle: "Design That Delights Users.",
    heroDescription:
      "Crafting intuitive and visually stunning user interfaces and experiences that prioritize usability and drive engagement.",
    heroImage: "/services/image 51(3).png",
    mobileHeroImage: "/services/mobile_image 51.png",
    processHeading: "Process for UI/UX Design",
    processDescription:
      "We are a collective of strategists, creatives, and engineers united by a passion for building brands that matter.",
    processSteps: [
      { title: "Research & Discovery", description: "Conduct user research, competitive analysis, and stakeholder interviews to inform design." },
      { title: "Information Architecture", description: "Organize content and features into logical, intuitive structures and user flows." },
      { title: "Wireframing", description: "Create low-fidelity wireframes to validate layout, navigation, and interaction patterns." },
      { title: "Visual Design", description: "Craft pixel-perfect UI with your brand's visual language, typography, and color system." },
      { title: "Prototyping & Testing", description: "Build interactive prototypes and validate with real users through usability testing." },
      { title: "Handoff & QA", description: "Deliver detailed specs, assets, and design tokens; review implementation for pixel accuracy." },
    ],
  },
  devops: {
    heroTitle: "DevOps That Accelerates Delivery.",
    heroDescription:
      "Streamlining your development lifecycle with our DevOps expertise, ensuring rapid, reliable, and continuous delivery of your software.",
    heroImage: "/services/image 51.png",
    mobileHeroImage: "/services/mobile_image 51.png",
    processHeading: "Process for DevOps",
    processDescription:
      "We are a collective of strategists, creatives, and engineers united by a passion for building brands that matter.",
    processSteps: [
      { title: "Assessment & Strategy", description: "Evaluate your current infrastructure, workflows, and identify optimization opportunities." },
      { title: "CI/CD Pipeline Setup", description: "Design and implement automated build, test, and deployment pipelines for fast delivery." },
      { title: "Infrastructure as Code", description: "Define infrastructure using code for reproducible, version-controlled environments." },
      { title: "Containerization", description: "Containerize applications with Docker and orchestrate with Kubernetes for scalability." },
      { title: "Monitoring & Logging", description: "Set up comprehensive monitoring, alerting, and centralized logging for full visibility." },
      { title: "Security & Compliance", description: "Integrate security scanning, access controls, and compliance checks into your pipeline." },
    ],
  },
};

// Static params from Sanity + fallback slugs
const fallbackSlugs = Object.keys(fallbackData);

export async function generateStaticParams() {
  const sanitySlugs: string[] = await client.fetch(serviceSlugsQuery);
  const allSlugs = [...new Set([...sanitySlugs, ...fallbackSlugs])];
  return allSlugs.map((slug) => ({ slug }));
}

async function ServiceContent({ slug }: { slug: string }) {
  const service: Service | null = await client.fetch(serviceBySlugQuery, { slug });

  if (service) {
    const detail = transformServiceToDetail(service);
    return (
      <>
        <ServiceDetailHero
          title={detail.heroTitle}
          description={detail.heroDescription}
          image={detail.heroImage}
          mobileImage={detail.mobileHeroImage}
        />
        {detail.processSteps.length > 0 && (
          <ServiceProcess
            heading={detail.processHeading}
            description={detail.processDescription}
            steps={detail.processSteps}
          />
        )}
      </>
    );
  }

  const fb = fallbackData[slug];
  if (!fb) notFound();

  return (
    <>
      <ServiceDetailHero
        title={fb.heroTitle}
        description={fb.heroDescription}
        image={fb.heroImage}
        mobileImage={fb.mobileHeroImage}
      />
      <ServiceProcess
        heading={fb.processHeading}
        description={fb.processDescription}
        steps={fb.processSteps}
      />
    </>
  );
}

async function RelatedProjectsSection() {
  const sanityProjects: Project[] = await client.fetch(latestProjectsQuery);
  const relatedProjects = sanityProjects.map(transformProjectToRelated);
  return <RelatedProjects projects={relatedProjects} />;
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-[#000000]">
      <Navbar />
      <Suspense fallback={<SkeletonServiceDetailBody />}>
        <ServiceContent slug={slug} />
      </Suspense>
      <TrustedBy />
      <ServiceTechStack />
      <Suspense fallback={<SkeletonRelatedProjectsSection />}>
        <RelatedProjectsSection />
      </Suspense>
      <ServiceCTABanner />
      <Footer />
    </div>
  );
}
