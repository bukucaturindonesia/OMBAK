# OMBAK by Om Bakri

Landing page premium modern untuk OMBAK, jaringan kemitraan referral by Om Bakri. Dibuat dengan Next.js 15, TypeScript, Tailwind CSS, App Router, dan static export.

## Fitur

- Landing page mobile-first dan responsive
- CTA ke WhatsApp placeholder `628xxxxxxxxxx`
- Form minat bergabung tanpa database
- Floating WhatsApp button
- Smooth scroll dan animasi halus saat scroll
- SEO title dan meta description
- Static export untuk Vercel dan GitHub Pages

## Menjalankan lokal

```bash
pnpm install
pnpm dev
```

Buka `http://localhost:3000`.

Jika memakai npm:

```bash
npm install
npm run dev
```

## Build production

```bash
pnpm build
```

Hasil static export ada di folder `out`.

Dengan npm:

```bash
npm run build
```

## Deploy ke Vercel

1. Push repository ke GitHub.
2. Import project di Vercel.
3. Gunakan pengaturan default framework Next.js.
4. Build command: `pnpm build`.
5. Output directory: `out`.

## Deploy ke GitHub Pages

Script GitHub Pages memakai base path `/OMBAK` secara default.

```bash
pnpm build:github
```

Deploy isi folder `out` ke GitHub Pages.

Jika nama repository berbeda, gunakan environment variable:

```bash
GITHUB_PAGES_BASE_PATH=/nama-repository pnpm build:github
```

Untuk Windows PowerShell:

```powershell
$env:GITHUB_PAGES_BASE_PATH="/nama-repository"
pnpm build:github
```

## Mengganti WhatsApp

Ubah nomor di `lib/site.ts`:

```ts
export const whatsappNumber = "628xxxxxxxxxx";
```

Gunakan format internasional tanpa tanda `+`.

## Catatan

OMBAK adalah jaringan kemitraan referral, bukan MLM, bukan perusahaan pembiayaan, dan bukan penyedia pinjaman. Komisi berasal dari referensi yang berhasil diproses sesuai ketentuan, bukan dari merekrut orang baru.
