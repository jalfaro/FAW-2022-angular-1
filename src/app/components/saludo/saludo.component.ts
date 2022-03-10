import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {
  nombre: String = "Julio"
  mostrarSaludo = false;

  constructor() { }

  ngOnInit(): void {
  }

  saludar() {
    this.mostrarSaludo = true;
  }

}
