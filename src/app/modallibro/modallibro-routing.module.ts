import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModallibroPage } from './modallibro.page';

const routes: Routes = [
  {
    path: '',
    component: ModallibroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModallibroPageRoutingModule {}
