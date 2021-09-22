using System;

namespace Business
{
    public static class StudentServiceController
    {
        public static string getStudentsById(int id)
        {
            Student.StudentModel student = new Student.StudentModel(id);

            return student.ToString();
        }
        public static string getAllStudents()
        {
            Student.StudentsModel students = new Student.StudentsModel();

            return students.ToString();
        }

    }
}
