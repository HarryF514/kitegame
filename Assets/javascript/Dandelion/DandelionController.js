#pragma strict

var dandelionModel: DandelionModel;
dandelionModel = gameObject.GetComponent(DandelionModel);	


function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
	if(other.tag=='kite') {
		dandelionModel.dandelionHealth--;
	}
}

//if the kit hit the dandelion, descrease its opacity to 0 within 1 second
//return dandelion opacity
function decreaseDandelionOpacity(){}

//if the opacity is less than 0.1, destory dandelion
function destoryDandelion(opacity:float){}