import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Application } from '../model/application';
import { ApplicationService } from '../service/application.service';

import { ApplicationListComponent } from './application-list.component';

describe('ApplicationListComponent', () => {
  let component: ApplicationListComponent;
  let fixture: ComponentFixture<ApplicationListComponent>;
  const apps : Application[] = [
      {app_id : 1, name : 'aaa', description : '', bugs : []},
      {app_id : 2, name : 'bbb', description : '', bugs : []},
      {app_id : 3, name : 'ccc', description : '', bugs : []}
  ];

  beforeEach(async () => {
    const appService = jasmine.createSpyObj('ApplicationService', ['getApps']);
    let getAppsSpy = appService.getApps.and.returnValue(of(apps));

    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ ApplicationListComponent ],
      providers : [
        {provide : ApplicationService, useValue : appService},
        {provide : Router, useValue : routerSpy}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
