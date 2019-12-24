"use strict";
console.log('Prototype\n');

function Robot() {
}

Robot.prototype.work = function() {
	console.log("I'm Robot I am just working");
}

function CoffeRobot() {
}

CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;
CoffeRobot.prototype.work = function() {
	console.log("I'm CoffeRobot I am just brewing coffee");
}

function RobotDancer() {
}

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;
RobotDancer.prototype.work = function() {
	console.log("I'm RobotDancer I am just dancing");
}

function RobotCooker() {
}

RobotCooker.prototype = Object.create(Robot.prototype);
RobotCooker.prototype.constructor = RobotCooker;
RobotCooker.prototype.work = function() {
	console.log("I'm RobotCooker I am just cooking");
}

let robot = new Robot();
robot.work();

let coffeRobot = new CoffeRobot();
coffeRobot.work();

let robotDancer = new RobotDancer();
robotDancer.work();

let robotCooker = new RobotCooker();
robotCooker.work();

let robots = [ new Robot(), new CoffeRobot(), new RobotDancer(),
		new RobotCooker() ];

console.log('\n---------------------------\n');
for (let i = 0; i < robots.length; i++) {
	robots[i].work();
}