"use client";

interface StructuredDataProps {
  type: "website" | "article" | "organization" | "faq";
  data: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData;

  switch (type) {
    case "website":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "M3alem",
        url: "https://m3alem.ma",
        description: "M3alem connecte les particuliers aux meilleurs artisans du Maroc. Devis instantanés, tarifs transparents, paiement sécurisé.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://m3alem.ma/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      };
      break;

    case "organization":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "M3alem",
        url: "https://m3alem.ma",
        logo: "https://m3alem.ma/logo.png",
        description: "Plateforme de mise en relation entre particuliers et techniciens qualifiés au Maroc",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+212-XXX-XXXXXX",
          contactType: "customer service",
          areaServed: "MA",
          availableLanguage: ["French", "Arabic"]
        },
        sameAs: [
          "https://www.facebook.com/m3alem",
          "https://www.instagram.com/m3alem",
          "https://www.linkedin.com/company/m3alem"
        ]
      };
      break;

    case "article":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: data.title,
        description: data.excerpt,
        image: data.image ? `https://m3alem.ma${data.image}` : "https://m3alem.ma/og-image.jpg",
        author: {
          "@type": "Person",
          name: data.author
        },
        publisher: {
          "@type": "Organization",
          name: "M3alem",
          logo: {
            "@type": "ImageObject",
            url: "https://m3alem.ma/logo.png"
          }
        },
        datePublished: data.date,
        dateModified: data.date,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://m3alem.ma/blog/${data.slug}`
        }
      };
      break;

    case "faq":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.map((faq: any) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      };
      break;

    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

