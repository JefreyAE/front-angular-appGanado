import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ UserService]
})
export class LoginComponent implements OnInit {

  @Output() logedEmitter = new EventEmitter<string>();

  public user = new User("","","");
  public message: string = "";

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    
  }

  login(form:any){
    this._userService.login(this.user).subscribe(
      result =>{
        console.log(result);
        if(result.status == "error"){
          this._router.navigate(['/']);
          this.message = result.message;
        }else{
          sessionStorage.setItem('token', result);
          this._router.navigate(['/main/index']);
        }
      },
      error => {
        console.log("Error");
        this._router.navigate(['/']);
      }
    );
    form.reset();
    //console.log(this.loged);

   // this.logedEmitter.emit(this.loged);

  }

  

}
