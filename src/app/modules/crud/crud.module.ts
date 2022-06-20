import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CrudRoutingModule } from './crud-routing.module';

import { CreateComponent } from './components/create/create.component';
import { ReadComponent } from './components/read/read.component';


@NgModule({
  declarations: [
    CreateComponent,
    ReadComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CrudModule { }
