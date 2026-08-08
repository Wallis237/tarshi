import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

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
  sort_order: number;
}

export interface SkillRow {
  id: string;
  name: string;
  level: number;
  icon: string;
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
