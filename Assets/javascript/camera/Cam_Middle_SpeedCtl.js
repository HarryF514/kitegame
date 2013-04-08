var moveSpeed: float =0.15;


function Start () {

}

function Update () 
{
	
	if (Input.GetKey ("d"))
	{
		transform.Translate(moveSpeed*Time.deltaTime,0,0);
	}

}