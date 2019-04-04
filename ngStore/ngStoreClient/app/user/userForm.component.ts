import { Component, OnInit } from "@angular/core";

import { User } from './user';
import { UserService } from '../services/userService';

@Component({
    selector: "user",
    templateUrl: "userForm.component.html",
    styleUrls: [],
})
export class UserForm implements OnInit {

    private title: string;
    private userId: string;
    public user: User = new User();

    constructor(private userService: UserService) {
        this.title = "User";
        this.userId = localStorage.getItem("userId");
    }

    ngOnInit() {
        if (this.userId != "0") {
            this.userService.getUser(this.userId)
                .subscribe(success => {
                    if (success) {
                        this.user = this.userService.user;
                    }
                });
        }
    }
}
