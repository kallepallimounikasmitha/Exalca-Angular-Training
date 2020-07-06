import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubaritemComponent } from './menubaritem.component';

describe('MenubaritemComponent', () => {
  let component: MenubaritemComponent;
  let fixture: ComponentFixture<MenubaritemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenubaritemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubaritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
