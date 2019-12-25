console.log('Prototype\n');

function Robot() {
	let name;
	let duty;
}

Robot.prototype.work = function() {
	console.log("I'm " + this.name + " I am just " + this.duty);
}

Robot.prototype.setName = function(nameValue) {
	this.name = nameValue;
}

Robot.prototype.setDuty = function(dutyValue) {
	this.duty = dutyValue;
}

Robot.prototype.setName(Robot.name);
Robot.prototype.setDuty('working');

function CoffeRobot() {
}

CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;
CoffeRobot.prototype.setName(CoffeRobot.name);
CoffeRobot.prototype.setDuty('brewing coffee');

function RobotDancer() {
}

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;
RobotDancer.prototype.setName(RobotDancer.name);
RobotDancer.prototype.setDuty('dancing');

function RobotCooker() {
}

RobotCooker.prototype = Object.create(Robot.prototype);
RobotCooker.prototype.constructor = RobotCooker;
RobotCooker.prototype.setName(RobotCooker.name);
RobotCooker.prototype.setDuty('cooking');

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