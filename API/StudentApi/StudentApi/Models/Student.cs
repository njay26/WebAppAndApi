using System;
using System.ComponentModel.DataAnnotations;

namespace StudentApi.Models
{
    public class Student
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public Int64 PhoneNumber { get; set; }
    }
}