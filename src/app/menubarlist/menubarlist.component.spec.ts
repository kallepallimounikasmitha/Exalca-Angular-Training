import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarlistComponent } from './menubarlist.component';

describe('MenubarlistComponent', () => {
  let component: MenubarlistComponent;
  let fixture: ComponentFixture<MenubarlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenubarlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubarlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
