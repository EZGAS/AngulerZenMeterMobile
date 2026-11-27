import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DeliverscheduleService } from '../../deliverschedule/deliverschedule.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-quary',
  templateUrl: './quary.component.html',
  styleUrls: ['./quary.component.css']
})
export class QuaryComponent implements OnInit {
  deliveryDate = new Date();
  isVisible = false;
  listOfData: any[] = [];
  employees: any[] = [];
  users: any[] = [];
  totalSize: number = 0;
  referencedata = {
    UserTable_ID: "00000000-0000-0000-0000-000000000000",
    Employee_ID: "00000000-0000-0000-0000-000000000000",
    Deliver_Date: null,
    AgentId: sessionStorage.getItem('user_id'),
    page: 1
  }
  history: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(environment.apiurl + `GetemployeeAndUserTable?agentId=${sessionStorage.getItem('user_id')}`)
      .subscribe((x: any) => {
        console.log(x);
        this.employees = x.Data.Employees
        this.users = x.Data.Users
      })
    this.getdelivehistory();
  }
  getdelivehistory() {

    this.http.post(environment.apiurl + `GetAllDeliveryHistory`, this.referencedata)
      .subscribe((x: any) => {
        this.listOfData = x.Data.Datas
        this.totalSize = x.Data.TotalSize
      })

  }
  getuserhistory(item: any) {
    this.history = item;
    this.isVisible = true;
    console.log(item)
  }
  handleCancel() {
    this.isVisible = false;

  }
  handleOk() {
    this.http.post(environment.apiurl + "MobileUpdateDeliveryHistory", this.history)
      .subscribe((x: any) => {
        console.log(x);
        if (x.isSuccess) {
          alert(x.message)
          this.isVisible = false;
        }
        else {
          alert(x.message)
        }
      })

  }

  ChangePage(pageNumber: number) {
    console.log(pageNumber);
    this.referencedata.page = pageNumber;
    this.http.post(environment.apiurl + 'GetAllDeliveryHistory', this.referencedata)
      .subscribe((x: any) => {
        console.log(x);
        this.listOfData = x.Data.Datas
        this.totalSize = x.Data.TotalSize

      })
  }
}
