# Guide d'utilisation du CMS (Contentlayer)

Ce guide explique comment gérer le contenu du blog du site M3alem en utilisant Contentlayer.

## Introduction à Contentlayer

Contentlayer est un CMS Headless basé sur des fichiers Markdown. Cela signifie que votre contenu est stocké directement dans des fichiers Markdown au sein de votre projet, et Contentlayer se charge de les transformer en données utilisables par votre application Next.js.

**Avantages :**
-   **Contrôle total** : Votre contenu est versionné avec votre code.
-   **Performance** : Le contenu est pré-rendu au moment du build, ce qui garantit des performances optimales.
-   **Simplicité** : Pas de base de données externe à gérer.

## Structure du contenu

Les articles de blog sont situés dans le dossier `content/blog/` à la racine du projet. Chaque article est un fichier Markdown (`.md`).

```
m3alem-site/
├── content/
│   └── blog/
│       ├── comment-choisir-bon-plombier.md
│       ├── electricite-securite-maison.md
│       └── diy-petites-reparations-maison.md
└── ...
```

## Ajouter un nouvel article de blog

Pour ajouter un nouvel article, suivez ces étapes :

1.  **Créez un nouveau fichier Markdown** (`.md`) dans le dossier `content/blog/`. Le nom du fichier deviendra le slug de votre article (par exemple, `mon-nouvel-article.md` donnera l'URL `/blog/mon-nouvel-article`).

2.  **Ajoutez le 


front matter (métadonnées) au début du fichier. Le front matter est un bloc de texte au format YAML délimité par des `---` au début et à la fin du fichier.

    ```yaml
    ---
    title: "Titre de l'article"
    date: "AAAA-MM-JJ" # Format YYYY-MM-DD
    description: "Description courte de l'article"
    image: "/chemin/vers/image.jpg" # Chemin relatif depuis le dossier `public`
    category: "categorie" # Choisissez parmi: plomberie, electricite, peinture, jardinage, diy, actu-maison
    tags: ["tag1", "tag2"] # Liste de mots-clés (optionnel)
    author: "Nom de l'auteur"
    readingTime: 5 # Temps de lecture estimé en minutes (optionnel)
    featured: true # `true` pour afficher en article à la une sur la page du blog (optionnel, par défaut `false`)
    ---
    ```

3.  **Rédigez le contenu de votre article** en utilisant la syntaxe Markdown standard après le bloc de front matter.

4.  **Sauvegardez le fichier**.

## Mettre à jour un article existant

Pour modifier un article existant, ouvrez simplement le fichier Markdown correspondant dans `content/blog/`, apportez vos modifications et sauvegardez le fichier.

## Supprimer un article

Pour supprimer un article, supprimez simplement le fichier Markdown correspondant dans `content/blog/`.

## Reconstruire le site

Après avoir ajouté, modifié ou supprimé des articles, vous devrez reconstruire le site pour que les changements soient visibles. Si vous travaillez en local, le serveur de développement Next.js détectera automatiquement les changements et reconstruira le site. Si le site est déployé via CI/CD, un nouveau déploiement sera déclenché automatiquement.

Pour forcer une reconstruction locale :

```bash
npx contentlayer build
npm run dev
```

## Bonnes pratiques

-   **Nommage des fichiers** : Utilisez des noms de fichiers en minuscules, séparés par des tirets (kebab-case), sans caractères spéciaux ni accents.
-   **Images** : Placez les images utilisées dans les articles de blog dans le dossier `public/blog/` et référencez-les avec un chemin relatif (`/blog/mon-image.jpg`).
-   **Catégories** : Respectez les catégories prédéfinies pour assurer un bon filtrage sur le site.
-   **Relecture** : Relisez attentivement vos articles pour corriger les fautes d'orthographe et de grammaire.

Ce guide vous aidera à gérer efficacement le contenu du blog de M3alem. Pour toute question ou problème, n'hésitez pas à contacter l'équipe de développement.

