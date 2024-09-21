import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './Admin/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path:'admin', 
    component:AdminLayoutComponent,
    children:[
      { path: '', loadChildren: () => import('./Admin/admin.module').then(m => m.AdminModule) },
    ]
  },
  {
    path:'**', 
    redirectTo:'admin', 
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
