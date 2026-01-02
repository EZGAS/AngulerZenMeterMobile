import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandUpdatComponent } from './command-updat.component';

describe('CommandUpdatComponent', () => {
  let component: CommandUpdatComponent;
  let fixture: ComponentFixture<CommandUpdatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandUpdatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandUpdatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
