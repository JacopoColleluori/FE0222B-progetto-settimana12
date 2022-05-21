import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private authSrv:AuthService) { }

  ngOnInit(): void {
  }
 async register(form:NgForm){
  await this.authSrv.signUp(form.value).toPromise()
  this.router.navigate(['/login'])
}
}
