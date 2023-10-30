export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      translations: {
        Row: {
          description_text: string
          description_title: string
          features_list: Json
          features_title: string
          links_title: string
          locale: string
          project_id: number
          title: string
          tools_badges_title: string
        }
        Insert: {
          description_text?: string
          description_title?: string
          features_list: Json
          features_title?: string
          links_title?: string
          locale?: string
          project_id: number
          title?: string
          tools_badges_title?: string
        }
        Update: {
          description_text?: string
          description_title?: string
          features_list?: Json
          features_title?: string
          links_title?: string
          locale?: string
          project_id?: number
          title?: string
          tools_badges_title?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_translations_project_id_fkey"
            columns: ["project_id"]
            referencedRelation: "projects"
            referencedColumns: ["id"]
          }
        ]
      }
      projects: {
        Row: {
          cover_image: Json
          hero_image: Json
          id: number
          links: Json
          tools_badges: Json
        }
        Insert: {
          cover_image: Json
          hero_image: Json
          id?: number
          links: Json
          tools_badges: Json
        }
        Update: {
          cover_image?: Json
          hero_image?: Json
          id?: number
          links?: Json
          tools_badges?: Json
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      locale: "uk" | "en"
    }
    CompositeTypes: {
      somefeatures: {
        list: unknown
        title: string
      }
    }
  }
}
