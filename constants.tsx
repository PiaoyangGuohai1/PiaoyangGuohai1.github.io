import { Project, Note, LearningTool, TechStack, Publication } from './types';
import { 
  Dna, 
  Terminal, 
  Database, 
  Activity, 
  Code2, 
  BarChart3 
} from 'lucide-react';

export const SKILL_ICONS = [
  { icon: Dna, label: "Genomics" },
  { icon: Terminal, label: "Linux/Bash" },
  { icon: Code2, label: "R & Python" },
  { icon: BarChart3, label: "Data Viz" },
  { icon: Database, label: "Biobanks" },
  { icon: Activity, label: "Epidemiology" },
];

interface Content {
  personalInfo: {
    name: string;
    role: string;
    tagline: string;
    location: string;
    intro: string;
    bio: string[];
  };
  navigation: {
    home: string;
    projects: string;
    learning: string;
    notes: string;
    about: string;
    contact: string;
  };
  ui: {
    themeToggle: string;
    langToggle: string;
    viewProjects: string;
    readNotes: string;
    viewCode: string;
    liveDemo: string;
    openTool: string;
    targetAudience: string;
    readMore: string;
    visitBlog: string;
    aboutTitle: string;
    publicationsTitle: string;
    connectTitle: string;
    connectDesc: string;
    sendMessage: string;
    footerText: string;
    repoSubtitle: string;
    learningSubtitle: string;
  };
  projects: Project[];
  learningTools: LearningTool[];
  notes: Note[];
  publications: Publication[];
}

