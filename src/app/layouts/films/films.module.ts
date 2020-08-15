import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsRoutingModule } from './films-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [FilmsListComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class FilmsModule { }
