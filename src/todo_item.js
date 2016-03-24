function ToDoItem(taskName) {
  this.taskName = taskName;
  this.status = "incomplete"
}

ToDoItem.prototype.changeStatus = function(newStatus) {
  this.status = newStatus
}

ToDoItem.prototype.complete = function() {
  this.changeStatus("complete");
}

ToDoItem.prototype.isComplete = function() {
  return this.status
}

ToDoItem.prototype.toString = function() {
  var currentStatus;
  if (this.status === "complete") {
    currentStatus = "x"
  }
  else {
    currentStatus = " "
    }
  console.log ("[" + currentStatus + "] " + this.taskName);
}
