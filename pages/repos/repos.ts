import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { Repo } from '../../models/repo';

import { RepoDetailsPage } from '../repo-details/repo-details';

import { GithubUsers } from '../../providers/github-users';


@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html'
})
export class ReposPage {

  repo: Repo[];
  login: string;
  

  constructor(public navCtrl: NavController, private navParams: NavParams, private githubUsers: GithubUsers, 
  public loadingCtrl: LoadingController) {

    let loader = loadingCtrl.create({
      spinner: 'bubbles'
    });
    loader.present();
    this.login = navParams.get('login');
    githubUsers.getRepos(this.login).subscribe(repo =>{
      this.repo = repo;
      //console.log(JSON.stringify(repo));
    })
    loader.dismiss();

  }

  ionViewDidLoad() {
    console.log('********ReposPage*********');
  }

  gotoRepoDetails(username, reponame) {
    this.navCtrl.push(RepoDetailsPage, {username,reponame});
  }
  pushToHome(){
    this.navCtrl.popToRoot();
  }
}
