
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Facebook, Instagram, Mail, Phone } from "lucide-react";
import AnimationWrapper from './AnimationWrapper';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email mailto URL with form data
    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio Website");
    const body = encodeURIComponent(
      `Hello Tarshi,\n\n${formData.message}\n\n` +
      `From: ${formData.name}\n` +
      `Email: ${formData.email}\n`
    );
    
    // Open user's default email client
    window.location.href = `mailto:tarshiwilliams476@gmail.com?subject=${subject}&body=${body}`;
    
    // Show confirmation toast
    toast({
      title: "Email client opened",
      description: "Your message has been prepared to send via your email client.",
    });
    
    // No need to reset form as the user might want to modify their message in their email client
  };
  
  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/tarshiwilliams' },
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, href: 'https://github.com/Wallis237' },
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, href: 'https://www.facebook.com/tarshi.william' },
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/tarshiwilliams?igsh=YzkxczVjY29pcm42' },
  ];
  
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <AnimationWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </AnimationWrapper>
        
        <div className="grid md:grid-cols-2 gap-12">
          <AnimationWrapper delay={200}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Let's Connect</h3>
              <p className="text-gray-600">
                Whether you're looking for a developer, designer, or have a question about my services, I'd love to hear from you. Fill out the form, and I'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-portfolio-light flex items-center justify-center">
                    <Mail className="h-5 w-5 text-portfolio-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:tarshiwilliams476@gmail.com" className="hover:text-portfolio-primary">
                      tarshiwilliams476@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-portfolio-light flex items-center justify-center">
                    <Phone className="h-5 w-5 text-portfolio-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:+237699044118" className="hover:text-portfolio-primary">
                      +237 699044118
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <h4 className="text-lg font-medium mb-3">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-colors hover:bg-portfolio-light hover:text-portfolio-primary"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimationWrapper>
          
          <AnimationWrapper delay={400}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90 flex items-center justify-center gap-2"
              >
                <Mail className="h-4 w-4" /> Send Message
              </Button>
            </form>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
