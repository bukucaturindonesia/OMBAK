import {
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  HardHat,
  Home,
  Store,
  Users,
  WalletCards,
} from "lucide-react";

const audiences = [
  { title: "Karyawan", icon: BriefcaseBusiness },
  { title: "Freelancer", icon: WalletCards },
  { title: "Sales", icon: Users },
  { title: "Mahasiswa", icon: GraduationCap },
  { title: "Pemilik usaha", icon: Store },
  { title: "Agen properti", icon: Home },
  { title: "Pekerja lapangan", icon: HardHat },
  { title: "Siapa saja yang punya relasi", icon: Building2 },
];

export function Audience() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div data-reveal className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-500">
            Siapa yang cocok
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ocean-950 sm:text-4xl">
            Untuk siapa saja yang punya jaringan dan ingin bergerak lebih
            produktif.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item) => (
            <div
              data-reveal
              key={item.title}
              className="flex min-h-28 items-center gap-4 rounded-[1.35rem] border border-slate-100 bg-slate-50 p-5 shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-ocean-700 shadow-sm">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="text-base font-semibold leading-6 text-ocean-950">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
