import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form = {
    nom: null,
    prenom: null,
    email: null,
    password: null,
    confirmPassword: null,
  };
  public error = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
  }
}
