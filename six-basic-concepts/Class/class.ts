// Define a task class with id, title, due date & completed(boolean) properties

class Task {
  // properties
  private id: number;
  private title: string;
  private dueDate: Date;
  private completed: boolean;


  // Constructor 
  constructor(taskInfo: {
    id: number;
    title: string;
    dueDate: Date;
  }) {
    this.id = taskInfo.id;
    this.title = taskInfo.title;
    this.dueDate = taskInfo.dueDate;
    this.completed = false; //By default, the task is not completed
  }


  // Set complete & incomplete methods, by assigning these methods to a task
  // we can mark that task as completed

  // Method to mark task as completed
  public complete() {
    this.completed = true;
  }

  // Method to mark the task as incomplete
  public incomplete() {
    this.completed = false;
  }
}
// Now we can create new instances of the Task class using an object as a parameter
// First instance
const task1 = new Task({
  id: 1,
  title: "task 1",
  dueDate: new Date("2025-06-12"),
});

// 2nd instance
const task2 = new Task({
  id: 2,
  title: "task 2",
  dueDate: new Date("2025-07-17"),
});

// Now we can use the methods we defined earlier to set any task as completed
task1.complete();

// Output the task details
console.log(task1);
console.log(task2);

// compile to js & run

// CONSOLE OUTPUT:
`Task {
  id: 1,
  title: 'task 1',
  dueDate: 2025-06-12T00:00:00.000Z,
  completed: true
}
Task {
  id: 2,
  title: 'task 2',
  dueDate: 2025-07-17T00:00:00.000Z,
  completed: false
}`

// as we can see the 'completed' field of task 1 is set to true, meaning it's complete
// while the completed field of task 2 is set to false meaning it is not completed