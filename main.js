canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

mars_images=["Mars1.jpeg", "Mars2.jpeg", "Mars3.jpeg", "Mars4.jpeg", "Mars5.jpeg", "Mars6.jpeg"];
random_number= Math.floor(Math.random()* 6);
console.log(random_number);
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_img=mars_images[random_number];
console.log("background_img= "+background_img);
rover_img="rover.png";

function add(){
    background_imgN=new Image();
    background_imgN.onload=uploadbackground;
    background_imgN.src=background_img;

    rover_imgN=new Image();
    rover_imgN.onload=uploadrover;
    rover_imgN.src=rover_img;
}

function uploadbackground(){
    ctx.drawImage(background_imgN, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgN, rover_x, rover_y, rover_width, rover_height);
}

 window.addEventListener("keydown", mykeydown);
 function mykeydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=='38'){
        up();
        console.log("up");
    }
    if(keypress=='37'){
        left();
        console.log("left");
    }
    if(keypress=='39'){
        right();
        console.log("right");
    }
    if(keypress=='40'){
        down();
        console.log("down");
    }
 }
 function up(){
     if(rover_y >=0){
         rover_y = rover_y - 10;
         console.log("When up arrow is pressed, x= "+rover_x + " | y= "+rover_y);
         uploadbackground();
         uploadrover();
     }
 }
 function down(){
    if(rover_y <=500){
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x= "+rover_x + " | y= "+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(rover_x <=700){
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x= "+rover_x + " | y= "+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if(rover_x >=0){
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x= "+rover_x + " | y= "+rover_y);
        uploadbackground();
        uploadrover();
    }
}

