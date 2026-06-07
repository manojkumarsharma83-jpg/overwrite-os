"use client";

import { useEffect, useState, type ComponentType } from "react";
import {
  Activity, ArrowRight, BriefcaseBusiness,
  CheckCircle2, ChevronRight,
  FileSearch, Gauge, Globe2, LayoutDashboard, Menu,
  MoreHorizontal, Search,
  Settings, ShieldCheck, Sparkles, Target, TrendingUp, Users, Workflow, X,
  Factory, HeartPulse, GraduationCap, Building2, ShoppingBag, Rocket,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type Icon = ComponentType<{ className?: string }>;

type IndustryId = "manufacturing" | "healthcare" | "education" | "real-estate" | "consultants" | "retail" | "startup";

type IndustryProfile = {
  id: IndustryId;
  label: string;
  icon: Icon;
  challenge: string;
  opportunity: string;
  workflows: string[];
  recommendations: { title: string; detail: string; tag: string }[];
  activity: string[];
};

type TransformationTemplate = {
  currentState: string;
  futureState: string;
  constraint: string;
  opportunities: { title: string; impact: string }[];
  blueprint: { stage: string; situation: string; outcome: string; systems: string[]; impact: string }[];
  systems: { name: string; problem: string; impact: string; benefits: string[]; complexity: string; timeline: string }[];
};

const transformationTemplates: Partial<Record<IndustryId, TransformationTemplate>> = {
  manufacturing: {
    currentState:"A capable manufacturing business with strong production knowledge, but growth is limited by low visibility, manual quotations, poor inquiry tracking, and weak dealer systems.",
    futureState:"A visible and scalable manufacturing business with fast quotations, controlled inquiries, and a high-performing dealer network.",
    constraint:"Inquiry and dealer management",
    opportunities:[{title:"Become easier for high-value buyers to discover",impact:"Build a stronger pipeline beyond referrals and existing relationships."},{title:"Reduce quotation turnaround time",impact:"Respond faster and win more time-sensitive opportunities."},{title:"Activate the dealer network",impact:"Create consistent visibility, follow-up, and sales accountability."}],
    blueprint:[
      {stage:"Current State",situation:"Low visibility, manual quotations, and inquiries managed across calls and messages.",outcome:"A shared view of demand, inquiry flow, and growth constraints.",systems:["Manufacturing assessment","Inquiry map"],impact:"Clear priorities and fewer missed opportunities."},
      {stage:"Foundation",situation:"Product value and capabilities are not communicated consistently.",outcome:"A professional manufacturing brand buyers and dealers can trust.",systems:["Brand foundation","Capability positioning"],impact:"Higher buyer confidence and clearer differentiation."},
      {stage:"Visibility",situation:"New buyers rarely discover the business without an introduction.",outcome:"Consistent visibility among target industries and buyers.",systems:["Digital presence","Industry authority content"],impact:"More qualified inbound demand."},
      {stage:"Lead Generation",situation:"Quotation and inquiry follow-up are slow and difficult to track.",outcome:"Every inquiry is captured, qualified, quoted, and followed up.",systems:["Inquiry tracking","Quotation workflow"],impact:"Faster response and improved conversion."},
      {stage:"Operations",situation:"Dealer and sales activity lacks consistent coordination.",outcome:"A structured dealer and sales operating rhythm.",systems:["Dealer management","Sales reporting"],impact:"Greater dealer productivity and accountability."},
      {stage:"Automation",situation:"Teams manually chase quotations, updates, and reports.",outcome:"Routine commercial follow-up happens reliably.",systems:["Quotation reminders","Automated reporting"],impact:"More selling time and less coordination."},
      {stage:"Scale Ready",situation:"Growth depends on owner relationships and manual oversight.",outcome:"A measurable commercial engine ready for new markets.",systems:["Executive intelligence","Market expansion system"],impact:"Predictable growth and expansion readiness."},
    ],
    systems:[
      {name:"Manufacturing Visibility System",problem:"Low visibility among target buyers.",impact:"Makes capabilities easier to discover and trust.",benefits:["More qualified inquiries","Stronger credibility","New market reach"],complexity:"Moderate",timeline:"4–6 weeks"},
      {name:"Quotation Management System",problem:"Manual quotations delay response and follow-up.",impact:"Creates a faster path from inquiry to commercial decision.",benefits:["Faster quotations","Consistent follow-up","Higher conversion"],complexity:"Moderate",timeline:"3–5 weeks"},
      {name:"Inquiry Tracking System",problem:"Inquiries are spread across calls, messages, and individuals.",impact:"Ensures every opportunity has ownership and a next action.",benefits:["Fewer missed leads","Clear ownership","Pipeline visibility"],complexity:"Focused",timeline:"2–3 weeks"},
      {name:"Dealer Growth System",problem:"Dealer activity and performance are inconsistent.",impact:"Turns the dealer network into an accountable growth channel.",benefits:["Active dealers","Better reporting","Consistent follow-up"],complexity:"Advanced",timeline:"6–8 weeks"},
    ],
  },
  consultants: {
    currentState:"A trusted expert-led business where growth depends heavily on reputation and referrals, with limited authority visibility, inconsistent leads, a weak personal brand, and no repeatable sales process.",
    futureState:"A visible authority-led consulting business with a strong personal brand, predictable opportunities, and a clear sales journey.",
    constraint:"Authority-led lead generation",
    opportunities:[{title:"Own a clear category position",impact:"Make expertise easier to understand, remember, and recommend."},{title:"Turn knowledge into authority",impact:"Create consistent visibility without constant selling."},{title:"Build a repeatable sales journey",impact:"Convert the right opportunities with greater confidence."}],
    blueprint:[
      {stage:"Current State",situation:"Strong expertise, but authority and lead flow depend on referrals.",outcome:"Clarity on the strongest expertise, market, and growth constraint.",systems:["Consulting assessment","Opportunity map"],impact:"Sharper focus and clearer growth priorities."},
      {stage:"Foundation",situation:"The personal brand and transformation promise are unclear.",outcome:"A credible authority position built around a clear outcome.",systems:["Personal brand foundation","Signature transformation"],impact:"Stronger trust and easier referrals."},
      {stage:"Visibility",situation:"Expertise is not consistently visible to ideal clients.",outcome:"A recognizable expert presence that earns attention.",systems:["Authority platform","Insight publishing rhythm"],impact:"Greater visibility and inbound trust."},
      {stage:"Lead Generation",situation:"Leads arrive inconsistently and are not guided through a sales process.",outcome:"A repeatable journey from interest to qualified conversation.",systems:["Lead capture","Consultative sales process"],impact:"More consistent, better-fit opportunities."},
      {stage:"Operations",situation:"Delivery and onboarding depend heavily on the consultant.",outcome:"A professional, repeatable client experience.",systems:["Client onboarding","Delivery playbook"],impact:"Consistent quality and more capacity."},
      {stage:"Automation",situation:"Follow-up, content, and reporting require repeated manual effort.",outcome:"Routine growth activity continues without constant attention.",systems:["Follow-up automation","Content workflow"],impact:"More time for advisory work."},
      {stage:"Scale Ready",situation:"Revenue and delivery remain tied to individual time.",outcome:"A scalable advisory model with intellectual property and leverage.",systems:["Knowledge system","Executive intelligence"],impact:"Higher leverage and strategic freedom."},
    ],
    systems:[
      {name:"Personal Brand Authority System",problem:"Expertise is valuable but not consistently visible or memorable.",impact:"Builds a recognizable position that attracts ideal clients.",benefits:["Stronger authority","Clear differentiation","Greater trust"],complexity:"Focused",timeline:"3–4 weeks"},
      {name:"Authority Content System",problem:"Knowledge is not translated into consistent market visibility.",impact:"Turns expertise into ongoing demand and credibility.",benefits:["Consistent visibility","Inbound interest","Reusable insights"],complexity:"Moderate",timeline:"4–6 weeks"},
      {name:"Consulting Lead System",problem:"Lead flow is inconsistent and dependent on referrals.",impact:"Creates a repeatable flow of qualified consulting opportunities.",benefits:["Predictable leads","Better-fit clients","Clear pipeline"],complexity:"Moderate",timeline:"4–6 weeks"},
      {name:"Consultative Sales System",problem:"There is no consistent path from conversation to commitment.",impact:"Guides prospects toward confident decisions without pressure.",benefits:["Higher conversion","Clear follow-up","Shorter sales cycle"],complexity:"Focused",timeline:"2–4 weeks"},
    ],
  },
  healthcare: {
    currentState:"Patients trust the care, but finding the practice, booking appointments, and staying connected can be easier.",
    futureState:"A trusted and organized practice where patients can easily find, book, and return.",
    constraint:"Making the patient journey simple and consistent",
    opportunities:[{title:"Help more patients find the practice",impact:"Improve local visibility and trust."},{title:"Make appointments easier",impact:"Reduce missed bookings and staff coordination."},{title:"Stay connected after each visit",impact:"Improve patient retention and reviews."}],
    blueprint:[
      {stage:"Understand",situation:"We first understand how patients currently find, book, and interact with the practice.",outcome:"Everyone agrees on the biggest patient journey gaps.",systems:["Practice review","Patient journey"],impact:"Clear priorities for improvement."},
      {stage:"Build Trust",situation:"The practice may be excellent, but its value is not always clearly communicated.",outcome:"Patients quickly understand why they can trust the practice.",systems:["Clear practice message","Patient communication"],impact:"Greater patient confidence."},
      {stage:"Become Visible",situation:"Nearby patients may not easily find or evaluate the practice.",outcome:"More local patients can discover and trust the practice.",systems:["Local visibility","Patient reviews"],impact:"More relevant patient inquiries."},
      {stage:"Improve Booking",situation:"Inquiries and appointment requests can be missed or delayed.",outcome:"Every patient receives a clear path to a confirmed appointment.",systems:["Inquiry tracking","Appointment process"],impact:"More bookings and fewer lost inquiries."},
      {stage:"Improve Experience",situation:"Booking, reminders, and follow-up take too much staff effort.",outcome:"Patients receive a smooth and consistent experience.",systems:["Appointment management","Patient follow-up"],impact:"Fewer missed appointments and better retention."},
      {stage:"Automate Routine Work",situation:"Staff repeatedly send reminders, follow-ups, and review requests.",outcome:"Routine communication happens automatically and reliably.",systems:["Automatic reminders","Review requests"],impact:"Less staff workload and better engagement."},
      {stage:"Grow Confidently",situation:"Serving more patients can make coordination harder.",outcome:"The practice can grow without reducing care quality.",systems:["Performance visibility","Patient retention"],impact:"Sustainable practice growth."},
    ],
    systems:[
      {name:"Local Healthcare Visibility System",problem:"Nearby patients cannot easily discover or evaluate the practice.",impact:"Builds trusted local visibility where patient decisions begin.",benefits:["More local discovery","Stronger trust","Relevant inquiries"],complexity:"Moderate",timeline:"4–6 weeks"},
      {name:"Appointment Management System",problem:"Booking, reminders, and rescheduling create friction.",impact:"Creates a reliable appointment journey for patients and staff.",benefits:["Fewer no-shows","Less coordination","Better patient experience"],complexity:"Moderate",timeline:"3–5 weeks"},
      {name:"Patient Retention System",problem:"Patient relationships weaken after treatment or consultation.",impact:"Creates consistent care follow-up and long-term engagement.",benefits:["Better retention","Timely follow-up","Stronger relationships"],complexity:"Focused",timeline:"3–4 weeks"},
      {name:"Review Management System",problem:"Positive patient experiences do not consistently become visible trust signals.",impact:"Builds an active reputation that supports patient confidence.",benefits:["More quality reviews","Stronger reputation","Higher trust"],complexity:"Focused",timeline:"2–3 weeks"},
    ],
  },
};

const industryProfiles: IndustryProfile[] = [
  { id:"manufacturing", label:"Manufacturing", icon:Factory, challenge:"Disconnected operations and unpredictable production demand.", opportunity:"Build a more visible, efficient, and scalable operation.", workflows:["Production visibility","Dealer follow-up","Quality reporting"], recommendations:[{title:"Create a live production visibility system",detail:"Give leadership one clear view of capacity, delays, and demand.",tag:"High impact"},{title:"Automate dealer and distributor follow-up",detail:"Improve response consistency across the sales network.",tag:"Quick win"},{title:"Standardize quality reporting",detail:"Turn recurring quality data into actionable improvements.",tag:"Build system"}], activity:["Production workflow reviewed","Dealer follow-up system mapped","Quality reporting milestone approved"] },
  { id:"healthcare", label:"Healthcare", icon:HeartPulse, challenge:"Inconsistent patient journeys and heavy administrative workload.", opportunity:"Create a trusted, organized patient experience that can scale.", workflows:["Patient inquiry response","Appointment coordination","Care follow-up"], recommendations:[{title:"Improve the patient inquiry journey",detail:"Make every inquiry feel clear, reassuring, and responsive.",tag:"High impact"},{title:"Automate appointment reminders",detail:"Reduce missed appointments and manual coordination.",tag:"Quick win"},{title:"Build a consistent care follow-up system",detail:"Strengthen trust after every patient interaction.",tag:"Build system"}], activity:["Patient journey diagnostic completed","Appointment workflow updated","Care follow-up milestone approved"] },
  { id:"education", label:"Education", icon:GraduationCap, challenge:"Complex admissions journeys and inconsistent learner engagement.", opportunity:"Build a visible institution with a clear, scalable learner journey.", workflows:["Admissions nurture","Student onboarding","Learner engagement"], recommendations:[{title:"Simplify the admissions journey",detail:"Help prospective learners move confidently from interest to enrollment.",tag:"High impact"},{title:"Automate admissions follow-up",detail:"Ensure every inquiry receives timely guidance.",tag:"Quick win"},{title:"Create a learner engagement rhythm",detail:"Improve consistency throughout the student experience.",tag:"Build system"}], activity:["Admissions journey reviewed","Learner onboarding system mapped","Engagement milestone approved"] },
  { id:"real-estate", label:"Real Estate", icon:Building2, challenge:"Lead leakage, slow follow-up, and inconsistent project visibility.", opportunity:"Turn every inquiry into a guided, measurable buyer journey.", workflows:["Lead qualification","Site visit coordination","Buyer follow-up"], recommendations:[{title:"Fix lead response and qualification",detail:"Prioritize serious buyers and respond before interest cools.",tag:"High impact"},{title:"Automate site visit coordination",detail:"Make booking and reminders effortless for buyers and teams.",tag:"Quick win"},{title:"Build a project visibility engine",detail:"Keep every active property consistently visible.",tag:"Build momentum"}], activity:["Buyer journey diagnostic completed","Site visit workflow deployed","Project visibility plan approved"] },
  { id:"consultants", label:"Consultants", icon:BriefcaseBusiness, challenge:"Founder-dependent delivery and inconsistent authority building.", opportunity:"Productize expertise into a visible and scalable advisory business.", workflows:["Lead qualification","Proposal follow-up","Knowledge publishing"], recommendations:[{title:"Clarify your signature transformation",detail:"Make the outcome of your expertise easy to understand and buy.",tag:"High impact"},{title:"Automate proposal follow-up",detail:"Keep valuable opportunities moving without manual chasing.",tag:"Quick win"},{title:"Publish a weekly authority insight",detail:"Turn expertise into consistent market visibility.",tag:"Build momentum"}], activity:["Positioning diagnostic completed","Proposal workflow deployed","Authority milestone approved"] },
  { id:"retail", label:"Retail & Ecommerce", icon:ShoppingBag, challenge:"Low repeat purchase rates and fragmented customer data.", opportunity:"Create a visible, personalized, and repeatable growth engine.", workflows:["Customer retention","Campaign planning","Inventory alerts"], recommendations:[{title:"Build a repeat-purchase journey",detail:"Increase customer value after the first transaction.",tag:"High impact"},{title:"Automate customer re-engagement",detail:"Bring valuable customers back at the right moment.",tag:"Quick win"},{title:"Connect campaign and inventory planning",detail:"Focus visibility on products ready to grow.",tag:"Build system"}], activity:["Customer retention diagnostic completed","Re-engagement workflow deployed","Campaign milestone approved"] },
  { id:"startup", label:"Startup", icon:Rocket, challenge:"Unclear positioning and growth systems that are not yet repeatable.", opportunity:"Turn early traction into a focused, scalable growth model.", workflows:["Market learning","Lead qualification","Founder reporting"], recommendations:[{title:"Clarify the strongest growth signal",detail:"Focus the team on the market response that matters most.",tag:"High impact"},{title:"Automate lead learning and qualification",detail:"Capture insight from every sales conversation.",tag:"Quick win"},{title:"Build a weekly founder intelligence brief",detail:"Turn activity into clearer strategic decisions.",tag:"Build system"}], activity:["Market signal diagnostic completed","Lead learning workflow deployed","Founder intelligence milestone approved"] },
];

const indianBusinessQuestions: Record<IndustryId, { title: string; impact: string }[]> = {
  manufacturing: [
    { title:"Are good inquiries getting lost between calls, WhatsApp, and salespeople?",impact:"A shared inquiry view can improve follow-up and reduce owner dependency." },
    { title:"Can quotations be prepared and followed up faster?",impact:"Faster response can help the business compete without reducing price." },
    { title:"Can dealers and existing buyers generate more repeat business?",impact:"A simple follow-up rhythm can strengthen orders beyond new lead generation." },
  ],
  healthcare: [
    { title:"Can nearby patients find and trust the practice easily?",impact:"Better local visibility and reviews can increase relevant patient inquiries." },
    { title:"Are appointment requests, reminders, and follow-ups consistent?",impact:"A simpler patient journey can reduce missed bookings and staff workload." },
    { title:"Are satisfied patients encouraged to return and recommend the practice?",impact:"Thoughtful follow-up can improve retention and reputation." },
  ],
  education: [
    { title:"Are admission inquiries followed up until parents or learners decide?",impact:"A clear follow-up process can reduce lost admissions." },
    { title:"Is the institution’s value easy to understand beyond fees and facilities?",impact:"Clear positioning can build trust before the first counselling call." },
    { title:"Can current students and parents receive more consistent communication?",impact:"Better communication can improve experience, retention, and referrals." },
  ],
  "real-estate": [
    { title:"Are property inquiries being followed up before interest goes cold?",impact:"Shared lead ownership can reduce leakage across portals, calls, and WhatsApp." },
    { title:"Can serious buyers be identified earlier?",impact:"Better qualification helps sales teams focus on higher-intent opportunities." },
    { title:"Can site visits and post-visit follow-up become more consistent?",impact:"A clear buyer journey can improve conversion and sales visibility." },
  ],
  consultants: [
    { title:"Does growth depend too heavily on referrals and the founder’s network?",impact:"A clearer authority position can create demand beyond personal relationships." },
    { title:"Are proposals and promising conversations followed up consistently?",impact:"A simple sales rhythm can prevent valuable opportunities from going quiet." },
    { title:"Can expertise be packaged into a clearer, repeatable offer?",impact:"A defined offer can make the business easier to understand, buy, and scale." },
  ],
  retail: [
    { title:"Are customers returning after their first purchase?",impact:"Simple retention communication can increase repeat business." },
    { title:"Can customer conversations across store, WhatsApp, and online channels be connected?",impact:"A shared customer view can improve service and follow-up." },
    { title:"Are promotions focused on the right customers and available stock?",impact:"Better visibility can reduce wasted offers and improve sales planning." },
  ],
  startup: [
    { title:"Is the team clear about which customer problem is gaining real traction?",impact:"Clearer market learning can reduce scattered effort." },
    { title:"Are sales conversations producing shared learning for the whole team?",impact:"A simple feedback rhythm can improve product and positioning decisions." },
    { title:"Can the founder see the few numbers that truly guide the next decision?",impact:"Focused reporting can improve speed without adding dashboard clutter." },
  ],
};

const navItems = [
  { id: "dashboard", label: "Business Overview", icon: LayoutDashboard },
  { id: "audit", label: "Current State", icon: FileSearch },
  { id: "roadmap", label: "Growth Blueprint", icon: Target },
  { id: "automation", label: "Recommended Systems", icon: Workflow },
  { id: "future", label: "Future Vision", icon: Rocket },
  { id: "clients", label: "Transformation Proposal", icon: BriefcaseBusiness },
] as const;

type ViewId = (typeof navItems)[number]["id"];

const executiveSignals = [
  { label: "Business Foundation", status: "Needs stronger structure before scaling", question: "Is the business set up to grow with confidence?", icon: Gauge, color: "violet" },
  { label: "Visibility", status: "Present, but not consistently winning attention", question: "Can the right customers discover and understand the business?", icon: Globe2, color: "cyan" },
  { label: "Brand Trust", status: "Strong potential, but not fully expressed", question: "Does the market clearly trust what makes this business valuable?", icon: Sparkles, color: "green" },
  { label: "Automation", status: "Useful quick wins are available", question: "Where is manual effort still slowing growth?", icon: Workflow, color: "amber" },
] as const;

const activities = [
  { title: "Website conversion audit completed", meta: "Aura Events · 12 min ago", icon: Globe2, color: "violet" },
  { title: "Lead qualification workflow deployed", meta: "Overwrite Growth · 48 min ago", icon: Workflow, color: "cyan" },
  { title: "Brand strategy milestone approved", meta: "Lumina Hotels · 2h ago", icon: CheckCircle2, color: "green" },
  { title: "Q3 growth roadmap generated", meta: "Nexus Retail · 4h ago", icon: Target, color: "amber" },
] as const;

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="logo-mark"><span /><span /></div>
      <div>
        <div className="text-[15px] font-semibold tracking-[-0.02em]">Overwrite <span className="text-violet-400">OS</span></div>
        <div className="text-[8px] uppercase tracking-[0.28em] text-white/35">Business Intelligence</div>
      </div>
    </div>
  );
}

