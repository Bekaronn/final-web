import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  username: string;
  password: string;
  logged: boolean;
  constructor(private loginService: LoginService, private router: Router) { }
  ngOnInit(): void {
    const access = localStorage.getItem("access")
    if(access){
      this.logged = true
    }
  }
  login(){
    this.loginService.login(this.username, this.password).subscribe(
      (data)=> {
        this.logged = true;
        localStorage.setItem("access", data.access)
        localStorage.setItem("refresh", data.refresh)
        this.router.navigate(['/home']);
      }
    )
  }
}
