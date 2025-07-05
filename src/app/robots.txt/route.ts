export async function GET() {
  const baseUrl = "https://m3alem.ma"; // Remplacer par l'URL de production
  
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin areas (if any)
Disallow: /admin/
Disallow: /_next/
Disallow: /api/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /contact
Allow: /blog
Allow: /blog/*

# Crawl delay (optional)
Crawl-delay: 1`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}

