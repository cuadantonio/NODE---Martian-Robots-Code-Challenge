const Robot = require('./robot.js');

class CommandL{
    constructor(robot){
        this.robot=new Robot(robot.x,robot.y,robot.orientation);
    }

    executeCommand(){
        this.robot.rotateLeft();
        return this.robot;
    }
}
module.exports=CommandL;