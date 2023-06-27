import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VanillaPageRoutingModule } from './vanilla-routing.module';

import { VanillaPage } from './vanilla.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VanillaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VanillaPage]
})
export class VanillaPageModule {}
