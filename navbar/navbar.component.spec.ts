import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Role } from '../model/role';
import { NavbarService } from '../service/navbar.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  let signIn : boolean;
  let role : Role = {role_id : 1, role : 'admin', users : null};
  let userName : string;

  let mockmsg = {
    signIn : false,
    userName : 'aaa',
    role : 'admin'
  }

  beforeEach(async () => {
    const navbarService = jasmine.createSpyObj('NavbarService',['getMessage']);
    let getMessageSpy = navbarService.getMessage.and.returnValue(of(mockmsg));

    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers : [
        {provide : NavbarService, useValue : navbarService},
        {provide : Router, useValue : routerSpy}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
