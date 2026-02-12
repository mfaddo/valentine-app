import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ValentineComponent } from './valentine/valentine.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'valentine', component: ValentineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
