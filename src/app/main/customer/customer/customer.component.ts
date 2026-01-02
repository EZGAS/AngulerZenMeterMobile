
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  data: any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.setData();
  }
  addUsertablt(): void {
    // 使用正则表达式进行验证
    const regex = /^\d{10}$/; // \d 表示数字字符，{10} 表示重复10次
    if (!regex.test(this.data.Barcode)) {
      alert('Barcode不是一長度為10的數字,請重新輸入正確的值。');
      return;
    }

    this.http.post<any>(environment.apiurl + "AddUsertable", this.data)
      .subscribe(x => {
        if (x.isSuccess == true) {
          alert(x.message)
          this.setData();
        }
        else {
          alert(x.message)
        }

      })


  }
  setData() {
    this.data = {
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
      PlatformFee: 100,
      AgentId: sessionStorage.getItem('user_id')
    }

  }
}
