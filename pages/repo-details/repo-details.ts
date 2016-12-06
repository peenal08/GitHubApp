import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { Repo } from '../../models/repo';

import { GithubUsers } from '../../providers/github-users';

@Component({
  selector: 'page-repo-details',
  templateUrl: 'repo-details.html'
})
export class RepoDetailsPage {

  repo: Repo;
  username: string;
  reponame: string;

  constructor(public navCtrl: NavController, private navParams: NavParams, private githubUsers: GithubUsers, 
  public loadingCtrl: LoadingController) {

    let loader = loadingCtrl.create({
      spinner: 'bubbles'
    });
    loader.present();

    this.username = navParams.get('username');
    this.reponame = navParams.get('reponame');

    githubUsers.getRepoDetails(this.username,this.reponame).subscribe(repo =>{
      this.repo = repo;
      //console.log(JSON.stringify(repo));
    })    
    loader.dismiss();
  }

  ionViewDidLoad() {
    console.log('*****RepoDetailsPage*****');
  }
  pushToHome(){
    this.navCtrl.popToRoot();
  }

}
