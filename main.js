canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_mars_images_array=["nasa image 1.jpg","nasa image 2.jpg","nasa image 3.jpg","nasa image 4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
rover_width=100;
rover_height=90;
baground_image=nasa_mars_images_array[random_number];
console.log("baground_image="+baground_image);
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add(){
    baground_imgtag=new Image();
    baground_imgtag.onload=uploadbaground;
    baground_imgtag.src=baground_image;
    rover_imgtag= new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;

}
function uploadbaground(){
ctx.drawImage(baground_imgtag,0,0,canvas.width,canvas.height);


}
function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_key_down);
function my_key_down(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
        up();
        console.log("up");

    }
    if(keypressed=="40"){
        down();
        console.log("down");
    }
    if(keypressed=="37"){
        left();
        console.log("left");
    }
    if(keypressed=="39"){
        right();
        console.log("right");
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed,x="+rover_x+"and y="+rover_y);
        uploadbaground();
        uploadrover()

    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed,x="+rover_x+"and y="+rover_y);
        uploadbaground();
        uploadrover()

    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed,x="+rover_x+"and y="+rover_y);
        uploadbaground();
        uploadrover()

    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when right arrow is pressed,x="+rover_x+"and y="+rover_y);
        uploadbaground();
        uploadrover()

    }
}