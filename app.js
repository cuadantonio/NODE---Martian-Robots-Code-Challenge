const fs = require('fs');
const Robot = require('./robot.js');
const CommandL = require('./commandl.js');
const CommandR = require('./commandr.js');
const CommandF = require('./commandf.js');
const data = fs.readFileSync('file.txt', 'UTF-8');

const lines = data.split(/\r?\n/);

const limitX = lines[0].split(" ")[0];
const limitY = lines[0].split(" ")[1];


for(var i = 1;i<lines.length;i=i+2){
    const robotX = parseInt(lines[i].split(" ")[0]);
    const robotY = parseInt(lines[i].split(" ")[1]);
    const robotOrientation = lines[i].split(" ")[2];
    let robot = new Robot(robotX,robotY,robotOrientation);
    robot.transformOrientation();
    console.log("Inicial");
    console.log(robot.getX());
    console.log(robot.getY());
    console.log(robot.getOrientation());
    const commsAux = lines[i+1];
    let comms = commsAux.split("");
    for (let j = 0; j < comms.length; j++) {
        if(robot.isLost===true){
            break;
        }
        const commandAux = comms[j];
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
    console.log("Final");
    console.log(robot.getX());
    console.log(robot.getY());
    console.log(robot.getOrientation());
    //console.log(robot.getOrientation());
    //console.log(comms);
}

//var robot = new Robot(1,1,0);
//let command = new CommandL(robot);
//console.log(robot.getOrientation());
//robot = command.executeCommand();
//console.log(robot.getOrientation());
