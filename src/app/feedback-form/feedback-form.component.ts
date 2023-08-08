import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GlobalServiceService } from '../service/global-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  AddForm: FormGroup;  ///Form Define
  questiondataList: Array<any> = []; //record Array
  ansList : Array<any> = [];
  answersMap = new Map();
  deptdataList: Array<any> = [];
  selectedLanguageEnglish = true;
  selectedLanguagehindi = false;
  selectedLanguagereginal = false;
  constructor(private globalServiceService: GlobalServiceService,  //global service object
    private eRef: ElementRef, private router: Router) {
    this.AddForm = new FormGroup({  // form object init
      qName: new FormControl(''),
      deptId:new FormControl(0)
    })
  }

  ngOnInit(): void {
    this.getQuestionList();
    this.getDepatmentList();
  }
  getQuestionList() {
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
  onSubmit() {  // on save ca.ll this methode
    // focus invalid countrol 
    for (const key of Object.keys(this.AddForm.controls)) {
      if (this.AddForm.controls[key].invalid) {
        const invalidControl = this.eRef.nativeElement.querySelector('[formcontrolname="' + key + '"]');
        invalidControl.focus();
        break;
      }
    } 

  }
    saveRemark(questionId: number, remark: string): void {
      var answer = this.answersMap.get(questionId);
      answer.remark = remark;
      console.log("remark: ", this.answersMap.get(questionId))
    }
  
    selectedRemark(index:any,note:any){
      console.log(this.ansList.find(x=>x.deptQuestId == index))
      if(this.ansList.find(x=>x.deptQuestId == index) != undefined){
        if(note !="" && note != undefined){
          this.ansList.map((todo, i) => {
            if (todo.deptQuestId ==  index){
                this.ansList[i].remark = note;
              }
            });
        } 
      }else{
        this.ansList.push({
          "deptQuestId":index,"rating":"","remark":note,userId:1,deptId:0
        });
      }
   console.log(this.ansList);
    }

    selectedAns(index:any,option:any){
      console.log(this.ansList.find(x=>x.deptQuestId == index))
      if(this.ansList.find(x=>x.deptQuestId == index) != undefined){
            if(option !="" && option != undefined){
              this.ansList.map((todo, i) => {
                if (todo.deptQuestId ==  index){
                    this.ansList[i].rating = option;
                  }
                });
            } 
       }else{
         this.ansList.push({
           "deptQuestId":index,"rating":option,"remark":"",userId:1,deptId:0
         });
       }
       console.log(this.ansList);
     }

     saveAnswers(){
      this.globalServiceService.POSTRecord(JSON.stringify(this.ansList), "api/Answer").subscribe(response => {
            console.log(response);
          });



     }
    // call Postmetode from global service
  //   this.globalServiceService.POSTRecord(JSON.stringify(this.AddForm.value), "api/Question").subscribe(response => {
  //     console.log(response);
  //    // call table record again
  //   });
  // }
  //reset record
  // resetForm() {
  //   this.AddForm.reset();
  // }
  //rought to other component
  // closeForm() {
  //   this.router.navigate(['/dashboard']);
  // }

  languageChange(id:any){
    if(id == 1){
      this.selectedLanguageEnglish = true;
      this.selectedLanguagehindi = false;
      this.selectedLanguagereginal = false;
    }
    if(id == 2){
      this.selectedLanguageEnglish = false;
      this.selectedLanguagehindi = true;
      this.selectedLanguagereginal = false;
    }
    if(id == 3){
      this.selectedLanguageEnglish = false;
      this.selectedLanguagehindi = false;
      this.selectedLanguagereginal = true;
    }
   }




}
