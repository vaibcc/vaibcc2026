import React from "react";

export default function Lab() {
  return (
    <div className="min-h-screen bg-[#050505] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-mono text-sm">
            VAIB.CC / LAB
          </span>

          <h1 className="text-5xl font-bold mt-4">
            My Technical Laboratory
          </h1>

          <p className="text-zinc-400 max-w-3xl mx-auto mt-6">
            My personal environment for learning, testing and building real
            infrastructure, cloud solutions, AI systems and cybersecurity
            projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-bold mb-4">
              ☁️ Microsoft 365 Lab
            </h2>
            <ul className="space-y-2 text-zinc-300">
              <li>✅ SC-300</li>
              <li>✅ MS-900</li>
              <li>✅ Conditional Access</li>
              <li>✅ MFA Deployments</li>
              <li>✅ Entra ID</li>
              <li>✅ Secure Score Improvements</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-bold mb-4">
              🌐 Cloudflare Lab
            </h2>
            <ul className="space-y-2 text-zinc-300">
              <li>✅ Cloudflare Pages</li>
              <li>✅ DNS Management</li>
              <li>✅ Custom Domains</li>
              <li>✅ SSL & TLS</li>
              <li>✅ GitHub Deployments</li>
              <li>✅ Website Migrations</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-bold mb-4">
              🐳 Docker Lab
            </h2>
            <ul className="space-y-2 text-zinc-300">
              <li>✅ Docker</li>
              <li>✅ Ubuntu Server</li>
              <li>✅ WordPress</li>
              <li>✅ Reverse Proxy</li>
              <li>✅ Self Hosted Services</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-bold mb-4">
              🏠 Home Lab
            </h2>
            <ul className="space-y-2 text-zinc-300">
              <li>✅ Dedicated Home Lab</li>
              <li>✅ Local Infrastructure</li>
              <li>✅ Network Segmentation</li>
              <li>✅ Virtual Machines</li>
              <li>✅ Infrastructure Testing</li>
              <li>✅ Monitoring & Administration</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-bold mb-4">
              🤖 Self Hosted AI
            </h2>
            <ul className="space-y-2 text-zinc-300">
              <li>✅ Local AI Environment</li>
              <li>✅ AI Testing</li>
              <li>✅ Prompt Engineering</li>
              <li>✅ AI Automation</li>
              <li>✅ Productivity Workflows</li>
              <li>✅ Personal AI Assistant</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-bold mb-4">
              🔐 Security Lab
            </h2>
            <ul className="space-y-2 text-zinc-300">
              <li>✅ Stormshield</li>
              <li>✅ Network Security</li>
              <li>✅ DNS Security</li>
              <li>✅ Microsoft Security</li>
              <li>✅ Identity Protection</li>
            </ul>
          </div>

        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">
            Featured Projects
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="border border-white/10 rounded-xl p-6">
              <h3 className="font-bold text-lg">vaib.cc</h3>
              <p className="text-zinc-400 mt-2">
                Personal portfolio migrated from Base44 to GitHub and Cloudflare.
              </p>
            </div>

            <div className="border border-white/10 rounded-xl p-6">
              <h3 className="font-bold text-lg">guerande5.com</h3>
              <p className="text-zinc-400 mt-2">
                Team website managed through GitHub and Cloudflare.
              </p>
            </div>

            <div className="border border-white/10 rounded-xl p-6">
              <h3 className="font-bold text-lg">Self Hosted AI</h3>
              <p className="text-zinc-400 mt-2">
                Personal AI platform for experimentation, learning and automation.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
