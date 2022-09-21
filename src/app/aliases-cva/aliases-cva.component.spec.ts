import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliasesCvaComponent } from './aliases-cva.component';

describe('AliasesCvaComponent', () => {
  let component: AliasesCvaComponent;
  let fixture: ComponentFixture<AliasesCvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AliasesCvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AliasesCvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
