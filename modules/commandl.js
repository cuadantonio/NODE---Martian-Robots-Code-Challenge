/*
* This objects represents the command to turn left and has only one attribute that is robot of type Robot
* */
const Robot = require('./robot.js');

class CommandL{
    /*
    * This method is used to create the commandL object and needs to be passed a robot and uses the attributes of the robot
    * we pass to the commandL object to create the robot that is an attribute of the commandL object
    * */
    constructor(robot){
        this.robot=new Robot(robot.x,robot.y,robot.orientation);
    }
    /*
    * This method is used to rotate the robot to the left and uses the method rotateLeft that is on the robot object
    * */
    executeCommand(){
        this.robot.rotateLeft();
        return this.robot;
    }
}
module.exports=CommandL;
