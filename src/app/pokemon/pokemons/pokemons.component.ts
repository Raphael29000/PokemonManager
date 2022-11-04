import { Component, OnInit } from '@angular/core';
import { FormSearch } from 'src/app/modelForm/form-search';
import { PokemonService } from 'src/app/pokemon/service/pokemon.service';
import { Pokemon } from '../pokemon';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemonSelectionne?:Pokemon;

  numberPokemonPokedex?:number;
  
  pokemons: Pokemon[] = [];

  FormSearch = new FormSearch(''); 

  constructor(private pokemonService: PokemonService) {
      
   }

  ngOnInit(){
    this.pokemons = this.pokemonService.getAllPokemon();
    this.numberPokemonPokedex = this.pokemonService.getNumberPokemonInPokedex();
  }

  rechercher(nom:string){
    this.pokemons = this.pokemonService.getPokemonByName(nom);
  }

  annulerRecherche(){
    this.pokemons = this.pokemonService.getAllPokemon();
  }

}
