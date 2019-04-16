import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { User } from './user';
import { UserService } from '../services/userService';

@Component({
    selector: "user-list",
    templateUrl: "userList.component.html",
    styleUrls: [],
})
export class UserList implements OnInit {

    private title: string;
    private errorMessage: string = "";
    public users: User[] = [];

    constructor(private userService: UserService, private router: Router) {
        this.title = "Users";
    }

    ngOnInit() {
        this.userService.getUsers()
            .subscribe(success => {
                if (success) {
                    this.users = this.userService.users;
                }
            });

    }

    addUser() {
        localStorage.setItem('userId', "0");
        this.router.navigate(["User/0"]);
    }

    editUser(user: User) {
        localStorage.setItem('userId', JSON.stringify(user.id));
        this.router.navigate(["User/" + user.id]);
    }

    deleteUser(user: User) {
        this.userService.deleteUser(user)
            .subscribe(success => {
                if (success) {
                    this.users.forEach((u, index) => {
                        if (u === user) this.users.splice(index, 1);
                    });
                }
            }, err => this.errorMessage = "Failed to delete supplier");
    }
}
