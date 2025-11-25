export enum TechStack {
  R = "R",
  Python = "Python",
  Linux = "Linux",
  Bash = "Bash",
  SingleCell = "Single-cell",
  Spatial = "Spatial Transcriptomics",
  GWAS = "GWAS",
  React = "React",
  Shiny = "Shiny",
  Docker = "Docker",
  Snakemake = "Snakemake"
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: TechStack[];
  githubUrl: string;
  demoUrl?: string;
  status: "Completed" | "In Progress";
}

export interface Note {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  link: string;
}

export interface AppItem {
  id: string;
  name: string;
  description: string;
  targetAudience: string;
  url: string;
}

export interface Publication {
  id: string;
  citation: string;
  url?: string;
  status: "Published" | "Under Revision" | "In Preparation";
}