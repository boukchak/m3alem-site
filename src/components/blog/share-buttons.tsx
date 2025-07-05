"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Share2, Facebook, Twitter, Linkedin, MessageCircle, Link, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonsProps {
  post: {
    title: string;
    description: string;
    slug: string;
  };
}

export function ShareButtons({ post }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedTitle = encodeURIComponent(post.title);
  const encodedExcerpt = encodeURIComponent(post.description);
  const encodedUrl = encodeURIComponent(currentUrl);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erreur lors de la copie:", err);
    }
  };

  const shareButtons = [
    {
      name: "Facebook",
      icon: Facebook,
      href: shareLinks.facebook,
      className: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: shareLinks.twitter,
      className: "bg-black hover:bg-gray-800 text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: shareLinks.linkedin,
      className: "bg-blue-700 hover:bg-blue-800 text-white",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: shareLinks.whatsapp,
      className: "bg-green-600 hover:bg-green-700 text-white",
    },
  ];

  return (
    <div className="border-t border-b border-gray-200 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Share2 className="w-5 h-5 text-gray-600 mr-3" />
          <span className="text-sm font-medium text-gray-700">
            Partager cet article
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {shareButtons.map((button, index) => (
            <motion.div
              key={button.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                size="sm"
                className={`${button.className} w-10 h-10 p-0`}
                onClick={() => window.open(button.href, "_blank", "noopener,noreferrer")}
                title={`Partager sur ${button.name}`}
              >
                <button.icon className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}

          {/* Bouton copier le lien */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              size="sm"
              variant="outline"
              className="w-10 h-10 p-0"
              onClick={copyToClipboard}
              title="Copier le lien"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Link className="w-4 h-4" />
              )}
            </Button>
          </motion.div>
        </div>
      </div>

      {copied && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-2 text-sm text-green-600"
        >
          Lien copié dans le presse-papiers !
        </motion.div>
      )}
    </div>
  );
}

