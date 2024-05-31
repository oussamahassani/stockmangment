import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'app/service/auth-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  submitted = false;
  userForm;
  hide = true;
  constructor(private authServices: AuthServiceService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      telp: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      roleUser: new FormControl('', [Validators.required]),
    });
  }

  save() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }

    console.log('ok');
    if (this.userForm.value.roleUser) {
      this.userForm.value.roles = [this.userForm.value.roleUser]
    }
    this.authServices.addUser(this.userForm.value);

  }
}
