import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterGroupComponent } from './filter-group.component';
import { CustomInputTextComponent } from '../../../../shared/custom-input-text/custom-input-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { Edit, Plus, Save, Search, Trash, X } from 'angular-feather/icons';
import { InputRole } from '../../../../core/enums/inputRole.enum';
import { ItemsGridComponent } from '../items-grid/items-grid.component';

describe('FilterGroupComponent', () => {
  let component: FilterGroupComponent;
  let fixture: ComponentFixture<FilterGroupComponent>;

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
      imports: [ReactiveFormsModule, FeatherModule.pick(icons)],
      declarations: [FilterGroupComponent, CustomInputTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set inputRole to InputRole', () => {
    expect(component.inputRole).toEqual(InputRole);
  });

  it('should initialize searchForm', () => {
    expect(component.searchForm).toBeDefined();
  });

  it('should clear search input when clearFilter is called', () => {
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = 'test';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    component.clearFilter();
    fixture.detectChanges();
    expect(inputElement.value).toBe('');
  });
});
