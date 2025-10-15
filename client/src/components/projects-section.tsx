import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { SiAndroid } from "react-icons/si";
import { useQuery } from "@tanstack/react-query";
import type { Project } from "@shared/schema";

export function ProjectsSection() {
  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  if (isLoading) {
    return (
      <section id="projects" className="py-16 md:py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-chart-1 rounded-full mx-auto" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="overflow-hidden animate-pulse">
                <CardContent className="p-0">
                  <div className="h-56 bg-muted" />
                  <div className="p-6 space-y-4">
                    <div className="h-8 bg-muted rounded" />
                    <div className="h-20 bg-muted rounded" />
                    <div className="flex gap-2">
                      {[...Array(4)].map((_, j) => (
                        <div key={j} className="h-6 w-20 bg-muted rounded-full" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-chart-1 rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of Android applications I've built across various domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover-elevate active-elevate-2 card-hover"
              data-testid={`project-${project.id}`}
            >
              <CardContent className="p-0">
                {/* Project Image/Icon Area */}
                <div className="relative h-56 bg-gradient-to-br from-primary/20 to-chart-1/20 flex items-center justify-center border-b border-border">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb,142,218,150),0.1),transparent_50%)]" />
                  <SiAndroid className="w-24 h-24 text-primary/40" />
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="default" className="rounded-full" data-testid={`badge-featured-${project.id}`}>
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="rounded-full" data-testid={`badge-category-${project.id}`}>
                      {project.category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </Badge>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold font-display" data-testid={`text-title-${project.id}`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-description-${project.id}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs"
                        data-testid={`tech-${project.id}-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-3">
                {project.playstoreUrl ? (
                  <Button
                    variant="default"
                    size="sm"
                    className="rounded-full gap-2"
                    onClick={() => window.open(project.playstoreUrl, "_blank")}
                    data-testid={`button-playstore-${project.id}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View on Play Store
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full gap-2"
                    data-testid={`button-demo-${project.id}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Details
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
