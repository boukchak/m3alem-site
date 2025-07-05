import { allPosts } from "contentlayer/generated";

export async function GET() {
  const baseUrl = "https://m3alem.ma"; // Remplacer par l'URL de production
  
  const staticPages = [
    "",
    "/about",
    "/services", 
    "/contact",
    "/blog",
    "/legal",
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date().toISOString(),
    changeFrequency: page === "" ? "daily" : page === "/blog" ? "weekly" : "monthly",
    priority: page === "" ? 1.0 : page === "/blog" ? 0.8 : 0.6,
  }));

  const blogUrls = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const allUrls = [...staticUrls, ...blogUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (url) => `
  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastModified}</lastmod>
    <changefreq>${url.changeFrequency}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

