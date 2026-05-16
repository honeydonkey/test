import React, { useState, useEffect } from 'react';
import {
  Shield,
  Terminal,
  Network,
  Award,
  Mail,
  Phone,
  Github,
  Linkedin,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
  Download,
  Share2,
  Briefcase,
  FileText,
  Zap,
  GraduationCap,
  Certificate,
  Trophy,
  Flag,
  Bot,
  Bug,
  UserCheck,
  Book,
  Send,
  Home,
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedExp, setExpandedExp] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'summary', label: 'Summary', icon: FileText },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Certificate },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
  ];

  const experiences = [
    {
      title: 'Risk Analyst',
      company: 'Grab',
      period: 'Dec 2025 – Present',
      status: 'Active',
      color: 'cyan',
      details: [
        'Conduct third-party security risk assessments and vendor evaluations',
        'Perform due diligence reviews of vendor security postures',
        'Maintain a vendor risk dashboard to track compliance metrics',
        'Identify, document, and prioritize findings and gaps',
        'Develop and track remediation plans for identified vulnerabilities',
      ],
    },
    {
      title: 'Junior Security Analyst',
      company: 'Deriv HQ',
      period: 'Jan 2023 – Dec 2025',
      color: 'pink',
      details: [
        'Ensured regulatory compliance (DORA, PCI-DSS, GDPR)',
        'Spearheaded organisation-wide security awareness programs',
        'Created educational materials to strengthen security culture',
        'Co-led offensive security campaigns, reducing attack surface',
        'Investigated security incidents and developed response procedures',
        'Delivered key projects including Threat Intelligence framework',
        'Contributed to AI-powered security chatbot development',
        'Applied AI tools to automate GRC processes',
        'Analysed 200+ weekly threat intelligence reports',
      ],
    },
    {
      title: 'BeSquare IT Graduate Programme',
      company: 'Deriv HQ',
      period: 'Jun 2022 – Dec 2022',
      color: 'cyan',
      details: [
        'Completed a nine-module program with industry experts',
        'Implemented security measures including MFA and access controls',
      ],
    },
    {
      title: 'IT Project Management Intern',
      company: 'Asian Supply Base SDN. BHD.',
      period: 'Mar 2021 – Jun 2021',
      color: 'pink',
      details: [
        'Partnered with cross-functional teams to deliver IT solutions',
        'Produced detailed process flowcharts and documentation',
        'Supported project management initiatives and stakeholder coordination',
      ],
    },
  ];

  const skills = [
    'Incident Playbooks',
    'Gap Analysis',
    'Security Awareness',
    'Third Party Vendor Risk Assessment',
    'AI Prompting',
    'Threat Intelligence',
    'Vendor Risk Management',
    'GRC',
    'PCI-DSS',
    'DORA Compliance',
    'Phishing Simulations',
    'Incident Response',
    'KnowBe4',
    'Google Workspace',
    'CrowdStrike',
    'UpGuard',
    'Windows',
    'macOS',
    'Kandji',
    'JumpCloud',
    'Microsoft 365',
    'BurpSuite',
    'Wireshark',
    'Nmap',
    'CATO',
    'NordLayer',
    'FortiManager',
    'Linux',
    'JamF',
    'ClickUp',
    'Certa',
  ];

  const achievements = [
    {
      title: 'Global Cyber Skills Benchmark CTF 2025',
      rank: 'Rank 57/796',
      organization: 'Global Cybersecurity Org',
      icon: Flag,
      color: 'cyan',
      description:
        'Participated with Deriv colleagues and ranked 57 out of 796 participants in an international cybersecurity competition.',
      link: 'https://drive.google.com/file/d/1-GFO9SalKL8FN1ETDzBRgPDv2iGJ3lJv/view',
    },
    {
      title: 'Wiz AI Security 2025',
      rank: 'Completed',
      organization: 'Wiz',
      icon: Bot,
      color: 'pink',
      description:
        'Completed AI prompt injection activities, demonstrating skills in identifying and exploiting AI security vulnerabilities.',
      link: 'https://drive.google.com/file/d/1Ifr1TRc1RqVrjvesGCW9I9kqzLFvrsDl/view',
    },
    {
      title: 'Kaspersky {CTF} 2025',
      rank: 'Participant',
      organization: 'Kaspersky',
      icon: Bug,
      color: 'cyan',
      description:
        'Participated in Kaspersky\'s Capture The Flag competition focusing on threat hunting.',
      link: 'https://drive.google.com/file/d/1CSoBVBAM9bbdvSvjrvw-ltpjG8uDI-P2/view',
    },
    {
      title: 'Girls in CTF 2024',
      rank: 'Rank 65/80',
      organization: 'Girls in CTF Organization',
      icon: UserCheck,
      color: 'pink',
      description:
        'Competed and ranked 65 out of 80 teams, demonstrating advanced skills in Open Source Intelligence (OSINT).',
      link: 'https://drive.google.com/file/d/1FCblOIgXGqrGZmxy2dRg-rmIWYtM1dzQ/view',
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleExp = (index) => {
    setExpandedExp(expandedExp === index ? null : index);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Portfolio link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/10 via-transparent to-pink-900/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: '4s' }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
                  Cybersecurity
                </p>
                <p className="text-xs text-gray-400">Marianne Wong</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors flex items-center gap-2"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-left">
              <p className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-6">
                Cybersecurity Risk Analyst
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none mb-6">
                Marianne{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500">
                  Wong
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
                Building resilient security ecosystems through AI-driven governance, threat
                intelligence, and offensive security insight.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-cyan-600 transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2"
                >
                  <Send className="w-5 h-5" /> Connect
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="px-8 py-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 text-white font-bold rounded-lg hover:border-gray-700 transition-all flex items-center gap-2"
                >
                  <Briefcase className="w-5 h-5" /> View Experience
                </button>
                <a
                  href="https://flowcv.com/resume/2mofja4dwmne"
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 text-white font-bold rounded-lg hover:border-gray-700 transition-all flex items-center gap-2"
                >
                  <Download className="w-5 h-5" /> Resume PDF
                </a>
              </div>

              {/* Contact Links */}
              <div className="mt-12">
                <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
                  Get in touch
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:marianne_wong@protonmail.com"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-cyan-500/30 transition-all"
                  >
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="break-all text-sm">marianne_wong@protonmail.com</span>
                  </a>
                  <a
                    href="https://wa.me/601923456789"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-pink-500/30 transition-all"
                  >
                    <Phone className="w-5 h-5 text-pink-400" />
                    <span className="text-sm">+6019-234-56789</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mwhm/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-cyan-500/30 transition-all"
                  >
                    <Linkedin className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="https://tryhackme.com/p/honeydonkey"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-pink-500/30 transition-all"
                  >
                    <Shield className="w-5 h-5 text-pink-400" />
                    <span className="text-sm">TryHackMe</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="w-6 h-6 text-pink-500" />
            <h2 className="text-3xl font-bold">SUMMARY</h2>
          </div>
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 relative overflow-hidden hover:border-gray-700 transition-all">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-pink-500"></div>
            <p className="text-lg leading-relaxed text-gray-300 pl-4">
              Cybersecurity Risk Analyst with 3+ years of experience across GRC, third-party risk
              management, security awareness, and security operations support. Experienced in vendor
              security assessments, compliance frameworks, and threat analysis. Proficient in
              AI-powered automation and security tooling. Strong communicator with proven ability to
              translate technical security concepts for non-technical stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Network className="w-6 h-6 text-cyan-500" />
            <h2 className="text-3xl font-bold">EXPERIENCE</h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all"
              >
                <div
                  className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                  onClick={() => toggleExp(index)}
                >
                  <div className="flex items-start gap-4">
                    <button className="mt-1 text-gray-400 transition-transform duration-200">
                      <ChevronRight
                        className="w-5 h-5"
                        style={{
                          transform:
                            expandedExp === index ? 'rotate(90deg)' : 'rotate(0)',
                        }}
                      />
                    </button>
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2 flex-wrap">
                        {exp.title} <span className="text-pink-500">@</span>
                        <span>{exp.company}</span>
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">{exp.period}</p>
                    </div>
                  </div>
                  {exp.status && (
                    <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-400">
                      {exp.status}
                    </span>
                  )}
                </div>
                {expandedExp === index && (
                  <div className="px-6 pb-6 pt-0 border-t border-gray-800">
                    <ul className="space-y-3">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className={`mt-2 h-2 w-2 rotate-45 ${
                              exp.color === 'cyan' ? 'bg-cyan-500' : 'bg-pink-500'
                            } shrink-0`}
                          ></span>
                          <p className="text-gray-300 leading-relaxed">{detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-6 h-6 text-pink-500" />
            <h2 className="text-3xl font-bold">SKILLS</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => {
              const colorClass =
                index % 3 === 0
                  ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400'
                  : index % 3 === 1
                  ? 'border-pink-500/30 bg-pink-500/10 text-pink-400'
                  : 'border-purple-500/30 bg-purple-500/10 text-purple-400';

              return (
                <span
                  key={skill}
                  className={`border rounded-full px-4 py-2 text-sm font-medium ${colorClass} hover:scale-105 transition-transform`}
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-cyan-500" />
            <h2 className="text-3xl font-bold">EDUCATION</h2>
          </div>
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 relative overflow-hidden hover:border-gray-700 transition-all">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-cyan-600"></div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <Book className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Bachelor of Science (Honours) in Cybersecurity
                </h3>
                <p className="mt-2 text-pink-400">Asia Pacific Institute of Technology (APIIT)</p>
                <p className="mt-2 text-sm text-gray-400">
                  May 2019 – Apr 2022 · First Class Honours · CGPA 3.7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Certificate className="w-6 h-6 text-pink-500" />
            <h2 className="text-3xl font-bold">CERTIFICATIONS</h2>
          </div>
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 relative overflow-hidden hover:border-gray-700 transition-all">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 to-pink-600"></div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl border border-pink-500/30 bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-pink-400" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">CompTIA Security+</h3>
                    <p className="mt-2 text-sm text-gray-400">
                      CompTIA · Issued Feb 2026 · Expires Feb 2029
                    </p>
                  </div>
                  <a
                    href="https://www.credly.com/badges/c6a9aee8-dd04-4905-b3b9-e39ab2134414/public_url"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:border-cyan-400 transition-all"
                  >
                    Verify Cert
                  </a>
                </div>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  Validates baseline cybersecurity skills including threat management, cryptography,
                  identity management, network security, and risk mitigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-6 h-6 text-cyan-500" />
            <h2 className="text-3xl font-bold">ACHIEVEMENTS</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const colorClass =
                achievement.color === 'cyan'
                  ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400'
                  : 'border-pink-500/30 bg-pink-500/10 text-pink-400';

              return (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all flex flex-col h-full"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span className={`rounded-md px-2.5 py-1 text-xs font-bold uppercase ${colorClass}`}>
                          {achievement.rank}
                        </span>
                        <span className="text-xs text-gray-400">{achievement.organization}</span>
                      </div>
                    </div>
                    <Icon
                      className={`w-6 h-6 mt-1 ${
                        achievement.color === 'cyan' ? 'text-cyan-400' : 'text-pink-400'
                      }`}
                    />
                  </div>
                  <p className="text-gray-300 leading-relaxed flex-grow">{achievement.description}</p>
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-4 inline-flex items-center gap-2 text-sm font-bold ${
                      achievement.color === 'cyan'
                        ? 'text-cyan-400 hover:text-cyan-300'
                        : 'text-pink-400 hover:text-pink-300'
                    } transition-colors`}
                  >
                    <ExternalLink className="w-4 h-4" /> View Data
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative py-8 border-t border-gray-800 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs tracking-widest uppercase text-gray-500 font-mono">
            SYS.DATE: 2026 // MARIANNE_WONG // SEC_RISK_ANALYST // CONNECTION_SECURE
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={copyLink}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-pink-500/30 transition-all text-sm font-semibold"
            >
              <Share2 className="w-4 h-4" /> Share Portfolio
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
