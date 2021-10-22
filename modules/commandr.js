/*
* This objects represents the command to turn right and has only one attribute that is robot of type Robot
* */

const Robot = require('./robot.js');

class CommandR{
    /*
    * This method is used to create the commandR object and needs to be passed a robot and uses the attributes of the robot
    * we pass to the commandR object to create the robot that is an attribute of the commandR object
    * */
    constructor(robot){
        this.robot=new Robot(robot.x,robot.y,robot.orientation);
    }
    /*
    * This method is used to rotate the robot to the right and uses the method rotateRight that is on the robot object
    * */
    executeCommand(){
        this.robot.rotateRight();
        return this.robot;
    }
}
module.exports=CommandR;
