import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperience : Array<any> = [];
  ngOnInit(): void {
    let work1 = {
      fecha: "2021-2022",
      ubicacion: "Cordoba",
      puesto: "cybernauta",
      empresa: "Cyber",
      logros: [
        {descripcion : "Aunmento del 10% en su salario"},
        {descripcion : "Libertad de hacer proyectos"}
      ]
    };

    let work2 = {
      fecha: "2022-2023",
      ubicacion: "Orizaba",
      puesto: "Recepcionista",
      empresa: "Hotel",
      logros: [
        {descripcion : "Ascendido a bartender"},
        {descripcion : "Creacion de sistema de inscripcón con huella dactilar"}
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    //console.log(this.workExperience);
  }
}
