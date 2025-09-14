// Director interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher interface
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

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number") {
    if (salary < 500) return new Teacher();
    else return new Director();
  } else {
    return new Director();
  }
}

// ALX-compatible isDirector function
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// ALX-compatible executeWork function
function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example usage
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
