var cameraTarget :GameObject; //object to look at /follow
var player :GameObject; //player object for moving

var smoothTime :float = 0.1;  //time for camera dampen
var cameraFollowX :boolean = true; //camera follows on horizontal
var cameraFollowY :boolean = true; //camera follows on vertical
var cameraFollowHeight :boolean = false; //camera follow cameraTarget object height, not the Y
var cameraHeight : float = 2.5;   //height of camera adjustable in the inspector
var velocity :Vector2;  		//speed of the camera movement

var cameraZoom :boolean = false; //toogle for zoom in and out on orthographic size
var cameraZoomMax :float = 2.5;  //minimum amount that camera can pull in
var cameraZoomMin :float = 4.0;   //maximum amount that camera can pull out
var cameraZoomTime :float = 0.03; //speed for camera zooming

private var thisTransform : Transform;  //cameras transform
private var curPos : float = 0.0;  //current position of cameraTarget

private var playerJumpheight : float = 0.0; //store jump height of player


function Start () 
{
	thisTransform = transform;
}

function Update () 
{
	if (cameraFollowX)
	{
		thisTransform.position.x = Mathf.SmoothDamp (thisTransform.position.x, cameraTarget.transform.position.x,velocity.x, smoothTime);
		
	}
	if (cameraFollowY)
	{
		thisTransform.position.y = Mathf.SmoothDamp (thisTransform.position.y, cameraTarget.transform.position.y,velocity.y, smoothTime);
		
	}
	if (cameraFollowY && cameraFollowHeight)
	{
		camera.transform.position.y = cameraHeight;
	}
	
	//when kite hit bird or cloud 
	
	

}