import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userMail!:any;
  userName!:any;
  constructor(private authSrv:AuthService) { }

  ngOnInit(): void {
  this.authSrv.userControl$.subscribe(r=>{
  this.userMail=r?.user.email;
  this.userName=r?.user.name;
    }
    )
  }

}
