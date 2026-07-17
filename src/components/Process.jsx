import { motion } from "framer-motion";
import { process } from "../data/process";

export default function Process() {
  return (
    <section id="process" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff9800]">
            Méthodologie
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Notre <span className="gradient-text">process</span>
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Une méthode claire et éprouvée, du premier échange jusqu'au suivi post-lancement.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/15 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <ol className="space-y-8">
            {process.map((step, i) => {
              const Icon = step.icon;
              const alignRight = i % 2 === 1;
              return (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10"
                >
                  <div className="absolute left-6 top-0 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffb300] to-[#ff7b00] text-black shadow-glow-sm sm:left-1/2">
                    <Icon size={20} />
                  </div>

                  <div
                    className={`glass-card rounded-2xl p-6 pl-16 sm:pl-6 ${
                      alignRight
                        ? "sm:col-start-2 sm:ml-8 sm:text-left"
                        : "sm:col-start-1 sm:mr-8 sm:text-right"
                    }`}
                  >
                    <span className="text-xs font-bold text-[#ff9800]">{step.number}</span>
                    <h3 className="mt-1 text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
