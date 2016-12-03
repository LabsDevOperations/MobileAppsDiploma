import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Dialogs, Geolocation } from 'ionic-native';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController, public storage: Storage) {
    
  }

  

  private setDataCoords: any = {latitude: '', longitude: ''};
  data: any = {latitude: '', longitude: ''};
  coordenadaText : string;

  loadConfirm() {
    this.obtenerCoordenadas();
    console.log('loadConfirm ok')
    
  }

  almacenar(op){
    console.log('almacenar ok')
    if (op == 1)
    {
      console.log(this.setDataCoords);
      this.storage.set("coords", this.setDataCoords);
    } else 
    {
      this.storage.get("coords").then(res => {
      console.log(res); 
    });  
    }
  }

  obtenerCoordenadas() : void  
  {
    Geolocation.getCurrentPosition(
  	{ enableHighAccuracy: true
      , timeout: 10000000
  	 , maximumAge: 50000 }).then(res => {
      	
      	console.log(res.coords);

        this.setDataCoords.latitude = res.coords.latitude;
        this.setDataCoords.longitude = res.coords.longitude;

     
      Dialogs.confirm('Estas son las coordenadas de su localización: ' +
       'longitude: ' + res.coords.longitude.toString() + 
                            ' latitude: ' + res.coords.latitude.toString() +
      ' Desea almacenarlas en Ionic Storage?'
      ,'Dialog', ['Por supuesto!', 'Cancelar'])
      .then((options) => this.almacenar(options), (error) => console.log(error));

      
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    console.log('obteniendo coordenadas');
	  //return this.coordenadaText;
  }

}
