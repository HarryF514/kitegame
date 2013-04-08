#pragma strict
var commonMethod:CommonMethod;
commonMethod=FindObjectOfType(CommonMethod);

var birdModel: BirdModel;
birdModel = gameObject.GetComponent(BirdModel);	


function Start () {

}

function Update () {
	switch(birdModel.ishit)
	{
		case false:
		birdFlying();
		break;
		case true:
		birdDying();
		break;
	}	
}

//bird flying animation
function birdFlying(){
	commonMethod.aniSprite(11,1,0,0,8,8,gameObject);
}

//bird dying animation
function birdDying(){
	commonMethod.aniSprite(11,1,8,0,3,2,gameObject);
}