import { Component } from '@angular/core';
import { IUser } from 'src/app/models/user.model';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  userModel: IUser = {};

  constructor() {
    // this.userModel={
    //   firstName:'',
    //   email:'',
    //   mobile:999999,
    //   password:'123456',
    // }
  }
onSubmitHandler(){
  console.log(this.userModel);
}

}
