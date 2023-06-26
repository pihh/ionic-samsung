import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OuiLayoutComponent } from './layout/oui-layout/oui-layout.component';
import { OuiLayoutViewingComponent } from './layout/oui-layout-viewing/oui-layout-viewing.component';
import { OuiLayoutInteractionComponent } from './layout/oui-layout-interaction/oui-layout-interaction.component';
import { IonicModule } from '@ionic/angular';
import { OuiLayoutHeaderComponent } from './layout/oui-layout-header/oui-layout-header.component';
import { OuiCardComponent } from './card/oui-card/oui-card.component';
import { OuiDialogBaseComponent } from './dialogs/oui-dialog-base/oui-dialog-base.component';
import { OuiModalBaseComponent } from './modal/oui-modal-base/oui-modal-base.component';
import { OuiPopoverBaseComponent } from './popover/oui-popover-base/oui-popover-base.component';

@NgModule({
  declarations: [
    OuiLayoutComponent,
    OuiLayoutViewingComponent,
    OuiLayoutInteractionComponent,
    OuiLayoutHeaderComponent,
    OuiCardComponent,
    OuiDialogBaseComponent,
    OuiModalBaseComponent,
    OuiPopoverBaseComponent
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    OuiLayoutComponent,
    OuiLayoutViewingComponent,
    OuiLayoutInteractionComponent,
    OuiLayoutHeaderComponent,
    OuiCardComponent,
    OuiDialogBaseComponent,
    OuiModalBaseComponent,
    OuiPopoverBaseComponent
  ],
})
export class ComponentsModule {}
