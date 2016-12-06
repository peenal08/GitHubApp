import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../models/user';
import { Repo } from '../models/repo';

@Injectable()
export class GithubUsers {

  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) {
  }

  // Load all github users
  load(since: number): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/users?since=${since}&per_page=8`)
      .map(res => <User[]>res.json()); //res - Reponse
  }

  // Get github user by providing login(username)
  loadDetails(login: string): Observable<User> {
    return this.http.get(`${this.githubApiUrl}/users/${login}`)
      .map(res => <User>(res.json()));
  }

  // Search for github users  
  searchUsers(searchParam: string): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/search/users?q=${searchParam}`) 
      .map(res => <User[]>(res.json().items));
  }

  // Get repositories of user
  getRepos(username: string): Observable<Repo[]> {
    return this.http.get(`${this.githubApiUrl}/users/${username}/repos`)
      .map(res => <Repo[]>res.json());
  }

  // Get repository details
  getRepoDetails(username: string, reponame: string): Observable<Repo> {
    return this.http.get(`${this.githubApiUrl}/repos/${username}/${reponame}`)
      .map(res => <Repo>(res.json()));
  }

}
