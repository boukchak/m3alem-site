"use client";

import { motion } from "framer-motion";
import { Wrench, Zap, Droplets, Paintbrush, Hammer, Leaf, Shield, Clock, Star, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Plomberie",
    description: "Réparation, installation, dépannage d'urgence",
    features: ["Fuite d'eau", "Installation sanitaire", "Débouchage", "Urgence 24h/7j"],
    price: "À partir de 150 DH",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "Électricité",
    description: "Installation électrique, dépannage, mise aux normes",
    features: ["Panne électrique", "Installation prises", "Tableau électrique", "Éclairage"],
    price: "À partir de 200 DH",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Paintbrush,
    title: "Peinture",
    description: "Peinture intérieure et extérieure, décoration",
    features: ["Peinture murs", "Plafonds", "Façades", "Décoration"],
    price: "À partir de 25 DH/m²",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Hammer,
    title: "Menuiserie",
    description: "Réparation, installation, fabrication sur mesure",
    features: ["Portes & fenêtres", "Placards", "Réparations", "Sur mesure"],
    price: "À partir de 300 DH",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: Droplets,
    title: "Climatisation",
    description: "Installation, maintenance, réparation climatiseurs",
    features: ["Installation clim", "Maintenance", "Réparation", "Nettoyage"],
    price: "À partir de 250 DH",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Leaf,
    title: "Jardinage",
    description: "Entretien espaces verts, aménagement paysager",
    features: ["Tonte pelouse", "Taille haies", "Plantation", "Aménagement"],
    price: "À partir de 180 DH",
    color: "from-green-500 to-emerald-600"
  }
];

const guarantees = [
  {
    icon: Shield,
    title: "Garantie qualité",
    description: "Tous nos travaux sont garantis et nos techniciens sont assurés"
  },
  {
    icon: Clock,
    title: "Intervention rapide",
    description: "Service d'urgence disponible 24h/7j pour vos besoins urgents"
  },
  {
    icon: Star,
    title: "Techniciens vérifiés",
    description: "Tous nos professionnels sont sélectionnés et évalués régulièrement"
  },
  {
    icon: CheckCircle,
    title: "Tarifs transparents",
    description: "Pas de surprise, tous les tarifs sont affichés clairement"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Découvrez notre gamme complète de services à domicile, 
              réalisés par des techniciens qualifiés et vérifiés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Services Disponibles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des professionnels qualifiés pour tous vos besoins de réparation et d'amélioration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-full mb-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-blue-600">
                          {service.price}
                        </span>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Demander un devis
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simple et transparent pour tous vos besoins de services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Décrivez votre besoin",
                description: "Expliquez votre problème ou votre projet en quelques mots"
              },
              {
                step: "2",
                title: "Recevez des devis",
                description: "Des techniciens qualifiés vous envoient leurs propositions"
              },
              {
                step: "3",
                title: "Choisissez votre technicien",
                description: "Comparez les profils et sélectionnez le meilleur"
              },
              {
                step: "4",
                title: "Mission réalisée",
                description: "Le technicien intervient et réalise votre projet"
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Garanties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Votre satisfaction et votre tranquillité d'esprit sont nos priorités.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full mb-4">
                  <guarantee.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {guarantee.title}
                </h3>
                <p className="text-gray-600">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Prêt à commencer votre projet ?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Téléchargez l'application M3alem et trouvez le technicien idéal en quelques clics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4">
                Télécharger l'app
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4">
                Demander un devis
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

