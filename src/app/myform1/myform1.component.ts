import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Imyform1 } from '../imyform1';
import { Myform1serviceService } from './myform1service.service';


@Component({
  selector: 'app-myform1',
  templateUrl: './myform1.component.html',
  styleUrls: ['./myform1.component.css']
})
export class Myform1Component implements OnInit {

  myform: Imyform1={

    name: '',
    ageValidate: false,
    plans: '',
    notes:''

  };

  myformdefault: Imyform1={
    ...this.myform
  }
  constructor(private myform1service:Myform1serviceService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){

    console.log('in onSubmit: ', form.valid)
    this.myform1service.postmyform1(this.myform).subscribe(
     result =>console.log('Success: ', result)
    
     );
}
}
