import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostabComponent } from './postab.component';

describe('PostabComponent', () => {
  let component: PostabComponent;
  let fixture: ComponentFixture<PostabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
