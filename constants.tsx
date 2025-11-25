import { Project, Note, AppItem, TechStack, Publication } from './types';
import { 
  Dna, 
  Terminal, 
  Database, 
  Activity, 
  Code2, 
  BarChart3 
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Long Xinyang",
  chineseName: "龙新阳",
  role: "Bioinformatics Engineer",
  tagline: "基因数据与代码之间的翻译官",
  email: "longxinyang@foxmail.com",
  github: "https://github.com/longxinyang",
  location: "Guangxi / Hunan, China",
  intro: "PhD Candidate in Epidemiology & Biostatistics. I specialize in deciphering complex biological questions using multi-omics data (Single-cell RNA-seq, Spatial Transcriptomics, GWAS). I build reproducible analysis pipelines and data visualization tools."
};

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Pig Heart ASD Repair Atlas",
    description: "Developed analysis pipelines for scRNA-seq and spatial transcriptomics to study atrial septal defect (ASD) repair mechanisms in porcine models. Annotated cell types and analyzed gene expression trends across 5 timepoints.",
    tags: [TechStack.R, TechStack.SingleCell, TechStack.Spatial, TechStack.Linux],
    githubUrl: "https://github.com/longxinyang/pig-heart-atlas-demo",
    status: "In Progress"
  },
  {
    id: "p2",
    title: "CVD Genetic Determinants (UK Biobank)",
    description: "Investigated genetic overlaps between Chronic Kidney Disease (CKD) and Cardiovascular Disease (CVD) using large-scale GWAS data from UK Biobank and China Bobai Cohort. Implemented Polygenic Risk Score (PRS) calculations and Mendelian Randomization.",
    tags: [TechStack.Python, TechStack.GWAS, TechStack.R, TechStack.Bash],
    githubUrl: "https://github.com/longxinyang/cvd-genetics-demo",
    status: "Completed"
  },
  {
    id: "p3",
    title: "Single-Cell Bladder Cancer Microenvironment",
    description: "Analyzed tumor microenvironment heterogeneity in bladder cancer using single-cell sequencing data. Managed server infrastructure and bioinformatics environment configuration.",
    tags: [TechStack.R, TechStack.SingleCell, TechStack.Linux],
    githubUrl: "https://github.com/longxinyang/bladder-cancer-sc",
    status: "Completed"
  }
];

export const APPS: AppItem[] = [
  {
    id: "a1",
    name: "GeneExp Visualizer",
    description: "An interactive Shiny app to visualize gene expression trends across different developmental stages in cardiac tissue.",
    targetAudience: "Wet-lab Biologists",
    url: "https://shiny.example.com/gene-exp"
  },
  {
    id: "a2",
    name: "FastQC-Reporter",
    description: "Web-based automated reporting tool for NGS quality control metrics.",
    targetAudience: "Bioinformaticians",
    url: "https://tools.example.com/fastqc-reporter"
  }
];

export const NOTES: Note[] = [
  {
    id: "n1",
    title: "Understanding Seurat v5 Object Structure",
    date: "2023-10-15",
    description: "A deep dive into the S4 object structure in R and how to manipulate assay data efficiently.",
    tags: ["R", "Seurat", "Single-cell"],
    link: "https://blog.example.com/seurat-v5"
  },
  {
    id: "n2",
    title: "Mendelian Randomization Analysis Pipeline",
    date: "2023-09-01",
    description: "Step-by-step guide to TwoSampleMR for causal inference in epidemiology.",
    tags: ["Statistics", "GWAS", "Methodology"],
    link: "https://blog.example.com/mr-guide"
  },
  {
    id: "n3",
    title: "Setting up a Bioinformatics Server",
    date: "2023-08-20",
    description: "Best practices for user management, environment modules, and conda/singularity containers.",
    tags: ["Linux", "DevOps", "HPC"],
    link: "https://blog.example.com/server-setup"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub1",
    citation: "Long, X., Yan, B., & Mo, Z. (2023). Uncovering the heterogeneity and cell fate decisions of endothelial cells after myocardial infarction by single-cell sequencing. iLABMED.",
    url: "https://doi.org/10.1002/med4.34",
    status: "Published"
  },
  {
    id: "pub2",
    citation: "Long, X., et al. (n.d.). Genetic and causal associations of primary aldosteronism with cardiac magnetic resonance traits. Under revision in European Journal of Preventive Cardiology.",
    status: "Under Revision"
  }
];

export const SKILL_ICONS = [
  { icon: Dna, label: "Genomics" },
  { icon: Terminal, label: "Linux/Bash" },
  { icon: Code2, label: "R & Python" },
  { icon: BarChart3, label: "Data Viz" },
  { icon: Database, label: "Biobanks" },
  { icon: Activity, label: "Epidemiology" },
];