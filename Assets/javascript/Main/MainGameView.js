#pragma strict
private var mainGame: MainGameModel;
mainGame = gameObject.GetComponent(MainGameModel);	

private var commonMethod: CommonMethod;

function Start () {	
	var clone:GameObject = Instantiate(Resources.Load('background'),new Vector3(0,0,0),Quaternion.Euler(90,180,0)) as GameObject;
	Instantiate(Resources.Load('background'),new Vector3(clone.transform.localScale.x*10,0,0),Quaternion.Euler(90,180,0));
}

function Update () {
	createBackground();
}


function createBackground(){
	var background = GameObject.FindGameObjectsWithTag ("background");
	if(background.Length<3){
	var backgroundClone:GameObject = background[0];	
	mainGame.gameLevel++;
	Instantiate(Resources.Load('background'),new Vector3(backgroundClone.transform.localScale.x*10*(mainGame.gameLevel+1),0,0),Quaternion.Euler(90,180,0));
	}
}