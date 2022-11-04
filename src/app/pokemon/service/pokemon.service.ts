import { NONE_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon';

@Injectable()
export class PokemonService {
  

  bulbizarre = new Pokemon(1,"Bulbizarre","graine",6.9,0.7,["plante","poison"],"../assets/file/1.png");
  herbizarre = new Pokemon(2,"Herbizarre","graine",13,1,["plante","poison"],"../assets/file/2.png");
  florizarre = new Pokemon(3,"Florizarre","graine",100,2,["plante","poison"],"../assets/file/3.png");
  salamèche = new Pokemon(4,"Salamèche","graine",8.5,0.6,["plante","poison"],"../assets/file/4.png");
  reptincel = new Pokemon(5,"Reptincel","graine",19,1.1,["plante","poison"],"../assets/file/5.png");
  dracaufeu = new Pokemon(6,"Dracaufeu","graine",90.5,1.7,["plante","poison"],"../assets/file/6.png");
  pokemons = [this.bulbizarre,this.herbizarre,this.florizarre,this.salamèche,this.reptincel,this.dracaufeu]


  constructor() { }

  getAllPokemon(){
    return this.pokemons;
  }

  getPokemon(id:number){
    let poke = null;
    this.pokemons.forEach(element => {
      if(element.id===id){
        poke = element;
      }      
    });
    return poke;
  }

  getNumberPokemonInPokedex(){
    return this.getAllPokemon().length
  }

  getPokemonByName(nom: string){
    let regex = new RegExp(nom, 'gi');
    return this.pokemons.filter(pokemon => pokemon.nom.match(regex)); 

  }

}
