import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutorInt } from 'src/app/services/database.service';
import { DatabaseService } from './../../services/database.service';
import { 
  ModalController,
  AlertController
} from '@ionic/angular';
//#region ModalPages
import { ModalautorPage } from './../../modalautor/modalautor.page';
import { ModallibroPage } from './../../modallibro/modallibro.page';
//#endregion

@Component({
  selector: 'app-autores',
  templateUrl: './autores.page.html',
  styleUrls: ['./autores.page.scss'],
})
export class AutoresPage implements OnInit {

  autores: AutorInt[] = [];
  libros: Observable<any[]>;
  autor={};
  libro={};
  libroUp:any;
  selectedView='autors';

  constructor(
    private db: DatabaseService,
    private activateRoute: ActivatedRoute,
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

ngOnInit() {
    this.db.getDatabaseState().subscribe(
      rdy=>{
        if (rdy) {
          this.db.getAutores().subscribe(autors=>{
            console.log('Iniciando DB', autors);
            this.autores=autors;
          })
          this.libros = this.db.getLibros();
          console.log('Libros',this.libros)
        }
      });
  }
  //#region AUTOR
  // ADD
  addAutorP(){
    this.db.addAutor(this.autor['nombre'], this.autor['genero'], this.autor['img'])
    .then(_=>{
      this.autor = {};
    })
  }
   //Update Detail
   async modalAutor(action, idAutor) {
    await this.db.getAutor(idAutor).then((res)=>
    {
      this.autor=res;
    });
    const modal = await this.modalController.create({
    component: ModalautorPage,
    componentProps: { 
      action: action,
      autor: this.autor
     }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log(dataReturned);
        this.autor={};
        //this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
    await modal.present();
  
  }

  // Delete
  async deleteAutor(idAutor) {
    const alert = await this.alertController.create({
      header: 'Esta Seguro de Eliminar?',
      message: 'La Accion no se puede deshacer',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Eliminar Autor Cancelado');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Eliminando Autor');
            this.db.deleteAutor(idAutor).then(_=>{
              console.log('Autor Eliminado');
            })
          }
        }
      ]
    });
  
    await alert.present();
  }
  //#endregion

  //#region LIBRO
  // ADD
  addLibroP(){
    this.db.addLibro(this.libro['titulo'], this.libro['autorId'])
    .then(_ =>{
      this.libro={};
      console.log('Libro Añadido');
    })
  }
  // EDIT
  async modalLibro(idLibro) {
    await this.db.getLibro(idLibro).then((res)=>{
      this.libroUp=res;
    });
    await console.log('libro Actulizado',this.libroUp)
    const modal = await this.modalController.create({
    component: ModallibroPage,
    componentProps: { 
      libro: this.libroUp,
      autores: this.autores 
    }
    });
    modal.onDidDismiss().then((dataReturned)=>{
      if (dataReturned!=null) {
          console.log(dataReturned);
      }
    });
  
    await modal.present();
  
  }

  // DELETE
   // Delete
   async deleteLibro(idLibro) {
    const alert = await this.alertController.create({
      header: 'Esta Seguro de Eliminar?',
      message: 'La Accion no se puede deshacer',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Eliminar libro Cancelado');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Eliminando libro');
            this.db.deleteLibro(idLibro).then(_=>{
              console.log('libro Eliminado');
            })
          }
        }
      ]
    });
  
    await alert.present();
  }


  //#endregion

 

}
