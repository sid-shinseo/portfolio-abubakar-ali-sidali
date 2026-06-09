import { Card } from "@/components/ui/card";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Mentions Légales
        </h1>

        {/* Informations du site */}
        <Card className="p-8 border border-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Informations du site</h2>
          
          <div className="space-y-4 text-base leading-relaxed">
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">Propriétaire du site</h3>
              <p className="text-muted-foreground">
                <span className="font-medium">Nom :</span> ABUBAKAR ALI Sid Ali<br/>
                <span className="font-medium">Adresse :</span> Alsace, France<br/>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-400 mb-2">Hébergement</h3>
              <p className="text-muted-foreground">
                <span className="font-medium">Plateforme :</span> Vercel<br/>
                <span className="font-medium">URL :</span> https://vercel.com
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-400 mb-2">Responsable de publication</h3>
              <p className="text-muted-foreground">
                ABUBAKAR ALI Sid Ali - Étudiant BTS Services Informatiques aux Organisations (SIO)
              </p>
            </div>
          </div>
        </Card>

        {/* RGPD et protection des données */}
        <Card className="p-8 border border-border mb-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Politique de confidentialité et RGPD</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">1. Collecte de données personnelles</h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-3">
                Ce site collecte des données personnelles <span className="font-semibold">uniquement via le formulaire de contact</span>. Les données collectées sont :
              </p>
              <ul className="space-y-2 ml-4 text-base text-muted-foreground">
                <li>• <span className="font-semibold">Nom</span> - Obligatoire</li>
                <li>• <span className="font-semibold">Adresse email</span> - Obligatoire</li>
                <li>• <span className="font-semibold">Message</span> - Obligatoire</li>
                <li>• <span className="font-semibold">Numéro de téléphone</span> - Optionnel</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">2. Finalité de la collecte</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Les données collectées via le formulaire de contact sont utilisées <span className="font-semibold">exclusivement</span> pour :
              </p>
              <ul className="space-y-2 ml-4 text-base text-muted-foreground">
                <li>• Vous répondre concernant votre demande</li>
                <li>• Vous contacter si nécessaire</li>
                <li>• Améliorer la qualité du service</li>
              </ul>
              <p className="text-base leading-relaxed text-muted-foreground mt-3">
                <span className="font-semibold">Aucune donnée n'est partagée</span> avec des tiers, sauf si la loi l'exige.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">3. Durée de conservation</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Les données personnelles collectées via le formulaire de contact sont conservées pendant une durée de <span className="font-semibold">12 mois</span> maximum, sauf obligation légale contraire. Après cette période, les données sont supprimées de nos serveurs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">4. Plateforme de traitement des emails</h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-3">
                Les emails collectés via le formulaire de contact sont traités par <span className="font-semibold">EmailJS</span>, une plateforme de service d'email sécurisée. EmailJS respecte les normes RGPD et dispose de certifications de conformité.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">Politique de confidentialité EmailJS :</span> https://www.emailjs.com/legal/privacy-policy/
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">5. Vos droits RGPD</h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-3">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="space-y-2 ml-4 text-base text-muted-foreground">
                <li>• <span className="font-semibold">Droit d'accès</span> - Accéder à vos données personnelles</li>
                <li>• <span className="font-semibold">Droit de rectification</span> - Corriger vos données inexactes</li>
                <li>• <span className="font-semibold">Droit à l'effacement</span> - Demander la suppression de vos données</li>
                <li>• <span className="font-semibold">Droit à la portabilité</span> - Recevoir vos données dans un format structuré</li>
                <li>• <span className="font-semibold">Droit d'opposition</span> - Vous opposer au traitement de vos données</li>
              </ul>
              <p className="text-base leading-relaxed text-muted-foreground mt-3">
                Pour exercer l'un de ces droits, contactez-nous à : <span className="font-semibold">contact@portfolio-bts-sio.com</span>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">6. Sécurité des données</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Ce site utilise des protocoles de sécurité modernes (HTTPS/TLS) pour protéger vos données personnelles contre l'accès non autorisé, la modification ou la divulgation. Cependant, aucune transmission sur Internet n'est 100% sécurisée.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">7. Cookies et suivi</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Ce site <span className="font-semibold">n'utilise pas de cookies de suivi</span> ou d'analyse. Aucun cookie n'est stocké sans votre consentement explicite. Les données de navigation ne sont pas collectées.
              </p>
            </div>

            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-600/50">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Responsable de la conformité RGPD</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Pour toute question concernant la conformité RGPD ou pour exercer vos droits, veuillez nous contacter à : <span className="font-semibold">contact@portfolio-bts-sio.com</span>
              </p>
            </div>
          </div>
        </Card>

        {/* Responsabilité */}
        <Card className="p-8 border border-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Responsabilité</h2>
          
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Le propriétaire du site s'efforce de maintenir l'exactitude et la disponibilité des informations publiées. Cependant, il ne peut être tenu responsable des erreurs, omissions ou des dommages résultant de l'utilisation de ce site.
            </p>
            <p>
              Ce site est fourni "tel quel" sans garantie d'aucune sorte, expresse ou implicite. Le propriétaire ne peut être tenu responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation du site.
            </p>
          </div>
        </Card>

        {/* Propriété intellectuelle */}
        <Card className="p-8 border border-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Propriété intellectuelle</h2>
          
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Tous les contenus publiés sur ce site (textes, images, vidéos, documents) sont la propriété intellectuelle de ABUBAKAR ALI Sid Ali ou de ses partenaires, sauf indication contraire. Toute reproduction, distribution ou utilisation sans autorisation est interdite.
            </p>
            <p>
              Les logos, marques et noms de produits mentionnés sont la propriété de leurs détenteurs respectifs.
            </p>
          </div>
        </Card>

        {/* Liens externes */}
        <Card className="p-8 border border-border mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Liens externes</h2>
          
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Ce site peut contenir des liens vers d'autres sites web. Le propriétaire ne peut être tenu responsable du contenu, de la disponibilité ou de la conformité de ces sites externes.
            </p>
            <p>
              L'inclusion d'un lien ne constitue pas une approbation ou une recommandation du site lié.
            </p>
          </div>
        </Card>

        {/* Modification des mentions légales */}
        <Card className="p-8 border border-border">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Modification des mentions légales</h2>
          
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Le propriétaire du site se réserve le droit de modifier ces mentions légales à tout moment sans préavis. Les modifications entrent en vigueur dès leur publication sur le site.
            </p>
            <p>
              <span className="font-semibold">Dernière mise à jour :</span> Juin 2026
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
