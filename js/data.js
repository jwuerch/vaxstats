var vaccinations = [];
var populations = [];
var tableData = [];

$(function () {
	getPopulations();
});

function getPopulations() {
	let rawbase = 'https://api.worldbank.org/v2/';
	let jsonloc = 'countries/all/indicators/SP.POP.TOTL?format=json&date=2020&per_page=300';
	$.getJSON(rawbase + jsonloc, function (data) {
		populations = data[1];
		console.log('Population Data:', populations);
		getVaccinations();
	});
}

function getVaccinations() {
	let rawbase = 'https://raw.githubusercontent.com/';
	let jsonloc = 'owid/covid-19-data/0dd36b226c30db7682dd7256438a500a314ce8e6/public/data/vaccinations/vaccinations.json';
	$.getJSON(rawbase + jsonloc, function (data) {
		vaccinations = data;
		structureData();
		console.log('Vaccination Data:', vaccinations);
		buildTable(tableData);
	});
}