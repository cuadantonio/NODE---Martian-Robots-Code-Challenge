/**/

const fs = require('fs');
const Robot = require('./robot.js');
const CommandL = require('./commandl.js');
const CommandR = require('./commandr.js');
const CommandF = require('./commandf.js');
const data = fs.readFileSync('file.txt', 'UTF-8');

const lines = data.split(/\r?\n/);

const limitX = lines[0].split(" ")[0];
const limitY = lines[0].split(" ")[1];

fs.writeFile('output.txt',"",err=>{
    if(err){
        console.error(err);
        return
    }
})

for(var i = 1;i<lines.length;i=i+2){
    const robotX = parseInt(lines[i].split(" ")[0]);
    const robotY = parseInt(lines[i].split(" ")[1]);
    const robotOrientation = lines[i].split(" ")[2];
    let robot = new Robot(robotX,robotY,robotOrientation);
    robot.transformOrientationFromStringToInt();
    const commsAux = lines[i+1];
    let comms = commsAux.split("");
    for (let j = 0; j < comms.length; j++) {
        if(robot.getLost()===true){
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
    robot.transformOrientationFromIntToString()
    if(robot.getLost()===true) {
        const finalRobot = robot.getX() + " " + robot.getY() + " " + robot.getOrientation() + " LOST"+"\n";
        fs.appendFile('output.txt',finalRobot,err=>{
            if(err){
                console.error(err);
                return
            }
        })
    }else{
        const finalRobot = robot.getX() + " " + robot.getY() + " " + robot.getOrientation() +"\n";
        fs.appendFile('output.txt',finalRobot,err=>{
            if(err){
                console.error(err);
                return
            }
        })
    }

}

