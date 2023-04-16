import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputRangeComponent } from './custom-input-range.component';

describe('CustomInputRangeComponent', () => {
  let component: CustomInputRangeComponent;
  let fixture: ComponentFixture<CustomInputRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomInputRangeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomInputRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the value when the user changes the input value', () => {
    const inputEl = fixture.nativeElement.querySelector('input');
    inputEl.value = '25';
    inputEl.dispatchEvent(new Event('input'));
    expect(component.value).toBe(25);
  });

  it('should call onChange when the user changes the input value', () => {
    const spy = spyOn(component, 'onChange');
    const inputEl = fixture.nativeElement.querySelector('input');
    inputEl.value = '30';
    inputEl.dispatchEvent(new Event('input'));
    expect(spy).toHaveBeenCalledWith(30);
  });

  it('should call onTouched when the user changes the input value', () => {
    const spy = spyOn(component, 'onTouched');
    const inputEl = fixture.nativeElement.querySelector('input');
    inputEl.value = '35';
    inputEl.dispatchEvent(new Event('input'));
    expect(spy).toHaveBeenCalled();
  });
});
