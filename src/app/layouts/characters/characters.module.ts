import { MaterialModule } from './../../shared/modules/material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
