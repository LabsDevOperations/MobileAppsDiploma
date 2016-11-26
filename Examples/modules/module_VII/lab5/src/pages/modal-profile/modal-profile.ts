import { Component } from '@angular/core';
import { ViewController, NavParams  } from 'ionic-angular';

@Component({
  selector: 'page-modal-profile',
  templateUrl: 'modal-profile.html'
})
export class ModalProfilePage {

  constructor(public viewCtrl: ViewController, public paramsCtrl: NavParams ) {
      console.log('UserId', this.paramsCtrl.get('userId'));
  }

  /*
  * La clase ViewController tiene varios metodos que tienen interacción
  * con el componente activo
  * */
  dismiss() {
    let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
  }

}
