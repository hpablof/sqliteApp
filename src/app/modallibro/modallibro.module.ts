import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModallibroPageRoutingModule } from './modallibro-routing.module';

import { ModallibroPage } from './modallibro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModallibroPageRoutingModule
  ],
  declarations: [ModallibroPage]
})
export class ModallibroPageModule {}
