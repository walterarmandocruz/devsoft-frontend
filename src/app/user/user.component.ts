import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any[] = [];
  displayedColumns: string[] = ['id', 'lastname', 'firstname', 'username'];

  constructor(private userService: UserService) {
    this.userService.list().subscribe((resp: any) => {
      this.users = resp;
    });
  }

  ngOnInit(): void {
  }


}
