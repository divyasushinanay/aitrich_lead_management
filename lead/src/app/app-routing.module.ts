import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
 {path:'dashboard',component:DashboardComponent},
  { path: 'register', component: RegisterComponent},
  {path:'usermanagement', component:UsermanagementComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
