import { User } from "./user";

export type HiddenReason =
  | "ADULT_CONTENT"
  | "SOCIAL_CONTENT"
  | "REPORTED_CONTENT"
  | "BLOCKED_USER_CONTENT"
  | "ACCESS_DENIED_CONTENT";

export interface Article {
  id: number;
  is_hidden: boolean;
  why_hidden: HiddenReason[];
  can_override_hidden: boolean | null;
  title: string;
  created_by: User;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  name_type: number;
  is_content_sexual: boolean;
  is_content_social: boolean;
  hit_count: number;
  comment_count: number;
  report_count: number;
  positive_vote_count: number;
  negative_vote_count: number;
  commented_at: string | null;
  url: string | null;
  content_updated_at: string | null;
  hidden_at: string | null;
  topped_at: string | null;
  parent_topic: number | null;
  parent_board: number;
}

export interface BestArticles {
  dailyBests: Article[];
  weeklyBests: Article[];
}
