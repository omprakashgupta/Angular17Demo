import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockInterceptorTestComponent } from './mock-interceptor-test.component';

describe('MockInterceptorTestComponent', () => {
  let component: MockInterceptorTestComponent;
  let fixture: ComponentFixture<MockInterceptorTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockInterceptorTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MockInterceptorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
