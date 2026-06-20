import {
  Bike,
  BriefcaseBusiness,
  CarFront,
  Handshake,
  Network,
  UsersRound,
} from "lucide-react";

const opportunities = [
  {
    title: "Jual Beli Mobil",
    text: "Referensi kebutuhan mobil baru maupun bekas yang siap diproses.",
    icon: CarFront,
  },
  {
    title: "Jual Beli Motor",
    text: "Peluang dari relasi yang sedang mencari atau menjual motor.",
    icon: Bike,
  },
  {
    title: "Referensi Kendaraan",
    text: "Arahkan informasi kendaraan kepada tim yang membantu proses.",
    icon: Handshake,
  },
  {
    title: "Relasi yang Membutuhkan Solusi",
    text: "Bantu relasi menemukan jalur yang tepat lewat komunikasi awal.",
    icon: UsersRound,
  },
  {
    title: "Jaringan Bisnis",
    text: "Manfaatkan hubungan bisnis untuk membuka peluang baru.",
    icon: Network,
  },
  {
    title: "Peluang Kemitraan",
    text: "Bangun kolaborasi yang bisa berkembang dari satu referensi.",
    icon: BriefcaseBusiness,
  },
];

export function Opportunities() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div data-reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-500">
              Peluang yang bisa direferensikan
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ocean-950 sm:text-4xl">
              Dari obrolan sehari-hari menjadi peluang yang bisa ditindaklanjuti.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-slate-600">
            Fokus pada kebutuhan nyata dari relasi, lalu prosesnya dibantu
            sesuai ketentuan OMBAK.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((item) => (
            <article
              data-reveal
              key={item.title}
              className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-premium transition hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-950 text-gold-300">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-ocean-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
