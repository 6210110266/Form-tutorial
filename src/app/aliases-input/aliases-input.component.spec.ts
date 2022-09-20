import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliasesInputComponent } from './aliases-input.component';

describe('AliasesInputComponent', () => {
  let component: AliasesInputComponent;
  let fixture: ComponentFixture<AliasesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AliasesInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AliasesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
