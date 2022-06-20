import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'; //Table Content
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.getTableData();
    this.common.Refreshrequired.subscribe(res=>{
      this.getTableData();
    })
  }

  // table display Columns
  displayedColumns: string[] = ['id', 'name', 'email', 'password', 'update', 'delete'];

  //data Source varibale for store table data
  dataSource: any = [];


  //Function for getting table data
  getTableData(){
    this.common.getFunction('users/data').subscribe((res:any)=>{
      if(res.success){
        console.log(res);
        this.dataSource = new MatTableDataSource(res.data);
      }else{
        this.dataSource =null;
        console.log('Not Getting any data')
      }
    })
  }

  //Delete Function by id
  deleteTableData(id:any){
    this.common.deleteFunction('users/delete/'+ id).subscribe((res:any)=>{
      if(res){
        console.log("Data deleted successfuly")
      }else{
        console.log("Data not delete")
      }
    })
  }

 


}
