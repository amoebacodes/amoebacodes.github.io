import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectExpansionPanelComponent } from './project-expansion-panel.component';

describe('ProjectExpansionPanelComponent', () => {
  let component: ProjectExpansionPanelComponent;
  let fixture: ComponentFixture<ProjectExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectExpansionPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
