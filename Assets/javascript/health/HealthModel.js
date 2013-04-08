#pragma strict
var healthPosition:Transform;
var healthNumber:int;
var kiteModel: KiteModel;
kiteModel = GameObject.Find("KITE").GetComponent(KiteModel);	

function Start () {
	
}

function Update () {
	healthNumber=kiteModel.kiteHealth;
	changeHealth(healthNumber);
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