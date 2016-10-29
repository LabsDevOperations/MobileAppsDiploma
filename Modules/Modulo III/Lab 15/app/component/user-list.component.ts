import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

/*export const USERS: User[] = [
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
]*/

@Component({ /* metadata */
	selector: 'user-list-app',
	templateUrl: 'app/templates/user-list.html',
    providers: [UserService]
})

export class UserListComponent implements OnInit {
	title: string = "Users";
    users: User[];

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.userService.getUsers()
        .then(users => this.users = users)
        .catch(error => console.log(error));
    }

    onSelect(user: User) {
        this.selected = user;
    }
}