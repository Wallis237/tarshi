import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Facebook, Instagram, Mail, MapPin, ArrowUpRight } from "lucide-react";
import AnimationWrapper from './AnimationWrapper';
import { socialLinks } from "../pages/Index";
import { useSiteSettings } from "@/hooks/useContent";

const ContactSection = () => {
  const { toast } = useToast();
  const { data: settings } = useSiteSettings();
  const email = settings?.contact_email || "tarshiwilliams476@gmail.com";
  const location = settings?.location || "Douala, Cameroon";
  const links = {
    linkedin: settings?.linkedin || socialLinks.linkedin,
    github: settings?.github || socialLinks.github,
    facebook: settings?.facebook || socialLinks.facebook,
    instagram: settings?.instagram || socialLinks.instagram,
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'UI/UX Design',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${formData.service}] Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Tarshi,\n\n${formData.message}\n\n— ${formData.name}\n${formData.email}\nService: ${formData.service}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    toast({
      title: "Email client opened",
      description: "Your message has been prepared to send.",
    });
  };

  const services = ["UI/UX Design", "Web Development", "Photography", "Branding", "Other"];
  const socials = [
    { name: 'LinkedIn', icon: Linkedin, href: links.linkedin },
    { name: 'GitHub', icon: Github, href: links.github },
    { name: 'Facebook', icon: Facebook, href: links.facebook },
    { name: 'Instagram', icon: Instagram, href: links.instagram },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto px-6">
        {/* CTA banner */}
        <AnimationWrapper animation="fadeUp">
          <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center mb-16 md:mb-24 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border-[24px] border-primary-foreground" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border-[24px] border-primary-foreground" />
            </div>
            <h2 className="relative font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight max-w-3xl mx-auto">
              Let's Build the Future Together.
            </h2>
            <p className="relative mt-5 text-primary-foreground/80 max-w-xl mx-auto">
              I'm excited to connect with like-minded individuals, share ideas, and work on
              projects that make a difference.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background text-foreground font-semibold text-sm hover:-translate-y-0.5 transition-transform"
              >
                <Mail className="h-4 w-4" /> Email Me
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary-foreground/30 font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
              >
                Follow My Journey <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </AnimationWrapper>

        {/* Contact grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          <AnimationWrapper animation="slideLeft">
            <div>
              <div className="eyebrow">// Get In Touch</div>
              <h3 className="mt-3 font-display font-bold text-4xl md:text-5xl leading-[0.95] tracking-tight">
                Let's craft your <span className="accent-italic">digital future</span> today.
              </h3>
              <p className="mt-5 text-muted-foreground max-w-md">
                Whether you have a specific project in mind or just want to chat about the
                latest in tech, I'm always open to new connections and collaborations.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">Email Me</div>
                    <a href={`mailto:${email}`} className="font-medium hover:text-primary transition-colors">
                      {email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">Location</div>
                    <div className="font-medium">{location}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                {socials.map(({ name, icon: Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                    aria-label={name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper animation="slideRight" delay={150}>
            <form onSubmit={handleSubmit} className="surface-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Your Name">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="input-lime"
                  />
                </Field>
                <Field label="Email Address">
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="input-lime"
                  />
                </Field>
              </div>
              <Field label="Service Required">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="input-lime"
                >
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="Message">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project ideas..."
                  className="input-lime resize-none"
                />
              </Field>
              <button type="submit" className="btn-lime w-full">
                Send Inquiry <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </AnimationWrapper>
        </div>
      </div>

      <style>{`
        .input-lime {
          width: 100%;
          background: hsl(var(--muted));
          border: 1px solid hsl(var(--border));
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          color: hsl(var(--foreground));
          font-size: 0.875rem;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
        }
        .input-lime::placeholder {
          color: hsl(var(--muted-foreground));
        }
        .input-lime:focus {
          border-color: hsl(var(--primary));
          box-shadow: 0 0 0 3px hsl(var(--primary) / 0.15);
        }
      `}</style>
    </section>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-2 block">
      {label}
    </span>
    {children}
  </label>
);

export default ContactSection;
