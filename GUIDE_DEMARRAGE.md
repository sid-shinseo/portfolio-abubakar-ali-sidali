# 🚀 Guide de Démarrage - Portfolio BTS SIO

Bienvenue ! Ce guide vous explique comment lancer le projet localement et le déployer sur Vercel.

---

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (v18 ou supérieur) : https://nodejs.org/
- **pnpm** (gestionnaire de paquets) : `npm install -g pnpm`
- **Git** (optionnel, pour le versionning) : https://git-scm.com/

Vérifiez les installations :
```bash
node --version    # Doit afficher v18.x.x ou supérieur
pnpm --version    # Doit afficher une version
```

---

## 🏃 Lancer le serveur de développement localement

### Étape 1 : Cloner ou extraire le projet

Si vous avez téléchargé un ZIP :
```bash
unzip portfolio-bts-sio.zip
cd portfolio-bts-sio
```

Si vous utilisez Git :
```bash
git clone <votre-repo-url>
cd portfolio-bts-sio
```

### Étape 2 : Installer les dépendances

```bash
pnpm install
```

Cela va télécharger tous les packages nécessaires (React, Tailwind, etc.).

### Étape 3 : Lancer le serveur de développement

```bash
pnpm dev
```

Vous devriez voir un message comme :
```
➜  Local:   http://localhost:5173/
➜  Network: http://192.168.x.x:5173/
```

Ouvrez http://localhost:5173/ dans votre navigateur. Le site se met à jour automatiquement quand vous modifiez le code !

### Étape 4 : Arrêter le serveur

Appuyez sur `Ctrl + C` dans le terminal.

---

## 📁 Structure du projet

```
portfolio-bts-sio/
├── client/                          # Code frontend React
│   ├── public/                      # Fichiers statiques (images, favicon)
│   │   └── images/                  # Vos images
│   ├── src/
│   │   ├── pages/                   # Pages du site
│   │   │   ├── Home.tsx             # Accueil
│   │   │   ├── BtsSio.tsx           # BTS SIO
│   │   │   ├── Stage1.tsx           # Stage 1ère année
│   │   │   ├── Stage2.tsx           # Stage 2ème année
│   │   │   ├── VeilleT.tsx          # Veille technologique
│   │   │   ├── VeilleDetail.tsx     # Détail article veille
│   │   │   ├── Projects.tsx         # Projets
│   │   │   ├── ProjectDetail.tsx    # Détail projet
│   │   │   ├── Certificats.tsx      # Certificats
│   │   │   ├── Competences.tsx      # Compétences E4
│   │   │   ├── Contact.tsx          # Contact
│   │   │   └── NotFound.tsx         # 404
│   │   ├── components/              # Composants réutilisables
│   │   │   ├── Layout.tsx           # Layout principal
│   │   │   ├── LoadingScreen.tsx    # Écran de chargement
│   │   │   ├── DropdownMenu.tsx     # Menu déroulant
│   │   │   ├── MobileMenu.tsx       # Menu mobile
│   │   │   └── ui/                  # Composants UI (shadcn)
│   │   ├── data/                    # Données du site
│   │   │   ├── projects.ts          # Données projets
│   │   │   ├── certifications.ts    # Données certificats
│   │   │   └── veille-posts.ts      # Articles veille
│   │   ├── contexts/                # Contextes React
│   │   │   └── ThemeContext.tsx     # Contexte thème clair/sombre
│   │   ├── hooks/                   # Hooks personnalisés
│   │   ├── lib/                     # Utilitaires
│   │   ├── App.tsx                  # Routeur principal
│   │   ├── main.tsx                 # Point d'entrée
│   │   └── index.css                # Styles globaux
│   ├── index.html                   # HTML principal
│   └── package.json                 # Dépendances
├── server/                          # Placeholder backend (non utilisé)
├── shared/                          # Placeholder partagé (non utilisé)
├── package.json                     # Dépendances racine
├── pnpm-lock.yaml                   # Verrous des versions
├── tsconfig.json                    # Configuration TypeScript
├── tailwind.config.ts               # Configuration Tailwind CSS
├── vite.config.ts                   # Configuration Vite
├── README.md                        # Documentation principale
├── COMPTE_RENDU.md                  # Compte rendu détaillé
├── RAPPORT_COMPLET.md               # Rapport complet
└── GUIDE_DEMARRAGE.md               # Ce fichier
```

---

## ✏️ Modifier le contenu

### Changer le nom du portfolio

Dans `client/src/components/Layout.tsx`, ligne 36 :
```tsx
<div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
  Portfolio BTS SIO - SA  {/* Changez ici */}
</div>
```

