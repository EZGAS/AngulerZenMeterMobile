import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeliverscheduleService {

  listOfData: any[] = []
  constructor(private http: HttpClient) { }

  SetScheduleFinish(scheduleId: string) {
    this.listOfData.filter(x => x.Id == scheduleId)[0].isSuccess = true;
  }

  GetCustomSchedule(userId: string) {
    return this.listOfData.filter(x => x.userId == userId)[0];
  }
  clear() {
    this.listOfData = [];
  }

  GetDeliverSchedules(deliveryDate: string, employeeId: string) {
    return this.http.get(
      environment.apiurl +
      `GetReferenceDeliverSchedule?agentId=${sessionStorage.getItem('user_id')}&referencedate=${deliveryDate}&employeeid=${employeeId}`
    ).pipe(

      map((x: any) => {

        x.Data.forEach((y: any) => {
          y.payment = '月結';
        });

        this.listOfData = x.Data;

        return x;
      })

    );
  }
}
