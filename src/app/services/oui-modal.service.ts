import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OuiModalBaseComponent } from '../components/modal/oui-modal-base/oui-modal-base.component';
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
export class OuiModalService {

  constructor(private modalCtrl: ModalController) { }

  async open(template:any, options:any = BASE_OPTIONS) {
    const modal = await this.modalCtrl.create({
      component: OuiModalBaseComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    // if (role === 'confirm') {
    //   this.message = `Hello, ${data}!`;
    // }
    return {data,role}
  }
}
