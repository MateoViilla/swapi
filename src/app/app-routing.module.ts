import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'films'
  },
  {
    path: 'films',
    loadChildren: () => import('./layouts/films/films.module').then(m => m.FilmsModule)
  },
  {
    path: 'characters/:id',
    loadChildren: () => import('./layouts/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'films'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
