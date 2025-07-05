"use client";

import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Handshake, 
  CheckCircle, 
  CreditCard 
} from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "1. Décrivez votre besoin",
    description: "Expliquez en quelques mots le service dont vous avez besoin. Ajoutez des photos pour plus de précision.",
  },
  {
    icon: Handshake,
    title: "2. Recevez des devis",
    description: "Des techniciens qualifiés vous envoient des devis détaillés. Comparez les offres et choisissez le meilleur profil.",
  },
  {
    icon: CheckCircle,
    title: "3. Mission réalisée",
    description: "Le technicien intervient et réalise la mission. Suivez l'avancement en temps réel via l'application.",
  },
  {
    icon: CreditCard,
    title: "4. Paiement sécurisé",
    description: "Validez la fin de la mission et payez en toute sécurité via l'application. Laissez un avis pour le technicien.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comment ça{


 } marche ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Découvrez le parcours simple et intuitif pour trouver le technicien idéal et réaliser vos travaux en toute sérénité.
          </p>
        </motion.div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Timeline line for larger screens */}
          <div className="absolute hidden lg:block h-1 w-full bg-primary/20 top-1/2 transform -translate-y-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center max-w-xs"
            >
              <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mb-6 shadow-lg">
                <step.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* App screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">
            Découvrez l&apos;application en images
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            <img src="/screenshot-1.png" alt="Capture d'écran 1" className="rounded-xl shadow-xl w-full max-w-xs" />
            <img src="/screenshot-2.png" alt="Capture d'écran 2" className="rounded-xl shadow-xl w-full max-w-xs" />
            <img src="/screenshot-3.png" alt="Capture d'écran 3" className="rounded-xl shadow-xl w-full max-w-xs" />
            <img src="/screenshot-4.png" alt="Capture d'écran 4" className="rounded-xl shadow-xl w-full max-w-xs" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

