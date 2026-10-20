import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footerGrid">
        <div>
          <div className="brand">Buildwise</div>
          <p>Build Better. Think Wiser.</p>
        </div>
        <div className="footerLinks">
          <Link href="/global">Global</Link>
          <Link href="/academy">Academy</Link>
          <Link href="/buildwisecouncil">Council</Link>
          <Link href="/founder">Founder</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
