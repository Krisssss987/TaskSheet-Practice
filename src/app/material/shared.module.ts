import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from '../Admin/admin-routing.module';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { LoaderComponent } from '../loader/loader.component';

@NgModule({
  declarations: [
    LoaderComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    AdminRoutingModule,
  ],
  exports: [
    BreadcrumbComponent,
    LoaderComponent   
  ]
})
export class SharedModule { }
