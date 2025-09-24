import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProducts } from './add-products';

describe('AddProducts', () => {
  let component: AddProducts;
  let fixture: ComponentFixture<AddProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
