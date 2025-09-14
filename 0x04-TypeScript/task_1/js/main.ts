// Task 1: Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

// Task 2: Director interface
interface Director extends Teacher {
  numberOfReports: number;
}

// Example usage
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(teacher3);
console.log(director1);

// Task 3: printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}

console.log(printTeacher({ firstName: "John", lastName: "Doe" }));
