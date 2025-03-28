import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMarkingComponent } from './image-marking.component';

describe('ImageMarkingComponent', () => {
  let component: ImageMarkingComponent;
  let fixture: ComponentFixture<ImageMarkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageMarkingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageMarkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
