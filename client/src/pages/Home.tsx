import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Code, Network } from "lucide-react";
import { Link } from "wouter";

// Composant ciel étoilé
function StarrySky() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);

  useEffect(() => {
    // Créer des étoiles animées
    const newStars = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 3 + 2,
    }));
    setStars(newStars);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section avec ciel étoilé sur toute la section - indépendant du thème */}
      <section className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 py-20 md:py-32 overflow-hidden">
        {/* Ciel étoilé en arrière-plan */}
        <div className="absolute inset-0">
          <StarrySky />
        </div>

        {/* Gradient overlay - indépendant du thème */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-900/80" />

        {/* Contenu du hero */}
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ABUBAKAR ALI Sid Ali
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Bienvenue sur mon portfolio présentant mon parcours en BTS Services Informatiques aux Organisations. Découvrez mes projets, mes stages et mes compétences acquises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/bts-sio">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/competences">
                  <Button variant="outline" className="w-full sm:w-auto" style={{color: '#ffffff', backgroundColor: '#000000'}}>
                    Voir mes compétences
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-lg p-12 border border-blue-600/20">
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-20"></div>
                  <div className="h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-20"></div>
                  <div className="h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20 border-t border-border">
        <h2 className="text-3xl font-bold mb-12 text-center">Parcours BTS SIO</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Formation Card */}
          <Card className="p-8 border border-border hover:shadow-lg transition-shadow">
            <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Formation</h3>
            <p className="text-muted-foreground mb-6">
              Découvrez les détails du BTS SIO, ses deux options SISR et SLAM, ainsi que les débouchés professionnels.
            </p>
            <Link href="/bts-sio">
              <Button variant="ghost" className="w-full justify-start">
                Lire plus <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>

          {/* Stages Card */}
          <Card className="p-8 border border-border hover:shadow-lg transition-shadow">
            <Code className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Stages</h3>
            <p className="text-muted-foreground mb-6">
              Consultez les détails de mes stages de 1ère et 2ème année, avec les missions et compétences acquises.
            </p>
            <Link href="/stage-1">
              <Button variant="ghost" className="w-full justify-start">
                Voir les stages <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>

          {/* Veille Card */}
          <Card className="p-8 border border-border hover:shadow-lg transition-shadow">
            <Network className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Veille Technologique</h3>
            <p className="text-muted-foreground mb-6">
              Explorez ma veille technologique sur les dernières tendances et innovations du secteur informatique.
            </p>
            <Link href="/veille-technologique">
              <Button variant="ghost" className="w-full justify-start">
                Découvrir <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20 border-t border-border">
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg p-12 text-center border border-blue-600/20">
          <h2 className="text-3xl font-bold mb-4">Tableau de compétences E4</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Consultez mon évaluation détaillée des compétences acquises lors de ma formation BTS SIO.
          </p>
          <Link href="/competences">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Voir le tableau <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
