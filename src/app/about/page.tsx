"use client";

import { motion } from "framer-motion";
import { Users, Target, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Users,
    title: "Communauté",
    description: "Nous créons des liens durables entre particuliers et artisans qualifiés."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque intervention et chaque interaction."
  },
  {
    icon: Award,
    title: "Qualité",
    description: "Nous garantissons des services de haute qualité grâce à notre processus de sélection rigoureux."
  },
  {
    icon: Heart,
    title: "Confiance",
    description: "Nous bâtissons la confiance par la transparence et l'authenticité."
  }
];

const team = [
  {
    name: "Youssef Benali",
    role: "CEO & Fondateur",
    description: "Expert en technologie avec 10 ans d'expérience dans le secteur des services.",
    image: "YB"
  },
  {
    name: "Fatima Alami",
    role: "CTO",
    description: "Ingénieure logiciel passionnée par l'innovation et l'expérience utilisateur.",
    image: "FA"
  },
  {
    name: "Ahmed Tazi",
    role: "Directeur Commercial",
    description: "Spécialiste du développement commercial avec une expertise du marché marocain.",
    image: "AT"
  }
];

export default function AboutPage() {
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
              À propos de M3alem
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              M3alem révolutionne le secteur des services à domicile au Maroc en connectant 
              les particuliers aux meilleurs artisans et techniciens qualifiés de leur région.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Simplifier l'accès aux services de qualité pour tous les Marocains, 
                tout en offrant aux artisans une plateforme moderne pour développer leur activité.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous croyons que chaque foyer mérite d'avoir accès à des services fiables, 
                transparents et de qualité, sans les tracas traditionnels de recherche et de négociation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-amber-500 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
              <p className="text-lg leading-relaxed">
                Devenir la référence incontournable des services à domicile au Maroc 
                et dans toute l'Afrique du Nord, en créant un écosystème où la qualité, 
                la confiance et l'innovation se rencontrent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions et décisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe passionnée et expérimentée, dédiée à transformer l'expérience des services à domicile.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {member.image}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              M3alem en chiffres
            </h2>
            <p className="text-xl text-blue-100">
              Notre impact sur le marché des services au Maroc
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "+10 000", label: "Clients satisfaits" },
              { number: "500+", label: "Techniciens vérifiés" },
              { number: "12", label: "Villes couvertes" },
              { number: "4.8/5", label: "Note moyenne" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

