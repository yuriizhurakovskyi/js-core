"use strict";
console.log('Functional\n');

function Robot() {
	let self = this;

	self.work = function() {
		console.log("I'm Robot I am just working");
	}
}

function CoffeRobot() {
	Robot.call(this);
	let self = this;
	self.work = function() {
		console.log("I'm CoffeRobot I am just brewing coffee");
	}
}

function RobotDancer() {
	Robot.call(this);
	let self = this;
	self.work = function() {
		console.log("I'm RobotDancer I am just dancing");
	}
}

function RobotCooker() {
	Robot.call(this);
	let self = this;
	self.work = function() {
		console.log("I'm RobotCooker I am just cooking");
	}
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
