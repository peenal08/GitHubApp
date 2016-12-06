import { Component } from '@angular/core';
import { NavController, NavParams , LoadingController} from 'ionic-angular';

import { User } from '../../models/user';

import { ReposPage } from '../repos/repos';

import { GithubUsers } from '../../providers/github-users';


@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {

  user: User;
  login: string;

  constructor(public navCtrl: NavController, private navParams: NavParams, private githubUsers: GithubUsers,
   public loadingCtrl: LoadingController ) {

        let loader = loadingCtrl.create({
          spinner: 'bubbles'
        });
        loader.present();
        this.login = navParams.get('login');
        githubUsers.loadDetails(this.login).subscribe(user =>{
            this.user = user;
            
          //console.log(JSON.stringify(user));
        })
        loader.dismiss();
  }

  ionViewDidLoad() {
    console.log('*****UserDetailsPage*********');
  }

  getRepositories(login: string) {
    this.navCtrl.push(ReposPage, {login});
  }

  pushToHome(){
    this.navCtrl.popToRoot();
  }
}
