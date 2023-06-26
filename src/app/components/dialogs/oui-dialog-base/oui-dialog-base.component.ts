import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-oui-dialog-base',
  templateUrl: './oui-dialog-base.component.html',
  styleUrls: ['./oui-dialog-base.component.scss'],
})
export class OuiDialogBaseComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss({}, 'confirm');
  }

  ngOnInit() {}

}
