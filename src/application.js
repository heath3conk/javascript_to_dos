//Here we pull User out of user.js' exports
var User = require("./user.js").User;

var heath = new User("heather");

heath.addList("First List");

console.log(heath.toDoLists);

var secondList = heath.addList("Second List");
console.log(secondList);

heath.showLists;

secondList.add("feed cats");
secondList.add("vacuum cat hair from the rug");
secondList.add("buy groceries");

heath.toDoLists[0].add("figure out javascript objects");

heath.toDoLists[0].displayAllTasks();
