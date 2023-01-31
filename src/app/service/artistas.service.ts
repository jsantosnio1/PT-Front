import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artistas } from '../entity/Artistas';


@Injectable({
  providedIn: 'root'
})
export class ArtistasService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8080/artistas';

  getArtistas() {
    console.log(this.http.get<Artistas[]>(this.Url + "/getAll"));
    return this.http.get<Artistas[]>(this.Url + "/getAll")
  }

  createArtistas(artistas: Artistas) {
    console.log(this.http.post<Artistas>(this.Url + "/saveArtistas", artistas));
    return this.http.post<Artistas>(this.Url + "/saveArtistas", artistas);
  }

  getArtistasById(id: number) {
    return this.http.get<Artistas>(this.Url + "/findRecord/" + id);
  }

  updateArtistas(artistas: Artistas) {
    return this.http.post<Artistas>(this.Url + "/saveArtistas", artistas);
  }

  deleteArtistas(artistas: Artistas) {
    
    return this.http.delete<Artistas>(this.Url+"/deleteArtistas/"+artistas.id_artista);

  }

}
