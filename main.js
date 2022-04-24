
// Create canvas variable
var canvas=new fabric.canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	function mew_image(get_image)
	{
	fabric.image.fromURL(get_image,function(Img)	{
		block_image_object=Img;
		block_imagr_object.scaleTowidth(block_image_width);
		block_imagr_object.scaleToHeight(block_image_height);	
top:block_y,
left:block_x
	});
	canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '?') // add appropriate keycode
	{
		// upload red ranger
		if(keyPressed=='82')
		{
			new_image('rr1.png');
			console.log("r");S
		}
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	}
	
}

