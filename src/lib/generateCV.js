import { PROFILE, EXPERTISE, SKILLS, CERTS, PROJECTS, EXPERIENCE } from "@/lib/portfolioData";

export async function generateCV() {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const W = 210;
  let y = 0;

  doc.setFillColor(5, 5, 5);
  doc.rect(0, 0, W, 46, "F");
  doc.setFillColor(0, 120, 212);
  doc.rect(0, 46, W, 1.5, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.text(PROFILE.name, 18, 22);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(161, 161, 170);
  doc.text(doc.splitTextToSize(PROFILE.subtitle, W - 36), 18, 30);
  doc.setTextColor(108, 184, 246);
  doc.text(`${PROFILE.location}  ·  ${PROFILE.email}  ·  vaib.cc`, 18, 40);
  y = 58;

  const section = (title) => {
    if (y > 265) { doc.addPage(); y = 20; }
    doc.setTextColor(0, 120, 212);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(title.toUpperCase(), 18, y);
    doc.setDrawColor(220, 220, 220);
    doc.line(18, y + 2, W - 18, y + 2);
    y += 9;
  };
  const para = (text, size = 10, color = [40, 40, 40]) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, W - 36);
    doc.text(lines, 18, y);
    y += lines.length * (size * 0.45) + 2;
  };

  section("Profil");
  para(PROFILE.pitch);
  para("Expérience en : " + EXPERTISE.join(", ") + ".", 9.5, [90, 90, 90]);
  y += 3;

  section("Expérience");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(10, 10, 10);
  doc.text(EXPERIENCE.title, 18, y);
  y += 6;
  EXPERIENCE.missions.forEach((m) => para(`•  ${m.title} — ${m.text}`, 9.5));
  y += 3;

  section("Certifications Microsoft");
  CERTS.forEach((c) => para(`•  Microsoft Certified: ${c.title} (${c.code})`, 9.5));
  y += 3;

  section("Compétences");
  SKILLS.forEach((s) => para(`${s.category} : ${s.items.map((i) => i[0]).join(", ")}`, 9.5));
  y += 3;

  section("Projets");
  PROJECTS.forEach((p) => para(`•  ${p.title} — ${p.text}`, 9.5));

  doc.save("CV-Vaibhav-Kamra.pdf");
}