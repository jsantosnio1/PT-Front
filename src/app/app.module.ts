import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddArtComponent } from './Artistas/add-art/add-art.component';
import { ListarArtComponent } from './Artistas/listar-art/listar-art.component';
import { ArtistasService } from './service/artistas.service';
import { HttpClientModule } from '@angular/common/http';
import { AddMusComponent } from './Museos/add-mus/add-mus.component';
import { ListarMusComponent } from './Museos/listar-mus/listar-mus.component';
import { AddObrComponent } from './Obra/add-obr/add-obr.component';
import { ListarObrComponent } from './Obra/listar-obr/listar-obr.component';
@NgModule({
  declarations: [
    AppComponent,
    AddArtComponent,
    ListarArtComponent,
    AddMusComponent,
    ListarMusComponent,
    AddObrComponent,
    ListarObrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    HttpClientModule,
    MatCheckboxModule, 
    MatToolbarModule, 
    MatMenuModule, 
    MatIconModule,
    NgxPaginationModule,
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule],
  providers: [ArtistasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
