import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { UserEmailService } from 'src/app/services/user-email.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  inputForm!: FormGroup;

  constructor(private fb: FormBuilder, private userApi: UserEmailService) {}

  ngOnInit(): void {
    this.inputForm = this.fb.group({
      emailFormControl: ['', Validators.required],
    });
  }

  submitForm() {
    this.userApi.postData(this.inputForm.value).subscribe({
      next: (res) => {
        console.log('Email is: ', res);
        this.inputForm.reset();
      },
      error(err) {
        console.log('Error Submitting Form ', err);
      },
    });
  }
}
