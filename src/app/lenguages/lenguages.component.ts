import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lenguages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lenguages.component.html',
  styleUrl: './lenguages.component.css'
})
export class LenguagesComponent {
  languages: Array<string> = [];

  ngOnInit(): void {
    this.languages = [
      "Ingles",
      "Español"
    ];
  }
}
