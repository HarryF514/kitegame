#pragma strict
var birdModel: BirdModel;
birdModel = gameObject.GetComponent(BirdModel);	

function Start () {

}

function Update () {
	transform.Translate(Vector3.right * Time.deltaTime*birdModel.birdSpeed);
	destroyWhenReachEnd(gameObject.transform.localPosition.x);
}

function OnTriggerEnter (other : Collider) {
	if(other.tag=='kite') {
		birdModel.ishit=true;
	}
}

//para:location is the local position of the bird relative to the background 
function destroyWhenReachEnd(location:float){
	if(location>5){
		Destroy (gameObject);
	}
}

