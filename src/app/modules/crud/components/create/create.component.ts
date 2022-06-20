import { CommonService } from './../../../../common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; //for activated router

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private common: CommonService, private router: ActivatedRoute) { }

  formData: FormGroup = this.formBuilder.group({
    name: [''],
    email: [''],
    password: ['']
  })

  storeId:any; //for store comming params id with update router link

  ngOnInit(): void {
    this.storeId = this.router.snapshot.paramMap.get('id');
    if(this.storeId){
      this.common.getFunction('users/get/'+ this.storeId).subscribe((res:any)=>{
        if(res.success){
          this.formData.patchValue({
            name: res.data[0].name,
            email: res.data[0].email,
            password: res.data[0].password
          })
        }else{
          this.message= "somthing went wrong"
        }
      })
    }
  }

  message:any; //variable for message print

  // submit data
  submit(){
    // console.log(this.formData.value)
    this.common.postFunction('users/post', this.formData.value).subscribe((res:any)=>{
      if(res.success){
        console.log(res)
        this.message = "Data Submitted Successfuly"
      }else{
        console.log("Not getting any response")
        this.message = "Not getting any response"
      }
    })
  }


  //Update Function by id
  updateTableData(id:any){
    id = this.storeId
    this.common.updateFunction('users/update/'+id, this.formData.value).subscribe((res:any)=>{
      if(res.success){
        this.message = "Data Updated Successfuly"
      }else{
        this.message = "Data not updated"
      }
    })
  }

}
