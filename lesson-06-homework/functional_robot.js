"use strict";
console.log('Functional\n');

function Robot() {
	let self = this;
	let name = 'Robot';
	let duty = 'working';

	self.work = function() {
		console.log("I'm " + name + " I am just " + duty);
	}

	self.setName = function(nameValue) {
		name = nameValue;
	}

	self.setDuty = function(dutyValue) {
		duty = dutyValue;
	}
}

function CoffeRobot() {
	Robot.call(this);
	let self = this;
	self.setName('CoffeRobot');
	self.setDuty('brewing coffee');
}

function RobotDancer() {
	Robot.call(this);
	let self = this;
	self.setName('RobotDancer');
	self.setDuty('dancing');
}

function RobotCooker() {
	Robot.call(this);
	let self = this;
	self.setName('RobotCooker');
	self.setDuty('cooking');
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
