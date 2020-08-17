import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './../../shared/modules/material/material.module';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsRoutingModule } from './films-routing.module';

@NgModule({
  declarations: [FilmsListComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    MaterialModule,
  ]
})
export class FilmsModule { }
