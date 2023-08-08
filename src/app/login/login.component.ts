import { Component } from '@angular/core';
import { GlobalServiceService } from '../service/global-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   isButtonVisible = true;
  constructor(private globalServiceService: GlobalServiceService,private router: Router) {
    }
  login(username:any,password:any){
    this.globalServiceService.GETRecord("api/Login?uname="+username+"&password="+password).subscribe(
      (response) => {
        if(response.userId>0){
          this.router.navigate(['/dashboard']);
        }
        console.log(response);
      }
  );
  }

  signup(username:any,password:any){
    this.globalServiceService.GETRecord("api/SignUp?uname="+username+"&password="+password).subscribe(
      (response) => {
        this.isButtonVisible = true;
        console.log(response);
      }
  );
  }
}
