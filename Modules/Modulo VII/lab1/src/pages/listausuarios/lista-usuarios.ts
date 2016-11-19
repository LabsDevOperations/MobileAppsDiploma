import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ListaUsuarios page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-lista-usuarios',
  templateUrl: 'lista-usuarios.html'
})
export class ListaUsuarios {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ListaUsuariosPage Page');
  }

}
