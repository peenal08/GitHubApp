// User model based on the structure of github api at
// https://api.github.com/users/{username}
export interface User {
  login: string;
  name: string;
  email: string;
  location: string;
  avatar_url: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}