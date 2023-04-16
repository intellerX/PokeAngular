import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsGridComponent } from './items-grid.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonService } from '../../services/pokemon.service';

describe('ItemsGridComponent', () => {
  let component: ItemsGridComponent;
  let fixture: ComponentFixture<ItemsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
      declarations: [ItemsGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit id on edit', () => {
    const id = 1;
    spyOn(component.idEmitter, 'emit');

    component.onEdit(id);

    expect(component.idEmitter.emit).toHaveBeenCalledWith(id);
  });
});
