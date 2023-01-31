import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MuseosService } from 'src/app/service/museos.service';
import { Museos } from 'src/app/entity/Museos';
@Component({
  selector: 'app-listar-mus',
  templateUrl: './listar-mus.component.html',
  styleUrls: ['./listar-mus.component.css']
})
export class ListarMusComponent implements OnInit {

  museos!: Museos[];
  constructor(private service:MuseosService, private router:Router) { }

  pageActual: number=1;
  ngOnInit(): void {
    this.service.getMuseos()
    .subscribe(data=>
      {this.museos=data;
    })
  }
}
