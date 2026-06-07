import { Card } from "@/components/ui/card";

export default function VeilleT() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Veille Technologique
        </h1>

        {/* Titre principal */}
        <Card className="p-8 border border-border mb-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <h2 className="text-3xl font-bold text-center mb-2 text-blue-400">
            RustDesk et la Souveraineté Numérique
          </h2>
          <p className="text-center text-muted-foreground">
            Transition du SaaS vers l'auto-hébergement : enjeux, méthodologie et impact pour les organisations publiques
          </p>
        </Card>

        {/* Méthodologie de veille */}
        <Card className="p-8 border border-border mb-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Méthodologie de veille appliquée</h2>
          <p className="text-base leading-relaxed mb-6 text-muted-foreground">
            Conformément aux attentes du référentiel BTS SIO 2026, j'ai mis en place une méthodologie structurée en 5 étapes pour suivre l'évolution des outils de prise en main à distance et de la cybersécurité des flux.
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">1. Collecter</h3>
              <p className="text-base leading-relaxed">
                J'ai configuré des flux RSS via Feedly en ciblant des mots-clés spécifiques comme "Open-Source Remote Desktop", "RustDesk Updates" et "Self-hosted IT services". J'ai également activé des alertes CERT-FR pour surveiller les vulnérabilités liées aux outils de support tiers.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4 py-2">
              <h3 className="text-lg font-semibold mb-2 text-purple-400">2. Filtrer</h3>
              <p className="text-base leading-relaxed">
                Parmi la masse d'informations, j'ai sélectionné uniquement les articles traitant de la transition du SaaS (Software as a Service) vers l'auto-hébergement, domaine directement lié à ma mission au GRETA.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">3. Analyser</h3>
              <p className="text-base leading-relaxed">
                J'ai étudié l'impact du passage à la licence payante de solutions comme TeamViewer sur les budgets des organisations publiques, et comment RustDesk répond à cette problématique.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4 py-2">
              <h3 className="text-lg font-semibold mb-2 text-purple-400">4. Synthétiser</h3>
              <p className="text-base leading-relaxed">
                Chaque mois, j'ai rédigé des fiches de synthèse sur Notion, résumant les versions stables de RustDesk (notamment l'intégration de l'API) et les méthodes de durcissement (hardening) de l'OS Alpine Linux.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4 py-2">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">5. Diffuser</h3>
              <p className="text-base leading-relaxed">
                Cette veille a été partagée avec mon tuteur, M. Gissinger, pour valider les choix techniques lors du passage de l'infrastructure Debian vers Alpine Linux.
              </p>
            </div>
          </div>
        </Card>

        {/* Problématique */}
        <Card className="p-8 border border-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Problématique</h2>
          <h3 className="text-xl font-semibold mb-4 text-purple-600">Pourquoi quitter le SaaS pour l'auto-hébergement en 2026 ?</h3>
          
          <div className="space-y-4">
            <p className="text-base leading-relaxed">
              Le secteur de l'informatique évolue à une vitesse telle que la <span className="font-semibold text-blue-400">souveraineté des données</span> est devenue une priorité nationale (préconisations de l'ANSSI). Historiquement, les solutions propriétaires comme AnyDesk ou TeamViewer imposent que le flux vidéo et les données de connexion transitent par leurs propres serveurs (Cloud).
            </p>

            <p className="text-base leading-relaxed">
              En 2026, deux facteurs majeurs obligent les organisations à reprendre le contrôle :
            </p>

            <ul className="space-y-3 ml-4">
              <li className="text-base leading-relaxed">
                <span className="font-semibold text-blue-400">Adoption massive de l'IA :</span> L'Intelligence Artificielle intégrée aux outils de support pose des questions de confidentialité et de traçabilité des données.
              </li>
              <li className="text-base leading-relaxed">
                <span className="font-semibold text-purple-400">Cyberattaques sur les chaînes d'approvisionnement :</span> La multiplication des Supply Chain Attacks montre que les intermédiaires tiers représentent des points d'entrée critiques.
              </li>
            </ul>

            <p className="text-base leading-relaxed mt-4">
              L'auto-hébergement de RustDesk permet de garantir que <span className="font-semibold text-blue-400">100 % des données restent dans l'infrastructure du GRETA</span>, supprimant tout intermédiaire tiers.
            </p>
          </div>
        </Card>

        {/* Étude comparative */}
        <Card className="p-8 border border-border mb-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Étude comparative : RustDesk vs Solutions Propriétaires</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-blue-600">
                  <th className="text-left p-4 font-bold text-blue-400">Critères</th>
                  <th className="text-left p-4 font-bold text-blue-400">Solutions SaaS<br/>(TeamViewer/AnyDesk)</th>
                  <th className="text-left p-4 font-bold text-blue-400">RustDesk<br/>(Auto-hébergé)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-blue-900/10 transition">
                  <td className="p-4 font-semibold text-purple-400">Coût</td>
                  <td className="p-4">Abonnement annuel par utilisateur (onéreux)</td>
                  <td className="p-4 text-green-400">Gratuit / Open-Source<br/>(Coût d'hébergement interne)</td>
                </tr>
                <tr className="border-b border-border hover:bg-blue-900/10 transition">
                  <td className="p-4 font-semibold text-purple-400">Confidentialité</td>
                  <td className="p-4">Données transitant par des serveurs externes</td>
                  <td className="p-4 text-green-400">Serveur de relais interne<br/>(Souveraineté totale)</td>
                </tr>
                <tr className="border-b border-border hover:bg-blue-900/10 transition">
                  <td className="p-4 font-semibold text-purple-400">Sécurité</td>
                  <td className="p-4">Dépendante de la politique de l'éditeur</td>
                  <td className="p-4 text-green-400">Maîtrisée par PKI interne<br/>et certificats SSL/TLS</td>
                </tr>
                <tr className="hover:bg-blue-900/10 transition">
                  <td className="p-4 font-semibold text-purple-400">Performance</td>
                  <td className="p-4">Dépendante de la connexion internet mondiale</td>
                  <td className="p-4 text-green-400">Optimisée pour le réseau local<br/>(faible latence)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            <span className="font-semibold">Note :</span> Cette comparaison montre que RustDesk offre des avantages significatifs en termes de coût, de contrôle et de performance pour les organisations publiques comme le GRETA.
          </p>
        </Card>

        {/* Analyse de l'impact */}
        <Card className="p-8 border border-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Analyse de l'impact métier et technique</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-600">Réduction de la surface d'attaque</h3>
              <p className="text-base leading-relaxed">
                L'adoption de RustDesk sous Alpine Linux n'est pas qu'un choix économique ; c'est un choix de <span className="font-semibold text-blue-400">sécurité proactive</span>. Ma veille a révélé que les solutions minimalistes comme Alpine réduisent la surface d'attaque de <span className="font-semibold text-green-400">80 %</span> par rapport à des OS standards.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-600">Impacts immédiats pour le GRETA</h3>
              <ul className="space-y-3 ml-4">
                <li className="text-base leading-relaxed">
                  <span className="font-semibold text-blue-400">Réduction drastique des coûts de licence :</span> Suppression des abonnements annuels par utilisateur.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-semibold text-blue-400">Amélioration de la réactivité du support technique :</span> Latence réduite grâce au réseau local.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-semibold text-blue-400">Résilience en cas de coupure internet :</span> Le support technique reste opérationnel sur tout le réseau local, ce qui n'est pas possible avec des solutions basées sur le Cloud.
                </li>
              </ul>
            </div>

            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-600/50">
              <p className="text-base leading-relaxed">
                <span className="font-semibold text-blue-400">Cas d'usage critique :</span> En cas de coupure d'accès internet externe, le support technique du GRETA peut continuer à intervenir sur les postes clients du réseau local sans dépendre d'une connexion internet mondiale. Cela garantit la continuité de service lors de formations critiques.
              </p>
            </div>
          </div>
        </Card>

        {/* Conclusion */}
        <Card className="p-8 border border-border mb-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Conclusion de la veille</h2>
          <h3 className="text-xl font-semibold mb-4 text-purple-600">L'avenir du support IT : On-Premise et Souveraineté</h3>
          
          <div className="space-y-4">
            <p className="text-base leading-relaxed">
              L'évolution vers des outils <span className="font-semibold text-blue-400">"On-premise" (sur site)</span> comme RustDesk, couplée à une sécurisation rigoureuse par certificats, représente l'avenir des parcs informatiques critiques.
            </p>

            <p className="text-base leading-relaxed">
              Cette veille m'a permis de :
            </p>

            <ul className="space-y-2 ml-4">
              <li className="text-base leading-relaxed">
                ✓ Anticiper les problèmes de "Key Mismatch" rencontrés lors du stage
              </li>
              <li className="text-base leading-relaxed">
                ✓ Proposer des solutions basées sur les standards actuels du marché
              </li>
              <li className="text-base leading-relaxed">
                ✓ Mettre en œuvre le chiffrement Ed25519 et TLS 1.3
              </li>
              <li className="text-base leading-relaxed">
                ✓ Comprendre les enjeux de souveraineté numérique pour les organisations publiques
              </li>
            </ul>

            <p className="text-base leading-relaxed mt-4 font-semibold text-blue-400">
              En 2026 et au-delà, la question ne sera plus "Utilisons-nous le Cloud ?" mais "Contrôlons-nous nos données ?"
            </p>
          </div>
        </Card>

        {/* Sources et ressources */}
        <Card className="p-8 border border-border">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Sources et ressources</h2>
          
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Outils de veille utilisés :</p>
              <ul className="space-y-2 ml-4 text-base">
                <li>• <span className="font-semibold">Feedly</span> - Agrégateur RSS pour la collecte d'informations</li>
                <li>• <span className="font-semibold">CERT-FR</span> - Alertes de sécurité et vulnérabilités</li>
                <li>• <span className="font-semibold">Notion</span> - Documentation et synthèse des fiches de veille</li>
              </ul>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">Domaines technologiques suivis :</p>
              <ul className="space-y-2 ml-4 text-base">
                <li>• Remote Desktop Open-Source (RustDesk, Guacamole)</li>
                <li>• Systèmes d'exploitation minimalistes (Alpine Linux)</li>
                <li>• Infrastructure de clés publiques (PKI) et certificats</li>
                <li>• Cybersécurité et Supply Chain Attacks</li>
                <li>• Souveraineté numérique et conformité ANSSI</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

