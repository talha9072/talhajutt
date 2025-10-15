import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { SiAndroid, SiKotlin } from "react-icons/si";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <SiAndroid className="w-6 h-6 text-primary" />
              </div>
              <span className="font-display text-xl font-bold">
                Muhammad Talha
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Passionate Android Developer specializing in mobile and Android TV
              applications, OTT platforms, and media streaming solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {["About", "Services", "Projects", "Skills", "Experience", "Contact"].map(
                (link) => (
                  <Button
                    key={link}
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition =
                          elementPosition + window.pageYOffset - offset;
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: "smooth",
                        });
                      }
                    }}
                    className="justify-start text-sm text-muted-foreground hover:text-foreground"
                    data-testid={`footer-link-${link.toLowerCase()}`}
                  >
                    {link}
                  </Button>
                )
              )}
            </div>
          </div>

          {/* Social & Tech Stack */}
          <div className="space-y-4">
            <h3 className="font-semibold">Connect</h3>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/muhammad-talha-7053051aa",
                    "_blank"
                  )
                }
                data-testid="footer-linkedin"
                className="rounded-full"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() =>
                  window.open("https://github.com/muhammadtalha", "_blank")
                }
                data-testid="footer-github"
                className="rounded-full"
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => window.open("mailto:talha.m00001@gmail.com")}
                data-testid="footer-email"
                className="rounded-full"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
              <SiKotlin className="w-4 h-4 text-primary" />
              <span>Built with passion for Android</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Muhammad Talha. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Islamabad, Pakistan
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <Button
        size="icon"
        onClick={scrollToTop}
        data-testid="button-back-to-top"
        className="fixed bottom-8 right-8 rounded-full shadow-lg z-40"
      >
        <ArrowUp className="w-4 h-4" />
      </Button>
    </footer>
  );
}
