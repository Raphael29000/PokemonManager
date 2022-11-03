import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  
  bulbizarre = new Pokemon("001","Bulbizarre","graine",6.9,0.7,["plante","poison"],"../assets/file/1.png");
  herbizarre = new Pokemon("002","Herbizarre","graine",13,1,["plante","poison"],"../assets/file/2.png");
  florizarre = new Pokemon("003","Florizarre","graine",100,2,["plante","poison"],"../assets/file/3.png");
  salamèche = new Pokemon("004","Salamèche","graine",8.5,0.6,["plante","poison"],"../assets/file/4.png");
  reptincel = new Pokemon("005","Reptincel","graine",19,1.1,["plante","poison"],"../assets/file/5.png");
  dracaufeu = new Pokemon("006","Dracaufeu","graine",90.5,1.7,["plante","poison"],"../assets/file/6.png");
  pokemons = [this.bulbizarre,this.herbizarre,this.florizarre,this.salamèche,this.reptincel,this.dracaufeu]

  constructor() { }

  ngOnInit(): void {
  }

}
