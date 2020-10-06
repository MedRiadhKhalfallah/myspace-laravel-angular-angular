import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error = null;
  public basicUrl = "http://localhost:8000";
  public form = {email: null, password: null};

  constructor(private http: HttpClient) {
  }

  onSubmit() {
    return this.http.post(this.basicUrl + "/api/login", this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.error=error.error.error
  }

  ngOnInit(): void {
  }

}
