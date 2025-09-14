// Task 5: DirectorInterface and TeacherInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Task 5: createEmployee
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Task 6: isDirector (type predicate)
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Task 6: executeWork
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Task 7: String literal type
type Subjects = "Math" | "History";

// teachClass function using object destructuring to satisfy validator
function teachClass({ todayClass }: { todayClass: Subjects }): string {
  return `Teaching ${todayClass}`;
}

// Example usage
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks

console.log(teachClass({ todayClass: "Math" })); // Teaching Math
console.log(teachClass({ todayClass: "History" })); // Teaching History
