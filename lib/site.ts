export const whatsappNumber = "6281323455243";

export const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Program", href: "#program" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#minat" },
];

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function assetPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalizedBasePath = basePath
    ? `/${basePath.replace(/^\/+|\/+$/g, "")}`
    : "";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBasePath}${normalizedPath}`;
}
