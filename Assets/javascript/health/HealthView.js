#pragma strict
var healthModel: HealthModel;
healthModel = gameObject.GetComponent(HealthModel);	


function Start () {

}

function Update () {
	changeHealth(healthModel.healthNumber);
}

function changeHealth(health){
	switch (health)
		{
			case 3:
			renderer.material.SetTextureOffset ("_MainTex", Vector2(0,0));
			break;
			case 2:
			renderer.material.SetTextureOffset ("_MainTex", Vector2(0.333,0));
			break;
			case 1:
			renderer.material.SetTextureOffset ("_MainTex", Vector2(0.666,0));
			break;
		}
}

//1 health
function showOneHealth(){}

//2 health 
function showTwoHealth(){}

//3 health
function showThreeHealth(){}