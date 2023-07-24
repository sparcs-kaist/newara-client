export interface Topic {
  id: number;
  slug: string;
  ko_name: string;
  en_name: string;
}

export interface Board {
  id: number;
  slug: string;
  ko_name: string;
  en_name: string;
}

export interface BoardDetail extends Board {
  is_readonly: boolean;
  name_type: number;
  group: {
    id: number;
    slug: string;
    ko_name: string;
    en_name: string;
  };
  banner_image: string;
  ko_banner_description: string;
  en_banner_description: string;
  top_threshold: number;
  topics: Topic[];
  user_readable: boolean;
  user_writable: boolean;
}

export interface BoardGroup {
  id: number;
  slug: string;
  ko_name: string;
  en_name: string;
  boards: Board[];
}
