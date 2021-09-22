using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Student
{
    class StudentModel
    {

        int Id { get; set; }
        string Name { get; set; }
        string Email { get; set; }

        public StudentModel(int id)
        {
            this.Id = id;
            initialize();

        }

        public string ToString()
        {
            string format = "{{ \"Id\":\"{0}\", \"Name\":\"{1}\", \"Email\":\"{2}\" }}";
            return String.Format(format, Id, Name, Email);

        }

        private void initialize()
        {
            if (this.Id == 1)
            {
                Name = "Ryan Florin";
                Email = "rflorin@school.edu";
            }
            else if (this.Id == 2)
            {
                Name = "Amy Zion";
                Email = "amy@school.edu";
            }
            else if (this.Id == 3)
            {
                Name = "Kenneth Findley";
                Email = "ken@school.edu";
            }
            else if (this.Id == 4)
            {
                Name = "Banana Bob";
                Email = "banana@school.edu";
            }

        }

    }
}
