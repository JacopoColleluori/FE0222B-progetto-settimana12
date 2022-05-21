import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataAuth } from 'src/app/models/dataauth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
 user$=this.authSrv.userControl$;
  constructor(private authSrv: AuthService, private router: Router) {}

  async submit(form: NgForm) {
    console.log(form.value);
    await this.authSrv.login(form.value).toPromise();
    this.router.navigate(['/']);
    // form.reset();
  }
register(){
this.router.navigate(['/register'])
}

  ngOnInit(): void {}
}
