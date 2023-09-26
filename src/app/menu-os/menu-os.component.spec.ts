import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOsComponent } from './menu-os.component';

describe('MenuOsComponent', () => {
  let component: MenuOsComponent;
  let fixture: ComponentFixture<MenuOsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuOsComponent]
    });
    fixture = TestBed.createComponent(MenuOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
