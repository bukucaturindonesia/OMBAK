"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site";

type FormState = {
  name: string;
  whatsapp: string;
  city: string;
  job: string;
  reason: string;
};

const initialState: FormState = {
  name: "",
  whatsapp: "",
  city: "",
  job: "",
  reason: "",
};

export function InterestForm() {
  const [form, setForm] = useState<FormState>(initialState);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = `Halo Om Bakri, saya tertarik bergabung menjadi mitra OMBAK. Nama saya ${form.name}, domisili ${form.city}, pekerjaan ${form.job}.`;
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="minat"
      className="relative overflow-hidden bg-ocean-950 py-20 text-white sm:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(214,170,69,0.22),transparent_32%),radial-gradient(circle_at_88%_78%,rgba(37,211,102,0.15),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
        <div data-reveal className="self-center">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300">
            Hubungi Om Bakri
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Isi minat bergabung, lalu lanjutkan percakapan via WhatsApp.
          </h2>
          <p className="mt-5 text-base leading-8 text-white/72 sm:text-lg">
            Dapatkan penjelasan program, alur referensi, dan ketentuan komisi
            sebelum mulai menjadi mitra OMBAK.
          </p>
          <div className="mt-8 flex items-center gap-3 rounded-[1.5rem] border border-white/12 bg-white/8 p-5">
            <MessageCircle className="h-6 w-6 shrink-0 text-whatsapp" />
            <p className="text-sm leading-6 text-white/74">
              Data tidak disimpan di website. Tombol hanya membuat pesan
              otomatis ke WhatsApp.
            </p>
          </div>
        </div>

        <form
          data-reveal
          onSubmit={handleSubmit}
          className="rounded-[2rem] border border-white/12 bg-white p-5 text-ocean-950 shadow-premium sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">
                Nama lengkap
              </span>
              <input
                required
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="min-h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-gold-500 focus:bg-white focus:ring-4 focus:ring-gold-500/10"
                placeholder="Nama Anda"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">
                Nomor WhatsApp
              </span>
              <input
                required
                inputMode="tel"
                value={form.whatsapp}
                onChange={(event) =>
                  updateField("whatsapp", event.target.value)
                }
                className="min-h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-gold-500 focus:bg-white focus:ring-4 focus:ring-gold-500/10"
                placeholder="08xxxxxxxxxx"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">
                Kota domisili
              </span>
              <input
                required
                value={form.city}
                onChange={(event) => updateField("city", event.target.value)}
                className="min-h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-gold-500 focus:bg-white focus:ring-4 focus:ring-gold-500/10"
                placeholder="Kota Anda"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">
                Pekerjaan saat ini
              </span>
              <input
                required
                value={form.job}
                onChange={(event) => updateField("job", event.target.value)}
                className="min-h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition focus:border-gold-500 focus:bg-white focus:ring-4 focus:ring-gold-500/10"
                placeholder="Pekerjaan Anda"
              />
            </label>
            <label className="space-y-2 sm:col-span-2">
              <span className="text-sm font-semibold text-slate-700">
                Tertarik bergabung karena apa?
              </span>
              <textarea
                required
                value={form.reason}
                onChange={(event) => updateField("reason", event.target.value)}
                className="min-h-32 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-gold-500 focus:bg-white focus:ring-4 focus:ring-gold-500/10"
                placeholder="Ceritakan singkat alasan Anda"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 text-sm font-bold text-ocean-950 shadow-[0_18px_45px_rgba(37,211,102,0.24)] transition hover:-translate-y-0.5 hover:bg-[#2fe475]"
          >
            Kirim Minat via WhatsApp
            <Send className="h-4 w-4" aria-hidden />
          </button>
        </form>
      </div>
    </section>
  );
}
