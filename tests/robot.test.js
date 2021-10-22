/*
* The main functionality of this file is to test if all the methods from the Robot object work properly
*
* Also, we only have test of the Robot methods because the only other objects that could be tested are the different
* command objects but their methods are based mainly on the robot object methods so, if the robot methods work properly,
* the command methods are going to work properly
* */

const Robot = require('../modules/robot.js');
const robot1 = new Robot(1,1,"N");
const robot2 = new Robot(1,1,"N");
const robot3 = new Robot(1,1,"N");
const robot4 = new Robot(1,1,"N");
const robot5 = new Robot(1,1,"N");
const robot6 = new Robot(1,1,0);
const robot7 = new Robot(1,1,0);
const robot8 = new Robot(1,1,"N");
const robot9 = new Robot(1,1,"N");
const robot10 = new Robot(1,1,0);
test('Robot is on X=1',()=>{
   expect(robot1.getX()).toBe(1);
});
test('Robot is on Y=1',()=>{
   expect(robot1.getX()).toBe(1);
});
test('Robot has orientation N',()=>{
   expect(robot1.getOrientation()).toBe("N");
});
test('Robot is not lost',()=>{
   expect(robot1.getLost()).toBe(false);
});
test('Robot can move from X=1 to X=2',()=>{
   robot2.moveEast();
   expect(robot2.getX()).toBe(2);
});
test('Robot can move from X=1 to X=0',()=>{
   robot3.moveWest();
   expect(robot3.getX()).toBe(0);
});
test('Robot can move from Y=1 to Y=2',()=>{
   robot4.moveNorth();
   expect(robot4.getY()).toBe(2);
});
test('Robot can move from Y=1 to Y=0',()=>{
   robot5.moveSouth();
   expect(robot5.getY()).toBe(0);
});
test('Robot can rotate to the left',()=>{
   robot6.rotateLeft();
   expect(robot6.getOrientation()).toBe(270);
});
test('Robot can rotate to the right',()=>{
   robot7.rotateRight();
   expect(robot7.getOrientation()).toBe(90);
});
test('Robot can change its state from not lost to lost',()=>{
   robot8.setLost();
   expect(robot8.getLost()).toBe(true);
});
test('Robot can transform its orientation form string format to integer format',()=>{
   robot9.transformOrientationFromStringToInt();
   expect(robot9.getOrientation()).toBe(0);
});
test('Robot can transform its orientation form integer format to string format',()=>{
   robot10.transformOrientationFromIntToString();
   expect(robot10.getOrientation()).toBe("N");
});
