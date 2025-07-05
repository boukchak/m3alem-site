"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Download, Smartphone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
      
      <div className="container relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass-effect text-sm font-medium mb-8"
          >
            🚀 Plateforme #1 au Maroc pour vos travaux
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
          >
            Trouvez le bon{" "}
            <span className="text-secondary">technicien</span>
            <br />
            en quelques clics
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto text-balance"
          >
            M3alem connecte les particuliers aux meilleurs artisans du Maroc. 
            Devis instantanés, tarifs transparents, paiement sécurisé.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">+1000</div>
              <div className="text-sm text-white/80">Interventions réussies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-sm text-white/80">Techniciens vérifiés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">4.8/5</div>
              <div className="text-sm text-white/80">Note moyenne</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-8 py-6 h-auto"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Télécharger l&apos;app
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
            >
              <Play className="mr-2 h-5 w-5" />
              Voir la démo
            </Button>
          </motion.div>

          {/* App store badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
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
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce-gentle" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

