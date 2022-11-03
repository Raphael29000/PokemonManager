import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.css']
})
export class GenerationComponent implements OnInit {

  generations=[
    'Génération I',  
    'Génération II', 
    'Génération III', 
    'Génération IV', 
    'Génération V', 
    'Génération VI', 
    'Génération VII'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
