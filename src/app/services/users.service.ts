import { Injectable } from '@angular/core';


export interface User {
  id: number;
  name: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersList: User[] = [
    {
      id: 1,
      name: 'User 1',
      isActive: true,
    },
    {
      id: 2,
      name: 'User 2',
      isActive: true,
    },
    {
      id: 3,
      name: 'User 3',
      isActive: true,
    },
    {
      id: 4,
      name: 'User 4',
      isActive: true,
    },
  ];

  getUserById(id: number): User {
    return <User>this.usersList.find(user => user.id === id);
  }

  constructor() {
  }
}
