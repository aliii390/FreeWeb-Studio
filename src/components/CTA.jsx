import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlinePaperAirplane,
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
} from "react-icons/hi2";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const initialForm = { name: "", email: "", message: "" };

export default function CTA() {
  const [form, setForm] = useState(initialForm);
  // status: idle | sending | success | error
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      console.error(
        "VITE_WEB3FORMS_ACCESS_KEY manquante — voir .env.example pour la configuration."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Nouvelle demande de devis — ${form.name}`,
          from_name: "FreeWeb Studio — Formulaire de devis",
          name: form.name,
          email: form.email,
          message: form.message,
          botcheck: e.target.botcheck.value,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        console.error("Web3Forms a refusé l'envoi :", result.message);
        setStatus("error");
      }
    } catch (err) {
      console.error("Échec réseau lors de l'envoi du formulaire :", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#151109] via-[#0a0a0a] to-[#0d0805] p-10 sm:p-16">
          <div className="pointer-events-none absolute -top-24 right-0 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(255,152,0,0.28),transparent_70%)] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-0 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(255,123,0,0.18),transparent_70%)] blur-3xl" />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-center"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff9800]">
                Devis gratuit
              </span>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
                Prêt à lancer <span className="gradient-text">votre projet ?</span>
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/60">
                Parlez-nous de votre projet, nous revenons vers vous sous 48h avec une
                proposition adaptée à vos besoins.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleSubmit}
              className="glass-card space-y-4 rounded-3xl p-6 sm:p-8"
            >
              {/* Piège à robots : doit rester vide, un bot le remplira */}
              <input
                type="text"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                defaultValue=""
              />

              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-white/60">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  disabled={status === "sending"}
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#ff9800]/50 disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-white/60">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={status === "sending"}
                  value={form.email}
                  onChange={handleChange}
                  placeholder="vous@exemple.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#ff9800]/50 disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium text-white/60"
                >
                  Votre projet
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  disabled={status === "sending"}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Décrivez brièvement votre besoin..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#ff9800]/50 disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "success" ? (
                  <>
                    <HiOutlineCheckCircle size={18} />
                    Demande envoyée !
                  </>
                ) : status === "sending" ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    Demander un devis
                    <HiOutlinePaperAirplane size={16} />
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="text-center text-sm text-white/60">
                  Merci ! Nous revenons vers vous sous 48h.
                </p>
              )}

              {status === "error" && (
                <p className="flex items-center justify-center gap-2 text-center text-sm text-red-400">
                  <HiOutlineExclamationTriangle size={16} />
                  Une erreur est survenue. Réessayez ou écrivez-nous directement.
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
