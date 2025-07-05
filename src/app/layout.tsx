import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { CookieConsent } from "@/components/ui/cookie-consent";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "M3alem - Trouvez le bon technicien en quelques clics",
  description: "M3alem connecte les particuliers aux meilleurs artisans du Maroc. Devis instantanés, tarifs transparents, paiement sécurisé.",
  keywords: "plombier, électricien, technicien, artisan, Maroc, réparation, travaux, devis",
  authors: [{ name: "M3alem" }],
  creator: "M3alem",
  publisher: "M3alem",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://m3alem.ma"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "M3alem - Trouvez le bon technicien en quelques clics",
    description: "M3alem connecte les particuliers aux meilleurs artisans du Maroc. Devis instantanés, tarifs transparents, paiement sécurisé.",
    url: "https://m3alem.ma",
    siteName: "M3alem",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "M3alem - Plateforme de mise en relation artisans-clients",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M3alem - Trouvez le bon technicien en quelques clics",
    description: "M3alem connecte les particuliers aux meilleurs artisans du Maroc. Devis instantanés, tarifs transparents, paiement sécurisé.",
    images: ["/og-image.jpg"],
    creator: "@m3alem",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':
            new Date().getTime(),event:
            \'gtm.js\'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=
            \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,\'script\',\'dataLayer\',\'GTM-XXXXXXX\');`,
          }}
        ></script>
        {/* End Google Tag Manager */}
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}

