
public var health:int;

function Start () {
	health =3;
}

function Update () {
	
	//Debug.Log(health);
	changeHealth(health);
	//renderer.material.SetTextureOffset ("_MainTex", Vector2(0,0));
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

