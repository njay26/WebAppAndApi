using System.Data.Entity;
using StudentApi.Models;

namespace StudentApi.Context
{
    public class StudentContext : DbContext
    {
        public StudentContext() : base("StudentContext")
        {
            Database.SetInitializer<StudentContext>(null);
        }

        public DbSet<Student> Students{ get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Student>().ToTable("Student");
            base.OnModelCreating(modelBuilder);
        }
    }
}