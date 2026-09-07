import { Bot, Command, Users, BarChart3, Zap, Sparkles } from "lucide-react";

export const features = [
  {
    icon: Bot,
    title: "AI task automation",
    copy: "Turn busywork into background work. NOVA keeps projects moving while your team focuses on what matters.",
    tone: "pink",
  },
  {
    icon: Command,
    title: "Smart project spaces",
    copy: "See priorities, dependencies, and momentum in one calm, flexible workspace.",
    tone: "teal",
  },
  {
    icon: Users,
    title: "Collaboration that clicks",
    copy: "Bring every voice into the room with shared context, async updates, and clear ownership.",
    tone: "lavender",
  },
  {
    icon: BarChart3,
    title: "Intelligent analytics",
    copy: "Spot bottlenecks before they become blockers with live, human-readable insights.",
    tone: "peach",
  },
  {
    icon: Zap,
    title: "Workflow orchestration",
    copy: "Connect the tools you already love and automate the handoffs between them.",
    tone: "ochre",
  },
  {
    icon: Sparkles,
    title: "Your AI copilot",
    copy: "Ask NOVA to summarize, plan, write, and surface the next best action instantly.",
    tone: "cream",
  },
];

export const solutions = {
  Engineering: {
    title: "Ship with signal, not noise.",
    copy: "NOVA connects issues, milestones, and team capacity so your engineers can stay in flow.",
    points: [
      "Automated sprint planning",
      "Release health snapshots",
      "Async standups that write themselves",
    ],
    color: "teal",
  },
  Product: {
    title: "Make the roadmap magnetic.",
    copy: "Move from customer insight to shipped outcome with a single source of truth for every decision.",
    points: [
      "Prioritize with confidence",
      "Share living roadmaps",
      "Turn feedback into action",
    ],
    color: "lavender",
  },
  Marketing: {
    title: "Create momentum on demand.",
    copy: "Keep launches moving across channels with visibility from first brief to final report.",
    points: [
      "Campaign command center",
      "Content workflows",
      "At-a-glance performance",
    ],
    color: "pink",
  },
  Design: {
    title: "Protect the creative flow.",
    copy: "Give ideas room to grow while keeping reviews, files, and decisions beautifully organized.",
    points: [
      "Visual project boards",
      "Frictionless feedback",
      "Design handoff clarity",
    ],
    color: "peach",
  },
};

export const testimonials = [
  {
    quote:
      "NOVA gave our team back the headspace to do our best work. We moved from scattered to synced in a week.",
    name: "Maya Chen",
    role: "VP Product, Lumio",
    initials: "MC",
  },
  {
    quote:
      "It feels like adding a brilliant operations lead to every project. The AI is useful, calm, and genuinely intuitive.",
    name: "Jordan Ellis",
    role: "COO, Vertex",
    initials: "JE",
  },
  {
    quote:
      "We cut our weekly planning ritual in half and shipped our biggest launch yet. NOVA is now our operating system.",
    name: "Priya Shah",
    role: "Founder, Northstar",
    initials: "PS",
  },
];

export const faqs = [
  [
    "What is NOVA?",
    "NOVA is an AI-powered productivity platform for teams that want to manage projects, automate repetitive work, and collaborate with less friction.",
  ],
  [
    "Is there a free plan?",
    "Yes. The Starter plan is free for up to 3 teammates and includes unlimited projects, core AI tools, and essential integrations.",
  ],
  [
    "Can NOVA integrate with our existing tools?",
    "NOVA connects with the tools your team already uses, including Slack, GitHub, Linear, Google Drive, and more.",
  ],
  [
    "Is our data secure?",
    "Your workspace is protected with enterprise-grade encryption, role-based permissions, and continuous backups.",
  ],
  [
    "Can I cancel anytime?",
    "Absolutely. There are no long-term contracts on monthly plans, and you can export your workspace whenever you need.",
  ],
];

export const processSteps = [
  ["01", "Connect", "Bring your tools, goals, and team into one shared space."],
  [
    "02",
    "Plan",
    "Give every priority a home and every project a clear next step.",
  ],
  ["03", "Automate", "Let NOVA handle the repeatable work behind the scenes."],
  ["04", "Deliver", "See momentum build and celebrate what you made together."],
] as const;

export const navLinks: [string, string][] = [
  ["Features", "#features"],
  ["Product", "#product"],
  ["How it works", "#how-it-works"],
  ["Solutions", "#solutions"],
  ["Pricing", "#pricing"],
  ["FAQ", "#faq"],
];

export const trustedLogos = [
  "vertex",
  "orbit",
  "lumio",
  "northstar",
  "flux",
  "arc /",
];

export const statValues = [10000, 2000000, 98, 40];
export const statFormats = ["K+", "M+", "%", "%"];
export const statLabels = [
  "teams in flow",
  "tasks automated",
  "say work feels lighter",
  "faster workflows",
];