function ToDoList(name_) {
  this.name = name_ || "";
  this.tasks = [];
}

ToDoList.prototype.add = function(taskName) {
  var newTask = new ToDoItem(taskName);
  this.tasks.push(newTask)
}

ToDoList.prototype.removeTaskNumber = function(taskNumber) {
  this.tasks.splice(taskNumber-1,1)
}

ToDoList.prototype.markTaskComplete = function(taskNumber) {
  this.tasks[taskNumber-1].complete
}

ToDoList.prototype.showIncompleteTasks = function() {
  var incompletes = [];
  for (var count = 0; count <= this.tasks.length; count++) {
    if (this.tasks[count].status === "incomplete") {
      incompletes.push(this.tasks[count]);
    }
  }
  return incompletes
}

ToDoList.prototype.showCompleteTasks = function() {
  var completes = [];
  for (var count = 0; count <= this.tasks.length; count++) {
    if (this.tasks[count].status === "complete") {
      completes.push(this.tasks[count]);
    }
  }
  return completes
}

// this is not working the way I want yet
ToDoList.prototype.showAllTasks = function() {
  for (var index in this.tasks) {
    // var displayLine = index.concat(this.tasks[index])
    console.log(index.toString + this.tasks[index])
  }
}
