import { Link } from "react-router-dom";
import { Github, Linkedin, Facebook, Instagram } from "lucide-react";
import { socialLinks } from "@/lib/socialLinks";
import { useSiteText } from "@/hooks/useContent";
import { useNavLinks } from "./Navbar";

const Footer = () => {
  const { t, settings } = useSiteText();
  const navLinks = useNavLinks();
  const year = new Date().getFullYear();

  const socials = [
    { name: 'GitHub', icon: Github, href: settings?.github || socialLinks.github },
    { name: 'LinkedIn', icon: Linkedin, href: settings?.linkedin || socialLinks.linkedin },
    { name: 'Facebook', icon: Facebook, href: settings?.facebook || socialLinks.facebook },
    { name: 'Instagram', icon: Instagram, href: settings?.instagram || socialLinks.instagram },
  ].filter((s) => s.href);

  return (
    <footer className="border-t border-border py-12 mt-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <Link to="/" className="flex items-center gap-3 font-display font-bold text-primary text-2xl tracking-tight uppercase">
              <img src={t('logo_image')} alt={`${t('brand_name')} logo`} className="h-10 w-10 rounded-lg object-contain border border-border/50 bg-background/50" />
              <span>{t('brand_name')}</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">{t('footer_description')}</p>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-4">{t('footer_socials_label')}</div>
            <div className="flex flex-col gap-2">
              {socials.map(({ name, icon: Icon, href }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors w-fit">
                  <Icon className="h-3.5 w-3.5" />{name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-4">{t('footer_navigation_label')}</div>
            <div className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} className="text-sm text-foreground hover:text-primary transition-colors w-fit">{l.name}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground font-mono">
          <span>© {year} {t('footer_copyright')}</span>
          <span>{t('footer_location')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
