import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { SiAndroid } from "react-icons/si";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <SiAndroid className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Available for Opportunities
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="gradient-text gradient-android">
                  Muhammad Talha
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl font-display font-semibold text-muted-foreground">
                Android Developer
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Passionate about building mobile and Android TV applications,
                focusing on media streaming, performance optimization, and
                user-centric design.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                data-testid="button-view-projects"
                className="rounded-full px-8 gap-2"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("mailto:talha.m00001@gmail.com")}
                data-testid="button-download-resume"
                className="rounded-full px-8 gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4">
              <Button
                size="icon"
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/muhammad-talha-7053051aa",
                    "_blank"
                  )
                }
                data-testid="button-linkedin"
                className="rounded-full"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => window.open("https://github.com/muhammadtalha", "_blank")}
                data-testid="button-github"
                className="rounded-full"
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => window.open("mailto:talha.m00001@gmail.com")}
                data-testid="button-email"
                className="rounded-full"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right content - Android illustration */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Animated circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-full rounded-full border-2 border-primary/20 animate-pulse" />
                <div className="absolute w-4/5 h-4/5 rounded-full border-2 border-primary/30" />
                <div className="absolute w-3/5 h-3/5 rounded-full border-2 border-primary/40" />
              </div>

              {/* Center Android icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-12 rounded-full bg-gradient-to-br from-primary/20 to-chart-1/20 backdrop-blur-sm">
                  <SiAndroid className="w-32 h-32 text-primary" />
                </div>
              </div>

              {/* Floating tech badges */}
              <div className="absolute top-8 left-8 px-4 py-2 rounded-lg bg-card border border-card-border shadow-lg backdrop-blur-sm">
                <p className="text-sm font-semibold">Kotlin</p>
              </div>
              <div className="absolute top-16 right-4 px-4 py-2 rounded-lg bg-card border border-card-border shadow-lg backdrop-blur-sm">
                <p className="text-sm font-semibold">Jetpack Compose</p>
              </div>
              <div className="absolute bottom-20 left-4 px-4 py-2 rounded-lg bg-card border border-card-border shadow-lg backdrop-blur-sm">
                <p className="text-sm font-semibold">MVVM</p>
              </div>
              <div className="absolute bottom-8 right-8 px-4 py-2 rounded-lg bg-card border border-card-border shadow-lg backdrop-blur-sm">
                <p className="text-sm font-semibold">Android TV</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
