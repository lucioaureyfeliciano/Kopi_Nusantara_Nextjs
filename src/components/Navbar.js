"use client";

const links = [
  { href: "#beranda", label: "Beranda" },
  { href: "#menu", label: "Menu" },
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  async function tutupMenu() {
    const { Collapse } = await import("bootstrap");
    const elemen = document.getElementById("navMenu");
    const instance = Collapse.getInstance(elemen);
    if (instance) {
      instance.hide();
    }
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm">
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center gap-2 fw-bold"
          href="#beranda"
        >
          <span className="logo-icon rounded-circle d-flex align-items-center justify-content-center">
            ☕
          </span>
          <span>
            Kopi <span className="logo-accent">Nusantara</span>
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Buka menu navigasi"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto gap-lg-3 text-center py-2 py-lg-0">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link" href={link.href} onClick={tutupMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}