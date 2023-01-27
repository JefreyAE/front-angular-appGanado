import { Component, ViewChild, AfterContentInit} from '@angular/core';
import { User } from './models/user';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(LoginComponent) loged = false; 

  public login: boolean;
  public token: string = "";

  constructor(){
    this.login = false;
  }

  ngOnInit(): void {
    const token = sessionStorage.getItem('token');
  }

  title = 'Proyecto-base';

  logedMessage($event: any){
    this.login = $event;
    console.log($event);
  }
}
