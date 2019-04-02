import { Component, OnInit } from "@angular/core";

import { User } from './user';
import { UserService } from '../services/userService';

@Component({
    selector: "user-list",
    templateUrl: "userList.component.html",
    styleUrls: [],
})
export class UserList implements OnInit {

    public users: User[] = [];

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userService.getUsers()
            .subscribe(success => {
                if (success) {
                    this.users = this.userService.users;
                }
            });

    }
}
