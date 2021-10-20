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

    isLost(){
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
    transformOrientation(){
        if(this.orientation=="N"){
            this.orientation=0;
        }else if(this.orientation=="E"){
            this.orientation=90;
        }else if(this.orientation=="S"){
            this.orientation=180;
        }else if(this.orientation=="W"){
            this.orientation=270;
        }
    }
}

module.exports = Robot;
