import { Component, OnInit, Input } from '@angular/core';
import { IStudent } from '../istudent';
import { StudentService } from '../student-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students: IStudent[];

  constructor(private _studentService: StudentService, private _router: Router) { }

  ngOnInit() {
    this.getEmployeeList();
  }

  getEmployeeList(): void {
    this._studentService.getStudents().subscribe(
      (studentList) => {
        this.students = studentList;
        console.log(studentList)
      },
      (err) => console.log(err)
    );
  }
  editButtonClick(studentId: number) {
    // Todo: 
    this._router.navigate(['/list', studentId]);
  }

  deleteButtonClick(studentId: number) {
    this._studentService.deleteStudent(studentId).subscribe(
      () => {
        this.getEmployeeList();
      },
      (err: any) => console.log(err)
    );
    this._router.navigate(['/list']);
  }

  addStudentClick(): void {
    this._router.navigate(['/create']);
  }
}
