/*
* This objects represents the command to move forward and has three attributes one that is robot of type Robot, another
* that stores the limit of coordinate X of mars and another that stores the limit of coordinate Y of mars
* */
const Robot = require(`./robot.js`);
class CommandF {
    /*
    * This method is used to create the commandF object and needs to be passed a robot and uses the attributes of the robot
    * we pass to the commandF object to create the robot that is an attribute of the commandF object and we also pass both
    * of the limits of mars so we can store them
    * */
    constructor(robot,limitX,limitY){
        this.robot = new Robot(robot.x,robot.y,robot.orientation);
        this.limitX=limitX;
        this.limitY=limitY;

    }
    /*
    * This method is used to move the robot forward and uses some of the methods that are on the robot object
    * */
    executeCommand(){
        /*
        * First we store on local consts the values of the robot attribute of the commandF object
        * */
        const robotOrientation = this.robot.getOrientation();
        const robotX = this.robot.getX();
        const robotY = this.robot.getY();
        /*
        * Then depending on the robot attribute orientation we first check if it is going to be lost if we move forward and
        * setting it lost and not moving, but if it is on a place where it can move and not getting lost we make it move
        * to the corresponding direction depending on its orientation
        * */
        if(robotOrientation==0){
            if(robotY==this.limitY){
                this.robot.setLost();
            }else{
                this.robot.moveNorth();
            }
        }else if(robotOrientation==180){
            if(robotY==0){
                this.robot.setLost();
            }else{
                this.robot.moveSouth();
            }
        }else if(robotOrientation==90){
            if(robotX==this.limitX){
                this.robot.setLost();
            }else{
                this.robot.moveEast();
            }
        }else if(robotOrientation==270){
            if(robotX==0){
                this.robot.setLost();
            }else{
                this.robot.moveWest();
            }
        }
        return this.robot;
    }

}
module.exports=CommandF;
