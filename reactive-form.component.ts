import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  loginDetails: FormGroup;

  // values = {
  //   email : 'Gaurav@gmail.com',
  //   password: 123456,
  //   address:[{
  //     addressLine1 : 'Abc City',
  //     // addressLine2 : 'Abc State'
  //   }]
  // }

  genders = ['Please Select One', 'Male', 'Female', 'Other'];

  // name = new FormControl('', [Validators.email]);

  constructor(
    private fb : FormBuilder,private router:Router
  ){
    // console.log('Hello World!')
  }

  // this.loginDetails = this.fb.group({
  //   email : new FormControl(''),
  //   password : new FormControl(),
  //   address : new FormGroup({
  //     addressLine1 : new FormControl(''),
  //     addressLine2 : new FormControl('')
  //   }),
  //   gender : new FormControl()
  // })

  ngOnInit(){
    this.createForm();

    // this.setValueFunction()

  }

  emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//pinregex=/^[1-9][0-9]{5}$/;
phoneregex=/^\d{10}$/;;
  createForm(){
    this.loginDetails =  this.fb.group({
    email : ['', [Validators.required, Validators.pattern(this.emailRegex)]],
    password : ['',[Validators.required,Validators.minLength(8)]],
    address : this.fb.array([ this.createFields() ]),
    gender : '',
    phoneno:['',Validators.pattern(this.phoneregex)],
    date:''
    })
  }

  createFields(){
    return this.fb.group({
      addressLine1 :'',
      addressLine2 : '',
      state:'',
      country:'',
      //pincode:['',Validators.pattern(this.pinregex)]

    })
  }

  addNewFields(){
    let arr =  this.loginDetails.get('address') as FormArray;
    arr.push(this.createFields());
  }


  removefield(i){
    let arr =  this.loginDetails.get('address') as FormArray;
    arr.removeAt(i);
  }

  onSubmit(){
    // console.log(this.name.value);
    console.log(this.loginDetails.value);
    //this.loginDetails.reset();
    this.router.navigate(['./login']);
  }

  // setValueFunction(){
  //   this.loginDetails.patchValue(this.values);
  // }

  // ngAfterViewInit(){
  //   this.setValueFunction()
  // }
  submitValue(){
    console.log(this.loginDetails.value)
}
  

}
