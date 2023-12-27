const grid = document.querySelector(".grid");
const blockWidth = 100;
const blockHeight = 20;
const boardWidth = 560;
let timerId;

const userStart = [230, 10];
let currentPosition = userStart;

const ballStartPosition = [270, 40];
let ballCurrentPosition = ballStartPosition;

// create block individual
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topLeft = [xAxis, yAxis + blockHeight];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
  }
}

//all my blocks
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];

//draw all my blocks
const addBlocks = () => {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    grid.appendChild(block);
  }
};

addBlocks();

//add User

const user = document.createElement("div");
user.classList.add("user");
user.style.left = currentPosition[0] + "px";
user.style.bottom = currentPosition[1] + "px";
grid.appendChild(user);

//draw the user
const drawUser = () => {
  user.style.left = currentPosition[0] + "px";
  user.style.bottom = currentPosition[1] + "px";
};

//move user bar
const moveUser = (e) => {
  switch (e.key) {
    case "ArrowLeft":
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10;
        drawUser();
      }
      break;
    case "ArrowRight":
      if (currentPosition[0] < boardWidth - blockWidth) {
        currentPosition[0] += 10;
        drawUser();
      }
      break;
  }
};

document.addEventListener("keydown", moveUser);
// draw the ball
const drawBall = () => {
  ball.style.left = ballCurrentPosition[0] + "px";
  ball.style.bottom = ballCurrentPosition[1] + "px";
};

// add ball
const ball = document.createElement("div");
ball.classList.add("ball");
ball.style.width = 20 + "px";
ball.style.height = 20 + "px";
ball.style.backgroundColor = "red";
drawBall();
grid.appendChild(ball);

//move the ball
const moveTheBall = () => {
  ballCurrentPosition[0] += 2;
  ballCurrentPosition[1] += 2;
  drawBall();
};

timerId = setInterval(moveTheBall, 30);
