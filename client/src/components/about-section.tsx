import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Smartphone, Trophy, Users } from "lucide-react";

export function AboutSection() {
  const stats = [
    {
      icon: Code2,
      value: "2+",
      label: "Years Experience",
      testId: "stat-experience",
    },
    {
      icon: Smartphone,
      value: "10+",
      label: "Apps Published",
      testId: "stat-apps",
    },
    {
      icon: Trophy,
      value: "3",
      label: "Certifications",
      testId: "stat-certifications",
    },
    {
      icon: Users,
      value: "2",
      label: "Companies",
      testId: "stat-companies",
    },
  ];

  const coreSkills = [
    "Kotlin",
    "Java",
    "Jetpack Compose",
    "MVVM Architecture",
    "Android TV",
    "Firebase",
    "Room Database",
    "RESTful APIs",
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Stats & Image */}
          <div className="space-y-8">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-border">
                <img
                  src="/attached_assets/Profile_1760549822958.jpg"
                  alt="Muhammad Talha - Android Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 hover-elevate active-elevate-2 transition-all"
                  data-testid={stat.testId}
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold font-display">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
                About Me
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-chart-1 rounded-full" />
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                I'm <strong>Muhammad Talha</strong>, a passionate Android
                Developer from Islamabad, Pakistan, with experience in building
                mobile and Android TV applications that deliver exceptional user
                experiences.
              </p>
              
              <p className="text-muted-foreground">
                Currently working at <strong className="text-foreground">Nayatel</strong>, I specialize in
                developing OTT streaming platforms, media applications, and
                enterprise solutions. My expertise spans from Android mobile
                apps to Android TV applications, focusing on performance
                optimization, seamless API integration, and user-centric design.
              </p>
              
              <p className="text-muted-foreground">
                I have hands-on experience with{" "}
                <strong className="text-foreground">Kotlin, Jetpack Compose, MVVM architecture</strong>,
                and building applications that handle high-resolution video
                streaming (up to 4K), real-time data synchronization, and
                complex UI/UX workflows.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold font-display">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm"
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Card className="p-6 bg-primary/5 border-primary/20">
                <p className="text-sm text-muted-foreground italic">
                  "Passionate Android Developer with experience in building
                  mobile and Android TV applications, focusing on media
                  streaming, performance optimization, and user-centric design."
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
