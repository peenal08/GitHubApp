import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
//import { Network } from 'ionic-native';
import { User } from '../../models/user';

import {  GithubUsers } from '../../providers/github-users';
import { UserDetailsPage } from '../user-details/user-details';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  users: User[];
  originalUsers: User[]; //cache the original result on first page load
  since: number;	
  
  constructor(public navCtrl: NavController, public githubUsers: GithubUsers,public loadingCtrl: LoadingController,) {
      
        let loader = loadingCtrl.create({
          spinner: 'bubbles'
        });
        loader.present();  
        this.since = 0;
        // let connection = Network.onConnect().subscribe(()=>{
        //   console.log("connected");
        //   if(Network.connection === 'wifi' || Network.connection === '2g' || Network.connection === '3g' 
        // || Network.connection === '4g'){
        //    console.log(Network.connection);
            githubUsers.load(this.since).subscribe(users => {
              this.users = users;
              this.originalUsers = users;          
              console.log(JSON.stringify(users));
            }); 
        //   }
        // });
        // connection.unsubscribe();
                
        loader.dismiss();     
  }

   goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }
  loadUsers(cancelEvent){
    console.log("here");
    this.since = 0;
    this.users = this.originalUsers;
  }
  
  goToPage(since: number){
    let loader = this.loadingCtrl.create({
          spinner: 'bubbles'
        });
        loader.present(); 
        this.githubUsers.load(this.since).subscribe(users => {
              this.users = users;          
              
              //console.log(JSON.stringify(users));
            });    
        loader.dismiss();
  }
  goToPreviousPage(){
    if(this.since !== 0){
      this.since -= 8;
      this.goToPage(this.since);
    }
  }
  goToNextPage(){
    this.since += 8;
    this.goToPage(this.since);

  }

  search(searchEvent) {
    let term = searchEvent.target.value;   
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached users
      this.users = this.originalUsers;
    } else {
      // Get the searched users from github
      let loader = this.loadingCtrl.create({
          spinner: 'bubbles'
        });
        loader.present();
        this.githubUsers.searchUsers(term).subscribe(users => {
          this.users = users;
       
          
        });
         loader.dismiss();
    }
  }

  
}
