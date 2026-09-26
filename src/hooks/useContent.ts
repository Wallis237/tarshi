import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { TEXT_DEFAULTS } from "@/content/siteText";

export interface ProjectRow {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  tags: string[];
  demo_link: string;
  github_link: string;
  featured: boolean;
  sort_order: number;
}

export interface GalleryRow {
  id: string;
  title: string;
  category: string;
  image: string;
  sort_order: number;
}

export interface ServiceRow {
  id: string;
  num: string;
  title: string;
  description: string;
  sort_order: number;
}

export interface SkillRow {
  id: string;
  name: string;
  level: number;
  icon: string;
  sort_order: number;
}

export interface TeamRow {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  sort_order: number;
}

export interface SiteSettingsRow {
  id: boolean;
  hero_title: string;
  hero_subtitle: string;
  about_text: string;
  contact_email: string;
  location: string;
  linkedin: string;
  github: string;
  facebook: string;
  instagram: string;
  phone_number: string;
  content: Record<string, string>;
}

const list = async <T,>(table: string): Promise<T[]> => {
  const { data, error } = await supabase
    .from(table as never)
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data ?? []) as unknown as T[];
};

export const useProjects = () =>
  useQuery({ queryKey: ["projects"], queryFn: () => list<ProjectRow>("projects") });

export const useGallery = () =>
  useQuery({ queryKey: ["gallery_items"], queryFn: () => list<GalleryRow>("gallery_items") });

export const useServices = () =>
  useQuery({ queryKey: ["services"], queryFn: () => list<ServiceRow>("services") });

export const useSkills = () =>
  useQuery({ queryKey: ["skills"], queryFn: () => list<SkillRow>("skills") });

export const useTeam = () =>
  useQuery({ queryKey: ["team_members"], queryFn: () => list<TeamRow>("team_members") });

export const useSiteSettings = () =>
  useQuery({
    queryKey: ["site_settings"],
    queryFn: async (): Promise<SiteSettingsRow | null> => {
      const { data, error } = await supabase
        .from("site_settings" as never)
        .select("*")
        .maybeSingle();
      if (error) throw error;
      return (data ?? null) as unknown as SiteSettingsRow | null;
    },
  });

/** Returns t(key) that reads editable site text with a built-in fallback. */
export const useSiteText = () => {
  const { data: settings } = useSiteSettings();
  const content = (settings?.content ?? {}) as Record<string, string>;
  const t = (key: string) => {
    const v = content[key];
    return v !== undefined && v !== "" ? v : TEXT_DEFAULTS[key] ?? "";
  };
  const list = (key: string) => t(key).split(",").map((s) => s.trim()).filter(Boolean);
  return { t, list, settings };
};
