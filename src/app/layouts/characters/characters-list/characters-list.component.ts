import { LoaderState } from '../../../models/loader.model';
import { LoaderService } from './../../../core/services/loader/loader.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Character } from 'src/app/models/character.model';
import { Film } from './../../../models/film.model';
import { CharactersService } from './../../../services/characters/characters.service';
import { AlertService } from 'src/app/core/services/alert/alert.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CharactersListComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public dataSource: MatTableDataSource<Character>;
  public displayedColumns: string[] = ['name', 'eye_color', 'gender', 'films'];

  onComplete$ = new Subject();
  expandedElement: Character | null;
  show: boolean;

  constructor(
    private charactersService: CharactersService,
    protected route: ActivatedRoute,
    private alertService: AlertService,
    private loaderService: LoaderService,
  ) { }

  ngOnInit(): void {
    this.showLoader();
    this.getAllCharacters();
  }

  private showLoader() {
    this.loaderService.loaderState
    .pipe(takeUntil(this.onComplete$))
    .subscribe((status: LoaderState) => {
        this.show = status.show;
      });
  }

  getAllCharacters(): void {
    const filmId = this.route.snapshot.paramMap.get('id');
    this.charactersService.getFilmCharacters(filmId)
      .pipe(takeUntil(this.onComplete$))
      .subscribe((characters: Character[]) => {
        this.dataSource = new MatTableDataSource(characters);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  showOpeningCrawlText(film: Film): void {
    this.alertService.showSnack(film.opening_crawl);
  }

  ngOnDestroy(): void {
    this.onComplete$.complete();
  }
}
