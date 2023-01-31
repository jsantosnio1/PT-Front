import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Obras } from '../entity/Obras';


@Injectable({
    providedIn: 'root'
})

export class ObrasService {

    constructor(private http: HttpClient) { }
    Url = 'http://localhost:8080/obras';
    

  getObras() {
    console.log(this.http.get<Obras[]>(this.Url + "/getAll"));
    return this.http.get<Obras[]>(this.Url + "/getAll")
  }

  createObras(obras: Obras) {
    console.log(this.http.post<Obras>(this.Url + "/saveObras", obras));
    return this.http.post<Obras>(this.Url + "/saveObras", obras);
  }

  getObrasById(id: number) {
    return this.http.get<Obras>(this.Url + "/findRecord/" + id);
  }

  updateObras(obras: Obras) {
    return this.http.post<Obras>(this.Url + "/saveObras", obras);
  }

  deleteObras(obras: Obras) {
    
    return this.http.delete<Obras>(this.Url+"/deleteObras/"+obras.id_obras);

  }

}