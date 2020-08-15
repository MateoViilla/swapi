import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'films',
    loadChildren: () => import('./layouts/films/films.module').then(m => m.FilmsModule)
  },
  {
    path: 'characters/:id',
    loadChildren: () => import('./layouts/characters/characters.module').then(m => m.CharactersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
