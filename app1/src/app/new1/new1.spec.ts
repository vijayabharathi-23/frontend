import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New1 } from './new1';

describe('New1', () => {
  let component: New1;
  let fixture: ComponentFixture<New1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [New1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(New1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
