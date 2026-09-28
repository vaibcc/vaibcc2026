export const PROFILE = {
  name: "Vaibhav Kamra",
  role: "Technicien Informatique & Cybersécurité",
  subtitle: "Technicien Informatique & Cybersécurité  ·  Microsoft 365 • Azure • Entra ID • Fortinet • Cisco • Réseaux • Infrastructure • Cloud • IA",
  pitch:
    "Professionnel IT passionné par la cybersécurité, les technologies Microsoft, les infrastructures réseau et le cloud. Titulaire de plus de 50 certifications professionnelles délivrées par Microsoft, CompTIA, ISC2, Cisco, Fortinet, IBM, Google, Red Hat, Datadog et Linux Foundation. J'accompagne les organisations dans la sécurisation, l'administration et l'optimisation de leurs environnements numériques.",
  location: "Saint-Étienne-de-Montluc, France",
  email: "contact@vaib.cc",
  linkedin: "https://www.linkedin.com/in/kamravaibhav/",
  github: "https://github.com/vaibhavkamra",
  website: "https://vaib.cc",
};

export const NAV = [
  { id: "apropos", label: "À propos" },
  { id: "competences", label: "Compétences" },
  { id: "certifications", label: "Certifications" },
  { id: "projets", label: "Projets" },
  { id: "experience", label: "Expérience" },
  { id: "contact", label: "Contact" },
];

export const EXPERTISE = [
  "Microsoft 365", "Entra ID", "Azure", "Intune", "Exchange Online", "SharePoint Online",
  "Microsoft Defender", "Identity & Access Management", "Cybersécurité", "Cloud Security",
  "Fortinet", "Cisco", "Stormshield", "Réseaux", "Windows Server", "Active Directory",
  "Virtualisation", "Infrastructure", "Support technique", "Cloud Computing",
  "Intelligence Artificielle", "GTB / Smart Building", "Technologies Web", "GitHub", "Cloudflare", "Docker",
];

export const JOURNEY = [
  { tag: "01", title: "Support utilisateurs", text: "Diagnostic, résolution d'incidents et accompagnement quotidien des collaborateurs sur leurs postes et outils." },
  { tag: "02", title: "Administration systèmes & réseaux", text: "Windows Server, Active Directory, GPO, DHCP/DNS, virtualisation Hyper-V et VMware." },
  { tag: "03", title: "Spécialisation Microsoft & Sécurité", text: "Microsoft 365, Entra ID, Intune, Defender — plus de 50 certifications professionnelles obtenues (Microsoft, CompTIA, ISC2, Cisco, Fortinet, IBM, Google, Red Hat, Datadog)." },
  { tag: "04", title: "Technicien Informatique - GTB", text: "Poste actuel : convergence de l'IT et de la Gestion Technique du Bâtiment, sécurité et automatisation.", current: true },
];

export const SKILLS = [
  { category: "Microsoft", items: [["Microsoft 365", 92], ["Entra ID", 90], ["Exchange Online", 85], ["SharePoint Online", 80], ["Teams", 88], ["Intune", 85], ["Defender", 80]] },
  { category: "Cloud", items: [["Azure", 80], ["Cloudflare", 82], ["DNS", 85], ["Hébergement Web", 80], ["GitHub", 78], ["Cloud Computing", 85]] },
  { category: "Infrastructure", items: [["Windows Server", 85], ["Active Directory", 88], ["GPO", 85], ["DHCP", 85], ["DNS", 85], ["Hyper-V", 75], ["VMware", 72]] },
  { category: "Réseau & Sécurité", items: [["VLAN", 80], ["VPN", 82], ["Firewall", 80], ["Stormshield", 80], ["Fortinet", 78], ["Cisco", 75], ["MFA", 92], ["Zero Trust", 82], ["Secure Score", 88]] },
  { category: "IA & Développement", items: [["Intelligence Artificielle", 75], ["HTML", 85], ["CSS", 82], ["JavaScript", 70], ["React", 65], ["WordPress", 78], ["Docker", 65]] },
];

const LEARN = "https://learn.microsoft.com/fr-fr/credentials/certifications/";

export const CERT_CATEGORIES = [
  { id: "microsoft", label: "Microsoft" },
  { id: "cybersecurity", label: "Cybersécurité" },
  { id: "infrastructure", label: "Infrastructure & Réseaux" },
  { id: "ai_cloud", label: "IA & Cloud" },
];

