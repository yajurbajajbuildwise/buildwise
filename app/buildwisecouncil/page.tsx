const members = [
  { name: "Nonika Bajaj", role: "Senior Director · Program Management · Ex-Hitachi", location: "Canada 🇨🇦", tags: ["Leadership","Program Management","Enterprise"] },
  { name: "Siddharth Malhotra", role: "Senior Manager – Projects @ Cognizant", location: "Australia 🇦🇺", tags: ["Technology","Salesforce","Delivery"] },
  { name: "Pushkar Rattana", role: "Founder @ Whim · Engineering Leader", location: "Canada 🇨🇦", tags: ["Startups","Engineering","Product"] },
  { name: "Deepak Gandhi", role: "Director · Strategy & Business Leadership", location: "Global", tags: ["Strategy","Leadership","Growth"] }
];

export default function CouncilPage() {
  return (
    <main className="shell page">
      <div className="eyebrow">BUILDWISE COUNCIL</div>
      <h1>Experience worth sharing.</h1>
      <p className="lead">An invite-only global network of accomplished leaders, founders, mentors and domain experts helping ambitious people make better career and life decisions.</p>
      <div className="memberGrid">
        {members.map(m => (
          <article className="memberCard" key={m.name}>
            <div className="avatar">{m.name.split(" ").map(x=>x[0]).join("")}</div>
            <div className="location">{m.location}</div>
            <h3>{m.name}</h3>
            <p>{m.role}</p>
            <div className="tags">{m.tags.map(t=><span key={t}>{t}</span>)}</div>
          </article>
        ))}
      </div>
      <div className="callout">
        <h2>Membership is curated and by invitation.</h2>
        <p>Council members may contribute through mentoring, workshops, content, industry perspective, introductions and advisory support.</p>
      </div>
    </main>
  );
}
