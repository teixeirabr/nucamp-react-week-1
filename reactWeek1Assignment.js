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
  registerStudent(student) {
    if (this.students.filter((s) => s.email === student.email).length) {
      console.log(
        `ERROR: The student with the email ${student.email} is already registered. `
      );
    } else {
      this.students.push(student);
      console.log(
        `Registering ${student.email} to the bootcamp ${this.name}. `
      );
    }
    return this.students;
  }
}

// const webDevFundamentals = new Bootcamp("Web Dev", "Beginner");
// const trinity = new Student("Trinity", "trinity@matrix.org", "Florida");
// const andre = new Student("Andre", "andre@matrix.org", "Florida");
// const peter = new Student("Peter", "peter@matrix.org", "Florida");
// webDevFundamentals.registerStudent(trinity);
// console.log(trinity);
