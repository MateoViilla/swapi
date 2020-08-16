import { SnackBarService } from './../../../services/snackbar/snack-bar.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Film } from './../../../models/film.model';
import { FilmsService } from './../../../services/films/films.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})

export class FilmsListComponent implements OnInit {
  public dataSource: MatTableDataSource<Film>;
  public displayedColumns: string[] = ['title', 'episode_id', 'director', 'characters'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  loading = true;

  constructor(
    private filmsService: FilmsService,
    private router: Router,
    private snackBarService: SnackBarService,
    ) { }

  ngOnInit(): void {
    this.getAllFilms();
  }

  getAllFilms(): void {
    this.filmsService.getFilms().subscribe( (films) => {
      this.dataSource = new MatTableDataSource(films.results);
      this.loading = false;
      this.dataSource.sort = this.sort;
   });
  }

  openCharacter(film: Film) {
    this.router.navigate(['characters', film.episode_id ]);
  }

  showOpeningCrawlText(film: Film): void {
    this.snackBarService.showSnack(film.opening_crawl);
  }
}

