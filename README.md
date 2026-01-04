# Portfolio BTS SIO

Un site web portfolio moderne et élégant présentant le parcours en BTS Services Informatiques aux Organisations (SIO). Le site est construit avec **React 19** et **Tailwind CSS 4**, offrant une expérience utilisateur fluide avec un système de thème clair/sombre.

## Caractéristiques principales

- **Design sobre et élégant** : Interface minimaliste avec un gradient bleu-violet pour une touche moderne
- **Thème clair/sombre** : Basculement facile entre les deux thèmes avec sauvegarde des préférences
- **Responsive design** : Adaptation automatique à tous les appareils (mobile, tablette, desktop)
- **Navigation fluide** : Système de navigation intuitif avec routing côté client
- **Pages complètes** :
  - **Accueil** : Présentation générale avec sections d'introduction
  - **BTS SIO** : Informations détaillées sur la formation et ses deux options (SISR et SLAM)
  - **Stages** : Pages dédiées aux stages de 1ère et 2ème année
  - **Veille technologique** : Espace pour partager les recherches technologiques
  - **Tableau de compétences E4** : Évaluation des compétences acquises

## Structure du projet

```
portfolio-bts-sio/
├── client/                    # Code frontend React
│   ├── public/               # Ressources statiques
│   ├── src/
│   │   ├── components/       # Composants réutilisables
│   │   │   ├── Layout.tsx    # Layout principal avec navigation
│   │   │   └── ui/           # Composants shadcn/ui
│   │   ├── pages/            # Pages de l'application
│   │   │   ├── Home.tsx      # Page d'accueil
│   │   │   ├── BtsSio.tsx    # Page BTS SIO
│   │   │   ├── Stage1.tsx    # Page Stage 1ère année
│   │   │   ├── Stage2.tsx    # Page Stage 2ème année
│   │   │   ├── VeilleT.tsx   # Page Veille technologique
│   │   │   └── Competences.tsx # Page Compétences E4
│   │   ├── contexts/         # Contextes React
│   │   │   └── ThemeContext.tsx # Gestion du thème
│   │   ├── App.tsx           # Composant racine avec routing
│   │   ├── main.tsx          # Point d'entrée React
│   │   └── index.css         # Styles globaux et variables CSS
│   ├── index.html            # Template HTML
│   ├── package.json          # Dépendances frontend
│   └── tsconfig.json         # Configuration TypeScript
├── todo.md                   # Liste des tâches du projet
└── README.md                 # Ce fichier
```

## Installation et lancement

### Prérequis

- **Node.js** 18+ et **npm** ou **pnpm**
- Un navigateur moderne (Chrome, Firefox, Safari, Edge)

### Étapes d'installation

1. **Cloner ou télécharger le projet**
   ```bash
   cd portfolio-bts-sio
   ```

2. **Installer les dépendances**
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   pnpm dev
   # ou
   npm run dev
   ```

4. **Accéder au site**
   - Le serveur démarre généralement sur `http://localhost:5173`
   - Ouvrez cette URL dans votre navigateur

### Commandes disponibles

| Commande | Description |
|----------|-------------|
| `pnpm dev` | Lance le serveur de développement avec hot reload |
| `pnpm build` | Crée une version optimisée pour la production |
| `pnpm preview` | Prévisualise la version de production localement |
| `pnpm lint` | Vérifie la qualité du code |

## Personnalisation

### Modifier le contenu des pages

Chaque page est un fichier React dans `client/src/pages/`. Pour modifier le contenu :

1. Ouvrez le fichier de la page souhaitée (ex: `BtsSio.tsx`)
2. Modifiez le texte et la structure HTML
3. Les changements s'affichent automatiquement grâce au hot reload

### Ajouter des images

1. Placez vos images dans `client/public/`
2. Référencez-les avec un chemin absolu : `<img src="/nom-image.jpg" alt="Description" />`

### Personnaliser les couleurs et le design

Les couleurs et styles sont définis dans `client/src/index.css` et `client/tailwind.config.ts`. Vous pouvez modifier :

- Les variables CSS pour les thèmes clair/sombre
- Les couleurs Tailwind
- Les polices de caractères
- Les espacements et rayons

### Ajouter de nouvelles pages

1. Créez un nouveau fichier dans `client/src/pages/` (ex: `NomPage.tsx`)
2. Importez-le dans `client/src/App.tsx`
3. Ajoutez la route correspondante dans le composant `Router`
4. Ajoutez le lien de navigation dans `client/src/components/Layout.tsx`

## Technologie utilisée

| Technologie | Utilisation |
|-------------|------------|
| **React 19** | Framework frontend |
| **TypeScript** | Typage statique |
| **Tailwind CSS 4** | Framework CSS utilitaire |
| **shadcn/ui** | Composants UI modernes |
| **Wouter** | Routing côté client |
| **Lucide React** | Icônes vectorielles |
| **Vite** | Bundler et serveur de développement |

## Système de thème

Le site dispose d'un système de thème complet :

- **Thème clair** : Fond blanc, texte sombre
- **Thème sombre** : Fond sombre, texte clair
- **Basculement** : Bouton dans le header pour changer de thème
- **Persistance** : Le choix du thème est sauvegardé localement

Le thème est géré via le contexte React `ThemeContext` et les variables CSS.

## Déploiement

Pour déployer le site en production :

1. **Construire le projet**
   ```bash
   pnpm build
   ```

2. **Vérifier la version de production**
   ```bash
   pnpm preview
   ```

3. **Déployer les fichiers**
   - Les fichiers de production se trouvent dans le dossier `dist/`
   - Vous pouvez les déployer sur n'importe quel serveur web statique (Vercel, Netlify, GitHub Pages, etc.)

## Responsive design

Le site est entièrement responsive et s'adapte à tous les appareils :

- **Mobile** : Navigation réduite, layout en colonne
- **Tablette** : Navigation partiellement affichée
- **Desktop** : Navigation complète, layout multi-colonnes

## Accessibilité

Le site respecte les normes d'accessibilité :

- Contraste suffisant entre le texte et le fond
- Navigation au clavier complète
- Attributs `alt` pour les images
- Structure sémantique HTML

## Troubleshooting

### Le serveur ne démarre pas
- Vérifiez que Node.js est installé : `node --version`
- Supprimez `node_modules` et réinstallez : `pnpm install`
- Vérifiez que le port 5173 n'est pas utilisé

### Les styles ne s'appliquent pas
- Assurez-vous que Tailwind CSS est correctement compilé
- Vérifiez les variables CSS dans `index.css`
- Rechargez la page (Ctrl+Shift+R ou Cmd+Shift+R)

### Le thème ne change pas
- Vérifiez que le contexte `ThemeProvider` enveloppe l'application
- Vérifiez la console du navigateur pour les erreurs
- Videz le cache du navigateur

## Contribution et améliorations

Ce portfolio est un projet en cours de développement. Vous pouvez :

- Ajouter plus de contenu aux pages existantes
- Créer de nouvelles pages pour d'autres projets
- Améliorer le design et l'UX
- Ajouter des animations et transitions
- Intégrer une base de données pour un contenu dynamique

## Licence

Ce projet est fourni à titre d'exemple éducatif pour le BTS SIO.

## Support

Pour toute question ou problème :

1. Consultez la documentation de React : https://react.dev
2. Consultez la documentation de Tailwind CSS : https://tailwindcss.com
3. Consultez la documentation de shadcn/ui : https://ui.shadcn.com

---

**Créé pour le BTS Services Informatiques aux Organisations** | 2024
