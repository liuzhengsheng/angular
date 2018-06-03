import { Component, OnInit, Output } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demographics-pl',
  templateUrl: './demographics-pl.component.html',
  styleUrls: ['./demographics-pl.component.css']
})
export class DemographicsPLComponent implements OnInit {
  private myForm:  FormGroup;
  required:boolean=false;
  constructor(private fb: FormBuilder,private router:Router) {
    this.createForm();
  }
    ngOnInit() {
    }
    createForm(){
      this.myForm = this.fb.group(
        this.mandatoryFields
      )
    }
    mandatoryFields = {
        prefix:['',[Validators.required]],
        sex:['',[Validators.required]]
    }
    save(){
      if(!this.myForm.valid){
        let fields = this.myForm.value;
        let str = "";
        for(let key in fields){
          console.log("key::"+key+"::value::"+fields[key]);
          if(fields[key]==""){
              if(str!=""){
                str = str + "," + key;
              }else{
                str = str + key;
              }
            }  
        }
        alert(str+' is mandatory');
        console.log(this.myForm.value);
        console.log("notgood");
      }else{
        console.log("good");
      }
    }
    next(){
      console.log("clicknext");
      if(this.myForm.valid){
        console.log("ok");
        this.router.navigate(['creditprocessing']);
      }
    }
}
