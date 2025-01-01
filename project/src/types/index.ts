export interface Project {
  id: string;
  name: string;
  description: string;
  metrics: Record<string, string>;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
}

export interface NetworkMember {
  id: string;
  name: string;
  position: string;
  company: string;
  expertise: string[];
  testimonial: string;
  imageUrl: string;
  linkedinUrl?: string;
  githubUrl?: string;
  type: 'mentor' | 'mentee';
}