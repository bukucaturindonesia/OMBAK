import { ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="bg-slate-50 px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div
        data-reveal
        className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ocean-radial px-6 py-14 text-center text-white shadow-premium sm:px-10"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300">
          Mulai hari ini
        </span>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
          Siap Mengubah Relasi Menjadi Peluang?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
          Mulai dari jaringan yang Anda miliki hari ini bersama OMBAK by Om
          Bakri.
        </p>
        <a
          href={buildWhatsAppUrl(
            "Halo Om Bakri, saya tertarik bergabung menjadi mitra OMBAK.",
          )}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 text-sm font-semibold text-ocean-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-[#2fe475]"
        >
          Gabung Sekarang via WhatsApp
          <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
