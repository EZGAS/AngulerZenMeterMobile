import { Component, OnInit } from '@angular/core';
import { DeliverscheduleService } from '../deliverschedule.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-datakeyin',
  templateUrl: './datakeyin.component.html',
  styleUrls: ['./datakeyin.component.css']
})
export class DatakeyinComponent implements OnInit {

  data: any;
  scheduleId: any;
  constructor(private service: DeliverscheduleService, private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    let userId = route.snapshot.paramMap.get('userId')!;
    this.scheduleId = route.snapshot.paramMap.get('scheduleId')!;
    console.log(this.scheduleId);
    this.data = service.GetCustomSchedule(userId);
    this.data.DeliveryScheduleID = this.scheduleId;

  }

  ngOnInit(): void {
  }
  cancel() {
    this.data.gasType = "20kg";
    this.data.gasQuantity = 0;
    this.data.gasUsage = 0;
    this.data.gasRemaining = 0;
    this.data.amount = 0;
    this.data.pament = '月結'
  }
  finish() {

    console.log(this.data)
    this.http.post(environment.apiurl + "addDeliverHistory", this.data)
      .subscribe((x: any) => {
        console.log(x);
        if (x.isSuccess) {
          this.data = [];
          this.service.SetScheduleFinish(this.scheduleId);
          this.router.navigate(['main/deliverschedule/quary']);
        }
        else {
          alert(x.message)
        }
      })

  }
  goback() {
    this.router.navigate(['main/deliverschedule/quary']);

  }
}
