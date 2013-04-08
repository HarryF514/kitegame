var moveSpeed: float =0.1;


function Start () {

}

function Update () 
{
	
	if (Input.GetKey ("d"))
	{
		transform.Translate(moveSpeed*Time.deltaTime,0,0);
	}

}