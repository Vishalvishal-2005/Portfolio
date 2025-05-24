export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  score?: string;
}

export interface SkillItem {
  name: string;
  proficiency: number;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  date: string;
  type: string;
  image: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  description: string;
  date: string;
}