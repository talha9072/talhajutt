import { z } from "zod";

// Portfolio project schema
export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  imageUrl: z.string().optional(),
  githubUrl: z.string().optional(),
  playstoreUrl: z.string().optional(),
  featured: z.boolean().default(false),
  category: z.enum(["native", "ui_ux", "firebase", "full_stack"]),
});

// Service offering schema
export const serviceSchema = z.object({
  id: z.string(),
  number: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
});

// Skill schema
export const skillSchema = z.object({
  id: z.string(),
  name: z.string(),
  icon: z.string(),
  category: z.enum(["language", "framework", "tool", "platform"]),
});

// Experience schema
export const experienceSchema = z.object({
  id: z.string(),
  year: z.string(),
  role: z.string(),
  company: z.string(),
  description: z.string(),
  achievements: z.array(z.string()),
});

// Contact message schema
export const contactMessageSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Insert schemas
export const insertProjectSchema = projectSchema.omit({ id: true });
export const insertServiceSchema = serviceSchema.omit({ id: true });
export const insertSkillSchema = skillSchema.omit({ id: true });
export const insertExperienceSchema = experienceSchema.omit({ id: true });
export const insertContactMessageSchema = contactMessageSchema;

// Types
export type Project = z.infer<typeof projectSchema>;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Service = z.infer<typeof serviceSchema>;
export type InsertService = z.infer<typeof insertServiceSchema>;
export type Skill = z.infer<typeof skillSchema>;
export type InsertSkill = z.infer<typeof insertSkillSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type ContactMessage = z.infer<typeof contactMessageSchema>;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;

// Portfolio owner info
export interface PortfolioInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  yearsOfExperience: number;
  appsPublished: number;
  techStackSize: number;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  resume?: string;
}
