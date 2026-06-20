import { ArrowRight, BadgeCheck, MessageCircle } from "lucide-react";
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
                "Halo, saya ingin konsultasi mengenai program kemitraan referral OMBAK.",
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
            <img
              src={assetPath("/hero-professional.jpg")}
              alt="Foto profesional OMBAK"
              className="h-[520px] w-full rounded-[1.5rem] object-cover object-center shadow-premium"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
