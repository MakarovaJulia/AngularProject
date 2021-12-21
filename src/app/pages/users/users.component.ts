import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User, UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {

  usersList: Array<User> = this.userService.usersList;

  constructor(
    private userService: UsersService
  ) {
  }

  ngOnInit(): void {
  }

}

