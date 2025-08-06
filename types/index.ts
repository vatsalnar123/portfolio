export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  type: 'education' | 'work' | 'project';
}

export interface Skill {
  name: string;
  category: 'language' | 'frontend' | 'backend' | 'database' | 'tool';
}

export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  resume?: string;
}