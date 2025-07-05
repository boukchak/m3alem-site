"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Fatima Zahra",
    location: "Casablanca",
    rating: 5,
    comment: "Service exceptionnel ! J'ai trouvé un plombier en moins de 30 minutes. Travail de qualité et prix transparent.",
    service: "Plomberie",
    avatar: "FZ"
  },
  {
    id: 2,
    name: "Ahmed Benali",
    location: "Rabat",
    rating: 5,
    comment: "M3alem m'a sauvé la mise ! Panne électrique un dimanche soir, un technicien est venu en urgence. Parfait !",
    service: "Électricité",
    avatar: "AB"
  },
  {
    id: 3,
    name: "Khadija Alami",
    location: "Marrakech",
    rating: 5,
    comment: "Interface très intuitive, devis clairs et techniciens professionnels. Je recommande vivement !",
    service: "Peinture",
    avatar: "KA"
  },
  {
    id: 4,
    name: "Youssef Tazi",
    location: "Fès",
    rating: 5,
    comment: "Excellent suivi de la mission via l'app. Le technicien était ponctuel et très compétent.",
    service: "Jardinage",
    avatar: "YT"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plus de 10 000 clients satisfaits nous font confiance pour leurs travaux. 
            Découvrez leurs témoignages authentiques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  
                  <div className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full inline-block">
                    {testimonial.service}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex items-center">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 mr-1" />
              <span className="font-bold text-2xl text-gray-900">4.8</span>
              <span className="text-gray-600 ml-1">/5</span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-gray-600">
              <span className="font-semibold text-gray-900">+10 000</span> avis clients
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

