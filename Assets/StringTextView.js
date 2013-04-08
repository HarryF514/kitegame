#pragma strict
var pasttime:float;
function Start () {
	  guiText.material.color = Color.black;
//	  Debug.Log(guiText.fontSize);
	  guiText.fontSize=0;
//	  guiText.text = 20;
}

function Update () {
		if(	guiText.text!=GameObject.FindGameObjectWithTag('kite').GetComponent(KiteModel).ActuralStringNumber.ToString()){
		guiText.fontSize=30;
		guiText.material.color = Color.red;
		guiText.transform.position.y=0.99;
		pasttime=0;
	}
	else{
		pasttime += Time.deltaTime;
		if(pasttime>0.5){
			guiText.fontSize=0;
			guiText.material.color = Color.black;
			guiText.transform.position.y=0.98;
		}
	}

	guiText.text=GameObject.FindGameObjectWithTag('kite').GetComponent(KiteModel).ActuralStringNumber.ToString();
}


function OnGUI() {
    GUI.contentColor = Color.yellow;
}