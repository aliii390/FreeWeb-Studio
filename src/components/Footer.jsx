import { FaSnapchat } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";

const CONTACT_EMAIL = "freewebstudiosupport@gmail.com";
const SNAPCHAT_HANDLE = "freeweb_studio";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pourquoi nous", href: "#pourquoi-nous" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Devis", href: "#contact" },
];

const contacts = [
  {
    icon: HiOutlineEnvelope,
    href: `mailto:${CONTACT_EMAIL}`,
    label: CONTACT_EMAIL,
    external: false,
  },
  {
    icon: FaSnapchat,
    href: `https://www.snapchat.com/add/${SNAPCHAT_HANDLE}`,
    label: SNAPCHAT_HANDLE,
    external: true,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNavigate = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/8 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <a href="#accueil" onClick={(e) => handleNavigate(e, "#accueil")} className="inline-flex items-center gap-2 text-lg font-extrabold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#ffb300] to-[#ff7b00] text-sm font-black text-black">
                F
              </span>
              FreeWeb<span className="gradient-text">Studio</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
              Sites web modernes, rapides et performants pour entreprises, indépendants et
              associations.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:justify-start">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavigate(e, link.href)}
                className="text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-3 md:items-end">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  {...(contact.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="glass flex items-center gap-2.5 rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:text-[#ffb300]"
                >
                  <Icon size={16} />
                  {contact.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 text-xs text-white/40 sm:flex-row">
          <p>&copy; {year} FreeWeb Studio. Tous droits réservés.</p>
          <a href="#mentions-legales" className="transition-colors hover:text-white/70">
            Mentions légales
          </a>
        </div>
      </div>
    </footer>
  );
}
