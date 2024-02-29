import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAllBooksComponent } from './find-all-books.component';

describe('FindAllBooksComponent', () => {
  let component: FindAllBooksComponent;
  let fixture: ComponentFixture<FindAllBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindAllBooksComponent]
    });
    fixture = TestBed.createComponent(FindAllBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
