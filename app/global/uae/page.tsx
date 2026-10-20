export default function UAEPage() {
  const items = [
    "Career clarity & role targeting",
    "Resume & LinkedIn positioning",
    "Portfolio & proof of impact",
    "AI-enabled job search workflows",
    "Networking & recruiter outreach",
    "Interview & salary preparation",
    "UAE relocation basics"
  ];
  return (
    <main className="shell page">
      <div className="eyebrow">BUILDWISE GLOBAL · UAE</div>
      <h1>UAE Career Accelerator</h1>
      <p className="lead">A practical system for professionals who want to explore and compete for strong opportunities in the UAE.</p>
      <div className="listGrid">
        {items.map((x, i) => <div className="listItem" key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}</div>)}
      </div>
      <div className="callout">
        <h2>Start with clarity.</h2>
        <p>No guarantees. No shortcuts. Build a stronger profile, a smarter search strategy and a repeatable execution system.</p>
      </div>
    </main>
  );
}
