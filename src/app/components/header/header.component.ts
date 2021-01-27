import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() {
    console.log("Componente Header creandose!")
  }

  ngOnInit(): void {
    console.log("Componente Header Creado!")
  }
  nombre = "Abraham Lugo Ramirez"
  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  sumar(){
    this.arr.push(this.arr.length)
  }
}
