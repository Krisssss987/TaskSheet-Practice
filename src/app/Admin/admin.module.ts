import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../material/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { SidenavComponent } from './admin-layout/sidenav/sidenav.component';
import { BodyComponent } from './admin-layout/body/body.component';
import { HeaderComponent } from './pages/header/header.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    SidenavComponent,
    BodyComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    SharedModule,
    ReactiveFormsModule 
  ]
})
export class AdminModule { }
