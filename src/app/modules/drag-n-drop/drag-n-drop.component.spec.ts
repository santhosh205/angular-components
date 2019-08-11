import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragNDropComponent } from './drag-n-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

describe('DragNDropComponent', () => {
  let component: DragNDropComponent;
  let fixture: ComponentFixture<DragNDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragNDropComponent ],
      imports: [DragDropModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragNDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
