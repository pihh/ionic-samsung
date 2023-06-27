import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VanillaPage } from './vanilla.page';

const routes: Routes = [
  {
    path: '',
    component: VanillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VanillaPageRoutingModule {}
