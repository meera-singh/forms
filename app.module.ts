import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ErrorComponentComponentComponent } from './error-component-component/error-component-component.component';
import { LoginComponent } from './login/login.component';
import {MatDatepickerModule,MatFormFieldModule,MatNativeDateModule,MatIconModule,MatInputModule,MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
const routes: Routes = [
  { path: '', component: ReactiveFormComponent },
  { path: 'login', component: LoginComponent },
  {path: 'profile', component: ProfileComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'**',component:ErrorComponentComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DashboardComponent,
    ReactiveFormComponent,
    ErrorComponentComponentComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
