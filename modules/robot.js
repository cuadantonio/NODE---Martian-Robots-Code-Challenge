/*
* This object represents the robot and has the attributes to store the data of a robot and the methods to change its values
* */
class Robot {
    /*
    * This method is used to create a robot with the attributes x, y and orientation depending on the parameters we pass
    * to it but setting the parameter isLost false on default
    * */
    constructor(x,y,orientation){
        this.x=x;
        this.y=y;
        this.orientation=orientation;
        this.isLost=false;
    }
    /*
    * This first four methods are used to get the value of each of the corresponding attributes
    * */
    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getOrientation(){
        return this.orientation;
    }

    getLost(){
        return this.isLost;
    }
    /*
    * This next four methods are used to change the robot x or y attribute on a different way depending of every method
    * */
    moveNorth(){
        this.y+=1;
    }

    moveSouth(){
        this.y-=1;
    }

    moveEast(){
        this.x+=1;
    }

    moveWest(){
        this.x-=1;
    }
    /*
    * The nex two methods are used to rotate the robot to the corresponding orientation depending if it has to rotate right
    * or left
    * */
    rotateLeft(){
        if(this.orientation==0){
            this.orientation=270;
        }else{
            this.orientation=this.orientation-90;
        }
    }

    rotateRight(){
        if(this.orientation==270){
            this.orientation=0;
        }else{
            this.orientation=this.orientation+90;
        }
    }
    /*
    * This method is used to make the robot lost when needed
    * */
    setLost(){
        this.isLost=true;
    }
    /*
    * This two last methods are used to change the orientation format
    * */
    transformOrientationFromStringToInt(){
        switch (this.orientation){
            case "N":
                this.orientation=0;
                break;
            case "E":
                this.orientation=90;
                break;
            case "S":
                this.orientation=180;
                break;
            case "W":
                this.orientation=270;
                break;
        }
    }
    transformOrientationFromIntToString(){
        switch (this.orientation){
            case 0:
                this.orientation="N";
                break;
            case 90:
                this.orientation="E";
                break;
            case 180:
                this.orientation="S";
                break;
            case 270:
                this.orientation="W";
                break;
        }

    }
}

module.exports = Robot;
