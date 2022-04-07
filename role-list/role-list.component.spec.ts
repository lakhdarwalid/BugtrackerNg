import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Role } from '../model/role';
import { RoleService } from '../service/role.service';

import { RoleListComponent } from './role-list.component';

describe('RoleListComponent', () => {
  let component: RoleListComponent;
  let fixture: ComponentFixture<RoleListComponent>;
  const roles : Role[]= [
   {role_id : 1, role : "admin", users:null} ,
   {role_id : 2, role : "user", users:null} 
  ]

  beforeEach(async () => {
    const roleService = jasmine.createSpyObj('RoleService', ['getRoles']);
    let getRolesSpy = roleService.getRoles.and.returnValue(of(roles));

    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ RoleListComponent ],
      providers : [
        {provide : RoleService, useValue : roleService},
        {provide : Router, useValue : routerSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
