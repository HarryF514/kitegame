function aniSprite(columnSize, rowSize,colFrameStart, rowFrameStart,totalFrames,framesPerSecond,gameobj)
{
	var index : int = Time.time * framesPerSecond;
	index = index % totalFrames;
	
	var size = Vector2 ( 1.0/columnSize, 1.0/rowSize);
	
	var u : int = index % columnSize;
	var v : int = index / columnSize;
	
	var offset = Vector2 ( (u+colFrameStart) * size.x, (1.0 - size.y) - (v + rowFrameStart) * size.y);
	
	gameobj.renderer.materials[0].mainTextureOffset = offset;
	gameobj.renderer.materials[0].mainTextureScale = size;
	//Debug.Log(gameobj.renderer.materials.length);
}

function gerModelVariable(gameObjName:String,modelName:String){
	var model = GameObject.FindGameObjectWithTag('mainGame').GetComponent(MainGameModel);
	return model;
}