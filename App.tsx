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
  GraduationCap,
  Languages
} from 'lucide-react';
import { CONTENT, SKILL_ICONS, CONTACT_INFO } from './constants';

// --- Reusable Components ---

const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: string }> = ({ children, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3 before:content-[''] before:block before:w-2 before:h-8 before:bg-primary-500 before:rounded-full">
      {children}
    </h2>
    {subtitle && <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl">{subtitle}</p>}
  </div>
);

const Badge: React.FC<{ children: React.ReactNode; outline?: boolean }> = ({ children, outline = false }) => {
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

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-300 ${className}`}>
    {children}
  </div>
);

// --- Main App Component ---

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'zh'>('en'); // Default to English

  const t = CONTENT[lang]; // Translation helper

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
  
  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'zh' : 'en');
  };

  const navLinks = [
    { name: t.navigation.home, href: '#home' },
    { name: t.navigation.projects, href: '#projects' },
    { name: t.navigation.learning, href: '#learning' },
    { name: t.navigation.notes, href: '#notes' },
    { name: t.navigation.about, href: '#about' },
    { name: t.navigation.contact, href: '#contact' },
  ];

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 ${lang === 'zh' ? 'font-sans-sc' : ''}`}>
      
      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl font-mono text-slate-900 dark:text-slate-100">
                {lang === 'en' ? 'LongXinyang' : '龙新阳'}<span className="text-primary-500">.bio</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-xs font-medium text-slate-700 dark:text-slate-300"
                aria-label={t.ui.langToggle}
              >
                <Languages size={14} />
                <span>{lang === 'en' ? 'CN' : 'EN'}</span>
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
                aria-label={t.ui.themeToggle}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-slate-600 dark:text-slate-300"
              >
                <span className="text-xs font-bold">{lang.toUpperCase()}</span>
              </button>
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
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary-600 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
              >
                <Languages size={18} />
                {t.ui.langToggle}
              </button>
              <button
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary-600 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"
              >
                {isDarkMode ? <Sun size={18}/> : <Moon size={18}/>}
                {t.ui.themeToggle}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 animate-fade-in-up">
          <Badge>{t.personalInfo.role}</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-teal-400">{t.personalInfo.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light">
            {t.personalInfo.tagline}
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            {t.personalInfo.intro}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-primary-500/20"
            >
              {t.ui.viewProjects}
            </a>
            <a 
              href="#notes"
              className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-medium hover:border-primary-500 transition-colors"
            >
              {t.ui.readNotes}
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
        
        {/* CSS Geometric visualization */}
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

      {/* --- Projects/Repositories Section --- */}
      <section id="projects" className="py-20 bg-white dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle={t.ui.repoSubtitle}>
            {t.navigation.projects}
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.map((project) => (
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
                      {t.ui.viewCode} <ChevronRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- Learning Tools Section --- */}
      <section id="learning" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <SectionTitle subtitle={t.ui.learningSubtitle}>
            {t.navigation.learning}
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.learningTools.map((tool) => (
              <Card key={tool.id} className="p-6 border-l-4 border-l-primary-500">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <GraduationCap size={20} className="text-primary-500"/>
                      {tool.title}
                    </h3>
                    <Badge outline>{tool.category}</Badge>
                  </div>
                  <a 
                    href={tool.url}
                    className="inline-flex items-center justify-center px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white rounded-lg text-sm font-medium hover:bg-primary-600 dark:hover:bg-primary-600 transition-colors"
                  >
                    {t.ui.openTool}
                  </a>
                </div>
                <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm">
                  {tool.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- Notes Section --- */}
      <section id="notes" className="py-20 bg-slate-50 dark:bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle={lang === 'en' ? "Technical notes, tutorials, and thoughts on bioinformatics methodology." : "技术笔记、教程以及关于生物信息学方法的思考。"}>
            {t.navigation.notes}
          </SectionTitle>

          <div className="space-y-6">
            {t.notes.map((note) => (
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
                  {t.ui.readMore} <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
             <a href="https://blog.example.com" className="text-slate-500 hover:text-primary-600 text-sm font-medium inline-flex items-center gap-1 transition-colors">
               {t.ui.visitBlog} <ExternalLink size={14}/>
             </a>
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>{t.ui.aboutTitle}</SectionTitle>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            {t.personalInfo.bio.map((paragraph, index) => (
               <p key={index} className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mt-4 first:mt-0">
                  {paragraph}
               </p>
            ))}

            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-10 mb-6">{t.ui.publicationsTitle}</h3>
            <ul className="space-y-4 list-none pl-0">
              {t.publications.map((pub) => (
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
          <h2 className="text-3xl font-bold text-white mb-6">{t.ui.connectTitle}</h2>
          <p className="mb-10 text-lg text-slate-400">
            {t.ui.connectDesc}
          </p>
          
          <div className="flex justify-center gap-8 mb-12">
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex flex-col items-center gap-2 hover:text-primary-400 transition-colors">
              <div className="p-4 bg-slate-800 rounded-full">
                <Mail size={24} />
              </div>
              <span className="text-sm">Email</span>
            </a>
            <a href={CONTACT_INFO.github} className="flex flex-col items-center gap-2 hover:text-primary-400 transition-colors">
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
                <input type="text" placeholder={lang === 'en' ? "Name" : "姓名"} className="bg-slate-800 border-none rounded-lg p-3 w-full focus:ring-2 focus:ring-primary-500" />
                <input type="email" placeholder={lang === 'en' ? "Email" : "邮箱"} className="bg-slate-800 border-none rounded-lg p-3 w-full focus:ring-2 focus:ring-primary-500" />
             </div>
             <textarea placeholder={lang === 'en' ? "Message" : "留言内容"} rows={4} className="bg-slate-800 border-none rounded-lg p-3 w-full focus:ring-2 focus:ring-primary-500"></textarea>
             <button type="button" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-lg transition-colors">
               {t.ui.sendMessage}
             </button>
          </form>

        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-8 bg-slate-950 text-slate-500 text-sm text-center border-t border-slate-900">
        <p>© {new Date().getFullYear()} {t.personalInfo.name}. All rights reserved.</p>
        <p className="mt-2">
          {t.ui.footerText}
        </p>
      </footer>
    </div>
  );
};

export default App;