import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RoleListComponent } from './role-list/role-list.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { UpdateApplicationComponent } from './update-application/update-application.component';
import { CreateApplicationComponent } from './create-application/create-application.component';
import { CreateBugComponent } from './create-bug/create-bug.component';
import { BugListComponent } from './bug-list/bug-list.component';
import { AuthService } from './service/auth.service';
import { TokeninterceptorService } from './service/tokeninterceptor.service';
import { AuthGuard } from './auth.guard';
import { DashbordComponent } from './dashbord/dashbord.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule} from '@angular/material/Sort';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DevdashboardComponent } from './devdashboard/devdashboard.component';
import { BugActivitiesComponent } from './bug-activities/bug-activities.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PassworderecoveryComponent } from './passworderecovery/passworderecovery.component';
import { PasswordquestionaryComponent } from './passwordquestionary/passwordquestionary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    UserListComponent,
    UpdateUserComponent,
    UserDetailsComponent,
    RoleListComponent,
    ApplicationListComponent,
    UpdateApplicationComponent,
    CreateApplicationComponent,
    CreateBugComponent,
    BugListComponent,
    DashbordComponent,
    DevdashboardComponent,
    BugActivitiesComponent,
    UserdashboardComponent,
    PassworderecoveryComponent,
    PasswordquestionaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    DragDropModule,
    MatTooltipModule, 
    NgxPaginationModule,
    MatSortModule, 
    MatSnackBarModule
  ],
  providers: [AuthService, AuthGuard,
      {
        provide : HTTP_INTERCEPTORS,
        useClass : TokeninterceptorService,
        multi : true
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
