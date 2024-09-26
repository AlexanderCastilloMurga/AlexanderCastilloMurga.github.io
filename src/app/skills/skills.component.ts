import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Array<string> = [];

  ngOnInit(): void {
    this.skills = [
      "Python",
      "HTML/CSS",
      "Java",
      "Facil adaptabilidad",
      "Trabajo en equipo",
      "Creatividad",
      "Trabajo bajo presion",
    ];
  }
}