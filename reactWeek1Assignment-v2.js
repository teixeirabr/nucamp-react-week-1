class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }

  registerStudent(newStudent) {
    console.log("line 17", newStudent);
    // console.log(this.students);
    const duplicateStudentsFound = this.students.filter((student) => {
      console.log(student.email);
      console.log("new student email", newStudent.email);

      //   if (student.email === newStudent.email) {
      //     console.log("email matches");
      //     return true;
      //   }

      return student.email === newStudent.email;
    });

    console.log(duplicateStudentsFound);

    if (duplicateStudentsFound.length === 0) {
      this.students.push(newStudent);
      console.log(`${newStudent.email} registered to ${this.name}`);
    } else {
      console.log(`${newStudent.email} is already registered`);
    }
  }
}

const s1 = new Student("Andre", "a@a.com", "React");
const s2 = new Student("Shahlo", "s@s.com", "React");
const s3 = new Student("Henry", "h@h.com", "React");

const b1 = new Bootcamp("Nucamp", "Hard", [s1]);
b1.students.push(s2);
// console.log(b1);

b1.registerStudent(s3);