export const CONTENT: Record<'en' | 'zh', Content> = {
  en: {
    personalInfo: {
      name: "Long Xinyang",
      role: "Bioinformatics Engineer",
      tagline: "Translator between genetic data and code",
      location: "Guangxi / Hunan, China",
      intro: "PhD Candidate in Epidemiology & Biostatistics. I specialize in deciphering complex biological questions using multi-omics data (Single-cell RNA-seq, Spatial Transcriptomics, GWAS). I build reproducible analysis pipelines and data visualization tools.",
      bio: [
        "I am a PhD candidate in Epidemiology and Biostatistics at Guangxi Medical University, mentored by Prof. Mo Zengnan. My academic journey began with a Bachelor's in Preventive Medicine, followed by a Master's degree where I started focusing on the genetic epidemiology of chronic non-communicable diseases.",
        "Currently, my research bridges the gap between clinical data and complex genomics. I specialize in utilizing R and Python to build analysis pipelines for single-cell RNA sequencing and spatial transcriptomics. I am particularly interested in how genetic factors influence cardiovascular and renal diseases.",
        "I believe in literate programming. In my projects, I document my code extensively and maintain detailed Markdown documentation to ensure reproducibility and clarity for my team."
      ]
    },
    navigation: {
      home: "Home",
      projects: "Repositories",
      learning: "Learning",
      notes: "Notes",
      about: "About",
      contact: "Contact"
    },
    ui: {
      themeToggle: "Toggle Theme",
      langToggle: "Switch Language",
      viewProjects: "View Repositories",
      readNotes: "Read Notes",
      viewCode: "View Code",
      liveDemo: "Live Demo",
      openTool: "Open Tool",
      targetAudience: "For",
      readMore: "Read more",
      visitBlog: "Visit full blog",
      aboutTitle: "About Me",
      publicationsTitle: "Publications",
      connectTitle: "Let's Connect",
      connectDesc: "Open for collaborations on single-cell analysis pipelines and genetic epidemiology research.",
      sendMessage: "Send Message",
      footerText: "Powered by React & Tailwind CSS · Deployed on GitHub Pages",
      repoSubtitle: "Selected popular repositories and research projects.",
      learningSubtitle: "Web tools I built for learning English and Programming."
    },
    projects: [
      {
        id: "p1",
        title: "Pig Heart ASD Repair Atlas",
        description: "Pipeline for scRNA-seq and spatial transcriptomics to study atrial septal defect (ASD) repair mechanisms. Includes cell type annotation and gene expression trend analysis.",
        tags: [TechStack.R, TechStack.SingleCell, TechStack.Spatial],
        githubUrl: "https://github.com/longxinyang/pig-heart-atlas-demo",
        status: "In Progress"
      },
      {
        id: "p2",
        title: "CVD Genetic Determinants",
        description: "GWAS analysis pipeline for UK Biobank & China Bobai Cohort data. Features Polygenic Risk Score (PRS) calculations and Mendelian Randomization (MR) workflows.",
        tags: [TechStack.Python, TechStack.GWAS, TechStack.Bash],
        githubUrl: "https://github.com/longxinyang/cvd-genetics-demo",
        status: "Completed"
      },
      {
        id: "p3",
        title: "Bladder Cancer Microenvironment",
        description: "Single-cell sequencing analysis codebase for investigating tumor microenvironment heterogeneity in bladder cancer. Optimized for HPC environments.",
        tags: [TechStack.R, TechStack.SingleCell, TechStack.Linux],
        githubUrl: "https://github.com/longxinyang/bladder-cancer-sc",
        status: "Completed"
      }
    ],
    learningTools: [
      {
        id: "t1",
        title: "Bio-Academic English",
        description: "A vocabulary builder and phrase bank specifically for writing bioinformatics papers. Includes flashcards for common academic transitions.",
        category: "English",
        url: "https://english.example.com"
      },
      {
        id: "t2",
        title: "R/Python Syntax Matcher",
        description: "Interactive tool to compare and learn data manipulation syntax between dplyr (R) and pandas (Python).",
        category: "Coding",
        url: "https://code.example.com"
      }
    ],
    notes: [
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
    ],
    publications: [
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
    ]
  },
  zh: {
    personalInfo: {
      name: "龙新阳",
      role: "生物信息工程师",
      tagline: "基因数据与代码之间的翻译官",
      location: "中国 广西 / 湖南",
      intro: "流行病与卫生统计学博士在读。我专注于利用多组学数据（单细胞RNA测序、空间转录组学、GWAS）解读复杂的生物学问题。我致力于构建可复现的分析流程和数据可视化工具。",
      bio: [
        "我是广西医科大学流行病与卫生统计学的博士研究生，师从莫曾南教授。我的学术生涯始于预防医学本科，随后在硕士阶段开始专注于慢性非传染性疾病的遗传流行病学研究。",
        "目前，我的研究致力于连接临床数据与复杂的基因组学。我擅长使用 R 和 Python 构建单细胞 RNA 测序和空间转录组学的分析流程。我对遗传因素如何影响心血管和肾脏疾病特别感兴趣。",
        "我推崇“文学化编程”（Literate Programming）。在我的项目中，我会用中文详细注释代码，并维护详细的 Markdown 文档，以确保团队协作时的复现性和清晰度。"
      ]
    },
    navigation: {
      home: "首页",
      projects: "仓库",
      learning: "学习",
      notes: "笔记文章",
      about: "关于我",
      contact: "联系"
    },
    ui: {
      themeToggle: "切换主题",
      langToggle: "切换语言",
      viewProjects: "查看代码仓库",
      readNotes: "阅读笔记",
      viewCode: "查看代码",
      liveDemo: "在线演示",
      openTool: "打开工具",
      targetAudience: "适用人群",
      readMore: "阅读更多",
      visitBlog: "访问博客",
      aboutTitle: "关于我",
      publicationsTitle: "论文发表",
      connectTitle: "保持联系",
      connectDesc: "欢迎就单细胞分析流程和遗传流行病学研究进行交流与合作。",
      sendMessage: "发送消息",
      footerText: "Powered by React & Tailwind CSS · Deployed on GitHub Pages",
      repoSubtitle: "精选的热门代码仓库与研究项目。",
      learningSubtitle: "我开发的用于辅助学习英语和编程的 Web 工具。"
    },
    projects: [
      {
        id: "p1",
        title: "Pig Heart ASD Repair Atlas",
        description: "用于 scRNA-seq 和空间转录组学的分析流程，研究 ASD 修复机制。包含细胞类型注释及基因表达趋势分析代码。",
        tags: [TechStack.R, TechStack.SingleCell, TechStack.Spatial],
        githubUrl: "https://github.com/longxinyang/pig-heart-atlas-demo",
        status: "In Progress"
      },
      {
        id: "p2",
        title: "CVD Genetic Determinants",
        description: "利用 UK Biobank 数据进行 GWAS 分析的流程代码。包含多基因风险评分（PRS）计算和孟德尔随机化（MR）脚本。",
        tags: [TechStack.Python, TechStack.GWAS, TechStack.Bash],
        githubUrl: "https://github.com/longxinyang/cvd-genetics-demo",
        status: "Completed"
      },
      {
        id: "p3",
        title: "Bladder Cancer Microenvironment",
        description: "膀胱癌肿瘤微环境异质性研究的单细胞分析代码库。针对 HPC 环境进行了配置优化。",
        tags: [TechStack.R, TechStack.SingleCell, TechStack.Linux],
        githubUrl: "https://github.com/longxinyang/bladder-cancer-sc",
        status: "Completed"
      }
    ],
    learningTools: [
      {
        id: "t1",
        title: "学术英语助手",
        description: "专为撰写生物信息学论文设计的词汇构建器和短语库。包含常用学术转折词的记忆卡片。",
        category: "English",
        url: "https://english.example.com"
      },
      {
        id: "t2",
        title: "R/Python 语法对照",
        description: "交互式工具，用于对比学习 dplyr (R) 和 pandas (Python) 之间的数据处理语法。",
        category: "Coding",
        url: "https://code.example.com"
      }
    ],
    notes: [
      {
        id: "n1",
        title: "理解 Seurat v5 对象结构",
        date: "2023-10-15",
        description: "深入解析 R 中的 S4 对象结构以及如何高效处理 assay 数据。",
        tags: ["R", "Seurat", "Single-cell"],
        link: "https://blog.example.com/seurat-v5"
      },
      {
        id: "n2",
        title: "孟德尔随机化分析流程",
        date: "2023-09-01",
        description: "流行病学因果推断工具 TwoSampleMR 的分步指南。",
        tags: ["Statistics", "GWAS", "Methodology"],
        link: "https://blog.example.com/mr-guide"
      },
      {
        id: "n3",
        title: "搭建生物信息学服务器",
        date: "2023-08-20",
        description: "关于用户管理、环境模块 (Environment Modules) 和 Conda/Singularity 容器的最佳实践。",
        tags: ["Linux", "DevOps", "HPC"],
        link: "https://blog.example.com/server-setup"
      }
    ],
    publications: [
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
    ]
  }
};

export const CONTACT_INFO = {
  email: "longxinyang@foxmail.com",
  github: "https://github.com/longxinyang"
};