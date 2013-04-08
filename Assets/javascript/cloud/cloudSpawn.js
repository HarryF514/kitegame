#pragma strict

public var prefabcloud:Transform;
public var cloudSpawnPoint: Transform;

public var hitSound:AudioClip;
function Start () {
	createcloud();
}

function Update () 
{
}


function createcloud(){
	for(var i=0;i<1;i++){
		var cloudinstance = Instantiate(prefabcloud,cloudSpawnPoint.position,cloudSpawnPoint.rotation);
		cloudinstance.transform.position.x=cloudSpawnPoint.position.x-Random.Range(i, i+230)+100;
		cloudinstance.transform.position.y=cloudSpawnPoint.position.y-Random.Range(0.1, 6);
	}
}