### Ajouter vos projets

Modifiez `client/src/data/projects.ts` :
```typescript
export const projects = [
  {
    id: "mon-projet",
    name: "Mon Projet",
    shortDescription: "Description courte",
    description: "Description du projet",
    // ... autres propriétés
  },
  // Ajoutez d'autres projets
];
```

### Ajouter vos certificats

Modifiez `client/src/data/certifications.ts` :
```typescript
export const certifications = [
  {
    id: "cert-1",
    title: "Ma Certification",
    issuer: "Organisme",
    // ... autres propriétés
  },
  // Ajoutez d'autres certificats
];
```

### Ajouter des articles de veille

Modifiez `client/src/data/veille-posts.ts` :
```typescript
export const veillePosts = [
  {
    slug: "mon-article",
    title: "Mon Article",
    summary: "Résumé",
    // ... autres propriétés
  },
  // Ajoutez d'autres articles
];
```

### Ajouter des images

1. Placez vos images dans `client/public/images/`
2. Référencez-les dans votre code :
```tsx
<img src="/images/mon-image.jpg" alt="Description" />
```

---

## 🎨 Personnaliser le design

### Changer les couleurs

Modifiez `client/src/index.css` pour les variables CSS :
```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.6%;
    --primary: 217.2 91.2% 59.8%;  /* Bleu */
    --secondary: 280 85% 50%;      /* Violet */
    /* ... autres variables */
  }
}
```

### Changer les polices

Dans `client/index.html`, modifiez les imports Google Fonts :
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600;700&display=swap" rel="stylesheet">
```

---

## 🚀 Déployer sur Vercel

### Option 1 : Déploiement via GitHub (Recommandé)

1. **Créer un repository GitHub**
   - Allez sur https://github.com/new
   - Créez un repository nommé `portfolio-bts-sio`
   - Ne l'initialisez pas avec README

2. **Pousser votre code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio BTS SIO"
   git branch -M main
   git remote add origin https://github.com/VOTRE_USERNAME/portfolio-bts-sio.git
   git push -u origin main
   ```

3. **Connecter Vercel**
   - Allez sur https://vercel.com
   - Connectez-vous avec votre compte GitHub
   - Cliquez sur "New Project"
   - Sélectionnez votre repository `portfolio-bts-sio`
   - Cliquez sur "Import"
   - Vercel détectera automatiquement la configuration
   - Cliquez sur "Deploy"

4. **Votre site est en ligne !**
   - Vercel vous donnera une URL comme `https://portfolio-bts-sio.vercel.app`
   - Chaque push sur GitHub redéploiera automatiquement

### Option 2 : Déploiement direct via Vercel CLI

1. **Installer Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Déployer**
   ```bash
   vercel
   ```

3. **Suivre les instructions**
   - Connectez-vous avec votre compte Vercel
   - Confirmez les paramètres du projet
   - Vercel déploiera votre site

---

## 🔧 Commandes utiles

```bash
# Lancer le serveur de développement
pnpm dev

# Construire le projet pour la production
pnpm build

# Prévisualiser la version production localement
pnpm preview

# Vérifier les erreurs TypeScript
pnpm type-check

# Formater le code
pnpm format

# Linter le code
pnpm lint
```

---

## 🐛 Dépannage

### Le serveur ne démarre pas
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### Erreur "Port 5173 already in use"
```bash
# Utiliser un autre port
pnpm dev -- --port 3000
```

### Problèmes de déploiement Vercel
- Vérifiez que `package.json` existe à la racine
- Vérifiez que `vite.config.ts` est correctement configuré
- Consultez les logs de build dans le dashboard Vercel

---

## 📚 Ressources utiles

- **React** : https://react.dev
- **Tailwind CSS** : https://tailwindcss.com
- **Vite** : https://vitejs.dev
- **Vercel** : https://vercel.com/docs
- **Wouter** (Routeur) : https://github.com/molefrog/wouter
- **shadcn/ui** : https://ui.shadcn.com

---

## 💡 Conseils

1. **Utilisez Git** pour versionner votre code
2. **Testez localement** avant de pousser sur Vercel
3. **Mettez à jour les données** dans les fichiers `data/`
4. **Ajoutez vos images** dans `client/public/images/`
5. **Personnalisez les couleurs** dans `index.css`
6. **Testez le thème clair/sombre** avant de déployer

---

## ❓ Questions ?

Consultez les fichiers de documentation :
- `README.md` : Documentation générale
- `COMPTE_RENDU.md` : Compte rendu détaillé
- `RAPPORT_COMPLET.md` : Rapport complet du projet

Bon développement ! 🎉
