const faqs = [
  {
    question: "Apakah OMBAK itu MLM?",
    answer:
      "Tidak. OMBAK adalah program kemitraan referral. Komisi berasal dari referensi yang berhasil diproses, bukan dari merekrut orang baru.",
  },
  {
    question: "Apakah harus punya pengalaman?",
    answer:
      "Tidak harus. Program ini cocok untuk pemula karena mitra akan mendapat arahan mengenai cara memberikan referensi yang tepat.",
  },
  {
    question: "Apakah bisa dijalankan sambil bekerja?",
    answer:
      "Bisa. OMBAK dirancang fleksibel dan dapat dijalankan dari HP sesuai waktu yang Anda miliki.",
  },
  {
    question: "Bagaimana sistem komisi?",
    answer:
      "Komisi diberikan untuk referensi yang berhasil diproses sesuai ketentuan. Besaran dan prosesnya akan dijelaskan sebelum Anda bergabung.",
  },
  {
    question: "Apakah berlaku seluruh Indonesia?",
    answer:
      "Ya. OMBAK terbuka untuk mitra dari berbagai daerah di Indonesia selama komunikasi dan proses referensi dapat berjalan baik.",
  },
  {
    question: "Apakah ada pendampingan?",
    answer:
      "Ada. Mitra akan mendapat penjelasan program dan dibimbing agar memahami alur referensi dengan jelas.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div data-reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-500">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ocean-950 sm:text-4xl">
            Pertanyaan yang sering muncul sebelum bergabung.
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <details
              data-reveal
              key={item.question}
              className="group rounded-[1.5rem] border border-slate-100 bg-slate-50 p-6 shadow-sm open:bg-white open:shadow-premium"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-ocean-950">
                {item.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-ocean-700 shadow-sm transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
