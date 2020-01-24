import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AutorInt } from 'src/app/services/database.service';
import { DatabaseService} from './../services/database.service';
@Component({
  selector: 'app-modalautor',
  templateUrl: './modalautor.page.html',
  styleUrls: ['./modalautor.page.scss'],
})
export class ModalautorPage implements OnInit {

  sectionEditAutor:boolean;
  sectionDetailAutor:boolean;

  autor: AutorInt;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private db: DatabaseService,

  ) { }

  ngOnInit() {
    console.table(this.navParams)
    this.sectionEditAutor=(this.navParams.data.action=='edit')?true:false;
    this.sectionDetailAutor=(this.navParams.data.action=='detail')?true:false;

    let paramAutor=this.navParams.data.autor;
    this.autor.id=paramAutor.id;
    this.autor.nombre=paramAutor.nombre;
    this.autor.genero=paramAutor.genero;
    this.autor.img=paramAutor.img;
  }

  updateAutor(){
    this.db.updateAutor(this.autor).then(_=>{
      this.closeModal();
    });
  }
  async closeModal(){
    const onClosedData: string ="Cerrando modal!!";
    await this.modalController.dismiss(onClosedData);
  }

}
