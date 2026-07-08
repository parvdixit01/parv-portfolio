export const siteConfig = {
  name: "Parv Dixit",
  title: "DevOps Engineer",
  domain: "parv-portfolio",
  location: "Pune, India",
  email: "p4rv.dixit@gmail.com",
  github: "https://github.com/parvdixit01",
  linkedin: "https://www.linkedin.com/in/parv-dixit-4a07621b7/",
  availability: "Open to DevOps & Cloud opportunities",
  tagline: "Automating pipelines. Hardening infra. Shipping reliably.",
};

export const bio = {
  short:
    "DevOps Engineer based in Pune, focused on reliable delivery pipelines, containerized workloads, and production systems that stay up when it matters.",
  long: `DevOps Engineer based in Pune, focused on reliable delivery pipelines, containerized workloads, and production systems that stay up when it matters. At Capgemini, I work across automation, monitoring, and incident response in Linux-centric environments.

I enjoy turning manual ops into repeatable infrastructure — from Git workflows and CI/CD to Docker and cloud-ready deployments. I'm passionate about building systems that don't wake anyone at 3 AM.`,
};

export const stats = [
  { label: "Location", value: "Pune, IN" },
  { label: "Role", value: "DevOps Engineer" },
  { label: "Experience", value: "1+ Years" },
  { label: "Status", value: "Available" },
];

export const skillCategories = [
  {
    id: "cloud",
    title: "Cloud Platforms",
    icon: "cloud",
    skills: ["AWS", "Azure"],
  },
  {
    id: "containers",
    title: "Containers & Orchestration",
    icon: "container",
    skills: ["Docker", "Kubernetes"],
  },
  {
    id: "cicd",
    title: "CI/CD & Automation",
    icon: "pipeline",
    skills: ["Jenkins", "GitHub Actions"],
  },
  {
    id: "iac",
    title: "Infrastructure as Code",
    icon: "iac",
    skills: ["Terraform", "Ansible"],
  },
  {
    id: "monitoring",
    title: "Monitoring & Observability",
    icon: "monitor",
    skills: ["Prometheus", "Grafana"],
  },
  {
    id: "linux",
    title: "Linux & Networking",
    icon: "linux",
    skills: ["Linux", "Bash", "NGINX"],
  },
  {
    id: "scripting",
    title: "Programming & Scripting",
    icon: "code",
    skills: ["Python"],
  },
  {
    id: "itsm",
    title: "ITSM & Collaboration",
    icon: "itsm",
    skills: ["ServiceNow", "Jira", "Git/GitHub"],
  },
];

export const projects = [
  {
    id: "ticket-reminder",
    title: "Ticket Reminder Automation Tool",
    description:
      "Automates follow-ups on open IT/service tickets by sending scheduled email reminders before SLA breach, reducing manual tracking overhead for support teams.",
    stack: ["Python", "Cron", "SMTP", "ServiceNow API"],
    featured: true,
    placeholder: false,
    repo: null,
    demo: null,
    architecture:
      "Scheduler → Python Script → Ticket API → Email Notification → SLA Dashboard",
  },
  {
    id: "cicd-pipeline",
    title: "End-to-End CI/CD Pipeline",
    description:
      "Automated build-test-deploy pipeline with Docker image builds, quality gates, and artifact publishing to a container registry.",
    stack: ["Jenkins", "GitHub Actions", "Docker", "SonarQube", "Nexus"],
    featured: false,
    placeholder: true,
    repo: null,
    demo: null,
    architecture:
      "Git Push → CI Trigger → Build & Test → Sonar Scan → Docker Build → Registry Push → Deploy",
  },
  {
    id: "k8s-monitoring",
    title: "Kubernetes Monitoring Lab",
    description:
      "Multi-node Kubernetes homelab with Prometheus metrics collection, Grafana dashboards, and alert rules for pod and node health.",
    stack: ["Kubernetes", "Docker", "Prometheus", "Grafana", "NGINX Ingress"],
    featured: false,
    placeholder: true,
    repo: null,
    demo: null,
    architecture:
      "K8s Cluster → Prometheus Exporters → Grafana Dashboards → Alertmanager → Notifications",
  },
];

export const experience = [
  {
    id: "capgemini",
    role: "DevOps Engineer",
    company: "Capgemini",
    location: "Pune, India",
    period: "May 2025 – Present",
    highlights: [
      "Maintain and support CI/CD pipelines for application build, test, and deployment workflows",
      "Monitor service health and respond to alerts; perform initial triage and escalation per runbooks",
      "Work in Linux environments for deployment support, log analysis, and routine operational tasks",
      "Manage containerized application deployments and troubleshoot common runtime issues",
      "Coordinate releases and changes with development and operations teams using ServiceNow and Jira",
      "Document incident steps, deployment procedures, and troubleshooting guides for the team",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Noida Institute of Engineering and Technology",
    location: "Greater Noida, India",
    year: "2024",
  },
];

export const certifications = {
  message:
    "Certifications in progress — AWS Cloud Practitioner and CKA on the roadmap. Details coming soon.",
  items: [] as { name: string; issuer: string; status: string }[],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const terminalBootLines = [
  "Initializing Nexus Terminal v2.0.26...",
  "Loading kernel modules... OK",
  "Starting docker.service... OK",
  "Starting kubelet.service... OK",
  "Mounting /dev/portfolio... OK",
  "Establishing secure connection... OK",
  "Welcome, Parv Dixit",
];

export const terminalCommands = {
  help: `Available commands:
  whoami    — identity & role
  skills    — jump to tool stack
  projects  — jump to projects
  experience — jump to work history
  contact   — jump to contact
  about     — jump to about section
  clear     — clear terminal output`,
  whoami: `${siteConfig.name} | ${siteConfig.title} | ${siteConfig.location}`,
};
