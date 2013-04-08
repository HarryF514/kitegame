

function Start () {

}

function Update () 
{
	var zoomCam = GetComponent("camera");
	if (  Input.Getkey ("h") )
	{
		
		zoomCam.camera.orthographicSize = 0.8;
		
	}
}