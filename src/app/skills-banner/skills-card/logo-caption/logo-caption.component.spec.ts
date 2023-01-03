import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCaptionComponent } from './logo-caption.component';

describe('LogoCaptionComponent', () => {
  let component: LogoCaptionComponent;
  let fixture: ComponentFixture<LogoCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoCaptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
