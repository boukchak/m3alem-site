"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Calculator, 
  Shield, 
  Star, 
  Clock, 
  CreditCard 
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Géolocalisation intelligente",
    description: "Trouvez les techniciens les plus proches de chez vous en temps réel. Filtrez par spécialité et disponibilité.",
    color: "text-blue-500"
  },
  {
    icon: Calculator,
    title: "Devis instantanés",
    description: "Recevez des devis détaillés et transparents en quelques minutes. Comparez les prix et choisissez la meilleure offre.",
    color: "text-green-500"
  },
  {
    icon: Shield,
    title: "Paiement sécurisé",
    description: "Payez en toute sécurité avec Stripe. Acompte de 30% ou paiement intégral, votre argent est protégé.",
    color: "text-purple-500"
  },
  {
    icon: Star,
    title: "Avis vérifiés",
    description: "Consultez les avis authentiques de clients précédents. Seuls les clients ayant utilisé le service peuvent noter.",
    color: "text-yellow-500"
  },
  {
    icon: Clock,
    title: "Intervention rapide",
    description: "Service d'urgence disponible 24h/7j. Nos techniciens interviennent rapidement pour vos urgences.",
    color: "text-red-500"
  },
  {
    icon: CreditCard,
    title: "Tarifs transparents",
    description: "Pas de surprise ! Tous les tarifs sont affichés clairement : déplacement, main d'œuvre, majoration urgence.",
    color: "text-indigo-500"
  }
];

export function FeaturesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pourquoi choisir{" "}
            <span className="text-gradient">M3alem</span> ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Une plateforme pensée pour simplifier vos travaux et vous faire gagner du temps, 
            tout en garantissant la qualité et la sécurité.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à simplifier vos travaux ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Rejoignez des milliers de clients satisfaits qui font confiance à M3alem 
              pour leurs projets de rénovation et de réparation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Commencer maintenant
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors"
              >
                En savoir plus
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

