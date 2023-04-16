import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputTextComponent } from './custom-input-text.component';
import { FeatherModule } from 'angular-feather';
import { Edit, Plus, Save, Search, Trash, X } from 'angular-feather/icons';

describe('CustomInputTextComponent', () => {
  let component: CustomInputTextComponent;
  let fixture: ComponentFixture<CustomInputTextComponent>;

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
      imports: [FeatherModule.pick(icons)],
      declarations: [CustomInputTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
