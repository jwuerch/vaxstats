
function structureData() {
	tableData = [];
	for (let i = 0; i < vaccinations.length; i++) {
		let x = 0;
		while (x < populations.length) {
			if (populations[x].countryiso3code == vaccinations[i].iso_code) {
				var population = populations[x].value;
				break;
			} else {
				var population = '';
			}
			x++;
		}
		/** Last Updated Date & Single Dose **/

		var date_length = vaccinations[i].data.length - 1;
		while (date_length > 0) {
			if (vaccinations[i].data[date_length].people_vaccinated != null) {
				var single_dose = vaccinations[i].data[date_length].people_vaccinated;
				var last_updated_single = vaccinations[i].data[date_length].date;
				break;
			}


			date_length--;
		}

		var date_length = vaccinations[i].data.length - 1;
		while (date_length > 0) {
			if(vaccinations[i].data[date_length].people_fully_vaccinated != null) {
				var double_dose = vaccinations[i].data[date_length].people_fully_vaccinated;
				var last_updated_double = vaccinations[i].data[date_length].date;
				break;
			}

			date_length--;

		}
		if (population == '') {
			single_dose_percent = '';
			double_dose_percent = '';
		} else {
			single_dose_percent = ((single_dose/population) * 100).toFixed(2) + '%';
			double_dose_percent = ((double_dose/population) * 100).toFixed(2) + '%';
		}

		function addCommas(value) {
			value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			return value;
		}

		function changeDateFormat(value) {
			var oldDate = value.split('-');
			var newDate = oldDate[1] + '-' + oldDate[2] + '-' + oldDate[0];
			return newDate;

		}

		population = addCommas(population);
		single_dose = addCommas(single_dose);
		double_dose = addCommas(double_dose);
		last_updated_double = changeDateFormat(last_updated_double);
		last_updated_single = changeDateFormat(last_updated_single);



		tableData.push({
			country: vaccinations[i].country,
			population: population,
			last_updated_single: last_updated_single,
			single_dose: single_dose,
			single_dose_percent: single_dose_percent,
			last_updated_double: last_updated_double,
			double_dose: double_dose,
			double_dose_percent: double_dose_percent,

		});
	}	
}


$('th').on('click', function () {
	let column = $(this).data('colname')
	let order = $(this).data('order')
	let text = $(this).html()
	text = text.substring(0, text.length - 1);
	if (order == 'desc') {
		tableData = tableData.sort((a, b) => a[column] > b[column] ? 1 : -1);
		$(this).data("order", "asc");
		text += '&#9660'
	} else {
		tableData = tableData.sort((a, b) => a[column] < b[column] ? 1 : -1);
		$(this).data("order", "desc");
		text += '&#9650'
	}

	$(this).html(text)
	buildTable(tableData);
});

$('#search-input').on('keyup', function () {
	let value = $(this).val();
	let data = searchTable(value);
	buildTable(data);
})

function searchTable(value) {
	let filteredData = [];

	for (let i = 0; i < tableData.length; i++) {
		value = value.toLowerCase();
		let name = tableData[i].country.toLowerCase();

		if (name.includes(value)) {
			filteredData.push(tableData[i]);
		}
	}


	
}

function buildTable(data) {
	let table = document.getElementById('myTable');

	table.innerHTML = '';
	for (let i = 0; i < data.length; i++) {
		let row = `<tr>
	                    <td>${tableData[i].country}</td>
	                    <td>${tableData[i].population}</td>
	                    <td class="tooltip-container">
	                		<div class="tooltip-content">
	                			<p>Last Updated: ${tableData[i].last_updated_single}</p>
	                			<p>At Least 1 Dose: ${tableData[i].single_dose}</p>
	                		</div>
	                		${tableData[i].single_dose_percent}
	                    </td>
	                    <td class="tooltip-container">
	                	
	                		<div class="tooltip-content">
	                			<p>Last Updated: ${tableData[i].last_updated_double}</p>
	                			<p>Fully Vaccinated: ${tableData[i].double_dose}</p>
	                		</div>
	                		${tableData[i].double_dose_percent}
	                    </td>
	               </tr>`
		table.innerHTML += row;
	}
}