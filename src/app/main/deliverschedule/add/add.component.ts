import { Component, OnInit } from '@angular/core';
import { DeliverscheduleService } from '../deliverschedule.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/share/utility/http.service';

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
    employeid: "00000000-0000-0000-0000-000000000000",
    referenceDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
  }
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.get(`GetemployeeAndUserTable?agentId=${sessionStorage.getItem('user_id')}`)
      .subscribe(x => {
        console.log(x);
        this.employees = x.Data.Employees
        this.users = x.Data.Users

      })
  }
  addrecord() {
    let data = {
      agentId: sessionStorage.getItem('user_id'),
      userId: "00000000-0000-0000-0000-000000000000",
      username: '',
      deliveryDate: this.deliveryDate,
      employeeid: '',
      gasType: '20kg',
      gasQuantity: 0,
      remark: ''
    }
    this.listOfData.push(data);

  }
  addDelivery() {
    this.listOfData.forEach(x => {
      x.deliveryDate = this.deliveryDate;
      x.employeeid = this.referencedata.employeid
    });
    console.log(this.listOfData)
    this.http.post("addDeliverSchedule", this.listOfData)
      .subscribe(x => {
        console.log(x);
        if (x.isSuccess) {
          this.listOfData = []
        }
        else {
          alert(x.message)
        }
      })

  }//GetDeliverScheduleTable
  searchrecord() {
    var referencedate = `${this.referencedata.referenceDate.getFullYear()}/${this.referencedata.referenceDate.getMonth() + 1}/${this.referencedata.referenceDate.getDate()}`
    this.http.get(`GetReferenceDeliverSchedule?agentId=${sessionStorage.getItem('user_id')}&referencedate=${referencedate}&employeeid=${this.referencedata.employeid}`)
      .subscribe(x => {
        this.listOfData.push(...x.Data);

      })

  }
  delrecord(data: any) {
    this.listOfData = this.listOfData.filter(x => x != data);
  }
  ChangeDeliveryDate(event: any) {
    this.referencedata.referenceDate = new Date(event - 7 * 24 * 60 * 60 * 1000)
    console.log(this.referencedata.referenceDate)
  }
}
