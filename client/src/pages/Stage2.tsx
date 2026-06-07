import { Card } from "@/components/ui/card";

export default function Stage2() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Stage 2ème année
        </h1>

        {/* Informations générales */}
        <Card className="p-8 border border-border mb-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Informations générales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Identité</p>
              <p className="font-semibold">Abubakar Ali Sid Ali</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Option</p>
              <p className="font-semibold">SISR (Solutions d'Infrastructure, Systèmes et Réseaux)</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Établissement</p>
              <p className="font-semibold">Lycée Camille Sée, Colmar</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Session</p>
              <p className="font-semibold">2026</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Organisme</p>
              <p className="font-semibold">GRETA Alsace Sud (Agence de Colmar)</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Adresse</p>
              <p className="font-semibold">74 Rue du Logelbach, 68000 Colmar</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Tuteur</p>
              <p className="font-semibold">M. Gissinger Jean-Daniel</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Période</p>
              <p className="font-semibold">Du 2 mars au 10 avril 2026</p>
            </div>
          </div>
        </Card>

        {/* Sujet du stage */}
        <Card className="p-8 border border-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Sujet du stage</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Modernisation de l'infrastructure de virtualisation et déploiement d'une solution souveraine de support à distance (RustDesk)
          </p>
        </Card>

        {/* Introduction */}
        <Card className="p-8 border border-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Introduction</h2>
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-base leading-relaxed">
              Le présent rapport expose les travaux réalisés au cours de ma période d'immersion professionnelle au sein du GRETA de Colmar, dans le cadre de ma deuxième année de BTS Services Informatiques aux Organisations (SIO), option SISR. L'objectif principal de ce stage était de mettre en pratique les compétences théoriques acquises au Lycée Blaise Pascal, tout en découvrant les réalités de la gestion d'un parc informatique d'envergure.
            </p>
            <p className="text-base leading-relaxed">
              La problématique centrale de mes missions a porté sur la modernisation de l'infrastructure de virtualisation et la mise en place d'une solution souveraine de support à distance. À travers ce document, je détaillerai les étapes de configuration des serveurs, la gestion de problématiques réseau complexes et le déploiement d'une architecture sécurisée sous Alpine Linux. Ce stage a représenté une opportunité majeure pour appréhender la complexité d'un système d'information de formation continue, où la disponibilité des services est critique pour le bon déroulement des enseignements.
            </p>
          </div>
        </Card>

        {/* Présentation de l'entreprise */}
        <Card className="p-8 border border-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Présentation de l'entreprise : Le réseau des GRETA</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-600">Une ambition cinquantenaire au service de la formation</h3>
              <p className="text-base leading-relaxed">
                Le réseau des GRETA (Groupements d'Établissements) incarne depuis plus de 50 ans l'ambition de l'Éducation nationale de mobiliser les moyens matériels et humains des établissements scolaires pour la formation continue des adultes. L'aventure débute en 1971 avec la Délors, qui instaure le droit des salariés à la formation. Depuis lors, Raymond Vatier pose les bases d'un nouvel acteur capable de compenser les besoins des entreprises et de traduire un objectif pédagogique. Historiquement, le réseau s'est construit sur une volonté forte de favoriser la promotion sociale et l'adaptation des travailleurs aux changements techniques. Aujourd'hui, il s'agit du premier opérateur de formation continue en France, formant chaque année plus de 450 000 stagiaires à travers de 6 500 lieux de formation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-600">Évolution et adaptation territoriale : Le GRETA Alsace Sud</h3>
              <p className="text-base leading-relaxed">
                Dès 1974, le premier GRETA voit le jour à Clichy-la-Garenne. En à peine cinq ans, le GRETA de Colmar, rattaché au GRETA Alsace Sud, s'inscrit dans cette dynamique historique. Il agit comme un opérateur de proximité capable de répondre aux mutations économiques locales. L'agence de Colmar, située au sein du Lycée Blaise Pascal, doit sans cesse ajuster son ingénierie de formation pour répondre aux besoins des entreprises du Centre-Alsace. Cette capacité d'adaptation est au cœur du fonctionnement du réseau, qui mobilise les plateaux techniques de pointe, tels que ceux sur lesquels j'ai travaillé, pour garantir des formations de haute qualité technique.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-600">Le GRETA aujourd'hui : Indépendance, agilité et missions informatiques</h3>
              <p className="text-base leading-relaxed">
                La particularité majeure des GRETA réside dans leur appartenance au service public tout en conservant une autonomie de financement. Cette agilité permet au GRETA de Colmar de s'adapter aux marchés concurrentiels et aux innovations pédagogiques (unités capitalisables, apprentissage). Le service informatique, sous la direction de mon tuteur M. Gissinger, joue un rôle de support indispensable. Durant mon stage, j'ai constaté que la maintenance n'est pas limitée à la maintenance ; elle englobe la conception d'infrastructures capables de supporter les flux d'apprenants importants. Le service gère à la fois le parc de postes clients des salles de cours, les serveurs d'infrastructure (Dell, HP et services réseau critiques).
              </p>
            </div>
          </div>
        </Card>

        {/* Analyse technique et Missions réalisées */}
        <Card className="p-8 border border-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Analyse technique et Missions réalisées</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-600">3.1 Maintenance physique et optimisation de l'infrastructure serveurs</h3>
              <p className="text-base leading-relaxed mb-4">
                Dès la première semaine, j'ai été impliqué dans une remise à niveau matérielle d'envergure.
              </p>
              <ul className="space-y-3 ml-4">
                <li className="text-base leading-relaxed">
                  <span className="font-semibold">Audit et Mise à jour (Firmware) :</span> J'ai effectué la mise à jour complète des Firmwares sur les serveurs Dell PowerEdge R630. En utilisant les interfaces de gestion iDRAC (Dell et LIO/HP), j'ai mis à jour le BIOS et les contrôleurs de stockage. Cette étape est cruciale pour corriger les failles de sécurité matérielles et améliorer la compatibilité avec les systèmes d'exploitation récents.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-semibold">Gestion du stockage (RAID 5) :</span> Une mission majeure a consisté en l'installation et la configuration de 30 disques SAS de 900 Go. J'ai mis en place une grappe RAID 5. Ce choix méthodologique garantit une tolérance aux pannes (survie à la perte d'un disque physique) tout en offrant un volume de stockage massif nécessaire à la virtualisation.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-semibold">Déploiement matériel en salle :</span> J'ai procédé au brassage complet des bases informatiques, à la pose de switchs managés et d'un routeur, ainsi qu'au câblage d'une nouvelle salle de cours.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-600">3.2 Déploiement de la virtualisation et résolution des problématiques réseau</h3>
              <p className="text-base leading-relaxed mb-4">
                Une fois l'infrastructure physique stabilisée, j'ai déployé les solutions de virtualisation pour optimiser l'utilisation des ressources.
              </p>
              <ul className="space-y-3 ml-4">
                <li className="text-base leading-relaxed">
                  <span className="font-semibold">Hyperviseurs et Cluster :</span> J'ai installé VMware ESXi sur les hôtes physiques et configuré vCenter Server Appliance (vCSA) pour gérer l'utilisation des ressources. J'ai dû résoudre des conflits de ressources (RAM/Stockage) pour permettre l'hébergement des flux de gestion, de vMotion et de stockage.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-semibold">Le défi du filtrage réseau (DPI) :</span> Lors de la maintenance des serveurs Proxmox VE, nous avons rencontré un blocage systématique des mises à jour via l'inspection profonde des paquets (DPI) qui bloquait le HTTP. Le pare-feu de l'établissement effectuait une inspection profonde des paquets (DPI) bloquant le HTTP.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-semibold">Solution technique (Tunnel SSH & VPN) :</span> Pour contourner le blocage sans compromettre la sécurité, j'ai mis en place un tunnel SSH sécurisé à l'aide d'une clé privée. Cette technique a permis d'encapsuler le trafic dans un flux chiffré, permettant ainsi l'upgrade du système vers le Noyau 6.8 (Ceph).
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-600">3.3 Projet RustDesk : Architecture souveraine sous Alpine Linux</h3>
              <p className="text-base leading-relaxed mb-4">
                Le projet phare de mon stage a été la mise en place d'une alternative souveraine à TeamViewer/AnyDesk : RustDesk.
              </p>
              <ul className="space-y-3 ml-4">
                <li className="text-base leading-relaxed">
                  <span className="font-semibold">Évolution de la plateforme :</span> Après des tests initiaux sur Debian (avec et sans Docker), nous avons migré vers Alpine Linux pour ses performances et sa sécurité.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-semibold">Installation "Bare Metal" sur Dell R630 :</span> J'ai installé Alpine Linux directement sur le serveur physique. J'ai rencontré une difficulté majeure : l'absence de drivers pour les cartes réseau Broadcom/Intel et l'ISO standard. J'ai résolu ce problème en utilisant une version Extended/Virt de l'ISO et en analysant les modules via modprobe.
                </li>
                <li className="text-base leading-relaxed">
                  <span className="font-semibold">Configuration des services :</span> J'ai déployé les binaires hbbr (ID et hbbr (Relais). Pour assurer la persistance, j'ai créé des scripts de démarrage sous OpenRC (le gestionnaire de services d'Alpine), permettant au serveur d'être opérationnel dès le boot.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-600">3.4 Sécurisation avancée, PKI et Gestion de l'identité</h3>
              <p className="text-base leading-relaxed">
                La sécurisation de RustDesk a nécessité une approche rigoureuse basée sur les standards cryptographiques actuels. J'ai mis en place une infrastructure de clés publiques (PKI) interne utilisant des certificats SSL/TLS. Les clés de chiffrement utilisent l'algorithme Ed25519 (courbe elliptique moderne) et TLS 1.3 pour garantir la confidentialité des connexions. Cette approche a permis d'anticiper et de résoudre les problèmes de "Key Mismatch" rencontrés lors de la phase de déploiement.
              </p>
            </div>
          </div>
        </Card>

        {/* Conclusion */}
        <Card className="p-8 border border-border">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Conclusion</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-base leading-relaxed">
              Ce stage au GRETA de Colmar a constitué une expérience formatrice majeure. J'ai pu mettre en application les connaissances théoriques acquises en cours tout en développant des compétences pratiques essentielles dans un environnement professionnel réel. Les missions réalisées, du déploiement matériel à la mise en place d'une infrastructure de support à distance souveraine, m'ont permis de comprendre les enjeux complexes de la gestion d'un parc informatique d'envergure. Cette expérience renforce ma conviction de poursuivre dans le domaine de l'infrastructure informatique et de la cybersécurité.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

