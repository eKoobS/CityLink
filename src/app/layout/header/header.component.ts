import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared/services/shared.service";
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.scss'
    ]
})
export class HeaderComponent implements OnInit {
    messagesData: Array<any>;
    tasksData: Array<any>;
    maThemeModel: string = 'green';
    showMenu:boolean=false;
    userEmail:string;
    userName:string;
    userPhoto:string;
    existPhoto:boolean=false;

    constructor(private sharedService: SharedService,
                private afAuth: AngularFireAuth) {
        this.getUserData();
    }

    setTheme() {
        this.sharedService.setTheme(this.maThemeModel)
    }
    getUserData(){
        this.afAuth.auth.onAuthStateChanged((user)=>{
            this.userEmail=user.email;
            this.userName=user.displayName;
            this.userPhoto=user.photoURL;
            console.log(this.userPhoto)
        })
    }
    userSignOut() {
        this.afAuth.auth.signOut();
        window.location.href = '#/login';
    }

    ngOnInit() {
    }
}
