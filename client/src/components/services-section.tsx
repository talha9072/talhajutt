import { Card, CardContent } from "@/components/ui/card";
import {
  Smartphone,
  Code,
  Tv,
  Database,
  Zap,
  Upload,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Service } from "@shared/schema";

const iconMap: Record<string, any> = {
  smartphone: Smartphone,
  code: Code,
  tv: Tv,
  database: Database,
  zap: Zap,
  upload: Upload,
};

export function ServicesSection() {
  const { data: services = [], isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  if (isLoading) {
    return (
      <section id="services" className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
              Services
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-chart-1 rounded-full mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-8 space-y-4">
                  <div className="h-12 w-12 bg-muted rounded-lg" />
                  <div className="h-6 bg-muted rounded w-3/4" />
                  <div className="h-20 bg-muted rounded" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
            Services
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-chart-1 rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized Android development services for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Smartphone;
            return (
              <Card
                key={service.id}
                className="group hover-elevate active-elevate-2 card-hover overflow-hidden"
                data-testid={`service-${service.id}`}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-muted-foreground/20 font-display" data-testid={`text-number-${service.id}`}>
                      {service.number}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold font-display" data-testid={`text-title-${service.id}`}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-description-${service.id}`}>
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
