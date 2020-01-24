import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalautorPageRoutingModule } from './modalautor-routing.module';

import { ModalautorPage } from './modalautor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalautorPageRoutingModule
  ],
  declarations: [ModalautorPage]
})
export class ModalautorPageModule {}
