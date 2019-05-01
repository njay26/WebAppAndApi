using System.Collections.Generic;
using StudentApi.Models;
using StudentApi.Repositories;
using StudentApi.Utils;

namespace StudentApi.Services.Imp
{
    public class StudentService: IStudentService
    {
        private readonly IStudentRepo _studentRepo;

        public StudentService(IStudentRepo studentRepo)
        {
            _studentRepo = studentRepo;
        }

        public IEnumerable<Student> GetStudents()
        {
            return _studentRepo.GetStudents();
        }

        public Student GetStudent(int studentId)
        {
            return _studentRepo.GetStudent(studentId);
        }

        public Student CreateStudent(Student student)
        {
            return StudentUtils.IsValidatedStudnetModel(student) ? _studentRepo.CreateStudent(student) : null;
        }

        public Student UpdateStudent(Student student)
        {
            return StudentUtils.IsValidatedStudnetModel(student) ? _studentRepo.UpdateStudent(student) : null;
        }

        public void DeleteStudent(int studentId)
        {
            _studentRepo.DeleteStudent(studentId);
        }
    }
}