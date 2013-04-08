#pragma strict
var commonMethod:CommonMethod;
commonMethod=FindObjectOfType(CommonMethod);

function Start () {
	
}

function Update () {
	//kiteFlying(gameObject);
	//Debug.Log(gameObject.renderer.material.mainTextureOffset);
	commonMethod.aniSprite(3,1,0,0,3,8,gameObject);
//	Debug.Log(commonMethod);
}

//kite flying sprite
function kiteFlying(gameObject,kiteId:int){
	switch(kiteId)
	{
		case 1:
		commonMethod.aniSprite(3,1,0,0,3,8,gameObject);
		break;
		
		case 2:
		commonMethod.aniSprite(3,1,0,0,3,8,gameObject);
		break;
		
		case 3:
		commonMethod.aniSprite(3,1,0,0,3,8,gameObject);
		break;
	}
	commonMethod.aniSprite(3,1,0,0,3,8,gameObject);
	
}

//