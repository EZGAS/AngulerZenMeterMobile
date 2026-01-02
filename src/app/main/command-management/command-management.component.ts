import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-command-management',
  templateUrl: './command-management.component.html',
  styleUrls: ['./command-management.component.css']
})
export class CommandManagementComponent implements OnInit {
  listOfData: any[] = [];
  loading = false;
  total = 0;
  id = '';
  data = {
    UserName: '',
    Barcode: '',
    collectiontime: '',
    reportmode: '',
    reportime: sessionStorage.getItem('reportime'),
    agentId: sessionStorage.getItem('user_id'),
    page: 1
  }
  setPointData: any;
  selectedData = {
    UserName: '',
    Barcode: '',
  }
  isVisible = false;
  isOpen = true;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsertable();
  }
  Open() {
    this.isOpen = false;
    setTimeout(() => {
      this.isOpen = true;
    }, 100);
  }

  getUsertable(): void {
    console.log(this.isOpen);
    this.http.post<any>(environment.apiurl + "QuaryUsertable", this.data)
      .pipe(map(x => {
        x.Data.map((y: any) => {
          y.isVisible = false;
          return y;
        })
        return x;
      }))
      .subscribe(x => {
        if (x.isSuccess == true) {
          this.listOfData = x.Data
          this.selectedData = this.listOfData[0];
          console.log(this.selectedData)
        }
      })
  }

  SelectDataCommand(data: any) {
    this.selectedData = data;
  }

  ChooseCustomer(data: any) {
    this.selectedData = data
  }
}
