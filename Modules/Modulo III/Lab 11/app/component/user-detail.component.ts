import { Component, Input } from '@angular/core'; /* Input: decorador para injection en template */
import { User } from '../model/user';

@Component({ /* metadata */
	selector: 'user-detail',
	templateUrl: 'app/templates/user-detail.html'
})

export class UserDetailComponent {
	@Input() /* decorador para injection en template */
	user: User;
}