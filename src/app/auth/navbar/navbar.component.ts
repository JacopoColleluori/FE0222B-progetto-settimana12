import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authSRV:AuthService) { }

  ngOnInit(): void {
  }
 logout(){
 this.authSRV.logout();
 window.location.reload()
 }
}
