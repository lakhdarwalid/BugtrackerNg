import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RoleListComponent } from './role-list/role-list.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { UpdateApplicationComponent } from './update-application/update-application.component';
import { CreateApplicationComponent } from './create-application/create-application.component';
import { CreateBugComponent } from './create-bug/create-bug.component';
import { BugListComponent } from './bug-list/bug-list.component';
import { AuthGuard } from './auth.guard';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DevdashboardComponent } from './devdashboard/devdashboard.component';
import { BugActivitiesComponent } from './bug-activities/bug-activities.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { PassworderecoveryComponent } from './passworderecovery/passworderecovery.component';
import { PasswordquestionaryComponent } from './passwordquestionary/passwordquestionary.component';

const routes: Routes = [
  {path : '', redirectTo: '/home', pathMatch :'full' },
  {path : 'home', component: HomeComponent},
  {path : 'user-list', component: UserListComponent, canActivate : [AuthGuard]},
  {path : 'update-user/:id', component: UpdateUserComponent, canActivate : [AuthGuard]},
  {path : 'user-details/:id', component: UserDetailsComponent, canActivate : [AuthGuard]},
  {path : 'role-list', component: RoleListComponent, canActivate : [AuthGuard]},
  {path : 'login',component: LoginComponent}, 
  {path : 'signup', component: SignupComponent, canActivate : [AuthGuard]},
  {path : 'apps-list', component: ApplicationListComponent, canActivate : [AuthGuard]},
  {path : 'update-app/:id', component: UpdateApplicationComponent, canActivate : [AuthGuard]},
  {path : 'create-app', component: CreateApplicationComponent, canActivate : [AuthGuard]},
  {path : 'create-bug/:id', component: CreateBugComponent, canActivate : [AuthGuard]},
  {path : 'bug-list', component: BugListComponent, canActivate : [AuthGuard]},
  {path : 'dashboard', component: DashbordComponent, canActivate : [AuthGuard]},
  {path : 'dashboard-dev', component: DevdashboardComponent, canActivate : [AuthGuard]},
  {path : 'bug-activities/:id', component : BugActivitiesComponent, canActivate : [AuthGuard]},
  {path : 'dashboard-user', component : UserdashboardComponent, canActivate : [AuthGuard]},
  {path : 'passwordrecovery/:id', component : PassworderecoveryComponent},
  {path : 'passwordquestionary/:username', component : PasswordquestionaryComponent},
  {path : '**', component: PageNotFoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
