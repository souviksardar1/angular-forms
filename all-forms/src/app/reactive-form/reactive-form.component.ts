import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
   
    myForm  : FormGroup;

    ngOnInit(): void {
      this.myForm = new FormGroup({
          'username' : new FormControl(null, Validators.required), // default value can be set here
          'password' : new FormControl(null),
          'email' : new FormControl(null, [Validators.required, Validators.email]),
          'gender' : new FormControl('male')
      });
    }

    SubmitReactiveForm(){
      console.log(this.myForm);
      console.log(this.myForm.get('email')?.value);
    }
}
