"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="siteHeader">
      <div className="shell nav">
        <Link href="/" className="brand">Buildwise</Link>
        <nav className="navLinks" aria-label="Primary navigation">
          <Link href="/global">Global</Link>
          <Link href="/academy">Academy</Link>
          <Link href="/buildwisecouncil">Council</Link>
          <Link href="/founder">Founder</Link>
        </nav>
        <Link className="button small" href="/global/uae">Explore UAE</Link>
      </div>
    </header>
  );
}
