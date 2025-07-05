"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    id: 1,
    question: "Comment fonctionne M3alem ?",
    answer: "M3alem est très simple à utiliser : décrivez votre besoin, recevez des devis de techniciens qualifiés, choisissez le meilleur profil, et suivez l'intervention en temps réel via l'application."
  },
  {
    id: 2,
    question: "Les techniciens sont-ils vérifiés ?",
    answer: "Oui, tous nos techniciens passent par un processus de vérification rigoureux : vérification d'identité, contrôle des qualifications, vérification des assurances, et évaluation des compétences techniques."
  },
  {
    id: 3,
    question: "Comment sont calculés les tarifs ?",
    answer: "Les tarifs sont transparents et incluent : le déplacement, la main d'œuvre, et les éventuelles majorations (urgence, weekend). Chaque technicien propose son tarif, vous pouvez comparer et choisir."
  },
  {
    id: 4,
    question: "Que se passe-t-il en cas de problème ?",
    answer: "M3alem offre une garantie sur tous les travaux. En cas de problème, contactez notre service client qui interviendra rapidement pour résoudre la situation."
  },
  {
    id: 5,
    question: "Puis-je annuler une intervention ?",
    answer: "Oui, vous pouvez annuler une intervention jusqu'à 2h avant l'heure prévue sans frais. Au-delà, des frais d'annulation peuvent s'appliquer selon les conditions du technicien."
  },
  {
    id: 6,
    question: "Comment payer en toute sécurité ?",
    answer: "Les paiements sont sécurisés via Stripe. Vous pouvez payer par carte bancaire directement dans l'application. Le paiement n'est débité qu'après validation de la fin de mission."
  }
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez rapidement les réponses aux questions les plus courantes sur M3alem.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(faq.id) ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: openItems.includes(faq.id) ? "auto" : 0,
                      opacity: openItems.includes(faq.id) ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold hover:underline">
            Contactez notre équipe support
          </button>
        </motion.div>
      </div>
    </section>
  );
}

