import { Component, Input } from '@angular/core';
import { FormStatus } from '../../../../core/enums/formStatus';
import { InputRole } from '../../../../core/enums/inputRole.enum';
import { ButtonRole } from '../../../../core/enums/buttonRole.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { environment } from '../../../../../environments/environments';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() idRole = 1;
  // eslint-disable-next-line @typescript-eslint/ban-types
  @Input() gridCompomentRef: any | undefined;

  formStatus = FormStatus;
  formStatusValue = this.formStatus.New;
  pokemonName = '';

  inputRole = InputRole;
  buttonRole = ButtonRole;

  pokemonForm: FormGroup;
  pokemonFormOld: FormGroup;

  errorMessage = '';
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private pokemonService: PokemonService
  ) {
    this.pokemonForm = this.formBuilder.group({
      id: 0,
      name: ['', Validators.required],
      image: '',
      attack: 50,
      defense: 50,
      hp: 50,
      type: ['', Validators.required],
    });
    this.pokemonFormOld = this.pokemonForm.value;
  }

  onEdit(item: Pokemon): void {
    this.formStatusValue = FormStatus.Edit;

    const controls = this.pokemonForm.controls;
    controls['id'].setValue(item.id);

    this.pokemonName = item.name;
    controls['name'].setValue(item.name);

    controls['image'].setValue(item.image);
    controls['attack'].setValue(item.attack);
    controls['defense'].setValue(item.defense);
    controls['hp'].setValue(item.hp);
    controls['type'].setValue(item.type);
  }

  onSubmit(): void {
    if (this.pokemonForm.invalid) return;

    const id = this.pokemonForm.controls['id'].value;
    if (this.formStatusValue === this.formStatus.New) {
      this.createPokemon();
    } else {
      this.updatePokemonById(id);
    }
  }

  onCancel(): void {
    this.formStatusValue = FormStatus.New;
    this.pokemonForm.reset(this.pokemonFormOld);
  }

  createPokemon(): void {
    this.errorMessage = '';
    this.loading = true;

    const controls = this.pokemonForm.controls;

    this.pokemonService
      .createPokemon({
        id: controls['id'].value,
        name: controls['name'].value,
        image: controls['image'].value,
        attack: controls['attack'].value,
        defense: controls['defense'].value,
        hp: controls['hp'].value,
        type: controls['type'].value,
        idAuthor: environment.idAuthor,
      })
      .subscribe({
        next: data => {
          this.loading = false;
          this.onCancel();

          this.fetchPokemons();
        },
        error: error => {
          this.loading = false;

          if (error.status === 400) {
            this.errorMessage = 'petición errónea de la información';
          } else if (error.status === 402) {
            this.errorMessage =
              'no se ha provisto el "Nombre" para el registro de la información';
          } else {
            this.errorMessage = 'desconocido';
          }
        },
      });
  }

  updatePokemonById(id: number): void {
    this.errorMessage = '';
    this.loading = true;

    const controls = this.pokemonForm.controls;

    this.pokemonService
      .updatePokemonById(id, {
        name: controls['name'].value,
        image: controls['image'].value,
        attack: controls['attack'].value,
        defense: controls['defense'].value,
        hp: controls['hp'].value,
        type: controls['type'].value,
        idAuthor: environment.idAuthor,
      })
      .subscribe({
        next: data => {
          this.loading = false;
          this.onCancel();

          this.fetchPokemons();
        },
        error: error => {
          this.loading = false;

          if (error.status === 400) {
            this.errorMessage = 'petición errónea de la información';
          } else if (error.status === 402) {
            this.errorMessage =
              'no se encontró el registro que se intentaba actualizar';
          } else {
            this.errorMessage = 'desconocido';
          }
        },
      });
  }

  fetchPokemons(): void {
    if (this.gridCompomentRef) this.gridCompomentRef.fetchPokemons();
  }
}
