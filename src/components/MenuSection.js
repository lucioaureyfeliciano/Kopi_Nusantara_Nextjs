"use client";

import { useState } from "react";
import MenuCard from "./MenuCard";
import { menuItems, filters } from "@/data/menu";

export default function MenuSection() {
  const [filterAktif, setFilterAktif] = useState("semua");

  const itemTampil = menuItems.filter(
    (item) => filterAktif === "semua" || item.kategori === filterAktif
  );

  return (
    <section className="py-5" id="menu">
      <div className="container">
        <h2 className="fw-bold text-center mb-2">Menu Favorit Kami</h2>
        <p className="text-center text-muted mb-4">
          Empat pilihan yang paling sering dipesan pelanggan kami.
        </p>

        <div
          className="d-flex flex-wrap justify-content-center gap-2 mb-4"
          id="menuFilter"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              className={`btn btn-outline-primary rounded-pill px-4 filter-btn${
                filterAktif === f.key ? " active" : ""
              }`}
              type="button"
              onClick={() => setFilterAktif(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div
          className={`row g-4${filterAktif === "panas" ? " justify-content-end" : ""}`}
          id="menuGrid"
        >
          {itemTampil.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}