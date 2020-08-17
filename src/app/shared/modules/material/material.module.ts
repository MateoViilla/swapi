import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatSortModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
  ]
})
export class MaterialModule { }
