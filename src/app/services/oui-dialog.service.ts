import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OuiDialogBaseComponent } from '../components/dialogs/oui-dialog-base/oui-dialog-base.component';

const BASE_OPTIONS = {
  buttons: {
    confirm: {
      show:true,
      text: 'Confirm',
    },
    cancel: {
      show:true,
      text: 'Cancel'
    }
  }
}
@Injectable({
  providedIn: 'root'
})
export class OuiDialogService {

  constructor(private modalCtrl: ModalController) { }

  async open(template:any, options:any = BASE_OPTIONS) {
    const modal = await this.modalCtrl.create({
      component: OuiDialogBaseComponent,
      cssClass: 'oui-dialog-modal-wrapper'
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    // if (role === 'confirm') {
    //   this.message = `Hello, ${data}!`;
    // }
    return {data,role}
  }
}
