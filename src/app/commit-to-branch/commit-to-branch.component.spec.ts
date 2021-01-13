import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitToBranchComponent } from './commit-to-branch.component';

describe('CommitToBranchComponent', () => {
  let component: CommitToBranchComponent;
  let fixture: ComponentFixture<CommitToBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitToBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitToBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
