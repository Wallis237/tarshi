
import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";
import AnimationWrapper from './AnimationWrapper';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  demoLink: string;
  githubLink: string;
}

// Project data
const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment processing and inventory management.",
    image: "/lovable-uploads/bfecc9f4-5d72-4357-8d01-57d515ca89b0.png",
    category: ["software", "web"],
    demoLink: "https://demoforcel.netlify.app/",
    githubLink: "https://github.com/Wallis237",
  },

  {
    id: 2,
    title: "Portfolio Website",
    description: "Responsive portfolio website with animated sections and filtering gallery.",
    image: "/lovable-uploads/033930a6-c382-4cc3-ba0e-9f3e9c7bfd31.png",
    category: ["web"],
    demoLink: "https://demoforcel.netlify.app/",
    githubLink: "https://github.com/Wallis237",
  },
  {
    id: 3,
    title: "Photography Portfolio",
    description: "Elegant photography showcase with lightbox gallery and smooth transitions.",
    image: "/lovable-uploads/IMG-20250501-WA0034.jpg",
    category: ["photography"],
    demoLink: "https://demoforcel.netlify.app/",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Brand Identity Pack",
    description: "Complete brand identity including logo, color palette, and marketing materials.",
    image: "/lovable-uploads/Purple White Orange Modern Geometric Digital Marketing Training Banner_20250430_130331_0000.png",
    category: ["design"],
    demoLink: "https://demoforcel.netlify.app/",
    githubLink: "#",
  },
  {
    id: 5,
    title: "Mobile Application",
    description: "Cross-platform mobile app with user authentication and cloud synchronization.",
    image: "/lovable-uploads/Screenshot_20250707-133307.png",
    category: ["software"],
    demoLink: "https://casino-insight-guru.vercel.app/",
    githubLink: "#",
  },
  {
    id: 6,
    title: "UI/UX Design System",
    description: "Comprehensive design system with component library and usage guidelines.",
    image: "/lovable-uploads/0d30ad6b-398e-41f3-81d9-091bcccc1dd0.png",
    category: ["design", "web"],
    demoLink: "https://demoforcel.netlify.app/",
    githubLink: "#",
  },
      {
    id: 7,
    title: "Chatapp",
    description: "A full chat app where users create account and chat with other users. users have able to upload and update profile",
    image: "",
    category: ["software", "web"],
    demoLink: "https://demoforcel.netlify.app/",
    githubLink: "https://github.com/Wallis237",
  },
    {
    id: 8,
    title: "Client-intake",
    description: "A full-featured online Questionaire which help me understand Client demandes",
    image: "",
    category: ["software", "web"],
    demoLink: "https://client-intake-silk.vercel.app/",
    githubLink: "https://github.com/Wallis237",
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category.includes(filter))
      );
    }
  }, [filter]);

  const categories = [
    { id: "all", name: "All" },
    { id: "software", name: "Software Dev" },
    { id: "web", name: "Web Dev" },
    { id: "photography", name: "Photography" },
    { id: "design", name: "Design" },
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4">
        <AnimationWrapper animation="fadeUp">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            My <span className="gradient-text">Projects</span>
          </h2>
        </AnimationWrapper>

        <AnimationWrapper animation="fadeUp" delay={200} className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-md ${
                  filter === category.id
                    ? "bg-portfolio-primary text-white shadow-lg shadow-portfolio-primary/25 scale-105"
                    : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-portfolio-primary/30"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </AnimationWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimationWrapper key={project.id} animation="fadeUpScale" delay={300 + index * 100}>
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
    <Card className="overflow-hidden project-card-enhanced h-full flex flex-col group">
      <div className="relative w-full pt-[60%] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardContent className="p-6 flex flex-col flex-grow relative">
        <h3 className="font-semibold text-xl mb-2 group-hover:text-portfolio-primary transition-colors duration-300">{project.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2 mb-4">
          {project.category.map((cat, index) => (
            <span
              key={cat}
              className="text-xs px-3 py-1 rounded-full bg-portfolio-light text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="flex space-x-3 mt-auto">
          <Button size="sm" variant="outline" asChild className="flex-1 hover:scale-105 transition-transform duration-200">
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
              <Eye className="h-4 w-4 mr-1" /> Demo
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild className="flex-1 hover:scale-105 transition-transform duration-200">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-1" /> Code
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsSection;
