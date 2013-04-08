#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {	
	if(isKiteInCloud(other)) Destroy (gameObject);
}

//check if the kite is in the cloud
//return true if the kite is in the cloud
function isKiteInCloud(gameObj:Collider){
	if(gameObj.tag=='kite'){
		return true;
	}
	else{
		return false;
	}
}

//if kite is escaping from cloud, descrease its opacity
//return opacity of the cloud
function decreaseCloudOpacity(){
	
}

//if the cloud opacity is less than 0.1, decrease the health of the cloud
function reduceCloudHealth(){}

//if the cloud have 0 health, destory the cloud
function destoryCloud(){}

