"use client";

import { useState, type ComponentType } from "react";
import {
  Activity, ArrowRight, Bell, Bot, BriefcaseBusiness,
  CalendarDays, CheckCircle2, ChevronRight, CircleDollarSign,
  Command, FileSearch, Gauge, Globe2, LayoutDashboard, Menu,
  MoreHorizontal, Plus, Search, Send,
  Settings, Sparkles, Target, TrendingUp, Users, Workflow, X,
  Factory, HeartPulse, GraduationCap, Building2, ShoppingBag, Rocket,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    currentState:"A trusted healthcare practice providing valuable care, but growth is limited by poor local visibility, appointment management issues, weak patient retention, and inconsistent review management.",
    futureState:"A visible and trusted healthcare practice with an organized patient journey, reliable appointments, stronger retention, and an active reputation.",
    constraint:"Patient journey management",
    opportunities:[{title:"Improve local discovery",impact:"Help more nearby patients find and trust the practice."},{title:"Create a reliable appointment journey",impact:"Reduce missed appointments and administrative friction."},{title:"Strengthen patient trust after care",impact:"Improve retention, reviews, and long-term relationships."}],
    blueprint:[
      {stage:"Current State",situation:"Strong care quality, but visibility and patient coordination are inconsistent.",outcome:"A clear view of patient journey gaps and growth opportunities.",systems:["Practice assessment","Patient journey map"],impact:"Clear priorities for sustainable practice growth."},
      {stage:"Foundation",situation:"The practice experience and value are not communicated consistently.",outcome:"A professional, reassuring, and trusted healthcare brand.",systems:["Practice brand foundation","Patient communication standards"],impact:"Greater patient confidence."},
      {stage:"Visibility",situation:"Local patients struggle to discover and evaluate the practice.",outcome:"Strong local visibility and an active, trusted reputation.",systems:["Local visibility","Review management"],impact:"More relevant patient inquiries."},
      {stage:"Lead Generation",situation:"Patient inquiries and appointment requests are inconsistently managed.",outcome:"A clear journey from inquiry to confirmed appointment.",systems:["Patient inquiry capture","Appointment coordination"],impact:"More bookings and fewer lost inquiries."},
      {stage:"Operations",situation:"Appointment and follow-up processes create administrative pressure.",outcome:"An organized and consistent patient experience.",systems:["Appointment management","Patient follow-up"],impact:"Fewer missed appointments and better retention."},
      {stage:"Automation",situation:"Reminders, reviews, and follow-ups require repeated manual effort.",outcome:"Routine patient communication happens reliably.",systems:["Reminder automation","Review request automation"],impact:"Lower workload and stronger engagement."},
      {stage:"Scale Ready",situation:"Practice growth increases coordination complexity.",outcome:"A measurable patient experience ready for additional capacity.",systems:["Practice intelligence","Retention system"],impact:"Sustainable growth without compromising care."},
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

const navItems = [
  { id: "dashboard", label: "Transformation Overview", icon: LayoutDashboard },
  { id: "audit", label: "Business Diagnostic", icon: FileSearch },
  { id: "roadmap", label: "Transformation Plan", icon: Target },
  { id: "automation", label: "Business Systems", icon: Workflow },
  { id: "future", label: "Future Vision", icon: Rocket },
  { id: "clients", label: "Transformation Proposal", icon: BriefcaseBusiness },
  { id: "ai", label: "Growth Advisor", icon: Bot },
] as const;

type ViewId = (typeof navItems)[number]["id"];

const executiveScores = [
  { label: "Business Health", question: "Is the business ready to grow?", value: 78, change: "+4 this month", icon: Gauge, color: "violet" },
  { label: "Visibility", question: "Can the right customers find us?", value: 72, change: "+8 this month", icon: Globe2, color: "cyan" },
  { label: "Brand", question: "Do customers trust and remember us?", value: 86, change: "+3 this month", icon: Sparkles, color: "green" },
  { label: "Automation", question: "How efficiently does the business run?", value: 64, change: "+12 this month", icon: Workflow, color: "amber" },
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
        <div className="nav-label">Transformation journey</div>
        <nav className="space-y-1">
          {navItems.slice(0, 5).map((item) => <NavButton key={item.id} item={item} active={active} setActive={setActive} close={close} />)}
        </nav>
        <div className="nav-label mt-7">Guidance</div>
        <nav className="space-y-1">
          {navItems.slice(5).map((item) => <NavButton key={item.id} item={item} active={active} setActive={setActive} close={close} />)}
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
      <button className="command-bar"><Search className="size-3.5" /><span>Search system...</span><kbd><Command className="size-2.5" /> K</kbd></button>
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="relative size-9 text-white/45 hover:text-white"><Bell className="size-4" /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-violet-400 ring-2 ring-[#0b0b12]" /></Button>
        <Button variant="ghost" size="icon" className="size-9 text-white/45 hover:text-white"><Settings className="size-4" /></Button>
        <Button className="ml-2 hidden h-8 rounded-lg bg-white px-3 text-[11px] text-black hover:bg-white/85 sm:flex"><Plus className="size-3.5" /> New project</Button>
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
  return (
    <>
      <PageTitle eyebrow="Transformation overview" title="Your business is becoming stronger." description="See where you are today, what is slowing growth, and what to do next." action="View transformation report" />
      <GlassCard className="executive-summary">
        <div>
          <div className="flex flex-wrap items-center gap-2"><Badge className="bg-emerald-400/10 text-emerald-300">{industry.label}</Badge><span className="text-[9px] text-white/30">Updated today</span></div>
          <h2>{industry.opportunity}</h2>
          <p><strong className="font-medium text-white/60">Primary growth constraint:</strong> {industry.challenge}</p>
        </div>
        <div className="health-score"><strong>78</strong><span>Business Health</span><small>+4 this month</small><button onClick={onChangeIndustry} className="change-industry"><Settings className="size-3"/>Switch Industry</button></div>
      </GlassCard>

      <div className="score-grid">
        {executiveScores.map((score) => { const Icon = score.icon; return (
          <section className="executive-score" key={score.label}>
            <div className="flex items-start justify-between"><div className={cn("stat-icon", `tone-${score.color}`)}><Icon className="size-4" /></div><span className="score-change">{score.change}</span></div>
            <div className="score-value">{score.value}<span>/100</span></div>
            <h3>{score.label} Score</h3><p>{score.question}</p>
            <Progress value={score.value} className="mt-4 h-1 bg-white/5 [&>div]:bg-violet-400" />
          </section>
        )})}
      </div>

      <div className="executive-grid">
        <GlassCard className="recommendations-panel"><CardHead title="Recommended transformation actions" subtitle="Prioritized by business outcome" icon={TrendingUp} action="View all" />
          <div className="recommendation-list">
            {industry.recommendations.map((recommendation, index) =>
              <button className="recommendation-row" key={recommendation.title}><span className="recommendation-number">0{index + 1}</span><span className="min-w-0 flex-1"><strong>{recommendation.title}</strong><small>{recommendation.detail}</small></span><Badge variant="outline" className="border-white/10 text-[8px] text-white/40">{recommendation.tag}</Badge><ChevronRight className="size-3.5 text-white/20"/></button>)}
          </div>
        </GlassCard>
        <GlassCard><CardHead title="Growth roadmap" subtitle="Current quarter progress" icon={Target} action="Open roadmap" />
          <div className="roadmap-summary"><div className="roadmap-percent"><strong>64%</strong><span>complete</span></div><div className="flex-1"><div className="mb-2 flex justify-between text-[10px]"><span>Foundation phase</span><span className="text-white/35">4 of 6 complete</span></div><Progress value={64} className="h-1.5 bg-white/5 [&>div]:bg-violet-400"/></div></div>
          <div className="milestone-list">{industry.workflows.map((name,index)=><div key={name}><span><CheckCircle2 className="size-3.5"/>{name}</span><small>{["In progress","Ready to start","Next phase"][index]}</small></div>)}</div>
        </GlassCard>
      </div>
      <GlassCard className="mt-4"><CardHead title="Recent activity" subtitle="Important changes across the business" icon={Activity} action="View history" /><div className="recent-activity">{adaptedActivities.map((item) => { const Icon = item.icon; return <div className="activity-row" key={item.title}><div className={cn("activity-icon",`tone-${item.color}`)}><Icon className="size-3.5" /></div><div><p>{item.title}</p><span>{item.meta}</span></div></div> })}</div></GlassCard>
    </> 
  );
}

function Audit({ industry }: { industry: IndustryProfile }) {
  const template = transformationTemplates[industry.id];
  const categories = [
    { name:"Brand Positioning", status:"Clear but not consistently communicated", tone:"positive", icon:Sparkles, strength:"Customers understand the quality and value you provide.", weakness:"Your strongest message changes across channels.", improvement:"Create one clear promise and use it everywhere customers meet the business." },
    { name:"Digital Presence", status:"Visible, with significant room to grow", tone:"opportunity", icon:Globe2, strength:"Your current digital presence builds trust when people find it.", weakness:"Too few ideal customers discover the business consistently.", improvement:"Build a regular visibility rhythm around useful, authority-led content." },
    { name:"Lead Generation", status:"Inconsistent and dependent on manual effort", tone:"attention", icon:TrendingUp, strength:"Referrals and warm relationships generate valuable interest.", weakness:"New inquiries are not captured, followed up, or prioritized consistently.", improvement:"Create one reliable lead journey from first interest to qualified conversation." },
    { name:"Operations", status:"Working, but reliant on people remembering tasks", tone:"opportunity", icon:BriefcaseBusiness, strength:"The team understands how to deliver good work.", weakness:"Important processes live in conversations instead of clear systems.", improvement:"Document the repeatable steps behind delivery, handoffs, and reporting." },
    { name:"Automation", status:"Early stage with quick wins available", tone:"attention", icon:Workflow, strength:"The business is ready to adopt simpler automated processes.", weakness:"Repetitive follow-up and coordination still consume valuable time.", improvement:"Start with lead response, reminders, and weekly reporting." },
    { name:"Customer Experience", status:"Trusted, but not consistently designed", tone:"positive", icon:Users, strength:"Customers value the personal attention and quality they receive.", weakness:"The experience can vary depending on who handles the customer.", improvement:"Define a consistent journey from onboarding through follow-up." },
  ];
  return <><PageTitle eyebrow="Understand where you are today" title="Current State Assessment" description={`A clear view of how your ${industry.label.toLowerCase()} business operates and where growth is being held back.`} action="Refresh assessment" />
    <GlassCard className="assessment-summary">
      <div><Badge className="bg-violet-400/10 text-violet-300">Current stage</Badge><h2>Your business is currently operating at <span>Foundation Stage.</span></h2><p>{template?.currentState ?? "You have a credible business with strong customer value. The next stage requires more consistent visibility, lead management, and repeatable operating systems."}</p></div>
      <div className="assessment-priorities"><div><small>Biggest Constraint</small><strong>{template?.constraint ?? "Lead Management"}</strong><span>The primary issue currently limiting predictable growth.</span></div><div><small>Future State</small><strong>{industry.label} Transformation</strong><span>{template?.futureState ?? industry.opportunity}</span></div></div>
    </GlassCard>
    {template && <GlassCard className="opportunities-panel"><CardHead title="Business Opportunities" subtitle={`Highest-potential opportunities for ${industry.label}`} icon={TrendingUp}/><div className="opportunity-list">{template.opportunities.map((opportunity,index)=><div key={opportunity.title}><span>0{index+1}</span><div><strong>{opportunity.title}</strong><p>{opportunity.impact}</p></div></div>)}</div></GlassCard>}
    <div className="assessment-grid">{categories.map((category)=>{const Icon=category.icon;return <GlassCard className="assessment-card" key={category.name}>
      <div className="assessment-card-head"><div className={cn("stat-icon",category.tone==="positive"?"tone-green":category.tone==="attention"?"tone-amber":"tone-violet")}><Icon className="size-4"/></div><div><h3>{category.name}</h3><Badge variant="outline" className={cn("mt-2 border-white/10 text-[8px]",category.tone==="positive"?"text-emerald-300":category.tone==="attention"?"text-amber-300":"text-violet-300")}>{category.status}</Badge></div></div>
      <div className="assessment-detail"><small>Strength</small><p>{category.strength}</p></div>
      <div className="assessment-detail"><small>What is slowing growth</small><p>{category.weakness}</p></div>
      <div className="assessment-detail improvement"><small>Improvement area</small><p>{category.improvement}</p></div>
    </GlassCard>})}</div>
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
  return <><PageTitle eyebrow="See the transformation journey" title={`${industry.label} Growth Blueprint`} description="A strategic path from where your business is today to becoming organized, automated, and scale ready." action="Refresh blueprint" />
    <GlassCard className="blueprint-overview"><div><Badge className="bg-violet-400/10 text-violet-300">Transformation journey</Badge><h2>Build the business in the right order.</h2><p>Each stage removes a constraint and creates the foundation required for the next stage of growth.</p></div><div className="blueprint-progress"><strong>2 of 7</strong><span>stages active</span><Progress value={28} className="mt-3 h-1.5 bg-white/5 [&>div]:bg-violet-400"/></div></GlassCard>
    <div className="blueprint-roadmap">{stages.map((stage,index)=><article className={cn("blueprint-stage",index===1&&"blueprint-stage-active")} key={stage.title}>
      <div className="blueprint-marker"><span>{String(index+1).padStart(2,"0")}</span></div>
      <GlassCard className="blueprint-card">
        <div className="blueprint-card-title"><div><p>Stage {String(index+1).padStart(2,"0")}</p><h3>{stage.title}</h3></div><Badge className={cn("text-[8px]",index===0?"bg-emerald-400/10 text-emerald-300":index===1?"bg-violet-400/10 text-violet-300":"bg-white/5 text-white/35")}>{stage.status}</Badge></div>
        <div className="blueprint-details">
          <div><small>Current Situation</small><p>{stage.situation}</p></div>
          <div><small>Desired Outcome</small><p>{stage.outcome}</p></div>
          <div><small>Systems Required</small><ul>{stage.systems.map(system=><li key={system}><CheckCircle2 className="size-3"/>{system}</li>)}</ul></div>
          <div className="blueprint-impact"><small>Expected Impact</small><p>{stage.impact}</p></div>
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
  return <><PageTitle eyebrow="Build what growth requires" title={`${industry.label} Recommended Systems`} description="The business systems required to become professional, visible, organized, automated, and scale ready." action="Review system priorities" />
    <GlassCard className="systems-summary"><div><Badge className="bg-violet-400/10 text-violet-300">6 recommended systems</Badge><h2>Systems create the business outcomes.</h2><p>Build these systems in sequence to remove growth constraints without adding unnecessary complexity.</p></div><div className="systems-summary-meta"><div><small>Start here</small><strong>Brand Foundation</strong></div><div><small>Highest impact</small><strong>Lead Capture</strong></div></div></GlassCard>
    <div className="systems-grid">{systems.map((system,index)=>{const Icon=system.icon;return <GlassCard className="recommended-system" key={system.name}>
      <div className="system-card-title"><div className="flex items-start gap-11"><div className="stat-icon tone-violet"><Icon className="size-4"/></div><div><p>System {String(index+1).padStart(2,"0")} · {system.stage}</p><h3>{system.name}</h3></div></div><Badge variant="outline" className="border-white/10 text-[8px] text-white/40">{system.complexity}</Badge></div>
      <div className="system-outcome"><small>Problem Solved</small><p>{system.problem}</p></div>
      <div className="system-outcome impact"><small>Business Impact</small><p>{system.impact}</p></div>
      <div className="system-benefits"><small>Expected Benefits</small><div>{system.benefits.map(benefit=><span key={benefit}><CheckCircle2 className="size-3"/>{benefit}</span>)}</div></div>
      <div className="system-footer"><div><small>Implementation Complexity</small><strong>{system.complexity}</strong></div><div><small>Expected Timeline</small><strong>{system.timeline}</strong></div><button>Explore system <ArrowRight className="size-3"/></button></div>
    </GlassCard>})}</div>
  </>;
}

function Clients({ industry }: { industry: IndustryProfile }) {
  const template = transformationTemplates[industry.id];
  const opportunities = template?.opportunities ?? industry.recommendations.map(item=>({title:item.title,impact:item.detail}));
  const systems = template?.systems ?? industry.recommendations.map(item=>({name:item.title,problem:item.detail,impact:item.detail,benefits:[item.tag],complexity:"Focused",timeline:"3–5 weeks"}));
  return <><PageTitle eyebrow="Client-facing transformation brief" title={`${industry.label} Transformation Proposal`} description="A clear summary of the current business, transformation priorities, expected outcomes, investment paths, and recommended next step." action="Present proposal" />
    <GlassCard className="proposal-hero"><div><Badge className="bg-violet-400/10 text-violet-300">Strategic recommendation</Badge><h2>Build a more visible, organized, and scalable {industry.label.toLowerCase()} business.</h2><p>{template?.futureState ?? industry.opportunity}</p></div><div className="proposal-status"><small>Recommended starting point</small><strong>{systems[0]?.name ?? "Business Foundation System"}</strong><span>Begin with the highest-impact constraint first.</span></div></GlassCard>
    <div className="proposal-grid"><GlassCard><CardHead title="Current business understanding" subtitle="What we understand today" icon={FileSearch}/><div className="proposal-copy"><p>{template?.currentState ?? industry.challenge}</p><div><small>Biggest growth constraint</small><strong>{template?.constraint ?? industry.challenge}</strong></div></div></GlassCard><GlassCard><CardHead title="Highest business opportunities" subtitle="Where transformation can create value" icon={TrendingUp}/><div className="proposal-list">{opportunities.slice(0,3).map((item,index)=><div key={item.title}><span>0{index+1}</span><div><strong>{item.title}</strong><p>{item.impact}</p></div></div>)}</div></GlassCard></div>
    <GlassCard className="mt-4"><CardHead title="Recommended transformation systems" subtitle="Build in sequence, based on business priority" icon={Workflow}/><div className="proposal-systems">{systems.slice(0,4).map((system,index)=><div key={system.name}><span>Phase {index+1}</span><strong>{system.name}</strong><p>{system.impact}</p><small>{system.timeline} · {system.complexity} complexity</small></div>)}</div></GlassCard>
    <div className="proposal-grid mt-4"><GlassCard><CardHead title="Expected business outcomes" subtitle="How progress should be measured" icon={Target}/><div className="proposal-outcomes">{["Stronger visibility among ideal customers","More consistent lead capture and follow-up","Faster, more reliable execution","Improved customer experience","Less owner dependency","Greater readiness to scale"].map(item=><span key={item}><CheckCircle2 className="size-3.5"/>{item}</span>)}</div></GlassCard><GlassCard><CardHead title="Transformation timeline" subtitle="A phased, manageable journey" icon={CalendarDays}/><div className="proposal-timeline">{[["Assessment","Understand the current state"],["Foundation","Fix the highest-impact constraint"],["Implementation","Introduce priority systems"],["Optimization","Improve performance and adoption"],["Scale","Expand proven systems"]].map(([phase,detail],index)=><div key={phase}><span>{index+1}</span><div><strong>{phase}</strong><p>{detail}</p></div></div>)}</div></GlassCard></div>
    <GlassCard className="mt-4"><CardHead title="Investment options" subtitle="Begin at the level that fits the business" icon={CircleDollarSign}/><div className="investment-options">{[["Focused Start","₹20k–50k","Solve one immediate bottleneck."],["Transformation Foundation","₹50k–2L","Build the foundation and connected growth systems."],["Growth Transformation","₹2L+","Implement a multi-stage transformation journey."],["Enterprise","Custom","Design systems for complex teams and scale."]].map(([name,value,detail],index)=><div className={cn(index===1&&"recommended-investment")} key={name}>{index===1&&<Badge className="bg-violet-400/10 text-violet-300">Recommended</Badge>}<strong>{name}</strong><b>{value}</b><p>{detail}</p></div>)}</div></GlassCard>
    <GlassCard className="proposal-next"><div><p className="eyebrow">Recommended next step</p><h3>Begin with a discovery session and current-state assessment.</h3><span>This confirms the business priorities before any systems are recommended or implemented.</span></div><Button className="accent-button">Start assessment <ArrowRight className="size-3.5"/></Button></GlassCard>
  </>;
}

function FutureVision({ industry }: { industry: IndustryProfile }) {
  const template = transformationTemplates[industry.id];
  const futureState = template?.futureState ?? `A visible, organized, automated, and scalable ${industry.label.toLowerCase()} business.`;
  const moments = [
    { time:"Today", title:"A capable business with untapped potential", icon:Activity, description:template?.currentState ?? industry.challenge, focus:"Understand the current reality", outcomes:["Strengths and constraints are visible","Growth priorities become clear","The future direction is defined"] },
    { time:"90 Days", title:"The foundation starts working for you", icon:Target, description:"Core positioning, visibility, and lead systems create a more professional and organized business.", focus:"Systems improve efficiency", outcomes:["Clearer market positioning","Faster, more consistent follow-up","Repeatable operating rhythms"] },
    { time:"1 Year", title:"Growth becomes organized and intelligent", icon:Workflow, description:"Automation improves execution while leadership gains a clearer view of performance and opportunities.", focus:"Automation and intelligence improve execution", outcomes:["Routine work happens reliably","Decisions use clear business signals","Growth is less dependent on manual effort"] },
    { time:"3 Years", title:"The business is built to scale", icon:Rocket, description:futureState, focus:"Scalability improves growth", outcomes:["Predictable growth systems","Stronger leadership capacity","Freedom to expand without losing quality"] },
  ];
  return <><PageTitle eyebrow="Visualize what becomes possible" title={`${industry.label} Future Vision`} description="See how the business can transform when the right systems, automation, and intelligence work together." action="Refine future vision" />
    <GlassCard className="vision-hero"><div><Badge className="bg-violet-400/10 text-violet-300">Your future business</Badge><h2>{futureState}</h2><p>This is not growth through more effort. It is growth through a stronger business operating model.</p></div><div className="vision-orb"><Rocket className="size-6"/><span>3 year<br/>vision</span></div></GlassCard>
    <div className="vision-timeline">{moments.map((moment,index)=>{const Icon=moment.icon;return <article className={cn("vision-moment",index===0&&"vision-moment-current")} key={moment.time}>
      <div className="vision-time"><span>{moment.time}</span></div>
      <GlassCard className="vision-card"><div className="vision-card-head"><div className="stat-icon tone-violet"><Icon className="size-4"/></div><div><p>{moment.focus}</p><h3>{moment.title}</h3></div></div><p className="vision-description">{moment.description}</p><div className="vision-outcomes">{moment.outcomes.map(outcome=><span key={outcome}><CheckCircle2 className="size-3"/>{outcome}</span>)}</div></GlassCard>
    </article>})}</div>
    <GlassCard className="vision-confidence"><Sparkles className="size-5"/><div><h3>The future business is built one system at a time.</h3><p>Every improvement creates capacity for the next stage. The result is a business that grows with greater confidence, control, and freedom.</p></div><Button className="accent-button">Continue transformation <ArrowRight className="size-3.5"/></Button></GlassCard>
  </>;
}

function AskAI() {
  const [prompt,setPrompt]=useState("");
  return <div className="ai-page"><PageTitle eyebrow="Your strategic growth partner" title="Growth Advisor" description="Get clear guidance on growth constraints, opportunities, systems, and next decisions."/><div className="ai-chat"><div className="ai-welcome"><div className="ai-orb"><Sparkles className="size-6"/></div><h2>What should we solve today?</h2><p>I can help you understand where you are, reveal opportunities, and plan the business you want to become.</p><div className="suggestion-grid">{[["Find my biggest growth opportunity",TrendingUp],["Build a 90-day transformation plan",CalendarDays],["Identify what is slowing growth",FileSearch],["Design the systems we need",Workflow]].map(([x,I])=><button key={String(x)} onClick={()=>setPrompt(String(x))}><I className="size-4 text-violet-300"/><span>{String(x)}</span><ArrowRight className="ml-auto size-3 text-white/20"/></button>)}</div></div><div className="chat-input"><Input value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="Ask about your business transformation..." className="h-12 border-0 bg-transparent text-xs shadow-none focus-visible:ring-0"/><Button size="icon" className="mr-1 size-9 shrink-0 rounded-lg bg-violet-500 hover:bg-violet-400"><Send className="size-3.5"/></Button></div><p className="mt-2 text-center text-[8px] text-white/20">Overwrite AI can make mistakes. Verify important decisions.</p></div></div>;
}

export function OverwriteOS() {
  const [active,setActive]=useState<ViewId>("dashboard");
  const [menu,setMenu]=useState(false);
  const [industryId,setIndustryId]=useState<IndustryId | null>(() => {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem("overwrite-industry") as IndustryId | null;
  });
  const industry = industryProfiles.find((profile) => profile.id === industryId);

  function selectIndustry(selection: IndustryId) {
    window.localStorage.setItem("overwrite-industry", selection);
    setIndustryId(selection);
  }

  if (!industry) return <IndustryOnboarding onSelect={selectIndustry} />;

  return (
    <div className="app-shell dark">
      <div className="ambient a1"/><div className="ambient a2"/><div className="grid-bg"/>
      <div className="hidden lg:flex"><Sidebar active={active} setActive={setActive} onChangeIndustry={()=>{window.localStorage.removeItem("overwrite-industry");setIndustryId(null)}}/></div>
      {menu && <div className="mobile-overlay"><button className="absolute inset-0 bg-black/60" onClick={()=>setMenu(false)}/><Sidebar mobile active={active} setActive={setActive} close={()=>setMenu(false)} onChangeIndustry={()=>{window.localStorage.removeItem("overwrite-industry");setIndustryId(null)}}/></div>}
      <div className="main-shell"><Header active={active} openMenu={()=>setMenu(true)}/><main className="content">{active==="dashboard"&&<Dashboard industry={industry} onChangeIndustry={()=>{window.localStorage.removeItem("overwrite-industry");setIndustryId(null)}}/>} {active==="audit"&&<Audit industry={industry}/>} {active==="roadmap"&&<Roadmap industry={industry}/>} {active==="automation"&&<Automation industry={industry}/>} {active==="future"&&<FutureVision industry={industry}/>} {active==="clients"&&<Clients industry={industry}/>} {active==="ai"&&<AskAI/>}</main></div>
    </div>
  );
}
