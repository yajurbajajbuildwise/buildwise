import Link from "next/link";

export default function GlobalPage() {
  return (
    <main className="shell page">
      <div className="eyebrow">BUILDWISE GLOBAL</div>
      <h1>Build a career beyond borders.</h1>
      <p className="lead">Practical guidance, tools and programs for ambitious professionals exploring global career opportunities.</p>
      <div className="feature">
        <div>
          <div className="eyebrow">CURRENT FOCUS</div>
          <h2>UAE Career Accelerator</h2>
          <p>Position yourself for the UAE market with stronger career clarity, CV and LinkedIn positioning, targeted outreach, interview preparation, salary research and relocation readiness.</p>
          <Link className="button" href="/global/uae">Explore UAE</Link>
        </div>
        <div className="flagPanel">🇦🇪</div>
      </div>
    </main>
  );
}
