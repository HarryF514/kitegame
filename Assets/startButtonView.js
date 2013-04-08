#pragma strict
var originalColor;
function Start () {
	originalColor = guiTexture.color;
}

function Update () {
	
}

function OnMouseOver () {
    guiTexture.color = Color.white;
} 

function OnMouseExit () {
   guiTexture.color = originalColor;
} 

function OnMouseDown () {
    Application.LoadLevel (1);
}