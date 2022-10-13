let seconds = 0;
let minutes = 0;
let hours = 0;

let display;
let lamaWaktu;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours =  0;

let status = 'Stopped';
let interval = '';


function StartWatch()
{
	seconds++;

	if(seconds/60 === 1)
	{
		seconds=0;
		minutes++;

		if(minutes/60 === 1)
		{
			minutes=0;
			hours++;
		}
	}

	if(seconds < 10 )
	{
		displaySeconds = '0' + seconds.toString();
	}
	else
	{
		displaySeconds = seconds;
	}

	if(minutes < 10 )
	{
		displayMinutes = '0' + minutes.toString();
	}
	else
	{
		displayMinutes = minutes;
	}

	if(hours < 10 )
	{
		displayHours = '0' + hours.toString();
	}
	else
	{
		displayHours = hours;
	}

	document.getElementById('display').innerText = displayHours + ":" + displayMinutes + ":" + displaySeconds;
	display = hours +','+ minutes +','+ seconds;
	lamaWaktu = displayHours +':'+ displayMinutes +':'+ displaySeconds;
	localStorage.setItem('waktuTerakhir',display);
	document.getElementById('lama_perjalanan').value = lamaWaktu;
}

function play() {
	interval = window.setInterval(StartWatch,1000);
	status = 'Started';
}

function stop() {
	window.clearInterval(interval);
	status = 'Stopped';
}

const caption_main = document.querySelector('.caption-main'); 

if(caption_main.childNodes[1].nodeName === 'H3') {
	stop();
	localStorage.removeItem('waktuTerakhir')
	// console.log('oke');
}else {
	// console.log('ga oke')
	play();
}


function Reset()
{
	seconds = 0;
	hours = 0;
	minutes = 0;
	window.clearInterval(interval);
	document.getElementById('display').innerHTML = '00:00:00';
	status = 'Stopped';
}

window.onload = function(){
	let waktuTerakhir;
	let arr;

	waktuTerakhir  = localStorage.getItem('waktuTerakhir');

	if (waktuTerakhir == null) {
		waktuTerakhir;
		arr;
	}else{
		arr = waktuTerakhir.split(',');
		hours = arr[0];
		minutes = arr[1];
		seconds = arr[2];
	}

	var chart = new CanvasJS.Chart("chartContainer", {
	theme:"light2",
	animationEnabled: true,
	axisY :{
		title: "Jumlah Pasien",
	},
	toolTip: {
		shared: "true"
	},
	legend:{
		cursor:"pointer",
		itemclick : toggleDataSeries
	},
	data: [{
		type: "spline", 
		showInLegend: true,
		yValueFormatString: "## Pasien",
		name: "Terkonfirmasi",
        lineColor: "#269AD7",
		dataPoints: [
			{ label: "Depok", y: 175668 },
			{ label: "Bekasi", y: 175940 },
			{ label: "Jakarta", y: 1376074 },
			{ label: "Bogor", y: 63161 }
		]
	},
	{
		type: "spline", 
		showInLegend: true,
		yValueFormatString: "## Pasien",
		name: "Sembuh",
        lineColor: "mediumspringgreen",
		dataPoints: [
			{ label: "Depok", y: 164787 },
			{ label: "Bekasi", y: 135321 },
			{ label: "Jakarta", y: 1341152 },
			{ label: "Bogor", y: 61750 }
		]
	},
          {
		type: "spline", 
		showInLegend: true,
		yValueFormatString: "## Pasien",
		name: "Meninggal",
        lineColor: "red",
		dataPoints: [
			{ label: "Depok", y: 2256 },
			{ label: "Bekasi", y: 1180 },
			{ label: "Jakarta", y: 15471 },
			{ label: "Bogor", y: 548 }
		]
	}]
});
chart.render();

function toggleDataSeries(e) {
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	chart.render();
}

}
