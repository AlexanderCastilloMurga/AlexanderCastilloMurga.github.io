import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {
  interests: Array<string> = [];

  ngOnInit(): void {
    this.interests = [
      "Videojuegos",
      "Musica",
      "Peliculas",
      "Inteligencia Artificial",
      "Dibujo",
      "Arte"
    ];
  }
}
