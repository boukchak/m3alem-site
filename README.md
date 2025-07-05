# M3alem Site Vitrine

Bienvenue sur le dépôt du site vitrine officiel de M3alem, la plateforme #1 au Maroc pour la mise en relation entre particuliers et techniciens.

Ce projet est développé avec Next.js 14, Tailwind CSS, shadcn/ui, Contentlayer et Framer Motion pour offrir une expérience utilisateur moderne, rapide et optimisée pour le SEO.

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Installation et Lancement](#installation-et-lancement)
- [Structure du projet](#structure-du-projet)
- [Déploiement](#déploiement)
- [Gestion du contenu (Blog)](#gestion-du-contenu-blog)
- [Optimisation SEO](#optimisation-seo)
- [Accessibilité](#accessibilité)
- [Tracking et Consentement Cookies](#tracking-et-consentement-cookies)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Fonctionnalités

- **Présentation de la plateforme M3alem** : Sections dédiées aux avantages, au fonctionnement et aux témoignages.
- **Blog intégré** : Articles de conseils, tutoriels DIY et actualités gérés via Contentlayer (Markdown).
- **Design moderne et responsive** : Adapté à toutes les tailles d'écran (mobile, tablette, desktop).
- **Animations fluides** : Expérience utilisateur améliorée grâce à Framer Motion.
- **Optimisation SEO** : Meta tags, sitemap, robots.txt, et rich snippets pour une meilleure visibilité.
- **Accessibilité** : Conformité aux normes WCAG AA.
- **Formulaires de contact** : Pour les demandes d'informations et les partenariats.
- **Intégration des réseaux sociaux**.

## Technologies utilisées

- **Next.js 14** (App Router, TypeScript) : Framework React pour le rendu côté serveur (SSR) et la génération de sites statiques (SSG).
- **React** : Bibliothèque JavaScript pour la construction d'interfaces utilisateur.
- **TypeScript** : Langage de programmation typé pour une meilleure robustesse du code.
- **Tailwind CSS** : Framework CSS utilitaire pour un stylisme rapide et personnalisable.
- **shadcn/ui** : Composants UI réutilisables et personnalisables basés sur Tailwind CSS et Radix UI.
- **Contentlayer** : CMS Headless pour la gestion de contenu local (Markdown) et la génération de données statiques.
- **Framer Motion** : Bibliothèque d'animation pour React.
- **Lucide React** : Bibliothèque d'icônes légères et personnalisables.
- **date-fns** : Utilitaires pour la manipulation des dates.

## Installation et Lancement

Pour lancer le projet en local, suivez les étapes ci-dessous :

1.  **Cloner le dépôt** :
    ```bash
    git clone [URL_DU_DEPOT]
    cd m3alem-site
    ```

2.  **Installer les dépendances** :
    ```bash
    npm install
    ```
    Si vous rencontrez des problèmes avec `next-contentlayer` ou `shadcn/ui`, essayez :
    ```bash
    npm install --legacy-peer-deps
    ```

3.  **Générer le contenu Contentlayer** :
    ```bash
    npx contentlayer build
    ```

4.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```

Le site sera accessible à l'adresse `http://localhost:3000`.

## Structure du projet

```
m3alem-site/
├── .github/
│   └── workflows/
│       └── deploy.yml # Workflow GitHub Actions pour le déploiement
├── .contentlayer/ # Fichiers générés par Contentlayer
├── content/
│   └── blog/ # Articles de blog en Markdown
│       ├── comment-choisir-bon-plombier.md
│       ├── electricite-securite-maison.md
│       └── diy-petites-reparations-maison.md
├── public/
│   ├── app-store-badge.svg
│   ├── google-play-badge.svg
│   ├── og-image.jpg
│   └── # Images pour le blog et autres assets
├── src/
│   ├── app/
│   │   ├── layout.tsx # Layout principal (Navbar, Footer)
│   │   ├── page.tsx # Page d'accueil
│   │   ├── blog/
│   │   │   ├── page.tsx # Page liste des articles de blog
│   │   │   └── [slug]/page.tsx # Page de détail d'un article
│   │   └── globals.css # Styles globaux et Tailwind CSS
│   ├── components/
│   │   └── ui/ # Composants UI réutilisables (shadcn/ui, custom)
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── features-section.tsx
│   │       ├── footer.tsx
│   │       ├── hero-section.tsx
│   │       ├── how-it-works-section.tsx
│   │       ├── input.tsx
│   │       ├── navbar.tsx
│   │       └── textarea.tsx
│   └── lib/
│       └── utils.ts # Fonctions utilitaires (cn, etc.)
├── contentlayer.config.ts # Configuration de Contentlayer
├── next.config.ts # Configuration Next.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts # Configuration Tailwind CSS
├── tsconfig.json # Configuration TypeScript
└── ...
```

## Déploiement

Ce projet est configuré pour un déploiement continu via **GitHub Actions** et **Vercel**.

1.  **Créer un dépôt GitHub** : Poussez ce projet sur un nouveau dépôt GitHub.
2.  **Connecter Vercel à GitHub** : Dans votre tableau de bord Vercel, importez le projet depuis votre dépôt GitHub.
3.  **Configurer les secrets Vercel** : Ajoutez les variables d'environnement suivantes en tant que secrets dans les paramètres de votre dépôt GitHub (Settings > Secrets and variables > Actions > New repository secret) :
    -   `VERCEL_ORG_ID` : L'ID de votre organisation Vercel.
    -   `VERCEL_PROJECT_ID` : L'ID de votre projet Vercel.
    -   `VERCEL_TOKEN` : Un jeton d'accès personnel Vercel (générable depuis les paramètres de votre compte Vercel).

Une fois ces étapes effectuées, chaque push sur la branche `main` déclenchera automatiquement un déploiement sur Vercel.

## Gestion du contenu (Blog)

Le blog est géré via **Contentlayer**. Les articles sont écrits en Markdown et stockés dans le dossier `content/blog/`.

Pour ajouter un nouvel article :

1.  Créez un nouveau fichier `.md` dans `content/blog/`.
2.  Ajoutez le 


front matter (métadonnées) au début du fichier, suivi du contenu Markdown.
3.  Le contenu sera automatiquement généré par Contentlayer lors du build.

Exemple de front matter :

```yaml
---
title: "Titre de l'article"
date: "AAAA-MM-JJ"
description: "Description courte de l'article"
image: "/chemin/vers/image.jpg" # Optionnel
category: "categorie"
tags: ["tag1", "tag2"] # Optionnel
author: "Nom de l'auteur"
readingTime: 5 # Temps de lecture estimé en minutes
featured: true # Pour mettre l'article en avant sur la page du blog
---
```

## Optimisation SEO

Le site est optimisé pour le référencement naturel (SEO) :

-   **Meta Tags** : Utilisation de `next/head` pour des titres, descriptions et mots-clés pertinents pour chaque page.
-   **Open Graph & Twitter Cards** : Configuration pour un meilleur affichage lors du partage sur les réseaux sociaux.
-   **Sitemap dynamique** : Génération automatique d'un sitemap pour aider les moteurs de recherche à indexer le site.
-   **Robots.txt** : Fichier `robots.txt` pour guider les crawlers des moteurs de recherche.
-   **Rich Snippets (FAQ)** : Implémentation de données structurées pour les FAQ afin d'améliorer la visibilité dans les résultats de recherche.

## Accessibilité

Nous nous engageons à rendre ce site accessible à tous les utilisateurs. Les efforts d'accessibilité incluent :

-   **Conformité WCAG AA** : Respect des directives pour l'accessibilité du contenu web.
-   **Sémantique HTML** : Utilisation de balises HTML sémantiques pour une meilleure compréhension par les lecteurs d'écran.
-   **Contraste des couleurs** : Vérification des contrastes pour assurer une lisibilité optimale.
-   **Navigation au clavier** : Assurer que toutes les fonctionnalités sont accessibles via le clavier.
-   **Textes alternatifs** : Fourniture de descriptions pour les images.

## Tracking et Consentement Cookies

Le site intègre des outils de tracking pour l'analyse d'audience et la personnalisation de l'expérience utilisateur. Un bandeau de consentement aux cookies est mis en place pour se conformer aux réglementations (RGPD, etc.).

-   **Google Tag Manager (GTM)** : Pour la gestion centralisée des balises de tracking.
-   **Bandeau de consentement** : Permet aux utilisateurs de gérer leurs préférences en matière de cookies.

## Contribuer

Nous accueillons les contributions ! Si vous souhaitez améliorer ce projet, veuillez suivre ces étapes :

1.  Forker le dépôt.
2.  Créer une nouvelle branche (`git checkout -b feature/ma-nouvelle-fonctionnalite`).
3.  Effectuer vos modifications et commiter (`git commit -m 


"[feat]: Ajout de ma nouvelle fonctionnalité"`).
4.  Pousser la branche (`git push origin feature/ma-nouvelle-fonctionnalite`).
5.  Ouvrir une Pull Request.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.


