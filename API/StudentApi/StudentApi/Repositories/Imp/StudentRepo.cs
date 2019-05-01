using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using StudentApi.Context;
using StudentApi.Models;

namespace StudentApi.Repositories.Imp
{
    public class StudentRepo: IStudentRepo
    {
        private readonly StudentContext _studentContext;

        public StudentRepo(StudentContext studentContext)
        {
            _studentContext = studentContext;
        }

        public IEnumerable<Student> GetStudents()
        {
           return _studentContext.Students;
        }

        public Student GetStudent(int studentId)
        {
            return _studentContext.Students.FirstOrDefault(std=>std.Id==studentId);
        }

        public Student CreateStudent(Student student)
        {
            _studentContext.Students.Add(student);
            _studentContext.SaveChanges();
            return student;
        }

        public Student UpdateStudent(Student student)
        {
            var studentToBeUpdated = _studentContext.Students.FirstOrDefault(std => std.Id == student.Id);
            if (studentToBeUpdated == null) return null;

            studentToBeUpdated.Name = student.Name;
            studentToBeUpdated.PhoneNumber = student.PhoneNumber;

            _studentContext.Entry(studentToBeUpdated).State = EntityState.Modified;
            _studentContext.SaveChanges();
            return studentToBeUpdated;
        }

        public void DeleteStudent(int studentId)
        {
            var studentToBeDeleted = _studentContext.Students.FirstOrDefault(std => std.Id == studentId);

            if (studentToBeDeleted != null)
            {
                _studentContext.Entry(studentToBeDeleted).State = EntityState.Deleted;
                _studentContext.SaveChanges();
            }
         
        }
    }
}