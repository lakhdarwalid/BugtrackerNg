import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from '../model/application';
import { ApplicationService } from '../service/application.service';
import {MatSort, Sort} from '@angular/material/Sort';
import { AuthService } from '../service/auth.service';
import { TOOLTIP_PANEL_CLASS } from '@angular/material/tooltip';
import { openSnackBar } from '../shared/tools';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  apps! : Application[];
  name! : string;
  id! : number;
  page: number = 0
  count: number = 0;
  tableSize: number = 5;
  sortedData!: Application[];
  //tableSizes: any = [3, 6, 9, 12];
  isAdmin : boolean = false;
  constructor(private appService : ApplicationService, private router : Router, private auth : AuthService,
          private snackBar : MatSnackBar)
     {
    
   }

  ngOnInit(): void {
    this.isAdmin = this.auth.isAdmin();
    this.getApps();
    
  }



  getApps(){
    this.appService.getApps().subscribe((data:Application[])=>{this.apps = data; console.log(data)}, error=>this.router.navigate(['login']));
  }

  deleteApp(id : number){
    this.id = id;
  }

  onDelete(){
    this.appService.delete(this.id).subscribe(data=>{this.getApps();
                                          openSnackBar(this.snackBar, "App deleted !", "ok")
                                        }, error=>openSnackBar(this.snackBar, error, "ok"));
  }

  onCancel(){
    this.id = 0;
  }

  onUpdateApp(id : number){
    console.log(id);
    this.router.navigate(['update-app', id]);
  }

  createApp(){
    this.router.navigate(['create-app']);
  }

  onChange(){
    if (this.name!="") this.appService.searchByName(this.name).subscribe((data:Application[])=>this.apps = data,
                           error=>openSnackBar(this.snackBar, error, "ok"));
    else this.getApps();
  }

  onCreateBug(id : number){
    this.router.navigate(['create-bug', id]);
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getApps();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getApps();
  }

  sortData(sort : Sort){
    console.log(sort.direction);
    const data = this.apps.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'description':
          return compare(a.description, b.description, isAsc);
          default:
          return 0;
      }
    });
    this.apps = this.sortedData;
  }
}
  function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