function Sidebar({ active, setActive, mobile, close, onChangeIndustry }: { active: ViewId; setActive: (id: ViewId) => void; mobile?: boolean; close?: () => void; onChangeIndustry: () => void }) {
  return (
    <aside className={cn("sidebar", mobile && "sidebar-mobile")}>
      <div className="flex h-20 items-center justify-between px-5">
        <Logo />
        {mobile && <Button variant="ghost" size="icon" onClick={close}><X className="size-4" /></Button>}
      </div>
      <div className="px-3 pt-3">
        <div className="nav-label">Client presentation flow</div>
        <nav className="space-y-1">
          {navItems.map((item) => <NavButton key={item.id} item={item} active={active} setActive={setActive} close={close} />)}
        </nav>
        <button onClick={() => { onChangeIndustry(); close?.(); }} className="switch-industry-nav">
          <Settings className="size-[15px]" /><span>Switch Industry</span><ArrowRight className="ml-auto size-3.5" />
        </button>
      </div>
      <div className="mt-auto p-3">
        <div className="system-card">
          <div className="mb-2 flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-2 font-medium"><span className="status-dot" /> System healthy</span>
            <span className="text-white/35">98%</span>
          </div>
          <Progress value={98} className="h-1 bg-white/5 [&>div]:bg-emerald-400" />
          <p className="mt-3 text-[10px] leading-relaxed text-white/35">All intelligence engines operational</p>
        </div>
        <button className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left hover:bg-white/5">
          <Avatar className="size-8 border border-white/10"><AvatarFallback className="bg-gradient-to-br from-violet-500 to-cyan-500 text-[10px] font-semibold">OA</AvatarFallback></Avatar>
          <span className="min-w-0 flex-1"><span className="block text-xs font-medium">Overwrite Admin</span><span className="block truncate text-[9px] text-white/35">Enterprise workspace</span></span>
          <MoreHorizontal className="size-4 text-white/30" />
        </button>
      </div>
    </aside>
  );
}

