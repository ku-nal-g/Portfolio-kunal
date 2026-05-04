import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly fb = inject(FormBuilder);

  protected readonly title = signal('Kunal Gupta | Portfolio');
  protected readonly currentYear = new Date().getFullYear();
  protected readonly mobileNavOpen = signal(false);
  protected readonly formSubmitted = signal(false);

  protected readonly contactForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected readonly social = {
    phone: '+91-7302207232',
    email: 'kunal.guptadev02@gmail.com',
    linkedin: 'https://www.linkedin.com/in/kunal-gupta-0b7776185/',
    github: 'https://github.com/ku-nal-g',
  };

  /** `tel:` link without spaces/dashes for mobile dialers */
  protected readonly telHref = 'tel:+917302207232';

  protected readonly summary =
    'Results-driven Full-Stack Developer with 3+ years of experience architecting and deploying scalable enterprise web applications. Specialized in Angular and Node.js ecosystems with proven expertise in building HRMS platforms, AI-powered solutions, and real-time dashboards. Delivered solutions reducing manual reporting by 60% and improving resource utilization by 40%. Strong background in CI/CD automation, RESTful API development, and cloud integration using Azure DevOps.';

  protected readonly highlights = [
    { value: '3+', label: 'Years building web products' },
    { value: '2000+', label: 'Employees served via HRMS' },
    { value: '60%', label: 'Manual reporting reduction' },
    { value: '5+', label: 'Active projects analyzed' },
  ];

  protected readonly specialties = [
    'Scalable Angular frontends',
    'Node.js API architecture',
    'Cloud-integrated enterprise platforms',
    'AI-assisted product experiences',
  ];

  protected readonly skills: { category: string; items: string[] }[] = [
    {
      category: 'Frontend',
      items: [
        'Angular 2+',
        'React Js',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'Angular Material',
        'PrimeNG',
        'Bootstrap',
        'Responsive Design',
        'SPA Architecture',
      ],
    },
    {
      category: 'Backend',
      items: [
        'Node.js',
        'Express.js',
        'RESTful APIs',
        'JWT Authentication',
        'SQL',
        'NoSQL',
      ],
    },
    {
      category: 'Cloud & DevOps',
      items: [
        'Azure DevOps',
        'Azure Blob Storage',
        'Azure OpenAI Services',
        'CI/CD Pipelines',
        'Git Version Control',
      ],
    },
    {
      category: 'Tools & methods',
      items: [
        'Visual Studio Code',
        'Postman',
        'Figma',
        'ApexCharts',
        'Agile/Scrum',
        'TDD',
        'Code review',
        'Performance optimization',
      ],
    },
  ];

  protected readonly experience = [
    {
      role: 'Software Engineer',
      company: 'Celebal Technologies',
      location: 'Jaipur, Rajasthan',
      period: 'November 2022 – Present',
      highlights: [
        'Architected and deployed end-to-end HRMS platform serving 2000+ employees, enabling project management, task tracking, and timesheet automation, reducing administrative overhead by 60%',
        'Engineered real-time financial dashboards with dynamic profitability analytics for 50+ active projects, automating financial reporting and improving decision-making accuracy by 45%',
        'Developed AI-powered chatbot UI integrated with Azure OpenAI and speech-to-text capabilities, enhancing user accessibility and reducing support queries by 35%',
        'Built centralized recruitment platform with resume management and employee referral system, streamlining candidate tracking and accelerating hiring pipeline by 40%',
        'Created automated email notification system with dynamic templates, reducing manual communication efforts by 70% and improving employee engagement',
        'Optimized bench resource identification algorithm, improving workforce allocation efficiency by 40% and reducing idle time costs',
        'Implemented CI/CD pipelines using Azure DevOps, reducing deployment time by 50% and ensuring zero-downtime releases',
      ],
    },
    {
      role: 'Trainee Software Engineer',
      company: 'Codestore Solutions',
      location: 'Noida, UP',
      period: 'January 2022 – June 2022',
      highlights: [
        'Completed intensive Angular framework training with hands-on development of production-ready applications under senior mentorship',
        'Engineered guest checkout module for e-commerce platform, enabling frictionless purchasing without authentication, increasing conversion rates by 25% and cart abandonment reduction by 30%',
        'Resolved 20+ critical UI/UX bugs and implemented performance optimizations, improving page load time by 40% and user satisfaction scores',
        'Collaborated using Git version control with 8-member development team, managing feature branches, conducting code reviews, and resolving merge conflicts efficiently',
      ],
    },
  ];

  protected readonly projects = [
    {
      name: 'Enterprise Banking Chatbot Platform',
      stack: 'Azure Bot Framework, React Js, Direct Line API, Node.js, Azure Services',
      points: [
        'Managed and enhanced enterprise banking chatbot solutions using Azure Bot Framework for customer support and service automation',
        'Designed and implemented conversational bot journeys for banking workflows including card services, account assistance, and transaction-related queries',
        'Integrated Direct Line API for secure real-time communication between Angular frontend applications and chatbot services',
        'Collaborated with backend and business teams to optimize conversational flows, improve response accuracy, and enhance customer experience',
        'Monitored bot interactions, identified conversation gaps, and implemented continuous improvements to increase successful query resolution rates',
      ],
    },
    {
      name: 'Projectile — Enterprise HRMS Platform',
      stack: 'Angular, Node.js, Azure DevOps, Azure Blob Storage',
      points: [
        'Designed scalable HRMS architecture supporting 2000+ concurrent users with project management, resource allocation, and timesheet functionalities',
        'Implemented real-time analytics dashboards providing visibility into project health, team performance, and financial metrics',
        'Automated bench employee identification and reporting, optimizing resource utilization across 15+ departments',
        'Integrated Azure Blob Storage for secure document management with role-based access control',
      ],
    },
    {
      name: 'AI-Powered Vehicle Damage Assessment Dashboard',
      stack: 'Angular, PrimeNG, Azure OpenAI',
      points: [
        'Developed administrator portal for insurance claim processing with AI-driven damage prediction from vehicle images, reducing manual assessment time by 65%',
        'Built intelligent Q&A chatbot leveraging Azure OpenAI and NLP for real-time PDF content extraction and analysis',
        'Implemented secure document management system for uploading, storing, and retrieving damage reports',
      ],
    },
    {
      name: 'MIIP Portal — Genomic Research Platform',
      stack: 'Angular, ApexCharts, Azure DevOps',
      points: [
        'Engineered biotech research platform enabling genome file uploads, automated data pipeline execution, and precise DNA sample outputs',
        'Designed interactive data visualizations using ApexCharts for genomic analysis patterns and trend identification',
        'Streamlined bioinformatics workflow, accelerating genomic data interpretation by 50% for research teams',
      ],
    },
    {
      name: 'Happening-Now E-Commerce Enhancement',
      stack: 'Angular, Angular Material, Bootstrap',
      points: [
        'Developed guest checkout feature reducing cart abandonment by 30% and improving conversion rates by 25%',
        'Optimized frontend performance through code refactoring and lazy loading, improving page load speed by 40%',
      ],
    },
  ];

  protected readonly education = {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    school: 'ICFAI University, Dehradun',
    period: 'July 2018 – June 2022',
    gpa: '9.14/10.0 (First Class with Distinction)',
    coursework:
      'Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Software Engineering, Compiler Design',
  };

  protected readonly certifications = [
    'Angular Development Certification — SoloLearn',
    'Data Structures and Algorithms with C++ — Udemy (Abdul Bari)',
    'Web Development Fundamentals (HTML5, CSS3, JavaScript) — Codedamn',
  ];

  protected toggleMobileNav(): void {
    this.mobileNavOpen.update((v) => !v);
  }

  protected closeMobileNav(): void {
    this.mobileNavOpen.set(false);
  }

  protected scrollTo(id: string): void {
    this.closeMobileNav();
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  protected submitContact(): void {
    this.formSubmitted.set(false);
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    const { name, email, message } = this.contactForm.getRawValue();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${this.social.email}?subject=${subject}&body=${body}`;
    this.formSubmitted.set(true);
    this.contactForm.reset();
  }
}
