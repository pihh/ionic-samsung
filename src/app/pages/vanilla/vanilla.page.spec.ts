import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VanillaPage } from './vanilla.page';

describe('VanillaPage', () => {
  let component: VanillaPage;
  let fixture: ComponentFixture<VanillaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VanillaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
