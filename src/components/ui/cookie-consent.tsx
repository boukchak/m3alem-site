"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import Link from "next/link";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookie_consent", "accepted", { expires: 365 });
    setShowBanner(false);
    // Activer le tracking ici (ex: Google Analytics)
  };

  const handleDecline = () => {
    Cookies.set("cookie_consent", "declined", { expires: 365 });
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 z-50 shadow-lg"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm mb-4 md:mb-0 md:mr-6">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant, vous acceptez notre utilisation des cookies. Pour en savoir plus, consultez notre{" "}
              <Link href="/legal" className="underline hover:text-blue-400">
                politique de confidentialité
              </Link>
              .
            </p>
            <div className="flex-shrink-0 flex items-center space-x-4">
              <Button variant="outline" onClick={handleDecline} className="bg-transparent text-white border-white hover:bg-white hover:text-gray-900">
                Refuser
              </Button>
              <Button onClick={handleAccept} className="bg-blue-600 hover:bg-blue-700">
                Accepter
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

