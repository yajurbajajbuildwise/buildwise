const build = [
  ["B", "Believe", "Mindset, confidence and clarity"],
  ["U", "Upgrade", "Resume, LinkedIn and positioning"],
  ["I", "Illustrate", "Portfolio, product thinking and impact"],
  ["L", "Leverage", "AI tools and strategic capability"],
  ["D", "Discover", "Opportunities, networking and execution"]
];

export default function AcademyPage() {
  return (
    <main className="shell page">
      <div className="eyebrow">BUILDWISE ACADEMY</div>
      <h1>Learn. Build. Apply.</h1>
      <p className="lead">Structured learning programs designed around practical outcomes, not passive consumption.</p>
      <section className="section flush">
        <h2>BUILD Framework</h2>
        <div className="buildGrid">
          {build.map(([letter,title,copy]) => (
            <div className="buildStep" key={letter}>
              <strong>{letter}</strong><h3>{title}</h3><p>{copy}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
