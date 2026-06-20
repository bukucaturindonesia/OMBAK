import {
  ArrowRight,
  BadgeCheck,
  CarFront,
  CircleDollarSign,
  MessageCircle,
  Network,
  TrendingUp,
} from "lucide-react";
import { assetPath, buildWhatsAppUrl } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative isolate overflow-hidden bg-ocean-radial pt-28 text-white sm:pt-32"
    >
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 sm:px-6 sm:pb-24 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div data-reveal className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-medium text-gold-300 shadow-sm backdrop-blur">
            <BadgeCheck className="h-4 w-4" aria-hidden />
            Jaringan Kemitraan Referral
          </div>
          <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Punya Relasi? Jadikan Peluang.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
            Bergabung bersama OMBAK dan dapatkan peluang penghasilan tambahan
            melalui relasi, referensi, jual beli kendaraan, dan kolaborasi yang
            saling menguntungkan di seluruh Indonesia.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#minat"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold-400 px-6 text-sm font-semibold text-ocean-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-gold-300"
            >
              Gabung Menjadi Mitra
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={buildWhatsAppUrl(
                "Halo Om Bakri, saya ingin konsultasi mengenai program kemitraan referral OMBAK.",
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/16 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-ocean-950"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Konsultasi WhatsApp
            </a>
          </div>
        </div>

        <div data-reveal className="relative z-10">
          <div className="relative mx-auto max-w-xl overflow-hidden rounded-[2rem] border border-white/12 bg-white/10 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-white p-5 text-ocean-950 shadow-premium">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={assetPath("/ombak-logo-placeholder.svg")}
                    alt="Placeholder logo OMBAK"
                    className="h-12 w-12 rounded-2xl"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      OMBAK
                    </p>
                    <p className="text-lg font-black tracking-tight">
                      Referral Network
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-whatsapp/12 px-3 py-1 text-xs font-bold text-emerald-700">
                  Aktif
                </span>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-3">
                {[
                  { label: "Relasi", icon: Network },
                  { label: "Kendaraan", icon: CarFront },
                  { label: "Peluang", icon: TrendingUp },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-slate-50 p-4 text-center"
                  >
                    <item.icon
                      className="mx-auto h-6 w-6 text-ocean-700"
                      aria-hidden
                    />
                    <p className="mt-3 text-xs font-semibold text-slate-600">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative mt-7 h-52 overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-ocean-950 via-ocean-800 to-ocean-600">
                <div className="absolute left-8 top-8 h-4 w-4 rounded-full bg-gold-300 shadow-glow" />
                <div className="absolute right-12 top-10 h-5 w-5 rounded-full bg-whatsapp shadow-[0_0_36px_rgba(37,211,102,0.58)]" />
                <div className="absolute bottom-10 left-12 h-5 w-5 rounded-full bg-white" />
                <div className="absolute bottom-12 right-16 h-4 w-4 rounded-full bg-gold-400" />
                <div className="absolute left-[15%] top-[26%] h-px w-[58%] rotate-6 bg-white/24" />
                <div className="absolute left-[21%] top-[33%] h-px w-[48%] rotate-[34deg] bg-white/24" />
                <div className="absolute left-[30%] bottom-[26%] h-px w-[45%] -rotate-[16deg] bg-white/24" />
                <div className="absolute bottom-5 right-5 rounded-2xl border border-white/14 bg-white/12 p-4 text-white backdrop-blur">
                  <CircleDollarSign className="h-6 w-6 text-gold-300" />
                  <p className="mt-2 text-sm font-semibold">Komisi referral</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
