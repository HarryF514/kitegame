
#pragma strict
var i:int=0;
//var health : int 100;
public var health : GameObject; 
public var kateHealthScript : healthScript;

function Start() {
	health = GameObject.Find("health");
	kateHealthScript=health.GetComponent(healthScript);
	//Debug.Log(kateHealthScript.health);
}

//return true if the kate is in the upper level
function isUpper(){
	if(Input.mousePosition.y -Screen.height/2 > 0){return true;}
	else{return false;}
}

//return true if the kate is in the left level
function isLeft(){
	if(Input.mousePosition.x-Screen.width/2 < 0){return true;}
	else{return false;}
}

//control the direction of the kate by mouse click position
function gameControl(){
	if (Input.anyKey) {
    	if(isUpper()&&isLeft()){
    		//Debug.Log('upper left');
    		rigidbody.AddForce (1, 1, 0);
    	}
    	else if(!isUpper()&&isLeft()){
    		//Debug.Log('lower left');
    		rigidbody.AddForce (1, -1, 0);
    	}
    	else if(isUpper()&&!isLeft()){
    		//Debug.Log('upper right');
    		rigidbody.AddForce (-1, 1, 0);
    	}
    	else if(!isUpper()&&!isLeft()){
    		//Debug.Log('lower right');
    		rigidbody.AddForce (-1, -1, 0);
    	}
    }
}


//if the kate is outside of the game, restart the game
function isKateOut(){
	
}

function Update() {
	
//	Debug.Log(Input.mousePosition.y-Screen.height/2);
	//	Debug.Log(transform.position.x); 
	//Debug.Log(Input.mousePosition);
	 if (Input.GetKeyDown ("space"))
        {
        	Application.LoadLevel (0);
        }
	gameControl();
	
    
}


function OnCollisionEnter(collision : Collision) {
	Debug.Log('kate collistion detect');	 
	  kateHealthScript.health--;
}
