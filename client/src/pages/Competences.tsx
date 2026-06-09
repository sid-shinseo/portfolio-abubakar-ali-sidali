import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Competences() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Tableau de compétences E5
        </h1>

        {/* Introduction */}
        <Card className="p-8 border border-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Évaluation des compétences acquises</h2>
          <p className="text-base leading-relaxed text-muted-foreground mb-6">
            Le tableau E4 ci-dessous présente l'évaluation détaillée des compétences que j'ai acquises au cours de ma formation BTS SIO, option SISR. Ce document synthétise les compétences développées en 1ère et 2ème année, validées par mes expériences professionnelles et mes projets réalisés.
          </p>
          
          <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-600/50">
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">Télécharger le tableau E4 complet</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Fichier Excel détaillé avec l'évaluation de toutes les compétences du référentiel BTS SIO
              </p>
            </div>
            <a 
              href="/BTS_SIO_Annexe_VI.5_EpreuveE5-ABUBAKARALISidAli.xlsx" 
              download
              className="ml-auto"
            >
              <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Download className="w-4 h-4" />
                Télécharger Excel
              </Button>
            </a>
          </div>
        </Card>

        {/* Compétences principales */}
        <Card className="p-8 border border-border mb-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Compétences principales</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Infrastructure & Systèmes</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Virtualisation (VMware ESXi, Proxmox)</li>
                <li>✓ Administration serveurs (Linux, Windows)</li>
                <li>✓ Gestion du stockage (RAID, SAN)</li>
                <li>✓ Configuration réseau avancée</li>
                <li>✓ Sécurité informatique (PKI, SSL/TLS)</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Support & Déploiement</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Support à distance (RustDesk, TeamViewer)</li>
                <li>✓ Déploiement d'applications</li>
                <li>✓ Gestion des incidents</li>
                <li>✓ Documentation technique</li>
                <li>✓ Formation utilisateurs</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Outils & Technologies</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Alpine Linux, Debian, Windows Server</li>
                <li>✓ Docker & Conteneurisation</li>
                <li>✓ Scripting (Bash, Python)</li>
                <li>✓ Gestion de configuration</li>
                <li>✓ Monitoring & Logs</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">Soft Skills</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Communication technique</li>
                <li>✓ Travail en équipe</li>
                <li>✓ Résolution de problèmes</li>
                <li>✓ Gestion de projet</li>
                <li>✓ Autonomie & Rigueur</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Compétences par année */}
        <Card className="p-8 border border-border">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Progression par année</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">1ère année : Fondamentaux</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Acquisition des bases en administration système, réseau et support utilisateur.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Windows Server', 'Active Directory', 'Réseau TCP/IP', 'Support Utilisateur', 'Virtualisation Basique'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-900/30 border border-blue-600/50 rounded-full text-xs text-blue-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">2ème année : Spécialisation SISR</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Approfondissement en infrastructure, sécurité et déploiement de solutions souveraines.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Alpine Linux', 'RustDesk', 'PKI/SSL-TLS', 'VMware ESXi', 'Sécurité Avancée', 'Scripting', 'Docker'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-900/30 border border-purple-600/50 rounded-full text-xs text-purple-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
