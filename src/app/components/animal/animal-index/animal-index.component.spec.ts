import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalIndexComponent } from './animal-index.component';

describe('AnimalIndexComponent', () => {
  let component: AnimalIndexComponent;
  let fixture: ComponentFixture<AnimalIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
