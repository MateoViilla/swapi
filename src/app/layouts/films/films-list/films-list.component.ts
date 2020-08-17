import { LoaderState } from './../../../shared/models/loader.model';
import { LoaderService } from './../../../core/services/loader/loader.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Film } from './../../../models/film.model';
import { FilmsService } from './../../../services/films/films.service';
import { AlertService } from '../../../core/services/alert/alert.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})

export class FilmsListComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  show: boolean;

  public dataSource: MatTableDataSource<Film>;
  public displayedColumns: string[] = ['title', 'episode_id', 'director', 'characters'];

  onComplete$ = new Subject();

  constructor(
    private filmsService: FilmsService,
    private router: Router,
    private alertService: AlertService,
    private loaderService: LoaderService,
    ) { }

  ngOnInit(): void {
    this.showLoader();
    this.getAllFilms();
  }

  showLoader() {
    this.loaderService.loaderState
    .pipe(takeUntil(this.onComplete$))
    .subscribe((status: LoaderState) => {
        this.show = status.show;
      });
  }

  getAllFilms(): void {
    this.filmsService.getFilms()
    .pipe(takeUntil(this.onComplete$))
    .subscribe( (films) => {
      this.dataSource = new MatTableDataSource(films.results);
      this.dataSource.sort = this.sort;
   });
  }

  openCharacter(film: Film) {
    this.router.navigate(['characters', film.episode_id ]);
  }

  showOpeningCrawlText(film: Film): void {
    this.alertService.showSnack(film.opening_crawl);
  }

  ngOnDestroy(): void {
    this.onComplete$.complete();
  }
}

