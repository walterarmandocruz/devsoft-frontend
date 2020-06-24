import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private loginService: LoginService, public router: Router) { }

  ngOnInit(): void {
  }

  login(f: NgForm){
    if (!f.form.valid) {
      f.control.markAllAsTouched();
      console.log("No es valido");
      return;
    }

    this.loginService.login(f.form.value.username, f.form.value.password).subscribe((resp: any) => {
      console.log(resp);
      this.router.navigate(['/user']);
    });
  }
}
