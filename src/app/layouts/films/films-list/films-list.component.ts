import { Component, OnInit, ViewChild } from '@angular/core';
import { Film } from './../../../models/film.model';
import { FilmsService } from './../../../services/films/films.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

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
    console.log(film);

    this.router.navigate(['characters', film.episode_id ]);
  }
}

