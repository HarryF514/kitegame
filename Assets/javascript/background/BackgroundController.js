#pragma strict

function Start () {

}

function Update () {
//	Debug.Log(renderer.isVisible);
}

function OnBecameInvisible () {
	//Debug.Log('destory');
   Destroy(gameObject);
}