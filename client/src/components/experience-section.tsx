import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Experience } from "@shared/schema";

export function ExperienceSection() {
  const { data: experiences = [], isLoading } = useQuery<Experience[]>({
    queryKey: ["/api/experiences"],
  });

  const education = {
    degree: "Bachelor's in Computer Science",
    institution: "Capital University of Science and Technology",
    location: "Islamabad, Pakistan",
    period: "2020 - 2024",
    achievement: "Dean's Roll of Honor",
  };

  const certifications = [
    {
      title: "The Complete Android & Kotlin Development Masterclass",
      issuer: "Udemy",
      date: "Oct 2025",
      link: "https://www.udemy.com/certificate/UC-96530b5d-11a6-459c-ac4a-4c808e7b8a22/",
    },
    {
      title: "Introduction to Git and GitHub",
      issuer: "Google (Coursera)",
      date: "Oct 2024",
    },
    {
      title: "Programming Fundamentals in Kotlin",
      issuer: "Meta (Coursera)",
      date: "2023",
    },
  ];

  if (isLoading) {
    return (
      <section id="experience" className="py-16 md:py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
              Experience & Education
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-chart-1 rounded-full mx-auto" />
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {[...Array(2)].map((_, i) => (
                <Card key={i} className="md:ml-8 animate-pulse">
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-muted rounded w-1/2" />
                    <div className="h-4 bg-muted rounded w-1/3" />
                    <div className="h-20 bg-muted rounded" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
            Experience & Education
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-chart-1 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column - Timeline */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold font-display mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" />
                Work Experience
              </h3>
              
              <div className="relative space-y-8">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

                {experiences.map((exp, index) => {
                  const isCurrent = exp.year.includes("Present");
                  return (
                    <Card
                      key={exp.id}
                      className="md:ml-8 overflow-hidden"
                      data-testid={`experience-${exp.id}`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 hidden md:block" />
                      
                      <div className="p-6 space-y-4">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="text-xl font-bold font-display" data-testid={`text-role-${exp.id}`}>
                                {exp.role}
                              </h4>
                              {isCurrent && (
                                <Badge variant="default" className="rounded-full" data-testid={`badge-current-${exp.id}`}>
                                  Current
                                </Badge>
                              )}
                            </div>
                            <p className="text-lg font-semibold text-primary" data-testid={`text-company-${exp.id}`}>
                              {exp.company}
                            </p>
                          </div>
                          <div className="text-sm font-medium text-muted-foreground bg-muted px-4 py-2 rounded-full" data-testid={`text-year-${exp.id}`}>
                            {exp.year}
                          </div>
                        </div>

                        <p className="text-muted-foreground" data-testid={`text-description-${exp.id}`}>{exp.description}</p>

                        <div className="space-y-2">
                          <p className="text-sm font-semibold">Key Achievements:</p>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex gap-3 text-sm text-muted-foreground"
                                data-testid={`achievement-${exp.id}-${i}`}
                              >
                                <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right column - Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <Card className="p-6 space-y-4" data-testid="education-card">
              <h3 className="text-xl font-semibold font-display">Education</h3>
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">{education.degree}</h4>
                <p className="font-medium">{education.institution}</p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {education.location}
                  </p>
                  <p className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {education.period}
                  </p>
                </div>
                <Badge variant="secondary" className="mt-2">
                  {education.achievement}
                </Badge>
              </div>
            </Card>

            {/* Certifications */}
            <Card className="p-6 space-y-4" data-testid="certifications-card">
              <h3 className="text-xl font-semibold font-display">
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="space-y-2 pb-4 border-b border-border last:border-0 last:pb-0"
                    data-testid={`certification-${index}`}
                  >
                    <h4 className="font-semibold text-sm leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-primary">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