function NavButton({ item, active, setActive, close }: { item: typeof navItems[number]; active: ViewId; setActive: (id: ViewId) => void; close?: () => void }) {
  const Icon = item.icon;
  return (
    <button onClick={() => { setActive(item.id); close?.(); }} className={cn("nav-item", active === item.id && "nav-item-active")}>
      <Icon className="size-[15px]" /><span>{item.label}</span>{active === item.id && <ChevronRight className="ml-auto size-3.5 opacity-60" />}
    </button>
  );
}

function Header({ active, openMenu }: { active: ViewId; openMenu: () => void }) {
  const label = navItems.find((item) => item.id === active)?.label;
  return (
    <header className="topbar">
      <div className="flex min-w-0 items-center gap-3">
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={openMenu}><Menu className="size-5" /></Button>
        <div className="hidden text-xs text-white/35 sm:block">Overwrite OS <span className="mx-2 text-white/15">/</span> <span className="text-white/75">{label}</span></div>
      </div>
      <button className="command-bar presentation-mode"><Search className="size-3.5" /><span>Presentation flow</span></button>
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="border-violet-400/20 bg-violet-400/5 px-3 py-1 text-[10px] text-violet-200">
          Client Demo
        </Badge>
      </div>
    </header>
  );
}

function PageTitle({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: string }) {
  return (
    <div className="page-title">
      <div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div>
      {action && <Button className="accent-button"><Sparkles className="size-3.5" />{action}</Button>}
    </div>
  );
}

function GlassCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return <section className={cn("glass-card", className)}>{children}</section>;
}

function CardHead({ title, subtitle, icon: Icon, action }: { title: string; subtitle?: string; icon?: Icon; action?: string }) {
  return (
    <div className="card-head">
      <div className="flex items-center gap-2.5">{Icon && <div className="mini-icon"><Icon className="size-3.5" /></div>}<div><h3>{title}</h3>{subtitle && <p>{subtitle}</p>}</div></div>
      {action && <button className="text-[10px] text-violet-300 hover:text-violet-200">{action} <ArrowRight className="ml-1 inline size-3" /></button>}
    </div>
  );
}

function IndustryOnboarding({ onSelect }: { onSelect: (industry: IndustryId) => void }) {
  return (
    <main className="industry-onboarding">
      <div className="onboarding-glow" /><div className="grid-bg" />
      <div className="onboarding-brand"><Logo /><span>Step 1 of 1</span></div>
      <section className="onboarding-content">
        <p className="eyebrow">Personalize your transformation</p>
        <h1>What type of business do you operate?</h1>
        <p>Select your industry so Overwrite OS can identify the right challenges, opportunities, systems, and next actions.</p>
        <div className="industry-grid">
          {industryProfiles.map((industry) => { const Icon = industry.icon; return (
            <button key={industry.id} className="industry-option" onClick={() => onSelect(industry.id)}>
              <div className="industry-icon"><Icon className="size-5" /></div>
              <div><strong>{industry.label}</strong><span>{industry.opportunity}</span></div>
              <ArrowRight className="ml-auto size-4 text-white/20" />
            </button>
          )})}
        </div>
        <p className="onboarding-note">Your selection personalizes the entire platform. You can change it later.</p>
      </section>
    </main>
  );
}

function Dashboard({ industry, onChangeIndustry }: { industry: IndustryProfile; onChangeIndustry: () => void }) {
  const adaptedActivities = activities.map((item, index) => ({ ...item, title: industry.activity[index] ?? item.title }));
  const presentationSummary = [
    { label: "A likely current situation", value: "Strong capability, with opportunities to make growth more consistent." },
    { label: "What may be slowing growth", value: industry.challenge },
    { label: "What we could explore first", value: industry.recommendations[0]?.title ?? "Build a clear business system" },
  ];

  return (
    <>
      <PageTitle eyebrow="Transformation overview" title="A clearer growth story for the business." description="Show the client where the business stands, what is holding growth back, and what the transformation should achieve." action="View transformation report" />
      <GlassCard className="executive-summary">
        <div>
          <div className="flex flex-wrap items-center gap-2"><Badge className="bg-emerald-400/10 text-emerald-300">{industry.label}</Badge><span className="text-[9px] text-white/30">Updated today</span></div>
          <h2>{industry.opportunity}</h2>
          <p>This business already has real value. The next step is removing the few constraints that make growth slower, harder, and less predictable than it should be.</p>
        </div>
        <div className="health-score"><strong>Foundation</strong><span>Current growth stage</span><small>Clear opportunity to become more visible and scalable</small><button onClick={onChangeIndustry} className="change-industry"><Settings className="size-3"/>Switch Industry</button></div>
      </GlassCard>

      <div className="presentation-summary-grid">
        {presentationSummary.map((item) => (
          <GlassCard className="presentation-summary-card" key={item.label}>
            <span>{item.label}</span>
            <p>{item.value}</p>
          </GlassCard>
        ))}
      </div>

      <div className="score-grid client-score-grid">
        {executiveSignals.map((score) => { const Icon = score.icon; return (
          <section className="executive-score" key={score.label}>
            <div className="flex items-start justify-between"><div className={cn("stat-icon", `tone-${score.color}`)}><Icon className="size-4" /></div></div>
            <div className="signal-label">{score.label}</div>
            <h3>{score.status}</h3><p>{score.question}</p>
          </section>
        )})}
      </div>

      <div className="executive-grid">
        <GlassCard className="recommendations-panel"><CardHead title="What we would likely recommend first" subtitle="Directionally right priorities before a full discovery session" icon={TrendingUp} />
          <div className="recommendation-list">
            {industry.recommendations.map((recommendation, index) =>
              <button className="recommendation-row" key={recommendation.title}><span className="recommendation-number">0{index + 1}</span><span className="min-w-0 flex-1"><strong>{recommendation.title}</strong><small>{recommendation.detail}</small></span><Badge variant="outline" className="border-white/10 text-[8px] text-white/40">{recommendation.tag}</Badge><ChevronRight className="size-3.5 text-white/20"/></button>)}
          </div>
        </GlassCard>
        <GlassCard><CardHead title="How we would explain the journey" subtitle="Keep the conversation simple and strategic" icon={Target} />
          <div className="presentation-flow">
            <div>
              <small>Step 1</small>
              <strong>Clarify what is slowing growth</strong>
              <p>Make the current business situation visible in simple business language.</p>
            </div>
            <div>
              <small>Step 2</small>
              <strong>Build the right systems first</strong>
              <p>Fix the foundation before adding visibility, lead generation, and automation layers.</p>
            </div>
            <div>
              <small>Step 3</small>
              <strong>Create a scalable operating model</strong>
              <p>Turn follow-up, reporting, and execution into a more reliable business rhythm.</p>
            </div>
          </div>
        </GlassCard>
      </div>
      <GlassCard className="mt-4"><CardHead title="What this transformation should deliver" subtitle="The outcomes a client should expect to understand and believe" icon={Activity} /><div className="recent-activity client-outcome-grid">{adaptedActivities.map((item) => { const Icon = item.icon; return <div className="activity-row client-outcome-row" key={item.title}><div className={cn("activity-icon",`tone-${item.color}`)}><Icon className="size-3.5" /></div><div><p>{item.title}</p><span>{["Better visibility into operations","More reliable follow-up and ownership","Stronger internal consistency","A clearer growth direction"][adaptedActivities.indexOf(item)]}</span></div></div> })}</div></GlassCard>
    </> 
  );
}

