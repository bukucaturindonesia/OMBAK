const stats = [
  { label: "Area", value: "Seluruh Indonesia" },
  { label: "Komisi", value: "Hingga 10%" },
  { label: "Fokus", value: "Referral & Relasi" },
  { label: "Sistem", value: "Dibimbing Om Bakri" },
];

export function Stats() {
  return (
    <section className="relative z-10 -mt-10 px-5 sm:px-6 lg:px-8">
      <div
        data-reveal
        className="mx-auto grid max-w-7xl gap-3 rounded-[2rem] border border-white bg-white p-4 shadow-premium sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-[1.35rem] bg-slate-50 p-5 text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-500">
              {item.label}
            </p>
            <p className="mt-2 text-lg font-semibold text-ocean-950">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
