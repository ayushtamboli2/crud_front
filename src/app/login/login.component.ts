import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fB: FormBuilder, private common: CommonService, private router: Router) { }

  loginForm: FormGroup = this.fB.group({
    email: [''],
    password: ['']
  })

  ngOnInit(): void {
  }

  messagePrint: any;

  login() {
    // console.log(this.loginForm.value)
    this.common.login(this.loginForm.value).subscribe((res:any) => {
      if (res.success) {
        let role = this.common.currentUser.Role_Id;
        switch (role) {
          case 0: {
            this.router.navigate(['/crud/read'])
            break;
          }

          case 1: {
            this.router.navigate(['/home'])
            break;
          }

          default: this.router.navigate(['/login'])

        }
      } else {
        this.messagePrint = "Incorrect User Id or Password"
        this.loginForm.reset();
      }
    })
  }




}
