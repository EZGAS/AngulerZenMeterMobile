import { CustomerManagerModule } from './../customer-manager.module';
import { CustomerComponent } from './../../customer/customer/customer.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-query',
  templateUrl: './customer-manager.component.html',
  styleUrls: ['./customer-manager.component.css']
})
export class CustomerManagerComponent implements OnInit {
  data = {
    UserName: '',
    Barcode: '',
    Tel1: '',
    Tel2: '',
    Address1: '',
    Address2: '',
    Address3: '',
    setPoint: 0,
    nextMeter: 0.0,
    Date: null,
    Email: '',
    GasType: 20,
    GasQuantity: 1,
    Remark: '',
    platformFee: 0,
    AgentId: sessionStorage.getItem('user_id'),
    Id: ''
  }

  listOfData: any[] = [];
  router: any;
  isOpen = true;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsertable();

  }
  getUsertable(): void {
    this.http.post<any>(environment.apiurl + "QuaryUsertable", this.data)

      .subscribe(x => {
        if (x.isSuccess == true) {
          this.listOfData = x.Data

        }
      })
  }

  RemoveUser(userId: any) {
    if (!confirm('請問是否要刪除?')) {
      return;
    }
    this.http.delete<any>(environment.apiurl + "Del_User_Zentable?userID=" + userId)
      .subscribe(x => {
        if (x.isSuccess == true) {
          alert('刪除成功')
          this.getUsertable();
        }
      })

  }
  Open() {
    this.isOpen = false;
    setTimeout(() => {
      this.isOpen = true;
    }, 100);
  }
  ChooseCustomer(data: any) {
    this.data = data
  }
}

