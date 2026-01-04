# 📥 Instructions de Téléchargement et Déploiement

Vous avez téléchargé votre portfolio BTS SIO complet ! Voici comment le mettre en place.

---

## 🎯 Étapes rapides

### 1️⃣ Extraire le projet
```bash
unzip portfolio-bts-sio-complete.zip
cd portfolio-bts-sio
```

### 2️⃣ Installer les dépendances
```bash
pnpm install
```

### 3️⃣ Lancer localement
```bash
pnpm dev
```

Ouvrez http://localhost:5173/ dans votre navigateur.

### 4️⃣ Déployer sur Vercel

#### Option A : Via GitHub (Recommandé)
1. Créez un repository GitHub : https://github.com/new
2. Nommez-le `portfolio-bts-sio`
3. Exécutez :
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/portfolio-bts-sio.git
git push -u origin main
```
4. Allez sur https://vercel.com
5. Cliquez "New Project"
6. Sélectionnez votre repository
7. Cliquez "Deploy"

#### Option B : Déploiement direct
```bash
npm install -g vercel
vercel
```

---

## 📂 Fichiers importants

| Fichier | Utilité |
|---------|---------|
| `GUIDE_DEMARRAGE.md` | Guide complet de démarrage |
| `README.md` | Documentation générale |
| `COMPTE_RENDU.md` | Compte rendu détaillé |
| `RAPPORT_COMPLET.md` | Rapport complet |
| `client/src/data/` | Données (projets, certificats, veille) |
| `client/src/pages/` | Pages du site |
| `client/public/images/` | Vos images |

---

## 🔧 Commandes utiles

```bash
pnpm dev           # Lancer le serveur de dev
pnpm build         # Construire pour production
pnpm preview       # Prévisualiser la production
pnpm type-check    # Vérifier les types TypeScript
```

---

## 🎨 Personnaliser

### Votre nom
Modifiez `client/src/components/Layout.tsx` ligne 36

### Vos projets
Modifiez `client/src/data/projects.ts`

### Vos certificats
Modifiez `client/src/data/certifications.ts`

### Vos articles de veille
Modifiez `client/src/data/veille-posts.ts`

### Vos images
Mettez-les dans `client/public/images/`

---

## ✅ Checklist avant déploiement

- [ ] Testez localement : `pnpm dev`
- [ ] Vérifiez toutes les pages
- [ ] Testez le thème clair/sombre
- [ ] Testez sur mobile (F12 → Device Toolbar)
- [ ] Vérifiez les liens (Contact, Projets, etc.)
- [ ] Mettez à jour vos données personnelles
- [ ] Ajoutez vos images

---

## 🚀 Après le déploiement

1. **Votre site est en ligne** sur une URL Vercel
2. **Chaque push sur GitHub** redéploiera automatiquement
3. **Configurez un domaine personnalisé** dans les paramètres Vercel (optionnel)

---

## 💡 Conseils

- Utilisez Git pour versionner
- Testez avant de pousser
- Consultez `GUIDE_DEMARRAGE.md` pour plus de détails
- Vercel offre un certificat SSL gratuit

---

**Bon développement ! 🎉**

Pour plus d'aide, consultez :
- https://vercel.com/docs
- https://react.dev
- https://tailwindcss.com
