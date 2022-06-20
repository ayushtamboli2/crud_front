import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material
import {MatCardModule} from '@angular/material/card'; //Mat Card Background
import {MatIconModule} from '@angular/material/icon'; //for icons
import {MatButtonModule} from '@angular/material/button'; // for buttons
import {MatFormFieldModule} from '@angular/material/form-field'; //Form
import {MatInputModule} from '@angular/material/input'; //Input
import {MatTableModule} from '@angular/material/table'; //Data Table
import {MatToolbarModule} from '@angular/material/toolbar'; //for header toolbar

const matConst =[
CommonModule,
MatIconModule,
MatCardModule,
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatTableModule,
MatToolbarModule
]

@NgModule({
  imports: matConst,
  exports: matConst
})
export class MaterialModule { }
