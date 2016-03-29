var User = require("./user.js").User;
var expect = require('expect');


function testUserIsUser() {
  var user = new User;
  expect(user).toBeA(User, "Oh no! This should be a User")
}
testUserIsUser();



// Idea for building our own little test runner
// function test(fnThatRunsOneTest) {
//   fnThatRunesOneTest();
// }

// test(function() {
//   var user = new User;
//   expect(user).toBeA(User, "Oh no! This should be a User")
// })

// test(function() {
//   var user = new User;
//   expect(user).toBeA(User, "Oh no! This should be a User")
// })


//

// var todo_item = require('/todo_item.js');
// var expect = require('expect');

// function ToDoItem(taskName) {
//   this.taskName = taskName;
//   this.status = "incomplete"
// }

// var task = new ToDoItem("feed cats");
// var shouldWork = expect(task).toExist("failed to create a new task");
// console.log(shouldWork);

// var task2 = new ToDoItem();
// var blankTask = expect(task2).toExist("failed to create a new task");
// console.log(blankTask);


