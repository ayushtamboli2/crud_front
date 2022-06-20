import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component';


const routes: Routes = [
  {path:'read',component: ReadComponent},
  {path:'create', component: CreateComponent},
  {path:'create/:id',component:CreateComponent} //path define by ID
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
