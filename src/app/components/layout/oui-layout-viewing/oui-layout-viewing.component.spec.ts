import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OuiLayoutViewingComponent } from './oui-layout-viewing.component';

describe('OuiLayoutViewingComponent', () => {
  let component: OuiLayoutViewingComponent;
  let fixture: ComponentFixture<OuiLayoutViewingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OuiLayoutViewingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OuiLayoutViewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
