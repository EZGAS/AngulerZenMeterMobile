import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-index',
  templateUrl: './login-index.component.html',
  styleUrls: ['./login-index.component.css']
})
export class LoginIndexComponent implements OnInit {
  data = {
    Account: '',
    Password: ''
  }
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  login(): void {
    this.http.post<any>(environment.apiurl + "login", this.data).subscribe(x => {

      if (x.Result) {
        sessionStorage.setItem('user_name', x.name);
        sessionStorage.setItem('user_id', x.id);
        sessionStorage.setItem('reporttime', x.reporttime);
        sessionStorage.setItem('role', x.role);
        sessionStorage.setItem('token', x.token);
        sessionStorage.setItem('refreshToken', x.refreshToken);
        this.router.navigate(['main/zentable']);
      }
      else {
        alert("登入失敗")
      }
    })

  }
}
