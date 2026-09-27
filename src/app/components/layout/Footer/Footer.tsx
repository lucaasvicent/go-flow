import { Github, House, Linkedin, MapPinned } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const external = [
  { href: "https://www.linkedin.com/in/lucas-vicente0408/", label: "Linkedin", icon: Linkedin },
  { href: "https://github.com/lucaasvicent", label: "Github", icon: Github },
];

const linkClass = "flex items-center gap-2 hover:text-blue-400 transition-colors";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer id="contact" className="flex flex-col items-center justify-center py-8 text-center bg-black text-white gap-6">
      <Link href="/" className="text-4xl font-bold hover:text-blue-400 transition-colors">
        Go Flow
      </Link>

      <nav className="flex flex-col items-center justify-center md:flex-row gap-6 md:gap-12">
        <Link href="/" className={linkClass}>
          <House size={18} />
          <span>{t("home")}</span>
        </Link>
        <Link href={{ pathname: "/", hash: "destinations" }} className={linkClass}>
          <MapPinned size={18} />
          <span>{t("destinations")}</span>
        </Link>
        {external.map(({ href, label, icon: Icon }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <Icon size={18} />
            <span>{label}</span>
          </a>
        ))}
      </nav>

      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Lucas Vicente
      </p>
    </footer>
  );
}
