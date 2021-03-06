import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { AddArticleComponent } from './add-article/add-article.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FontAwesomeModule,
    CommonModule,
    SharedModule,
  ],
  exports: [],
  declarations: [
    AdminComponent,
    DashboardComponent,
    EditArticleComponent,
    AddArticleComponent,
  ],
  providers: [],
})
export class AdminModule { }

