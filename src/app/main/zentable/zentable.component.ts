import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { map } from 'rxjs';
import { HttpService } from 'src/app/share/utility/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-zentable',
  templateUrl: './zentable.component.html',
  styleUrls: ['./zentable.component.css']
})
export class ZentableComponent {

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

  isVisible = false;
  constructor(private http: HttpClient) {


  }
  ngOnInit(): void {
    this.getZentable();

  }


  getZentable(pageIndex = 1): void {
    this.data.page = pageIndex;
    this.loading = true;
    this.http.post<any>(environment.apiurl + "AccessZentable", this.data)
      .pipe(map(x => {
        let data = x.Data.Datas;
        for (let i = 0; i < data.length; i++) {
          if (data[i].isbatterybad != 0) {
            data[i].isbatterybad = '低電壓'
          } else {
            data[i].isbatterybad = '電壓正常'
          }
        }
        return x;
      }))
      .subscribe(x => {
        this.loading = false;
        if (x.isSuccess == true) {
          this.total = x.Data.TotalSize;
          this.listOfData = x.Data.Datas
        }
      })
  }
  Del_OneYear_Zentable() {

  }
  showModal(setPointData: any): void {
    console.log(setPointData)
    this.isVisible = true;
    this.setPointData = setPointData;
  }
  GetDatasByPagination(params: NzTableQueryParams) {
    this.getZentable(params.pageIndex);
  }
  delzentable(Id: string) {
    this.http.delete<any>(environment.apiurl + "DelZentable?Id=" + Id)
      .subscribe(x => {
        if (x.isSuccess == true) {
          this.getZentable();

        }
        else {
          alert(x.message);
        }
      })
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.setPointData.nextMeter = Number(this.setPointData.nextMeter);
    this.http.post<any>(environment.apiurl + "UpdateUsertableNextMeter", this.setPointData)
      .subscribe(x => {

        if (x.isSuccess == true) {

          this.isVisible = false;
          this.getZentable();
        }


        else {
          alert(x.message);
        }
      })

  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
