import { Component } from '@angular/core';
import { Ride } from './model/ride'; /* modelo - clase*/


@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/taximeter.html'
})  /* no puedo colocar el componente debajo de un export class comentariado */



export class AppComponent {

  title : string = "TAXIMETER";
  taximeter: Ride = {
      units: 50,
      festives: 0,
      airport: 0,
      app: 0,
      default: 4100,
      total: 0
  }

  onSelect(option: string, taximeter: Ride) {
    switch (option) {
      case "festives":
        if (taximeter.festives === 0)
          taximeter.festives = 1900;
        break;
      case "airport":
        if (taximeter.airport === 0)
          taximeter.airport = 3900;
        break;
      case "app":
        if (taximeter.app === 0)
          taximeter.app = 1700;
        break;
      default:
        // code...
        break;
    }

    
  }

  onPay(taximeter: Ride)
  {
    if (taximeter.units <= 50)
      taximeter.total = taximeter.default;
    else
    {
      taximeter.total = ((taximeter.default * taximeter.units) / 50)
    }

    taximeter.total = taximeter.total + taximeter.festives + taximeter.airport + taximeter.app;  
  }
}
