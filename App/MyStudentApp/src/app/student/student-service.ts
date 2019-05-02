import { Injectable } from '@angular/core';
import { IStudent } from './istudent';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, delay, catchError } from 'rxjs/operators';

@Injectable()
export class StudentService {
    baseUrl: string = 'http://localhost:50184/api/Student';
    getStudentsUrl: string = this.baseUrl + "/GetStudents";
    getStudentUrl: string = this.baseUrl + "/GetStudents?studentId=";
    createStudentUrl: string = this.baseUrl + "/CreateStudents";
    updateStudentUrl: string = this.baseUrl + "/UpdateStudent";
    deleteStudentUrl: string = this.baseUrl + "/DeleteStudent?studentId=";

    constructor(private httpClient: HttpClient) {
    }

    getStudents(): Observable<IStudent[]> {
        return this.httpClient.get<IStudent[]>(this.getStudentsUrl)
            .pipe(catchError(this.handleError));
    }



    getStudent(id: number): Observable<IStudent> {
        return this.httpClient.get<IStudent>(`${this.getStudentUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    createStudent(employee: IStudent): Observable<IStudent> {
        return this.httpClient.post<IStudent>(this.createStudentUrl, employee, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
            .pipe(catchError(this.handleError));
    }



    updateStudent(employee: IStudent): Observable<void> {
        return this.httpClient.post<void>(this.updateStudentUrl, employee, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
    }

    deleteStudent(employeeId: number): Observable<void> {
        return this.httpClient.post<void>(`${this.deleteStudentUrl}${employeeId}`, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
    }


    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        } else {
            console.error('Server Side Error :', errorResponse);
        }
        return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
    }
}