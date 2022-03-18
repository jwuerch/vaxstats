var vaccinations = [];
var populations = [];
var tableData = [];

$(function () {
	getPopulations();
});

function csvJSON(csv) {
    const lines = csv.split('\n')
    const result = []
    const headers = lines[0].split(',')

    for (let i = 1; i < lines.length; i++) {        
        if (!lines[i])
            continue
        const obj = {}
        const currentline = lines[i].split(',')

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j]
        }
        result.push(obj)
    }
    return result
}

function getPopulations() {
	$.ajax({
		type:'GET',
		url: 'https://raw.githubusercontent.com/owid/covid-19-data/master/scripts/input/un/population_latest.csv',
		dataType: 'text',
		success: function(data) {
			populations = csvJSON(data)
			console.log('Population Data:', populations);
			getVaccinations();
		}
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