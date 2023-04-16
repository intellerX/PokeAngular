import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonService } from '../../services/pokemon.service';
import { CustomInputTextComponent } from '../../../../shared/custom-input-text/custom-input-text.component';
import { CustomInputRangeComponent } from '../../../../shared/custom-input-range/custom-input-range.component';
import { CustomButtonComponent } from '../../../../shared/custom-button/custom-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { Edit, Plus, Save, Search, Trash, X } from 'angular-feather/icons';
import { FormStatus } from '../../../../core/enums/formStatus';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  const icons = {
    Search,
    Plus,
    Save,
    X,
    Edit,
    Trash,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        FeatherModule.pick(icons),
      ],
      providers: [PokemonService],
      declarations: [
        FormComponent,
        CustomInputTextComponent,
        CustomInputRangeComponent,
        CustomButtonComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call createPokemon when submitting a new Pokemon form', () => {
    component.formStatusValue = FormStatus.New;
    const controls = component.pokemonForm.controls;
    controls['name'].setValue('Bulbasaur');
    controls['type'].setValue('Grass');
    spyOn(component, 'createPokemon');
    spyOn(component, 'fetchPokemons');
    component.onSubmit();
    expect(component.createPokemon).toHaveBeenCalled();
  });

  it('should reset form and formStatusValue on cancel', () => {
    const controls = component.pokemonForm.controls;
    controls['name'].setValue('Bulbasaur');
    controls['type'].setValue('Grass');
    component.onCancel();
    expect(component.pokemonForm.value).toEqual(component.pokemonFormOld);
    expect(component.formStatusValue).toEqual(1);
  });
});
