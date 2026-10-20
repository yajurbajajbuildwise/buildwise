import Link from "next/link";

const pillars = [
  {
    n: "01",
    title: "Buildwise Global",
    copy: "Build careers beyond borders. Starting with the UAE Career Accelerator.",
    href: "/global"
  },
  {
    n: "02",
    title: "Buildwise Academy",
    copy: "Practical learning programs for modern careers, starting with BUILD.",
    href: "/academy"
  },
  {
    n: "03",
    title: "Buildwise Council",
    copy: "A curated global network of experienced leaders, builders and mentors.",
    href: "/buildwisecouncil"
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <div className="eyebrow">FOR THE AMBITIOUS & THE CURIOUS</div>
        <h1>Build Better.<br/><span>Think Wiser.</span></h1>
        <p className="lead">Buildwise helps ambitious people build better careers, products and themselves — using AI to move faster and human judgment to think deeper.</p>
        <div className="actions">
          <Link className="button" href="/global">Explore Buildwise Global</Link>
          <Link className="button ghost" href="/buildwisecouncil">Meet the Council</Link>
        </div>
        <div className="signal">HUMAN POTENTIAL × AI × WISDOM</div>
      </section>

      <section className="section shell">
        <div className="eyebrow">YOUR NEXT CHAPTER</div>
        <h2>Three ways to build.</h2>
        <div className="cards">
          {pillars.map((p) => (
            <Link href={p.href} className="card" key={p.title}>
              <span>{p.n}</span>
              <h3>{p.title}</h3>
              <p>{p.copy}</p>
              <b>Explore →</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="shell split">
          <div>
            <div className="eyebrow">ENERGY × CALM</div>
            <h2>Build with AI.<br/>Think wiser without it.</h2>
          </div>
          <div className="prose">
            <p>AI helps us research, create, prototype and execute faster.</p>
            <p>Clarity, curiosity, judgment and perspective still determine what is worth building — and why.</p>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="eyebrow">THE HUMAN BEHIND THE IDEA</div>
        <div className="split">
          <div>
            <h2>Built by a builder.<br/>For builders.</h2>
            <p className="lead smallLead">Yajur Bajaj — Product & AI leader, entrepreneur, mentor and Founder of Buildwise.</p>
            <Link className="button ghost" href="/founder">Read Yajur's story</Link>
          </div>
          <div className="stats">
            <div><strong>7+</strong><span>Years in product & building</span></div>
            <div><strong>15K+</strong><span>People mentored, taught or reached</span></div>
            <div><strong>0→1</strong><span>Products, startups and communities</span></div>
          </div>
        </div>
      </section>
    </main>
  );
}
