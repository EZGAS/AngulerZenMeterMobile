import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-custer-update',
  templateUrl: './custer-update.component.html',
  styleUrls: ['./custer-update.component.css']
})
export class CusterUpdateComponent {

  @Input() set userdata(val: any) {
    this.data = val;
    console.log(val);
  }

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
  id: string;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.id = route.snapshot.paramMap.get('id')!;

  }
  UpdataUsertablt(): void {
    // 使用正则表达式进行验证
    const regex = /^\d{10}$/; // \d 表示数字字符，{10} 表示重复10次
    if (!regex.test(this.data.Barcode)) {
      alert('Barcode不是一長度為10的數字,請重新輸入正確的值。');
      return;
    }

    this.http.post<any>(environment.apiurl + "UpdateUsertable", this.data)
      .subscribe(x => {
        if (x.isSuccess == true) {
          alert(x.message)
          this.router.navigate(['main/usertable/quary']);
        }
        else {
          alert(x.message)
        }

      })
  }

}
