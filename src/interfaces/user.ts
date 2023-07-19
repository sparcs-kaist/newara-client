export interface Profile {
  picture: string;
  nickname: string;
  user: string;
}

export interface User {
  id: number;
  username: string;
  profile: Profile;
}
