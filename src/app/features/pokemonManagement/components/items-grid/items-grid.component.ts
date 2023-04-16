import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { ButtonRole } from '../../../../core/enums/buttonRole.enum';
import { PokemonService } from '../../services/pokemon.service';
import { environment } from '../../../../../environments/environments';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrls: ['./items-grid.component.scss'],
})
export class ItemsGridComponent implements OnInit {
  @Input() filterCompomentRef: any | undefined;

  @Output() idEmitter = new EventEmitter<number>();

  buttonRole = ButtonRole;

  pokemonMain: Pokemon[] = [];
  pokemonFilter: Pokemon[] = [];

  loading = false;
  errorMessage = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.fetchPokemons();
  }

  onEdit(id: number): void {
    this.idEmitter.emit(id);
  }

  onDelete(id: number): void {
    if (confirm('¿Desea eliminar el registro seleccionado?')) {
      this.deletePokemonById(id);
    }
  }

  onFilter(name: string): void {
    if (name !== '') {
      this.pokemonFilter = this.pokemonFilter.filter(
        a => a.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) >= 0
      );
    } else {
      this.pokemonFilter = [...this.pokemonMain];
    }
  }

  fetchPokemons(): void {
    this.errorMessage = '';
    this.loading = true;

    this.pokemonMain = [];
    this.pokemonFilter = [];
    this.pokemonService
      .fetchPokemons({ idAuthor: environment.idAuthor })
      .subscribe({
        next: data => {
          this.pokemonMain = data;
          this.pokemonFilter = [...this.pokemonMain];

          this.clearFilter();

          this.loading = false;
        },
        error: error => {
          this.loading = false;

          if (error.status === 400) {
            this.errorMessage = 'petición errónea de la información';
          } else if (error.status === 404) {
            this.errorMessage =
              'no se ha provisto el "IdAuthor" para la búsqueda de información';
          } else {
            this.errorMessage = 'desconocido';
          }
        },
      });
  }

  deletePokemonById(id: number): void {
    this.errorMessage = '';
    this.loading = true;

    this.pokemonService.deletePokemonById(id).subscribe({
      next: data => {
        this.loading = false;

        this.fetchPokemons();
      },
      error: error => {
        this.loading = false;

        if (error.status === 400) {
          this.errorMessage = 'petición errónea de la información';
        } else if (error.status === 404) {
          this.errorMessage =
            'no se pudo encontrar el registro para ser eliminado';
        } else {
          this.errorMessage = 'desconocido';
        }
      },
    });
  }

  clearFilter(): void {
    if (this.filterCompomentRef) this.filterCompomentRef.clearFilter();
  }
}
