import { motion } from "framer-motion";
import {
  HiOutlineCommandLine,
  HiOutlineDevicePhoneMobile,
  HiOutlineChartBar,
  HiOutlineCursorArrowRays,
} from "react-icons/hi2";

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="accueil"
      className="bg-noise relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      {/* Glow de fond */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,152,0,0.22),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(255,123,0,0.14),transparent_70%)] blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Colonne texte */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white/80"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff9800] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff9800]" />
            </span>
            Disponible pour de nouveaux projets
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Transformez votre <span className="gradient-text">présence en ligne.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/60"
          >
            Création de sites web modernes, rapides et performants pour entreprises,
            indépendants et associations.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary rounded-full px-7 py-3.5 text-center text-sm"
            >
              Obtenir un devis
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-secondary rounded-full px-7 py-3.5 text-center text-sm font-semibold"
            >
              Découvrir mes services
            </a>
          </motion.div>
        </div>

        {/* Illustration glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative mx-auto hidden h-[420px] w-full max-w-md lg:block"
        >
          {/* Carte principale : dashboard */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card absolute left-1/2 top-8 w-72 -translate-x-1/2 rounded-3xl p-5"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="mb-3 flex items-center gap-2 text-white/70">
              <HiOutlineChartBar className="text-[#ffb300]" size={18} />
              <span className="text-xs font-semibold">Performance</span>
            </div>
            <div className="flex items-end gap-2">
              {[40, 70, 55, 90, 65].map((h, i) => (
                <div
                  key={i}
                  className="w-full rounded-md bg-gradient-to-t from-[#ff7b00] to-[#ffb300]"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </motion.div>

          {/* Carte code */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="glass-card absolute -left-4 bottom-16 w-56 rounded-2xl p-4"
          >
            <div className="mb-2 flex items-center gap-2 text-white/70">
              <HiOutlineCommandLine className="text-[#ff9800]" size={16} />
              <span className="text-xs font-semibold">index.tsx</span>
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-4/5 rounded-full bg-white/15" />
              <div className="h-1.5 w-3/5 rounded-full bg-[#ff9800]/40" />
              <div className="h-1.5 w-full rounded-full bg-white/10" />
              <div className="h-1.5 w-2/3 rounded-full bg-white/15" />
            </div>
          </motion.div>

          {/* Carte mobile */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="glass-card absolute -right-2 bottom-2 flex w-32 flex-col items-center gap-3 rounded-2xl p-4"
          >
            <HiOutlineDevicePhoneMobile className="text-[#ffb300]" size={22} />
            <div className="w-full space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-white/15" />
              <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
            </div>
          </motion.div>

          {/* Badge flottant */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="glass absolute right-6 top-0 flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold text-white/80"
          >
            <HiOutlineCursorArrowRays className="text-[#ff7b00]" size={14} />
            UI/UX
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
