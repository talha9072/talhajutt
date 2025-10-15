import {
  type Project,
  type InsertProject,
  type Service,
  type InsertService,
  type Skill,
  type InsertSkill,
  type Experience,
  type InsertExperience,
  type ContactMessage,
  type InsertContactMessage,
  type PortfolioInfo,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Portfolio Info
  getPortfolioInfo(): Promise<PortfolioInfo>;
  
  // Projects
  getProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Services
  getServices(): Promise<Service[]>;
  
  // Skills
  getSkills(): Promise<Skill[]>;
  
  // Experience
  getExperiences(): Promise<Experience[]>;
  
  // Contact Messages
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private projects: Map<string, Project>;
  private services: Map<string, Service>;
  private skills: Map<string, Skill>;
  private experiences: Map<string, Experience>;
  private contactMessages: ContactMessage[];
  private portfolioInfo: PortfolioInfo;

  constructor() {
    this.projects = new Map();
    this.services = new Map();
    this.skills = new Map();
    this.experiences = new Map();
    this.contactMessages = [];
    
    // Initialize with Muhammad Talha's data
    this.initializeData();
  }

  private initializeData() {
    // Portfolio Info
    this.portfolioInfo = {
      name: "Muhammad Talha",
      title: "Android Developer",
      tagline: "Building exceptional mobile experiences",
      bio: "Passionate Android Developer with experience in building mobile and Android TV applications, focusing on media streaming, performance optimization, and user-centric design. Skilled in Kotlin, MVVM architecture, and API integration.",
      yearsOfExperience: 2,
      appsPublished: 10,
      techStackSize: 15,
      email: "talha.m00001@gmail.com",
      github: "https://github.com/muhammadtalha",
      linkedin: "https://www.linkedin.com/in/muhammad-talha-7053051aa",
    };

    // Projects
    const projectsData: Project[] = [
      {
        id: randomUUID(),
        title: "NayaTV",
        description:
          "OTT streaming service offering live TV channels, movies, TV shows, and documentaries across web, Android, and Android TV platforms with up to 4K support and concurrent sessions.",
        technologies: ["Kotlin", "Android TV", "ExoPlayer", "MVVM", "Retrofit", "4K Streaming"],
        category: "native",
        featured: true,
        playstoreUrl: "https://play.google.com/store/search?q=naya%20tv&c=apps&hl=en",
      },
      {
        id: randomUUID(),
        title: "NWatch",
        description:
          "Cloud-based IP surveillance service enabling real-time and recorded video monitoring. Developed Android and Android TV apps with seamless cloud integration and optimized high-resolution playback.",
        technologies: ["Kotlin", "Android TV", "Cloud Integration", "Video Streaming", "Room DB"],
        category: "native",
        featured: true,
        playstoreUrl: "https://play.google.com/store/search?q=Nwatch&c=apps&hl=en",
      },
      {
        id: randomUUID(),
        title: "Nayatel Teams",
        description:
          "Internal employee operations app streamlining attendance, leave requests, and HR tasks. Enhanced productivity through digitized processes and centralized communication.",
        technologies: ["Kotlin", "MVVM", "RESTful API", "Firebase", "Material Design"],
        category: "firebase",
        featured: true,
        playstoreUrl: "https://play.google.com/store/apps/details?id=com.nayatel.teams&hl=en",
      },
      {
        id: randomUUID(),
        title: "Boostboard",
        description:
          "Android TV digital signage app displaying promotions and announcements. Features real-time CMS integration, dynamic layouts, and scheduled content rotation.",
        technologies: ["Kotlin", "Android TV", "CMS Integration", "Dynamic UI", "Scheduled Tasks"],
        category: "native",
        featured: false,
        playstoreUrl: "https://play.google.com/store/apps/details?id=com.nayatel.signage&hl=en",
      },
      {
        id: randomUUID(),
        title: "MyShouq",
        description:
          "Video-based social commerce platform connecting sellers and customers. Multi-vendor architecture with dual interfaces, real-time analytics, and optimized user experiences.",
        technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Video Processing", "Multi-vendor"],
        category: "full_stack",
        featured: true,
      },
    ];

    projectsData.forEach((project) => {
      this.projects.set(project.id, project);
    });

    // Services
    const servicesData: Service[] = [
      {
        id: randomUUID(),
        number: "01",
        title: "Native Android Apps",
        description:
          "Building high-performance native Android applications with Kotlin and Java, following modern architecture patterns and best practices.",
        icon: "smartphone",
      },
      {
        id: randomUUID(),
        number: "02",
        title: "Kotlin Development",
        description:
          "Expert Kotlin development with Jetpack Compose, Coroutines, and modern Android libraries for robust and maintainable code.",
        icon: "code",
      },
      {
        id: randomUUID(),
        number: "03",
        title: "Android TV Applications",
        description:
          "Developing immersive Android TV applications with support for 4K streaming, custom UI components, and seamless navigation.",
        icon: "tv",
      },
      {
        id: randomUUID(),
        number: "04",
        title: "Firebase Integration",
        description:
          "Implementing Firebase services including Authentication, Firestore, Cloud Storage, and Analytics for scalable backend solutions.",
        icon: "database",
      },
      {
        id: randomUUID(),
        number: "05",
        title: "App Optimization",
        description:
          "Performance tuning, memory optimization, and implementing best practices to ensure smooth and efficient app operation.",
        icon: "zap",
      },
      {
        id: randomUUID(),
        number: "06",
        title: "Play Store Publishing",
        description:
          "Complete app deployment workflow from testing to Play Store release, including app signing, versioning, and store optimization.",
        icon: "upload",
      },
    ];

    servicesData.forEach((service) => {
      this.services.set(service.id, service);
    });

    // Skills
    const skillsData: Skill[] = [
      { id: randomUUID(), name: "Kotlin", icon: "kotlin", category: "language" },
      { id: randomUUID(), name: "Java", icon: "java", category: "language" },
      { id: randomUUID(), name: "Jetpack Compose", icon: "android", category: "framework" },
      { id: randomUUID(), name: "Android SDK", icon: "smartphone", category: "framework" },
      { id: randomUUID(), name: "MVVM", icon: "layers", category: "framework" },
      { id: randomUUID(), name: "Room Database", icon: "database", category: "framework" },
      { id: randomUUID(), name: "Retrofit", icon: "network", category: "framework" },
      { id: randomUUID(), name: "Android Studio", icon: "studio", category: "tool" },
      { id: randomUUID(), name: "Firebase", icon: "firebase", category: "platform" },
      { id: randomUUID(), name: "Git", icon: "git", category: "tool" },
      { id: randomUUID(), name: "GitHub", icon: "github", category: "platform" },
      { id: randomUUID(), name: "Postman", icon: "postman", category: "tool" },
    ];

    skillsData.forEach((skill) => {
      this.skills.set(skill.id, skill);
    });

    // Experiences
    const experiencesData: Experience[] = [
      {
        id: randomUUID(),
        year: "2024 - Present",
        role: "Android Developer",
        company: "Nayatel",
        description:
          "Leading Android TV development and maintaining mobile applications for Pakistan's leading ISP and digital services provider.",
        achievements: [
          "Led Android TV development for NayaTV, NWatch, and Boostboard applications",
          "Delivered immersive 4K video streaming experiences on Android TV platform",
          "Managed and maintained Android mobile apps",
          "Collaborated with backend teams for seamless API integration",
        ],
      },
      {
        id: randomUUID(),
        year: "2024",
        role: "Jr. Android Developer",
        company: "Vintega Solutions Pvt. Ltd",
        description:
          "Contributed to complete Android app lifecycle from development to deployment.",
        achievements: [
          "Worked across complete Android app lifecycle",
          "Applied UI/UX principles to create intuitive mobile interfaces",
          "Gained proficiency in Kotlin, MVVM architecture, and API integration",
          "Contributed to bug fixes and code reviews",
        ],
      },
    ];

    experiencesData.forEach((experience) => {
      this.experiences.set(experience.id, experience);
    });
  }

  async getPortfolioInfo(): Promise<PortfolioInfo> {
    return this.portfolioInfo;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProjectById(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }

  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async getSkills(): Promise<Skill[]> {
    return Array.from(this.skills.values());
  }

  async getExperiences(): Promise<Experience[]> {
    return Array.from(this.experiences.values());
  }

  async createContactMessage(
    insertMessage: InsertContactMessage
  ): Promise<ContactMessage> {
    const message: ContactMessage = { ...insertMessage };
    this.contactMessages.push(message);
    return message;
  }
}

export const storage = new MemStorage();
