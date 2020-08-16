import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersRoutingModule } from './characters-routing.module';

@NgModule({
  declarations: [CharactersListComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MaterialModule,
  ]
})
export class CharactersModule { }
