import { Board, Topic } from "./board";
import { ArticleNestedComment } from "./comment";
import { User } from "./user";

export type HiddenReason =
  | "ADULT_CONTENT"
  | "SOCIAL_CONTENT"
  | "REPORTED_CONTENT"
  | "BLOCKED_USER_CONTENT"
  | "ACCESS_DENIED_CONTENT";
export type ReadStatus = "N" | "U" | "-";
export type AttachmentType = "NONE" | "IMAGE" | "NON_IMAGE" | "BOTH";

interface BaseArticle {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  title: string;
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
  created_by: User;
}

export interface Article extends BaseArticle {
  is_hidden: boolean;
  why_hidden: HiddenReason[];
  can_override_hidden: boolean | null;
  parent_topic: Topic | null;
  parent_board: Board;
}

export interface ArticleListItem extends Article {
  read_status: ReadStatus;
  attachment_type: AttachmentType;
  communication_article_status: number | null;
  days_left: number | null;
}

export interface ArticleDetail extends Article {
  attachments: undefined;
  my_comment_profile: {
    id: number;
    username: string;
    profile: {
      picture: string;
      nickname: string;
      user: number;
      is_official: boolean;
      is_school_admin: boolean;
    };
  };
  comments: ArticleNestedComment[];
  is_mine: boolean;
  content: string;
  my_vote: boolean | null;
  my_scrap: boolean | null;
  article_current_page: number | null;
  side_articles: {
    before: ArticleDetail | null;
    after: ArticleDetail | null;
  };
  communication_article_status: number | null;
  days_left: number | null;
}

export interface BestArticles {
  dailyBests: ArticleListItem[];
  weeklyBests: ArticleListItem[];
}
