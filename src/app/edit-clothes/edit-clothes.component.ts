import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';  // Location service is used to go back to previous component
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit-clothes',
  templateUrl: './edit-clothes.component.html',
  styleUrls: ['./edit-clothes.component.scss']
})
export class EditClothesComponent implements OnInit {

  public editForm: FormGroup;

  constructor(
    private data: DataService,      // Inject CRUD API in constructor
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private location: Location,         // Location service to go back to previous component
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,             // Router service to navigate to specific component
    private toastr: ToastrService       // Toastr service for alert message
  ){ }
  ngOnInit() {
    // this.updateStudentData();   // Call updateStudentData() as soon as the component is ready 
    // const id = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    // if(id)
    // this.data.GetStudent(id).valueChanges().subscribe(data => {
    //   this.editForm.setValue(data)  // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form 
    // })
  }

  get name() {
    return this.editForm.get('name');
  }
  get lesson() {
    return this.editForm.get('lesson');
  }  
  // Contains Reactive Form logic
  updateStudentData() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      lesson: ['',[Validators.required]]
    })
  }
  // Go back to previous component
  goBack() {
    this.location.back();
  }
  // Below methods fire when somebody click on submit button
  updateForm(){
    // this.data.UpdateStudent(this.editForm.value);       // Update student data using CRUD API
    this.toastr.success(this.editForm.controls['name'].value + ' updated successfully');   // Show succes message when data is successfully submited
    this.router.navigate(['clothes']);               // Navigate to student's list page when student data is updated
  }

}
