"use client";

import { motion } from "framer-motion";
import { Shield, FileText, Users, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const sections = [
  {
    icon: FileText,
    title: "Informations légales",
    content: [
      "Raison sociale : M3alem SARL",
      "Siège social : 123 Boulevard Mohammed V, Casablanca, Maroc",
      "Capital social : 100 000 DH",
      "Registre du commerce : RC 123456",
      "Numéro de TVA : TVA123456789",
      "Directeur de publication : Youssef Benali"
    ]
  },
  {
    icon: Shield,
    title: "Propriété intellectuelle",
    content: [
      "Le site M3alem et tous ses éléments sont protégés par le droit d'auteur.",
      "Les marques, logos, et éléments graphiques sont la propriété exclusive de M3alem SARL.",
      "Toute reproduction sans autorisation est strictement interdite.",
      "Les contenus du site sont protégés par les lois sur la propriété intellectuelle."
    ]
  },
  {
    icon: Users,
    title: "Responsabilité",
    content: [
      "M3alem agit en tant qu'intermédiaire entre clients et techniciens.",
      "La responsabilité des travaux incombe aux techniciens partenaires.",
      "M3alem s'engage à vérifier les qualifications de ses partenaires.",
      "Une assurance responsabilité civile couvre les interventions."
    ]
  },
  {
    icon: Lock,
    title: "Protection des données",
    content: [
      "Vos données personnelles sont traitées conformément au RGPD.",
      "Les données sont collectées uniquement pour les besoins du service.",
      "Vous disposez d'un droit d'accès, de rectification et de suppression.",
      "Les données ne sont jamais vendues à des tiers."
    ]
  }
];

export default function LegalPage() {
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
              Mentions Légales
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Informations légales et conditions d'utilisation de la plateforme M3alem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legal Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full mr-4">
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {section.title}
                      </h2>
                    </div>
                    <ul className="space-y-3">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="text-gray-700 leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Conditions Générales d'Utilisation
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  1. Objet du service
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  M3alem est une plateforme numérique qui met en relation les particuliers 
                  avec des techniciens et artisans qualifiés pour la réalisation de travaux 
                  à domicile. La plateforme facilite la mise en contact, la gestion des devis 
                  et le suivi des interventions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  2. Inscription et utilisation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  L'utilisation de M3alem nécessite la création d'un compte utilisateur. 
                  Vous vous engagez à fournir des informations exactes et à maintenir 
                  la confidentialité de vos identifiants. Vous êtes responsable de toutes 
                  les activités effectuées sous votre compte.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  3. Services et tarification
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Les tarifs des interventions sont fixés librement par chaque technicien 
                  partenaire. M3alem perçoit une commission sur chaque transaction réalisée 
                  via la plateforme. Les prix affichés incluent toutes les taxes applicables.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  4. Garanties et assurances
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Tous les techniciens partenaires disposent d'une assurance responsabilité 
                  civile professionnelle. M3alem offre une garantie de satisfaction et 
                  s'engage à résoudre tout litige dans les meilleurs délais.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  5. Droit applicable
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Les présentes conditions sont régies par le droit marocain. 
                  Tout litige sera soumis à la compétence exclusive des tribunaux de Casablanca.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                Dernière mise à jour : Janvier 2024<br />
                Pour toute question concernant ces mentions légales, 
                contactez-nous à : <span className="font-medium">legal@m3alem.ma</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

