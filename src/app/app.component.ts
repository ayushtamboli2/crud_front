import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  constructor(private common: CommonService){}
  ngOnInit(){
    if(this.common.isLoggedIn()){
      this.isLogin =this.common.isLoggedIn()
      this.role =this.common.currentUser.Role_Id
    }
  }
  
  isLogin = false;
  role = 1

  logout(){
    this.common.logout();
    location.reload();
  }
}
