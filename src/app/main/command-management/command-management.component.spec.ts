import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandManagementComponent } from './command-management.component';

describe('CommandManagementComponent', () => {
  let component: CommandManagementComponent;
  let fixture: ComponentFixture<CommandManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
