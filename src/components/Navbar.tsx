import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from './ThemeToggle';
import { useSiteText } from '@/hooks/useContent';

export const useNavLinks = () => {
  const { t } = useSiteText();
  return [
    { name: t('nav_home'), to: '/' },
    { name: t('nav_work'), to: '/work' },
    { name: t('nav_services'), to: '/services' },
    { name: t('nav_about'), to: '/about' },
    { name: t('nav_contact'), to: '/contact' },
  ];
};

const Navbar = () => {
  const { t } = useSiteText();
  const navLinks = useNavLinks();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || open ? 'bg-background/85 backdrop-blur-xl border-b border-border/60' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={t('logo_image')}
              alt={`${t('brand_name')} logo`}
              className="h-9 w-9 rounded-lg object-contain border border-border/50 bg-background/50"
            />
            <span className="font-display font-bold text-primary text-xl tracking-tight uppercase">
              {t('brand_name')}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                {l.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block"><ThemeToggle /></div>
            <Link to="/contact" className="hidden md:inline-flex btn-lime !py-2 !px-5 text-sm">{t('nav_cta')}</Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-border text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-500 ${open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col py-4 px-6 gap-1">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) => `py-3 text-base font-medium transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {l.name}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-lime mt-3 self-start">{t('nav_cta')}</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
