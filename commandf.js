const Robot = require(`./robot.js`);
class CommandF {

    constructor(robot,limitX,limitY){
        this.robot = new Robot(robot.x,robot.y,robot.orientation);
        this.limitX=limitX;
        this.limitY=limitY;

    }

    executeCommand(){
        const robotOrientation = this.robot.getOrientation();
        const robotX = this.robot.getX();
        const robotY = this.robot.getY();
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