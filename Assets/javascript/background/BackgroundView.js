#pragma strict
var backgroundModel: BackgroundModel;
backgroundModel = gameObject.GetComponent(BackgroundModel);	


function Start () {
	createAllActiveObj();
}

function Update () {
}

//create moving object that belong to the background
//para: name:the prefab name, position:position of the appear obj , rotation:the rotation of the appearing obj relative to the background, so set it to 0 0 0 and it will paraelle with the background
function createMovingObj(name,position:Vector3,rotation: Quaternion){
	 var clone:GameObject = Instantiate(Resources.Load(name),position,rotation);
	 clone.transform.localRotation= rotation;
	 clone.transform.parent=gameObject.transform;
	 clone.transform.localPosition= position;
     return clone;
}

function createAllActiveObj(){
	createMovingObj('cloud',new Vector3(0,-0.3,0),Quaternion.Euler(90,180,0));
	createMovingObj('bird',new Vector3(0,0.3,0),Quaternion.Euler(90,180,0));
	var matriArray = createMatrixArrayChild(['cloud']);
	for(var i=1;i<matriArray.length;i++){
		var isGenerate = i%7;
		var isGenerate2 = i%8;
		var isGenerate3 = i%9;
		var vector3:Vector3 = matriArray[i];
		if(isGenerate==0||isGenerate2==0)createMovingObj('cloud',matriArray[i],Quaternion.Euler(90,180,0));
		if(vector3.x<0&&isGenerate2==0)createMovingObj('bird',matriArray[i],Quaternion.Euler(90,180,0));
		if(isGenerate3==0)createMovingObj('Dandelion',matriArray[i],Quaternion.Euler(90,180,0));
	}
}
//create matrix array, each box can locate one obj. 
//return an array list all the vector3 parameter.
function createMatrixArray(gameObjTagArray:String[]){
	var width = gameObject.transform.localScale.x;
	var height = gameObject.transform.localScale.z;
	var maxScaleX=0.0;
	var maxScaleZ=0.0;
	for(var gameObjTag in gameObjTagArray){
		var Obj:GameObject=GameObject.FindWithTag (gameObjTag);
		if(Obj!=null){ 
			if(maxScaleX<Obj.transform.localScale.x){
				maxScaleX=Obj.transform.localScale.x;
			}
			if(maxScaleZ<Obj.transform.localScale.z){
				maxScaleZ=Obj.transform.localScale.z;
			}
		}
	}
	var horizontalGridNumber = Mathf.Round(width/maxScaleX);
	var vertialGridNumber = Mathf.Round(height/maxScaleZ);
	var matrixArray = new Array();
	for(var x=0;x<horizontalGridNumber;x++){
		for(var y=0;y<vertialGridNumber;y++){
			matrixArray.Push(Vector3(x*maxScaleX,y*maxScaleZ,0));
		}
	}
	return matrixArray;
}

//same function as above, but when the cloud, dandelion is child of the background
function createMatrixArrayChild(gameObjTagArray:String[]){
	
	var maxScaleX=0.0;
	var maxScaleZ=0.0;
	for(var gameObjTag in gameObjTagArray){
		
		var Obj:GameObject=GameObject.FindWithTag (gameObjTag);
		if(Obj!=null){ 
			if(maxScaleX<Obj.transform.localScale.x){
				maxScaleX=Obj.transform.localScale.x;
			}
			if(maxScaleZ<Obj.transform.localScale.z){
				maxScaleZ=Obj.transform.localScale.z;
			}
		}
	}
	var matrixArray = new Array();
//	Debug.Log(maxScaleX);
	var numberofZ = Mathf.Round(1/maxScaleZ); 
	var numberofX = Mathf.Round(1/maxScaleX); 
	for(var x=0;x<numberofX;x++){
		for(var y=0;y<numberofZ;y++){
			matrixArray.Push(Vector3(-5+x*maxScaleX*10+maxScaleX*10/2,0.1,-5+y*maxScaleZ*10+maxScaleZ*10/2));
		}
	}
	return matrixArray;
}