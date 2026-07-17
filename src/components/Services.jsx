import { motion } from "framer-motion";
import { services } from "../data/services";

const cardVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  show: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff9800]">
            Nos prestations
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Des services pensés pour <span className="gradient-text">votre croissance</span>
          </h2>
          <p className="mt-5 text-lg text-white/60">
            De la conception à la mise en ligne, nous couvrons chaque étape de votre projet web.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
                className="glass-card group relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,152,0,0.16),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff9800]/20 to-[#ff7b00]/10 text-[#ffb300] ring-1 ring-white/10">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
