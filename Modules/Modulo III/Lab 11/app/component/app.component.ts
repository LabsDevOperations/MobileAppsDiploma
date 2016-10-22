import { Component } from '@angular/core';
import { User } from '../model/user';


/*

@Component({
  selector: 'my-app',
  template: '<h1>{{user.id}}</h1><br />' + 
        '<h2>{{user.name}}</h2><br />' +
        '<h2>{{user.address}}</h2><br />' +
        '<h2>{{user.phone}}</h2><br />' 
})
*/
@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/user.html'
})  /* no puedo colocar el componente debajo de un export class comentariado */

/*
export class AppComponent {
  user: User = {
    id: 1,
    name: "Emilio Calapiña",
    address: "Av siempre viva",
    phone: 6859688
  }
}
*/



export class AppComponent {

  title = "Mi agenda";
  users: User[] = USERS;
  selected: User;

  onSelect(user: User) {
    this.selected = user;
  }
}

const USERS: User[] = [
    {
        id: 1,
        name: "Emilio Calapiña",
        address: "Av siempre viva",
        phone: 6859688
    },
    {
        id: 2,
        name: "Angelica Uzurriaga",
        address: "Green Village",
        phone: 9856598
    },
    {
        id: 3,
        name: "Tomas Lopez",
        address: "Av siempre viva",
        phone: 6859688
    }
];