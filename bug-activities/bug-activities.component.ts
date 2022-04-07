import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Activity } from '../model/activity';
import { Bug } from '../model/bug';
import { User } from '../model/user';
import { BugService } from '../service/bug.service';
import { openSnackBar } from '../shared/tools';

@Component({
  selector: 'app-bug-activities',
  templateUrl: './bug-activities.component.html',
  styleUrls: ['./bug-activities.component.css']
})
export class BugActivitiesComponent implements OnInit {

  constructor(private bugService : BugService, private activeRoute : ActivatedRoute, private snackBar : MatSnackBar) { }
  bug! : Bug;
  activities : Activity[] = new Array<Activity>();
  user! : User | null;
  id! : number;
  ngOnInit(): void {
    this.getBugById();
  }

  getBugById(){
    this.id = this.activeRoute.snapshot.params['id'];
    this.bugService.getBugById(this.id).subscribe(data=> {this.bug=data;
                    this.activities = data.activities.sort((a,b)=>new Date(b.activityDate).getTime()-new Date(a.activityDate).getTime());
                    this.user = data.user;
                    }, error=>openSnackBar(this.snackBar, error, "ok"));

  }

}
