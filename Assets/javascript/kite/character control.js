var moveSpeed: float =0.2;
var isZoom :boolean = false;

public var health : GameObject; 
public var kateHealthScript : healthScript;

function Start () {
 	health = GameObject.Find("health");
 		
	kateHealthScript=health.GetComponent(healthScript);
//	Debug.Log(kateHealthScript.health);
}

function Update () 
{	 
//	Debug.Log(renderer.isVisible);
//	Debug.Log(kateHealthScript.health);
	var aniPlay = GetComponent("aniSprite");
	aniPlay.aniSprite(3,1,0,0,3,8);
	
	transform.Translate(moveSpeed*-1*Time.deltaTime*0.3,0,0); 
	if (Input.GetKey ("d"))
	{
		transform.Translate(moveSpeed*-1*Time.deltaTime,0,0); 
		// rigidbody.AddForce (3, 0, 0); 
	//	 rigidbody.AddRelativeForce (-3, 0, 0);
	}
	if (Input.GetKey ("a"))
	{
		transform.Translate(moveSpeed*Time.deltaTime,0,0);
	}
	if (Input.GetKey ("s"))
	{
		transform.Translate(0,0,moveSpeed*Time.deltaTime);
	}
	if (Input.GetKey ("w"))
	{
		transform.Translate(0,0,moveSpeed*-1*Time.deltaTime);
	}
	

}




function OnTriggerEnter (other : Collider) {
//	Debug.Log('OnTriggerEnter collision in KITE control'); 
	
	if(other.rigidbody) //Debug.Log(other.rigidbody.name);
	
	if(other.rigidbody.name=="bird"||other.rigidbody.name=="bird(Clone)")
	{		Debug.Log(other.rigidbody.name);
			Debug.Log('hit the cloud'); 
			kateHealthScript.health--;
	}
}