function Audit({ industry }: { industry: IndustryProfile }) {
  const template = transformationTemplates[industry.id];
  const discoveryQuestions = indianBusinessQuestions[industry.id];
  const categories = [
    { name:"Market Trust", status:"How clearly the market understands and trusts the business", tone:"positive", icon:Sparkles, strength:"Customers already value the quality and relationships the business provides.", weakness:"The strongest business value may not be communicated consistently beyond existing relationships.", improvement:"Clarify one strong reason customers should choose and remember the business." },
    { name:"New Customer Reach", status:"How the business reaches buyers beyond referrals", tone:"opportunity", icon:Globe2, strength:"Referrals and existing relationships continue to create valuable opportunities.", weakness:"New customer discovery may still depend heavily on word-of-mouth, local networks, and offline activity.", improvement:"Build a practical visibility rhythm for the places ideal customers already use." },
    { name:"Inquiry Follow-up", status:"How calls, WhatsApp inquiries, and proposals are managed", tone:"attention", icon:TrendingUp, strength:"The team understands customers and knows how to handle valuable conversations.", weakness:"Inquiries and follow-ups may be spread across WhatsApp, calls, Excel, and individual memory.", improvement:"Create one simple shared view of every inquiry, owner, and next action." },
    { name:"Team Execution", status:"How reliably work moves without constant owner involvement", tone:"opportunity", icon:BriefcaseBusiness, strength:"Experienced people know how to deliver good work.", weakness:"Important decisions, approvals, and handoffs may wait for the owner or a few key people.", improvement:"Make responsibilities, handoffs, and weekly priorities visible to the team." },
    { name:"Routine Work", status:"Where manual work consumes avoidable time", tone:"attention", icon:Workflow, strength:"The business already uses familiar tools and can adopt improvements gradually.", weakness:"Repeated reminders, reporting, quotation follow-up, and coordination may consume valuable time.", improvement:"Automate only the most repetitive and high-impact work first." },
    { name:"Customer Continuity", status:"How the business encourages repeat business and referrals", tone:"positive", icon:Users, strength:"Personal relationships create trust and customer loyalty.", weakness:"Follow-up after delivery, purchase, or service may not happen consistently.", improvement:"Create a simple post-sale rhythm that supports retention, referrals, and collections." },
  ];
  return <><PageTitle eyebrow="A guided business conversation" title="Where could growth become easier?" description={`Use these discussion areas to understand the ${industry.label.toLowerCase()} business before recommending any solution.`} />
    <div className="discussion-flow">
      <div><span>01</span><strong>Understand</strong><p>Listen to how the business works today.</p></div>
      <div><span>02</span><strong>Identify</strong><p>Find where time, leads, or money are being lost.</p></div>
      <div><span>03</span><strong>Prioritize</strong><p>Choose one high-impact place to begin.</p></div>
      <div><span>04</span><strong>Plan</strong><p>Agree on a practical first improvement.</p></div>
    </div>
    <GlassCard className="assessment-summary">
      <div><Badge className="bg-violet-400/10 text-violet-300">Starting perspective</Badge><h2>You already have a capable business. <span>Our role is to help growth become easier.</span></h2><p>{template?.currentState ?? "The business has strong customer value. The opportunity is to make visibility, lead management, and daily execution more consistent."}</p></div>
      <div className="assessment-priorities"><div><small>A useful question to explore</small><strong>Where is valuable time or opportunity being lost?</strong><span>We listen first, then identify the highest-impact place to begin.</span></div><div><small>A possible first opportunity</small><strong>{template?.opportunities[0]?.title ?? "Digital Visibility"}</strong><span>{template?.opportunities[0]?.impact ?? industry.opportunity}</span></div></div>
    </GlassCard>
    <div className="section-intro"><p className="eyebrow">Discovery questions</p><h2>Start with the questions that matter most.</h2><span>These are conversation starters based on common Indian mid-sized business patterns, not conclusions about the client.</span></div>
    <GlassCard className="opportunities-panel simple-opportunities"><div className="opportunity-list">{discoveryQuestions.map((question,index)=><div key={question.title}><span>0{index+1}</span><div><strong>{question.title}</strong><p>{question.impact}</p></div></div>)}</div></GlassCard>
    <div className="section-intro"><p className="eyebrow">Discussion areas</p><h2>Explore the business through six practical areas.</h2><span>Use only the areas relevant to the client conversation. There is no need to explain every section.</span></div>
    <div className="assessment-story-list">{categories.map((category,index)=>{const Icon=category.icon;return <GlassCard className="assessment-story" key={category.name}>
      <div className="assessment-story-title"><span>{String(index+1).padStart(2,"0")}</span><div className={cn("stat-icon",category.tone==="positive"?"tone-green":category.tone==="attention"?"tone-amber":"tone-violet")}><Icon className="size-4"/></div><div><h3>{category.name}</h3><p>{category.status}</p></div></div>
      <div className="assessment-story-content">
        <div><small>Question for the client</small><p>Does this feel familiar? {category.weakness}</p></div>
        <div className="assessment-story-change"><small>Opportunity we could explore</small><strong>{category.improvement}</strong></div>
        <div className="assessment-story-gain"><small>Why it may matter</small><p>{category.strength}</p></div>
      </div>
    </GlassCard>})}</div>
    <GlassCard className="discussion-next"><div><p className="eyebrow">Recommended next step</p><h3>Choose one business constraint for a focused discovery session.</h3><span>After understanding the real process and data, we can recommend a practical first improvement with clear outcomes.</span></div><Button className="accent-button">Begin discovery <ArrowRight className="size-3.5"/></Button></GlassCard>
  </>;
}

