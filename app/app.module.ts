import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import {UserDetailsPage } from '../pages/user-details/user-details';
import {RepoDetailsPage} from '../pages/repo-details/repo-details';

import { GithubUsers } from '../providers/github-users';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    UserDetailsPage,
    RepoDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    UserDetailsPage,
    RepoDetailsPage
  ],
  providers: [
    GithubUsers
  ]
})
export class AppModule {}
