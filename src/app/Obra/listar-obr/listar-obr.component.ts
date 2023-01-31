import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObrasService } from 'src/app/service/obras.service';
import { Obras } from 'src/app/entity/Obras';
@Component({
  selector: 'app-listar-obr',
  templateUrl: './listar-obr.component.html',
  styleUrls: ['./listar-obr.component.css']
})
export class ListarObrComponent implements OnInit {

  obras!: Obras[];
  constructor(private service:ObrasService, private router:Router) { }

  pageActual: number=1;

  ngOnInit(): void {
    this.service.getObras()
    .subscribe(data=>
      {this.obras=data;
    })
  }

}
