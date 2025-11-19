export interface ExperienceItem {
  title: string;
  company?: string;
  period: string;
  location: string;
  description: string[];
}

export interface SkillItem {
  name: string;
  category: 'Professional' | 'Technical' | 'Language';
  level?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin?: string;
}
