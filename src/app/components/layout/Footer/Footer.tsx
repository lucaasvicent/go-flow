import { Github, House, Linkedin, MapPinned } from "lucide-react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home", icon: House, external: false },
  { href: "/#destinos", label: "Destinos", icon: MapPinned, external: false },
  { href: "https://www.linkedin.com/in/lucas-vicente0408/", label: "Linkedin", icon: Linkedin, external: true },
  { href: "https://github.com/lucaasvicent", label: "Github", icon: Github, external: true },
];

export default function Footer() {
  return (
    <footer id="contact" className="flex flex-col items-center justify-center py-8 text-center bg-black text-white gap-6">
      <Link href="/" className="text-4xl font-bold hover:text-blue-400 transition-colors">
        Go Flow
      </Link>

      <nav className="flex flex-col items-center justify-center md:flex-row gap-6 md:gap-12">
        {links.map(({ href, label, icon: Icon, external }) => (
          <Link
            key={href}
            href={href}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Icon size={18} />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Lucas Vicente
      </p>
    </footer>
  );
}
