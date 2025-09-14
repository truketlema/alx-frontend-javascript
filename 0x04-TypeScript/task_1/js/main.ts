interface Teacher {
  readonly firstName: string; // only set at initialization
  readonly lastName: string; // only set at initialization
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // optional
  location: string;
  [key: string]: any; // allows any extra property
}

// Example usage
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // extra property
};

console.log(teacher3);
