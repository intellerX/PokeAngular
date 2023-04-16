import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon.service';
import { Pokemon, PokemonFetch } from '../models/pokemon';
import { environment } from '../../../../environments/environments';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
    }).compileComponents();

    service = TestBed.inject(PokemonService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a list of pokemons', () => {
    const payload: PokemonFetch = { idAuthor: environment.idAuthor };
    service.fetchPokemons(payload).subscribe(data => {
      expect(data).toBeTruthy();
    });
    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}?idAuthor=${payload.idAuthor}`
    );
    expect(req.request.method).toEqual('GET');
  });

  it('should create a pokemon', () => {
    const mockPokemon = {
      id: 1,
      name: 'Squirtle',
      image: '',
      attack: 50,
      defense: 100,
      hp: 20,
      type: 'Agua',
      idAuthor: 1,
    };
    service.createPokemon(mockPokemon).subscribe(data => {
      expect(data).toEqual(mockPokemon);
    });
    const req = httpTestingController.expectOne(`${environment.apiBaseUrl}`);
    expect(req.request.method).toEqual('POST');
    req.flush(mockPokemon);
  });

  it('should fetch a pokemon by id', () => {
    const pokemonId = 355;
    const mockPokemon = {
      id: 355,
      name: 'Ditto',
      image:
        'https://assets.reedpopcdn.com/pokemon_go_ditto_disguises_A16ilOs.png/BROK/thumbnail/1200x900/quality/100/pokemon_go_ditto_disguises_A16ilOs.png',
      attack: 50,
      defense: 50,
      hp: 35,
      type: 'Normal',
      idAuthor: 1,
    };
    service.fetchPokemonById(pokemonId).subscribe(data => {
      expect(data).toEqual(mockPokemon);
    });
    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}${mockPokemon.id}`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockPokemon);
  });

  it('should update a pokemon by id', () => {
    const pokemonId = 355;
    const mockPokemon = {
      id: 355,
      name: 'NotDitto',
      image:
        'https://assets.reedpopcdn.com/pokemon_go_ditto_disguises_A16ilOs.png/BROK/thumbnail/1200x900/quality/100/pokemon_go_ditto_disguises_A16ilOs.png',
      attack: 50,
      defense: 50,
      hp: 35,
      type: 'Normal',
      idAuthor: 1,
    };
    service.updatePokemonById(pokemonId, mockPokemon).subscribe(data => {
      expect(data.name).toEqual(mockPokemon.name);
    });
    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}${mockPokemon.id}`
    );
    expect(req.request.method).toEqual('PUT');
    req.flush(mockPokemon);
  });

  it('should delete a pokemon by id', () => {
    const pokemonId = 355;
    service.deletePokemonById(pokemonId).subscribe(response => {
      expect(response).toBeNull();
    });
    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}${pokemonId}`
    );
    expect(req.request.method).toEqual('DELETE');
  });
});