function Roadmap({ industry }: { industry: IndustryProfile }) {
  const fallbackStages = [
    { title:"Current State", status:"Today", situation:"A credible business with strong customer value, but growth depends heavily on people and manual effort.", outcome:"A shared understanding of what is working, what is slowing growth, and what matters next.", systems:["Current State Assessment","Growth constraint map"], impact:"Clear priorities and confident decision-making." },
    { title:"Foundation", status:"In progress", situation:"Positioning, processes, and business information are not yet fully consistent.", outcome:"A professional, trusted business with a clear promise and reliable foundations.", systems:["Positioning system","Core process standards","Business measurement baseline"], impact:"Stronger trust, clearer execution, and less confusion." },
    { title:"Visibility", status:"Next", situation:"The right customers do not discover the business often enough.", outcome:"A visible business that consistently earns attention and authority.", systems:["Visibility strategy","Authority content rhythm","Digital presence system"], impact:"More qualified awareness and stronger market credibility." },
    { title:"Lead Generation", status:"Planned", situation:"Interest arrives inconsistently and opportunities can be lost through slow follow-up.", outcome:"A predictable flow of qualified opportunities with a clear path to conversation.", systems:["Lead capture journey","Qualification process","Follow-up system"], impact:"More conversations, better-quality leads, and improved conversion." },
    { title:"Operations", status:"Planned", situation:"Delivery relies on individual knowledge, memory, and repeated coordination.", outcome:"An organized business with repeatable delivery and clear ownership.", systems:["Operating playbooks","Handoff workflows","Performance reporting"], impact:"Consistent quality, faster delivery, and reduced owner dependency." },
    { title:"Automation", status:"Future", situation:"Repetitive tasks consume time and delay important customer or team actions.", outcome:"An efficient business where routine work happens reliably without manual chasing.", systems:["Automated follow-up","Workflow orchestration","Executive reporting"], impact:"More capacity, faster response, and lower operational effort." },
    { title:"Scale Ready", status:"Destination", situation:"Growth is constrained by founder involvement and systems that cannot handle greater demand.", outcome:"A scalable, future-ready business designed to grow without losing quality.", systems:["Scalable growth engine","Leadership intelligence","Continuous improvement system"], impact:"Predictable growth, stronger margins, and strategic freedom." },
  ];
  const template = transformationTemplates[industry.id];
  const stages = template ? template.blueprint.map((stage,index)=>({title:stage.stage,status:index===0?"Today":index===1?"In progress":index===2?"Next":"Planned",situation:stage.situation,outcome:stage.outcome,systems:stage.systems,impact:stage.impact})) : fallbackStages;
  return <><PageTitle eyebrow="See the transformation journey" title={`${industry.label} Growth Blueprint`} description="A simple conversation showing what could change and what the business could gain." />
    <GlassCard className="blueprint-overview"><div><Badge className="bg-violet-400/10 text-violet-300">Suggested journey</Badge><h2>Improve the business in the right order.</h2><p>This is a starting direction. The exact priorities are confirmed after understanding the client’s real business situation.</p></div></GlassCard>
    <div className="blueprint-roadmap">{stages.map((stage,index)=><article className={cn("blueprint-stage",index===1&&"blueprint-stage-active")} key={stage.title}>
      <div className="blueprint-marker"><span>{String(index+1).padStart(2,"0")}</span></div>
      <GlassCard className="blueprint-card">
        <div className="blueprint-card-title"><div><p>Step {String(index+1).padStart(2,"0")}</p><h3>{stage.title}</h3></div></div>
        <div className="blueprint-story">
          <div className="blueprint-story-main">
            <small>What is happening now</small>
            <p>{stage.situation}</p>
            <span><ArrowRight className="size-3.5"/> What changes</span>
            <strong>{stage.outcome}</strong>
          </div>
          <div className="blueprint-story-result">
            <small>What the business gains</small>
            <p>{stage.impact}</p>
            <div>{stage.systems.map(system=><span key={system}><CheckCircle2 className="size-3"/>{system}</span>)}</div>
          </div>
        </div>
      </GlassCard>
    </article>)}</div>
  </>;
}

function Automation({ industry }: { industry: IndustryProfile }) {
  const defaultSystems = [
    { name:"Brand Foundation System", icon:Sparkles, stage:"Foundation", problem:"Customers receive inconsistent messages and struggle to understand why the business is different.", impact:"Creates a clear, trusted business identity that supports every future growth activity.", benefits:["Clear market positioning","Consistent customer trust","Faster business decisions"], complexity:"Focused", timeline:"2–3 weeks" },
    { name:"Digital Presence System", icon:Globe2, stage:"Visibility", problem:"The right customers do not discover or understand the business often enough.", impact:"Builds consistent visibility and authority across the places customers research and decide.", benefits:["More qualified discovery","Stronger market credibility","Consistent brand presence"], complexity:"Moderate", timeline:"4–6 weeks" },
    { name:"Lead Capture System", icon:TrendingUp, stage:"Lead Generation", problem:"Valuable inquiries are lost because capture, qualification, and follow-up are inconsistent.", impact:"Turns customer interest into a clear, measurable path toward qualified conversations.", benefits:["Fewer missed opportunities","Faster lead response","Better lead quality"], complexity:"Moderate", timeline:"3–5 weeks" },
    { name:"Customer Management System", icon:Users, stage:"Operations", problem:"Customer information, follow-up, and ownership are spread across people and tools.", impact:"Creates one organized customer journey from first conversation through ongoing relationship.", benefits:["Consistent customer experience","Clear team ownership","Improved retention"], complexity:"Moderate", timeline:"4–6 weeks" },
    { name:"Business Automation System", icon:Workflow, stage:"Automation", problem:"Repetitive coordination and follow-up consume time and slow important actions.", impact:"Ensures routine work happens reliably while people focus on higher-value decisions.", benefits:["More team capacity","Faster response times","Reduced manual effort"], complexity:"Advanced", timeline:"6–8 weeks" },
    { name:"Executive Intelligence System", icon:Gauge, stage:"Scale Ready", problem:"Leadership decisions depend on fragmented updates and incomplete business visibility.", impact:"Gives owners a clear, recurring view of performance, constraints, and opportunities.", benefits:["Confident decisions","Earlier problem detection","Clear strategic priorities"], complexity:"Advanced", timeline:"5–7 weeks" },
  ];
  const template = transformationTemplates[industry.id];
  const icons = [Sparkles,Globe2,TrendingUp,Users,Workflow,Gauge];
  const systems = template ? template.systems.map((system,index)=>({...system,icon:icons[index]??Workflow,stage:["Foundation","Visibility","Lead Generation","Operations","Automation","Scale Ready"][index]??"Growth"})) : defaultSystems;
  const firstPriority = systems[0];
  const FirstIcon = firstPriority.icon;
  const remainingPriorities = systems.slice(1);
  return <><PageTitle eyebrow="Recommended direction" title={`What should ${industry.label} improve first?`} description="A focused recommendation based on the likely business constraint. The exact starting point is confirmed after discovery." />
    <GlassCard className="priority-hero">
      <div className="priority-hero-main"><Badge className="bg-violet-400/10 text-violet-300">Suggested first priority</Badge><div className="priority-title"><div className="stat-icon tone-violet"><FirstIcon className="size-4"/></div><div><p>{firstPriority.stage}</p><h2>{firstPriority.name}</h2></div></div><p>{firstPriority.problem}</p></div>
      <div className="priority-result"><small>What this could improve</small><strong>{firstPriority.impact}</strong><div>{firstPriority.benefits.map(benefit=><span key={benefit}><CheckCircle2 className="size-3"/>{benefit}</span>)}</div></div>
    </GlassCard>
    <div className="section-intro"><p className="eyebrow">Why start here</p><h2>One improvement should prove value before adding more.</h2><span>For an Indian mid-sized business, adoption is easier when the first change solves a visible daily problem and works with the team’s existing habits.</span></div>
    <div className="priority-reasons"><GlassCard><span>01</span><strong>Easy to understand</strong><p>The owner and team can clearly see the business problem being solved.</p></GlassCard><GlassCard><span>02</span><strong>Useful in daily work</strong><p>The improvement supports real calls, WhatsApp conversations, follow-ups, or reporting.</p></GlassCard><GlassCard><span>03</span><strong>Creates visible progress</strong><p>The business can see the result before investing in the next system.</p></GlassCard></div>
    <div className="section-intro"><p className="eyebrow">What could come next</p><h2>Build the remaining improvements only when needed.</h2><span>These are possible next priorities, not a package the client must buy together.</span></div>
    <div className="next-priority-list">{remainingPriorities.map((system,index)=>{const Icon=system.icon;return <GlassCard className="next-priority" key={system.name}>
      <div className="next-priority-head"><span>Next {String(index+1).padStart(2,"0")}</span><div className="stat-icon tone-violet"><Icon className="size-4"/></div><div><small>{system.stage}</small><h3>{system.name}</h3></div></div>
      <p>{system.problem}</p><strong>{system.impact}</strong>
    </GlassCard>})}</div>
    <GlassCard className="discussion-next"><div><p className="eyebrow">Before implementation</p><h3>Confirm the priority through a focused discovery session.</h3><span>We review the current process, team habits, tools, and available data before finalizing the recommendation.</span></div><Button className="accent-button">Discuss first priority <ArrowRight className="size-3.5"/></Button></GlassCard>
  </>;
  /*
  return <><PageTitle eyebrow="What needs to be put in place" title={`${industry.label} Recommended Systems`} description="A simple view of the practical improvements that can make the business easier to find, manage, and grow." action="Review priorities" />
    <GlassCard className="systems-summary"><div><Badge className="bg-violet-400/10 text-violet-300">Recommended improvements</Badge><h2>Build only what the business needs next.</h2><p>Start with the biggest growth constraint, prove the improvement, and then move to the next priority.</p></div><div className="systems-summary-meta"><div><small>Start with</small><strong>The biggest constraint</strong></div><div><small>Then build</small><strong>The next opportunity</strong></div></div></GlassCard>
    <div className="systems-grid">{systems.map((system,index)=>{const Icon=system.icon;return <GlassCard className="recommended-system" key={system.name}>
      <div className="system-card-title"><div className="flex items-start gap-11"><div className="stat-icon tone-violet"><Icon className="size-4"/></div><div><p>System {String(index+1).padStart(2,"0")} · {system.stage}</p><h3>{system.name}</h3></div></div><Badge variant="outline" className="border-white/10 text-[8px] text-white/40">{system.complexity}</Badge></div>
      <div className="system-outcome"><small>Why this matters</small><p>{system.problem}</p></div>
      <div className="system-outcome impact"><small>What changes for the business</small><p>{system.impact}</p></div>
      <div className="system-benefits"><small>What the client gains</small><div>{system.benefits.map(benefit=><span key={benefit}><CheckCircle2 className="size-3"/>{benefit}</span>)}</div></div>
    </GlassCard>})}</div>
  </>;
  */
}

