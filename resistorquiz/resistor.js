var bandValues = new Array();
bandValues['black'] = 0;
bandValues['brown'] = 1;
bandValues['red'] = 2;
bandValues['orange'] = 3;
bandValues['yellow'] = 4;
bandValues['green'] = 5;
bandValues['blue'] = 6;
bandValues['violet'] = 7;
bandValues['gray'] = 8;
bandValues['white'] = 9;

var colourValues = new Array();
colourValues['black'] = "#000000";
colourValues['brown'] = "#654321";
colourValues['red'] = "#FF0000";
colourValues['orange'] = "#FF7F00";
colourValues['yellow'] = "#FFFF00";
colourValues['green'] = "#228B22";
colourValues['blue'] = "#0000CD";
colourValues['violet'] = "#9400D3";
colourValues['gray'] = "#808080";
colourValues['white'] = "#FFFFFF";
colourValues['silver'] = "#C0C0C0";
colourValues['gold'] = "#D4AF37";

var multiplierValues  = new Array(9);
multiplierValues['black'] = 1;
multiplierValues['brown'] = 10;
multiplierValues['red'] = 100;
multiplierValues['orange'] = 1000;
multiplierValues['yellow'] = 10000;
multiplierValues['green'] = 100000;
multiplierValues['blue'] = 1000000;
multiplierValues['silver'] = 0.01;
multiplierValues['gold'] = 0.1;

var randomBandValue = function(){
	var randomNumber=Math.floor(Math.random()*10);
	for (var s in bandValues)
    {
			if(bandValues[s] === randomNumber) {
            	return s;
			}
    }
};

var randomMultiplierValue = function(){
	var randomNumber=Math.floor(Math.random() * multiplierValues.length);
	var count = 0;
	for (i in multiplierValues) { 
		if(randomNumber === count) {
			return i;
		}
		count++;
	};

};


var resistor = {
	"band1" : randomBandValue(),
	"band2" : randomBandValue(),
	"multiplier" : randomMultiplierValue(),
	"tolerance" : 'blue',
	"resistorValue" : function(){
		var bands = bandValues[this.band1].toString() + bandValues[this.band2].toString();
		return Number(bands) * multiplierValues[this.multiplier];
	},
	"toString" : function(){
		return "Band1 " + this.band1 + " " + bandValues[this.band1].toString() + " Band2 " + this.band2 + " " + bandValues[this.band2].toString() + " Multiplier "+ this.multiplier + " " + multiplierValues[this.multipler] + " Tolerance " + this.tolerance + "\n";
	}
};

$(document).ready(function(){
 	$("#band1").css("background", colourValues[resistor.band1]);
 	$("#band2").css("background", colourValues[resistor.band2]);
 	$("#multiplier").css("background", colourValues[resistor.multiplier]);
 	$("#tolerance").css("background", colourValues[resistor.tolerance]);
 });
