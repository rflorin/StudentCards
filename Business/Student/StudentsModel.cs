using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Student
{
    class StudentsModel
    {
        List<StudentModel> students;

        public StudentsModel()
        {
            students = new List<StudentModel>();
            initialize();

        }

        public string ToString()
        {

            string studentString = "";

            foreach (StudentModel student in students)
            {
                if (studentString.Length == 0)
                {
                    studentString = student.ToString();
                }
                else
                {
                    studentString += "," + student.ToString();
                }
            }

            string format = "{{ \"Students\": [ {0} ] }}";
            return String.Format(format, studentString);

        }

        private void initialize()
        {
            students.Add(new StudentModel(1));
            students.Add(new StudentModel(2));
            students.Add(new StudentModel(3));
            students.Add(new StudentModel(4));
        }

    }
}
