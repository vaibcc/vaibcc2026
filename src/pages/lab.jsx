import React from "react";
import {
  Cloud,
  Shield,
  Server,
  Globe,
  Github,
  Brain,
  Home,
} from "lucide-react";

export default function Lab() {
  const sections = [
    {
      icon: Cloud,
      title: "Cloud & Microsoft 365",
      items: [
        "Microsoft Entra ID",
        "SC-300 Identity & Access Administrator",
        "MS-900 Microsoft 365 Fundamentals",
        "Conditional Access",
        "Multi-Factor Authentication",
        "Secure Score Optimization",
      ],
    },
    {
      icon: Globe,
      title: "Cloudflare & Web Technologies",
      items: [
        "Cloudflare Pages",
        "DNS Management",
        "Custom Domains",
        "SSL/TLS",
        "GitHub Deployments",
        "Website Migrations",
      ],
    },
    {
      icon: Server,
      title: "Infrastructure & Docker",
      items: [
        "Ubuntu Server",
        "Docker",
        "WordPress Hosting",
        "Container Management",
        "Reverse Proxy",
        "Self-Hosted Services",
      ],
    },
    {
      icon: Shield,
      title: "Networking & Security",
      items: [
        "Stormshield",
        "Microsoft Security",
        "VLAN Configuration",
        "Alcatel Switches",
        "DNS Management",
        "Network Troubleshooting",
      ],
    },
    {
      icon: Home,
      title: "Home Lab",
      items: [
        "Personal Server Infrastructure",
        "Virtual Machines",
        "Docker Environment",
        "Cloudflare Integration",
        "Monitoring & Testing",
        "Network Experiments",
      ],
    },
    {
      icon: Brain,
      title: "AI Laboratory",
      items: [
        "Self-Hosted AI",
        "Local LLM Testing",
        "Prompt Engineering",
        "Automation Workflows",
        "AI Productivity Tools",
        "Knowledge Management",
      ],
    },
  ];

  return (
    <section id="lab" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-mono text-sm">
            VAIB.CC / LAB
          </span>

          <h2 className="mt-4 text-5xl font-bold text-white">
            My Technical Laboratory
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-zinc-400 text-lg">
            A showcase of my infrastructure, projects, home lab environment,
            self-hosted AI experiments, cybersecurity initiatives and Microsoft
            365 expertise.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">
                    {section.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-zinc-300"
                    >
                      <span className="text-green-400">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Featured Projects
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-black/30 p-6">
              <h4 className="text-white font-semibold mb-2">vaib.cc</h4>
              <p className="text-zinc-400 text-sm">
                Personal portfolio migrated from Base44 to GitHub and Cloudflare.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-6">
              <h4 className="text-white font-semibold mb-2">guerande5.com</h4>
              <p className="text-zinc-400 text-sm">
                Official team website hosted on Cloudflare with GitHub deployment.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-6">
              <h4 className="text-white font-semibold mb-2">Home Lab</h4>
              <p className="text-zinc-400 text-sm">
                Personal infrastructure used for testing servers, networking,
                Microsoft 365 and Docker projects.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-6">
              <h4 className="text-white font-semibold mb-2">
                Self-Hosted AI
              </h4>
              <p className="text-zinc-400 text-sm">
                AI experimentation platform for local models, automation and
                productivity workflows.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 text-center">
          <Github className="mx-auto mb-4 h-10 w-10 text-blue-400" />

          <p className="max-w-3xl mx-auto text-zinc-300 text-lg">
            I enjoy building, testing and learning continuously. From Microsoft
            365 administration and cybersecurity projects to a complete home lab
            and self-hosted AI environment, this laboratory represents my
            passion for technology and continuous improvement.
          </p>
        </div>
      </div>
    </section>
  );
}
