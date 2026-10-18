import { faqItems } from "@/data/faq";

export default function Faq() {
  return (
    <section className="py-5" id="faq">
      <div className="container">
        <h2 className="fw-bold text-center mb-2">Pertanyaan yang Sering Diajukan</h2>
        <p className="text-center text-muted mb-4">
          Klik salah satu pertanyaan untuk melihat jawabannya.
        </p>

        <div className="accordion faq-accordion mx-auto shadow-sm" id="faqAccordion">
          {faqItems.map((item) => (
            <div className="accordion-item" key={item.id}>
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${item.id}`}
                  aria-expanded="false"
                  aria-controls={item.id}
                >
                  {item.pertanyaan}
                </button>
              </h3>
              <div
                id={item.id}
                className="accordion-collapse collapse"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{item.jawaban}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}