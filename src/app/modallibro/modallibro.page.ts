import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AutorInt } from 'src/app/services/database.service';
import { DatabaseService} from './../services/database.service';


@Component({
  selector: 'app-modallibro',
  templateUrl: './modallibro.page.html',
  styleUrls: ['./modallibro.page.scss'],
})
export class ModallibroPage implements OnInit {

  autores:AutorInt[]=[];
  libro:any;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private db: DatabaseService,
  ) { 


  }

  ngOnInit() {
    this.libro=this.navParams.data.libro;
    this.autores=this.navParams.data.autores;
  }

  updateLibro(){
    this.db.updateLibro(this.libro).then(_=>{
      this.closeModal();
    })
  }

  async closeModal(){
    const onClosedData: string ="Cerrando modal!!";
    await this.modalController.dismiss(onClosedData);
  }
}
