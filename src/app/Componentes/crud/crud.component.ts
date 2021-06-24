import { Component, OnInit } from '@angular/core';
import { Servicio1Service } from "../../Servicios/servicio1.service";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private servicio: Servicio1Service) { }

  ngOnInit(): void {
  }

  agregarPersona(event: any){
    event.preventDefault();
    const target = event.target;
    const nombre = target.querySelector('#nombre').value
    const apellido = target.querySelector('#apellido').value
    try {
      this.servicio.nuevaPersona(nombre, apellido);
      target.querySelector('#nombre').value = ""
      target.querySelector('#apellido').value = ""
    } catch (error) {
      alert(error)
    }
  }

}
