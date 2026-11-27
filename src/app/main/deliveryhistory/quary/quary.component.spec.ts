import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaryComponent } from './quary.component';

describe('QuaryComponent', () => {
  let component: QuaryComponent;
  let fixture: ComponentFixture<QuaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
