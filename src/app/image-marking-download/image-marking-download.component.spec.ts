import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMarkingDownloadComponent } from './image-marking-download.component';

describe('ImageMarkingDownloadComponent', () => {
  let component: ImageMarkingDownloadComponent;
  let fixture: ComponentFixture<ImageMarkingDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageMarkingDownloadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageMarkingDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
