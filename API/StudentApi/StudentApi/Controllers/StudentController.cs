using System.Web.Http;
using StudentApi.Models;
using StudentApi.Services;
using log4net;

namespace StudentApi.Controllers
{
    public class StudentController : ApiController
    {
        private readonly IStudentService _studentService;

        private static readonly ILog log = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        public StudentController(IStudentService studentService)
        {
         
            _studentService = studentService;
        }

        [HttpGet]
        public IHttpActionResult GetStudents()
        {
            var students = _studentService.GetStudents();
            log.Info("Logging test StudentController ");

            return Ok(students);
        }

        [HttpGet]
        public IHttpActionResult GetStudents(int studentId)
        {
            var students = _studentService.GetStudent(studentId);
            return Ok(students);
        }

        [HttpPost]
        public IHttpActionResult CreateStudents(Student student)
        {
            var students = _studentService.CreateStudent(student);
            return Ok(students);
        }

        [HttpPost]
        public IHttpActionResult UpdateStudent(Student student)
        {
            var students = _studentService.UpdateStudent(student);
            return Ok(students);
        }

        [HttpPost]
        public IHttpActionResult DeleteStudent(int studentId)
        {
            _studentService.DeleteStudent(studentId);
            return Ok(true);
        }
    }
}
