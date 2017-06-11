var rover = {
  position: [0,0],
  direction: 'N'
};

var obstacle = {
  position: [3,4]
};



roverMoves();

function roverMoves(){
  var movements = prompt("Where do you want to move the Rover? f:Forward; b:backward; r:right; l:left");
  for(var i=0; i< movements.length; i++){
    switch(movements[i]){
      case"f":
            goForward();
            break;
      case "b":
            goBackward();
            break;
      case "l":
            goLeft();
            break;
      case "r":
            goRight();
            break;
      default:
            console.log ("The command you introduced was not in the correct format.");
    }
  }
    obstacleAlert();
}





function startAgain() {
  rover.position[0] = 0;
  rover.position[1] = 0;
  rover.direction = 'N';
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}
function obstacleAlert() {
  if(rover.position[0] == obstacle.position[0] && rover.position[1] == obstacle.position[1]){
    console.log("Obstacle Alert. Rover goes back to its starting position: [0,0] - Direction:N");
    startAgain();
    console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
  }
  else {

  }
}

function gridCheck () {

      if(rover.position[0]>10){
        rover.position[0]=0;
      }

      if(rover.position[1]>10){
        rover.position[1]=0;
      }
      if(rover.position[0]<0){
        rover.position[0]=10;
      }
      if(rover.position[1]<0){
        rover.position[1]=10;
      }
}

function goForward() {
  console.log("rover moving forward");
  switch(rover.direction) {
    case 'N':
      rover.position[0]+= 1;
      gridCheck();
      break;
    case 'E':
      rover.position[1]+=1;
      gridCheck();
      break;
    case 'S':
      rover.position[0]-=1;
      gridCheck();
      break;
    case 'W':
      rover.position[1]-=1;
      gridCheck();
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}



function goBackward() {
  console.log("rover moving backwards");
  switch(rover.direction) {
    case 'N':
      rover.position[0]-=1;
      gridCheck();
      break;
    case 'E':
      rover.position[1]-=1;
      gridCheck();
      break;
    case 'S':
      rover.position[0]+=1;
      gridCheck();
      break;
    case 'W':
      rover.position[1]+=1;
      gridCheck();
      break;
  }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}


function goLeft() {
  switch(rover.direction) {
    case 'N':
      rover.direction='W';
      console.log("rover facing West");
      break;
    case 'E':
      rover.direction='N';
      console.log("rover facing North");
      break;
    case 'S':
      rover.direction='E';
      console.log("rover facing East");
      break;
    case 'W':
      rover.direction='S';
      console.log("rover facing South");
      break;
  }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}


function goRight() {
  switch(rover.direction) {
    case 'N':
      rover.direction='E';
      console.log("rover facing East");
      break;
    case 'E':
      rover.direction='S';
      console.log("rover facing South");
      break;
    case 'S':
      rover.direction='W';
      console.log("rover facing West");
      break;
    case 'W':
      rover.direction='N';
      console.log("rover facing North");
      break;
  }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}
