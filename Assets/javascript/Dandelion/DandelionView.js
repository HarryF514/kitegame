#pragma strict
var dandelionModel: DandelionModel;
dandelionModel = gameObject.GetComponent(DandelionModel);	



function Start () {

}

function Update () {
	switch(dandelionModel.dandelionHealth){
		case 0:
		Destroy (gameObject);
		break;
	}
}

//dandelion is disappearing
function dandelionDisappearing(){}