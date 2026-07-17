import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { useScrolled } from "../hooks/useScrolled";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";

const links = [
  { label: "Services", href: "#services" },
  { label: "Pourquoi nous", href: "#pourquoi-nous" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  useLockBodyScroll(open);

  const handleNavigate = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 transition-all duration-500 sm:px-6 ${
          scrolled ? "glass py-3 shadow-premium mx-4 sm:mx-auto" : "py-2"
        }`}
      >
        <a
          href="#accueil"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate("#accueil");
          }}
          className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#ffb300] to-[#ff7b00] text-sm font-black text-black">
            F
          </span>
          FreeWeb<span className="gradient-text">Studio</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavigate(link.href);
              }}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate("#contact");
            }}
            className="btn-primary rounded-full px-5 py-2.5 text-sm"
          >
            Obtenir un devis
          </a>
        </div>

        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="glass flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
        >
          {open ? <HiOutlineXMark size={22} /> : <HiOutlineBars3 size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="glass mx-4 mt-3 flex flex-col gap-1 rounded-2xl p-3 shadow-premium md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(link.href);
                }}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavigate("#contact");
              }}
              className="btn-primary mt-1 rounded-xl px-4 py-3 text-center text-sm"
            >
              Obtenir un devis
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
