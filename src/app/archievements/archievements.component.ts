import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-archievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archievements.component.html',
  styleUrl: './archievements.component.css'
})
export class ArchievementsComponent {
  logros: Array<any> = [];

  ngOnInit(): void {
    let logro1 = {
      nombre: "Participación en Becalos English Challenge",
      fecha: "Marzo 2020",
      descripcion: "Reconocimiento por el excelente desempeño y dedicación."
    };

    let logro2 = {
      nombre: "Construcción de poin sale personalizado para la tienda",
      fecha: "Julio 2022",
      descripcion: "Ascendido por mostrar habilidades en atención al cliente."
    };



    this.logros.push(logro1);
    this.logros.push(logro2);


    console.log(this.logros);
  }
}