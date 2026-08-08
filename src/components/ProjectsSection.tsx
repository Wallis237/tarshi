import { useEffect, useState } from 'react';
import { ArrowUpRight, Github } from "lucide-react";
import AnimationWrapper from './AnimationWrapper';
import { useProjects } from '@/hooks/useContent';

interface Project {
  id: number | string;
  title: string;
  description: string;
  image: string;
  category: string[];
  demoLink: string;
  githubLink: string;
  tags?: string[];
  featured?: boolean;
}

const fallbackProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment processing and inventory management.",
    image: "/lovable-uploads/bfecc9f4-5d72-4357-8d01-57d515ca89b0.png",
    category: ["software", "web"],
    demoLink: "https://demoforcel.netlify.app/",
    githubLink: "https://github.com/Wallis237",
    tags: ["React", "Tailwind", "Framer Motion"],
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Responsive portfolio website with animated sections and filtering gallery.",
    image: "/lovable-uploads/033930a6-c382-4cc3-ba0e-9f3e9c7bfd31.png",
    category: ["web"],
    demoLink: "https://demoforcel.netlify.app/",
    githubLink: "https://github.com/Wallis237",
    tags: ["TypeScript"],
  },
  {
    id: 3,
    title: "Photography Portfolio",
    description: "Elegant photography showcase with lightbox gallery and smooth transitions.",
    image: "/lovable-uploads/IMG-20250501-WA0034.jpg",
    category: ["photography"],
    demoLink: "https://demoforcel.netlify.app/",
    githubLink: "#",
    tags: ["React", "GSAP"],
  },
  {
    id: 4,
    title: "Brand Identity Pack",
    description: "Complete brand identity including logo, color palette, and marketing materials.",
    image: "/lovable-uploads/Purple White Orange Modern Geometric Digital Marketing Training Banner_20250430_130331_0000.png",
    category: ["design"],
    demoLink: "https://demoforcel.netlify.app/",
    githubLink: "#",
    tags: ["Branding", "Design"],
  },
  {
    id: 5,
    title: "Mobile Application",
    description: "Cross-platform mobile app with user authentication and cloud synchronization.",
    image: "/lovable-uploads/Screenshot_20250707-133307.png",
    category: ["software"],
    demoLink: "https://casino-insight-guru.vercel.app/",
    githubLink: "#",
    tags: ["React Native"],
  },
  {
    id: 6,
    title: "UI/UX Design System",
    description: "Comprehensive design system with component library and usage guidelines.",
    image: "/lovable-uploads/0d30ad6b-398e-41f3-81d9-091bcccc1dd0.png",
    category: ["design", "web"],
    demoLink: "https://demoforcel.netlify.app/",
    githubLink: "#",
    tags: ["Figma", "System"],
  },
  {
    id: 7,
    title: "Chat App",
    description: "A full chat app where users create accounts and message each other with profile uploads.",
    image: "/lovable-uploads/e85332d2-9f30-40f5-9d44-f9bf93ebb34e.png",
    category: ["software", "web"],
    demoLink: "https://demoforcel.netlify.app/",
    githubLink: "https://github.com/Wallis237",
    tags: ["Realtime", "React"],
  },
  {
    id: 8,
    title: "Client Intake",
    description: "A full-featured online questionnaire to help me understand client demands.",
    image: "/lovable-uploads/3028df71-0167-4088-a78f-40507a4ea535.png",
    category: ["software", "web"],
    demoLink: "https://client-intake-silk.vercel.app/",
    githubLink: "https://github.com/Wallis237",
    tags: ["Forms", "TypeScript"],
  },
];

const categories = [
  { id: "all", name: "All" },
  { id: "software", name: "Software" },
  { id: "web", name: "Web Dev" },
  { id: "photography", name: "Photography" },
  { id: "design", name: "Design" },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>("all");
  const { data: rows } = useProjects();

  const projects: Project[] = rows?.length
    ? rows.map((r) => ({
        id: r.id,
        title: r.title,
        description: r.description,
        image: r.image,
        category: r.categories ?? [],
        demoLink: r.demo_link,
        githubLink: r.github_link,
        tags: r.tags ?? [],
        featured: r.featured,
      }))
    : fallbackProjects;

  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    setFilteredProjects(
      filter === "all" ? projects : projects.filter((p) => p.category.includes(filter))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, rows]);


  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12">
          <AnimationWrapper animation="fadeUp">
            <div>
              <div className="eyebrow">// Selected Work</div>
              <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
                Turning Ideas Into<br />
                <span className="accent-italic">Masterpieces</span>
              </h2>
            </div>
          </AnimationWrapper>
          <AnimationWrapper animation="fadeUp" delay={150}>
            <div className="flex gap-8 lg:justify-end">
              <div>
                <div className="font-display font-bold text-4xl text-primary">19</div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mt-1">
                  Repositories
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-4xl text-primary">15</div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mt-1">
                  Followers
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>

        {/* Filters */}
        <AnimationWrapper animation="fadeUp" delay={200}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === c.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </AnimationWrapper>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <AnimationWrapper
              key={project.id}
              animation="fadeUpScale"
              delay={100 + index * 80}
              className={project.featured ? "lg:col-span-2 lg:row-span-1" : ""}
            >
              <ProjectCard project={project} />
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a
      href={project.demoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="surface-card-hover overflow-hidden group flex flex-col h-full"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-6xl font-display font-bold text-muted-foreground/20">
            {project.title.charAt(0)}
          </div>
        )}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-primary border border-primary/20">
            {project.category[0]}
          </span>
        </div>
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-4 h-4 text-primary" />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display font-bold text-xl md:text-2xl group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-grow">
          {project.description}
        </p>
        {project.tags && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-1 rounded-md bg-muted text-muted-foreground uppercase tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-5 pt-5 border-t border-border flex items-center justify-between text-xs font-mono">
          <span className="text-muted-foreground uppercase tracking-widest">View Project</span>
          {project.githubLink && project.githubLink !== "#" && (
            <span className="flex items-center gap-1 text-primary">
              <Github className="w-3.5 h-3.5" />
              Code
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProjectsSection;
