import { Component, Renderer2, ViewChild } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { OuiDialogService } from '../services/oui-dialog.service';
import { OuiModalService } from '../services/oui-modal.service';
import { OuiPopoverBaseComponent } from '../components/popover/oui-popover-base/oui-popover-base.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    public dialogService: OuiDialogService,
    public modalService: OuiModalService,
    public popoverController: PopoverController,
    public menuController: MenuController
  ) {}

  onHeaderButtonClick($event: any) {
    console.log('onHeaderButtonClick', $event);
    if ($event.name == 'add') {
      this.onHeaderButtonClickAdd();
    } else if ($event.name == 'search') {
      this.onHeaderButtonClickSearch();
    } else if ($event.name == 'ellipsis') {
      this.onHeaderButtonClickEllipsis($event);
    }else{
      this.onHeaderButtonClickMenu($event)
    }
  }

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
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log(role);
  }

  async onHeaderButtonClickMenu(e:any){
    console.log(this.menuController)
    this.menuController.open()
  }
}

/*
 0.1 -> 1
 0.5 -> 0
*/
