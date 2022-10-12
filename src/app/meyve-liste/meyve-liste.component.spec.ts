import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeyveListeComponent } from './meyve-liste.component';

describe('MeyveListeComponent', () => {
  let component: MeyveListeComponent;
  let fixture: ComponentFixture<MeyveListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeyveListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeyveListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
