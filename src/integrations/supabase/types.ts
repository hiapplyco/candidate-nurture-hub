export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      agent_outputs: {
        Row: {
          compensation_analysis: string | null
          created_at: string | null
          enhanced_description: string | null
          id: number
          job_id: number | null
          job_summary: string | null
          terms: Json | null
        }
        Insert: {
          compensation_analysis?: string | null
          created_at?: string | null
          enhanced_description?: string | null
          id?: number
          job_id?: number | null
          job_summary?: string | null
          terms?: Json | null
        }
        Update: {
          compensation_analysis?: string | null
          created_at?: string | null
          enhanced_description?: string | null
          id?: number
          job_id?: number | null
          job_summary?: string | null
          terms?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_outputs_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_job"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_messages: {
        Row: {
          content: string | null
          created_at: string
          id: number
          media_url: string | null
          role: string
          session_id: number | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: number
          media_url?: string | null
          role: string
          session_id?: number | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: number
          media_url?: string | null
          role?: string
          session_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "chat_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_sessions: {
        Row: {
          created_at: string
          id: number
          status: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          status?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          status?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      daily_transcriptions: {
        Row: {
          created_at: string | null
          id: number
          meeting_id: number | null
          participant_id: string
          text: string
          timestamp: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          meeting_id?: number | null
          participant_id: string
          text: string
          timestamp: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          meeting_id?: number | null
          participant_id?: string
          text?: string
          timestamp?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "daily_transcriptions_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "meetings"
            referencedColumns: ["id"]
          },
        ]
      }
      jobs: {
        Row: {
          content: string | null
          created_at: string
          id: number
          search_string: string | null
          summary: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: number
          search_string?: string | null
          summary?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: number
          search_string?: string | null
          summary?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      meeting_analyses: {
        Row: {
          analysis: string
          created_at: string | null
          id: number
          processed_at: string
          recording_id: string
          video_url: string
        }
        Insert: {
          analysis: string
          created_at?: string | null
          id?: never
          processed_at?: string
          recording_id: string
          video_url: string
        }
        Update: {
          analysis?: string
          created_at?: string | null
          id?: never
          processed_at?: string
          recording_id?: string
          video_url?: string
        }
        Relationships: []
      }
      meetings: {
        Row: {
          created_at: string | null
          end_time: string | null
          id: number
          meeting_date: string
          participants: Json | null
          start_time: string
          summary: string | null
          transcription: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          end_time?: string | null
          id?: number
          meeting_date?: string
          participants?: Json | null
          start_time: string
          summary?: string | null
          transcription?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          end_time?: string | null
          id?: number
          meeting_date?: string
          participants?: Json | null
          start_time?: string
          summary?: string | null
          transcription?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      parsed_documents: {
        Row: {
          created_at: string | null
          file_path: string | null
          id: number
          original_filename: string | null
          parsed_text: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          file_path?: string | null
          id?: number
          original_filename?: string | null
          parsed_text?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          file_path?: string | null
          id?: number
          original_filename?: string | null
          parsed_text?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      search_results: {
        Row: {
          created_at: string | null
          id: number
          job_id: number | null
          profile_location: string | null
          profile_name: string | null
          profile_title: string | null
          profile_url: string | null
          relevance_score: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          job_id?: number | null
          profile_location?: string | null
          profile_name?: string | null
          profile_title?: string | null
          profile_url?: string | null
          relevance_score?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          job_id?: number | null
          profile_location?: string | null
          profile_name?: string | null
          profile_title?: string | null
          profile_url?: string | null
          relevance_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "search_results_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      user_video_analyses: {
        Row: {
          analysis_prompt: string
          analysis_result: string | null
          created_at: string | null
          id: number
          status: string | null
          user_id: string | null
          video_name: string
          video_url: string
        }
        Insert: {
          analysis_prompt: string
          analysis_result?: string | null
          created_at?: string | null
          id?: number
          status?: string | null
          user_id?: string | null
          video_name: string
          video_url: string
        }
        Update: {
          analysis_prompt?: string
          analysis_result?: string | null
          created_at?: string | null
          id?: number
          status?: string | null
          user_id?: string | null
          video_name?: string
          video_url?: string
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
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
