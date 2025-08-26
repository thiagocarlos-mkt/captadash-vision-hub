export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      "Leads Manychat Luiz": {
        Row: {
          created_at: string
          data: string | null
          email: string | null
          id: number
          "id-instagran": string | null
          instagram: string | null
          "name-ingresso": string | null
          nome: string | null
          telefone: string | null
          whatsapp: string | null
        }
        Insert: {
          created_at?: string
          data?: string | null
          email?: string | null
          id?: number
          "id-instagran"?: string | null
          instagram?: string | null
          "name-ingresso"?: string | null
          nome?: string | null
          telefone?: string | null
          whatsapp?: string | null
        }
        Update: {
          created_at?: string
          data?: string | null
          email?: string | null
          id?: number
          "id-instagran"?: string | null
          instagram?: string | null
          "name-ingresso"?: string | null
          nome?: string | null
          telefone?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      "louco por leiloes - ago25": {
        Row: {
          DATA: string | null
          EMAIL: string
          "entrou no grupo": string | null
          ID: number | null
          NOME: string | null
          PAGINA: string | null
          Pesquisa: string | null
          "recebeu mensagem": string | null
          TELEFONE: string | null
          UTM_CAMPAIGN: string | null
          UTM_CONTENT: string | null
          UTM_MEDIUM: string | null
          UTM_SOURCE: string | null
          UTM_TERM: string | null
        }
        Insert: {
          DATA?: string | null
          EMAIL: string
          "entrou no grupo"?: string | null
          ID?: number | null
          NOME?: string | null
          PAGINA?: string | null
          Pesquisa?: string | null
          "recebeu mensagem"?: string | null
          TELEFONE?: string | null
          UTM_CAMPAIGN?: string | null
          UTM_CONTENT?: string | null
          UTM_MEDIUM?: string | null
          UTM_SOURCE?: string | null
          UTM_TERM?: string | null
        }
        Update: {
          DATA?: string | null
          EMAIL?: string
          "entrou no grupo"?: string | null
          ID?: number | null
          NOME?: string | null
          PAGINA?: string | null
          Pesquisa?: string | null
          "recebeu mensagem"?: string | null
          TELEFONE?: string | null
          UTM_CAMPAIGN?: string | null
          UTM_CONTENT?: string | null
          UTM_MEDIUM?: string | null
          UTM_SOURCE?: string | null
          UTM_TERM?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "louco por leiloes - ago25_EMAIL_fkey"
            columns: ["EMAIL"]
            isOneToOne: true
            referencedRelation: "louco por leiloes - ago25"
            referencedColumns: ["EMAIL"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
