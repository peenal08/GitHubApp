// Repo model based on the structure of github api at
// https://api.github.com/repos/{owner}/{repo}
export interface Repo {
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  updated_at: string;
}