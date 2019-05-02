import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { IStudent } from '../Istudent';
import { StudentService } from '../student-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  studentForm: FormGroup;
  student: IStudent;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private studentService: StudentService,
    private _router: Router) { }

  ngOnInit() {
    this.studentForm = this.fb.group({
      Name: [''],
      PhoneNumber: ['']
    });
  }


  onSubmit(): void {

    this.setData();
    if (this.student.Id) {
      this.studentService.updateStudent(this.student).subscribe(
        () => {
          this._router.navigate(['/list']);
        },
        (err: any) => console.log(err)
      );
    }
    else {
      this.studentService.createStudent(this.student).subscribe(
        () => {
          this._router.navigate(['/list']);
        },
        (err: any) => console.log(err)
      );
    }
  }

  setData(): void {
    this.student = {
      Id: this.studentForm.value.Id,
      Name: this.studentForm.value.Name,
      PhoneNumber: this.studentForm.value.PhoneNumber
    };

  }
}
