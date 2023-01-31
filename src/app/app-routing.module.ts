import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarArtComponent } from './Artistas/listar-art/listar-art.component';
import { ListarMusComponent } from './Museos/listar-mus/listar-mus.component';
import { ListarObrComponent } from './Obra/listar-obr/listar-obr.component';

const routes: Routes = [
  {path: 'listarArt', component: ListarArtComponent},
  {path: 'listarMus', component: ListarMusComponent},
  {path: 'listarObr', component: ListarObrComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
