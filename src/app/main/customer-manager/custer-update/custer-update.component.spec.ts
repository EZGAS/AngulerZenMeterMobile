import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusterUpdateComponent } from './custer-update.component';

describe('CusterUpdateComponent', () => {
  let component: CusterUpdateComponent;
  let fixture: ComponentFixture<CusterUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CusterUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CusterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
