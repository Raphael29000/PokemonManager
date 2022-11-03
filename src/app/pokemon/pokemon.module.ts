import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GenerationComponent } from './generation/generation.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { registerLocaleData } from '@angular/common'; 
import localeFR from '@angular/common/locales/fr'; 
registerLocaleData(localeFR); 

const Pokemonroutes: Routes = [
  {path: "",component:GenerationComponent},
  {path: "pokemons",component:PokemonsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(Pokemonroutes),
    CommonModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }], 
})
export class PokemonModule { }