export const CERTS = [
  // ---- MICROSOFT ----
  { code: "SC-300", title: "Identity and Access Administrator Associate", issuer: "Microsoft", category: "microsoft", level: "Associate", featured: true, url: LEARN + "identity-and-access-administrator/", domains: ["Implémenter une solution d'identité Entra ID", "Authentification et gestion des accès", "Accès conditionnel et MFA", "Gouvernance des identités (PIM, revues d'accès)"] },
  { code: "MS-900", title: "Microsoft 365 Fundamentals", issuer: "Microsoft", category: "microsoft", level: "Fundamentals", featured: true, url: LEARN + "microsoft-365-fundamentals/", domains: ["Concepts du cloud et SaaS", "Applications et services Microsoft 365", "Sécurité, conformité et confidentialité", "Licences, tarification et support"] },
  { code: "SC-900", title: "Security, Compliance, and Identity Fundamentals", issuer: "Microsoft", category: "microsoft", level: "Fundamentals", featured: true, url: LEARN + "security-compliance-and-identity-fundamentals/", domains: ["Concepts de sécurité et Zero Trust", "Solutions Microsoft Entra", "Solutions de sécurité Microsoft", "Solutions de conformité Microsoft Purview"] },
  { code: "AZ-900", title: "Azure Fundamentals", issuer: "Microsoft", category: "microsoft", level: "Fundamentals", featured: true, url: LEARN + "azure-fundamentals/", domains: ["Concepts du cloud", "Architecture et services Azure", "Gestion et gouvernance Azure"] },
  { code: "AI-900", title: "Azure AI Fundamentals", issuer: "Microsoft", category: "microsoft", level: "Fundamentals", featured: true, url: LEARN + "azure-ai-fundamentals/", domains: ["Charges de travail IA et considérations", "Principes du machine learning", "Vision par ordinateur et NLP", "IA générative sur Azure"] },
  { code: "AZ-104", title: "Microsoft Azure Administrator", issuer: "Microsoft", category: "microsoft", level: "Associate", url: LEARN + "azure-administrator/" },
  { code: "AZ-500", title: "Azure Security Engineer Associate", issuer: "Microsoft", category: "microsoft", level: "Associate", url: LEARN + "azure-security-engineer/" },
  { code: "SC-200", title: "Security Operations Analyst Associate", issuer: "Microsoft", category: "microsoft", level: "Associate", url: LEARN + "security-operations-analyst/" },
  { code: "SC-100", title: "Cybersecurity Architect Expert", issuer: "Microsoft", category: "microsoft", level: "Expert", url: LEARN + "cybersecurity-architect-expert/" },
  { code: "MS-102", title: "Microsoft 365 Administrator Expert", issuer: "Microsoft", category: "microsoft", level: "Expert", url: LEARN + "microsoft-365-administrator-expert/" },
  { code: "MD-102", title: "Endpoint Administrator Associate", issuer: "Microsoft", category: "microsoft", level: "Associate", url: LEARN + "endpoint-administrator/" },
  { code: "DP-900", title: "Azure Data Fundamentals", issuer: "Microsoft", category: "microsoft", level: "Fundamentals", url: LEARN + "azure-data-fundamentals/" },
  { code: "AI-102", title: "Designing and Implementing a Microsoft Azure AI Solution", issuer: "Microsoft", category: "microsoft", level: "Associate", url: LEARN + "azure-ai-engineer/" },
  { code: "PL-900", title: "Microsoft Power Platform Fundamentals", issuer: "Microsoft", category: "microsoft", level: "Fundamentals", url: LEARN + "power-platform-fundamentals/" },
  { code: "SC-400", title: "Information Protection and Compliance Administrator", issuer: "Microsoft", category: "microsoft", level: "Associate", url: LEARN + "information-protection-compliance-administrator/" },
  { code: "MS-700", title: "Managing Microsoft Teams", issuer: "Microsoft", category: "microsoft", level: "Associate", url: LEARN + "microsoft-teams-administrator-associate/" },
  { code: "MS-740", title: "Troubleshooting Microsoft Teams", issuer: "Microsoft", category: "microsoft", level: "Associate", url: LEARN + "microsoft-365-certified-support-specialist-teams/" },

  // ---- CYBERSÉCURITÉ ----
  { code: "Security+", title: "CompTIA Security+", issuer: "CompTIA", category: "cybersecurity", level: "Professional", featured: true, url: "https://www.comptia.org/certifications/security" },
  { code: "CC", title: "Certified in Cybersecurity (CC)", issuer: "ISC2", category: "cybersecurity", level: "Fundamentals", featured: true, url: "https://www.isc2.org/certifications/cc" },
  { code: "Ethical Hacker", title: "Cisco Ethical Hacker", issuer: "Cisco", category: "cybersecurity", level: "Professional", featured: true, url: "https://www.netacad.com/cisco-ethical-hacker" },
  { code: "FCA", title: "Fortinet Certified Associate Cybersecurity", issuer: "Fortinet", category: "cybersecurity", level: "Associate", featured: true, url: "https://www.fortinet.com/training/certification" },
  { code: "NSE 1", title: "Fortinet NSE 1 — Certified Associate", issuer: "Fortinet", category: "cybersecurity", level: "Fundamentals", featured: true, url: "https://www.fortinet.com/training/certification" },
  { code: "NSE 2", title: "Fortinet NSE 2 — Certified Associate", issuer: "Fortinet", category: "cybersecurity", level: "Fundamentals", featured: true, url: "https://www.fortinet.com/training/certification" },
  { code: "NSE 3", title: "Fortinet NSE 3 — Certified Associate", issuer: "Fortinet", category: "cybersecurity", level: "Fundamentals", featured: true, url: "https://www.fortinet.com/training/certification" },
  { code: "NSE 4", title: "Fortinet NSE 4 — Security Professional", issuer: "Fortinet", category: "cybersecurity", level: "Professional", url: "https://www.fortinet.com/training/certification" },
  { code: "NSE 5", title: "Fortinet NSE 5 — Certified Professional", issuer: "Fortinet", category: "cybersecurity", level: "Professional", url: "https://www.fortinet.com/training/certification" },
  { code: "CySA+", title: "CompTIA Cybersecurity Analyst (CySA+)", issuer: "CompTIA", category: "cybersecurity", level: "Professional", url: "https://www.comptia.org/certifications/cybersecurity-analyst" },
  { code: "PenTest+", title: "CompTIA PenTest+", issuer: "CompTIA", category: "cybersecurity", level: "Professional", url: "https://www.comptia.org/certifications/pentest" },
  { code: "CASP+", title: "CompTIA Advanced Security Practitioner (CASP+)", issuer: "CompTIA", category: "cybersecurity", level: "Expert", url: "https://www.comptia.org/certifications/casp" },
  { code: "CCST Cyber", title: "Cisco Certified Support Technician — Cybersecurity", issuer: "Cisco", category: "cybersecurity", level: "Fundamentals", url: "https://www.netacad.com/cisco-certified-support-technician" },

  // ---- INFRASTRUCTURE & RÉSEAUX ----
  { code: "A+", title: "CompTIA A+", issuer: "CompTIA", category: "infrastructure", level: "Professional", featured: true, url: "https://www.comptia.org/certifications/a" },
  { code: "IT Support", title: "IBM IT Support Professional Certificate", issuer: "IBM", category: "infrastructure", level: "Professional", featured: true, url: "https://www.ibm.com/training/it-support-professional-certificate" },
  { code: "IT Support", title: "Google IT Support Professional Certificate", issuer: "Google", category: "infrastructure", level: "Professional", featured: true, url: "https://grow.google/certificates/it-support/" },
  { code: "Network+", title: "CompTIA Network+", issuer: "CompTIA", category: "infrastructure", level: "Professional", url: "https://www.comptia.org/certifications/network" },
  { code: "Server+", title: "CompTIA Server+", issuer: "CompTIA", category: "infrastructure", level: "Professional", url: "https://www.comptia.org/certifications/server" },
  { code: "Cloud+", title: "CompTIA Cloud+", issuer: "CompTIA", category: "infrastructure", level: "Professional", url: "https://www.comptia.org/certifications/cloud" },
  { code: "AZ-800", title: "Windows Server Hybrid Administrator Associate", issuer: "Microsoft", category: "infrastructure", level: "Associate", url: LEARN + "windows-server-hybrid-administrator/" },
  { code: "CCST Net", title: "Cisco Certified Support Technician — Networking", issuer: "Cisco", category: "infrastructure", level: "Fundamentals", url: "https://www.netacad.com/cisco-certified-support-technician" },
  { code: "LFCA", title: "Linux Foundation Certified IT Associate", issuer: "Linux Foundation", category: "infrastructure", level: "Associate", url: "https://training.linuxfoundation.org/certification/linux-foundation-certified-it-associate-lfca/" },
  { code: "vSphere", title: "VMware vSphere Foundations", issuer: "VMware", category: "infrastructure", level: "Fundamentals", url: "https://www.vmware.com/learning/certification.html" },
  { code: "Linux+", title: "CompTIA Linux+", issuer: "CompTIA", category: "infrastructure", level: "Professional", url: "https://www.comptia.org/certifications/linux" },
  { code: "AZ-305", title: "Designing Microsoft Azure Infrastructure Solutions", issuer: "Microsoft", category: "infrastructure", level: "Associate", url: LEARN + "microsoft-azure-infrastructure-design/" },

  // ---- IA & CLOUD ----
  { code: "AI Foundations", title: "Red Hat AI Foundations", issuer: "Red Hat", category: "ai_cloud", level: "Fundamentals", featured: true, url: "https://www.redhat.com/en/services/training" },
  { code: "AI Fund.", title: "IBM Artificial Intelligence Fundamentals", issuer: "IBM", category: "ai_cloud", level: "Fundamentals", featured: true, url: "https://www.ibm.com/training/artificial-intelligence-fundamentals" },
  { code: "Cloud Sec", title: "Cloud Security Engineer Learning Path", issuer: "Datadog", category: "ai_cloud", level: "Professional", featured: true, url: "https://academy.datadoghq.com/" },
  { code: "LF Cloud", title: "Linux Foundation Cloud Engineer Bootcamp", issuer: "Linux Foundation", category: "ai_cloud", level: "Professional", featured: true, url: "https://training.linuxfoundation.org/" },
  { code: "CDL", title: "Google Cloud Digital Leader", issuer: "Google", category: "ai_cloud", level: "Fundamentals", url: "https://cloud.google.com/learn/certification/cloud-digital-leader" },
  { code: "Cyber Fund.", title: "IBM Cybersecurity Fundamentals", issuer: "IBM", category: "ai_cloud", level: "Fundamentals", url: "https://www.ibm.com/training/cybersecurity-fundamentals" },
  { code: "Cloud Fund.", title: "IBM Cloud Fundamentals", issuer: "IBM", category: "ai_cloud", level: "Fundamentals", url: "https://www.ibm.com/training/cloud-fundamentals" },
  { code: "Cyber Cert", title: "Google Cybersecurity Certificate", issuer: "Google", category: "ai_cloud", level: "Professional", url: "https://grow.google/certificates/cybersecurity/" },
  { code: "AI Eng.", title: "IBM AI Engineering Professional Certificate", issuer: "IBM", category: "ai_cloud", level: "Professional", url: "https://www.ibm.com/training/ai-engineering" },
  { code: "Cloud Core", title: "Google Cloud Fundamentals: Core Infrastructure", issuer: "Google", category: "ai_cloud", level: "Fundamentals", url: "https://cloud.google.com/learn/certification/cloud-engineer" },
  { code: "Cloud Eng.", title: "Datadog Cloud Engineer Learning Path", issuer: "Datadog", category: "ai_cloud", level: "Professional", url: "https://academy.datadoghq.com/" },
  { code: "RHCSA", title: "Red Hat Certified System Administrator", issuer: "Red Hat", category: "ai_cloud", level: "Associate", url: "https://www.redhat.com/en/services/certification/rhcsa" },
];

