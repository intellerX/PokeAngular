import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonManagementComponent } from './pokemon-management.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonService } from '../../services/pokemon.service';
import { FilterGroupComponent } from '../../components/filter-group/filter-group.component';
import { ActionsHeaderComponent } from '../../components/actions-header/actions-header.component';
import { ItemsGridComponent } from '../../components/items-grid/items-grid.component';
import { FormComponent } from '../../components/form/form.component';
import { CustomInputTextComponent } from '../../../../shared/custom-input-text/custom-input-text.component';
import { CustomButtonComponent } from '../../../../shared/custom-button/custom-button.component';
import { CustomInputRangeComponent } from '../../../../shared/custom-input-range/custom-input-range.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { Edit, Plus, Save, Search, Trash, X } from 'angular-feather/icons';

describe('PokemonManagementComponent', () => {
  let component: PokemonManagementComponent;
  let fixture: ComponentFixture<PokemonManagementComponent>;

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
        PokemonManagementComponent,
        FilterGroupComponent,
        ActionsHeaderComponent,
        ItemsGridComponent,
        FormComponent,
        CustomInputTextComponent,
        CustomButtonComponent,
        CustomInputRangeComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
