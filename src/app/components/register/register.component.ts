import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials={
    username:'',
    password:'',
    fullname:'',
    email:''
  }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    
    if((this.credentials.username!='' && this.credentials.password!='')&& (this.credentials.username!=null && this.credentials.password!=null))
    {
     console.log("we have to submit the form to server");
     
    }else{
      console.log("fields are empty");
      
    }
    
  }
}
