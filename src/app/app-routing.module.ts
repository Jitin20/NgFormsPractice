import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Myform1Component } from './myform1/myform1.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path:'welcome', component:WelcomeComponent
  },
  {
    path:'', redirectTo:'welcome', pathMatch:'full'
  },
  {
    path:'register', component:Myform1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