export const PROJECTS = [
  { title: "Sécurisation Microsoft 365", icon: "ShieldCheck", text: "Amélioration du Secure Score, déploiement MFA, séparation des comptes administrateurs et renforcement des accès conditionnels.", tags: ["Secure Score", "MFA", "Accès conditionnel", "Entra ID"] },
  { title: "Migration vers le Cloud", icon: "CloudUpload", text: "Déploiement et administration Microsoft 365 pour les utilisateurs.", tags: ["Microsoft 365", "Exchange Online", "Intune"] },
  { title: "Développement Web", icon: "Code2", text: "Création de sites modernes hébergés sur GitHub et Cloudflare Pages.", tags: ["GitHub", "Cloudflare Pages", "HTML/CSS"] },
  { title: "Infrastructure Réseau", icon: "Network", text: "Gestion de solutions Stormshield, Fortinet et réseaux sécurisés.", tags: ["Stormshield", "Fortinet", "VLAN", "VPN"] },
  { title: "Portfolio Personnel", icon: "Globe", text: "Création de vaib.cc avec technologies modernes.", tags: ["React", "Cloudflare", "SEO"] },
];

export const EXPERIENCE = {
  title: "Technicien Informatique & Cybersécurité",
  missions: [
    { title: "Administration Microsoft 365", text: "Gestion des tenants, licences, boîtes Exchange Online, Teams et SharePoint." },
    { title: "Gestion des identités", text: "Entra ID, MFA, accès conditionnel, séparation des comptes à privilèges." },
    { title: "Support utilisateurs", text: "Assistance de niveau 1 à 2, résolution d'incidents et accompagnement au changement." },
    { title: "Gestion des infrastructures", text: "Serveurs Windows, Active Directory, virtualisation, réseaux et équipements GTB." },
    { title: "Cybersécurité", text: "Durcissement, Defender, Secure Score, pare-feu Fortinet / Stormshield et approche Zero Trust." },
    { title: "Automatisation", text: "Scripts et processus automatisés pour fiabiliser l'administration et la supervision." },
  ],
};

export const STATS = [
  { value: 50, suffix: "+", label: "Certifications professionnelles" },
  { value: 5, suffix: "+", label: "Projets réalisés" },
  { value: 40, suffix: "+", label: "Technologies maîtrisées" },
  { value: 3, suffix: "+", label: "Années d'expérience" },
];