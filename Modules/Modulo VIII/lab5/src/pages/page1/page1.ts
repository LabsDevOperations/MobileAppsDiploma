import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dialogs, Geolocation } from 'ionic-native';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {
    
  }

  loadConfirm() {
  	console.log('loadConfirm ok')
  	Dialogs.prompt('Estas son las coordenadas de su localización. Desea almacenarlas en Ionic Storage?'
  		,'Dialog', ['Por supuesto!', 'Cancelar'], this.obtenerCoordenadas())
  		.then((options) => this.almacenar(options), (error) => console.log(error));
  }

  almacenar(op){
  	console.log('almacenar ok')
  	if (op == 1)
  	{
  		console.log(op);
  	}
  }

  coordenadaText : string;
  obtenerCoordenadas() : string 
  {
	Geolocation.getCurrentPosition(
		{ enableHighAccuracy: true
		 , maximumAge: 5000 }).then(res => {
      	
      	/*console.log(res.coords);
      let coords = [{
        'longitude' : res.coords.longitude,
        'latitude' : res.coords.latitude
      }];*/
      //this.coordenadaText = 'longitude' + res.coords.longitude + ;
      
    });
	return '18, 25';
  }

}
