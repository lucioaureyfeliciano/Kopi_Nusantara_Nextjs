export default function Hero() {
  return (
    <section className="hero py-5" id="beranda">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-7 text-center text-lg-start">
            <p className="eyebrow fw-semibold mb-2">
              Sejak 2019 - Diracik di Rumah, Disajikan dengan Hati
            </p>
            <h1 className="fw-bold mb-3">Secangkir Kehangatan Khas Nusantara</h1>
            <p className="text-muted mb-4">
              Kopi Nusantara menghadirkan biji kopi pilihan dari pelosok
              Indonesia, diseduh langsung setiap hari tanpa bahan pengawet.
              Nikmati dari layar HP, tablet, atau laptop Anda - tampilan kami
              menyesuaikan di mana pun Anda membuka halaman ini.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center justify-content-lg-start">
              <a href="#menu" className="btn btn-primary btn-lg rounded-pill px-4">
                Lihat Menu
              </a>
              <a
                href="#kontak"
                className="btn btn-outline-primary btn-lg rounded-pill px-4"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-5 text-center">
            <img
              src="/images/cangkir-kopi.jpeg"
              className="img-fluid rounded-4 shadow hero-img"
              alt="Ilustrasi cangkir Kopi Nusantara"
            />
          </div>
        </div>
      </div>
    </section>
  );
}