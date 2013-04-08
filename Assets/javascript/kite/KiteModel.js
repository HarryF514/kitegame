#pragma strict
var kiteHealth:int;
var kitePosition:float;
var kiteSpeed:float;
var isHit:boolean;
var stringNumber:float;
var  ActuralStringNumber:int;
kiteSpeed=6;
kiteHealth=3;
stringNumber=10;
ActuralStringNumber=20;
function Start () {

}

function Update () {
	changeStringByPosition();
	if(ActuralStringNumber<0){
		Application.LoadLevel (0);
	}
}

function changeStringByPosition(){
	 kitePosition = gameObject.transform.position.x;
	if(kitePosition>0.0){
		ActuralStringNumber=10 -Mathf.Round(kitePosition/10)+stringNumber;
	}
	
}

