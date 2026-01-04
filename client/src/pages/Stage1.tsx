import { Card } from "@/components/ui/card";
import { Building2, MapPin, Calendar } from "lucide-react";

export default function Stage1() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8 pb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Stage 1ère année
        </h1>

        {/* Informations du stage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Card className="p-6 border border-border bg-accent/50 flex flex-col items-center gap-4 text-center">
            <Building2 className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-sm text-muted-foreground font-medium">Entreprise</p>
              <p className="text-lg font-semibold">Weishaupt</p>
            </div>
          </Card>
          <Card className="p-6 border border-border bg-accent/50 flex flex-col items-center gap-4 text-center">
            <MapPin className="h-8 w-8 text-purple-600" />
            <div>
              <p className="text-sm text-muted-foreground font-medium">Localisation</p>
              <p className="text-lg font-semibold">Colmar, France</p>
            </div>
          </Card>
          <Card className="p-6 border border-border bg-accent/50 flex flex-col items-center gap-4 text-center">
            <Calendar className="h-8 w-8 text-indigo-600" />
            <div>
              <p className="text-sm text-muted-foreground font-medium">Période</p>
              <p className="text-lg font-semibold">27 mai - 26 juin 2025</p>
            </div>
          </Card>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Sommaire */}
          <Card className="p-6 border border-border bg-accent/50">
            <h2 className="text-xl font-bold mb-4">Sommaire</h2>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Présentation de l'entreprise</li>
              <li>Le besoin</li>
              <li>Environnement technologique</li>
              <li>Réalisation</li>
              <li>Compétences acquises</li>
              <li>Bilan</li>
            </ol>
          </Card>

          {/* 1. Présentation de l'entreprise */}
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Présentation de l'entreprise</h2>
            <p className="text-justify mb-4">
              J'ai effectué mon stage de première année de BTS SIO dans l'entreprise Weishaupt, située à Colmar. Weishaupt est une entreprise internationale spécialisée dans les solutions énergétiques, notamment dans le domaine du chauffage et des systèmes performants. C'est une entreprise familiale de taille moyenne, mais avec une présence dans de nombreux pays.
            </p>
            <p className="text-justify mb-4">
              Le groupe emploie environ 4 400 collaborateurs à travers le monde et possède 17 agences en France. Le siège principal est situé en Allemagne. L'entreprise est reconnue pour la fiabilité de ses produits, la qualité de son service et l'accompagnement proposé à ses clients.
            </p>
            <p className="text-justify mb-4">
              Durant mon stage, j'ai intégré le service informatique de l'agence de Colmar. Celui-ci s'occupe de l'installation, de la maintenance et du dépannage du matériel informatique des collaborateurs. Il assure aussi la liaison avec le service informatique central en Allemagne pour les tâches nécessitant des droits administrateurs.
            </p>
            <p className="text-justify">
              Ce stage m'a permis de découvrir le fonctionnement d'un service informatique dans une entreprise internationale, avec des missions locales mais aussi une collaboration à distance.
            </p>
          </section>

          {/* 2. Le besoin */}
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Le besoin</h2>
            <p className="text-justify mb-4">
              L'entreprise avait lancé un projet de renouvellement de son parc informatique. De nombreux collaborateurs utilisaient encore des ordinateurs anciens, et il était nécessaire de les remplacer par des PC portables modernes équipés de stations d'accueil. Les principaux besoins identifiés étaient :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-sm">
              <li>Préparer et configurer les nouveaux ordinateurs</li>
              <li>Transférer les données et logiciels des anciens postes</li>
              <li>Assurer la connexion au réseau interne et au VPN</li>
              <li>Accompagner les utilisateurs dans la prise en main de leur nouveau matériel</li>
              <li>Organiser le suivi du déploiement à l'aide d'un outil adapté</li>
              <li>Apporter une assistance technique en cas de problème</li>
            </ul>
            <p className="text-justify">
              Un second besoin concernait le brassage réseau pour préparer l'installation des postes et des bornes Wi-Fi. Enfin, le service informatique devait aussi assurer la gestion et le suivi du matériel, ainsi que le support quotidien aux utilisateurs.
            </p>
          </section>

          {/* 3. Environnement technologique */}
          <section>
            <h2 className="text-2xl font-bold mb-4">3. Environnement technologique</h2>
            <p className="text-justify mb-4">
              Durant mon stage, j'ai utilisé plusieurs outils et technologies :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-sm">
              <li><span className="font-semibold">Microsoft Excel</span> : création d'un tableau de suivi du nouveau matériel informatique. Ce fichier, que j'ai conçu spécialement, a servi à centraliser toutes les informations sur les nouveaux ordinateurs.</li>
              <li><span className="font-semibold">Microsoft Office 365</span> : installation de la suite bureautique sur chaque poste.</li>
              <li><span className="font-semibold">PDF24</span> : logiciel permettant de réaliser différentes actions sur les fichiers PDF (fusion, conversion, etc.).</li>
              <li><span className="font-semibold">PaloAlto GlobalProtect VPN</span> : utilisé pour la connexion sécurisée des collaborateurs au réseau de l'entreprise.</li>
              <li><span className="font-semibold">Microsoft Authenticator</span> : application de double authentification pour sécuriser les connexions.</li>
              <li><span className="font-semibold">TeamViewer</span> : outil de prise en main à distance, utilisé notamment pour assister le directeur de l'agence de Reims.</li>
              <li><span className="font-semibold">Cisco (bornes Wi-Fi)</span> : réception et brassage de bornes Wi-Fi, avec relevé des numéros de série et des adresses MAC pour un suivi rigoureux.</li>
            </ul>
            <p className="text-justify">
              Certains de ces outils m'étaient nouveaux, comme GlobalProtect ou Authenticator. J'ai rapidement appris à les utiliser dans un cadre professionnel.
            </p>
          </section>

          {/* 4. Réalisation */}
          <section>
            <h2 className="text-2xl font-bold mb-4">4. Réalisation</h2>
            <p className="text-justify mb-6">
              Mon stage m'a permis de participer à plusieurs missions concrètes.
            </p>

            <div className="space-y-6">
              {/* a) Déploiement */}
              <div>
                <h3 className="text-xl font-semibold mb-3">a) Déploiement des nouveaux ordinateurs</h3>
                <p className="text-justify mb-3">
                  J'ai configuré et installé plus de 200 ordinateurs pour les collaborateurs de Colmar et des différentes agences en France. Chaque installation comprenait :
                </p>
                <ul className="list-disc list-inside space-y-1 mb-3 text-sm">
                  <li>Le transfert des favoris et mots de passe des navigateurs</li>
                  <li>L'installation d'Office 365 et de PDF24</li>
                  <li>La configuration de la messagerie Outlook</li>
                  <li>La vérification du VPN GlobalProtect</li>
                  <li>La personnalisation du poste avec l'utilisateur</li>
                </ul>
                <p className="text-justify">
                  Je laissais les utilisateurs personnaliser eux-mêmes certaines parties pour qu'ils s'adaptent mieux à leur nouveau matériel. Après chaque installation, j'enregistrais les informations dans le tableau Excel de suivi.
                </p>
              </div>

              {/* b) Suivi du matériel */}
              <div>
                <h3 className="text-xl font-semibold mb-3">b) Suivi du matériel</h3>
                <p className="text-justify">
                  J'ai mis en place et géré un fichier Excel permettant de suivre le déploiement. Ce tableau listait les collaborateurs ayant reçu un nouveau PC et les anciens matériels récupérés. J'ai aussi participé à l'étiquetage des ordinateurs et autres périphériques pour assurer une traçabilité claire.
                </p>
              </div>

              {/* c) Brassage réseau */}
              <div>
                <h3 className="text-xl font-semibold mb-3">c) Brassage réseau et bornes Wi-Fi</h3>
                <p className="text-justify">
                  J'ai participé au brassage des câbles réseau pour préparer les nouveaux postes et les imprimantes. Concernant les bornes Wi-Fi Cisco, j'ai relevé les numéros de série et adresses MAC puis attribué des numéros d'identification (par exemple : WG-001) afin de faciliter leur gestion.
                </p>
              </div>

              {/* d) Assistance */}
              <div>
                <h3 className="text-xl font-semibold mb-3">d) Assistance aux utilisateurs</h3>
                <p className="text-justify mb-3">
                  J'ai assuré un support aux collaborateurs qui rencontraient des difficultés avec leur matériel. Quelques exemples :
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Résolution d'un problème où un écran externe n'était pas reconnu</li>
                  <li>Configuration de l'ouverture automatique des PDF dans Edge</li>
                  <li>Explication de l'utilisation du VPN et de l'authentification</li>
                  <li>Installation et configuration du poste du directeur de l'agence de Reims à distance (téléphone et TeamViewer)</li>
                </ul>
              </div>

              {/* e) Autonomie */}
              <div>
                <h3 className="text-xl font-semibold mb-3">e) Travail en autonomie</h3>
                <p className="text-justify">
                  Mon maître de stage est parti une semaine en vacances pendant ma période de stage. J'ai donc géré seul le déploiement de deux ordinateurs par jour ainsi que le suivi du matériel. Cette autonomie m'a permis de gagner en efficacité et en confiance.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Compétences acquises */}
          <section>
            <h2 className="text-2xl font-bold mb-4">5. Compétences acquises</h2>
            <p className="text-justify mb-4">
              Au cours de ce stage, j'ai développé plusieurs compétences en lien avec le BTS SIO :
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><span className="font-semibold">Installer et configurer un poste de travail</span> : préparation complète des nouveaux ordinateurs pour les utilisateurs.</li>
              <li><span className="font-semibold">Gérer le patrimoine informatique</span> : suivi et traçabilité du matériel via un tableau Excel, étiquetage et brassage réseau.</li>
              <li><span className="font-semibold">Assister les utilisateurs</span> : accompagnement dans la prise en main, explications claires, résolution de problèmes techniques.</li>
              <li><span className="font-semibold">Travailler en mode projet</span> : organisation des tâches, respect d'un planning et suivi des déploiements.</li>
              <li><span className="font-semibold">Communiquer dans un contexte international</span> : échanges réguliers avec le service informatique en Allemagne, parfois en anglais ou via traduction.</li>
              <li><span className="font-semibold">Travailler en autonomie</span> : prise de responsabilités pendant l'absence de mon maître de stage.</li>
            </ul>
            <p className="text-justify mt-4">
              Ces compétences me serviront pour la suite de ma formation et dans mes futurs projets professionnels.
            </p>
          </section>

          {/* 6. Bilan */}
          <section>
            <h2 className="text-2xl font-bold mb-4">6. Bilan</h2>
            <p className="text-justify mb-4">
              Ce stage chez Weishaupt a été une expérience très enrichissante. J'ai découvert le quotidien d'un service informatique dans une entreprise internationale. J'ai appris à déployer et configurer du matériel informatique à grande échelle, à assister les utilisateurs et à organiser le suivi du matériel.
            </p>
            <p className="text-justify mb-4">
              J'ai également développé des qualités d'autonomie et de communication, notamment grâce à mes échanges avec les collaborateurs et avec le service informatique en Allemagne.
            </p>
            <p className="text-justify">
              Enfin, ce stage m'a confirmé mon intérêt pour l'informatique de proximité et le support technique. Ce sont des domaines dans lesquels je souhaite continuer à progresser et travailler plus tard.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
