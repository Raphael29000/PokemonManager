import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationComponent } from './pokemon/generation/generation.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokemonsComponent } from './pokemon/pokemons/pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerationComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    PokemonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
