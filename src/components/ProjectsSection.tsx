
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

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment processing and inventory management.",
    image: "/images/ecom.jpg",
    category: ["software", "web"],
    demoLink: "https://demoforcel.netlify.app/",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Responsive portfolio website with animated sections and filtering gallery.",
    image: "/images/poortoo.jpg",
    category: ["web"],
    demoLink: "https://demoforcel.netlify.app/",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Photography Portfolio",
    description: "Elegant photography showcase with lightbox gallery and smooth transitions.",
    image: "/images/wallisban.jpg",
    category: ["photography"],
    demoLink: "https://demoforcel.netlify.app/",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Brand Identity Pack",
    description: "Complete brand identity including logo, color palette, and marketing materials.",
    image: "/images/mekban.jpg",
    category: ["design"],
    demoLink: "https://demoforcel.netlify.app/",
    githubLink: "#",
  },
  {
    id: 5,
    title: "Mobile Application",
    description: "Cross-platform mobile app with user authentication and cloud synchronization.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&q=80",
    category: ["software"],
    demoLink: "https://demoforcel.netlify.app/",
    githubLink: "#",
  },
  {
    id: 6,
    title: "UI/UX Design System",
    description: "Comprehensive design system with component library and usage guidelines.",
    image: "/images/ui car.jpg",
    category: ["design", "web"],
    demoLink: "https://demoforcel.netlify.app/",
    githubLink: "#",
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
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            My <span className="gradient-text">Projects</span>
          </h2>
        </AnimationWrapper>
        
        <AnimationWrapper delay={200} className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full transition-all ${
                  filter === category.id 
                    ? "bg-portfolio-primary text-white" 
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </AnimationWrapper>
        
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <AnimationWrapper key={project.id} delay={300 + index * 100}>
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
    <Card className="overflow-hidden card-hover h-full flex flex-col">
      <div className="relative w-full pt-[60%] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2 mb-4">
          {project.category.map((cat) => (
            <span
              key={cat}
              className="text-xs px-2 py-1 rounded-full bg-portfolio-light text-portfolio-primary"
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="flex space-x-3 mt-auto">
          <Button size="sm" variant="outline" asChild className="flex-1">
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
              <Eye className="h-4 w-4 mr-1" /> Demo
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild className="flex-1">
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
