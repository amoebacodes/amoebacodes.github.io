export interface ISkillsCard {
  skillsCategory: string;
  state: 'default' | 'flipped';
}

export interface ISkillsLogo {
  imageDir: string;
  caption: string;
}

export interface IProjectDesc{
  title: string;
  link: string;
  summary: string;
  description: string;
  tags: string[];
}