import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from 'src/app/share/utility/http.service';
import { environment } from 'src/environments/environment';
import { DeliverscheduleService } from '../deliverschedule.service';
import { NavigationStart, Router } from '@angular/router';
import { filter, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-quary',
  templateUrl: './quary.component.html',
  styleUrls: ['./quary.component.css']
})
export class QuaryComponent implements OnInit, OnDestroy {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.




  deliveryDate = new Date();
  listOfData: any[] = [];
  employees: any[] = [];
  users: any[] = [];
  referencedata = {
    employeid: "00000000-0000-0000-0000-000000000000",
    referenceDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
  }
  constructor(private http: HttpClient, private service: DeliverscheduleService, private router: Router) { }
  ngOnDestroy(): void {

    this.routerSubscription?.unsubscribe();
  }

  private routerSubscription?: Subscription;

  ngOnInit(): void {
    this.http.get(environment.apiurl + `GetemployeeAndUserTable?agentId=${sessionStorage.getItem('user_id')}`)
      .subscribe((x: any) => {
        console.log(x);
        this.employees = x.Data.Employees
      })

    if (this.service.listOfData.length > 0) {
      this.listOfData = this.service.listOfData;
    }

    this.routerSubscription = this.router.events
      .pipe(
        filter(
          (event): event is NavigationStart =>
            event instanceof NavigationStart
        )
      )
      .subscribe(event => {
        console.log(event)
        if (!event.url.includes('datakeyin')) {
          this.service.clear();
        }
      });
  }
  getDelivery() {
    let data = {
      agentId: sessionStorage.getItem('user_id'),
      userId: '',
      username: '',
      deliveryDate: this.deliveryDate,
      employeeId: '',
      gasType: '',
      gasQuantity: 0,
      amount: 0,
      payment: '',
      estimatedQuantity: 0,
      gasUsage: 0,
      gasRemaining: 0,
      nextDeliverdate: '',
      remark: ''
    }
    this.listOfData.push(data);
    var deliveryDate = `${this.deliveryDate.getFullYear()}/${this.deliveryDate.getMonth() + 1}/${this.deliveryDate.getDate()}`
    this.http.get(environment.apiurl + `GetReferenceDeliverSchedule?agentId=${sessionStorage.getItem('user_id')}&referencedate=${deliveryDate}&employeeid=${this.referencedata.employeid}`)
      .subscribe((x: any) => {
        x.Data.forEach((y: any) => {
          y.payment = '月結'
        });
        this.listOfData = x.Data;
      });
  }

  getdeliveschedule() {
    var deliveryDate = `${this.deliveryDate.getFullYear()}/${this.deliveryDate.getMonth() + 1}/${this.deliveryDate.getDate()}`
    this.service.GetDeliverSchedules(deliveryDate, this.referencedata.employeid).subscribe(x => {
      this.listOfData = x.Data;
    })
    this.http.get(environment.apiurl + `GetReferenceDeliverSchedule?agentId=${sessionStorage.getItem('user_id')}&referencedate=${deliveryDate}&employeeid=${this.referencedata.employeid}`)
      .subscribe((x: any) => {
        console.log(x)
        x.Data.forEach((y: any) => {
          y.payment = '月結'
        });
        this.listOfData = x.Data;
      });
  }

}
