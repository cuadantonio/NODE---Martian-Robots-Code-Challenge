/*
* This first part of the code is used to set all the constants that the program needs
* */

const fs = require('fs');
const Robot = require('./modules/robot.js');
const CommandL = require('./modules/commandl.js');
const CommandR = require('./modules/commandr.js');
const CommandF = require('./modules/commandf.js');
/*
This next line of the code is used to read the input data from 'file.txt' and stores it on a constant named data
* */
const data = fs.readFileSync('file.txt', 'UTF-8');
/*
* On this next part of the code we split the data we read previously into an string and we store the 2 numbers from the first
* line on the input file into 2 different variables, each containing one number
* */
const lines = data.split(/\r?\n/);

const limitX = lines[0].split(" ")[0];
const limitY = lines[0].split(" ")[1];

/*
* This for loop has the function to move between every robot data and the commands that correspond to that robot stored
* on the lines array
* We use i to access the corresponding robot data and i+1 to access the commands of that robot
* */
for(var i = 1;i<lines.length;i=i+2){
    /*
    * We store the corresponding data of the robot in different constants to later create an object of type Robot with
    * the data we read previously
    * */
    const robotX = parseInt(lines[i].split(" ")[0]);
    const robotY = parseInt(lines[i].split(" ")[1]);
    const robotOrientation = lines[i].split(" ")[2];
    let robot = new Robot(robotX,robotY,robotOrientation);
    /*
    * As we write in the input the robot orientation on a string format we need to change it to integer format in order
    * to be able to perform some of the commands
    * */
    robot.transformOrientationFromStringToInt();
    /*
    * On this part of the code we store all of the commands in an array and split it by spaces so we can read one by one
    * on the for loop
    * */
    const commsAux = lines[i+1];
    let comms = commsAux.split("");
    for (let j = 0; j < comms.length; j++) {
        /*
        * On this first part of the loop we check if the robot came from the previous command lost, it it came lost we stop
        * the loop as it can not perform any other command because it got lost
        * */
        if(robot.getLost()===true){
            break;
        }
        const commandAux = comms[j];
        /*
        * Now if the robot is not lost we check the corresponding command that needs to be executed and depending on the
        * command that needs to be executed we create an object of that command and execute the corresponding method
        * that has the actions of tha command inside
        * So if a new command is created we only need to create a new case and a new object that inside of it has the
        * method with the actions that need to be performed on that command
        * */
        switch(commandAux){
            case "R":
                const commandr = new CommandR(robot);
                robot = commandr.executeCommand();
                break;
            case "L":
                const commandl = new CommandL(robot);
                robot = commandl.executeCommand();
                break;
            case "F":
                const commandf = new CommandF(robot,limitX,limitY);
                robot = commandf.executeCommand();
                break;
        }
        
    }
    /*
    * Once we end up executing all of the robot actions we change the orientation format from the integer one to the
    * original string one so we can write the output on the correct format
    * */
    robot.transformOrientationFromIntToString()
    /*
    * As the final part of the main code we need to check if the robot is lost or not because depending on that we are
    * gonna write the output on console in a format or another and once we write the robot on the console
    * we go on to read from the input file the next robot data and execute its corresponding commands
    * */
    if(robot.getLost()===true) {
        const finalRobot = robot.getX() + " " + robot.getY() + " " + robot.getOrientation() + " LOST"+"\n";
        console.log(finalRobot);
    }else{
        const finalRobot = robot.getX() + " " + robot.getY() + " " + robot.getOrientation() +"\n";
        console.log(finalRobot);
    }

}

