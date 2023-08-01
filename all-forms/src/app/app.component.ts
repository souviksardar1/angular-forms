import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  templateFormLoaded : boolean = false;
  reactiveFormLoaded : boolean = false;

  LoadTemplateDrivenForm(){
      this.templateFormLoaded = true;
      this.reactiveFormLoaded = false;
  }

  LoadReactiveForm(){
      this.reactiveFormLoaded = true;
      this.templateFormLoaded = false;
  }
}

