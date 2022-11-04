import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GenerationComponent } from './generation/generation.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { registerLocaleData } from '@angular/common'; 
import localeFR from '@angular/common/locales/fr';
import { PokemonComponent } from './pokemon/pokemon.component'; 
import { PokemonService } from './service/pokemon.service';
import { FormsModule } from '@angular/forms';
registerLocaleData(localeFR); 

const Pokemonroutes: Routes = [
  {path: "",component:GenerationComponent,title:"génération pokémon"},
  {path: "pokemons",component:PokemonsComponent,title:"pokédex"}
];

@NgModule({
  declarations: [
    PokemonsComponent,
    GenerationComponent,
    PokemonComponent,
  ],
  imports: [
    RouterModule.forChild(Pokemonroutes),
    CommonModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    PokemonService
  ], 
})
export class PokemonModule { }
