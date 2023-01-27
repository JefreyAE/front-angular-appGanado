import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAllComponent } from './animal-all.component';

describe('AnimalAllComponent', () => {
  let component: AnimalAllComponent;
  let fixture: ComponentFixture<AnimalAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
