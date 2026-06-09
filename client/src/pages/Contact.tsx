import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const FORMSPREE_ID = "mrbowdey";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    setIsSubmitting(true);

    try {
      // Envoyer le formulaire
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success("Message envoyé avec succès ! Je vous répondrai bientôt.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Une erreur est survenue lors de l'envoi du message");
      }
    } catch (error) {
      toast.error("Une erreur est survenue lors de l'envoi du message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Me Contacter
            </h1>
            <p className="text-lg text-muted-foreground">
              Vous avez une question ou souhaitez discuter d'une opportunité ? N'hésitez pas à me contacter. Je serai ravi de vous répondre dans les plus brefs délais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Email Card 
            <Card className="p-6 border border-border bg-accent/50 hover:bg-accent/70 transition-colors">
              <div className="flex items-start gap-4">
                <Mail className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Pour toute question ou demande
                  </p>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-blue-600 hover:text-blue-700 font-medium break-all"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>
            </Card>

            
            <Card className="p-6 border border-border bg-accent/50 hover:bg-accent/70 transition-colors">
              <div className="flex items-start gap-4">
                <Phone className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Téléphone</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Disponible du lundi au vendredi
                  </p>
                  <a
                    href="tel:+33612345678"
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    +33 6 12 34 56 78
                  </a>
                </div>
              </div>
            </Card>

            
            <Card className="p-6 border border-border bg-accent/50 hover:bg-accent/70 transition-colors">
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Localisation</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Basé en Alsace, France
                  </p>
                  <p className="font-medium">Colmar, 68000</p>
                </div>
              </div>
            </Card>
          </div>

          
          <Card className="p-8 border border-border mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-blue-600" />
              Formulaire de Contact
            </h2>
*/}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Adresse email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre.email@example.com"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Sujet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sujet de votre message"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Je vous répondrai dans les 24 heures.
              </p>
            </form>
          </Card>

          {/* Social Links */}
          <Card className="p-8 border border-border">
            <h2 className="text-2xl font-bold mb-6">Réseaux Sociaux</h2>
            <p className="text-muted-foreground mb-6">
              Vous pouvez également me suivre et me contacter sur les réseaux sociaux :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://github.com/sid-shinseo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
              >
                <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                <div>
                  
                  <p className="font-semibold">GitHub</p>
                  <p className="text-sm text-muted-foreground">@sid-shinseo</p>
                </div>
              </a>
{/* Social Links 
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Votre profil</p>
                </div>
              </a>
              */}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
