import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router){}

  ListarArt(){
    this.router.navigate(["listarArt"]);
  }

  ListarMus(){
    this.router.navigate(["listarMus"]);
  }

  ListarObr(){
    this.router.navigate(["listarObr"]);
  }
}
