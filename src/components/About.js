export default function About() {
  return (
    <section className="about-section py-5" id="tentang">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-5 col-lg-4 text-center">
            <img
              src="/images/biji-kopi.jpeg"
              className="img-fluid rounded-4 shadow-sm about-img"
              alt="Ilustrasi biji kopi Nusantara"
            />
          </div>

          <div className="col-12 col-md-7 col-lg-8">
            <h2 className="fw-bold mb-3">Tentang Kopi Nusantara</h2>
            <p className="text-muted mb-4">
              Berawal dari dapur rumahan di tahun 2019, Kopi Nusantara tumbuh
              dari kecintaan terhadap biji kopi lokal Indonesia - dari Gayo,
              Toraja, hingga Kintamani. Kami percaya secangkir kopi terbaik
              lahir dari proses yang jujur dan bahan yang berkualitas.
            </p>
            <ul className="list-unstyled mb-0">
              <li className="d-flex align-items-center gap-2 mb-2">
                <span>🌱</span> Biji kopi pilihan langsung dari petani lokal
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <span>🏠</span> Diseduh segar setiap hari di dapur rumahan kami
              </li>
              <li className="d-flex align-items-center gap-2">
                <span>📱</span> Bisa dipesan kapan saja lewat WhatsApp
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}