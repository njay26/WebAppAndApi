using StudentApi.Models;

namespace StudentApi.Utils
{
    public static class StudentUtils
    {
        public static bool IsValidatedStudnetModel(Student student)
        {
            bool status = false;
            if (student == null) return false;

            var nameCharlength = student.Name.Trim().Length;
            if (nameCharlength > 0 && nameCharlength < 30)
            {
                status = true;
            }
            return status;
        }
    }
}