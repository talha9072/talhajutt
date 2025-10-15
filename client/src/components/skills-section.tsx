import { Card } from "@/components/ui/card";
import {
  SiKotlin,
  SiAndroid,
  SiAndroidstudio,
  SiFirebase,
  SiGithub,
  SiGit,
  SiPostman,
} from "react-icons/si";
import { Database, Code2, Layers, Smartphone } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Skill } from "@shared/schema";

const iconMap: Record<string, any> = {
  kotlin: SiKotlin,
  java: Code2,
  android: SiAndroid,
  smartphone: Smartphone,
  layers: Layers,
  database: Database,
  network: Layers,
  studio: SiAndroidstudio,
  firebase: SiFirebase,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
};

const colorMap: Record<string, string> = {
  kotlin: "text-[#7F52FF]",
  java: "text-[#f89820]",
  android: "text-primary",
  smartphone: "text-primary",
  layers: "text-chart-1",
  database: "text-chart-4",
  network: "text-chart-2",
  studio: "text-primary",
  firebase: "text-[#FFCA28]",
  git: "text-[#F05032]",
  github: "text-foreground",
  postman: "text-[#FF6C37]",
};

export function SkillsSection() {
  const { data: skills = [], isLoading } = useQuery<Skill[]>({
    queryKey: ["/api/skills"],
  });

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryTitles: Record<string, string> = {
    language: "Languages",
    framework: "Frameworks & Libraries",
    tool: "Tools & Platforms",
    platform: "Tools & Platforms",
  };

  if (isLoading) {
    return (
      <section id="skills" className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
              Skills & Technologies
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-chart-1 rounded-full mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="p-8 animate-pulse">
                <div className="h-6 bg-muted rounded w-1/3 mb-6" />
                <div className="grid grid-cols-2 gap-4">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="h-16 bg-muted rounded-lg" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Combine tool and platform categories
  const combinedCategories = {
    ...skillsByCategory,
  };
  
  if (skillsByCategory.tool && skillsByCategory.platform) {
    combinedCategories["tool"] = [...skillsByCategory.tool, ...skillsByCategory.platform];
    delete combinedCategories.platform;
  }

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
            Skills & Technologies
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-chart-1 rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build exceptional Android applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(combinedCategories).map(([category, categorySkills]) => (
            <Card
              key={category}
              className="p-8 space-y-6"
              data-testid={`skill-category-${category}`}
            >
              <h3 className="text-xl font-semibold font-display">
                {categoryTitles[category] || category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {categorySkills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  const color = colorMap[skill.icon] || "text-primary";
                  
                  return (
                    <div
                      key={skill.id}
                      className="group flex items-center gap-3 p-4 rounded-lg hover-elevate active-elevate-2 transition-all"
                      data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                        <Icon className={`w-5 h-5 ${color}`} />
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12">
          <Card className="p-8">
            <h3 className="text-xl font-semibold font-display mb-6">
              Additional Competencies
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "RESTful API Integration",
                "Video Streaming (ExoPlayer)",
                "Android TV Development",
                "Performance Optimization",
                "Material Design",
                "Agile/Scrum",
                "Code Review",
                "Unit Testing",
                "CI/CD",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-muted hover-elevate active-elevate-2"
                  data-testid={`additional-skill-${skill.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
