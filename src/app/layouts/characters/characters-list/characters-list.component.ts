import { SnackBarService } from './../../../services/snackbar/snack-bar.service';
import { Film } from './../../../models/film.model';
import { MatSort } from '@angular/material/sort';
import { CharactersService } from './../../../services/characters/characters.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CharactersListComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public dataSource: MatTableDataSource<Character>;
  public displayedColumns: string[] = ['name', 'eye_color', 'gender', 'films'];

  expandedElement: Character | null;
  loading = true;

  constructor(
    private charactersService: CharactersService,
    protected route: ActivatedRoute,
    private snackBarService: SnackBarService
    ) { }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters(): void {
    const filmId = this.route.snapshot.paramMap.get('id');
    this.charactersService.getFilmCharacters(filmId)
      .subscribe(
        (characters: Character[]) => {
        this.dataSource = new MatTableDataSource(characters);
        this.loading = false;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
      );
  }

  showOpeningCrawlText(film: Film): void {
    this.snackBarService.showSnack(film.opening_crawl);
  }
}
