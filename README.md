# NODE---Martian-Robots-Code-Challenge
## Objective
The main objective of the problem was to create a code that given the data of a robot and a series of commands, help him move through a planet that we were given also the limits
If the robot fell of the planet the robot would stop executing commands and the output will leave its last coordinates and that it got lost but if the robot succesfully executes all of the command the output will be the last coordinates.
## Execution
- [Prerequisites](https://github.com/cuadantonio/NODE---Martian-Robots-Code-Challenge/blob/main/README.md#prerequisites)
- [Run main code]
- [Run tests]
### Prerequisites
There are two prequisites that you need in order to execute the code properly:
1. First you need to write your input into the file named **"file.txt"** with the first line being the limits of mars and the rest of the pairs of lines are going to be the initial coordinates of the robot and its initial orientation and the other line the commands that you want to execute being the only ones able **F** to move the robot forward, **R** to rotate the robot to the right and  **L** to rotate the robot to the left. *An example of this file is included*
2. The second prerequisite is to have **Node.js** installed on your machine. You can find instructions on how to download and install it [here](https://nodejs.org/es/).
### Run main code
There are two ways to execute the code:
1. The first one is by using Node.js directly. The first thing that you need to do is to open a terminal on the folder where you have all the files. Next you have to execute the following command ***node app.js***.
2. The other way to execute the code is by using Docker. In case you decide to choose this option you must download and install Docker first from [this link](https://www.docker.com/products/docker-desktop). Once you got it installed you must execute the following script that I have included with the files. If you are running it on Windows you must execute **windows-script.bat** but if you are running it on Linux or Mac you must execute **shell-script.sh**.
### Run tests
To run the test there is only one possible way. First, you need to open a terminal in the folder with all the files and then execute the command ***npm run test***.
