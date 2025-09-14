namespace Subjects {
  export class Subject {
    teacher!: Teacher; // instance attribute

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
