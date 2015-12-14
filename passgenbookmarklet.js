generate = function () {
var atoz = "abcdefghijklmnopqrstuvwxyz";
var atozcap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var symbols = document.getElementById("symbols").value;
var charset = '';
if (document.getElementById("capslets").checked) charset += atozcap;
if (document.getElementById("lowlets").checked) charset += atoz;
if (document.getElementById("numbers").checked) charset += nums;
if (document.getElementById("symbolcheckbox").checked) charset += symbols;
var password='';
var numchars = document.getElementById("maxchars").value;
//courtesy of http://stackoverflow.com/questions/4083204/secure-random-numbers-in-javascript
if (window.crypto && window.crypto.getRandomValues) {
	var randomWords = new Uint32Array(numchars);
	window.crypto.getRandomValues(randomWords);	
	for (i in randomWords) {
		randomWords[i] = randomWords[i]/(4294967295/charset.length); //Random / (Max Int Value / Charset)
		password += charset[randomWords[i]];
	}
}
// Because of course IE calls it msCrypto instead of being standard
else if (window.msCrypto && window.msCrypto.getRandomValues) {
	"use strict";
	var randomWords = new Uint32Array(parseInt(numchars)); //Internet Explorer is ridiculous and doesn't recognise numchars as an integer.
	msCrypto.getRandomValues(randomWords);
	for (i in randomWords) {
		randomWords[i] = randomWords[i]/(4294967295/charset.length);
		password += charset[randomWords[i]];
	}
} else { //no in built secure CSPRNG
	for(var i=0;i<numchars;i++) {
	var rand = Math.floor(Math.random() * (charset.length - 1 +1));
	password += charset[rand];
	}
}
document.getElementById("genpassword").value = password;
document.getElementById("genpassword").select();
};
closemodal = function () {
document.body.removeChild(document.getElementById("options"));
};
var div = document.createElement("div");
div.style.zIndex = "10000";
div.style.position = "fixed";
div.style.top = "100px";
div.style.left = "200px";
div.style.backgroundColor = "#fff";
div.style.border="thin outset black";
div.style.width = "300px";
div.innerHTML = "Password: <input type='text' id='genpassword' maxlength='999' size='12' value='To be generated'/><br>Max Chars: <input type='text' id='maxchars' maxlength='3' size='1' value='12'/><br>Allowed: A-Z<input type='checkbox' id='capslets' checked='checked'/> a-z <input type='checkbox'id='lowlets' checked='checked'/> 0-9 <input type='checkbox' id='numbers' checked='checked'/> Symbols<input type='checkbox' id='symbolcheckbox'/><input type='text' id='symbols' size='10' value='~!@#$%^&*()_+`-=[]\{}|;:,./<>?'/><input type='button' value='Generate' onclick='generate()'/><input type='button' value='Close' onclick='closemodal()'/>";
div.id = "options";
document.body.appendChild(div);