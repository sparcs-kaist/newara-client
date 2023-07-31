export interface Profile {
  picture: string;
  nickname: string;
  user: string;
  is_official: boolean;
  is_school_admin: boolean;
}

export interface User {
  id: number;
  username: string;
  profile: Profile;
  is_blocked?: boolean;
}
