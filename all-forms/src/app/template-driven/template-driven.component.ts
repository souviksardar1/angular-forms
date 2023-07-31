import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  @ViewChild('fData') dataFromForm : NgForm;
  dataInForm = {
    mailId : '',
    adrs : '',
    cty : '',
    state : ''
  }
  // FormDataSubmit(data : NgForm){
  // }
  FormDataSubmit(){
    // console.log(this.dataFromForm);
    this.dataInForm.mailId = this.dataFromForm.value.email;
    this.dataInForm.adrs = this.dataFromForm.value.address;
    this.dataInForm.cty = this.dataFromForm.value.city;
    this.dataInForm.state = this.dataFromForm.value.state;

    this.dataFromForm.reset();
  }
  
}
