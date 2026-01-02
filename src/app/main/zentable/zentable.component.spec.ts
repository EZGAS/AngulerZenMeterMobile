import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZentableComponent } from './zentable.component';

describe('ZentableComponent', () => {
  let component: ZentableComponent;
  let fixture: ComponentFixture<ZentableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZentableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZentableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
