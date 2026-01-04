import { Card } from "@/components/ui/card";

export default function BtsSio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          C'est quoi le BTS SIO ?
        </h1>

        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg leading-relaxed mb-6">
            Le BTS SIO (Services Informatiques aux Organisations) a été créé à la rentrée 2011 et remplace le BTS "Informatique de Gestion". Le but : former en deux ans des étudiants à la mise en place de solutions informatiques dans les entreprises et les administrations.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Ce BTS comprend deux options : l'option <span className="font-semibold">SISR</span> : "Solutions d'Infrastructures, Systèmes et Réseaux" et l'option <span className="font-semibold">SLAM</span> : "Solutions Logicielles et Applications Métiers".
          </p>

          <p className="text-lg leading-relaxed mb-12">
            Au cours de sa formation de deux ans, l'étudiant en BTS SIO doit obligatoirement réaliser deux stages. (durée totale : 10 semaines ou plus).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* SISR Card */}
          <Card className="p-8 border border-border hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">SISR</h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                L'étudiant en BTS SIO Spécialité « Solutions d'Infrastructures, Systèmes et Réseaux » apprend à installer, administrer et gérer la maintenance des équipements et des réseaux informatiques. En entreprise, sa mission sera d'intégrer, sécuriser et configurer les serveurs, les postes clients et tous les équipements d'interconnexion. Il aura également la tâche de prévoir les besoins d'évolution de l'infrastructure, de veiller au maintien de la qualité des services informatiques et de proposer des solutions pour faire évoluer les services.
              </p>

              <div>
                <h3 className="font-semibold mb-3 text-foreground">Fonctions dans l'entreprise :</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Technicien d'infrastructure</li>
                  <li>Technicien systèmes et réseaux</li>
                  <li>Technicien de production</li>
                  <li>Technicien micro et réseaux</li>
                  <li>Technicien réseaux – télécoms</li>
                  <li>Administrateur systèmes et réseaux</li>
                  <li>Informaticien support et déploiement</li>
                  <li>Pilote d'exploitation</li>
                  <li>Support systèmes et réseaux</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* SLAM Card */}
          <Card className="p-8 border border-border hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-6 text-purple-600">SLAM</h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                L'étudiant en BTS SIO Spécialité « Solutions Logicielles et Applications Métiers » va apprendre à créer des solutions logicielles et applicatives. En entreprise, sa mission sera de participer à toutes les phases de la production des solutions logicielles : définition du cahier des charges qui va tenir compte des besoins et des contraintes de l'entreprise cliente, choix des solutions techniques, réalisation et mise en place des applications logicielles, assistance aux utilisateurs.
              </p>

              <div>
                <h3 className="font-semibold mb-3 text-foreground">Fonctions dans l'entreprise :</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Programmeur d'applications</li>
                  <li>Développeur d'applications informatiques</li>
                  <li>Analyste d'applications</li>
                  <li>Analyste d'études</li>
                  <li>Analyste programmeur</li>
                  <li>Programmeur analyste</li>
                  <li>Chargé d'études informatiques</li>
                  <li>Informaticien d'études</li>
                  <li>Responsable des services applicatifs</li>
                  <li>Technicien d'études informatiques</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