function Clients({ industry }: { industry: IndustryProfile }) {
  const template = transformationTemplates[industry.id];
  const systems = template?.systems ?? industry.recommendations.map(item=>({name:item.title,problem:item.detail,impact:item.detail,benefits:[item.tag],complexity:"Focused",timeline:"3–5 weeks"}));
  const firstSystem = systems[0];
  const questions = indianBusinessQuestions[industry.id].slice(0,3);
  return <><PageTitle eyebrow="Decision summary" title={`A practical next step for ${industry.label}`} description="A simple conversation summary. Final recommendations come only after understanding the business properly." />
    <GlassCard className="proposal-hero"><div><Badge className="bg-violet-400/10 text-violet-300">Starting perspective</Badge><h2>Improve one important part of the business first.</h2><p>{template?.currentState ?? industry.challenge}</p></div><div className="proposal-status"><small>Suggested first area</small><strong>{firstSystem?.name ?? "Business Foundation System"}</strong><span>This is a discussion starting point, not a fixed recommendation.</span></div></GlassCard>
    <div className="proposal-grid"><GlassCard><CardHead title="What we should confirm" subtitle="Questions to answer before recommending anything" icon={FileSearch}/><div className="proposal-list">{questions.map((item,index)=><div key={item.title}><span>0{index+1}</span><div><strong>{item.title}</strong><p>{item.impact}</p></div></div>)}</div></GlassCard><GlassCard><CardHead title="What the client receives" subtitle="Clarity before commitment" icon={Target}/><div className="proposal-outcomes">{["A clear view of the current process","The highest-impact constraint identified","One practical first improvement","Expected business outcomes","A phased scope and investment estimate"].map(item=><span key={item}><CheckCircle2 className="size-3.5"/>{item}</span>)}</div></GlassCard></div>
    <GlassCard className="proposal-focus"><div><p className="eyebrow">Possible first improvement</p><h3>{firstSystem?.name ?? "Business Foundation System"}</h3><p>{firstSystem?.impact ?? industry.opportunity}</p></div><div><small>What this could improve</small><div className="proposal-focus-gains">{(firstSystem?.benefits ?? ["Clearer ownership","Fewer missed opportunities","Better follow-up"]).map(item=><span key={item}><CheckCircle2 className="size-3.5"/>{item}</span>)}</div></div></GlassCard>
    <div className="proposal-grid mt-4"><GlassCard><CardHead title="How we begin" subtitle="A low-risk first conversation" icon={Workflow}/><div className="proposal-timeline">{[["Listen","Understand how work happens today"],["Confirm","Agree on the most important constraint"],["Plan","Define one useful improvement"],["Decide","Proceed only when the value is clear"]].map(([phase,detail],index)=><div key={phase}><span>{index+1}</span><div><strong>{phase}</strong><p>{detail}</p></div></div>)}</div></GlassCard><GlassCard><CardHead title="What we will not do" subtitle="A practical, responsible approach" icon={ShieldCheck}/><div className="proposal-outcomes">{["Recommend tools before understanding the process","Force a large transformation package","Disrupt working business routines unnecessarily","Promise unsupported returns or timelines"].map(item=><span key={item}><CheckCircle2 className="size-3.5"/>{item}</span>)}</div></GlassCard></div>
    <GlassCard className="proposal-next"><div><p className="eyebrow">Recommended next step</p><h3>Begin with a focused business discovery session.</h3><span>We will understand the current process, identify the strongest opportunity, and agree on one practical place to begin.</span></div><Button className="accent-button">Start discovery <ArrowRight className="size-3.5"/></Button></GlassCard>
  </>;
  /*
  return <><PageTitle eyebrow="The conversation summary" title={`${industry.label} Transformation Proposal`} description="A simple summary of where the business is today, what should change first, and what the client can gain." action="Present proposal" />
    <GlassCard className="proposal-hero"><div><Badge className="bg-violet-400/10 text-violet-300">Recommended direction</Badge><h2>Build a more visible, organized, and scalable {industry.label.toLowerCase()} business.</h2><p>{template?.futureState ?? industry.opportunity}</p></div><div className="proposal-status"><small>Where we begin</small><strong>{systems[0]?.name ?? "Business Foundation System"}</strong><span>Start with one important problem, then build from there.</span></div></GlassCard>
    <div className="proposal-grid"><GlassCard><CardHead title="A possible current situation" subtitle="A starting perspective before detailed discovery" icon={FileSearch}/><div className="proposal-copy"><p>{template?.currentState ?? industry.challenge}</p><div><small>Likely growth constraint</small><strong>{template?.constraint ?? industry.challenge}</strong></div></div></GlassCard><GlassCard><CardHead title="Where opportunity may exist" subtitle="Areas worth exploring with the client" icon={TrendingUp}/><div className="proposal-list">{opportunities.slice(0,3).map((item,index)=><div key={item.title}><span>0{index+1}</span><div><strong>{item.title}</strong><p>{item.impact}</p></div></div>)}</div></GlassCard></div>
    <GlassCard className="mt-4"><CardHead title="What we recommend doing" subtitle="A phased journey based on business priority" icon={Workflow}/><div className="proposal-systems">{systems.slice(0,4).map((system,index)=><div key={system.name}><span>Step {index+1}</span><strong>{system.name}</strong><p>{system.impact}</p></div>)}</div></GlassCard>
    <div className="proposal-grid mt-4"><GlassCard><CardHead title="Expected business outcomes" subtitle="How progress should be measured" icon={Target}/><div className="proposal-outcomes">{["Stronger visibility among ideal customers","More consistent lead capture and follow-up","Faster, more reliable execution","Improved customer experience","Less owner dependency","Greater readiness to scale"].map(item=><span key={item}><CheckCircle2 className="size-3.5"/>{item}</span>)}</div></GlassCard><GlassCard><CardHead title="Transformation timeline" subtitle="A phased, manageable journey" icon={CalendarDays}/><div className="proposal-timeline">{[["Assessment","Understand the current state"],["Foundation","Fix the highest-impact constraint"],["Implementation","Introduce priority systems"],["Optimization","Improve performance and adoption"],["Scale","Expand proven systems"]].map(([phase,detail],index)=><div key={phase}><span>{index+1}</span><div><strong>{phase}</strong><p>{detail}</p></div></div>)}</div></GlassCard></div>
    <GlassCard className="mt-4"><CardHead title="Investment options" subtitle="Begin at the level that fits the business" icon={CircleDollarSign}/><div className="investment-options">{[["Focused Start","₹20k–50k","Solve one immediate bottleneck."],["Transformation Foundation","₹50k–2L","Build the foundation and connected growth systems."],["Growth Transformation","₹2L+","Implement a multi-stage transformation journey."],["Enterprise","Custom","Design systems for complex teams and scale."]].map(([name,value,detail],index)=><div className={cn(index===1&&"recommended-investment")} key={name}>{index===1&&<Badge className="bg-violet-400/10 text-violet-300">Recommended</Badge>}<strong>{name}</strong><b>{value}</b><p>{detail}</p></div>)}</div></GlassCard>
    <GlassCard className="proposal-next"><div><p className="eyebrow">Recommended next step</p><h3>Begin with a discovery session and current-state assessment.</h3><span>This confirms the business priorities before any systems are recommended or implemented.</span></div><Button className="accent-button">Start assessment <ArrowRight className="size-3.5"/></Button></GlassCard>
  </>;
  */
}

