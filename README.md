# Portfolio — Ahmed Wali

Portfolio personnel en **React + Vite** (JavaScript, CSS moderne, Framer Motion, Lucide React). Aucun backend.

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:5173
```

Autres commandes :

```bash
npm run build      # build de production dans dist/
npm run preview    # prévisualiser le build
```

Prérequis : Node.js 18 ou plus récent.

## À compléter avant de publier

| Quoi | Où |
| --- | --- |
| **Lien GitHub** (icône du hero, contact) | `src/data/site.js` → `github` |
| **Liens GitHub / démo de chaque projet** | `src/data/projects.js` → `github`, `demo` |
| **CV** (actuellement ton fichier `.docx`) | remplace `public/CV-Ahmed-Wali.docx` ; si tu passes à un PDF, mets aussi à jour `cv` et `cvFileName` dans `src/data/site.js` |
| **Domaine** (SEO / réseaux sociaux) | `index.html` : ajoute `canonical`, `og:url` et rends `og:image` absolu (voir le commentaire TODO) |
| **Stack de Clinisys** | `src/data/projects.js` → `tech` (vide pour l'instant, le brief ne la donnait pas) |

Tant que `github` est vide, l'icône GitHub est masquée et les boutons de projet affichent « GitHub, soon ».

## Structure

```
src/
├── components/     Navbar, Hero, About, Experience, Projects, Skills,
│                   Process, Education, Certifications, Languages, Contact, Footer
│                   (+ ProjectVisuals, Reveal, SectionHeading, icons, Monogram)
├── data/           site.js, experience.js, projects.js, skills.js,
│                   process.js, education.js, certifications.js
├── hooks/          useActiveSection, useAutoAdvance
├── App.jsx · main.jsx · index.css
public/             favicon, image Open Graph, robots.txt, CV
```

Le contenu est séparé des composants : pour modifier un texte, un projet ou une compétence, édite les fichiers de `src/data/`.

Les couleurs, polices et espacements sont des variables CSS dans `src/index.css` (`:root`). La couleur d'accent est `--accent`.

## Règle de contenu

Rien n'est inventé : pas de pourcentages de compétences, pas de niveaux de langues, pas de dates ni d'organismes de certification. Les liens de certifications viennent de ton CV. Les maquettes des projets sont des **illustrations** (légendées comme telles), pas des captures d'écran : tu peux les remplacer par de vraies captures plus tard.

## Accessibilité, performance, SEO

- HTML sémantique, lien « Skip to content », focus visible, navigation clavier (onglets fléchés dans la maquette Clinisys), `aria-live` pour les zones dynamiques.
- `prefers-reduced-motion` respecté (Framer Motion via `MotionConfig`, plus les animations CSS).
- Aucune image lourde ni vidéo : visuels en CSS/SVG. Chunks séparés pour React et Framer Motion.
- Titre, meta description, Open Graph, Twitter Card et données structurées `Person` dans `index.html`.

## Formulaire de contact

Sans backend, le formulaire ouvre le client mail du visiteur avec le message pré-rempli (`mailto:`). Pour envoyer directement depuis la page, remplace le handler `onSubmit` de `src/components/Contact.jsx` par un appel à un service (Formspree, Netlify Forms, EmailJS…).

## Déploiement

Le dossier `dist/` est statique : Netlify, Vercel, Cloudflare Pages ou GitHub Pages conviennent. Pour GitHub Pages sous un sous-chemin, définis `base: "/nom-du-repo/"` dans `vite.config.js`.
