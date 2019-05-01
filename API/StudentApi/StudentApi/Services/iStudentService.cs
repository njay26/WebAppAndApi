using System.Collections.Generic;
using StudentApi.Models;

namespace StudentApi.Services
{
    public interface IStudentService
    {
        IEnumerable<Student> GetStudents();
        Student GetStudent(int studentId);

        Student CreateStudent(Student student);
        Student UpdateStudent(Student student);

        void DeleteStudent(int studentId);
    }
}