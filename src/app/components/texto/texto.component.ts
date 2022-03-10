import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.scss']
})
export class TextoComponent implements OnInit {

  copyright : String = "Estos son los resultados de la investigacion que se realizo el 13/03/2021 para los cuales bla bla bla"
  constructor() { }

  ngOnInit(): void {
  }

}
