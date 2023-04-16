import { Component, ViewChild } from '@angular/core';
import { ItemsGridComponent } from '../../components/items-grid/items-grid.component';
import { FormComponent } from '../../components/form/form.component';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-management',
  templateUrl: './pokemon-management.component.html',
  styleUrls: ['./pokemon-management.component.scss'],
})
export class PokemonManagementComponent {
  @ViewChild('form') formComponent: FormComponent | undefined;

  errorMessage = '';
  loading = false;

  constructor(private pokemonService: PokemonService) {}

  onEdit(event: number): void {
    this.fetchPokemonById(event);
  }

  fetchPokemonById(id: number): void {
    this.errorMessage = '';
    this.loading = true;

    this.pokemonService.fetchPokemonById(id).subscribe({
      next: data => {
        this.loading = false;
        this.formComponent?.onEdit(data);
      },
      error: error => {
        this.loading = false;

        if (error.status === 400) {
          this.errorMessage = 'petición errónea de la información';
        } else if (error.status === 404) {
          this.errorMessage = 'no se encontró el registro seleccioando';
        } else {
          this.errorMessage = 'desconocido';
        }

        if (this.errorMessage !== '') alert(`Error: ${this.errorMessage}`);
      },
    });
  }
}
