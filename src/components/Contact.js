"use client";

import { useState } from "react";

export default function Contact() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [feedback, setFeedback] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const namaBersih = nama.trim();
    const emailBersih = email.trim();
    const pesanBersih = pesan.trim();
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (namaBersih === "" || emailBersih === "" || pesanBersih === "") {
      setFeedback({
        teks: "Mohon lengkapi semua kolom terlebih dahulu.",
        berhasil: false,
        id: Date.now(),
      });
      return;
    }

    if (!polaEmail.test(emailBersih)) {
      setFeedback({
        teks: "Format email belum benar, contoh: nama@email.com",
        berhasil: false,
        id: Date.now(),
      });
      return;
    }

    setFeedback({
      teks: `Terima kasih, ${namaBersih}! Pesan Anda sudah kami terima.`,
      berhasil: true,
      id: Date.now(),
    });
    setNama("");
    setEmail("");
    setPesan("");
  }

  return (
    <section className="py-5" id="kontak">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-5">
            <h2 className="fw-bold mb-3">Hubungi &amp; Pesan</h2>
            <p className="text-muted">
              Isi formulir berikut, tim kami akan segera menghubungi Anda kembali.
            </p>
            <p className="mb-2">
              <strong>Alamat:</strong> Jl. Melati No. 12, Bandung
            </p>
            <p className="mb-2">
              <strong>WhatsApp:</strong> 0812-3456-7890
            </p>
            <p className="mb-0">
              <strong>Jam Buka:</strong> Setiap hari, 08.00 - 21.00
            </p>
          </div>

          <div className="col-12 col-lg-7">
            <form
              className="bg-white p-4 rounded-4 shadow-sm"
              id="contactForm"
              noValidate
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label htmlFor="nama" className="form-label fw-semibold">
                  Nama
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nama"
                  name="nama"
                  placeholder="Nama lengkap Anda"
                  required
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="nama@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pesan" className="form-label fw-semibold">
                  Pesan
                </label>
                <textarea
                  className="form-control"
                  id="pesan"
                  name="pesan"
                  rows="4"
                  placeholder="Tuliskan pesanan atau pertanyaan Anda"
                  required
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                ></textarea>
                <div className="form-text text-end" id="charCount">
                  {pesan.length} karakter
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100 rounded-pill">
                Kirim Pesan
              </button>
              <div aria-live="polite">
                {feedback && (
                  <div
                    key={feedback.id}
                    className={`alert mt-3 mb-0 fade-in-item ${
                      feedback.berhasil ? "alert-success" : "alert-danger"
                    }`}
                    role="alert"
                  >
                    {feedback.teks}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}