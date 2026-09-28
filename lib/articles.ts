export type Audience = "internal" | "external"

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string }

export interface Article {
  slug: string
  title: string
  audience: Audience
  category: string
  summary: string
  owner: string
  lastReviewed: string // ISO date
  tags: string[]
  body: Block[]
}

export const articles: Article[] = [
  // ─────────────────────────────── INTERNAL ───────────────────────────────
  {
    slug: "incident-escalation-matrix",
    title: "Incident Escalation Matrix",
    audience: "internal",
    category: "Incident Management",
    summary:
      "Severity definitions, response targets, and who to page for each tier of incident.",
    owner: "Service Desk Leadership",
    lastReviewed: "2026-08-15",
    tags: ["incidents", "escalation", "on-call"],
    body: [
      {
        type: "p",
        text: "This matrix defines how incidents are classified and escalated so that every technician makes the same call under pressure. Severity is set at intake and re-evaluated if impact changes.",
      },
      { type: "h2", text: "Severity levels" },
      {
        type: "ul",
        items: [
          "P1 — Critical: An outage affecting an entire department or a core system (email, VPN, authentication). Page the on-call lead immediately, no exceptions.",
          "P2 — High: A single team or a non-core system is down, or a P1-capable issue is contained to one user with no workaround. Escalate to Tier 2 within 30 minutes.",
          "P3 — Medium: A single user is impacted and a workaround exists. Standard queue, next available technician.",
          "P4 — Low: Cosmetic issues, feature requests, or non-urgent access changes. Scheduled work, no SLA pressure.",
        ],
      },
      { type: "h2", text: "Escalation steps" },
      {
        type: "ol",
        items: [
          "Confirm severity using the definitions above — do not downgrade a P1 to avoid a page.",
          "Log the incident in the ticketing system with severity, affected systems, and first symptoms reported.",
          "For P1/P2, notify the on-call lead via the paging tool, not chat or email.",
          "Open a bridge line for P1 incidents within 10 minutes and post updates every 15 minutes until resolved.",
          "After resolution, downgrade the ticket to document root cause and close it with a summary for the postmortem log.",
        ],
      },
      {
        type: "note",
        text: "When in doubt, escalate up a tier rather than down. A P2 mistakenly paged as a P1 costs a phone call; a P1 mistakenly logged as a P3 costs hours of unnecessary downtime.",
      },
    ],
  },
  {
    slug: "new-hire-provisioning",
    title: "New Hire Endpoint and Account Provisioning Checklist",
    audience: "internal",
    category: "Onboarding",
    summary:
      "The standard checklist for provisioning a new employee's account, hardware, and access before day one.",
    owner: "IT Operations",
    lastReviewed: "2026-09-02",
    tags: ["onboarding", "provisioning", "accounts"],
    body: [
      {
        type: "p",
        text: "Provisioning should be complete at least one business day before the new hire's start date. HR's new-hire form is the source of truth for role, department, and manager — do not provision from a verbal request alone.",
      },
      { type: "h2", text: "Before day one" },
      {
        type: "ul",
        items: [
          "Create the directory account with the standard naming convention and add to the correct department groups.",
          "Assign licenses based on role (standard productivity suite for all staff; additional tools per the role's access template).",
          "Image and tag a laptop from current stock; apply the standard endpoint policy profile.",
          "Provision building/badge access through Facilities using the HR form's start date.",
          "Set a temporary password and configure forced reset on first login.",
        ],
      },
      { type: "h2", text: "Day one" },
      {
        type: "ol",
        items: [
          "Confirm the new hire can log in and complete MFA enrollment.",
          "Walk through email, shared drives, and the ticketing portal for submitting future requests.",
          "Confirm the manager has been notified that provisioning is complete.",
        ],
      },
      {
        type: "note",
        text: "If a role needs access beyond the standard template (e.g., finance systems, admin tools), that requires a separate access request with manager approval — do not bundle elevated access into standard onboarding.",
      },
    ],
  },
  {
    slug: "admin-account-reset-procedure",
    title: "Resetting a Locked Administrative Account",
    audience: "internal",
    category: "Access Management",
    summary:
      "Identity verification and approval steps required before resetting any account with elevated privileges.",
    owner: "IT Security",
    lastReviewed: "2026-07-28",
    tags: ["accounts", "security", "verification"],
    body: [
      {
        type: "p",
        text: "Administrative and service accounts carry higher risk than standard user accounts, so resets follow a stricter verification path than a normal password reset. This procedure applies to any account with elevated or system-level privileges.",
      },
      { type: "h2", text: "Verification requirements" },
      {
        type: "ul",
        items: [
          "Requests must come through the ticketing system, never chat or a verbal request, even from a known colleague.",
          "Verify identity with a second factor beyond caller ID or email — a callback to a number already on file is the standard.",
          "A second technician or the requester's manager must approve the reset before it is performed for any account with domain admin, system, or financial access.",
        ],
      },
      { type: "h2", text: "Reset steps" },
      {
        type: "ol",
        items: [
          "Log the request and verification method used in the ticket.",
          "Generate a temporary credential through the privileged access tool — never communicate a permanent password verbally.",
          "Force credential change and re-enrollment of MFA on next login.",
          "Notify IT Security of the reset for audit logging.",
        ],
      },
      {
        type: "note",
        text: "If a request feels rushed or the requester is unusually insistent on skipping verification, that is itself a signal to slow down. Escalate to IT Security rather than making an exception.",
      },
    ],
  },
  {
    slug: "vpn-staff-provisioning",
    title: "Provisioning VPN Access for Staff",
    audience: "internal",
    category: "Network Access",
    summary: "How to grant, scope, and document VPN access for a staff member.",
    owner: "Network Team",
    lastReviewed: "2026-08-30",
    tags: ["vpn", "network", "remote access"],
    body: [
      {
        type: "p",
        text: "VPN access is granted per role, not by default. Confirm the requester's manager has approved remote access before provisioning.",
      },
      { type: "h2", text: "Steps" },
      {
        type: "ol",
        items: [
          "Confirm an approved access request exists in the ticketing system.",
          "Add the user to the VPN group matching their role's network segment — avoid granting broader access than the role requires.",
          "Issue the VPN client and configuration profile, or point the user to the self-service install guide.",
          "Have the user complete a test connection before closing the ticket.",
        ],
      },
      {
        type: "note",
        text: "Review VPN group membership quarterly and remove access for anyone who has changed roles or no longer needs remote access.",
      },
    ],
  },
  {
    slug: "endpoint-reimage-checklist",
    title: "Endpoint Reimage and Redeployment Checklist",
    audience: "internal",
    category: "Asset Management",
    summary: "Steps for wiping, reimaging, and redeploying a returned laptop or desktop.",
    owner: "IT Operations",
    lastReviewed: "2026-06-19",
    tags: ["endpoints", "asset management", "imaging"],
    body: [
      {
        type: "p",
        text: "Every returned device is reimaged before redeployment, regardless of why it was returned. This protects both data security and consistency of the standard build.",
      },
      { type: "h2", text: "Checklist" },
      {
        type: "ul",
        items: [
          "Confirm the device is checked in against the asset tag in inventory.",
          "Back up any data the outgoing user's manager has flagged as needed, then wipe the drive.",
          "Apply the current standard image and endpoint policy profile.",
          "Update the asset record: status, current assignee (or \"in stock\"), and imaging date.",
          "Run a hardware health check — battery cycle count, disk health — and flag for retirement if thresholds are exceeded.",
        ],
      },
    ],
  },
  {
    slug: "on-call-paging-procedure",
    title: "On-Call Rotation and Paging Procedure",
    audience: "internal",
    category: "Incident Management",
    summary: "How the on-call rotation works and how to page the current on-call technician.",
    owner: "Service Desk Leadership",
    lastReviewed: "2026-09-10",
    tags: ["on-call", "paging", "incidents"],
    body: [
      {
        type: "p",
        text: "One technician carries the on-call pager each week, rotating on the paging schedule. On-call is for P1/P2 incidents outside business hours — it is not a substitute for the standard queue.",
      },
      { type: "h2", text: "To page on-call" },
      {
        type: "ol",
        items: [
          "Confirm the issue meets P1/P2 severity per the escalation matrix.",
          "Open the paging tool and select the current on-call rotation, not an individual by name.",
          "Include a one-line summary of impact and any systems already checked.",
          "If there's no acknowledgment within 15 minutes, the tool automatically escalates to the backup on-call.",
        ],
      },
      {
        type: "note",
        text: "Swap requests for the rotation go through the schedule tool, not informal chat messages, so coverage is never accidentally dropped.",
      },
    ],
  },
  {
    slug: "shared-drive-access-workflow",
    title: "Shared Drive Access Request Workflow",
    audience: "internal",
    category: "Access Management",
    summary: "Standard process for requesting, approving, and provisioning shared drive access.",
    owner: "IT Operations",
    lastReviewed: "2026-07-05",
    tags: ["access", "shared drives", "permissions"],
    body: [
      {
        type: "p",
        text: "Shared drive access always requires the resource owner's approval, not just a manager's. IT provisions access; it does not decide who should have it.",
      },
      { type: "h2", text: "Steps" },
      {
        type: "ol",
        items: [
          "Requester submits a ticket naming the specific drive/folder and business reason.",
          "IT routes the request to the folder's listed owner for approval.",
          "On approval, grant the minimum permission level needed (read vs. read/write) — default to read-only unless write access is explicitly requested.",
          "Log the grant with requester, approver, and date for the quarterly access review.",
        ],
      },
    ],
  },

  // ─────────────────────────────── EXTERNAL ───────────────────────────────
  {
    slug: "reset-your-password",
    title: "How to Reset Your Password",
    audience: "external",
    category: "Account Access",
    summary: "Step-by-step instructions to reset a forgotten or expired password yourself.",
    owner: "Service Desk",
    lastReviewed: "2026-09-12",
    tags: ["password", "self-service", "account"],
    body: [
      {
        type: "p",
        text: "Most password resets can be done in under two minutes without calling the help desk.",
      },
      { type: "h2", text: "Steps" },
      {
        type: "ol",
        items: [
          "Go to the account portal login page and select \"Forgot password.\"",
          "Enter your username or work email address.",
          "Complete the identity check (a code sent to your registered phone or personal email).",
          "Choose a new password. It must be at least 12 characters and not one of your last 5 passwords.",
          "Log back in with your new password. You may be asked to re-enroll multi-factor authentication.",
        ],
      },
      {
        type: "note",
        text: "If you don't have access to your registered phone or personal email, contact the service desk directly — self-service reset requires one of those to verify it's really you.",
      },
    ],
  },
  {
    slug: "connect-guest-wifi",
    title: "Connecting to the Guest Wi-Fi Network",
    audience: "external",
    category: "Network",
    summary: "How visitors and personal devices can get online without touching the staff network.",
    owner: "Network Team",
    lastReviewed: "2026-08-22",
    tags: ["wifi", "guest network", "visitors"],
    body: [
      {
        type: "p",
        text: "The guest network is separate from the internal staff network and doesn't require an account.",
      },
      { type: "h2", text: "Steps" },
      {
        type: "ol",
        items: [
          "From your device's Wi-Fi settings, select the guest network from the list of available networks.",
          "Open a browser — you should be redirected automatically to the guest portal page.",
          "Accept the acceptable use terms to get online.",
          "Access renews every 24 hours; you'll need to reaccept the terms after that.",
        ],
      },
      {
        type: "note",
        text: "The guest network cannot reach internal file shares or printers. If you need those, ask your host to submit a temporary access request instead.",
      },
    ],
  },
  {
    slug: "set-up-email-on-phone",
    title: "Setting Up Email on Your Phone",
    audience: "external",
    category: "Email",
    summary: "Add your work email account to an iOS or Android phone in a few minutes.",
    owner: "Service Desk",
    lastReviewed: "2026-08-05",
    tags: ["email", "mobile", "setup"],
    body: [
      {
        type: "p",
        text: "Your phone can connect using the built-in mail app on both iOS and Android — no separate app installation is required.",
      },
      { type: "h2", text: "iOS" },
      {
        type: "ol",
        items: [
          "Go to Settings > Mail > Accounts > Add Account.",
          "Choose the account type used by your organization and enter your work email and password.",
          "Complete the multi-factor prompt if asked, and enable Mail, Contacts, and Calendars as needed.",
        ],
      },
      { type: "h2", text: "Android" },
      {
        type: "ol",
        items: [
          "Open the Mail app and choose Add Account.",
          "Select your account type, then sign in with your work email and password.",
          "Approve the multi-factor prompt if asked.",
        ],
      },
      {
        type: "note",
        text: "If your device is lost or stolen, contact the service desk immediately — your work account can be remotely wiped from that device without affecting your personal data on other devices.",
      },
    ],
  },
  {
    slug: "submit-a-support-ticket",
    title: "How to Submit a Support Ticket",
    audience: "external",
    category: "Getting Help",
    summary: "Where to go for IT help and what information speeds up a resolution.",
    owner: "Service Desk",
    lastReviewed: "2026-09-01",
    tags: ["tickets", "support", "getting started"],
    body: [
      {
        type: "p",
        text: "The support portal is the fastest way to reach IT for anything that isn't an active outage.",
      },
      { type: "h2", text: "Steps" },
      {
        type: "ol",
        items: [
          "Go to the support portal and select \"New request.\"",
          "Choose the category that best matches your issue — this routes it to the right queue automatically.",
          "Describe what you were trying to do, what happened instead, and any error message word-for-word.",
          "Attach a screenshot if you have one — it often saves a round of back-and-forth.",
        ],
      },
      {
        type: "note",
        text: "For anything affecting your entire team right now, call the service desk directly instead of submitting a ticket — it gets triaged faster.",
      },
    ],
  },
  {
    slug: "troubleshoot-slow-computer",
    title: "Troubleshooting a Slow Computer",
    audience: "external",
    category: "Hardware",
    summary: "A few things to check yourself before opening a ticket about performance.",
    owner: "Service Desk",
    lastReviewed: "2026-07-18",
    tags: ["performance", "troubleshooting", "hardware"],
    body: [
      {
        type: "p",
        text: "Most slowdowns come down to a handful of common causes. Try these before submitting a ticket — it may save you a trip to the help desk.",
      },
      { type: "h2", text: "Quick checks" },
      {
        type: "ul",
        items: [
          "Restart your computer if it's been more than a few days since the last restart — pending updates often run in the background and slow everything down.",
          "Check how many browser tabs and applications are open at once; each one uses memory even in the background.",
          "Confirm you have at least 10-15% of your hard drive free — a nearly full drive slows the whole system.",
          "Check for pending OS or antivirus updates and let them finish installing.",
        ],
      },
      {
        type: "note",
        text: "If performance is still poor after a restart and these checks, submit a ticket with how long this has been happening — that history helps us diagnose it faster.",
      },
    ],
  },
  {
    slug: "request-new-software",
    title: "Requesting New Software",
    audience: "external",
    category: "Software",
    summary: "How to request an application that isn't part of your standard software set.",
    owner: "Service Desk",
    lastReviewed: "2026-08-11",
    tags: ["software", "requests", "licensing"],
    body: [
      {
        type: "p",
        text: "New software requests go through a short review to confirm licensing and security before installation — most are approved within one to two business days.",
      },
      { type: "h2", text: "Steps" },
      {
        type: "ol",
        items: [
          "Submit a software request ticket with the application name and a brief business justification.",
          "Your manager is automatically looped in for approval on anything with a license cost.",
          "Once approved, IT installs it remotely or provides self-install instructions, depending on the application.",
        ],
      },
      {
        type: "note",
        text: "Free tools still need to go through this process — the review covers security and data handling, not just cost.",
      },
    ],
  },
  {
    slug: "vpn-setup-remote-work",
    title: "Setting Up VPN for Remote Work",
    audience: "external",
    category: "Network",
    summary: "Install and connect to VPN so you can reach internal systems from home.",
    owner: "Network Team",
    lastReviewed: "2026-09-05",
    tags: ["vpn", "remote work", "setup"],
    body: [
      {
        type: "p",
        text: "VPN access must be requested and approved before you can install the client — see \"How to Submit a Support Ticket\" if you don't have access yet.",
      },
      { type: "h2", text: "Steps" },
      {
        type: "ol",
        items: [
          "Download the VPN client from the software portal.",
          "Sign in with your work username and password.",
          "Complete the multi-factor prompt to finish connecting.",
          "Once connected, internal tools and shared drives will be reachable just like at the office.",
        ],
      },
      {
        type: "note",
        text: "Disconnect from VPN when you're done for the day. Staying connected constantly isn't necessary and can slow down other applications on your home network.",
      },
    ],
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getRelated(article: Article, count = 3): Article[] {
  return articles
    .filter((a) => a.slug !== article.slug && a.audience === article.audience)
    .filter((a) => a.category === article.category || a.tags.some((t) => article.tags.includes(t)))
    .slice(0, count)
}
