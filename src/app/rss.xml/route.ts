import { allPosts } from "contentlayer/generated";

export async function GET() {
  const baseUrl = "https://m3alem.ma"; // Remplacer par l'URL de production
  
  const sortedPosts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 20); // Limiter aux 20 derniers articles

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>M3alem - Blog & Ressources</title>
    <description>Conseils d'experts, tutoriels DIY et actualités pour tous vos projets maison</description>
    <link>${baseUrl}/blog</link>
    <language>fr-FR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    
${sortedPosts
  .map(
    (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${post.category}</category>
      <author>contact@m3alem.ma (${post.author})</author>
      ${post.image ? `<enclosure url="${baseUrl}${post.image}" type="image/jpeg"/>` : ""}
    </item>`
  )
  .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

