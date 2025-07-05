"use client";

import { motion } from "framer-motion";
import { Users, Wrench, MapPin, Clock } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Users,
    value: "+10 000",
    label: "Clients satisfaits",
    description: "Particuliers qui nous font confiance"
  },
  {
    id: 2,
    icon: Wrench,
    value: "500+",
    label: "Techniciens vérifiés",
    description: "Professionnels qualifiés et assurés"
  },
  {
    id: 3,
    icon: MapPin,
    value: "12",
    label: "Villes couvertes",
    description: "Dans tout le Maroc"
  },
  {
    id: 4,
    icon: Clock,
    value: "< 30min",
    label: "Temps de réponse",
    description: "Pour recevoir vos premiers devis"
  }
];

export function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            M3alem en chiffres
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez l'impact de M3alem sur le marché des services à domicile au Maroc.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              
              <div className="text-xl font-semibold text-gray-800 mb-2">
                {stat.label}
              </div>
              
              <div className="text-gray-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Une croissance exceptionnelle
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Depuis notre lancement, M3alem connaît une croissance de <strong>+150% par mois</strong> 
            grâce à la qualité de nos services et la satisfaction de nos clients. 
            Rejoignez la révolution des services à domicile au Maroc !
          </p>
        </motion.div>
      </div>
    </section>
  );
}

