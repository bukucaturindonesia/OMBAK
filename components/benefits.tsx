import {
  BadgePercent,
  Clock3,
  Compass,
  HandHeart,
  Home,
  MapPinned,
  Smartphone,
  UserRoundCheck,
} from "lucide-react";

const benefits = [
  { title: "Komisi hingga 10%", icon: BadgePercent },
  { title: "Bisa dijalankan dari HP", icon: Smartphone },
  { title: "Waktu fleksibel", icon: Clock3 },
  { title: "Area seluruh Indonesia", icon: MapPinned },
  { title: "Dibimbing langsung", icon: HandHeart },
  { title: "Cocok untuk pemula", icon: UserRoundCheck },
  { title: "Tidak perlu kantor", icon: Home },
  { title: "Bisa jadi penghasilan tambahan", icon: Compass },
];

export function Benefits() {
  return (
    <section id="program" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-500">
            Keuntungan bergabung
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ocean-950 sm:text-4xl">
            Ringan dijalankan, serius dalam proses, dan dirancang untuk relasi
            sehari-hari.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <article
              data-reveal
              key={item.title}
              className="rounded-[1.5rem] border border-white bg-white p-6 shadow-premium"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-950 text-gold-300">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-lg font-semibold leading-7 text-ocean-950">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
