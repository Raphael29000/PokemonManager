import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit { 

  @Input() pokemon: any;
  @Output() eventClick = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  clickPokemon(pokemonSelect : Pokemon){
    this.eventClick.emit(pokemonSelect)
  }

  

}
