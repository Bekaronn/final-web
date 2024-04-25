import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-register',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterLink,
        HttpClientModule
    ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user = {
    username: '',
    password: '',
  };
  submitted = false;
  //
  // constructor(private userService: UserService) { }
  //
  // onSubmit() {
  //   this.userService.registerUser(this.user).subscribe(
  //     response => {
  //       console.log(response);
  //       this.submitted = true;
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   );
  // }

  onSubmit(){

  }
}
