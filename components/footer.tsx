import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, navItems } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ocean-950 px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <a href="#beranda" className="inline-flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-black tracking-tight text-ocean-950">
              OM
            </span>
            <span>
              <span className="block text-xl font-black tracking-tight">
                OMBAK
              </span>
              <span className="block text-xs font-medium uppercase tracking-[0.2em] text-gold-300">
                by Om Bakri
              </span>
            </span>
          </a>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/68">
            OMBAK adalah jaringan kemitraan referral, bukan perusahaan
            pembiayaan dan bukan penyedia pinjaman.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_auto]">
          <nav className="grid grid-cols-2 gap-3 text-sm text-white/72 sm:grid-cols-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-gold-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-start gap-3">
            <a
              href={buildWhatsAppUrl("Halo Om Bakri, saya ingin mengenal OMBAK.")}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp OMBAK"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-whatsapp hover:text-ocean-950"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram OMBAK"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-ocean-950"
            >
              <Instagram className="h-5 w-5" aria-hidden />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook OMBAK"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-ocean-950"
            >
              <Facebook className="h-5 w-5" aria-hidden />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/52 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 OMBAK. All Rights Reserved.</p>
        <p>Jaringan kemitraan referral seluruh Indonesia.</p>
      </div>
    </footer>
  );
}
