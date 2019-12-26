import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {


  users: User [];

  constructor(private userservice: UserService) {
this.userservice.getAll().subscribe((data: User[]) => {

      this.users = data;

    });


   }

  ngOnInit() {

  }

  changeRol() {

  }

}
