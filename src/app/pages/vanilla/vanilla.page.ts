import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { OuiDialogService } from '../../services/oui-dialog.service';
import { OuiModalService } from '../../services/oui-modal.service';
import { OuiPopoverBaseComponent } from '../../components/popover/oui-popover-base/oui-popover-base.component';

import {
  FormTextInput,
  FormRadio,
  FormNumberInput,
  FormSelectInput,
  FormTextareaInput,
  FormSwitchInput,
  FormCheckboxInput,
  FormRangeInput,
  FormButton,
} from 'src/app/components/form/configurations/configuration';
import { FormTelInput } from 'src/app/components/form/configurations/form-tel.configuration copy';
import { FormEmailInput } from 'src/app/components/form/configurations/form-email.configuration';
import { FormPasswordInput } from 'src/app/components/form/configurations/form-password.configuration';
@Component({
  selector: 'app-vanilla',
  templateUrl: './vanilla.page.html',
  styleUrls: ['./vanilla.page.scss'],
})
export class VanillaPage implements OnInit {
  constructor(
    public dialogService: OuiDialogService,
    public modalService: OuiModalService,
    public popoverController: PopoverController,
    public menuController: MenuController
  ) {
    /*
    const obs = interval(1000).pipe(
      take(5),
      tap((i) => console.log('obs value ' + i))
    );

    obs.subscribe((value) => console.log('observer 1 received ' + value));
    obs.subscribe((value) => console.log('observer 2 received ' + value));
    */
  }

  ngOnInit() {
    //this.setDebug();
  }
  ionViewDidEnter() {
    this.observeViewingContainer();
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                      DEBUG                                     ||
  // ! ||--------------------------------------------------------------------------------||
  private setDebug() {
    document.querySelector('body')?.classList.add('debug');
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                HEADER ANIMATION                                ||
  // ! ||--------------------------------------------------------------------------------||
  @ViewChild('viewingContainer') viewingContainer: any;
  @ViewChild('oneUiViewing') oneUiViewing: any;
  protected viewingContainerVisible: boolean = false;

  private observeViewingContainer() {
    const $el: any = this.viewingContainer.nativeElement;
    var observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) {

        this.viewingContainerVisible = false;
      } else {


        this.viewingContainerVisible = true;
      }
    });
    observer.observe($el);
  }

  prevDiff = 0;
  ouiViewPct: number = 1;
  ouiViewNavPct: number = 1;

  handleScroll(ev: any) {
    try {
      const height = this.oneUiViewing.nativeElement.offsetHeight;
      const targetScroll = ev.target.scrollTop;
      const diff = Math.max(0, Math.min(1, targetScroll / height));

      if (diff !== this.prevDiff) {
        this.prevDiff = diff;
        // Começa em 0.1 , acaba em 0.5
        const ouiViewPct = 1 - Math.min(1, Math.max(diff - 0.1, 0) / 0.4);
        const ouiViewNavPct = Math.min(1, Math.max(diff - 0.5, 0) / 0.4);
        if (ouiViewPct !== this.ouiViewPct) {
          this.ouiViewPct = ouiViewPct;
        }
        if (ouiViewNavPct !== this.ouiViewNavPct) {
          this.ouiViewNavPct = ouiViewNavPct;
        }
      }

      console.log({diff,targetScroll,height})
    } catch (ex) {
      console.log(ex);
    }
  }
  // ! ||--------------------------------------------------------------------------------||
  // ! ||                              HEADER BUTTONS CLICK                              ||
  // ! ||--------------------------------------------------------------------------------||
  async onHeaderButtonClickAdd() {
    const { data, role } = await this.dialogService.open('base');
    console.log({ data, role });
  }

  async onHeaderButtonClickSearch() {
    const { data, role } = await this.modalService.open('base');
    console.log({ data, role });
  }
  async onHeaderButtonClickEllipsis(e: any) {
    const popover = await this.popoverController.create({
      component: OuiPopoverBaseComponent,
      event: e,
      cssClass: 'rounded',
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log(role);
  }

  async onHeaderButtonClickMenu() {
    console.log(this.menuController);
    this.menuController.open();
  }

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                  FORM EXAMPLES                                 ||
  // ! ||--------------------------------------------------------------------------------||
  testFormFields = [
    new FormTextInput({
      key: 'text',
      label: 'Text',
      required: true,
      value: 'text',

    }),
    new FormTelInput({
      key: 'tel',
      label: 'Tel',
      required: true,
    }),
    new FormRadio({
      key: 'radio',
      label: 'Radio',
      options: [
        { value: 'female', key: 'Female' },
        { value: 'male', key: 'Male' },
        { value: 'other', key: 'Other' },
      ],
      required: true,
      value: 'other',
    }),
    new FormSelectInput({
      key: 'select',
      label: 'Select',
      options: [
        { value: 'female', key: 'Female' },
        { value: 'male', key: 'Male' },
        { value: 'other', key: 'Other' },
      ],
      required: true,
      value: 'other',
    }),
    new FormTextareaInput({
      key: 'textarea',
      label: 'Textarea',
      required: true,
      // wrapper: 'ion-item'
    }),
    new FormNumberInput({
      key: 'number',
      label: 'Number',
      required: true,
      min:-1,
      max:10,
      // wrapper: 'ion-item'
    }),
    new FormSwitchInput({
      key: 'switch',
      label: 'Switch',
      required: true,
    }),
    new FormCheckboxInput({
      key: 'checkbox',
      label: 'Checkbox',
      required: true,
      value: true,
    }),
    new FormRangeInput({
      key: 'range',
      label: 'Range',
      min: 0,
      max:10
      //required: true,
    }),
    new FormEmailInput({
      key: 'email',
      label: 'Email',
    }),
    new FormPasswordInput({
      key: 'pasPassword',
      label: 'Password',
    }),
  ];
  testFormButtons = [
    new FormButton({type: 'submit', label:'Submit', size:'sm', disabled:false, loading:false})
  ]
  testFormSubmit($event: any) {
    console.log('submit', { $event });
  }


}
