"use client";

import { useState } from "react";

export default function MenuCard({ item }) {
  const [disukai, setDisukai] = useState(false);
  const [jumlah, setJumlah] = useState(item.suka);

  function toggleSuka() {
    if (disukai) {
      setDisukai(false);
      setJumlah(jumlah - 1);
    } else {
      setDisukai(true);
      setJumlah(jumlah + 1);
    }
  }

  return (
    <div className="col-12 col-md-6 col-lg-3 fade-in-item">
      <article className="card menu-card h-100 border-0 rounded-4 shadow-sm">
        <img
          src={item.gambar}
          className="card-img-top"
          alt={`Ilustrasi ${item.nama}`}
        />
        <div className="card-body d-flex flex-column">
          <span className="badge rounded-pill badge-kopi align-self-start mb-2">
            {item.label}
          </span>
          <h3 className="card-title h5 fw-bold">{item.nama}</h3>
          <p className="card-text text-muted small">{item.deskripsi}</p>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <span className="price fw-bold">{item.harga}</span>
            <button
              className={`btn btn-sm rounded-pill like-btn${disukai ? " liked" : ""}`}
              type="button"
              aria-label={`Sukai ${item.nama}`}
              onClick={toggleSuka}
            >
              <span className="heart">{disukai ? "♥" : "♡"}</span>{" "}
              <span className="like-count">{jumlah}</span>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}