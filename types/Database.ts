export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: number;
          hero_image: Json;
          cover_image: Json;
          links: Json;
          tools_badges: Json;
        };
        Insert: {
          cover_image: Json;
          hero_image: Json;
          id?: number;
          links: Json;
          tools_badges: Json;
        };
        Update: {
          cover_image?: Json;
          hero_image?: Json;
          id?: number;
          links?: Json;
          tools_badges?: Json;
        };
        Relationships: [];
      };
      translations: {
        Row: {
          locale: string;
          project_id: number;
          title: string;
          description_text: string;
          features_list: Json;
        };
        Insert: {
          description_text?: string;
          features_title?: string;
          locale?: string;
          project_id: number;
          title?: string;
        };
        Update: {
          description_text?: string;
          features_list?: Json;
          locale?: string;
          project_id?: number;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'project_translations_project_id_fkey';
            columns: ['project_id'];
            referencedRelation: 'projects';
            referencedColumns: ['id'];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      locale: 'uk' | 'en';
    };
    CompositeTypes: {
      somefeatures: {
        list: unknown;
        title: string;
      };
    };
  };
}
