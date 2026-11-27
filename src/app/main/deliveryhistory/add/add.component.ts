import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {



  deliveryDate = new Date();
  listOfData: any[] = [];
  employees: any[] = [];
  users: any[] = [];
  referencedata = {
    UserTable_ID: "00000000-0000-0000-0000-000000000000",
    Employee_ID: "00000000-0000-0000-0000-000000000000",
    Deliver_Date: null,
    AgentId: sessionStorage.getItem('user_id'),

  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(environment.apiurl + `GetemployeeAndUserTable?agentId=${sessionStorage.getItem('user_id')}`)
      .subscribe((x: any) => {
        console.log(x);
        this.employees = x.Data.Employees
        this.users = x.Data.Users
      })
  }
  getdelivehistory() {

    this.http.get(environment.apiurl + `GetDeliveryHistory?agentId=${sessionStorage.getItem('user_id')}&employeid=${this.referencedata.Employee_ID}&userid=${this.referencedata.UserTable_ID}&deliveryDate=${this.deliveryDate}`)
      .subscribe((x: any) => {
        console.log(x.Data);
      })

  }

  adddelivehistory() {

  }
  addRecord() {
    let data = {
      agentId: sessionStorage.getItem('user_id'),
      userId: "00000000-0000-0000-0000-000000000000",
      username: '',
      DeliverDate: this.deliveryDate,
      EmployeeID: '',
      GasType: '20kg',
      GasQuantity: 0,
      Amount: 0,
      Payment: '月結',
      GasUsage: 0,
      GasRemaining: 0,
      EstimatedQuantity: 0,
      Remark: ''
    }
    this.listOfData.unshift(data);

  }
  clearRecord() {
    this.listOfData = []
  }

  SubmitRecord() {
    this.listOfData.forEach(x => {
      x.EmployeeID = this.referencedata.Employee_ID;
      x.DeliverDate = this.referencedata.Deliver_Date;
    });
    this.http.post(environment.apiurl + "addDeliverHistoryRecords", this.listOfData)
      .subscribe((x: any) => {
        console.log(x);
        if (x.isSuccess) {
          this.listOfData = [];
        }
        else {
          alert(x.message)
        }
      })

  }

}

