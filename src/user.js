function User(username) {
  this.username = username
  this.toDoLists = []
}

User.prototype.addList = function(listName) {
  this.listName = listName
}

User.prototype.showLists = function() {
  for (var list in this.toDoLists) {
    console.log(list.name);
  }
}
