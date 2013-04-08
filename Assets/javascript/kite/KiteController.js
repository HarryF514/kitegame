#pragma strict
//model variable;
//var kiteHealth:int;
//var kitePosition:int;
//var kiteSpeed:Transform;

var kiteModel: KiteModel;
kiteModel = gameObject.GetComponent(KiteModel);	

var commonMethod:CommonMethod;
commonMethod=FindObjectOfType(CommonMethod);


function Start () {
}

function Update () {
//	Debug.Log(commonMethod.gerModelVariable('mainGame','MainGameModel').gameLevel);
	applyDesktopControl(kiteModel.kiteSpeed);
	kiteOutofBound();
	showGameOverScreen();
}

//This message is sent to the trigger collider and the rigidbody (or the collider if there is no rigidbody) that touches the trigger. 
//Note that trigger events are only sent if one of the colliders also has a rigid body attached.
function OnTriggerEnter (other : Collider) {
	if(other.tag=='bird'){
		kiteModel.kiteHealth--;
	}
	if(other.tag=='dandelion'){
		kiteModel.stringNumber+=2;
	}
	if(other.tag=='cloud'){
		kiteModel.stringNumber--;
	}
}

//when kite collide with other object, get the tag name of the other collision obj. 
//return the name of the tag name
function getCollistionObjTag(gameObj:GameObject){
	
	return gameObj.tag;
}

//if the kite hit the bird, it will reduce health just once
function reduceHealth(){
	if(kiteModel.isHit) kiteModel.kiteHealth--;
	kiteModel.isHit=false;
	
}

//if the kite hit the dandelion, it will add some string
function addString(){
	kiteModel.stringNumber++;
}

//if the kite hit the cloud, it will stick with the cloud
//return true if it stick with the cloud.
function stickWithCloud(){}

//if the kite stick with the cloud, show help message
function showHelpMessage(){}

//iphone escape from the kite control
function escapeFromCloudIphone(){}

//deskto escape from the kite control
function escapeFromcloudDesktop(){}

//implement the iphone control of the kite
function kiteIphoneControl(){}

//if the kite is out of uppper bound, it will appear at the bottom, if the kite is out of the lower bound, it will appear at the top
function kiteOutofBound(){
	var verticalPosition = gameObject.transform.localPosition.y;
	if(verticalPosition>7){gameObject.transform.localPosition.y=-7;}
	if(verticalPosition<-7){gameObject.transform.localPosition.y=7;}
}

//implement the pc control of the kite
//para: upKey, the key represent up movement, ect. moveSpeed is a moving speed
function applyDesktopControl(moveSpeed:float){
	var level = commonMethod.gerModelVariable('mainGame','MainGameModel').gameLevel;
	transform.Translate(moveSpeed*-1*Time.deltaTime*0.3*(level+1),0,0); 
	if (Input.GetKey ("d"))
	{
		transform.Translate(moveSpeed*-1*Time.deltaTime,0,0); 
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

//if the kite health is less than 1, move to game over screen
function showGameOverScreen(){
	if(kiteModel.kiteHealth<1){
		Application.LoadLevel (0);
	}
}