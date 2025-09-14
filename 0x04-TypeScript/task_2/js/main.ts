// Task 5: Director and Teacher interfaces
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

// Task 5: Director and Teacher classes
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

// Task 5: createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Task 6: isDirector function (type predicate)
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Task 6: executeWork function
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// Task 7: Subjects string literal type
type Subjects = "Math" | "History";

// Task 7: teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") return "Teaching Math";
  return "Teaching History";
}

// Example usage
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
console.log(teachClass("Math")); // Teaching Math
console.log(teachClass("History")); // Teaching History
