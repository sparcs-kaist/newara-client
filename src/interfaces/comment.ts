import { User } from "./user";

export type HiddenReason =
  | "REPORTED_CONTENT"
  | "BLOCKED_USER_CONTENT"
  | "DELETED_CONTENT";

export interface Comment {
  id: number;
  is_hidden: boolean;
  why_hidden: HiddenReason[];
  can_override_hidden: boolean | null;
  my_vote: boolean | null;
  is_mine: boolean;
  content: string;
  created_by: User;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  name_type: number;
  report_count: number;
  positive_vote_count: number;
  negative_vote_count: number;
  hidden_at: string | null;
  parent_article: number | null;
  parent_comment: number | null;
  comments?: Comment[];
}
