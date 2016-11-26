import { Component } from '@angular/core';
import { Dialogs } from 'ionic-native'; // modulo de los dialogos
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  loadAlert() {  // informativo 
    // parametros mensaje, titulo, boton
    Dialogs.alert('este es un mensaje con ventana nativa', 'Alert!', 'Entendido');
  }

  loadConfirm() {
    // parametros mensaje, titulo, arreglo de strings botones 2 a 3 max
    Dialogs.confirm('Mensaje que requiere confirmacion', 'COnfirm', ['Entendido', 'Cancelar'])
      .then((options) => console.log(options), (error) => console.log(error));

      // options: info del boton: pe. indice  boton
  }

  loadPrompt() {
    // parametros: mensaje, titulo, botones, place holder
    Dialogs.prompt('Ventana con prompt', 'Prompt', ['Aceptar', 'Cancelar'], 'Ingrese id')
      .then(results => console.log(results.buttonIndex
                                  , results.input1)
            , error => console.log(error));
  }
}
