import { Card } from "@/components/ui/card";

export default function Stage2() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Stage 2ème année
        </h1>

        <Card className="p-8 border border-border mb-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Veuillez ajouter le contenu de votre stage de 2ème année ici.
            </p>
            <p className="text-muted-foreground">
              Cette page sera complétée avec les détails de votre expérience professionnelle.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
