import {
  CheckCircle2,
  ClipboardList,
  Handshake,
  MessageCircle,
  Send,
  UserPlus,
} from "lucide-react";

const steps = [
  {
    title: "Hubungi Om Bakri",
    text: "Mulai percakapan untuk mengenal OMBAK dan tujuan bergabung.",
    icon: MessageCircle,
  },
  {
    title: "Dapatkan penjelasan program",
    text: "Pelajari alur referral, ketentuan, dan cara memberikan referensi.",
    icon: ClipboardList,
  },
  {
    title: "Bergabung menjadi mitra",
    text: "Masuk ke jaringan kemitraan referral OMBAK.",
    icon: UserPlus,
  },
  {
    title: "Berikan referensi",
    text: "Sampaikan relasi atau peluang yang relevan untuk dibantu proses.",
    icon: Send,
  },
  {
    title: "Proses dibantu",
    text: "Tim membantu menindaklanjuti referensi sesuai kebutuhan.",
    icon: Handshake,
  },
  {
    title: "Komisi sesuai ketentuan",
    text: "Jika berhasil, mitra mendapatkan komisi sesuai ketentuan.",
    icon: CheckCircle2,
  },
];

export function ProcessTimeline() {
  return (
    <section id="cara-kerja" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-500">
            Cara kerja
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ocean-950 sm:text-4xl">
            Alur sederhana dari konsultasi sampai referensi berhasil diproses.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              data-reveal
              key={step.title}
              className="relative overflow-hidden rounded-[1.5rem] border border-white bg-white p-6 shadow-premium"
            >
              <span className="absolute right-5 top-4 text-6xl font-black text-slate-100">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-950 text-gold-300">
                <step.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="relative mt-5 text-xl font-semibold text-ocean-950">
                {step.title}
              </h3>
              <p className="relative mt-3 text-sm leading-7 text-slate-600">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