function FutureVision({ industry }: { industry: IndustryProfile }) {
  const template = transformationTemplates[industry.id];
  const futureState = template?.futureState ?? `A visible, organized, automated, and scalable ${industry.label.toLowerCase()} business.`;
  const moments = [
    { time:"Today", title:"Understand what is making growth harder", icon:Activity, description:template?.currentState ?? industry.challenge, focus:"Listen before changing", outcomes:["See how work happens today","Identify repeated delays and missed opportunities","Agree on the most important priority"] },
    { time:"First improvement", title:"Make one important process work better", icon:Target, description:"Start with a practical improvement the team can understand, use, and experience in daily work.", focus:"Prove practical value", outcomes:["Less confusion in one key process","More consistent follow-up and ownership","A visible result the team can trust"] },
    { time:"After it works", title:"Build on improvements that prove useful", icon:Rocket, description:futureState, focus:"Grow with greater control", outcomes:["Expand what is already working","Reduce avoidable owner dependency","Create capacity for the next stage of growth"] },
  ];
  return <><PageTitle eyebrow="A realistic future direction" title={`What could become easier for ${industry.label}?`} description="A practical vision built through gradual improvement, team adoption, and visible business value." />
    <GlassCard className="vision-hero"><div><Badge className="bg-violet-400/10 text-violet-300">Possible future state</Badge><h2>{futureState}</h2><p>This is a direction to explore with the client, not a promise or fixed timeline.</p></div><div className="vision-orb"><Rocket className="size-6"/><span>Future<br/>direction</span></div></GlassCard>
    <div className="vision-timeline">{moments.map((moment,index)=>{const Icon=moment.icon;return <article className={cn("vision-moment",index===0&&"vision-moment-current")} key={moment.time}>
      <div className="vision-time"><span>{moment.time}</span></div>
      <GlassCard className="vision-card"><div className="vision-card-head"><div className="stat-icon tone-violet"><Icon className="size-4"/></div><div><p>{moment.focus}</p><h3>{moment.title}</h3></div></div><p className="vision-description">{moment.description}</p><div className="vision-outcomes">{moment.outcomes.map(outcome=><span key={outcome}><CheckCircle2 className="size-3"/>{outcome}</span>)}</div></GlassCard>
    </article>})}</div>
    <GlassCard className="vision-confidence"><Sparkles className="size-5"/><div><h3>Build progress the team can sustain.</h3><p>Start small, prove the value, and expand only when the improvement is useful to the business.</p></div></GlassCard>
  </>;
}

export function OverwriteOS() {
  const [active,setActive]=useState<ViewId>("dashboard");
  const [menu,setMenu]=useState(false);
  const [industryId,setIndustryId]=useState<IndustryId | null>(null);
  const [ready,setReady]=useState(false);
  const industry = industryProfiles.find((profile) => profile.id === industryId);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIndustryId(window.localStorage.getItem("overwrite-industry") as IndustryId | null);
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  function selectIndustry(selection: IndustryId) {
    window.localStorage.setItem("overwrite-industry", selection);
    setIndustryId(selection);
  }

  if (!ready) return <main className="industry-onboarding"><div className="onboarding-glow" /><div className="grid-bg" /></main>;
  if (!industry) return <IndustryOnboarding onSelect={selectIndustry} />;

  return (
    <div className="app-shell dark">
      <div className="ambient a1"/><div className="ambient a2"/><div className="grid-bg"/>
      <div className="hidden lg:flex"><Sidebar active={active} setActive={setActive} onChangeIndustry={()=>{window.localStorage.removeItem("overwrite-industry");setIndustryId(null)}}/></div>
      {menu && <div className="mobile-overlay"><button className="absolute inset-0 bg-black/60" onClick={()=>setMenu(false)}/><Sidebar mobile active={active} setActive={setActive} close={()=>setMenu(false)} onChangeIndustry={()=>{window.localStorage.removeItem("overwrite-industry");setIndustryId(null)}}/></div>}
      <div className="main-shell"><Header active={active} openMenu={()=>setMenu(true)}/><main className="content">{active==="dashboard"&&<Dashboard industry={industry} onChangeIndustry={()=>{window.localStorage.removeItem("overwrite-industry");setIndustryId(null)}}/>} {active==="audit"&&<Audit industry={industry}/>} {active==="roadmap"&&<Roadmap industry={industry}/>} {active==="automation"&&<Automation industry={industry}/>} {active==="future"&&<FutureVision industry={industry}/>} {active==="clients"&&<Clients industry={industry}/>}</main></div>
    </div>
  );
}
