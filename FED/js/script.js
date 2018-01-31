
console.log("ey yoooo");

function oranjemaken(){
	
		//document.getElementById('uitgelichtheader').classList.add("oranje");
		//document.getElementById('uitgelichtplusje').innerHTML= ("-");
		//console.log('if');

		//document.getElementById('uitgelichtheader').classList.remove("oranje");
		//document.getElementById('uitgelichtplusje').innerHTML= ("+");
		//console.log("else");
	

	var x = document.getElementById("uitgelichtheader");
    if (x.className == "oranje" ) {
        x.classList.remove("oranje");
        document.getElementById('uitgelichtplusje').innerHTML= ("+");
        console.log('if');
    } else {
        x.classList.add("oranje");
        document.getElementById('uitgelichtplusje').innerHTML= ("-");
        console.log("else");
    }


};
function donkermaken(){
	
		//document.getElementById('uitgelichtheader').classList.add("oranje");
		//document.getElementById('uitgelichtplusje').innerHTML= ("-");
		//console.log('if');

		//document.getElementById('uitgelichtheader').classList.remove("oranje");
		//document.getElementById('uitgelichtplusje').innerHTML= ("+");
		//console.log("else");
	

	var x = document.querySelector('body');
    if (x.className == "donkerbody" ) {
        x.classList.remove("donkerbody");
        document.getElementById('randombutton').innerHTML= ("Donker thema");
        console.log('if');
    } else {
        x.classList.add("donkerbody");
        document.getElementById('randombutton').innerHTML= ("Licht thema");
        console.log("else");
    }
};





function volgendeverhaal(){
	console.log("het werkt joe!");
	document.querySelector(".uitgelicht").classList.add("nieuwverhaal");
	document.querySelector("#uitgelichtheader>h3").innerHTML=("Vrijdag de 13e");
	document.querySelector(".uitgelichtverhaal>p").innerHTML=("Bij het uitstappen van de bus waait mijn jas open, precies op het moment dat de buschauffeur de deuren sluit. Terwijl ik de kinderwagen waarin mijn zoon ligt te krijsen vasthoudt, ren ik mee met de bus en schreeuw ik naar de buschauffeur dat hij moet stoppen. Maar hij hoort me niet, de bus draait […]");
}
function vorigeverhaal(){
	console.log("het werkt JOEEE!");
	document.querySelector(".uitgelicht").classList.remove("nieuwverhaal");
	document.querySelector("#uitgelichtheader>h3").innerHTML=("Anima");
	document.querySelector(".uitgelichtverhaal>p").innerHTML=("Ik wordt uit de bus gerold. Mijn wielen rollen over de nat geworden stenen van het stationsplein. Ik wordt voortgeduwd door een homp bleek vlees[…] ");
}





var plusje = document.getElementById('uitgelichtplusje').addEventListener('click',oranjemaken);

var randomknoppie = document.getElementById('randombutton').addEventListener('click', donkermaken);
var pijlknoppierechts = document.querySelector('#pijltjerechts').addEventListener('click',volgendeverhaal);
var pijlknoppielinks = document.querySelector('#pijltjelinks').addEventListener('click',vorigeverhaal);