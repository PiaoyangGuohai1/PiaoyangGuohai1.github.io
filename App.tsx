import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Moon, 
  Sun, 
  ExternalLink, 
  Menu, 
  X,
  ChevronRight,
  BookOpen,
  Server
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, APPS, NOTES, PUBLICATIONS, SKILL_ICONS } from './constants';
import { TechStack } from './types';

// --- Reusable Components ---

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3 before:content-[''] before:block before:w-2 before:h-8 before:bg-primary-500 before:rounded-full">
      {children}
    </h2>
    {subtitle && <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl">{subtitle}</p>}
  </div>
);

const Badge = ({ children, outline = false }: { children: React.ReactNode; outline?: boolean }) => {
  if (outline) {
    return (
      <span className="px-2.5 py-0.5 rounded text-xs font-mono border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400">
        {children}
      </span>
    );
  }
  return (
    <span className="px-2.5 py-0.5 rounded text-xs font-medium font-mono bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
      {children}
    </span>
  );
};

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-300 ${className}`}>
    {children}
  </div>
);

// --- Main App Component ---

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle Dark Mode
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Apps', href: '#apps' },
    { name: 'Notes', href: '#notes' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl font-mono text-slate-900 dark:text-slate-100">
                {PERSONAL_INFO.name}<span className="text-primary-500">.bio</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-slate-600 dark:text-slate-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary-600 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 animate-fade-in-up">
          <Badge>Bioinformatics & Epidemiology</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-teal-400">{PERSONAL_INFO.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light">
            {PERSONAL_INFO.tagline}
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            {PERSONAL_INFO.intro}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-primary-500/20"
            >
              View Projects
            </a>
            <a 
              href="#notes"
              className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-medium hover:border-primary-500 transition-colors"
            >
              Read Notes
            </a>
          </div>

          <div className="pt-8 flex gap-6 text-slate-400">
            {SKILL_ICONS.map((Skill, idx) => (
               <div key={idx} className="flex flex-col items-center gap-2 group cursor-default">
                  <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-primary-500 transition-colors">
                    <Skill.icon size={20} />
                  </div>
                  <span className="text-xs font-mono hidden md:block opacity-0 group-hover:opacity-100 transition-opacity absolute mt-10">
                    {Skill.label}
                  </span>
               </div>
            ))}
          </div>
        </div>
        
        {/* Abstract "Hero Image" replacement - CSS Geometric visualization */}
        <div className="flex-1 w-full max-w-md md:max-w-full flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <div className="relative w-full h-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-4 border-b border-slate-100 dark:border-slate-700 pb-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="ml-auto font-mono text-xs text-slate-400">analysis.R</span>
                </div>
                <div className="space-y-2 font-mono text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex gap-2">
                    <span className="text-purple-500">library</span>
                    <span className="text-slate-800 dark:text-slate-200">(Seurat)</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-purple-500">data</span>
                    <span className="text-blue-500">&lt;-</span>
                    <span className="text-yellow-600 dark:text-yellow-500">Read10X</span>
                    <span>(dir)</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-slate-400"># Normalize data</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-purple-500">obj</span>
                    <span className="text-blue-500">&lt;-</span>
                    <span className="text-yellow-600 dark:text-yellow-500">NormalizeData</span>
                    <span>(obj)</span>
                  </div>
                   <div className="flex gap-2">
                    <span className="text-purple-500">obj</span>
                    <span className="text-blue-500">&lt;-</span>
                    <span className="text-yellow-600 dark:text-yellow-500">RunUMAP</span>
                    <span>(obj, dims=1:30)</span>
                  </div>
                  <div className="mt-6 p-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-100 dark:border-slate-700 text-center text-primary-600 text-xs">
                     Analyzed 32 samples...
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="py-20 bg-white dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Selected research projects involving large-scale genomic data analysis.">
            Projects
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <Card key={project.id} className="flex flex-col h-full p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300">
                     <Github size={20} />
                  </div>
                  <Badge outline>{project.status}</Badge>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                    <a href={project.githubUrl} className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400">
                      View Code <ChevronRight size={16} className="ml-1" />
                    </a>
                    {project.demoUrl && (
                      <a href={project.demoUrl} className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400">
                        Live Demo <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- Apps Section --- */}
      <section id="apps" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <SectionTitle subtitle="Web-based tools deployed on my cloud server for data visualization and quick analysis.">
            Mini Apps
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {APPS.map((app) => (
              <Card key={app.id} className="p-6 border-l-4 border-l-primary-500">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <Server size={18} className="text-primary-500"/>
                      {app.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      For: {app.targetAudience}
                    </p>
                  </div>
                  <a 
                    href={app.url}
                    className="inline-flex items-center justify-center px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg text-sm font-medium hover:bg-primary-600 dark:hover:bg-primary-600 transition-colors"
                  >
                    Launch App
                  </a>
                </div>
                <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm">
                  {app.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- Notes Section --- */}
      <section id="notes" className="py-20 bg-slate-50 dark:bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Technical notes, tutorials, and thoughts on bioinformatics methodology.">
            Notes
          </SectionTitle>

          <div className="space-y-6">
            {NOTES.map((note) => (
              <div key={note.id} className="group relative bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <div className="flex items-center gap-3">
                    <BookOpen size={18} className="text-slate-400" />
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">{note.date}</span>
                  </div>
                  <div className="flex gap-2">
                    {note.tags.map(tag => (
                      <Badge key={tag} outline>{tag}</Badge>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-2 mb-2 group-hover:text-primary-600 transition-colors">
                  <a href={note.link} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {note.title}
                  </a>
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm max-w-3xl">
                  {note.description}
                </p>
                <div className="mt-4 flex items-center text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                  Read more <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
             <a href="https://blog.example.com" className="text-slate-500 hover:text-primary-600 text-sm font-medium inline-flex items-center gap-1 transition-colors">
               Visit full blog <ExternalLink size={14}/>
             </a>
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>About Me</SectionTitle>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              I am a PhD candidate in Epidemiology and Biostatistics at Guangxi Medical University, mentored by Prof. Mo Zengnan. My academic journey began with a Bachelor's in Preventive Medicine, followed by a Master's degree where I started focusing on the genetic epidemiology of chronic non-communicable diseases.
            </p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mt-4">
              Currently, my research bridges the gap between clinical data and complex genomics. I specialize in utilizing <strong className="text-primary-600 dark:text-primary-400">R and Python</strong> to build analysis pipelines for single-cell RNA sequencing and spatial transcriptomics. I am particularly interested in how genetic factors influence cardiovascular and renal diseases.
            </p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mt-4">
              I believe in <em className="italic">literate programming</em>. In my projects, I document my code extensively with Chinese comments and maintain detailed Markdown documentation to ensure reproducibility and clarity for my team.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-6">Publications</h3>
            <ul className="space-y-4 list-none pl-0">
              {PUBLICATIONS.map((pub) => (
                <li key={pub.id} className="pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                  <p className="text-slate-700 dark:text-slate-300 italic">{pub.citation}</p>
                  <div className="mt-1 flex gap-3">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                      pub.status === 'Published' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {pub.status}
                    </span>
                    {pub.url && (
                      <a href={pub.url} className="text-xs text-primary-600 hover:underline flex items-center gap-1">
                        DOI Link <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-20 bg-slate-900 text-slate-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="mb-10 text-lg text-slate-400">
            Open for collaborations on single-cell analysis pipelines and genetic epidemiology research.
          </p>
          
          <div className="flex justify-center gap-8 mb-12">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex flex-col items-center gap-2 hover:text-primary-400 transition-colors">
              <div className="p-4 bg-slate-800 rounded-full">
                <Mail size={24} />
              </div>
              <span className="text-sm">Email</span>
            </a>
            <a href={PERSONAL_INFO.github} className="flex flex-col items-center gap-2 hover:text-primary-400 transition-colors">
              <div className="p-4 bg-slate-800 rounded-full">
                <Github size={24} />
              </div>
              <span className="text-sm">GitHub</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2 hover:text-primary-400 transition-colors">
              <div className="p-4 bg-slate-800 rounded-full">
                <Linkedin size={24} />
              </div>
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>

          <form className="max-w-md mx-auto space-y-4 text-left hidden sm:block">
             <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="bg-slate-800 border-none rounded-lg p-3 w-full focus:ring-2 focus:ring-primary-500" />
                <input type="email" placeholder="