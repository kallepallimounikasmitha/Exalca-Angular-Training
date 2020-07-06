import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms' 
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContentComponent } from './content/content.component';
import { MenubarlistComponent } from './menubarlist/menubarlist.component';
import { MenubaritemComponent } from './menubarlist/menubaritem/menubaritem.component';


const appRoutes: Routes= [
  {
     path : 'login',
     component : LoginComponent
 },
 {
   path : 'registration',
   component : RegistrationComponent

 },
 {
  path : 'homepage',
  component : MainPageComponent

},

 {
  path:'', redirectTo:"/registration", pathMatch: 'full' 
}



]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MainPageComponent,
    ContentComponent,
    MenubarlistComponent,
    MenubaritemComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
