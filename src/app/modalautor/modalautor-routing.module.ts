import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalautorPage } from './modalautor.page';

const routes: Routes = [
  {
    path: '',
    component: ModalautorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalautorPageRoutingModule {}
