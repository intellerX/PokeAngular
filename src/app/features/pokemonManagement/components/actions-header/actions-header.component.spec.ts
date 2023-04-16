import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsHeaderComponent } from './actions-header.component';
import { CustomButtonComponent } from '../../../../shared/custom-button/custom-button.component';
import { FeatherModule } from 'angular-feather';
import { Edit, Plus, Save, Search, Trash, X } from 'angular-feather/icons';

describe('ActionsHeaderComponent', () => {
  let component: ActionsHeaderComponent;
  let fixture: ComponentFixture<ActionsHeaderComponent>;

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
      declarations: [ActionsHeaderComponent, CustomButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event when button is clicked', () => {
    spyOn(component, 'onNew');
    const button = fixture.nativeElement.querySelector('app-custom-button');
    button.click();
    expect(component.onNew).toHaveBeenCalled();
  });
});
