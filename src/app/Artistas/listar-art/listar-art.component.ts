import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artistas } from 'src/app/entity/Artistas';
import { ArtistasService } from 'src/app/service/artistas.service';

@Component({
  selector: 'app-listar-art',
  templateUrl: './listar-art.component.html',
  styleUrls: ['./listar-art.component.css']
})
export class ListarArtComponent implements OnInit {

  artistas!: Artistas[];
  constructor(private service:ArtistasService, private router:Router) { }

  pageActual: number=1;
  ngOnInit(): void {
    this.service.getArtistas()
    .subscribe(data=>
      {this.artistas=data;
    })
  }

}
