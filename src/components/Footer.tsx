import { Github, Linkedin, Facebook, Instagram } from "lucide-react";
import { socialLinks } from "../pages/Index";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: 'GitHub', icon: Github, href: socialLinks.github },
    { name: 'LinkedIn', icon: Linkedin, href: socialLinks.linkedin },
    { name: 'Facebook', icon: Facebook, href: socialLinks.facebook },
    { name: 'Instagram', icon: Instagram, href: socialLinks.instagram },
  ];

  return (
    <footer className="border-t border-border py-12 mt-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <a href="#home" className="font-display font-bold text-primary text-2xl tracking-tight">
              SIR WALLIS
            </a>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Building the future with precision, passion, and purpose from Douala, Cameroon.
            </p>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-4">Socials</div>
            <div className="flex flex-col gap-2">
              {socials.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors w-fit"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-4">Navigate</div>
            <div className="flex flex-col gap-2">
              {[
                { name: 'Work', href: '#projects' },
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#skills' },
                { name: 'Contact', href: '#contact' },
              ].map((l) => (
                <a key={l.name} href={l.href} className="text-sm text-foreground hover:text-primary transition-colors w-fit">
                  {l.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground font-mono">
          <span>© {currentYear} Tarshi Williams. Built with Precision.</span>
          <span>Douala, Cameroon</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
