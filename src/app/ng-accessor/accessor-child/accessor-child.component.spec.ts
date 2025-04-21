import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessorChildComponent } from './accessor-child.component';

describe('AccessorChildComponent', () => {
  let component: AccessorChildComponent;
  let fixture: ComponentFixture<AccessorChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessorChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessorChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
