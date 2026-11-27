import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatakeyinComponent } from './datakeyin.component';

describe('DatakeyinComponent', () => {
  let component: DatakeyinComponent;
  let fixture: ComponentFixture<DatakeyinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatakeyinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatakeyinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
