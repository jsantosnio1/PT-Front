import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Museos } from '../entity/Museos';


@Injectable({
  providedIn: 'root'
})
export class MuseosService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:8080/museos';

  getMuseos() {
    console.log(this.http.get<Museos[]>(this.Url + "/getAll"));
    return this.http.get<Museos[]>(this.Url + "/getAll")
  }

  createMuseos(museos: Museos) {
    console.log(this.http.post<Museos>(this.Url + "/saveMuseos", museos));
    return this.http.post<Museos>(this.Url + "/saveMuseos", museos);
  }

  getMuseosById(id: number) {
    return this.http.get<Museos>(this.Url + "/findRecord/" + id);
  }

  updateMuseos(museos: Museos) {
    return this.http.post<Museos>(this.Url + "/saveMuseos", museos);
  }

  deleteMuseos(museos: Museos) {
    
    return this.http.delete<Museos>(this.Url+"/deleteMuseos/"+museos.id_museo);

  }

}
