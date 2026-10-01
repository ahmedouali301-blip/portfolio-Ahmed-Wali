// Comprehensive translation dictionary for English (en) and French (fr)

export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      downloadCv: "Download CV",
      skipLink: "Skip to content",
      backToTop: "Back to top",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },

    // Hero section
    hero: {
      label: "COMPUTER ENGINEERING STUDENT",
      title: "Hi, I'm Ahmed Wali.",
      headline: "Building digital solutions with code, creativity and curiosity.",
      intro:
        "Computer engineering student with a background in Information Management, interested in web development, automation, data and intelligent systems.",
      exploreWork: "Explore my work",
      downloadCv: "Download CV",
      availability: "Looking for a professional opportunity",
      codeSnippetRole: "Computer engineering student",
      codeSnippetBase: "Sfax, Tunisia",
      terminalCommand: "$ python build_xml.py",
      terminalOutputs: [
        "✓ Excel results read",
        "✓ XML generated",
        "✓ LIN · CAN · FlexRay validated",
      ],
    },

    // About section
    about: {
      title: "More than a developer.",
      p1: "I hold a Licence in Informatique de Gestion from the Faculté des Sciences Économiques et de Gestion de Sfax. I came to software through economics and information management, and I'm now continuing toward computer engineering studies.",
      p2: "I enjoy turning real-world problems into practical technological solutions.",
      quote: "I don't just learn technologies. I use technology to build solutions.",
      story: [
        {
          title: "Economics",
          meta: "Baccalauréat en Économie · 2022–2023",
          text: "Where it started: accounting, management, mathematics and economics.",
        },
        {
          title: "Information Management",
          meta: "Licence in Informatique de Gestion · 2023–2026",
          text: "Programming, databases, project management and information systems at FSEG Sfax.",
        },
        {
          title: "Software Development",
          meta: "Projects and internships",
          text: "Web and mobile applications, and an automation plugin built during an internship at KPIT.",
        },
        {
          title: "Computer Engineering",
          meta: "Next step",
          text: "Continuing toward computer engineering studies, to build practical technological solutions.",
        },
      ],
    },

    // Experience section
    experience: {
      title: "What I've done.",
      intro:
        "Two internships, two very different problems: automating data for automotive protocols, and building a collaborative platform for internship management.",
      kpit: {
        role: "Summer internship",
        location: "Tunis / Sfax",
        period: "Jul – Aug 2025",
        project:
          "Automation plugin for XML file generation for E2E_Protection analysis",
        responsibilities: [
          "Extract and analyze test results from Excel files",
          "Automatically insert analysis data into structured XML files",
          "Validate and test the plugin on automotive communication protocols",
        ],
        pipeline: [
          {
            key: "excel",
            label: "Excel",
            detail: "Test results are stored in Excel files.",
          },
          {
            key: "python",
            label: "Python",
            detail:
              "A Python plugin, built with Pandas, reads and extracts the results.",
          },
          {
            key: "analysis",
            label: "Data analysis",
            detail:
              "The results are analyzed to produce the data the E2E_Protection analysis needs.",
          },
          {
            key: "xml",
            label: "XML",
            detail:
              "Analysis data is inserted automatically into a structured XML file.",
          },
          {
            key: "validation",
            label: "Validation",
            detail:
              "The plugin is validated and tested on the LIN, CAN and FlexRay protocols.",
          },
        ],
      },
      clinisys: {
        role: "Final year project (PFE)",
        location: "Tunis / Sfax",
        period: "Feb – Jun 2026",
        project:
          "Collaborative web platform for dynamic internship management and tracking",
        modules: [
          {
            key: "users",
            label: "Users & roles",
            text: "User management with roles that shape what each person can see and do.",
          },
          {
            key: "agile",
            label: "Agile tracking",
            text: "Agile follow-up of projects and their tasks.",
          },
          {
            key: "planning",
            label: "Planning",
            text: "Collaboration and planning between the people involved in an internship.",
          },
          {
            key: "notifications",
            label: "Workflow & notifications",
            text: "An administrative workflow with notifications.",
          },
        ],
      },
    },

    // Projects section
    projects: {
      title: "What I build.",
      intro:
        "Four projects, from full-stack web to mobile and engineering automation. Each one starts from a concrete problem.",
      problemTitle: "The problem it solves",
      githubSoon: "GitHub, soon",
      liveDemo: "Live demo",
      items: {
        surveillances: {
          name: "Gestion des surveillances",
          kind: "Full-stack web application",
          description:
            "A platform designed to manage examination surveillance preferences, teacher workload and session planning.",
          problem:
            "Planning exam surveillance means balancing teachers' preferences, their workload and the exam sessions. This application brings all three into one place.",
          features: [
            "Authentication",
            "Teacher management",
            "Subject management",
            "Workload calculation",
            "Surveillance preferences",
            "Validation rules",
            "Dynamic dashboard",
            "Calendar visualization",
          ],
        },
        clinisys: {
          name: "Gestion des stages",
          kind: "Collaborative platform · Final year project",
          description:
            "A collaborative platform for internship management and project tracking, built as a real software product.",
          problem:
            "Internships involve many people, tasks and administrative steps. Clinisys lets them be managed and followed dynamically in a single workspace.",
          features: [
            "User management",
            "Roles",
            "Agile project tracking",
            "Collaboration",
            "Planning",
            "Administrative workflow",
            "Notifications",
          ],
        },
        prayer: {
          name: "My Prayer",
          kind: "Mobile application",
          description:
            "A Flutter mobile application designed as a modern, focused mobile product.",
          problem:
            "Everyday prayer essentials, such as direction, counting, preferences and language, live in one simple app.",
          features: [
            "Prayer experience",
            "Qibla",
            "Counter",
            "Settings",
            "Language",
          ],
        },
        kpit: {
          name: "KPIT XML Automation",
          kind: "Engineering automation · Internship project",
          description:
            "An automation plugin that turns test results into structured XML for the E2E_Protection analysis.",
          problem:
            "Test results lived in Excel files and had to end up in structured XML files. The plugin does that work automatically, then gets validated on automotive protocols.",
          features: [
            "Extracts and analyzes results from Excel",
            "Inserts analysis data into structured XML",
            "Validated on LIN, CAN and FlexRay",
          ],
        },
      },
    },

    // Skills section
    skills: {
      title: "What I know.",
      intro:
        "The tools I work with, grouped by what they're for. Point at one to see where it lives in my projects.",
      allTab: "All",
      idleReadout: "Hover or focus a technology.",
      usedIn: "Used in",
      groups: {
        frontend: "Frontend",
        backend: "Backend",
        data: "Data",
        mobile: "Mobile",
      },
    },

    // Process section
    process: {
      title: "How I approach problems.",
      intro:
        "I enjoy turning real-world problems into practical software solutions. This is the loop I follow, and it never really ends.",
      steps: [
        {
          title: "Understand",
          text: "Start from the real problem and the people who face it, before thinking about any tool.",
        },
        {
          title: "Analyze",
          text: "Break the problem down: needs, constraints, data and the cases that can go wrong.",
        },
        {
          title: "Design",
          text: "Shape the solution first: how the parts fit together, what data it holds, what users see.",
        },
        {
          title: "Build",
          text: "Turn the design into clear, maintainable code, one working piece at a time.",
        },
        {
          title: "Test",
          text: "Check the result against real situations, not only the happy path.",
        },
        {
          title: "Improve",
          text: "Learn from what the tests and users show, refine, and start the loop again.",
        },
      ],
      loopFinal: "Back to step 01, with more to work with.",
      loopNext: "Each step feeds the next one.",
      workingStyleTitle: "How I work with others",
      workingStyle: [
        "Problem solving",
        "Teamwork",
        "Time management",
        "Quick learning",
        "Leadership and communication",
        "Brainstorming",
      ],
    },

    // Education section
    education: {
      title: "Where I studied.",
      intro:
        "From economics to information management, and on toward computer engineering.",
      items: [
        {
          id: "next",
          period: "Next",
          title: "Computer engineering studies",
          place: "Continuing toward computer engineering",
          stage: "Computer Engineering",
          text: "The next step: deepening the engineering side of building software.",
        },
        {
          id: "licence",
          period: "2023 — 2026",
          title: "Licence in Informatique de Gestion",
          place:
            "Faculté des Sciences Économiques et de Gestion de Sfax (FSEG Sfax)",
          stage: "Information Management",
          text: "Programming, databases, project management, information systems and data analysis.",
        },
        {
          id: "bac",
          period: "2022 — 2023",
          title: "Baccalauréat en Économie",
          place: "Lycée Tayeb Mhiri, Sfax",
          stage: "Economics",
          text: "Secondary education focused on economics: accounting, management, mathematics and economics.",
        },
      ],
    },

    // Certifications & Languages section
    certifications: {
      title: "Certifications.",
      intro:
        "Short, focused certifications that complement the technical work: agile, quality, negotiation, sales and marketing.",
      viewCredential: "View credential",
      languagesTitle: "Languages",
      languages: ["Arabic", "French", "English"],
    },

    // Contact section
    contact: {
      title: "Have an idea? Let's build it.",
      lead: "Whether it's a software project, an internship opportunity or a collaboration, feel free to get in touch.",
      labels: {
        name: "Name",
        email: "Email",
        message: "Message",
      },
      submit: "Send message",
      noteSent:
        "Your email app should now open with the message ready to send. If it doesn't, write directly to ahmedouali301@gmail.com.",
      noteDefault:
        "This opens your email app with the message ready to send.",
    },

    // Footer
    footer: {
      copyright: "Designed and built by hand with React.",
      backToTop: "Back to top",
    },
  },

  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
      downloadCv: "Télécharger CV",
      skipLink: "Aller au contenu",
      backToTop: "Haut de page",
      menuOpen: "Ouvrir le menu",
      menuClose: "Fermer le menu",
    },

    // Hero section
    hero: {
      label: "ÉTUDIANT EN GÉNIE INFORMATIQUE",
      title: "Bonjour, je suis Ahmed Wali.",
      headline:
        "Créateur de solutions numériques avec du code, de la créativité et de la curiosité.",
      intro:
        "Étudiant en génie informatique issu d'un parcours en Informatique de Gestion, passionné par le développement web, l'automatisation, les données et les systèmes intelligents.",
      exploreWork: "Explorer mes projets",
      downloadCv: "Télécharger CV",
      availability: "À la recherche d’une opportunité professionnelle",
      codeSnippetRole: "Étudiant en génie informatique",
      codeSnippetBase: "Sfax, Tunisie",
      terminalCommand: "$ python build_xml.py",
      terminalOutputs: [
        "✓ Résultats Excel extraits",
        "✓ XML généré",
        "✓ LIN · CAN · FlexRay validés",
      ],
    },

    // About section
    about: {
      title: "Plus qu'un développeur.",
      p1: "Je suis titulaire d'une Licence en Informatique de Gestion de la Faculté des Sciences Économiques et de Gestion de Sfax. Arrivé au développement logiciel via l'économie et la gestion des systèmes d'information, je poursuis actuellement mon parcours vers le génie informatique.",
      p2: "J'aime transformer des problèmes du monde réel en solutions technologiques concrètes et efficaces.",
      quote:
        "Je n'apprends pas simplement des technologies. J'utilise la technologie pour concevoir des solutions.",
      story: [
        {
          title: "Économie",
          meta: "Baccalauréat en Économie · 2022–2023",
          text: "Là où tout a commencé : comptabilité, gestion, mathématiques et économie.",
        },
        {
          title: "Informatique de Gestion",
          meta: "Licence en Informatique de Gestion · 2023–2026",
          text: "Programmation, bases de données, gestion de projet et systèmes d'information à la FSEG Sfax.",
        },
        {
          title: "Développement Logiciel",
          meta: "Projets et stages",
          text: "Applications web et mobiles, ainsi qu'un plugin d'automatisation développé en stage chez KPIT.",
        },
        {
          title: "Génie Informatique",
          meta: "Prochaine étape",
          text: "Poursuite d'études en génie informatique pour concevoir des solutions technologiques avancées.",
        },
      ],
    },

    // Experience section
    experience: {
      title: "Mon expérience.",
      intro:
        "Deux stages, deux défis distincts : automatiser le traitement de données pour des protocoles automobiles, et concevoir une plateforme collaborative de gestion de stages.",
      kpit: {
        role: "Stage d'été",
        location: "Tunis / Sfax",
        period: "Juil – Août 2025",
        project:
          "Plugin d'automatisation pour la génération de fichiers XML d'analyse E2E_Protection",
        responsibilities: [
          "Extraire et analyser les résultats de tests depuis des fichiers Excel",
          "Insérer automatiquement les données d'analyse dans des fichiers XML structurés",
          "Valider et tester le plugin sur des protocoles de communication automobile",
        ],
        pipeline: [
          {
            key: "excel",
            label: "Excel",
            detail: "Les résultats des tests sont stockés dans des fichiers Excel.",
          },
          {
            key: "python",
            label: "Python",
            detail:
              "Un plugin Python développé avec Pandas lit et extrait les résultats.",
          },
          {
            key: "analysis",
            label: "Analyse des données",
            detail:
              "Les résultats sont analysés pour produire les données requises pour l'analyse E2E_Protection.",
          },
          {
            key: "xml",
            label: "XML",
            detail:
              "Les données d'analyse sont insérées automatiquement dans un fichier XML structuré.",
          },
          {
            key: "validation",
            label: "Validation",
            detail:
              "Le plugin est validé et testé sur les protocoles LIN, CAN et FlexRay.",
          },
        ],
      },
      clinisys: {
        role: "Projet de Fin d'Études (PFE)",
        location: "Tunis / Sfax",
        period: "Fév – Juin 2026",
        project:
          "Plateforme web collaborative pour la gestion dynamique et le suivi des stages",
        modules: [
          {
            key: "users",
            label: "Utilisateurs & rôles",
            text: "Gestion des utilisateurs avec des rôles définissant les droits et accès de chacun.",
          },
          {
            key: "agile",
            label: "Suivi Agile",
            text: "Suivi agile des projets et de leurs tâches associées.",
          },
          {
            key: "planning",
            label: "Planning",
            text: "Planification et collaboration entre les différents intervenants d'un stage.",
          },
          {
            key: "notifications",
            label: "Workflow & notifications",
            text: "Circuit de validation administratif avec notifications automatiques.",
          },
        ],
      },
    },

    // Projects section
    projects: {
      title: "Mes réalisations.",
      intro:
        "Quatre projets couvrant le développement web full-stack, les applications mobiles et l'automatisation. Chacun répond à un besoin précis.",
      problemTitle: "Le problème résolu",
      githubSoon: "GitHub, bientôt",
      liveDemo: "Démo en direct",
      items: {
        surveillances: {
          name: "Gestion des surveillances",
          kind: "Application web Full-stack",
          description:
            "Plateforme conçue pour gérer les préférences de surveillance d'examens, la charge de travail des enseignants et la planification des sessions.",
          problem:
            "Planifier les surveillances nécessite d'équilibrer les vœux des enseignants, leur charge horaire et le calendrier des examens. Cette application centralise l'ensemble de ces contraintes.",
          features: [
            "Authentification",
            "Gestion des enseignants",
            "Gestion des matières",
            "Calcul de la charge horaire",
            "Préférences de surveillance",
            "Règles de validation",
            "Tableau de bord dynamique",
            "Visualisation calendrier",
          ],
        },
        clinisys: {
          name: "Gestion des stages",
          kind: "Plateforme collaborative · Projet PFE",
          description:
            "Plateforme collaborative pour la gestion et le suivi des stages de fin d'études, conçue comme un véritable produit logiciel.",
          problem:
            "Les stages font intervenir plusieurs acteurs et étapes administratives. Clinisys permet de les gérer de façon fluide et centralisée.",
          features: [
            "Gestion d'utilisateurs",
            "Rôles & autorisations",
            "Suivi projet Agile",
            "Espace collaboratif",
            "Planification",
            "Workflow administratif",
            "Notifications",
          ],
        },
        prayer: {
          name: "My Prayer",
          kind: "Application mobile",
          description:
            "Application mobile développée sous Flutter, conçue comme un produit simple et intuitif.",
          problem:
            "Toutes les fonctionnalités essentielles du quotidien (direction Qibla, compteur, paramètres et langue) réunies dans une interface sobre.",
          features: [
            "Expérience de prière",
            "Qibla",
            "Compteur",
            "Paramètres",
            "Multilingue",
          ],
        },
        kpit: {
          name: "KPIT XML Automation",
          kind: "Automatisation logicielle · Projet de stage",
          description:
            "Plugin d'automatisation transformant des résultats de tests en fichiers XML structurés pour l'analyse E2E_Protection.",
          problem:
            "Les résultats de tests résidaient dans des fichiers Excel et devaient être convertis en XML structuré. Le plugin effectue ce traitement automatiquement.",
          features: [
            "Extraction et analyse de fichiers Excel",
            "Insertion automatique dans des fichiers XML structurés",
            "Validé sur protocoles LIN, CAN et FlexRay",
          ],
        },
      },
    },

    // Skills section
    skills: {
      title: "Mes compétences.",
      intro:
        "Les technologies que j'utilise, regroupées par domaine. Survolez un outil pour découvrir les projets dans lesquels il intervient.",
      allTab: "Tous",
      idleReadout: "Survolez ou sélectionnez une technologie.",
      usedIn: "Utilisé dans",
      groups: {
        frontend: "Frontend",
        backend: "Backend",
        data: "Données",
        mobile: "Mobile",
      },
    },

    // Process section
    process: {
      title: "Mon approche.",
      intro:
        "J'aime transformer les problèmes réels en solutions logicielles concrètes. Voici la démarche méthodique que j'applique au quotidien.",
      steps: [
        {
          title: "Comprendre",
          text: "Partir du besoin réel et des utilisateurs concernés avant de penser au moindre outil.",
        },
        {
          title: "Analyser",
          text: "Décomposer le problème : besoins, contraintes, données et cas limites.",
        },
        {
          title: "Concevoir",
          text: "Structurer la solution : architecture des composants, modèle de données et parcours utilisateur.",
        },
        {
          title: "Développer",
          text: "Transformer la conception en code propre, lisible et maintenable, étape par étape.",
        },
        {
          title: "Tester",
          text: "Vérifier le fonctionnement sur des scénarios réels, pas uniquement le cas nominal.",
        },
        {
          title: "Améliorer",
          text: "Tirer parti des retours de tests et des utilisateurs pour affiner et faire évoluer le produit.",
        },
      ],
      loopFinal: "Retour à l'étape 01, avec encore plus de recul.",
      loopNext: "Chaque étape alimente la suivante.",
      workingStyleTitle: "Comment je travaille en équipe",
      workingStyle: [
        "Résolution de problèmes",
        "Travail d'équipe",
        "Gestion du temps",
        "Apprentissage rapide",
        "Leadership et communication",
        "Remue-méninges (Brainstorming)",
      ],
    },

    // Education section
    education: {
      title: "Parcours académique.",
      intro:
        "De l'économie à l'informatique de gestion, vers le génie informatique.",
      items: [
        {
          id: "next",
          period: "À venir",
          title: "Études en génie informatique",
          place: "Poursuite d'études en génie informatique",
          stage: "Génie Informatique",
          text: "La prochaine étape : approfondir les aspects ingénierie et conception de logiciels complexes.",
        },
        {
          id: "licence",
          period: "2023 — 2026",
          title: "Licence en Informatique de Gestion",
          place:
            "Faculté des Sciences Économiques et de Gestion de Sfax (FSEG Sfax)",
          stage: "Informatique de Gestion",
          text: "Programmation, bases de données, gestion de projet, systèmes d'information et analyse de données.",
        },
        {
          id: "bac",
          period: "2022 — 2023",
          title: "Baccalauréat en Économie",
          place: "Lycée Tayeb Mhiri, Sfax",
          stage: "Économie",
          text: "Enseignement secondaire spécialisé en économie : comptabilité, gestion, mathématiques et économie.",
        },
      ],
    },

    // Certifications & Languages section
    certifications: {
      title: "Certifications.",
      intro:
        "Des certifications complémentaires axées sur l'agilité, la qualité, la négociation, la vente et le marketing.",
      viewCredential: "Voir le certificat",
      languagesTitle: "Langues",
      languages: ["Arabe", "Français", "Anglais"],
    },

    // Contact section
    contact: {
      title: "Un projet en tête ? Parlons-en.",
      lead: "Que ce soit pour un projet logiciel, une opportunité de stage en alternance ou une collaboration, n'hésitez pas à me contacter.",
      labels: {
        name: "Nom",
        email: "E-mail",
        message: "Message",
      },
      submit: "Envoyer le message",
      noteSent:
        "Votre application de messagerie va s'ouvrir avec le message prêt à l'envoi. Si ce n'est pas le cas, écrivez-moi directement à ahmedouali301@gmail.com.",
      noteDefault:
        "Cela ouvre votre application de messagerie avec le message prêt à être envoyé.",
    },

    // Footer
    footer: {
      copyright: "Conçu et développé à la main avec React.",
      backToTop: "Haut de page",
    },
  },
};
