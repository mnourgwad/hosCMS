import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemlogComponent } from './itemlog.component';

describe('ItemlogComponent', () => {
  let component: ItemlogComponent;
  let fixture: ComponentFixture<ItemlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
