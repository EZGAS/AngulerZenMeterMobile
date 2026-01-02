import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-command-updat',
  templateUrl: './command-updat.component.html',
  styleUrls: ['./command-updat.component.css']
})
export class CommandUpdatComponent implements OnInit {


  @Input() set UserName(val: string) {
    console.log(val);
    this.comdData.UserName = val;
  }


  @Input() set Barcode(val: string) {
    this.comdData.Barcode = val;
  }
  comdData = {
    UserName: '',
    Barcode: '',
    cmdname: '',
    cumulunt: '',
    domainname: '',
    port: '',
    reportcycle: '',
    reportinterval: 1,
    reporttime: '',

  }
  selectOption = {
    ip: false,
    cumulunt: false,
    port: false,
    reportcycle: false,
    reportinterval: false,
    reporttime: false,
  }
  action = ''
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {

    // this.comdData.reporttime = route.snapshot.paramMap.get('reporttime')!;
  }

  ngOnInit(): void {
    this.iniFalse()
  }

  getRandomArbitrary(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
  UpdataCmdtablt() {
    var reportimeint = this.getRandomArbitrary(1, 59);
    this.comdData.reporttime = '00' + reportimeint.toString() + '00';
    console.log(this.comdData)
    if (this.comdData.reportcycle == '72') {
      this.comdData.reportinterval = 72;
      this.comdData.reportcycle = '1'

    }
    else if (this.comdData.reportcycle == '48') {
      this.comdData.reportinterval = 48;
      this.comdData.reportcycle = '1'

    }
    else if (this.comdData.reportcycle == '23') {
      this.comdData.reportinterval = 23;
      this.comdData.reportcycle = '1'

    }
    else if (this.comdData.reportcycle == '12') {
      this.comdData.reportinterval = 12;
      this.comdData.reportcycle = '1'

    }
    else if (this.comdData.reportcycle == '8') {
      this.comdData.reportinterval = 8;
      this.comdData.reportcycle = '1'

    }
    this.http.post<any>(environment.apiurl + "AddCommandtable", this.comdData)
      .subscribe(x => {
        if (x.isSuccess == true) {
          alert(x.message);
          this.iniFalse()
        }
      })
  }
  onChange(value: any) {
    console.log(value)


    switch (value) {

      case 'SetIpPort':
        this.iniFalse()
        this.selectOption.ip = false
        this.selectOption.port = false
        break;
      case 'ReWriteTotal':
        this.iniFalse()
        this.selectOption.cumulunt = false

        break;
      case 'SetReportCycle':
        this.iniFalse()
        this.selectOption.reportcycle = false
        this.selectOption.reportinterval = false
        this.selectOption.reporttime = false
        break;
    }

  }
  iniFalse() {
    this.selectOption.ip = true
    this.selectOption.port = true
    this.selectOption.cumulunt = true
    this.selectOption.reportcycle = true
    this.selectOption.reportinterval = true
    this.selectOption.reporttime = true
    this.comdData.cumulunt = ''
    this.comdData.domainname = ''
    this.comdData.port = ''
    this.comdData.reportcycle = ''
    this.comdData.reportinterval = 1
    this.comdData.reporttime = ''
  }
}



