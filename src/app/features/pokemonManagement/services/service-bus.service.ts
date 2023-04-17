import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ServiceBusService {

  public pokemonMain: Pokemon[] = [];


  constructor() { }
}
