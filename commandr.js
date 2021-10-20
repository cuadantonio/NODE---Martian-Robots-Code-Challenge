const Robot = require('./robot.js');

class CommandR{
    constructor(robot){
        this.robot=new Robot(robot.x,robot.y,robot.orientation);
    }

    executeCommand(){
        this.robot.rotateRight();
        return this.robot;
    }
}
module.exports=CommandR;