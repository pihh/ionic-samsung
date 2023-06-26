import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-oui-modal-base',
  templateUrl: './oui-modal-base.component.html',
  styleUrls: ['./oui-modal-base.component.scss'],
})
export class OuiModalBaseComponent  implements OnInit {
  @ViewChild('focusInput') focusInput: any;
  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss({}, 'confirm');
  }

  ngOnInit() {}

  ionViewDidEnter(){
    console.log(this.focusInput,'did enter')
    this.focusInput.el.querySelector('input').focus();
  }
}
