"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [tampil, setTampil] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setTampil(window.scrollY > 300);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function kembaliKeAtas() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      className={`btn back-to-top position-fixed bottom-0 end-0 m-3 m-lg-4 rounded-circle shadow${
        tampil ? " show" : ""
      }`}
      id="backToTop"
      type="button"
      aria-label="Kembali ke atas"
      onClick={kembaliKeAtas}
    >
      ▲
    </button>
  );
}