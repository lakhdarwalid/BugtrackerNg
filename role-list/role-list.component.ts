import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Role } from '../model/role';
import { RoleService } from '../service/role.service';
import { RoleExist } from '../shared/repeatedusername.directive';
import { NameValidator } from '../shared/stringvalidator';
import { openSnackBar } from '../shared/tools';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})


export class RoleListComponent implements OnInit {
  role: Role = new Role();
  updatedRole : Role = new Role();
  roles! : Role[];
  stringRoles : string[] = new Array<string>();
  added : boolean = false;
  id! : number;

  page: number = 0
  count: number = 0;
  tableSize: number = 3; 


  rolefield = new  FormGroup({
    'role' : new FormControl(' ',
         [Validators.required,
          Validators.minLength(3),
          NameValidator.noWhiteSpace,
          RoleExist(this.stringRoles)
      ])
  });

  updateform = new FormGroup({
    'tempRole' : new FormControl(' ',
            [ Validators.required,
              Validators.minLength(3),
              NameValidator.noWhiteSpace
            ])
  });
  
  
  
  constructor(private roleService : RoleService, private router : Router, private snackBar : MatSnackBar) {
   }
  
  get m(){
    return this.rolefield.controls;
  }

  get f(){
    return this.updateform.controls;
  }

  ngOnInit(): void {
    this.getRoles();
  }

  

  getRoles(){
    this.roleService.getRoles().subscribe((data:Role[])=>{ 
              this.roles = data;
              data.forEach(role=>this.stringRoles.push(role.role))
          }, error=>this.router.navigate(['login']));

  }

  createRole(role : Role){
    this.roleService.createRole(role).subscribe(data=>console.log(data), error=>openSnackBar(this.snackBar, error,"ok"));
  }

  onCancel(){
    this.id = 0;
  }

  deleteRole(id: number){
    this.id = id;
  }

  onDelete(){
    this.roleService.deleteRole(this.id).subscribe(data=>{this.getRoles();
    }, error=>openSnackBar(this.snackBar, error,"ok"));
  }

  updateRole(role : Role):void{
    this.updatedRole = role;
  }

  cancelUpdate(){
    this.updatedRole = new Role();
  }

  onSubmitUpdate(role : Role){
    this.roleService.updateRole(role).subscribe(data=>this.updatedRole=new Role());
  }
  
  onSubmit(){
    this.roleService.createRole(this.role).subscribe(data=>{this.getRoles(); this.rolefield.reset();this.added = true}, error=>openSnackBar(this.snackBar, error,"ok"));
  }

  onType(){
    this.added = false;
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getRoles();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getRoles();
  }

}


