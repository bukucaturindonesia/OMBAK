import { Handshake, Network, ShieldCheck } from "lucide-react";
import { assetPath } from "@/lib/site";

const proofPoints = [
  {
    icon: Network,
    title: "Referral yang jelas",
    text: "Fokus pada referensi yang relevan, bukan merekrut orang baru.",
  },
  {
    icon: ShieldCheck,
    title: "Transparan",
    text: "Komisi mengikuti proses dan ketentuan yang disepakati.",
  },
  {
    icon: Handshake,
    title: "Kolaboratif",
    text: "Mitra dibimbing agar relasi bisa menjadi peluang nyata.",
  },
];

export function About() {
  return (
    <section id="tentang" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div data-reveal className="space-y-8">
          <div className="space-y-4">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-500">
              Tentang OMBAK
            </span>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ocean-950 sm:text-4xl">
              Jaringan relasi yang dibuat sederhana, transparan, dan saling
              menguntungkan.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              OMBAK adalah jaringan relasi dan kemitraan yang dibangun oleh Om
              Bakri untuk membantu orang memanfaatkan relasi menjadi peluang
              penghasilan tambahan melalui sistem referral yang sederhana,
              transparan, dan saling menguntungkan.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {proofPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5 shadow-sm"
              >
                <item.icon className="mb-4 h-6 w-6 text-gold-500" aria-hidden />
                <h3 className="text-base font-semibold text-ocean-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          data-reveal
          className="relative overflow-hidden rounded-[2rem] bg-ocean-950 p-6 text-white shadow-premium sm:p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(214,170,69,0.28),transparent_34%),radial-gradient(circle_at_18%_78%,rgba(37,211,102,0.18),transparent_30%)]" />
          <div className="relative">
            <div className="flex items-center gap-5">
              <img
                src={assetPath("/om-bakri-placeholder.svg")}
                alt="Placeholder foto profil Om Bakri"
                className="h-24 w-24 rounded-full border-4 border-white/15 object-cover shadow-glow"
              />
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-300">
                  Personal Branding
                </span>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Siapa Om Bakri?
                </h2>
              </div>
            </div>
            <p className="mt-8 text-base leading-8 text-white/78 sm:text-lg">
              Om Bakri membangun OMBAK sebagai wadah kolaborasi untuk
              memperluas jaringan, membantu proses referensi, dan membuka
              peluang penghasilan tambahan bagi mitra di berbagai daerah.
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-white/12 bg-white/8 p-5 backdrop-blur">
              <p className="text-sm font-medium leading-7 text-white/80">
                OMBAK bukan MLM, bukan perusahaan pembiayaan, dan bukan layanan
                pemberi pinjaman. OMBAK adalah jaringan kemitraan referral.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
