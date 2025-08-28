import { Github, House, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-8 text-center bg-black text-white gap-6">
      <h1 className="text-4xl font-bold hover:text-blue-400 -transition-colors cursor-pointer">
        Go Flow
      </h1>

      <div className="flex flex-col items-center justify-center md:flex-row gap-6 md:gap-12">
        <Link href="/" className="flex items-center gap-2 hover:text-blue-400 -transition-colors">
          <House size={18} />
          <span>Home</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/lucas-vicente0408/"
          target="_blank"
          className="flex items-center gap-2 hover:text-blue-400 -transition-colors">
          <Linkedin size={18} />
          <span>Linkedin</span>
        </Link>
        <Link
          href="https://github.com/lucaasvicente" target="_blank"
          className="flex items-center gap-2 hover:text-blue-400 -transition-colors">
          <Github size={18} />
          <span>Github</span>
        </Link>
      </div>

      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Lucas Vicente
      </p>
    </footer>
  );
}
