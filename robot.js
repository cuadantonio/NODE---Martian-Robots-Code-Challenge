class Robot {
    constructor(x,y,orientation){
        this.x=x;
        this.y=y;
        this.orientation=orientation;
        this.isLost=false;
    }

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

    setLost(){
        this.isLost=true;
    }
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
