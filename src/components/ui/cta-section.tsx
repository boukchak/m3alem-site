"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Play } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-white/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à simplifier vos travaux ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Rejoignez des milliers de clients satisfaits qui font confiance à M3alem 
            pour leurs projets de rénovation et de réparation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Télécharger l'app
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-semibold rounded-full"
              >
                <Play className="w-5 h-5 mr-2" />
                Voir la démo
              </Button>
            </motion.div>
          </div>

          {/* App Store Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex items-center space-x-4">
              <img 
                src="/app-store-badge.png" 
                alt="Télécharger sur l'App Store" 
                className="h-14 hover:scale-105 transition-transform cursor-pointer"
              />
              <img 
                src="/google-play-badge.png" 
                alt="Disponible sur Google Play" 
                className="h-14 hover:scale-105 transition-transform cursor-pointer"
              />
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-blue-500"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">+1000</div>
              <div className="text-blue-200">Interventions réussies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200">Techniciens vérifiés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4.8/5</div>
              <div className="text-blue-200">Note moyenne</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

