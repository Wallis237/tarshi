
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimationWrapper from './AnimationWrapper';

const SkillsSection = () => {
  const developmentSkills = [
    { name: "Software Development", level: 90 },
    { name: "Web Development", level: 85 },
    { name: "Version Control (Git, GitHub)", level: 80 },
    { name: "IDEs (Visual Studio)", level: 85 },
    { name: "Deployment", level: 75 },
  ];
  
  const designSkills = [
    { name: "Photography", level: 85 },
    { name: "Graphic Design", level: 80 },
    { name: "Branding", level: 75 },
    { name: "UI/UX Design", level: 70 },
    { name: "Photo Editing", level: 85 },
  ];
  
  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            My <span className="gradient-text">Skills</span>
          </h2>
        </AnimationWrapper>
        
        <Tabs defaultValue="development" className="w-full max-w-4xl mx-auto">
          <AnimationWrapper delay={200} className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
            </TabsList>
          </AnimationWrapper>
          
          <TabsContent value="development">
            <div className="space-y-8">
              {developmentSkills.map((skill, index) => (
                <AnimationWrapper key={skill.name} delay={300 + index * 100}>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">{skill.name}</h3>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <SkillBarInner level={skill.level} delay={(index + 1) * 200} />
                    </div>
                  </div>
                </AnimationWrapper>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="design">
            <div className="space-y-8">
              {designSkills.map((skill, index) => (
                <AnimationWrapper key={skill.name} delay={300 + index * 100}>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">{skill.name}</h3>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <SkillBarInner level={skill.level} delay={(index + 1) * 200} />
                    </div>
                  </div>
                </AnimationWrapper>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <AnimationWrapper delay={800} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-portfolio-light mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-primary"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 17 6-10"/></svg>
                </div>
                <h3 className="font-semibold">Clean Code</h3>
                <p className="text-sm text-gray-500 mt-2">Efficient, maintainable, and well-structured code</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-portfolio-light mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-primary"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><rect width="3" height="9" x="7" y="8"></rect><rect width="3" height="5" x="14" y="12"></rect></svg>
                </div>
                <h3 className="font-semibold">Responsive Design</h3>
                <p className="text-sm text-gray-500 mt-2">Websites that work on all devices and screen sizes</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-portfolio-light mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-primary"><path d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/><path d="M3 12c0-1.1 1.343-2 3-2s3 .9 3 2-1.343 2-3 2-3-.9-3-2Z"/><path d="M15 12c0-1.1 1.343-2 3-2s3 .9 3 2-1.343 2-3 2-3-.9-3-2Z"/><path d="M6 10v4"/><path d="M18 10v4"/><path d="M15 9c0-1.1 1.343-2 3-2s3 .9 3 2"/><path d="M3 9c0-1.1 1.343-2 3-2s3 .9 3 2"/><path d="M12 6c0-1.1.9-2 2-2s2 .9 2 2"/><path d="M8 6c0-1.1.9-2 2-2s2 .9 2 2"/><path d="M15 15c0 1.1 1.343 2 3 2s3-.9 3-2"/><path d="M3 15c0 1.1 1.343 2 3 2s3-.9 3-2"/><path d="M12 18c0 1.1.9 2 2 2s2-.9 2-2"/><path d="M8 18c0 1.1.9 2 2 2s2-.9 2-2"/></svg>
                </div>
                <h3 className="font-semibold">Technical Problem Solving</h3>
                <p className="text-sm text-gray-500 mt-2">Finding elegant solutions to complex challenges</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-portfolio-light mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-primary"><path d="m10 7 5 3-5 3z"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M22 7h-5"/><path d="M22 11h-5"/><path d="M22 15h-5"/><path d="M7 21h10"/><path d="M12 17v4"/></svg>
                </div>
                <h3 className="font-semibold">Creative Design</h3>
                <p className="text-sm text-gray-500 mt-2">Visually appealing and user-friendly interfaces</p>
              </CardContent>
            </Card>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
};

const SkillBarInner = ({ level, delay }: { level: number, delay: number }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [level, delay]);
  
  return (
    <div 
      className="skill-progress" 
      style={{ width: `${width}%` }}
    ></div>
  );
};

export default SkillsSection;
