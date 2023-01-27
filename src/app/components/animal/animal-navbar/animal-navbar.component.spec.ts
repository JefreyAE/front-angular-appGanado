import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalNavbarComponent } from './animal-navbar.component';

describe('AnimalNavbarComponent', () => {
  let component: AnimalNavbarComponent;
  let fixture: ComponentFixture<AnimalNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
