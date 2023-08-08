import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GlobalServiceService } from '../service/global-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-master',
  templateUrl: './question-master.component.html',
  styleUrls: ['./question-master.component.css']
})
export class QuestionMasterComponent implements OnInit {
  AddForm: FormGroup;  ///Form Define
  questiondataList: Array<any> = []; //record Array
  deptdataList: Array<any> = []; 

  constructor(private globalServiceService: GlobalServiceService,  //global service object
    private eRef: ElementRef, private router: Router) {
    this.AddForm = new FormGroup({  // form object init
      deptId:new FormControl(1),
      qName: new FormControl(''),
      hindi: new FormControl(''),
      regional: new FormControl(''),
      english: new FormControl('')
     
    })
  }
  
       
  ngOnInit(): void {
   this.getDepatmentList();
    this.getAllRecord(1);
  }
  getAllRecord(deptId : any){
  this.globalServiceService.GETRecord("api/Question").subscribe(
      (response) => {
        console.log(response);
        this.questiondataList = response;
      }
  );
    }
  getDepatmentList() {
    this.globalServiceService.GETRecord("api/Department").subscribe(
      (response) => {
        console.log(response);
        this.deptdataList = response;
      }
    );
  }
 
  // update methode call post in global service
  onUpdate() {
    this.globalServiceService.POSTRecord(JSON.stringify(this.AddForm.value), "api/Question").subscribe(response => {
      console.log(response);
      this.getAllRecord(1);
      alert();
    });
  }

  onSubmit() {  // on save ca.ll this methode
    // focus invalid countrol 
    for (const key of Object.keys(this.AddForm.controls)) {
      if (this.AddForm.controls[key].invalid) {
        const invalidControl = this.eRef.nativeElement.querySelector('[formcontrolname="' + key + '"]');
        invalidControl.focus();
        break;
      }
    } 
    // call Postmetode from global service
    this.globalServiceService.POSTRecord(JSON.stringify(this.AddForm.value), "api/Question").subscribe(response => {
      console.log(response);
     this.getDepatmentList();  // call table record again
    });
  }

  onEdit(singleObject: any) {
    console.log(singleObject);
    this.AddForm = new FormGroup({
      qName: new FormControl(singleObject.qName),
      deptId:new FormControl(singleObject.deptId)
  });
  }
 
  //reset record
  resetForm() {
    this.AddForm.reset();
    

  }


  //rought to other component
  closeForm() {
    this.router.navigate(['/dashboard']);
  }




}
