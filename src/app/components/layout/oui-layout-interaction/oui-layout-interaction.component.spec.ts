import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OuiLayoutInteractionComponent } from './oui-layout-interaction.component';

describe('OuiLayoutInteractionComponent', () => {
  let component: OuiLayoutInteractionComponent;
  let fixture: ComponentFixture<OuiLayoutInteractionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OuiLayoutInteractionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OuiLayoutInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
